(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6756:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return A}});var r,i,s,a=e(809),o=e.n(a),u=e(266),c=e(2809),d={Solana:"Solana",BSC:"BSC"},l=(r={},(0,c.Z)(r,d.Solana,{main:"solana",unit:"SOL",gst:"green-satoshi-token",gmt:"green-metaverse-token"}),(0,c.Z)(r,d.BSC,{main:"bnb",unit:"BNB",gst:"green-satoshi-token-bsc",gmt:"green-metaverse-token"}),r),m=(i={},(0,c.Z)(i,d.Solana,"#00ffbd"),(0,c.Z)(i,d.BSC,"#FCD535"),i),g={Common:"Common",Uncommon:"Uncommon"},h=(s={},(0,c.Z)(s,g.Common,"#d3d3d3"),(0,c.Z)(s,g.Uncommon,"#98fb98"),s),f=e(7294),x=e(3458),v=e(5147),j=e(5893),p=[0,1,2,3,4,5,6],y=function(n){return n===g.Uncommon?4:1},C=function(n){var t,e,r,i=n.realm,s=n.crypts,a=n.mintingRate,o=n.r1,u=n.m1,c=n.r2,d=n.m2,m=(0,f.useState)(!1),g=m[0],h=m[1],v=function(n,t,e,r,i){var s=n.gst/2*y(t),a=n.gst/2*y(r),o=n.gmt/2*y(t),u=n.gmt/2*y(r);return{gst:s+s/2*Math.max(0,e-1)+a+a/2*Math.max(0,i-1),gmt:o+o/2*Math.max(0,e-1)+u+u/2*Math.max(0,i-1)}}(a,o,u,c,d),p=l[i],C=(null===(t=s.find((function(n){return n.id===p.gst})))||void 0===t?void 0:t.jpy)||0,S=(null===(e=s.find((function(n){return n.id===p.gmt})))||void 0===e?void 0:e.jpy)||0,Z=(null===(r=s.find((function(n){return n.id===p.main})))||void 0===r?void 0:r.jpy)||0,b=1.02*(v.gst*C+v.gmt*S),k=20*C+10*S;return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{onClick:function(){return h(!0)},children:[v.gst," / ",v.gmt]}),(0,j.jsxs)(x.Z,{show:g,onHide:function(){return h(!1)},children:[(0,j.jsx)(x.Z.Header,{closeButton:!0,children:(0,j.jsxs)(x.Z.Title,{children:[i," ",o," ",u," x ",c," ",d]})}),(0,j.jsxs)(x.Z.Body,{children:[(0,j.jsxs)("div",{children:["\u30df\u30f3\u30c8\u8cbb\u7528: GST",v.gst,"-GMT",v.gmt]}),(0,j.jsxs)("div",{children:["\u30df\u30f3\u30c8\u8cbb\u7528\uff08BNB\uff09: ",(b/Z).toFixed(2),p.unit]}),(0,j.jsxs)("div",{children:["\u30df\u30f3\u30c8\u8cbb\u7528\uff08\u5186\uff09: \xa5",b.toFixed(2)]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("div",{children:["Lvup\u8cbb\u7528: \xa5",(k/Z).toFixed(2),p.unit]}),(0,j.jsxs)("div",{children:["\u30df\u30f3\u30c8\u8cbb\u7528\uff08Lvup\u8fbc\uff09: \xa5",((b+k)/Z).toFixed(2),p.unit]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("div",{children:["\u6700\u4f4e\u8ca9\u58f2\u4fa1\u683c: \xa5",((b+k)/.94/Z).toFixed(2),p.unit]})]})]})]})},S=function(n){var t=n.mintingRate,e=n.rarerity1,r=n.rarerity2,i=n.realm,s=n.crypts;return(0,j.jsx)(v.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:(0,j.jsxs)("tbody",{children:[(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{}),p.map((function(n){return(0,j.jsx)("td",{style:{backgroundColor:h[e]},children:n},n)}))]}),p.map((function(n){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:{backgroundColor:h[r]},children:n}),p.map((function(a){return(0,j.jsx)("td",{children:(0,j.jsx)(C,{realm:i,crypts:s,mintingRate:t,r1:e,m1:a,r2:r,m2:n})},a)}))]},n)}))]})})},Z=e(3319),b=[{gst:40,gmt:160},{gst:80,gmt:120},{gst:100,gmt:100},{gst:120,gmt:80},{gst:160,gmt:40},{gst:200,gmt:0}],k=function(n){n.value;var t=n.onChange,e=n.gstPrice,r=(0,f.useState)({gst:100,gmt:100}),i=r[0],s=r[1];return(0,f.useEffect)((function(){e<2?s({gst:200,gmt:0}):e>=2&&e<3?s({gst:160,gmt:40}):e>=3&&e<4?s({gst:120,gmt:80}):e>=4&&e<8?s({gst:100,gmt:100}):e>=8&&e<10?s({gst:80,gmt:120}):e>=10&&s({gst:40,gmt:160})}),[e]),(0,j.jsx)(Z.Z.Select,{value:JSON.stringify(i),onChange:function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n){var e=JSON.parse(n.target.value);s(e),t(e)})),className:"mb-2",children:b.map((function(n){var t=JSON.stringify(n);return(0,j.jsxs)("option",{value:t,children:["GST",n.gst,"-GMT",n.gmt]},t)}))})},N=e(2086),B=e(4381),_=function(n){var t=n.value,e=n.onChange;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(N.Z,{className:"mb-2",children:Object.values(d).map((function(n){return(0,j.jsx)(B.Z,{id:"radio-realm-".concat(n),type:"radio",variant:"light",name:"radio",value:n,checked:t===n,onChange:function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n){return e(n.currentTarget.value)})),style:{backgroundColor:t===n?m[n]:""},children:n},n)}))})})},w=function(n){var t=n.id,e=n.value,r=n.onChange;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(N.Z,{className:"mb-2",children:Object.values(g).map((function(n){return(0,j.jsx)(B.Z,{id:"radio-rarerity-".concat(t,"-").concat(n),type:"radio",variant:"light",name:"radio",value:n,checked:e===n,onChange:function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n){return r(n.currentTarget.value)})),style:{backgroundColor:e===n?h[n]:""},children:n},n)}))})})},F=function(){var n=(0,u.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://script.google.com/macros/s/AKfycbxehX_2FJ-NopjtNC0EffWz0IAlw_HeInxY14M5R-p3WTC-HnBsQXB-WX1p6pvsvNud7A/exec");case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e.map((function(n){return{id:n.id,symbol:n.symbol,name:n.name,jpy:n.jpy,usd:n.usd,lastUpdatedAt:new Date(n.lastUpdatedAt)}})));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=e(682),E=e(5273),O=function(){var n,t=(0,f.useState)([]),e=t[0],r=t[1],i=(0,f.useState)({gst:100,gmt:100}),s=i[0],a=i[1],c=(0,f.useState)(g.Common),m=c[0],h=c[1],x=(0,f.useState)(g.Common),p=x[0],y=x[1],C=(0,f.useState)(d.BSC),Z=C[0],b=C[1],N=function(){var n=(0,u.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,F();case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,f.useEffect)((function(){N()}),[]),(0,j.jsxs)(T.Z,{className:"mt-0 p-0",children:[(0,j.jsx)(E.Z,{defaultActiveKey:"0",children:(0,j.jsxs)(E.Z.Item,{eventKey:"0",children:[(0,j.jsx)(E.Z.Header,{children:"\u4eee\u60f3\u901a\u8ca8\u4fa1\u683c"}),(0,j.jsxs)(E.Z.Body,{children:[0===e.length&&(0,j.jsx)("p",{children:"Loading..."}),(0,j.jsx)(v.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:(0,j.jsx)("tbody",{children:e.map((function(n){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:n.symbol}),(0,j.jsxs)("td",{children:["\xa5",n.jpy]}),(0,j.jsxs)("td",{children:["$",n.usd]})]},n.id)}))})})]})]})}),(0,j.jsx)(E.Z,{defaultActiveKey:"0",children:(0,j.jsxs)(E.Z.Item,{eventKey:"0",children:[(0,j.jsx)(E.Z.Header,{children:"\u30df\u30f3\u30c8\u8cbb\u7528"}),(0,j.jsxs)(E.Z.Body,{children:[(0,j.jsx)(_,{value:Z,onChange:b}),(0,j.jsx)(k,{value:s,onChange:a,gstPrice:(null===(n=e.find((function(n){return n.id===l[Z].gst})))||void 0===n?void 0:n.usd)||5}),(0,j.jsx)(w,{id:"r1",value:m,onChange:h}),(0,j.jsx)(w,{id:"r2",value:p,onChange:y}),(0,j.jsx)(S,{mintingRate:s,rarerity1:m,rarerity2:p,realm:Z,crypts:e})]})]})})]})};O.suppressFirstRenderFlicker=!0;var A=O},7540:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(6756)}])}},function(n){n.O(0,[774,762,888,179],(function(){return t=7540,n(n.s=t);var t}));var t=n.O();_N_E=t}]);