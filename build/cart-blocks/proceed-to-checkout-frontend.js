(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[27],{255:function(e,t,c){"use strict";var n=c(11),o=c.n(n),s=c(0),r=c(50),a=c(4),i=c.n(a),u=c(132);c(256),t.a=e=>{let{className:t,showSpinner:c=!1,children:n,variant:a="contained",...b}=e;const l=i()("wc-block-components-button",t,a,{"wc-block-components-button--loading":c});return Object(s.createElement)(r.a,o()({className:l},b),c&&Object(s.createElement)(u.a,null),Object(s.createElement)("span",{className:"wc-block-components-button__text"},n))}},256:function(e,t){},366:function(e,t,c){"use strict";(function(e){var n=c(0),o=c(1),s=c(4),r=c.n(s),a=c(255),i=c(44),u=c(34),b=c(413),l=c(2);c(368),t.a=t=>{let{checkoutPageId:c,className:s}=t;const d=Object(l.getSetting)("page-"+c,!1),{isCalculating:m}=Object(u.b)(),[f,w]=Object(b.a)(),[p,v]=Object(n.useState)(!1);Object(n.useEffect)(()=>{if("function"!=typeof e.addEventListener||"function"!=typeof e.removeEventListener)return;const t=()=>{v(!1)};return e.addEventListener("pageshow",t),()=>{e.removeEventListener("pageshow",t)}},[]);const j=Object(n.createElement)(a.a,{className:"wc-block-cart__submit-button",href:d||i.d,disabled:m,onClick:()=>v(!0),showSpinner:p},Object(o.__)("Proceed to Checkout","woo-gutenberg-products-block"));return Object(n.createElement)("div",{className:r()("wc-block-cart__submit",s)},f,Object(n.createElement)("div",{className:"wc-block-cart__submit-container"},j),"below"===w&&Object(n.createElement)("div",{className:"wc-block-cart__submit-container wc-block-cart__submit-container--sticky"},j))}}).call(this,c(367))},367:function(e,t){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch(e){"object"==typeof window&&(c=window)}e.exports=c},368:function(e,t){},413:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(0);const o={bottom:0,left:0,opacity:0,pointerEvents:"none",position:"absolute",right:0,top:0,zIndex:-1},s=()=>{const[e,t]=Object(n.useState)(""),c=Object(n.useRef)(null),s=Object(n.useRef)(new IntersectionObserver(e=>{e[0].isIntersecting?t("visible"):t(e[0].boundingClientRect.top>0?"below":"above")},{threshold:1}));return Object(n.useLayoutEffect)(()=>{const e=c.current,t=s.current;return e&&t.observe(e),()=>{t.unobserve(e)}},[]),[Object(n.createElement)("div",{"aria-hidden":!0,ref:c,style:o}),e]}},444:function(e,t,c){"use strict";c.r(t);var n=c(117),o=c(366);t.default=Object(n.withFilteredAttributes)({checkoutPageId:{type:"number",default:0},lock:{type:"object",default:{move:!0,remove:!0}}})(o.a)}}]);