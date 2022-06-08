(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7516:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var s,r,l,i=n(2809),a=n(809),c=n.n(a),d=n(266),o=n(3888),m={Solana:"Solana",BSC:"BSC"},u=(s={},(0,i.Z)(s,m.Solana,{main:"solana",unit:"SOL",gst:"green-satoshi-token",gmt:"green-metaverse-token"}),(0,i.Z)(s,m.BSC,{main:"bnb",unit:"BNB",gst:"green-satoshi-token-bsc",gmt:"green-metaverse-token"}),s),g=(r={},(0,i.Z)(r,m.Solana,"#00ffbd"),(0,i.Z)(r,m.BSC,"#FCD535"),r),h=n(7294),j=n(2318),x=n(2230),p=n(6965),f=n(5147),v=n(1443),y=n(5893),b=function(e){var t=e.crypts,n=e.value,s=e.onChange;return(0,y.jsxs)(v.Z,{children:[(0,y.jsxs)(v.Z.Toggle,{variant:"outline-secondary",children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(n.id,".png"),alt:n.name,width:"20",height:"20"}),(0,y.jsx)("span",{className:"align-middle",children:n.symbol})]}),(0,y.jsx)(v.Z.Menu,{children:t.map((function(e){return(0,y.jsxs)(v.Z.Item,{onClick:function(){return s(e)},children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"20",height:"20"}),(0,y.jsx)("span",{className:"align-middle",children:e.short})]},e.id)}))})]})},N=function(e){var t=e.crypts,n=e.className,s=e.realm,r=(0,h.useState)(1),l=r[0],i=r[1],a=(0,h.useState)("1"),c=a[0],d=a[1],m=(0,h.useState)(t[0]),g=m[0],v=m[1];return(0,h.useEffect)((function(){0!==t.length&&(g||v(t.find((function(e){return e.id===u[s].main}))))}),[t]),(0,h.useEffect)((function(){c&&i(Number(c))}),[c]),g?(0,y.jsxs)("div",{className:n,children:[(0,y.jsx)("h4",{children:"\u901a\u8ca8\u5909\u63db"}),(0,y.jsxs)(j.Z,{className:"mb-3",children:[(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(x.Z,{controlId:"floatingInput",label:"".concat(g.name),children:(0,y.jsx)(p.Z.Control,{type:"number",value:c,onChange:function(e){d(e.target.value)}})})}),(0,y.jsx)(b,{crypts:t,value:g,onChange:v})]}),(0,y.jsx)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,y.jsx)("tbody",{children:[{id:"jpy",symbol:"JPY",name:"Japanese Yen",short:"JPY",jpy:1}].concat((0,o.Z)(t)).filter((function(e){return e.id!==g.id})).map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsxs)("td",{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:e.short})]}),(0,y.jsx)("td",{className:"text-end",children:(g.jpy*l*.9936/e.jpy).toFixed(2)}),(0,y.jsx)("td",{children:e.symbol})]},e.id)}))})})]}):(0,y.jsx)("p",{children:"Loading..."})},Z=function(e){var t,n=e.crypts,s=e.className;return(0,y.jsxs)("div",{className:s,children:[0===n.length&&(0,y.jsx)("p",{children:"Loading..."}),(0,y.jsx)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,y.jsx)("tbody",{children:n.map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsxs)("td",{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:e.short})]}),(0,y.jsxs)("td",{children:["\xa5",e.jpy]}),(0,y.jsxs)("td",{children:["$",e.usd]})]},e.id)}))})}),(0,y.jsx)("div",{className:"text-end",children:(0,y.jsxs)("small",{children:["\u6700\u7d42\u66f4\u65b0\u65e5\u6642 ",null===(t=n[0])||void 0===t?void 0:t.lastUpdatedAt.toLocaleString()]})})]})},w=[{level:1,gst:1,gmt:0},{level:2,gst:2,gmt:0},{level:3,gst:3,gmt:0},{level:4,gst:4,gmt:0},{level:5,gst:10,gmt:10},{level:6,gst:6,gmt:0},{level:7,gst:7,gmt:0},{level:8,gst:8,gmt:0},{level:9,gst:9,gmt:0},{level:10,gst:30,gmt:30},{level:11,gst:11,gmt:0},{level:12,gst:12,gmt:0},{level:13,gst:13,gmt:0},{level:14,gst:14,gmt:0},{level:15,gst:15,gmt:0},{level:16,gst:16,gmt:0},{level:17,gst:17,gmt:0},{level:18,gst:18,gmt:0},{level:19,gst:19,gmt:0},{level:20,gst:60,gmt:60},{level:21,gst:21,gmt:0},{level:22,gst:22,gmt:0},{level:23,gst:23,gmt:0},{level:24,gst:24,gmt:0},{level:25,gst:25,gmt:0},{level:26,gst:26,gmt:0},{level:27,gst:27,gmt:0},{level:28,gst:28,gmt:0},{level:29,gst:29,gmt:29},{level:30,gst:100,gmt:100}],C=function(e){var t,n,s,r=e.realm,l=e.crypts,i=e.data,a=u[r],c=(null===(t=l.find((function(e){return e.id===a.gst})))||void 0===t?void 0:t.jpy)||0,d=(null===(n=l.find((function(e){return e.id===a.gmt})))||void 0===n?void 0:n.jpy)||0,o=(null===(s=l.find((function(e){return e.id===a.main})))||void 0===s?void 0:s.jpy)||0,m=i.gst*c+i.gmt*d,g=w.filter((function(e){return e.level<=i.level})),h=g.reduce((function(e,t){return e+t.gst}),0)*c+g.reduce((function(e,t){return e+t.gmt}),0)*d;return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:(0,y.jsx)("small",{children:i.level})}),(0,y.jsxs)("td",{className:"text-nowrap",children:[(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:(0,y.jsx)("small",{children:i.gst})}),i.gmt>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("img",{className:"ms-2 align-middle",src:"/stepn-utils/".concat(u[r].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:(0,y.jsx)("small",{children:i.gmt})})]})]}),(0,y.jsx)("td",{children:(0,y.jsx)("small",{children:(m/o).toFixed(3)})}),(0,y.jsx)("td",{children:(0,y.jsxs)("small",{children:["\xa5",m.toFixed(0)]})}),(0,y.jsx)("td",{children:(0,y.jsx)("small",{children:(h/o).toFixed(3)})}),(0,y.jsx)("td",{children:(0,y.jsxs)("small",{children:["\xa5",h.toFixed(0)]})})]},i.level)},S=function(e){var t=e.crypts,n=e.realm;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:[(0,y.jsx)("thead",{className:"sticky-top",children:(0,y.jsxs)("tr",{style:{backgroundColor:"#ffffff"},children:[(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"Level"})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"\u8cbb\u7528"})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:u[n].unit})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"\u5186"})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"\u7d2f\u8a08"})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"\u5186"})})]})}),(0,y.jsx)("tbody",{children:w.map((function(e){return(0,y.jsx)(C,{crypts:t,realm:n,data:e},e.level)}))})]})})},O={Common:"Common",Uncommon:"Uncommon"},k=(l={},(0,i.Z)(l,O.Common,"#d3d3d3"),(0,i.Z)(l,O.Uncommon,"#98fb98"),l),F=n(4051),P=n(1555),E=n(5005),T=n(9196);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=[0,1,2,3,4,5,6],I=function(e){return e===O.Uncommon?4:1},U=function(e){var t,n,s,r=e.realm,l=e.crypts,i=e.mintingRate,a=e.r1,c=e.m1,d=e.r2,o=e.m2,m=e.floorPrice;if(!r)throw new Promise((function(e){e("realm not found")}));var j=(0,h.useState)(!1),x=j[0],p=j[1],f=function(e,t,n,s,r){var l=e.gst/2*I(t),i=e.gst/2*I(s),a=e.gmt/2*I(t),c=e.gmt/2*I(s);return{gst:l+l/2*Math.max(0,n-1)+i+i/2*Math.max(0,r-1),gmt:a+a/2*Math.max(0,n-1)+c+c/2*Math.max(0,r-1)}}(i,a,c,d,o),v=u[r],b=(null===(t=l.find((function(e){return e.id===v.gst})))||void 0===t?void 0:t.jpy)||0,N=(null===(n=l.find((function(e){return e.id===v.gmt})))||void 0===n?void 0:n.jpy)||0,Z=(null===(s=l.find((function(e){return e.id===v.main})))||void 0===s?void 0:s.jpy)||0,w=1.02*(f.gst*b+f.gmt*N),C=20*b+10*N,S=w/.94,O=(w+C)/.94,k=(w+2*C)/.94,_=function(e){var t=e.label,n=e.cost,s=e.className,r=n/.94,l=m*Z-r;return(0,y.jsxs)("div",{style:D({},m<r/Z?{backgroundColor:"rgba(255, 0, 0, 0.1)"}:{}),className:s,children:[(0,y.jsxs)(F.Z,{children:[(0,y.jsx)(P.Z,{xs:5,children:t}),(0,y.jsxs)(P.Z,{children:[(n/Z).toFixed(2),v.unit]}),(0,y.jsxs)(P.Z,{children:["\xa5",n.toFixed(2)]})]}),(0,y.jsxs)(F.Z,{children:[(0,y.jsx)(P.Z,{xs:5,children:(0,y.jsx)("strong",{children:"\u6700\u4f4e\u8ca9\u58f2\u4fa1\u683c"})}),(0,y.jsx)(P.Z,{children:(0,y.jsxs)("strong",{children:[(r/Z).toFixed(2),v.unit]})}),(0,y.jsx)(P.Z,{children:(0,y.jsxs)("strong",{children:["\xa5",r.toFixed(2)]})})]}),(0,y.jsxs)(F.Z,{children:[(0,y.jsx)(P.Z,{xs:5,children:(0,y.jsx)("small",{children:"\u5229\u76ca"})}),(0,y.jsx)(P.Z,{children:(0,y.jsxs)("small",{children:[(l/Z).toFixed(2),v.unit]})}),(0,y.jsx)(P.Z,{children:(0,y.jsxs)("small",{children:["\xa5",l.toFixed(2)]})})]})]})};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"p-1",style:D({},m<S/Z?{backgroundColor:"rgba(255, 0, 0, 0.3)"}:m<O/Z?{backgroundColor:"rgba(255, 0, 0, 0.2)"}:m<k/Z?{backgroundColor:"rgba(255, 0, 0, 0.1)"}:{}),children:(0,y.jsxs)(E.Z,{variant:"link",onClick:function(){return p(!0)},className:"text-start d-block p-0 text-body text-decoration-none",children:[(0,y.jsxs)("small",{className:"text-nowrap",children:[(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gst,".png"),alt:"GST",width:"10",height:"10"}),(0,y.jsx)("span",{className:"align-middle",children:f.gst})]}),(0,y.jsx)("br",{}),(0,y.jsxs)("small",{className:"text-nowrap",children:[(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gmt,".png"),alt:"GMT",width:"10",height:"10"}),(0,y.jsx)("span",{className:"align-middle",children:f.gmt})]})]})}),(0,y.jsxs)(T.Z,{show:x,onHide:function(){return p(!1)},children:[(0,y.jsx)(T.Z.Header,{style:{backgroundColor:g[r]},closeButton:!0,children:(0,y.jsxs)(T.Z.Title,{children:[(0,y.jsx)("img",{className:"me-2 align-middle",src:"/stepn-utils/".concat(u[r].main,".png"),alt:r,width:"20",height:"20"}),(0,y.jsxs)("span",{className:"align-middle",children:[a," ",c," x ",d," ",o]})]})}),(0,y.jsxs)(T.Z.Body,{className:"ps-0 pe-0",children:[(0,y.jsx)("div",{className:"pb-3 ms-3 me-3",children:(0,y.jsxs)("strong",{children:[(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,y.jsxs)("span",{className:"me-2 align-middle",children:[f.gst,"GST"]}),(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,y.jsxs)("span",{className:"align-middle",children:[f.gmt,"GMT"]})]})}),(0,y.jsx)(_,{className:"p-3 border-bottom border-top",label:"\u30df\u30f3\u30c8\u8cbb\u7528",cost:w}),(0,y.jsx)(_,{className:"p-3 border-bottom",label:"1\u8db3Lvup\u8cbb\u7528\u8fbc\u307f",cost:w+C}),(0,y.jsx)(_,{className:"p-3 border-bottom",label:"2\u8db3Lvup\u8cbb\u7528\u8fbc\u307f",cost:w+2*C}),(0,y.jsx)("div",{className:"ms-3 me-3 mt-3",children:(0,y.jsxs)("small",{children:["1\u8db3Lvup\u8cbb\u7528",(0,y.jsx)("br",{}),(0,y.jsxs)(F.Z,{children:[(0,y.jsxs)(P.Z,{children:[(C/Z).toFixed(2),v.unit]}),(0,y.jsxs)(P.Z,{children:["\xa5",C.toFixed(2)]})]})]})})]})]})]})},A=function(e){var t=e.mintingRate,n=e.rarerity1,s=e.rarerity2,r=e.realm,l=e.crypts,i=e.floorPrice;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"text-start",children:(0,y.jsx)("small",{children:"\u8cbb\u7528\u8868\u30bf\u30c3\u30d7\u3067\u8a73\u7d30\u3092\u78ba\u8a8d"})}),(0,y.jsx)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{}),M.map((function(e){return(0,y.jsx)("td",{style:{backgroundColor:k[n]},children:e},e)}))]}),M.map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{style:{backgroundColor:k[s]},children:e}),M.map((function(a){return(0,y.jsx)("td",{className:"p-0",children:(0,y.jsx)(U,{realm:r,crypts:l,mintingRate:t,r1:n,m1:a,r2:s,m2:e,floorPrice:i})},a)}))]},e)}))]})})]})},B=[{gst:40,gmt:160},{gst:80,gmt:120},{gst:100,gmt:100},{gst:120,gmt:80},{gst:160,gmt:40},{gst:200,gmt:0}],L=function(e){var t=e.realm,n=e.crypts,s=e.value,r=e.onChange,l=e.className,i=n.find((function(e){return e.id===u[t].gst})),a=n.find((function(e){return e.id===u[t].gmt}));return(0,h.useEffect)((function(){var e,s=(null===(e=n.find((function(e){return e.id===u[t].gst})))||void 0===e?void 0:e.usd)||5,l={gst:100,gmt:100};s<2?l={gst:200,gmt:0}:s>=2&&s<3?l={gst:160,gmt:40}:s>=3&&s<4?l={gst:120,gmt:80}:s>=4&&s<8?l={gst:100,gmt:100}:s>=8&&s<10?l={gst:80,gmt:120}:s>=10&&(l={gst:40,gmt:160}),r(l)}),[n,r]),(0,y.jsxs)(v.Z,{className:l,children:[(0,y.jsxs)(v.Z.Toggle,{variant:"outline-secondary",children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gst,".png"),alt:null===i||void 0===i?void 0:i.name,width:"20",height:"20"}),(0,y.jsxs)("span",{className:"me-2 align-middle",children:[s.gst,null===i||void 0===i?void 0:i.symbol]}),(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gmt,".png"),alt:null===a||void 0===a?void 0:a.name,width:"20",height:"20"}),(0,y.jsxs)("span",{className:"align-middle",children:[s.gmt,null===a||void 0===a?void 0:a.symbol]})]}),(0,y.jsx)(v.Z.Menu,{children:B.flatMap((function(e,n){var s=(0,y.jsx)(v.Z.Item,{onClick:function(){return r(e)},children:(0,y.jsxs)(F.Z,{children:[(0,y.jsxs)(P.Z,{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gst,".png"),alt:null===i||void 0===i?void 0:i.name,width:"20",height:"20"}),(0,y.jsxs)("span",{className:"me-2 align-middle",children:[e.gst,null===i||void 0===i?void 0:i.symbol]})]}),(0,y.jsxs)(P.Z,{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gmt,".png"),alt:null===a||void 0===a?void 0:a.name,width:"20",height:"20"}),(0,y.jsxs)("span",{className:"align-middle",children:[e.gmt,null===a||void 0===a?void 0:a.symbol]})]})]})},"".concat(e.gst,"-").concat(e.gmt));return 0===n?s:[(0,y.jsx)(v.Z.Divider,{},"divine-".concat(n)),s]}))})]})},q=n(2086),G=n(8984),R=function(e){var t=e.value,n=e.onChange;return(0,y.jsx)(q.Z,{className:"mb-2",children:Object.values(m).map((function(e){return(0,y.jsxs)(G.Z,{id:"radio-realm-".concat(e),type:"radio",variant:"light",name:"radio",value:e,checked:t===e,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return n(e.currentTarget.value)})),style:{backgroundColor:t===e?g[e]:""},children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[e].main,".png"),alt:e,width:"20",height:"20"}),(0,y.jsx)("span",{className:"align-middle",children:e})]},e)}))})},J=function(e){var t=e.id,n=e.value,s=e.onChange;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(q.Z,{className:"mb-2",children:Object.values(O).map((function(e){return(0,y.jsx)(G.Z,{id:"radio-rarerity-".concat(t,"-").concat(e),type:"radio",variant:"light",name:"radio",value:e,checked:n===e,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return s(e.currentTarget.value)})),style:{backgroundColor:n===e?k[e]:""},children:e},e)}))})})},z="CryptocurrenciesResponse",K=function(){var e=(0,d.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://script.google.com/macros/s/AKfycbxehX_2FJ-NopjtNC0EffWz0IAlw_HeInxY14M5R-p3WTC-HnBsQXB-WX1p6pvsvNud7A/exec");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,localStorage.setItem(z,JSON.stringify(n)),e.abrupt("return",n.map((function(e){return{id:e.id,symbol:e.symbol,name:e.name,short:e.short,jpy:e.jpy,usd:e.usd,lastUpdatedAt:new Date(e.lastUpdatedAt)}})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=localStorage.getItem(z);return e?JSON.parse(e).map((function(e){return{id:e.id,symbol:e.symbol,name:e.name,short:e.short,jpy:e.jpy,usd:e.usd,lastUpdatedAt:new Date(e.lastUpdatedAt)}})):null},H=n(2540),Y=n(6661),W=n(7905),Q=n(682);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(){var e,t=(0,H.useRouter)(),n=(0,h.useState)([]),s=n[0],r=n[1],l=(0,h.useState)({gst:100,gmt:100}),a=l[0],o=l[1],g=(0,h.useState)(O.Common),j=g[0],f=g[1],v=(0,h.useState)(O.Common),b=v[0],w=v[1],C=(0,h.useState)(m.Solana),k=C[0],F=C[1],P=(0,h.useState)(""),E=P[0],T=P[1],_=(0,h.useState)({}),D=_[0],M=_[1],I=(0,h.useState)("home"),U=I[0],B=I[1],q=function(){var e=(0,d.Z)(c().mark((function e(){var t,n,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=X())){e.next=5;break}if(r(t),!((new Date).getTime()<((null===(n=t[0])||void 0===n?void 0:n.lastUpdatedAt.getTime())||0)+3e5)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,K();case 7:s=e.sent,r(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){q(),setInterval(q,6e4)}),[]);var G=function(e){window.history.replaceState({},"","".concat(window.location.origin).concat(window.location.pathname,"?").concat(Object.entries(V({},e)).flatMap((function(e){return e[1]?["".concat(e[0],"=").concat(e[1])]:[]})).join("&")))};return(0,h.useEffect)((function(){G(V({tab:U,realm:k},D))}),[G,k,D]),(0,h.useEffect)((function(){T(String(D[k]))}),[k]),(0,h.useEffect)((function(){M((function(e){return V(V({},e),{},(0,i.Z)({},k,Number(E)))}))}),[E]),(0,h.useEffect)((function(){var e=t.query.realm;t.query.tab&&B(t.query.tab),t.query.realm&&F(e),t.query[e]&&T(String(t.query[e])),Object.values(m).forEach((function(e){t.query[e]&&M((function(n){return V(V({},n),{},(0,i.Z)({},e,Number(t.query[e])))}))}))}),[t.query]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(Y.Z,{className:"fs-6 justify-content-center",activeKey:U,onSelect:function(e){B(e)},children:[(0,y.jsx)(W.Z,{eventKey:"home",title:"\u30df\u30f3\u30c8\u8cbb\u7528",children:(0,y.jsxs)(Q.Z,{className:"mt-2",children:[(0,y.jsx)(Z,{crypts:s.filter((function(e){return e.id===u[k].main||e.id===u[k].gst||e.id===u[k].gmt})),className:"mb-2"}),(0,y.jsx)(R,{value:k,onChange:F}),(0,y.jsx)(L,{className:"mb-2",realm:k,crypts:s,value:a,onChange:o}),(0,y.jsx)(J,{id:"r1",value:j,onChange:f}),(0,y.jsx)(J,{id:"r2",value:b,onChange:w}),(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(x.Z,{controlId:"floatingInput",label:"\u30d5\u30ed\u30a2\u4fa1\u683c(".concat(u[k].unit,")"),className:"mb-3",children:(0,y.jsx)(p.Z.Control,{type:"number",value:E,onChange:function(e){T(e.target.value)}})})}),(0,y.jsx)(A,{mintingRate:a,rarerity1:j,rarerity2:b,realm:k,crypts:s,floorPrice:D[k]||0})]})}),(0,y.jsx)(W.Z,{eventKey:"crypts",title:"\u901a\u8ca8\u4fa1\u683c",children:(0,y.jsxs)(Q.Z,{className:"mt-2",children:[(0,y.jsx)(Z,{crypts:s,className:"mb-3"}),(0,y.jsx)(N,{crypts:s,realm:k})]})}),(0,y.jsx)(W.Z,{eventKey:"levelup",title:"Lvup\u8cbb\u7528",children:(0,y.jsxs)(Q.Z,{className:"mt-2",children:[(0,y.jsx)(R,{value:k,onChange:F}),(0,y.jsx)(S,{crypts:s,realm:k}),(0,y.jsx)("div",{className:"text-end",children:(0,y.jsxs)("small",{children:["\u6700\u7d42\u66f4\u65b0\u65e5\u6642 ",null===(e=s[0])||void 0===e?void 0:e.lastUpdatedAt.toLocaleString()]})})]})})]})})};ee.suppressFirstRenderFlicker=!0;var te=ee},7540:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7516)}])}},function(e){e.O(0,[774,92,888,179],(function(){return t=7540,e(e.s=t);var t}));var t=e.O();_N_E=t}]);