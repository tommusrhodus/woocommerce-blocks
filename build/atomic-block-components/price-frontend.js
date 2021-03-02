(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[6],{116:function(e,r,c){"use strict";var t=c(7),a=c.n(t),n=c(1),o=c(47),l=c(5),i=c.n(l),u=(c(3),c(149)),s=(c(153),function(e){var r=e.currency,c=e.maxPrice,t=e.minPrice,a=e.priceClassName,n=e.priceStyle;return React.createElement(React.Fragment,null,React.createElement(o.a,{className:i()("wc-block-components-product-price__value",a),currency:r,value:t,style:n})," — ",React.createElement(o.a,{className:i()("wc-block-components-product-price__value",a),currency:r,value:c,style:n}))}),p=function(e){var r=e.currency,c=e.regularPriceClassName,t=e.regularPriceStyle,a=e.regularPrice,l=e.priceClassName,u=e.priceStyle,s=e.price;return React.createElement(React.Fragment,null,React.createElement("span",{className:"screen-reader-text"},Object(n.__)("Previous price:","woo-gutenberg-products-block")),React.createElement(o.a,{currency:r,renderText:function(e){return React.createElement("del",{className:i()("wc-block-components-product-price__regular",c),style:t},e)},value:a}),React.createElement("span",{className:"screen-reader-text"},Object(n.__)("Discounted price:","woo-gutenberg-products-block")),React.createElement(o.a,{currency:r,renderText:function(e){return React.createElement("ins",{className:i()("wc-block-components-product-price__value","is-discounted",l),style:u},e)},value:s}))};r.a=function(e){var r=e.align,c=e.className,t=e.currency,n=e.format,l=void 0===n?"<price/>":n,m=e.maxPrice,d=void 0===m?null:m,b=e.minPrice,f=void 0===b?null:b,g=e.price,v=void 0===g?null:g,y=e.priceClassName,_=e.priceStyle,O=e.regularPrice,P=e.regularPriceClassName,N=e.regularPriceStyle,S=i()(c,"price","wc-block-components-product-price",a()({},"wc-block-components-product-price--align-".concat(r),r));l.includes("<price/>")||(l="<price/>",console.error("Price formats need to include the `<price/>` tag."));var C=O&&v!==O,j=React.createElement("span",{className:i()("wc-block-components-product-price__value",y)});return C?j=React.createElement(p,{currency:t,price:v,priceClassName:y,priceStyle:_,regularPrice:O,regularPriceClassName:P,regularPriceStyle:N}):null!==f&&null!==d?j=React.createElement(s,{currency:t,maxPrice:d,minPrice:f,priceClassName:y,priceStyle:_}):null!==v&&(j=React.createElement(o.a,{className:i()("wc-block-components-product-price__value",y),currency:t,value:v,style:_})),React.createElement("span",{className:S},Object(u.a)(l,{price:j}))}},124:function(e,r){},153:function(e,r){},299:function(e,r,c){"use strict";c.r(r);var t=c(7),a=c.n(t),n=(c(3),c(5)),o=c.n(n),l=c(116),i=c(45),u=c(84),s=c(201),p=c(9),m=c(198);r.default=Object(m.withProductDataContext)((function(e){var r,c,t,n,m,d,b,f=e.className,g=e.align,v=e.fontSize,y=e.customFontSize,_=e.saleFontSize,O=e.customSaleFontSize,P=e.color,N=e.customColor,S=e.saleColor,C=e.customSaleColor,j=Object(u.useInnerBlockLayoutContext)().parentClassName,w=Object(u.useProductDataContext)().product,E=o()(f,a()({},"".concat(j,"__product-price"),j));if(!w.id)return React.createElement(l.a,{align:g,className:E});var R=Object(s.getColorClassName)("color",P),x=Object(s.getFontSizeClass)(v),h=Object(s.getColorClassName)("color",S),k=Object(s.getFontSizeClass)(_),z=o()((r={"has-text-color":P||N,"has-font-size":v||y},a()(r,R,R),a()(r,x,x),r)),F=o()((c={"has-text-color":S||C,"has-font-size":_||O},a()(c,h,h),a()(c,k,k),c)),D={color:N,fontSize:y},V={color:C,fontSize:O},B=w.prices,T=Object(i.getCurrencyFromPriceResponse)(B),U=B.price!==B.regular_price,J=U?o()((t={},a()(t,"".concat(j,"__product-price__value"),j),a()(t,F,Object(p.E)()),t)):o()((n={},a()(n,"".concat(j,"__product-price__value"),j),a()(n,z,Object(p.E)()),n)),M=U?V:D;return React.createElement(l.a,{align:g,className:E,currency:T,price:B.price,priceClassName:J,priceStyle:Object(p.E)()?M:{},minPrice:null==B||null===(m=B.price_range)||void 0===m?void 0:m.min_amount,maxPrice:null==B||null===(d=B.price_range)||void 0===d?void 0:d.max_amount,regularPrice:B.regular_price,regularPriceClassName:o()((b={},a()(b,"".concat(j,"__product-price__regular"),j),a()(b,z,Object(p.E)()),b)),regularPriceStyle:Object(p.E)()?D:{}})}))},47:function(e,r,c){"use strict";var t=c(11),a=c.n(t),n=c(7),o=c.n(n),l=c(13),i=c.n(l),u=c(104),s=c(5),p=c.n(s);c(124);function m(e,r){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),c.push.apply(c,t)}return c}function d(e){for(var r=1;r<arguments.length;r++){var c=null!=arguments[r]?arguments[r]:{};r%2?m(Object(c),!0).forEach((function(r){o()(e,r,c[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):m(Object(c)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(c,r))}))}return e}r.a=function(e){var r=e.className,c=e.value,t=e.currency,n=e.onValueChange,o=i()(e,["className","value","currency","onValueChange"]);if("-"===c)return null;var l=c/Math.pow(10,t.minorUnit);if(!Number.isFinite(l))return null;var s=p()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",r),m=d(d(d({displayType:"text"},o),function(e){return{thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0}}(t)),{},{value:void 0,currency:void 0,onValueChange:void 0}),b=n?function(e){var r=e.value*Math.pow(10,t.minorUnit);n(r)}:function(){};return React.createElement(u.a,a()({className:s},m,{value:l,onValueChange:b}))}}}]);