(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[20],{21:function(e,t,n){"use strict";var o=n(0),c=n(4),a=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:r,wrapperProps:s={}}=e;const l=null!=n,i=null!=c;return!l&&i?(t=r||"span",s={...s,className:a()(s.className,"screen-reader-text")},Object(o.createElement)(t,s,c)):(t=r||o.Fragment,l&&i&&n!==c?Object(o.createElement)(t,s,Object(o.createElement)("span",{"aria-hidden":"true"},n),Object(o.createElement)("span",{className:"screen-reader-text"},c)):Object(o.createElement)(t,s,n))}},253:function(e,t){},254:function(e,t){},255:function(e,t,n){"use strict";var o=n(11),c=n.n(o),a=n(0),r=n(50),s=n(4),l=n.n(s),i=n(132);n(256),t.a=e=>{let{className:t,showSpinner:n=!1,children:o,variant:s="contained",...u}=e;const b=l()("wc-block-components-button",t,s,{"wc-block-components-button--loading":n});return Object(a.createElement)(r.a,c()({className:b},u),n&&Object(a.createElement)(i.a,null),Object(a.createElement)("span",{className:"wc-block-components-button__text"},o))}},256:function(e,t){},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(1),c=n(7),a=n(5),r=n(17),s=n(30),l=n(0),i=n(242);const u=()=>{const{notices:e,createSnackbarNotice:t,removeSnackbarNotice:n,setIsSuppressed:o}=Object(i.b)(),c=Object(l.useRef)(e);Object(l.useEffect)(()=>{c.current=e},[e]);const a=Object(l.useMemo)(()=>({removeNotices:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;c.current.forEach(t=>{null!==e&&t.status!==e||n(t.id)})},removeSnackbarNotice:n}),[n]),r=Object(l.useMemo)(()=>({addSnackbarNotice:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(e,n)}}),[t]);return{notices:e,...a,...r,setIsSuppressed:o}};var b=n(191);const p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:n}=Object(s.a)(),{createErrorNotice:l}=Object(c.useDispatch)("core/notices"),{addSnackbarNotice:i}=u(),{setValidationErrors:p}=Object(b.b)(),d=Object(c.useSelect)((t,n)=>{let{dispatch:c}=n;const s=t(a.CART_STORE_KEY),u=s.isApplyingCoupon(),b=s.isRemovingCoupon(),{applyCoupon:d,removeCoupon:m,receiveApplyingCoupon:O}=c(a.CART_STORE_KEY);return{applyCoupon:e=>{d(e).then(t=>{!0===t&&i(Object(o.sprintf)(
/* translators: %s coupon code. */
Object(o.__)('Coupon code "%s" has been applied to your cart.',"woo-gutenberg-products-block"),e),{id:"coupon-form"})}).catch(e=>{p({coupon:{message:Object(r.decodeEntities)(e.message),hidden:!1}}),O("")})},removeCoupon:t=>{m(t).then(e=>{!0===e&&i(Object(o.sprintf)(
/* translators: %s coupon code. */
Object(o.__)('Coupon code "%s" has been removed from your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form"})}).catch(t=>{l(t.message,{id:"coupon-form",context:e}),O("")})},isApplyingCoupon:u,isRemovingCoupon:b}},[l,i]);return{appliedCoupons:t,isLoading:n,...d}}},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),c=n(191);n(253);const a=e=>{let{errorMessage:t="",propertyName:n="",elementId:a=""}=e;const{getValidationError:r,getValidationErrorId:s}=Object(c.b)();if(!t||"string"!=typeof t){const e=r(n)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(o.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(o.createElement)("p",{id:s(a)},t))}},289:function(e,t,n){"use strict";var o=n(11),c=n.n(o),a=n(0),r=n(1),s=n(3),l=n(4),i=n.n(l),u=n(191),b=n(265),p=n(13),d=n(59),m=n(21);n(254);var O=Object(s.forwardRef)((e,t)=>{let{className:n,id:o,type:r="text",ariaLabel:s,ariaDescribedBy:l,label:u,screenReaderLabel:b,disabled:p,help:d,autoCapitalize:O="off",autoComplete:j="off",value:g="",onChange:f,required:E=!1,onBlur:v=(()=>{}),feedback:h,...w}=e;const[_,k]=Object(a.useState)(!1);return Object(a.createElement)("div",{className:i()("wc-block-components-text-input",n,{"is-active":_||g})},Object(a.createElement)("input",c()({type:r,id:o,value:g,ref:t,autoCapitalize:O,autoComplete:j,onChange:e=>{f(e.target.value)},onFocus:()=>k(!0),onBlur:e=>{v(e.target.value),k(!1)},"aria-label":s||u,disabled:p,"aria-describedby":d&&!l?o+"__help":l,required:E},w)),Object(a.createElement)(m.a,{label:u,screenReaderLabel:b||u,wrapperElement:"label",wrapperProps:{htmlFor:o},htmlFor:o}),!!d&&Object(a.createElement)("p",{id:o+"__help",className:"wc-block-components-text-input__help"},d),h)});t.a=Object(p.withInstanceId)(e=>{let{className:t,instanceId:n,id:o,ariaDescribedBy:l,errorId:p,focusOnMount:m=!1,onChange:j,showError:g=!0,errorMessage:f="",value:E="",...v}=e;const[h,w]=Object(s.useState)(!0),_=Object(s.useRef)(null),{getValidationError:k,hideValidationError:C,setValidationErrors:N,clearValidationError:y,getValidationErrorId:S}=Object(u.b)(),I=void 0!==o?o:"textinput-"+n,R=void 0!==p?p:I,L=Object(s.useCallback)((function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=_.current||null;if(!t)return;t.value=t.value.trim();const n=t.checkValidity();n?y(R):N({[R]:{message:t.validationMessage||Object(r.__)("Invalid value.","woo-gutenberg-products-block"),hidden:e}})}),[y,R,N]);Object(s.useEffect)(()=>{var e;h&&m&&(null===(e=_.current)||void 0===e||e.focus()),w(!1)},[m,h,w]),Object(s.useEffect)(()=>{var e,t;(null===(e=_.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.activeElement)!==_.current&&L(!0)},[E,L]),Object(s.useEffect)(()=>()=>{y(R)},[y,R]);const V=k(R)||{};Object(d.a)(f)&&""!==f&&(V.message=f);const B=V.message&&!V.hidden,A=g&&B&&S(R)?S(R):l;return Object(a.createElement)(O,c()({className:i()(t,{"has-error":B}),"aria-invalid":!0===B,id:I,onBlur:()=>{L(!1)},feedback:g&&Object(a.createElement)(b.a,{errorMessage:f,propertyName:R}),ref:_,onChange:e=>{C(R),j(e)},ariaDescribedBy:A,value:E},v))})},303:function(e,t){},372:function(e,t,n){"use strict";var o=n(0),c=n(1),a=n(255),r=n(289),s=n(21),l=n(134),i=n(13),u=n(191),b=n(265),p=n(10);n(303),t.a=Object(i.withInstanceId)(e=>{let{instanceId:t,isLoading:n=!1,initialOpen:i=!1,onSubmit:d=(()=>{})}=e;const[m,O]=Object(o.useState)(""),j=Object(o.useRef)(!1),{getValidationError:g,getValidationErrorId:f}=Object(u.b)(),E=g("coupon");Object(o.useEffect)(()=>{j.current!==n&&(n||!m||E||O(""),j.current=n)},[n,m,E]);const v="wc-block-components-totals-coupon__input-"+t;return Object(o.createElement)(p.Panel,{className:"wc-block-components-totals-coupon",hasBorder:!1,initialOpen:i,title:Object(o.createElement)(s.a,{label:Object(c.__)("Coupon code","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Apply a coupon code","woo-gutenberg-products-block"),htmlFor:v})},Object(o.createElement)(l.a,{screenReaderLabel:Object(c.__)("Applying coupon…","woo-gutenberg-products-block"),isLoading:n,showSpinner:!1},Object(o.createElement)("div",{className:"wc-block-components-totals-coupon__content"},Object(o.createElement)("form",{className:"wc-block-components-totals-coupon__form"},Object(o.createElement)(r.a,{id:v,errorId:"coupon",className:"wc-block-components-totals-coupon__input",label:Object(c.__)("Enter code","woo-gutenberg-products-block"),value:m,ariaDescribedBy:f(v),onChange:e=>{O(e)},focusOnMount:!0,showError:!1}),Object(o.createElement)(a.a,{className:"wc-block-components-totals-coupon__button",disabled:n||!m,showSpinner:n,onClick:e=>{e.preventDefault(),d(m)},type:"submit"},Object(c.__)("Apply","woo-gutenberg-products-block"))),Object(o.createElement)(b.a,{propertyName:"coupon",elementId:v}))))})},450:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(372),a=n(264),r=n(2),s=n(10);t.default=e=>{let{className:t}=e;const n=Object(r.getSetting)("couponsEnabled",!0),{applyCoupon:l,isApplyingCoupon:i}=Object(a.a)("wc/cart");return n?Object(o.createElement)(s.TotalsWrapper,{className:t},Object(o.createElement)(c.a,{onSubmit:l,isLoading:i})):null}}}]);