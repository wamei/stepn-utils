(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{5077:function(e,s,n){"use strict";n.d(s,{D:function(){return a}});n(7294);var t=n(5147),i=n(5893),a=function(e){var s,n=e.crypts,a=e.className;return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)(t.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,i.jsx)("tbody",{children:n.map((function(e){return(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,i.jsx)("span",{className:"align-middle",children:e.short})]}),(0,i.jsxs)("td",{children:["\xa5",e.jpy]}),(0,i.jsxs)("td",{children:["$",e.usd]})]},e.id)}))})}),(0,i.jsx)("div",{className:"text-end",style:{marginTop:"-6px"},children:(0,i.jsxs)("span",{style:{fontSize:"8px"},children:["\u6700\u7d42\u66f4\u65b0\u65e5\u6642 ",null===(s=n[0])||void 0===s?void 0:s.lastUpdatedAt.toLocaleString()]})})]})}},1581:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return k}});var t=n(3888),i=n(7294),a=n(4036),r=n.n(a),c=n(4680),l=n(600),d=n(6558),o=n(3045),u=n(5893);const m=(0,c.Z)("input-group-text",{Component:"span"}),h=i.forwardRef((({bsPrefix:e,size:s,hasValidation:n,className:t,as:a="div",...c},d)=>{e=(0,l.vE)(e,"input-group");const m=(0,i.useMemo)((()=>({})),[]);return(0,u.jsx)(o.Z.Provider,{value:m,children:(0,u.jsx)(a,{ref:d,...c,className:r()(t,e,s&&`${e}-${s}`,n&&"has-validation")})})}));h.displayName="InputGroup";var x=Object.assign(h,{Text:m,Radio:e=>(0,u.jsx)(m,{children:(0,u.jsx)(d.Z,{type:"radio",...e})}),Checkbox:e=>(0,u.jsx)(m,{children:(0,u.jsx)(d.Z,{type:"checkbox",...e})})}),p=n(2230),j=n(2178),f=n(5147),g=n(7663),v=function(e){var s=e.crypts,n=e.value,t=e.onChange;return(0,u.jsxs)(g.Z,{children:[(0,u.jsxs)(g.Z.Toggle,{variant:"outline-secondary",children:[(0,u.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(n.id,".png"),alt:n.name,width:"20",height:"20"}),(0,u.jsx)("span",{className:"align-middle",children:n.symbol})]}),(0,u.jsx)(g.Z.Menu,{children:s.map((function(e){return(0,u.jsxs)(g.Z.Item,{onClick:function(){return t(e)},children:[(0,u.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"20",height:"20"}),(0,u.jsx)("span",{className:"align-middle",children:e.short})]},e.id)}))})]})},y="WSU_Key_CryptExchange_SelectedCryptId",N="WSU_Key_CryptExchange_Price",b=function(e){var s,n,a=e.crypts,r=e.className,c=(0,i.useState)(1),l=c[0],d=c[1],o=(0,i.useState)("1"),m=o[0],h=o[1],g=(0,i.useState)(a[0]),b=g[0],Z=g[1];if((0,i.useEffect)((function(){if(0!==a.length&&!b){var e=localStorage.getItem(y);Z(e?a.find((function(s){return s.id===e})):a[0])}}),[a]),(0,i.useEffect)((function(){var e=localStorage.getItem(N);e&&h(e);var s=localStorage.getItem(y);s&&Z(a.find((function(e){return e.id===s})))}),[]),(0,i.useEffect)((function(){m&&(d(Number(m)),localStorage.setItem(N,m))}),[m]),(0,i.useEffect)((function(){b&&localStorage.setItem(y,b.id)}),[b]),!b)return(0,u.jsx)("p",{children:"Loading..."});var _=[].concat((0,t.Z)(a),[{id:"jpy",symbol:"JPY",name:"Japanese Yen",short:"JPY",jpy:1,usd:null===(s=a.find((function(e){return"usdc"===e.id})))||void 0===s?void 0:s.usd,lastUpdatedAt:null===(n=a[0])||void 0===n?void 0:n.lastUpdatedAt}]);return(0,u.jsxs)("div",{className:r,children:[(0,u.jsxs)(x,{className:"mb-3",children:[(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(p.Z,{label:"".concat(b.name),children:(0,u.jsx)(j.Z.Control,{type:"number",value:m,onChange:function(e){h(e.target.value)}})})}),(0,u.jsx)(v,{crypts:_,value:b,onChange:Z})]}),(0,u.jsx)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,u.jsx)("tbody",{children:_.map((function(e){return(0,u.jsxs)("tr",{children:[(0,u.jsxs)("td",{children:[(0,u.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,u.jsx)("span",{className:"align-middle",children:e.short})]}),(0,u.jsx)("td",{className:"text-end",children:(b.jpy*l*.9936/e.jpy).toFixed(2)}),(0,u.jsx)("td",{children:e.symbol})]},e.id)}))})})]})},Z=n(5077),_=n(1962),C=n(682),S=n(4051),E=n(1555),w=function(){var e=(0,i.useContext)(_._).crypts;return(0,u.jsxs)(C.Z,{className:"mt-2",style:{maxWidth:"540px"},children:[(0,u.jsx)(S.Z,{className:"mb-3 mt-3",children:(0,u.jsx)(E.Z,{className:"text-center",children:(0,u.jsx)("h5",{children:"\u4e21\u66ff\u30a8\u30df\u30e5\u30ec\u30fc\u30bf"})})}),(0,u.jsx)(b,{crypts:e}),(0,u.jsx)(S.Z,{className:"mb-3 mt-3",children:(0,u.jsx)(E.Z,{className:"text-center",children:(0,u.jsx)("h5",{children:"\u4fa1\u683c\u4e00\u89a7"})})}),(0,u.jsx)(Z.D,{crypts:e})]})};w.suppressFirstRenderFlicker=!0,w.getLayout=function(e){return(0,u.jsx)(_.Z,{title:"\u4e21\u66ff\u30a8\u30df\u30e5\u30ec\u30fc\u30bf",children:e})};var k=w},1939:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/prices",function(){return n(1581)}])}},function(e){e.O(0,[774,746,663,962,888,179],(function(){return s=1939,e(e.s=s);var s}));var s=e.O();_N_E=s}]);