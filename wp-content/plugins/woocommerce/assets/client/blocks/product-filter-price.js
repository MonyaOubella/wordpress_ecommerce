(()=>{var e,t,r,o={6804:(e,t,r)=>{"use strict";r.r(t);const o=window.wp.blocks,n=window.wc.wcSettings;var c=r(1609),i=r(5573);const a=(0,c.createElement)(i.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,c.createElement)(i.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M6 10C7.10457 10 8 9.10457 8 8C8 6.89543 7.10457 6 6 6C4.89543 6 4 6.89543 4 8C4 9.10457 4.89543 10 6 10ZM20 8.75H11.1111V7.25L20 7.25V8.75ZM20 15.75L11.1111 15.75V14.25L20 14.25V15.75ZM8 15C8 16.1046 7.10457 17 6 17C4.89543 17 4 16.1046 4 15C4 13.8954 4.89543 13 6 13C7.10457 13 8 13.8954 8 15Z",fill:"currentColor"}));r(8988);const l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/product-filter-price","version":"1.0.0","title":"Filter Options","description":"Enable customers to filter the product collection by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","apiVersion":3,"ancestor":["woocommerce/product-filter"],"supports":{"interactivity":true,"inserter":false},"usesContext":["query","queryId"],"attributes":{"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false}}}'),s=window.wp.blockEditor,u=window.wp.components;var p=r(6087),m=r(4717);const d=window.wc.wcTypes;var w=r(5574),f=r(923),g=r.n(f);function _(e){const t=(0,p.useRef)(e);return g()(e,t.current)||(t.current=e),t.current}const b=window.wc.wcBlocksData,y=window.wp.data,E=(0,p.createContext)("page"),v=()=>(0,p.useContext)(E),h=(E.Provider,e=>{const t=v();e=e||t;const r=(0,y.useSelect)((t=>t(b.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:o}=(0,y.useDispatch)(b.QUERY_STATE_STORE_KEY);return[r,(0,p.useCallback)((t=>{o(e,t)}),[e,o])]}),x=(e,t,r)=>{const o=v();r=r||o;const n=(0,y.useSelect)((o=>o(b.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:c}=(0,y.useDispatch)(b.QUERY_STATE_STORE_KEY);return[n,(0,p.useCallback)((t=>{c(r,e,t)}),[r,e,c])]},C=({queryAttribute:e,queryPrices:t,queryStock:r,queryRating:o,queryState:n,isEditor:c=!1})=>{let i=v();i=`${i}-collection-data`;const[a]=h(i),[l,s]=x("calculate_attribute_counts",[],i),[u,f]=x("calculate_price_range",null,i),[g,E]=x("calculate_stock_status_counts",null,i),[C,k]=x("calculate_rating_counts",null,i),P=_(e||{}),S=_(t),O=_(r),T=_(o);(0,p.useEffect)((()=>{"object"==typeof P&&Object.keys(P).length&&(l.find((e=>(0,d.objectHasProp)(P,"taxonomy")&&e.taxonomy===P.taxonomy))||s([...l,P]))}),[P,l,s]),(0,p.useEffect)((()=>{u!==S&&void 0!==S&&f(S)}),[S,f,u]),(0,p.useEffect)((()=>{g!==O&&void 0!==O&&E(O)}),[O,E,g]),(0,p.useEffect)((()=>{C!==T&&void 0!==T&&k(T)}),[T,k,C]);const[j,R]=(0,p.useState)(c),[M]=(0,m.d7)(j,200);j||R(!0);const q=(0,p.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,w.di)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(a)),[a]);return(e=>{const{namespace:t,resourceName:r,resourceValues:o=[],query:n={},shouldSelect:c=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const i=(0,p.useRef)({results:[],isLoading:!0}),a=_(n),l=_(o),s=(()=>{const[,e]=(0,p.useState)();return(0,p.useCallback)((t=>{e((()=>{throw t}))}),[])})(),u=(0,y.useSelect)((e=>{if(!c)return null;const o=e(b.COLLECTIONS_STORE_KEY),n=[t,r,a,l],i=o.getCollectionError(...n);if(i){if(!(0,d.isError)(i))throw new Error("TypeError: `error` object is not an instance of Error constructor");s(i)}return{results:o.getCollection(...n),isLoading:!o.hasFinishedResolution("getCollection",n)}}),[t,r,l,a,c,s]);return null!==u&&(i.current=u),i.current})({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...n,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...q},shouldSelect:M})};var k=r(851);const P=window.wc.priceFormat;function S(e,t){return("number"==typeof e?e:parseInt(e,10))/10**t.minorUnit}const O=({attributes:e})=>{const{inlineInput:t,showInputFields:r}=e,{results:o,isLoading:n}=C({queryPrices:!0,queryState:{},isEditor:!0});if(n)return null;const{minPrice:i,maxPrice:a,formattedMinPrice:l,formattedMaxPrice:s}=function(e){const t=(0,P.getCurrency)({minorUnit:0});if(!(0,d.objectHasProp)(e,"price_range"))return{minPrice:0,maxPrice:0,minRange:0,maxRange:0,formattedMinPrice:(0,P.formatPrice)(0,t),formattedMaxPrice:(0,P.formatPrice)(0,t)};const r=(0,P.getCurrencyFromPriceResponse)(e.price_range),o=(0,d.objectHasProp)(e.price_range,"min_price")&&(0,d.isString)(e.price_range.min_price)?S(e.price_range.min_price,r):0,n=(0,d.objectHasProp)(e.price_range,"max_price")&&(0,d.isString)(e.price_range.max_price)?S(e.price_range.max_price,r):0;return{minPrice:o,maxPrice:n,minRange:o,maxRange:n,formattedMinPrice:(0,P.formatPrice)(o,t),formattedMaxPrice:(0,P.formatPrice)(n,t)}}(o),u=()=>null,p=r?(0,c.createElement)("input",{className:"min",type:"text",value:l,onChange:u}):(0,c.createElement)("span",null,l),m=r?(0,c.createElement)("input",{className:"max",type:"text",value:s,onChange:u}):(0,c.createElement)("span",null,s);return(0,c.createElement)("div",{className:(0,k.A)("wp-block-woocommerce-product-filter-price-content",{"wp-block-woocommerce-product-filter-price-content--inline":t&&r})},(0,c.createElement)("div",{className:"wp-block-woocommerce-product-filter-price-content-left-input text"},p),(0,c.createElement)("div",{className:"wp-block-woocommerce-product-filter-price-content-price-range-slider range"},(0,c.createElement)("div",{className:"range-bar"}),(0,c.createElement)("input",{type:"range",className:"min",min:i,max:a,value:i,onChange:u}),(0,c.createElement)("input",{type:"range",className:"max",min:i,max:a,value:a,onChange:u})),(0,c.createElement)("div",{className:"wp-block-woocommerce-product-filter-price-content-right-input text"},m))};var T=r(7723);const j=({attributes:e,setAttributes:t})=>{const{showInputFields:r,inlineInput:o}=e;return(0,c.createElement)(s.InspectorControls,null,(0,c.createElement)(u.PanelBody,{title:(0,T.__)("Settings","woocommerce")},(0,c.createElement)(u.__experimentalToggleGroupControl,{label:(0,T.__)("Price Slider","woocommerce"),value:r?"editable":"text",onChange:e=>t({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},(0,c.createElement)(u.__experimentalToggleGroupControlOption,{value:"editable",label:(0,T.__)("Editable","woocommerce")}),(0,c.createElement)(u.__experimentalToggleGroupControlOption,{value:"text",label:(0,T.__)("Text","woocommerce")})),r&&(0,c.createElement)(u.ToggleControl,{label:(0,T.__)("Inline input fields","woocommerce"),checked:o,onChange:()=>t({inlineInput:!o}),help:(0,T.__)("Show input fields inline with the slider.","woocommerce")})))};(()=>{const{experimentalBlocksEnabled:e}=(0,n.getSetting)("wcBlocksConfig",{experimentalBlocksEnabled:!1});return e})()&&(0,o.registerBlockType)(l,{icon:a,edit:e=>{const t=(0,s.useBlockProps)();return(0,c.createElement)("div",{...t},(0,c.createElement)(j,{...e}),(0,c.createElement)(u.Disabled,null,(0,c.createElement)(O,{...e})))}})},8988:()=>{},1609:e=>{"use strict";e.exports=window.React},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},923:e=>{"use strict";e.exports=window.wp.isShallowEqual},5573:e=>{"use strict";e.exports=window.wp.primitives}},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,c),r.exports}c.m=o,e=[],c.O=(t,r,o,n)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,n]=e[u],a=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(c.O).every((e=>c.O[e](r[l])))?r.splice(l--,1):(a=!1,n<i&&(i=n));if(a){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);c.r(n);var i={};t=t||[null,r({}),r([]),r(r)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,c.d(n,i),n},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.j=5303,(()=>{var e={5303:0};c.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,a,l]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in a)c.o(a,o)&&(c.m[o]=a[o]);if(l)var u=l(c)}for(t&&t(r);s<i.length;s++)n=i[s],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(u)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=c.O(void 0,[94],(()=>c(6804)));i=c.O(i),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-filter-price"]=i})();