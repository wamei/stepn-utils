(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9970:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r,s,i,l=n(2809),c=n(809),a=n.n(c),d=n(266),o={Solana:"Solana",BSC:"BSC"},u=(r={},(0,l.Z)(r,o.Solana,{main:"solana",unit:"SOL",gst:"green-satoshi-token",gmt:"green-metaverse-token"}),(0,l.Z)(r,o.BSC,{main:"bnb",unit:"BNB",gst:"green-satoshi-token-bsc",gmt:"green-metaverse-token"}),r),m=(s={},(0,l.Z)(s,o.Solana,"#00ffbd"),(0,l.Z)(s,o.BSC,"#FCD535"),s),g=n(7294),h=n(5147),j=n(5893),x=[{level:1,gst:1,gmt:0},{level:2,gst:2,gmt:0},{level:3,gst:3,gmt:0},{level:4,gst:4,gmt:0},{level:5,gst:10,gmt:10},{level:6,gst:6,gmt:0},{level:7,gst:7,gmt:0},{level:8,gst:8,gmt:0},{level:9,gst:9,gmt:0},{level:10,gst:30,gmt:30},{level:11,gst:11,gmt:0},{level:12,gst:12,gmt:0},{level:13,gst:13,gmt:0},{level:14,gst:14,gmt:0},{level:15,gst:15,gmt:0},{level:16,gst:16,gmt:0},{level:17,gst:17,gmt:0},{level:18,gst:18,gmt:0},{level:19,gst:19,gmt:0},{level:20,gst:60,gmt:60},{level:21,gst:21,gmt:0},{level:22,gst:22,gmt:0},{level:23,gst:23,gmt:0},{level:24,gst:24,gmt:0},{level:25,gst:25,gmt:0},{level:26,gst:26,gmt:0},{level:27,gst:27,gmt:0},{level:28,gst:28,gmt:0},{level:29,gst:29,gmt:29},{level:30,gst:100,gmt:100}],f=function(e){var t,n,r,s=e.realm,i=e.crypts,l=e.data,c=u[s],a=(null===(t=i.find((function(e){return e.id===c.gst})))||void 0===t?void 0:t.jpy)||0,d=(null===(n=i.find((function(e){return e.id===c.gmt})))||void 0===n?void 0:n.jpy)||0,o=(null===(r=i.find((function(e){return e.id===c.main})))||void 0===r?void 0:r.jpy)||0,m=l.gst*a+l.gmt*d,g=x.filter((function(e){return e.level<=l.level})),h=g.reduce((function(e,t){return e+t.gst}),0)*a+g.reduce((function(e,t){return e+t.gmt}),0)*d;return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:(0,j.jsx)("small",{children:l.level})}),(0,j.jsxs)("td",{className:"text-nowrap",children:[(0,j.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[s].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,j.jsx)("span",{className:"align-middle",children:(0,j.jsx)("small",{children:l.gst})}),l.gmt>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("img",{className:"ms-2 align-middle",src:"/stepn-utils/".concat(u[s].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,j.jsx)("span",{className:"align-middle",children:(0,j.jsx)("small",{children:l.gmt})})]})]}),(0,j.jsx)("td",{children:(0,j.jsx)("small",{children:(m/o).toFixed(3)})}),(0,j.jsx)("td",{children:(0,j.jsxs)("small",{children:["\xa5",m.toFixed(0)]})}),(0,j.jsx)("td",{children:(0,j.jsx)("small",{children:(h/o).toFixed(3)})}),(0,j.jsx)("td",{children:(0,j.jsxs)("small",{children:["\xa5",h.toFixed(0)]})})]},l.level)},p=function(e){var t=e.crypts,n=e.realm;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(h.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[(0,j.jsx)("thead",{className:"sticky-top",children:(0,j.jsxs)("tr",{style:{backgroundColor:"#ffffff"},children:[(0,j.jsx)("th",{children:(0,j.jsx)("small",{children:"Level"})}),(0,j.jsx)("th",{children:(0,j.jsx)("small",{children:"\u8cbb\u7528"})}),(0,j.jsx)("th",{children:(0,j.jsx)("small",{children:u[n].unit})}),(0,j.jsx)("th",{children:(0,j.jsx)("small",{children:"\u5186"})}),(0,j.jsx)("th",{children:(0,j.jsx)("small",{children:"\u7d2f\u8a08"})}),(0,j.jsx)("th",{children:(0,j.jsx)("small",{children:"\u5186"})})]})}),(0,j.jsx)("tbody",{children:x.map((function(e){return(0,j.jsx)(f,{crypts:t,realm:n,data:e},e.level)}))})]})})},v={Common:"Common",Uncommon:"Uncommon"},y=(i={},(0,l.Z)(i,v.Common,"#d3d3d3"),(0,l.Z)(i,v.Uncommon,"#98fb98"),i),b=n(3458),Z=n(4051),N=n(1555);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=[0,1,2,3,4,5,6],C=function(e){return e===v.Uncommon?4:1},F=function(e){var t,n,r,s=e.realm,i=e.crypts,l=e.mintingRate,c=e.r1,a=e.m1,d=e.r2,o=e.m2,h=e.floorPrice;if(!s)throw new Promise((function(){}));var x=(0,g.useState)(!1),f=x[0],p=x[1],v=function(e,t,n,r,s){var i=e.gst/2*C(t),l=e.gst/2*C(r),c=e.gmt/2*C(t),a=e.gmt/2*C(r);return{gst:i+i/2*Math.max(0,n-1)+l+l/2*Math.max(0,s-1),gmt:c+c/2*Math.max(0,n-1)+a+a/2*Math.max(0,s-1)}}(l,c,a,d,o),y=u[s],O=(null===(t=i.find((function(e){return e.id===y.gst})))||void 0===t?void 0:t.jpy)||0,w=(null===(n=i.find((function(e){return e.id===y.gmt})))||void 0===n?void 0:n.jpy)||0,F=(null===(r=i.find((function(e){return e.id===y.main})))||void 0===r?void 0:r.jpy)||0,k=1.02*(v.gst*O+v.gmt*w),P=20*O+10*w,T=k/.94,E=(k+P)/.94;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{onClick:function(){return p(!0)},className:"p-1",style:S({},h<E/F?{backgroundColor:"rgba(255, 0, 0, 0.3)"}:{}),children:[(0,j.jsxs)("small",{className:"text-nowrap",children:[(0,j.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[s].gst,".png"),alt:"GST",width:"10",height:"10"}),(0,j.jsx)("span",{className:"align-middle",children:v.gst})]}),(0,j.jsx)("br",{}),(0,j.jsxs)("small",{className:"text-nowrap",children:[(0,j.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[s].gmt,".png"),alt:"GMT",width:"10",height:"10"}),(0,j.jsx)("span",{className:"align-middle",children:v.gmt})]})]}),(0,j.jsxs)(b.Z,{show:f,onHide:function(){return p(!1)},children:[(0,j.jsx)(b.Z.Header,{style:{backgroundColor:m[s]},closeButton:!0,children:(0,j.jsxs)(b.Z.Title,{children:[(0,j.jsx)("img",{className:"me-2 align-middle",src:"/stepn-utils/".concat(u[s].main,".png"),alt:s,width:"20",height:"20"}),(0,j.jsxs)("span",{className:"align-middle",children:[c," ",a," x ",d," ",o]})]})}),(0,j.jsxs)(b.Z.Body,{children:[(0,j.jsx)("div",{children:(0,j.jsxs)("strong",{children:[(0,j.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[s].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,j.jsxs)("span",{className:"me-2 align-middle",children:[v.gst,"GST"]}),(0,j.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[s].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,j.jsxs)("span",{className:"align-middle",children:[v.gmt,"GMT"]})]})}),(0,j.jsx)("hr",{}),(0,j.jsxs)("div",{children:["\u30df\u30f3\u30c8\u8cbb\u7528",(0,j.jsx)("br",{}),(0,j.jsxs)(Z.Z,{children:[(0,j.jsxs)(N.Z,{children:[(k/F).toFixed(2),y.unit]}),(0,j.jsxs)(N.Z,{children:["\xa5",k.toFixed(2)]})]}),(0,j.jsxs)("strong",{children:["\u6700\u4f4e\u8ca9\u58f2\u4fa1\u683c",(0,j.jsx)("br",{}),(0,j.jsxs)(Z.Z,{children:[(0,j.jsxs)(N.Z,{children:[(T/F).toFixed(2),y.unit]}),(0,j.jsxs)(N.Z,{children:["\xa5",T.toFixed(2)]})]})]}),(0,j.jsxs)("small",{children:["\u5229\u76ca",(0,j.jsx)("br",{}),(0,j.jsxs)(Z.Z,{children:[(0,j.jsxs)(N.Z,{children:[(h-T/F).toFixed(2),y.unit]}),(0,j.jsxs)(N.Z,{children:["\xa5",(h*F-T).toFixed(2)]})]})]})]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("div",{children:["Lvup\u8fbc\u8cbb\u7528",(0,j.jsx)("br",{}),(0,j.jsxs)(Z.Z,{children:[(0,j.jsxs)(N.Z,{children:[((k+P)/F).toFixed(2),y.unit]}),(0,j.jsxs)(N.Z,{children:["\xa5",(k+P).toFixed(2)]})]}),(0,j.jsxs)("strong",{children:["\u6700\u4f4e\u8ca9\u58f2\u4fa1\u683c",(0,j.jsx)("br",{}),(0,j.jsxs)(Z.Z,{children:[(0,j.jsxs)(N.Z,{children:[(E/F).toFixed(2),y.unit]}),(0,j.jsxs)(N.Z,{children:["\xa5",E.toFixed(2)]})]})]}),(0,j.jsxs)("small",{children:["\u5229\u76ca",(0,j.jsx)("br",{}),(0,j.jsxs)(Z.Z,{children:[(0,j.jsxs)(N.Z,{children:[(h-E/F).toFixed(2),y.unit]}),(0,j.jsxs)(N.Z,{children:["\xa5",(h*F-E).toFixed(2)]})]})]})]}),(0,j.jsx)("hr",{}),(0,j.jsx)("div",{children:(0,j.jsxs)("small",{children:["Lvup\u8cbb\u7528",(0,j.jsx)("br",{}),(0,j.jsxs)(Z.Z,{children:[(0,j.jsxs)(N.Z,{children:[(P/F).toFixed(2),y.unit]}),(0,j.jsxs)(N.Z,{children:["\xa5",P.toFixed(2)]})]})]})})]})]})]})},k=function(e){var t=e.mintingRate,n=e.rarerity1,r=e.rarerity2,s=e.realm,i=e.crypts,l=e.floorPrice;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"text-start",children:(0,j.jsx)("small",{children:"\u8cbb\u7528\u8868\u30bf\u30c3\u30d7\u3067\u8a73\u7d30\u3092\u78ba\u8a8d"})}),(0,j.jsx)(h.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:(0,j.jsxs)("tbody",{children:[(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{}),w.map((function(e){return(0,j.jsx)("td",{style:{backgroundColor:y[n]},children:e},e)}))]}),w.map((function(e){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:{backgroundColor:y[r]},children:e}),w.map((function(c){return(0,j.jsx)("td",{className:"p-0",children:(0,j.jsx)(F,{realm:s,crypts:i,mintingRate:t,r1:n,m1:c,r2:r,m2:e,floorPrice:l})},c)}))]},e)}))]})})]})},P=n(9603),T=[{gst:40,gmt:160},{gst:80,gmt:120},{gst:100,gmt:100},{gst:120,gmt:80},{gst:160,gmt:40},{gst:200,gmt:0}],E=function(e){var t=e.value,n=e.onChange,r=e.gstPrice,s=(0,g.useState)(t),i=s[0],l=s[1];return(0,g.useEffect)((function(){var e={gst:100,gmt:100};r<2?e={gst:200,gmt:0}:r>=2&&r<3?e={gst:160,gmt:40}:r>=3&&r<4?e={gst:120,gmt:80}:r>=4&&r<8?e={gst:100,gmt:100}:r>=8&&r<10?e={gst:80,gmt:120}:r>=10&&(e={gst:40,gmt:160}),l(e),n(e)}),[r,n]),(0,j.jsx)(P.Z.Select,{value:JSON.stringify(i),onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=JSON.parse(e.target.value);l(t),n(t)})),className:"mb-2",children:T.map((function(e){var t=JSON.stringify(e);return(0,j.jsxs)("option",{value:t,children:[e.gst,"GST-",e.gmt,"GMT"]},t)}))})},B=n(2086),_=n(4381),A=function(e){var t=e.value,n=e.onChange;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(B.Z,{className:"mb-2",children:Object.values(o).map((function(e){return(0,j.jsxs)(_.Z,{id:"radio-realm-".concat(e),type:"radio",variant:"light",name:"radio",value:e,checked:t===e,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return n(e.currentTarget.value)})),style:{backgroundColor:t===e?m[e]:""},children:[(0,j.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[e].main,".png"),alt:e,width:"20",height:"20"}),(0,j.jsx)("span",{className:"align-middle",children:e})]},e)}))})})},D=function(e){var t=e.id,n=e.value,r=e.onChange;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(B.Z,{className:"mb-2",children:Object.values(v).map((function(e){return(0,j.jsx)(_.Z,{id:"radio-rarerity-".concat(t,"-").concat(e),type:"radio",variant:"light",name:"radio",value:e,checked:n===e,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return r(e.currentTarget.value)})),style:{backgroundColor:n===e?y[e]:""},children:e},e)}))})})},M="CryptocurrenciesResponse",G=function(){var e=(0,d.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://script.google.com/macros/s/AKfycbxehX_2FJ-NopjtNC0EffWz0IAlw_HeInxY14M5R-p3WTC-HnBsQXB-WX1p6pvsvNud7A/exec");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,localStorage.setItem(M,JSON.stringify(n)),e.abrupt("return",n.map((function(e){return{id:e.id,symbol:e.symbol,name:e.name,jpy:e.jpy,usd:e.usd,lastUpdatedAt:new Date(e.lastUpdatedAt)}})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=localStorage.getItem(M);return e?JSON.parse(e).map((function(e){return{id:e.id,symbol:e.symbol,name:e.name,jpy:e.jpy,usd:e.usd,lastUpdatedAt:new Date(e.lastUpdatedAt)}})):null},I=n(2540),R=n(682),q=n(5273),H=n(2230);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(){var e,t,n=(0,I.useRouter)(),r=(0,g.useState)([]),s=r[0],i=r[1],c=(0,g.useState)({gst:100,gmt:100}),m=c[0],x=c[1],f=(0,g.useState)(v.Common),y=f[0],b=f[1],Z=(0,g.useState)(v.Common),N=Z[0],O=Z[1],S=(0,g.useState)(o.BSC),w=S[0],C=S[1],F=(0,g.useState)(""),T=F[0],B=F[1],_=(0,g.useState)({}),M=_[0],K=_[1],L=function(){var e=(0,d.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=U())){e.next=5;break}if(i(t),!((new Date).getTime()<((null===(n=t[0])||void 0===n?void 0:n.lastUpdatedAt.getTime())||0)+3e5)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,G();case 7:r=e.sent,i(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,g.useEffect)((function(){L()}),[]);var X=function(e){window.history.replaceState({},"","".concat(location.origin).concat(location.pathname,"?").concat(Object.entries(J({},e)).flatMap((function(e){return e[1]?["".concat(e[0],"=").concat(e[1])]:[]})).join("&")))};return(0,g.useEffect)((function(){var e=n.query.realm;n.query.realm&&C(e),n.query[e]&&B(String(n.query[e])),Object.values(o).forEach((function(e){n.query[e]&&K((function(t){return J(J({},t),{},(0,l.Z)({},e,Number(n.query[e])))}))}))}),[n.query]),(0,g.useEffect)((function(){X(J({realm:w},M))}),[X,w,M]),(0,g.useEffect)((function(){B(String(M[w]))}),[w]),(0,g.useEffect)((function(){K((function(e){return J(J({},e),{},(0,l.Z)({},w,Number(T)))}))}),[T]),(0,j.jsxs)(R.Z,{className:"mt-0 p-0",children:[(0,j.jsx)(q.Z,{defaultActiveKey:"0",children:(0,j.jsxs)(q.Z.Item,{eventKey:"0",children:[(0,j.jsx)(q.Z.Header,{children:"\u4eee\u60f3\u901a\u8ca8\u4fa1\u683c"}),(0,j.jsxs)(q.Z.Body,{children:[0===s.length&&(0,j.jsx)("p",{children:"Loading..."}),(0,j.jsx)(h.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,j.jsx)("tbody",{children:s.map((function(e){return(0,j.jsxs)("tr",{children:[(0,j.jsxs)("td",{children:[(0,j.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,j.jsx)("span",{className:"align-middle",children:e.symbol})]}),(0,j.jsxs)("td",{children:["\xa5",e.jpy]}),(0,j.jsxs)("td",{children:["$",e.usd]})]},e.id)}))})}),(0,j.jsx)("div",{className:"text-end",children:(0,j.jsxs)("small",{children:["\u6700\u7d42\u66f4\u65b0\u65e5\u6642 ",null===(e=s[0])||void 0===e?void 0:e.lastUpdatedAt.toLocaleString()]})})]})]})}),(0,j.jsx)(q.Z,{defaultActiveKey:"0",children:(0,j.jsxs)(q.Z.Item,{eventKey:"0",children:[(0,j.jsx)(q.Z.Header,{children:"\u30df\u30f3\u30c8\u8cbb\u7528"}),(0,j.jsxs)(q.Z.Body,{children:[(0,j.jsx)(A,{value:w,onChange:C}),(0,j.jsx)(E,{value:m,onChange:x,gstPrice:(null===(t=s.find((function(e){return e.id===u[w].gst})))||void 0===t?void 0:t.usd)||5}),(0,j.jsx)(D,{id:"r1",value:y,onChange:b}),(0,j.jsx)(D,{id:"r2",value:N,onChange:O}),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(H.Z,{controlId:"floatingInput",label:"\u30d5\u30ed\u30a2\u4fa1\u683c(".concat(u[w].unit,")"),className:"mb-3",children:(0,j.jsx)(P.Z.Control,{type:"number",value:T,onChange:function(e){B(e.target.value)}})})}),(0,j.jsx)(k,{mintingRate:m,rarerity1:y,rarerity2:N,realm:w,crypts:s,floorPrice:M[w]||0})]})]})}),(0,j.jsx)(q.Z,{defaultActiveKey:"0",children:(0,j.jsxs)(q.Z.Item,{eventKey:"0",children:[(0,j.jsx)(q.Z.Header,{children:"\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7\u8cbb\u7528"}),(0,j.jsxs)(q.Z.Body,{children:[(0,j.jsx)(A,{value:w,onChange:C}),(0,j.jsx)(p,{crypts:s,realm:w})]})]})})]})};L.suppressFirstRenderFlicker=!0;var X=L},7540:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9970)}])}},function(e){e.O(0,[774,841,888,179],(function(){return t=7540,e(e.s=t);var t}));var t=e.O();_N_E=t}]);