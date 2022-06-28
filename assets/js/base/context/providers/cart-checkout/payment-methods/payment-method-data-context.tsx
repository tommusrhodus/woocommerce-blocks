/**
 * External dependencies
 */
import {
	createContext,
	useContext,
	useReducer,
	useRef,
	useEffect,
	useMemo,
} from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	CHECKOUT_STORE_KEY,
	PAYMENT_METHOD_DATA_STORE_KEY,
} from '@woocommerce/block-data';

/**
 * Internal dependencies
 */
import type {
	CustomerPaymentMethods,
	PaymentMethodDataContextType,
} from '../../../../../data/payment-methods/types';
import { DEFAULT_PAYMENT_METHOD_DATA } from './constants';
import { usePaymentMethods } from './use-payment-method-registration';
import { useEditorContext } from '../../editor-context';
import { useEventEmitters, reducer as emitReducer } from './event-emit';
import { useValidationContext } from '../../validation';
import { useEmitResponse } from '../../../hooks/use-emit-response';
import { useCustomerData } from '../../../hooks/use-customer-data';

const PaymentMethodDataContext = createContext( DEFAULT_PAYMENT_METHOD_DATA );

export const usePaymentMethodDataContext = (): PaymentMethodDataContextType => {
	return useContext( PaymentMethodDataContext );
};

/**
 * PaymentMethodDataProvider is automatically included in the CheckoutDataProvider.
 *
 * This provides the api interface (via the context hook) for payment method status and data.
 *
 * @param {Object} props          Incoming props for provider
 * @param {Object} props.children The wrapped components in this provider.
 */
export const PaymentMethodDataProvider = ( {
	children,
}: {
	children: React.ReactNode;
} ): JSX.Element => {
	const {
		isProcessing: checkoutIsProcessing,
		isIdle: checkoutIsIdle,
		isCalculating: checkoutIsCalculating,
		hasError: checkoutHasError,
	} = useSelect( ( select ) => {
		const store = select( CHECKOUT_STORE_KEY );
		return {
			isProcessing: store.isProcessing(),
			isIdle: store.isIdle(),
			hasError: store.hasError(),
			isCalculating: store.isCalculating(),
		};
	} );
	const { currentStatus, enabledCustomerPaymentMethods } = useSelect(
		( select ) => {
			const store = select( PAYMENT_METHOD_DATA_STORE_KEY );

			return {
				currentStatus: store.getCurrentStatus(),
				registeredExpressPaymentMethods:
					store.getRegisteredExpressPaymentMethods(),
				errorMessage: store.getErrorMessage(),
				enabledCustomerPaymentMethods:
					store.getEnabledCustomerPaymentMethods(),
			};
		}
	);
	const { isEditor, getPreviewData } = useEditorContext();
	const { setValidationErrors } = useValidationContext();
	const { createErrorNotice, removeNotice } = useDispatch( 'core/notices' );
	const {
		isSuccessResponse,
		isErrorResponse,
		isFailResponse,
		noticeContexts,
	} = useEmitResponse();
	const [ observers, observerDispatch ] = useReducer( emitReducer, {} );
	const { onPaymentProcessing } = useEventEmitters( observerDispatch );
	const currentObservers = useRef( observers );

	// ensure observers are always current.
	useEffect( () => {
		currentObservers.current = observers;
	}, [ observers ] );

	const {
		setPaymentStatus,
		setRegisteredPaymentMethods,
		setPaymentMethodData,
		emitProcessingEvent: emitPaymentProcessingEvent,
	} = useDispatch( PAYMENT_METHOD_DATA_STORE_KEY );
	const { setBillingAddress, setShippingAddress } = useCustomerData();

	const paymentMethodsInitialized = usePaymentMethods(
		setRegisteredPaymentMethods
	);

	// const expressPaymentMethodsInitialized = useExpressPaymentMethods(
	// 	dispatchActions.setRegisteredExpressPaymentMethods
	// ); //TODO initialize setRegisteredExpressPaymentMethods

	const customerPaymentMethods = useMemo( (): CustomerPaymentMethods => {
		if ( isEditor ) {
			return getPreviewData(
				'previewSavedPaymentMethods'
			) as CustomerPaymentMethods;
		}
		return paymentMethodsInitialized ? enabledCustomerPaymentMethods : {};
	}, [
		isEditor,
		getPreviewData,
		paymentMethodsInitialized,
		enabledCustomerPaymentMethods,
	] );

	// flip payment to processing if checkout processing is complete, there are no errors, and payment status is started.
	useEffect( () => {
		if (
			checkoutIsProcessing &&
			! checkoutHasError &&
			! checkoutIsCalculating &&
			! currentStatus.isFinished
		) {
			setPaymentStatus( { isProcessing: true } );
		}
	}, [
		checkoutIsProcessing,
		checkoutHasError,
		checkoutIsCalculating,
		currentStatus.isFinished,
		setPaymentStatus,
	] );

	// When checkout is returned to idle, set payment status to pristine but only if payment status is already not finished.
	useEffect( () => {
		if ( checkoutIsIdle && ! currentStatus.isSuccessful ) {
			setPaymentStatus( { isPristine: true } );
		}
	}, [ checkoutIsIdle, currentStatus.isSuccessful, setPaymentStatus ] );

	// if checkout has an error sync payment status back to pristine.
	useEffect( () => {
		if ( checkoutHasError && currentStatus.isSuccessful ) {
			setPaymentStatus( { isPristine: true } );
		}
	}, [ checkoutHasError, currentStatus.isSuccessful, setPaymentStatus ] );

	// Emit the payment processing event
	useEffect( () => {
		// Note: the nature of this event emitter is that it will bail on any
		// observer that returns a response that !== true. However, this still
		// allows for other observers that return true for continuing through
		// to the next observer (or bailing if there's a problem).
		if ( currentStatus.isProcessing ) {
			emitPaymentProcessingEvent(
				currentObservers.current,
				setValidationErrors
			);
		}
	}, [
		currentStatus.isProcessing,
		setValidationErrors,
		setPaymentStatus,
		removeNotice,
		noticeContexts.PAYMENTS,
		isSuccessResponse,
		isFailResponse,
		isErrorResponse,
		createErrorNotice,
		setBillingAddress,
		setPaymentMethodData,
		setShippingAddress,
		emitPaymentProcessingEvent,
	] );

	const paymentContextData: PaymentMethodDataContextType = {
		onPaymentProcessing,
		customerPaymentMethods,
	};

	return (
		<PaymentMethodDataContext.Provider value={ paymentContextData }>
			{ children }
		</PaymentMethodDataContext.Provider>
	);
};
