/**
 * External dependencies
 */
import { select, dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_KEY as PAYMENT_METHOD_DATA_STORE_KEY } from './constants';

export const setDefaultPaymentMethod = async ( methods: string[] ) => {
	const paymentMethodKeys = methods;

	const expressPaymentMethodKeys = select(
		PAYMENT_METHOD_DATA_STORE_KEY
	).getAvailableExpressPaymentMethods();

	const allPaymentMethodKeys = [
		...paymentMethodKeys,
		...expressPaymentMethodKeys,
	];

	const savedPaymentMethods = select(
		PAYMENT_METHOD_DATA_STORE_KEY
	).getSavedPaymentMethods();

	const savedPaymentMethod =
		Object.keys( savedPaymentMethods ).flatMap(
			( type ) => savedPaymentMethods[ type ]
		)[ 0 ] || undefined;

	if ( savedPaymentMethod ) {
		const token = savedPaymentMethod.tokenId.toString();
		const paymentMethodSlug = savedPaymentMethod.method.gateway;

		const savedTokenKey = `wc-${ paymentMethodSlug }-payment-token`;

		dispatch( PAYMENT_METHOD_DATA_STORE_KEY ).setActivePaymentMethod(
			paymentMethodSlug,
			{
				token,
				payment_method: paymentMethodSlug,
				[ savedTokenKey ]: token,
				isSavedToken: true,
			}
		);
		return;
	}

	const activePaymentMethod = select(
		PAYMENT_METHOD_DATA_STORE_KEY
	).getActivePaymentMethod();

	// Return if current method is valid.
	if (
		activePaymentMethod &&
		allPaymentMethodKeys.includes( activePaymentMethod )
	) {
		return;
	}

	dispatch( PAYMENT_METHOD_DATA_STORE_KEY ).setPaymentStatus( {
		isPristine: true,
	} );

	dispatch( PAYMENT_METHOD_DATA_STORE_KEY ).setActivePaymentMethod(
		paymentMethodKeys[ 0 ]
	);
};
