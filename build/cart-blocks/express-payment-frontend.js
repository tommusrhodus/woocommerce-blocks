(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[24],{152:function(e,t,n){"use strict";var r=n(4),c=n.n(r),o=n(23),a=n.n(o),s=n(0),i=["srcElement","size"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,o=a()(e,i);return Object(s.isValidElement)(t)?Object(s.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},o)):null}},212:function(e,t,n){"use strict";var r=n(4),c=n.n(r),o=n(5),a=n.n(o),s=n(1),i=n(318),l=n(187),u=n(0),b=n(36),p=n(173),m=n(45),O=n.n(m),d=n(213);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=Object(b.a)().isEditor,t=Object(p.b)(),n=t.setActivePaymentMethod,r=t.setExpressPaymentError,c=t.activePaymentMethod,o=t.paymentMethodData,m=t.setPaymentStatus,f=Object(i.a)(),y=Object(l.a)().paymentMethods,E=Object(u.useRef)(c),g=Object(u.useRef)(o),v=Object(u.useCallback)((function(e){return function(){E.current=c,g.current=o,m().started({}),n(e)}}),[c,o,n,m]),w=Object(u.useCallback)((function(){m().pristine(),n(E.current),g.current.isSavedToken&&m().started(g.current)}),[n,m]),P=Object(u.useCallback)((function(e){m().error(e),r(e),n(E.current),g.current.isSavedToken&&m().started(g.current)}),[n,m,r]),h=Object(u.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";O()("Express Payment Methods should use the provided onError handler instead.",{alternative:"onError",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228"}),e?P(e):r("")}),[r,P]),k=Object.entries(y),R=k.length>0?k.map((function(t){var n=a()(t,2),r=n[0],c=n[1],o=e?c.edit:c.content;return Object(u.isValidElement)(o)?React.createElement("li",{key:r,id:"express-payment-method-".concat(r)},Object(u.cloneElement)(o,j(j({},f),{},{onClick:v(r),onClose:w,onError:P,setExpressPaymentError:h}))):null})):React.createElement("li",{key:"noneRegistered"},Object(s.__)("No registered Payment Methods","woo-gutenberg-products-block"));return React.createElement(d.a,{isEditor:e},React.createElement("ul",{className:"wc-block-components-express-payment__event-buttons"},R))}},264:function(e,t){},338:function(e,t,n){"use strict";var r=n(1),c=n(187),o=n(35),a=n(48),s=n(173),i=n(103),l=n(105),u=n(212);n(264),t.a=function(){var e=Object(c.a)(),t=e.paymentMethods,n=e.isInitialized,b=Object(o.c)().noticeContexts,p=Object(a.b)(),m=p.isCalculating,O=p.isProcessing,d=p.isAfterProcessing,f=p.isBeforeProcessing,j=p.isComplete,y=p.hasError,E=Object(s.b)().currentStatus;if(!n||n&&0===Object.keys(t).length)return null;var g=O||d||f||j&&!y;return React.createElement(React.Fragment,null,React.createElement(l.a,{isLoading:m||g||E.isDoingExpressPayment},React.createElement("div",{className:"wc-block-components-express-payment wc-block-components-express-payment--cart"},React.createElement("div",{className:"wc-block-components-express-payment__content"},React.createElement(i.a,{context:b.EXPRESS_PAYMENTS},React.createElement(u.a,null))))),React.createElement("div",{className:"wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--cart"},Object(r.__)("Or","woo-gutenberg-products-block")))}},402:function(e,t,n){"use strict";n.r(t);var r=n(32),c=n(338);t.default=function(){return Object(r.a)().cartNeedsPayment?React.createElement("div",{className:"wc-block-cart__payment-options"},React.createElement(c.a,null)):null}}}]);