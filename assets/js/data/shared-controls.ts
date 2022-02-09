/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import triggerFetch, { APIFetchOptions } from '@wordpress/api-fetch';
import DataLoader from 'dataloader';
import { isWpVersion } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import {
	assertBatchResponseIsValid,
	assertResponseIsValid,
	ApiResponse,
} from './types';

/**
 * Dispatched a control action for triggering an api fetch call with no parsing.
 * Typically this would be used in scenarios where headers are needed.
 *
 * @param {APIFetchOptions} options The options for the API request.
 */
export const apiFetchWithHeaders = ( options: APIFetchOptions ) =>
	( {
		type: 'API_FETCH_WITH_HEADERS',
		options,
	} as const );

const EMPTY_OBJECT = {};

/**
 * Error thrown when JSON cannot be parsed.
 */
const invalidJsonError = {
	code: 'invalid_json',
	message: __(
		'The response is not a valid JSON response.',
		'woo-gutenberg-products-block'
	),
};

const setNonceOnFetch = ( headers: Headers ): void => {
	if (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore -- this does exist because it's monkey patched in
		// middleware/store-api-nonce.
		triggerFetch.setNonce &&
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore -- this does exist because it's monkey patched in
		// middleware/store-api-nonce.
		typeof triggerFetch.setNonce === 'function'
	) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore -- this does exist because it's monkey patched in
		// middleware/store-api-nonce.
		triggerFetch.setNonce( headers );
	} else {
		// eslint-disable-next-line no-console
		console.error(
			'The monkey patched function on APIFetch, "setNonce", is not present, likely another plugin or some other code has removed this augmentation'
		);
	}
};

interface BatchAbortController {
	paths: string[];
	controller: AbortController;
	id: number;
}
let controllers: BatchAbortController[] = [];

const findAbortControllerForBatchRequest = (
	requests: APIFetchOptions[]
): AbortController | undefined => {
	const paths = requests.map( ( request ) => request?.path );
	const matchedController = controllers.find( ( controller ) => {
		return controller.paths.every( ( path ) => paths.includes( path ) );
	} );
	return matchedController?.controller;
};

const addAbortControllerForBatchRequest = (
	requests: APIFetchOptions[]
): BatchAbortController => {
	const paths = requests
		.map( ( request ) => request.path )
		.filter( Boolean ) as string[];
	const newController = {
		paths,
		controller: new AbortController(),
		id: controllers.length,
	};
	controllers.push( newController );
	return newController;
};

/**
 * Trigger a fetch from the API using the batch endpoint.
 */
const triggerBatchFetch = ( keys: readonly APIFetchOptions[] ) => {
	const requests = keys.map( ( request: APIFetchOptions ) => {
		return {
			...request,
			body: request?.data,
		};
	} );
	const matchedAbortController = findAbortControllerForBatchRequest(
		requests
	);
	if ( matchedAbortController ) {
		matchedAbortController.abort();
	}
	const { id: requestId, controller } = addAbortControllerForBatchRequest(
		requests
	);
	return triggerFetch( {
		path: `/wc/store/batch`,
		method: 'POST',
		signal: controller?.signal,
		data: {
			requests,
		},
	} )
		.then( ( response: unknown ) => {
			assertBatchResponseIsValid( response );
			return keys.map(
				( key, index: number ) =>
					response.responses[ index ] || EMPTY_OBJECT
			);
		} )
		.finally( () => {
			// Reset controllers to not contain this one, now the request has completed.
			controllers = controllers.filter(
				( batchAbortController ) =>
					batchAbortController.id !== requestId
			);
		} );
};

/**
 * In ms, how long we should wait for requests to batch.
 *
 * DataLoader collects all requests over this window of time (and as a consequence, adds this amount of latency).
 */
const triggerBatchFetchDelay = 300;

/**
 * DataLoader instance for triggerBatchFetch.
 */
const triggerBatchFetchLoader = new DataLoader( triggerBatchFetch, {
	batchScheduleFn: ( callback: () => void ) =>
		setTimeout( callback, triggerBatchFetchDelay ),
	cache: false,
	maxBatchSize: 25,
} );

/**
 * Trigger a fetch from the API using the batch endpoint.
 *
 * @param {APIFetchOptions} request Request object containing API request.
 */
const batchFetch = async ( request: APIFetchOptions ) => {
	return await triggerBatchFetchLoader.load( request );
};

/**
 * Default export for registering the controls with the store.
 *
 * @return {Object} An object with the controls to register with the store on
 *                  the controls property of the registration object.
 */
export const controls = {
	API_FETCH_WITH_HEADERS: ( {
		options,
	}: ReturnType< typeof apiFetchWithHeaders > ): Promise< unknown > => {
		return new Promise( ( resolve, reject ) => {
			// GET Requests cannot be batched.
			if (
				! options.method ||
				options.method === 'GET' ||
				isWpVersion( '5.6', '<' )
			) {
				// Parse is disabled here to avoid returning just the body--we also need headers.
				triggerFetch( {
					...options,
					parse: false,
				} )
					.then( ( fetchResponse ) => {
						fetchResponse
							.json()
							.then( ( response ) => {
								resolve( {
									response,
									headers: fetchResponse.headers,
								} );
								setNonceOnFetch( fetchResponse.headers );
							} )
							.catch( () => {
								reject( invalidJsonError );
							} );
					} )
					.catch( ( errorResponse ) => {
						setNonceOnFetch( errorResponse.headers );
						if ( typeof errorResponse.json === 'function' ) {
							// Parse error response before rejecting it.
							errorResponse
								.json()
								.then( ( error: unknown ) => {
									reject( error );
								} )
								.catch( () => {
									reject( invalidJsonError );
								} );
						} else {
							reject( errorResponse.message );
						}
					} );
			} else {
				batchFetch( options )
					.then( ( response: ApiResponse ) => {
						assertResponseIsValid( response );

						if ( response.status >= 200 && response.status < 300 ) {
							resolve( {
								response: response.body,
								headers: response.headers,
							} );
							setNonceOnFetch( response.headers );
						}

						// Status code indicates error.
						throw response;
					} )
					.catch( ( errorResponse: ApiResponse ) => {
						if ( errorResponse.headers ) {
							setNonceOnFetch( errorResponse.headers );
						}
						if ( errorResponse.body ) {
							reject( errorResponse.body );
						} else {
							reject();
						}
					} );
			}
		} );
	},
};
