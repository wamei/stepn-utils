"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{3577:function(e,t,n){const r=n(7294).createContext(null);t.Z=r},9319:function(e,t,n){n.d(t,{d:function(){return d}});var r=n(7294),o=n(2092),i=n(3577),a=n(8296),s=n(5680),c=n(12),u=n(5893);const f=["children"];const l=()=>{};function d(e={}){const t=(0,r.useContext)(i.Z),[n,u]=(0,o.Z)(),f=(0,r.useRef)(!1),{flip:d,offset:p,rootCloseEvent:m,fixed:h=!1,placement:v,popperConfig:g={},enableEventListeners:b=!0,usePopper:y=!!t}=e,w=null==(null==t?void 0:t.show)?!!e.show:t.show;w&&!f.current&&(f.current=!0);const{placement:x,setMenu:O,menuElement:E,toggleElement:C}=t||{},Z=(0,a.Z)(C,E,(0,c.ZP)({placement:v||x||"bottom-start",enabled:y,enableEvents:null==b?w:b,offset:p,flip:d,fixed:h,arrowElement:n,popperConfig:g})),j=Object.assign({ref:O||l,"aria-labelledby":null==C?void 0:C.id},Z.attributes.popper,{style:Z.styles.popper}),k={show:w,placement:x,hasShown:f.current,toggle:null==t?void 0:t.toggle,popper:y?Z:null,arrowProps:y?Object.assign({ref:u},Z.attributes.arrow,{style:Z.styles.arrow}):{}};return(0,s.Z)(E,(e=>{null==t||t.toggle(!1,e)}),{clickTrigger:m,disabled:!w}),[j,k]}function p(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,f);const[r,o]=d(n);return(0,u.jsx)(u.Fragment,{children:t(r,o)})}p.displayName="DropdownMenu",p.defaultProps={usePopper:!0},t.Z=p},674:function(e,t,n){n.d(t,{ZP:function(){return b},bt:function(){return m},Jr:function(){return v}});var r=n(7294);function o(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var i={};o(i,"SSRProvider",(()=>c)),o(i,"useSSRSafeId",(()=>f)),o(i,"useIsSSR",(()=>l));const a={prefix:String(Math.round(1e10*Math.random())),current:0},s=r.createContext(a);function c(e){let t=(0,r.useContext)(s),n=(0,r.useMemo)((()=>({prefix:t===a?"":`${t.prefix}-${++t.current}`,current:0})),[t]);return r.createElement(s.Provider,{value:n},e.children)}let u=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);function f(e){let t=(0,r.useContext)(s);return t!==a||u||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||`react-aria${t.prefix}-${++t.current}`),[e])}function l(){let e=(0,r.useContext)(s)!==a,[t,n]=(0,r.useState)(e);return"undefined"!==typeof window&&e&&(0,r.useLayoutEffect)((()=>{n(!1)}),[]),t}var d=n(3577),p=n(5893);const m=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},h=()=>{};function v(){const e=f(),{show:t=!1,toggle:n=h,setToggle:o,menuElement:i}=(0,r.useContext)(d.Z)||{},a=(0,r.useCallback)((e=>{n(!t,e)}),[t,n]),s={id:e,ref:o||h,onClick:a,"aria-expanded":!!t};return i&&m(i)&&(s["aria-haspopup"]=!0),[s,{show:t,toggle:n}]}function g({children:e}){const[t,n]=v();return(0,p.jsx)(p.Fragment,{children:e(t,n)})}g.displayName="DropdownToggle";var b=g},12:function(e,t,n){function r(e={}){return Array.isArray(e)?e:Object.keys(e).map((t=>(e[t].name=t,e[t])))}function o({enabled:e,enableEvents:t,placement:n,flip:o,offset:i,fixed:a,containerPadding:s,arrowElement:c,popperConfig:u={}}){var f,l,d,p;const m=function(e){const t={};return Array.isArray(e)?(null==e||e.forEach((e=>{t[e.name]=e})),t):e||t}(u.modifiers);return Object.assign({},u,{placement:n,enabled:e,strategy:a?"fixed":u.strategy,modifiers:r(Object.assign({},m,{eventListeners:{enabled:t},preventOverflow:Object.assign({},m.preventOverflow,{options:s?Object.assign({padding:s},null==(f=m.preventOverflow)?void 0:f.options):null==(l=m.preventOverflow)?void 0:l.options}),offset:{options:Object.assign({offset:i},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!c,options:Object.assign({},null==(p=m.arrow)?void 0:p.options,{element:c})}),flip:Object.assign({enabled:!!o},m.flip)}))})}n.d(t,{ZP:function(){return o}})},5680:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(424),o=n(2950),i=n(7216),a=n(7294),s=n(8146),c=n(2473),u=n.n(c);const f=()=>{};const l=e=>e&&("current"in e?e.current:e),d={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.Z=function(e,t=f,{disabled:n,clickTrigger:c="click"}={}){const p=(0,a.useRef)(!1),m=(0,a.useRef)(!1),h=(0,a.useCallback)((t=>{const n=l(e);var o;u()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),p.current=!n||!!((o=t).metaKey||o.altKey||o.ctrlKey||o.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,r.Z)(n,t.target)||m.current,m.current=!1}),[e]),v=(0,s.Z)((t=>{const n=l(e);n&&(0,r.Z)(n,t.target)&&(m.current=!0)})),g=(0,s.Z)((e=>{p.current||t(e)}));(0,a.useEffect)((()=>{if(n||null==e)return;const t=(0,i.Z)(l(e));let r=(t.defaultView||window).event,a=null;d[c]&&(a=(0,o.Z)(t,d[c],v,!0));const s=(0,o.Z)(t,c,h,!0),u=(0,o.Z)(t,c,(e=>{e!==r?g(e):r=void 0}));let p=[];return"ontouchstart"in t.documentElement&&(p=[].slice.call(t.body.children).map((e=>(0,o.Z)(e,"mousemove",f)))),()=>{null==a||a(),s(),u(),p.forEach((e=>e()))}}),[e,n,c,h,v,g])}},8296:function(e,t,n){n.d(t,{Z:function(){return xe}});var r=n(7294),o=Object.prototype.hasOwnProperty;function i(e,t,n){for(n of e.keys())if(a(n,t))return n}function a(e,t){var n,r,s;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&a(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e){if((s=r)&&"object"===typeof s&&!(s=i(t,s)))return!1;if(!t.has(s))return!1}return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e){if((s=r[0])&&"object"===typeof s&&!(s=i(t,s)))return!1;if(!a(r[1],t.get(s)))return!1}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(o.call(e,n)&&++r&&!o.call(t,n))return!1;if(!(n in t)||!a(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var s=n(6454);var c=function(e){var t=(0,s.Z)();return[e[0],(0,r.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function u(e){return e.split("-")[0]}function f(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l(e){return e instanceof f(e).Element||e instanceof Element}function d(e){return e instanceof f(e).HTMLElement||e instanceof HTMLElement}function p(e){return"undefined"!==typeof ShadowRoot&&(e instanceof f(e).ShadowRoot||e instanceof ShadowRoot)}var m=Math.max,h=Math.min,v=Math.round;function g(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(d(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=v(n.width)/a||1),i>0&&(o=v(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function b(e){var t=g(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function y(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function w(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return f(e).getComputedStyle(e)}function O(e){return["table","td","th"].indexOf(w(e))>=0}function E(e){return((l(e)?e.ownerDocument:e.document)||window.document).documentElement}function C(e){return"html"===w(e)?e:e.assignedSlot||e.parentNode||(p(e)?e.host:null)||E(e)}function Z(e){return d(e)&&"fixed"!==x(e).position?e.offsetParent:null}function j(e){for(var t=f(e),n=Z(e);n&&O(n)&&"static"===x(n).position;)n=Z(n);return n&&("html"===w(n)||"body"===w(n)&&"static"===x(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&d(e)&&"fixed"===x(e).position)return null;var n=C(e);for(p(n)&&(n=n.host);d(n)&&["html","body"].indexOf(w(n))<0;){var r=x(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function k(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function P(e,t,n){return m(e,h(t,n))}function D(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function A(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var S="top",M="bottom",T="right",R="left",L="auto",N=[S,M,T,R],B="start",W="end",I="viewport",H="popper",$=N.reduce((function(e,t){return e.concat([t+"-"+B,t+"-"+W])}),[]),V=[].concat(N,[L]).reduce((function(e,t){return e.concat([t,t+"-"+B,t+"-"+W])}),[]),q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function U(e){return e.split("-")[1]}var F={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,p=a.x,m=void 0===p?0:p,h=a.y,g=void 0===h?0:h,b="function"===typeof l?l({x:m,y:g}):{x:m,y:g};m=b.x,g=b.y;var y=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),O=R,C=S,Z=window;if(u){var k=j(n),P="clientHeight",D="clientWidth";if(k===f(n)&&"static"!==x(k=E(n)).position&&"absolute"===s&&(P="scrollHeight",D="scrollWidth"),k=k,o===S||(o===R||o===T)&&i===W)C=M,g-=(d&&k===Z&&Z.visualViewport?Z.visualViewport.height:k[P])-r.height,g*=c?1:-1;if(o===R||(o===S||o===M)&&i===W)O=T,m-=(d&&k===Z&&Z.visualViewport?Z.visualViewport.width:k[D])-r.width,m*=c?1:-1}var A,L=Object.assign({position:s},u&&F),N=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:v(t*r)/r||0,y:v(n*r)/r||0}}({x:m,y:g}):{x:m,y:g};return m=N.x,g=N.y,c?Object.assign({},L,((A={})[C]=w?"0":"",A[O]=y?"0":"",A.transform=(Z.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",A)):Object.assign({},L,((t={})[C]=w?g+"px":"",t[O]=y?m+"px":"",t.transform="",t))}var z={passive:!0};var _={left:"right",right:"left",bottom:"top",top:"bottom"};function J(e){return e.replace(/left|right|bottom|top/g,(function(e){return _[e]}))}var X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,(function(e){return X[e]}))}function G(e){var t=f(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Q(e){return g(E(e)).left+G(e).scrollLeft}function ee(e){var t=x(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function te(e){return["html","body","#document"].indexOf(w(e))>=0?e.ownerDocument.body:d(e)&&ee(e)?e:te(C(e))}function ne(e,t){var n;void 0===t&&(t=[]);var r=te(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=f(r),a=o?[i].concat(i.visualViewport||[],ee(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ne(C(a)))}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t){return t===I?re(function(e){var t=f(e),n=E(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+Q(e),y:s}}(e)):l(t)?function(e){var t=g(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):re(function(e){var t,n=E(e),r=G(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=m(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=m(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Q(e),c=-r.scrollTop;return"rtl"===x(o||n).direction&&(s+=m(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(E(e)))}function ie(e,t,n){var r="clippingParents"===t?function(e){var t=ne(C(e)),n=["absolute","fixed"].indexOf(x(e).position)>=0&&d(e)?j(e):e;return l(n)?t.filter((function(e){return l(e)&&y(e,n)&&"body"!==w(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=oe(e,n);return t.top=m(r.top,t.top),t.right=h(r.right,t.right),t.bottom=h(r.bottom,t.bottom),t.left=m(r.left,t.left),t}),oe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ae(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?u(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case S:t={x:s,y:n.y-r.height};break;case M:t={x:s,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:c};break;case R:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?k(i):null;if(null!=f){var l="y"===f?"height":"width";switch(a){case B:t[f]=t[f]-(n[l]/2-r[l]/2);break;case W:t[f]=t[f]+(n[l]/2-r[l]/2)}}return t}function se(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?I:s,u=n.elementContext,f=void 0===u?H:u,d=n.altBoundary,p=void 0!==d&&d,m=n.padding,h=void 0===m?0:m,v=D("number"!==typeof h?h:A(h,N)),b=f===H?"reference":H,y=e.rects.popper,w=e.elements[p?b:f],x=ie(l(w)?w:w.contextElement||E(e.elements.popper),a,c),O=g(e.elements.reference),C=ae({reference:O,element:y,strategy:"absolute",placement:o}),Z=re(Object.assign({},y,C)),j=f===H?Z:O,k={top:x.top-j.top+v.top,bottom:j.bottom-x.bottom+v.bottom,left:x.left-j.left+v.left,right:j.right-x.right+v.right},P=e.modifiersData.offset;if(f===H&&P){var R=P[o];Object.keys(k).forEach((function(e){var t=[T,M].indexOf(e)>=0?1:-1,n=[S,M].indexOf(e)>=0?"y":"x";k[e]+=R[n]*t}))}return k}function ce(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ue(e){return[S,T,M,R].some((function(t){return e[t]>=0}))}function fe(e,t,n){void 0===n&&(n=!1);var r=d(t),o=d(t)&&function(e){var t=e.getBoundingClientRect(),n=v(t.width)/e.offsetWidth||1,r=v(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=E(t),a=g(e,o),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==w(t)||ee(i))&&(s=function(e){return e!==f(e)&&d(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:G(e);var t}(t)),d(t)?((c=g(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Q(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function le(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function de(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var pe={placement:"bottom",modifiers:[],strategy:"absolute"};function me(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function he(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?pe:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},pe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:l(e)?ne(e):e.contextElement?ne(e.contextElement):[],popper:ne(t)};var f=function(e){var t=le(e);return q.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),u=function(){};a.push(s||u)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(me(t,n)){o.rects={reference:fe(t,j(n),"fixed"===o.options.strategy),popper:b(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,u=i.options,f=void 0===u?{}:u,l=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:l,instance:c})||o)}else o.reset=!1,r=-1}}},update:de((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!me(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}const ve=he({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=se(t,{elementContext:"reference"}),s=se(t,{altBoundary:!0}),c=ce(a,r),u=ce(s,o,i),f=ue(c),l=ue(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ae({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:u(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=f(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,z)})),s&&c.addEventListener("resize",n.update,z),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),s&&c.removeEventListener("resize",n.update,z)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=V.reduce((function(e,n){return e[n]=function(e,t,n){var r=u(e),o=[R,S].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[R,T].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,l=n.boundary,d=n.rootBoundary,p=n.altBoundary,m=n.flipVariations,h=void 0===m||m,v=n.allowedAutoPlacements,g=t.options.placement,b=u(g),y=c||(b===g||!h?[J(g)]:function(e){if(u(e)===L)return[];var t=J(e);return[Y(e),t,Y(t)]}(g)),w=[g].concat(y).reduce((function(e,n){return e.concat(u(n)===L?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?V:c,l=U(r),d=l?s?$:$.filter((function(e){return U(e)===l})):N,p=d.filter((function(e){return f.indexOf(e)>=0}));0===p.length&&(p=d);var m=p.reduce((function(t,n){return t[n]=se(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[u(n)],t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}(t,{placement:n,boundary:l,rootBoundary:d,padding:f,flipVariations:h,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,O=t.rects.popper,E=new Map,C=!0,Z=w[0],j=0;j<w.length;j++){var k=w[j],P=u(k),D=U(k)===B,A=[S,M].indexOf(P)>=0,W=A?"width":"height",I=se(t,{placement:k,boundary:l,rootBoundary:d,altBoundary:p,padding:f}),H=A?D?T:R:D?M:S;x[W]>O[W]&&(H=J(H));var q=J(H),F=[];if(i&&F.push(I[P]<=0),s&&F.push(I[H]<=0,I[q]<=0),F.every((function(e){return e}))){Z=k,C=!1;break}E.set(k,F)}if(C)for(var K=function(e){var t=w.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return Z=t,"break"},z=h?3:1;z>0;z--){if("break"===K(z))break}t.placement!==Z&&(t.modifiersData[r]._skip=!0,t.placement=Z,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,f=n.rootBoundary,l=n.altBoundary,d=n.padding,p=n.tether,v=void 0===p||p,g=n.tetherOffset,y=void 0===g?0:g,w=se(t,{boundary:c,rootBoundary:f,padding:d,altBoundary:l}),x=u(t.placement),O=U(t.placement),E=!O,C=k(x),Z="x"===C?"y":"x",D=t.modifiersData.popperOffsets,A=t.rects.reference,L=t.rects.popper,N="function"===typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,W="number"===typeof N?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(D){if(i){var $,V="y"===C?S:R,q="y"===C?M:T,F="y"===C?"height":"width",K=D[C],z=K+w[V],_=K-w[q],J=v?-L[F]/2:0,X=O===B?A[F]:L[F],Y=O===B?-L[F]:-A[F],G=t.elements.arrow,Q=v&&G?b(G):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[V],ne=ee[q],re=P(0,A[F],Q[F]),oe=E?A[F]/2-J-re-te-W.mainAxis:X-re-te-W.mainAxis,ie=E?-A[F]/2+J+re+ne+W.mainAxis:Y+re+ne+W.mainAxis,ae=t.elements.arrow&&j(t.elements.arrow),ce=ae?"y"===C?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=($=null==I?void 0:I[C])?$:0,fe=K+ie-ue,le=P(v?h(z,K+oe-ue-ce):z,K,v?m(_,fe):_);D[C]=le,H[C]=le-K}if(s){var de,pe="x"===C?S:R,me="x"===C?M:T,he=D[Z],ve="y"===Z?"height":"width",ge=he+w[pe],be=he-w[me],ye=-1!==[S,R].indexOf(x),we=null!=(de=null==I?void 0:I[Z])?de:0,xe=ye?ge:he-A[ve]-L[ve]-we+W.altAxis,Oe=ye?he+A[ve]+L[ve]-we-W.altAxis:be,Ee=v&&ye?function(e,t,n){var r=P(e,t,n);return r>n?n:r}(xe,he,Oe):P(v?xe:ge,he,v?Oe:be);D[Z]=Ee,H[Z]=Ee-he}t.modifiersData[r]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=u(n.placement),c=k(s),f=[R,T].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return D("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:A(e,N))}(o.padding,n),d=b(i),p="y"===c?S:R,m="y"===c?M:T,h=n.rects.reference[f]+n.rects.reference[c]-a[c]-n.rects.popper[f],v=a[c]-n.rects.reference[c],g=j(i),y=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,w=h/2-v/2,x=l[p],O=y-d[f]-l[m],E=y/2-d[f]/2+w,C=P(x,E,O),Z=c;n.modifiersData[r]=((t={})[Z]=C,t.centerOffset=C-E,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&y(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}),ge=["enabled","placement","strategy","modifiers"];const be={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},ye={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const e=(t.getAttribute("aria-describedby")||"").split(",").filter((e=>e.trim()!==n.id));e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){const e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},we=[];var xe=function(e,t,n={}){let{enabled:o=!0,placement:i="bottom",strategy:s="absolute",modifiers:u=we}=n,f=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,ge);const l=(0,r.useRef)(u),d=(0,r.useRef)(),p=(0,r.useCallback)((()=>{var e;null==(e=d.current)||e.update()}),[]),m=(0,r.useCallback)((()=>{var e;null==(e=d.current)||e.forceUpdate()}),[]),[h,v]=c((0,r.useState)({placement:i,update:p,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),g=(0,r.useMemo)((()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{const t={},n={};Object.keys(e.elements).forEach((r=>{t[r]=e.styles[r],n[r]=e.attributes[r]})),v({state:e,styles:t,attributes:n,update:p,forceUpdate:m,placement:e.placement})}})),[p,m,v]),b=(0,r.useMemo)((()=>(a(l.current,u)||(l.current=u),l.current)),[u]);return(0,r.useEffect)((()=>{d.current&&o&&d.current.setOptions({placement:i,strategy:s,modifiers:[...b,g,be]})}),[s,i,g,o,b]),(0,r.useEffect)((()=>{if(o&&null!=e&&null!=t)return d.current=ve(e,t,Object.assign({},f,{placement:i,strategy:s,modifiers:[...b,ye,g]})),()=>{null!=d.current&&(d.current.destroy(),d.current=void 0,v((e=>Object.assign({},e,{attributes:{},styles:{popper:{}}}))))}}),[o,e,t]),h}},7663:function(e,t,n){n.d(t,{Z:function(){return V}});var r=n(4036),o=n.n(r),i=n(7294),a=n(930),s=n(9351),c=n(4289),u=n(8833),f=n(4357),l=n(5111),d=n(8146),p=n(3577),m=n(9319),h=n(674),v=n(7126),g=n(6056),b=n(861),y=n(2747),w=n(5893);const x=["eventKey","disabled","onClick","active","as"];function O({key:e,href:t,active:n,disabled:r,onClick:o}){const a=(0,i.useContext)(v.Z),s=(0,i.useContext)(g.Z),{activeKey:c}=s||{},u=(0,v.h)(e,t),f=null==n&&null!=e?(0,v.h)(c)===u:n;return[{onClick:(0,d.Z)((e=>{r||(null==o||o(e),a&&!e.isPropagationStopped()&&a(u,e))})),"aria-disabled":r||void 0,"aria-selected":f,[(0,y.PB)("dropdown-item")]:""},{isActive:f}]}const E=i.forwardRef(((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:i,as:a=b.ZP}=e,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,x);const[c]=O({key:n,href:s.href,disabled:r,onClick:o,active:i});return(0,w.jsx)(a,Object.assign({},s,{ref:t},c))}));E.displayName="DropdownItem";var C=E,Z=n(2963);function j(){const e=(0,f.Z)(),t=(0,i.useRef)(null),n=(0,i.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function k({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:o=`* [${(0,y.PB)("dropdown-item")}]`,focusFirstItemOnShow:f,placement:m="bottom-start",children:g}){const b=(0,Z.Z)(),[x,O]=(0,c.$c)(t,e,r),[E,C]=j(),k=E.current,[P,D]=j(),A=P.current,S=(0,u.Z)(x),M=(0,i.useRef)(null),T=(0,i.useRef)(!1),R=(0,i.useContext)(v.Z),L=(0,i.useCallback)(((e,t,n=(null==t?void 0:t.type))=>{O(e,{originalEvent:t,source:n})}),[O]),N=(0,d.Z)(((e,t)=>{null==n||n(e,t),L(!1,t,"select"),t.isPropagationStopped()||null==R||R(e,t)})),B=(0,i.useMemo)((()=>({toggle:L,placement:m,show:x,menuElement:k,toggleElement:A,setMenu:C,setToggle:D})),[L,m,x,k,A,C,D]);k&&S&&!x&&(T.current=k.contains(k.ownerDocument.activeElement));const W=(0,d.Z)((()=>{A&&A.focus&&A.focus()})),I=(0,d.Z)((()=>{const e=M.current;let t=f;if(null==t&&(t=!(!E.current||!(0,h.bt)(E.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=(0,a.Z)(E.current,o)[0];n&&n.focus&&n.focus()}));(0,i.useEffect)((()=>{x?I():T.current&&(T.current=!1,W())}),[x,T,W,I]),(0,i.useEffect)((()=>{M.current=null}));const H=(e,t)=>{if(!E.current)return null;const n=(0,a.Z)(E.current,o);let r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,l.Z)((0,i.useCallback)((()=>b.document),[b]),"keydown",(e=>{var t,n;const{key:r}=e,o=e.target,i=null==(t=E.current)?void 0:t.contains(o),a=null==(n=P.current)?void 0:n.contains(o);if(/input|textarea/i.test(o.tagName)&&(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type))return;if(!i&&!a)return;if("Tab"===r&&(!E.current||!x))return;M.current=e.type;const c={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{const t=H(o,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),x){const e=H(o,1);e&&e.focus&&e.focus()}else O(!0,c);return;case"Tab":(0,s.ZP)(o.ownerDocument,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=E.current)&&t.contains(e.target)||O(!1,c)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),O(!1,c)}})),(0,w.jsx)(v.Z.Provider,{value:N,children:(0,w.jsx)(p.Z.Provider,{value:B,children:g})})}k.displayName="Dropdown",k.Menu=m.Z,k.Toggle=h.ZP,k.Item=C;var P=k,D=n(953),A=n(3735),S=n(600);const M=i.forwardRef((({bsPrefix:e,className:t,eventKey:n,disabled:r=!1,onClick:i,active:a,as:s=A.Z,...c},u)=>{const f=(0,S.vE)(e,"dropdown-item"),[l,d]=O({key:n,href:c.href,disabled:r,onClick:i,active:a});return(0,w.jsx)(s,{...c,...l,ref:u,className:o()(t,f,d.isActive&&"active",r&&"disabled")})}));M.displayName="DropdownItem";var T=M,R=n(9100),L=n(4486),N=n(3045),B=n(4680);const W=(0,B.Z)("dropdown-header",{defaultProps:{role:"heading"}}),I=(0,B.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),H=(0,B.Z)("dropdown-item-text",{Component:"span"}),$=i.forwardRef(((e,t)=>{const{bsPrefix:n,drop:r,show:a,className:s,align:u,onSelect:f,onToggle:l,focusFirstItemOnShow:p,as:m="div",navbar:h,autoClose:v,...g}=(0,c.Ch)(e,{show:"onToggle"}),b=(0,i.useContext)(N.Z),y=(0,S.vE)(n,"dropdown"),x=(0,S.SC)(),O=(0,d.Z)(((e,t)=>{var n;t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),n=t.source,(!1===v?"click"===n:"inside"===v?"rootClose"!==n:"outside"!==v||"select"!==n)&&(null==l||l(e,t))})),E="end"===u,C=(0,R.J)(E,r,x),Z=(0,i.useMemo)((()=>({align:u,drop:r,isRTL:x})),[u,r,x]);return(0,w.jsx)(D.Z.Provider,{value:Z,children:(0,w.jsx)(P,{placement:C,show:a,onSelect:f,onToggle:O,focusFirstItemOnShow:p,itemSelector:`.${y}-item:not(.disabled):not(:disabled)`,children:b?g.children:(0,w.jsx)(m,{...g,ref:t,className:o()(s,a&&"show",(!r||"down"===r)&&y,"up"===r&&"dropup","end"===r&&"dropend","start"===r&&"dropstart")})})})}));$.displayName="Dropdown",$.defaultProps={navbar:!1,align:"start",autoClose:!0};var V=Object.assign($,{Toggle:L.Z,Menu:R.Z,Item:T,ItemText:H,Divider:I,Header:W})},953:function(e,t,n){const r=n(7294).createContext({});r.displayName="DropdownContext",t.Z=r},9100:function(e,t,n){n.d(t,{J:function(){return h}});var r=n(4036),o=n.n(r),i=n(7294),a=n(9319),s=n(9585),c=n(5654),u=(n(2473),n(953)),f=n(3045),l=n(4819),d=n(600),p=n(2146),m=n(5893);function h(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t&&(r=e?n?"right-end":"left-end":n?"right-start":"left-start"),r}const v=i.forwardRef((({bsPrefix:e,className:t,align:n,rootCloseEvent:r,flip:v,show:g,renderOnMount:b,as:y="div",popperConfig:w,variant:x,...O},E)=>{let C=!1;const Z=(0,i.useContext)(l.Z),j=(0,d.vE)(e,"dropdown-menu"),{align:k,drop:P,isRTL:D}=(0,i.useContext)(u.Z);n=n||k;const A=(0,i.useContext)(f.Z),S=[];if(n)if("object"===typeof n){const e=Object.keys(n);if(e.length){const t=e[0],r=n[t];C="start"===r,S.push(`${j}-${t}-${r}`)}}else"end"===n&&(C=!0);const M=h(C,P,D),[T,{hasShown:R,popper:L,show:N,toggle:B}]=(0,a.d)({flip:v,rootCloseEvent:r,show:g,usePopper:!Z&&0===S.length,offset:[0,2],popperConfig:w,placement:M});if(T.ref=(0,c.Z)((0,p.Z)(E,"DropdownMenu"),T.ref),(0,s.Z)((()=>{N&&(null==L||L.update())}),[N]),!R&&!b&&!A)return null;"string"!==typeof y&&(T.show=N,T.close=()=>null==B?void 0:B(!1),T.align=n);let W=O.style;return null!=L&&L.placement&&(W={...O.style,...T.style},O["x-placement"]=L.placement),(0,m.jsx)(y,{...O,...T,style:W,...(S.length||Z)&&{"data-bs-popper":"static"},className:o()(t,j,N&&"show",C&&`${j}-end`,x&&`${j}-${x}`,...S)})}));v.displayName="DropdownMenu",v.defaultProps={flip:!0},t.Z=v},4486:function(e,t,n){var r=n(4036),o=n.n(r),i=n(7294),a=n(674),s=n(3577),c=n(5654),u=n(5005),f=n(3045),l=n(600),d=n(2146),p=n(5893);const m=i.forwardRef((({bsPrefix:e,split:t,className:n,childBsPrefix:r,as:m=u.Z,...h},v)=>{const g=(0,l.vE)(e,"dropdown-toggle"),b=(0,i.useContext)(s.Z),y=(0,i.useContext)(f.Z);void 0!==r&&(h.bsPrefix=r);const[w]=(0,a.Jr)();return w.ref=(0,c.Z)(w.ref,(0,d.Z)(v,"DropdownToggle")),(0,p.jsx)(m,{className:o()(n,g,t&&`${g}-split`,!!y&&(null==b?void 0:b.show)&&"show"),...w,...h})}));m.displayName="DropdownToggle",t.Z=m},3045:function(e,t,n){const r=n(7294).createContext(null);r.displayName="InputGroupContext",t.Z=r},2146:function(e,t,n){n.d(t,{Z:function(){return r}});n(1143),n(7294),n(5654);function r(e,t){return e}}}]);