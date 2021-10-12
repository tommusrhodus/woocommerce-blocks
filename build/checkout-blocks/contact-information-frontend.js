(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[34],{175:function(e,t,n){"use strict";var c=n(14),r=n.n(c),a=n(23),o=n.n(a),i=n(6),l=n.n(i),s=(n(10),n(248),["children","className","headingLevel"]);t.a=function(e){var t=e.children,n=e.className,c=e.headingLevel,a=o()(e,s),i=l()("wc-block-components-title",n),u="h".concat(c);return React.createElement(u,r()({className:i},a),t)}},206:function(e,t){},248:function(e,t){},250:function(e,t){},258:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n(10);var c=n(127),r=(n(250),function(e){var t=e.errorMessage,n=void 0===t?"":t,r=e.propertyName,a=void 0===r?"":r,o=e.elementId,i=void 0===o?"":o,l=Object(c.b)(),s=l.getValidationError,u=l.getValidationErrorId;if(!n||"string"!=typeof n){var d=s(a)||{};if(!d.message||d.hidden)return null;n=d.message}return React.createElement("div",{className:"wc-block-components-validation-error",role:"alert"},React.createElement("p",{id:u(i)},n))})},276:function(e,t,n){"use strict";var c=n(14),r=n.n(c),a=n(4),o=n.n(a),i=n(5),l=n.n(i),s=n(23),u=n.n(s),d=n(1),b=n(3),p=n(6),f=n.n(p),m=n(127),g=n(48),h=n(258),v=n(24),O=n(49),w=n(0),j=n(51),k=(n(206),["className","id","type","ariaLabel","ariaDescribedBy","label","screenReaderLabel","disabled","help","autoCapitalize","autoComplete","value","onChange","required","onBlur","feedback"]),E=Object(b.forwardRef)((function(e,t){var n=e.className,c=e.id,a=e.type,o=void 0===a?"text":a,i=e.ariaLabel,s=e.ariaDescribedBy,d=e.label,b=e.screenReaderLabel,p=e.disabled,m=e.help,g=e.autoCapitalize,h=void 0===g?"off":g,v=e.autoComplete,O=void 0===v?"off":v,E=e.value,y=void 0===E?"":E,R=e.onChange,_=e.required,N=void 0!==_&&_,C=e.onBlur,P=void 0===C?function(){}:C,S=e.feedback,D=u()(e,k),B=Object(w.useState)(!1),I=l()(B,2),x=I[0],A=I[1];return React.createElement("div",{className:f()("wc-block-components-text-input",n,{"is-active":x||y})},React.createElement("input",r()({type:o,id:c,value:y,ref:t,autoCapitalize:h,autoComplete:O,onChange:function(e){R(e.target.value)},onFocus:function(){return A(!0)},onBlur:function(e){P(e.target.value),A(!1)},"aria-label":i||d,disabled:p,"aria-describedby":m&&!s?c+"__help":s,required:N},D)),React.createElement(j.a,{label:d,screenReaderLabel:b||d,wrapperElement:"label",wrapperProps:{htmlFor:c},htmlFor:c}),!!m&&React.createElement("p",{id:c+"__help",className:"wc-block-components-text-input__help"},m),S)})),y=["className","instanceId","id","ariaDescribedBy","errorId","validateOnMount","focusOnMount","onChange","showError","errorMessage"];t.a=Object(v.withInstanceId)((function(e){var t=e.className,n=e.instanceId,c=e.id,a=e.ariaDescribedBy,i=e.errorId,s=e.validateOnMount,p=void 0===s||s,v=e.focusOnMount,w=void 0!==v&&v,j=e.onChange,k=e.showError,R=void 0===k||k,_=e.errorMessage,N=void 0===_?"":_,C=u()(e,y),P=Object(b.useState)(!0),S=l()(P,2),D=S[0],B=S[1],I=Object(b.useRef)(null),x=Object(m.b)(),A=x.getValidationError,F=x.hideValidationError,L=x.setValidationErrors,M=x.clearValidationError,V=x.getValidationErrorId,q=Object(g.b)().isBeforeProcessing,z=void 0!==c?c:"textinput-"+n,H=void 0!==i?i:z,W=Object(b.useCallback)((function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=I.current||null;if(t){t.value=t.value.trim();var n=t.checkValidity();n?M(H):L(o()({},H,{message:t.validationMessage||Object(d.__)("Invalid value.","woo-gutenberg-products-block"),hidden:e}))}}),[M,H,L]);Object(b.useEffect)((function(){var e;D&&(w&&(null===(e=I.current)||void 0===e||e.focus()),B(!1))}),[w,D,B]),Object(b.useEffect)((function(){D&&(p&&W(),B(!1))}),[D,B,p,W]),Object(b.useEffect)((function(){q&&W()}),[q,W]),Object(b.useEffect)((function(){return function(){M(H)}}),[M,H]);var J=A(H)||{};Object(O.c)(N)&&""!==N&&(J.message=N);var T=J.message&&!J.hidden,G=R&&T&&V(H)?V(H):a;return React.createElement(E,r()({className:f()(t,{"has-error":T}),"aria-invalid":!0===T,id:z,onBlur:function(){W(!1)},feedback:R&&React.createElement(h.a,{errorMessage:N,propertyName:H}),ref:I,onChange:function(e){F(H),j(e)},ariaDescribedBy:G},C))}))},345:function(e,t,n){"use strict";var c=n(14),r=n.n(c),a=n(188);t.a=function(e){return function(t){return function(n){var c=Object(a.a)(e,n);return React.createElement(t,r()({},n,c))}}}},346:function(e,t){},347:function(e,t,n){"use strict";var c=n(14),r=n.n(c),a=n(23),o=n.n(a),i=n(24),l=n(6),s=n.n(l),u=(n(348),["className","label","id","instanceId","onChange","children","hasError"]);t.a=Object(i.withInstanceId)((function(e){var t=e.className,n=e.label,c=e.id,a=e.instanceId,i=e.onChange,l=e.children,d=e.hasError,b=void 0!==d&&d,p=o()(e,u),f=c||"checkbox-control-".concat(a);return React.createElement("label",{className:s()("wc-block-components-checkbox",{"has-error":b},t),htmlFor:f},React.createElement("input",r()({id:f,className:"wc-block-components-checkbox__input",type:"checkbox",onChange:function(e){return i(e.target.checked)},"aria-invalid":!0===b},p)),React.createElement("svg",{className:"wc-block-components-checkbox__mark","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 20"},React.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})),n&&React.createElement("span",{className:"wc-block-components-checkbox__label"},n),l)}))},348:function(e,t){},349:function(e,t,n){"use strict";var c=n(1);t.a=function(e){var t=e.defaultTitle,n=void 0===t?Object(c.__)("Step","woo-gutenberg-products-block"):t,r=e.defaultDescription,a=void 0===r?Object(c.__)("Step description text.","woo-gutenberg-products-block"):r,o=e.defaultShowStepNumber;return{title:{type:"string",default:n},description:{type:"string",default:a},showStepNumber:{type:"boolean",default:void 0===o||o}}}},350:function(e,t,n){"use strict";var c=n(6),r=n.n(c),a=(n(10),n(175)),o=(n(346),function(e){var t=e.title,n=e.stepHeadingContent;return React.createElement("div",{className:"wc-block-components-checkout-step__heading"},React.createElement(a.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&React.createElement("span",{className:"wc-block-components-checkout-step__heading-content"},n))});t.a=function(e){var t=e.id,n=e.className,c=e.title,a=e.legend,i=e.description,l=e.children,s=e.disabled,u=void 0!==s&&s,d=e.showStepNumber,b=void 0===d||d,p=e.stepHeadingContent,f=void 0===p?function(){}:p,m=a||c?"fieldset":"div";return React.createElement(m,{className:r()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":b,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!a&&!c)&&React.createElement("legend",{className:"screen-reader-text"},a||c),!!c&&React.createElement(o,{title:c,stepHeadingContent:f()}),React.createElement("div",{className:"wc-block-components-checkout-step__container"},!!i&&React.createElement("p",{className:"wc-block-components-checkout-step__description"},i),React.createElement("div",{className:"wc-block-components-checkout-step__content"},l)))}},352:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(4),r=n.n(c),a=n(23),o=n.n(a),i=n(2),l=n(0),s=n(66),u=n(60),d=["email"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}var p=function(){var e=Object(s.b)().needsShipping,t=Object(u.b)(),n=t.billingData,c=t.setBillingData,a=t.shippingAddress,p=t.setShippingAddress,f=t.shippingAsBilling,m=t.setShippingAsBilling,g=Object(l.useRef)(f),h=Object(l.useRef)(n),v=Object(l.useCallback)((function(e){p(e),f&&c(e)}),[f,p,c]),O=Object(l.useCallback)((function(t){c(t),e||p(t)}),[e,p,c]);Object(l.useEffect)((function(){if(g.current!==f){if(f)h.current=n,c(a);else{var e=h.current,t=(e.email,o()(e,d));c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))}g.current=f}}),[f,c,a,n]);var w=Object(l.useCallback)((function(e){c({email:e})}),[c]),j=Object(l.useCallback)((function(e){c({phone:e})}),[c]),k=Object(l.useCallback)((function(e){v({phone:e})}),[v]);return{defaultAddressFields:i.defaultAddressFields,shippingFields:a,setShippingFields:v,billingFields:n,setBillingFields:O,setEmail:w,setPhone:j,setShippingPhone:k,shippingAsBilling:f,setShippingAsBilling:m,showShippingFields:e,showBillingFields:!e||!g.current}}},408:function(e,t,n){"use strict";n.r(t);var c=n(345),r=n(350),a=n(48),o=n(1),i=n(276),l=n(352),s=n(52),u=n(2),d=n(347),b=function(e){var t=e.allowCreateAccount,n=Object(a.b)(),c=n.customerId,r=n.shouldCreateAccount,b=n.setShouldCreateAccount,p=Object(l.a)(),f=p.billingFields,m=p.setEmail,g=Object(s.a)().dispatchCheckoutEvent,h=!c&&t&&Object(u.getSetting)("checkoutAllowsGuest",!1)&&Object(u.getSetting)("checkoutAllowsSignup",!1)&&React.createElement(d.a,{className:"wc-block-checkout__create-account",label:Object(o.__)("Create an account?","woo-gutenberg-products-block"),checked:r,onChange:function(e){return b(e)}});return React.createElement(React.Fragment,null,React.createElement(i.a,{id:"email",type:"email",label:Object(o.__)("Email address","woo-gutenberg-products-block"),value:f.email,autoComplete:"email",onChange:function(e){m(e),g("set-email-address")},required:!0}),h)},p=n(4),f=n.n(p),m=n(349);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=h(h({},Object(m.a)({defaultTitle:Object(o.__)("Contact information","woo-gutenberg-products-block"),defaultDescription:Object(o.__)("We'll use this email to send you details and updates about your order.","woo-gutenberg-products-block")})),{},{lock:{type:"object",default:{remove:!0,move:!0}}}),O=n(83),w="".concat(O.e,"?redirect_to=").concat(encodeURIComponent(window.location.href)),j=function(){var e=Object(a.b)().customerId;return!Object(u.getSetting)("checkoutShowLoginReminder",!0)||e?null:React.createElement(React.Fragment,null,Object(o.__)("Already have an account? ","woo-gutenberg-products-block"),React.createElement("a",{href:w},Object(o.__)("Log in.","woo-gutenberg-products-block")))},k=n(219);t.default=Object(c.a)(v)((function(e){var t=e.title,n=e.description,c=e.showStepNumber,o=e.children,i=Object(a.b)().isProcessing,l=Object(k.b)().allowCreateAccount;return React.createElement(r.a,{id:"contact-fields",disabled:i,className:"wc-block-checkout__contact-fields",title:t,description:n,showStepNumber:c,stepHeadingContent:function(){return React.createElement(j,null)}},React.createElement(b,{allowCreateAccount:l}),o)}))},51:function(e,t,n){"use strict";var c=n(4),r=n.n(c),a=n(0),o=n(6),i=n.n(o);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t,n=e.label,c=e.screenReaderLabel,r=e.wrapperElement,o=e.wrapperProps,l=void 0===o?{}:o,u=null!=n,d=null!=c;return!u&&d?(t=r||"span",l=s(s({},l),{},{className:i()(l.className,"screen-reader-text")}),React.createElement(t,l,c)):(t=r||a.Fragment,u&&d&&n!==c?React.createElement(t,l,React.createElement("span",{"aria-hidden":"true"},n),React.createElement("span",{className:"screen-reader-text"},c)):React.createElement(t,l,n))}}}]);