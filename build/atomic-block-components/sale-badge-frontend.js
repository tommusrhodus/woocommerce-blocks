(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[8],{287:function(e,t){},288:function(e,t,r){"use strict";r.r(t);var c=r(7),n=r.n(c),a=(r(3),r(1)),o=r(5),s=r.n(o),l=r(38),u=r(81),p=r(200);r(287);t.default=Object(p.withProductDataContext)((function(e){var t=e.className,r=e.align,c=Object(u.useInnerBlockLayoutContext)().parentClassName,o=Object(u.useProductDataContext)().product;if(!o.id||!o.on_sale)return null;var p="string"==typeof r?"wc-block-components-product-sale-badge--align-".concat(r):"";return React.createElement("div",{className:s()("wc-block-components-product-sale-badge",t,p,n()({},"".concat(c,"__product-onsale"),c))},React.createElement(l.a,{label:Object(a.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Product on sale","woo-gutenberg-products-block")}))}))},38:function(e,t,r){"use strict";var c=r(7),n=r.n(c),a=(r(3),r(2)),o=r(5),s=r.n(o);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,c=e.screenReaderLabel,n=e.wrapperElement,o=e.wrapperProps,l=void 0===o?{}:o,p=null!=r,b=null!=c;return!p&&b?(t=n||"span",l=u(u({},l),{},{className:s()(l.className,"screen-reader-text")}),React.createElement(t,l,c)):(t=n||a.Fragment,p&&b&&r!==c?React.createElement(t,l,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},c)):React.createElement(t,l,r))}}}]);