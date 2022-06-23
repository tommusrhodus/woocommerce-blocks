/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { STATUS } from '../../base/context/providers/cart-checkout/payment-methods/constants';
import { checkPaymentMethodsCanPay } from './check-payment-methods';
import { setDefaultPaymentMethod } from './set-default-payment-method';

export const setPaymentStatus = ( status: STATUS, errorMessage = '' ) => ( {
	type: ACTION_TYPES.SET_PAYMENT_STATUS,
	status,
	errorMessage,
} );

export const setPaymentMethodsInitialized = ( initialized: boolean ) => {
	return async ( { select, dispatch } ) => {
		// If the currently selected method is not in this new list, then we need to select a new one, or select a default.
		const methods = select.getAvailablePaymentMethods();
		if ( initialized ) {
			await setDefaultPaymentMethod( methods );
		}
		dispatch( {
			type: ACTION_TYPES.SET_PAYMENT_METHODS_INITIALIZED,
			initialized,
		} );
	};
};

export const setExpressPaymentMethodsInitialized = (
	initialized: boolean
) => ( {
	type: ACTION_TYPES.SET_EXPRESS_PAYMENT_METHODS_INITIALIZED,
	initialized,
} );

export const setShouldSavePaymentMethod = (
	shouldSavePaymentMethod: boolean
) => ( {
	type: ACTION_TYPES.SET_SHOULD_SAVE_PAYMENT_METHOD,
	shouldSavePaymentMethod,
} );

export const setActivePaymentMethod = (
	activePaymentMethod: string,
	paymentMethodData: Record< string, unknown > = {}
) => ( {
	type: ACTION_TYPES.SET_ACTIVE_PAYMENT_METHOD,
	activePaymentMethod,
	paymentMethodData,
} );

export const setAvailablePaymentMethods = ( methods: string[] ) => {
	return async ( { dispatch } ) => {
		// If the currently selected method is not in this new list, then we need to select a new one, or select a default.
		await setDefaultPaymentMethod( methods );
		dispatch( {
			type: ACTION_TYPES.SET_AVAILABLE_PAYMENT_METHODS,
			methods,
		} );
	};
};

export const setAvailableExpressPaymentMethods = ( methods: string[] ) => ( {
	type: ACTION_TYPES.SET_AVAILABLE_EXPRESS_PAYMENT_METHODS,
	methods,
} );

export function addRegisteredPaymentMethod() {
	return async ( { dispatch } ) => {
		const registered = await checkPaymentMethodsCanPay();
		if ( registered ) {
			dispatch( setPaymentMethodsInitialized( true ) );
		}
	};
}

export const removeRegisteredPaymentMethod = ( name: string ) => ( {
	type: ACTION_TYPES.ADD_REGISTERED_PAYMENT_METHOD,
	name,
} );

export function addRegisteredExpressPaymentMethod() {
	return async ( { dispatch } ) => {
		const registered = await checkPaymentMethodsCanPay( true );
		if ( registered ) {
			dispatch( setExpressPaymentMethodsInitialized( true ) );
		}
	};
}

export const removeRegisteredExpressPaymentMethod = ( name: string ) => ( {
	type: ACTION_TYPES.ADD_REGISTERED_EXPRESS_PAYMENT_METHOD,
	name,
} );
