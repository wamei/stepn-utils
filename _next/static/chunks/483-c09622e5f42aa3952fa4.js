"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{5077:function(e,n,s){s.d(n,{D:function(){return a}});s(7294);var t=s(5147),r=s(5646),i=s(5893),a=function(e){var n,s=e.crypts,a=e.className;return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)(t.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,i.jsx)("tbody",{children:s.filter((function(e){return"bitcoin"!==e.id})).map((function(e){return(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{className:"text-nowrap",children:[(0,i.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,i.jsx)("span",{className:"align-middle",children:e.short})]}),(0,i.jsxs)("td",{className:"text-end",children:["\xa5",(0,i.jsx)(r.g,{value:e.jpy.toFixed(3)})]}),(0,i.jsxs)("td",{className:"text-end",children:["$",(0,i.jsx)(r.g,{value:e.usd.toFixed(3)})]})]},e.id)}))})}),(0,i.jsx)("div",{className:"text-end",style:{marginTop:"-6px"},children:(0,i.jsxs)("span",{style:{fontSize:"8px"},children:["\u6700\u7d42\u66f4\u65b0\u65e5\u6642 ",null===(n=s[0])||void 0===n?void 0:n.lastUpdatedAt.toLocaleString()]})})]})}},6559:function(e,n,s){s.d(n,{e:function(){return a}});s(7294);var t=s(2178),r=s(1555),i=s(5893),a=function(e){var n=e.children,s=e.label,a=e.className;return(0,i.jsxs)(t.Z.Group,{as:r.Z,className:"".concat(a),children:[(0,i.jsx)(t.Z.Label,{style:{transform:"scale(.82)"},className:"text-muted",children:s}),(0,i.jsx)(r.Z,{children:n})]})}},6300:function(e,n,s){s.d(n,{t:function(){return f},p:function(){return b}});var t=s(2809),r=s(6868),i=s(9396),a=s(8655),l=s(7294),c=s(4051),o=s(1555),d=s(5005),m=s(1881),u=s(5147),x=s(5646),h=s(5893);function g(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function j(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?g(Object(s),!0).forEach((function(n){(0,t.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}var p=[0,1,2,3,4,5,6],f=function(e,n,s,l,c,o,d,m,u,x){var h,g,p,f,v,b,N=(h={},(0,t.Z)(h,a.s.Common,s),(0,t.Z)(h,a.s.Uncommon,l),(0,t.Z)(h,a.s.Rare,c),(0,t.Z)(h,a.s.Epic,l),(0,t.Z)(h,a.s.Legendary,l),h),y=N[o].gst/2,Z=N[m].gst/2,w=N[o].gmt/2,P=N[m].gmt/2,C=(null===(g=n.find((function(n){return n.id===i.TX[e].gst})))||void 0===g?void 0:g.usd)||0,k={gst:y+y/2*Math.max(0,d-1)+Z+Z/2*Math.max(0,u-1),gmt:w+w/2*Math.max(0,d-1)+P+P/2*Math.max(0,u-1)},T=(0,r.it)(k,C),O={costGst:k.gst,costGmt:k.gmt+T},F=i.TX[e],L=(null===(p=n.find((function(e){return e.id===F.gst})))||void 0===p?void 0:p.jpy)||0,R=(null===(f=n.find((function(e){return e.id===F.gmt})))||void 0===f?void 0:f.jpy)||0,G=(null===(v=n.find((function(e){return e.id===F.main})))||void 0===v?void 0:v.jpy)||0,S=(null===(b=n.find((function(e){return e.id===F.main})))||void 0===b?void 0:b.usd)||0,B=1.02*(O.costGst*L+O.costGmt*R),X=20*L+10*R,M=B/.94,U=(B+X)/.94,z=(B+2*X)/.94,D=x*G*.94-B,E=x*G*.94-B-X,_=x*G*.94-B-2*X;return j(j({},O),{},{gstPrice:L,gmtPrice:R,mainPrice:G,mainPriceUsd:S,mintPrice:B,lvupPrice:X,lowestPrice:M,lowestLvupPrice:U,lowest2LvupPrice:z,lowestBenefit:D,lowestLvupBenefit:E,lowest2LvupBenefit:_})},v=function(e){var n=e.realm,s=e.crypts,t=e.mintingRateCommon,r=e.mintingRateUncommon,u=e.mintingRateRare,g=e.r1,p=e.m1,v=e.r2,b=e.m2,N=e.floorPrice;if(!n)throw new Promise((function(e){e("realm not found")}));var y=(0,l.useState)(!1),Z=y[0],w=y[1],P=f(n,s,t,r,u,g,p,v,b,N),C=P.costGst,k=P.costGmt,T=P.mainPrice,O=P.mintPrice,F=P.lvupPrice,L=P.lowestPrice,R=P.lowestLvupPrice,G=P.lowest2LvupPrice,S=P.lowestBenefit,B=P.lowestLvupBenefit,X=P.lowest2LvupBenefit,M=i.TX[n],U=function(e){var n=e.label,s=e.cost,t=e.lowestPrice,r=e.benefit,i=e.className;return(0,h.jsxs)("div",{style:j({},N<t/T?{backgroundColor:"rgba(255, 0, 0, 0.1)"}:{}),className:i,children:[(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(o.Z,{xs:5,children:n}),(0,h.jsxs)(o.Z,{className:"text-end",children:[(0,h.jsx)(x.g,{value:(s/T).toFixed(2)}),M.unit]}),(0,h.jsxs)(o.Z,{className:"text-end",children:["\xa5",(0,h.jsx)(x.g,{value:s.toFixed(2)})]})]}),(0,h.jsxs)(c.Z,{className:"fw-bold",children:[(0,h.jsx)(o.Z,{xs:5,children:"\u6700\u4f4e\u8ca9\u58f2\u4fa1\u683c"}),(0,h.jsxs)(o.Z,{className:"text-end",children:[(0,h.jsx)(x.g,{value:(t/T).toFixed(2)}),M.unit]}),(0,h.jsxs)(o.Z,{className:"text-end",children:["\xa5",(0,h.jsx)(x.g,{value:t.toFixed(2)})]})]}),(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(o.Z,{xs:5,children:(0,h.jsx)("small",{children:"\u5229\u76ca"})}),(0,h.jsx)(o.Z,{className:"text-end",children:(0,h.jsxs)("small",{className:"".concat(r<0?"text-danger":""),children:[(0,h.jsx)(x.g,{value:(r/T).toFixed(2)}),M.unit]})}),(0,h.jsx)(o.Z,{className:"text-end",children:(0,h.jsxs)("small",{className:"".concat(r<0?"text-danger":""),children:["\xa5",(0,h.jsx)(x.g,{value:r.toFixed(2)})]})})]})]})};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{style:j({},X>0?{}:B>0?{backgroundColor:"rgba(255, 0, 0, 0.1)"}:S>0?{backgroundColor:"rgba(255, 0, 0, 0.2)"}:{backgroundColor:"rgba(255, 0, 0, 0.3)"}),children:(0,h.jsxs)(d.Z,{variant:"link",onClick:function(){return w(!0)},className:"w-100 text-start d-block p-0 text-body text-decoration-none",children:[(0,h.jsxs)("small",{className:"text-nowrap",children:[(0,h.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(i.TX[n].gst,".png"),alt:"GST",width:"10",height:"10"}),(0,h.jsx)("span",{className:"align-middle",children:C})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("small",{className:"text-nowrap",children:[(0,h.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(i.TX[n].gmt,".png"),alt:"GMT",width:"10",height:"10"}),(0,h.jsx)("span",{className:"align-middle",children:k})]})]})}),(0,h.jsxs)(m.Z,{show:Z,onHide:function(){return w(!1)},children:[(0,h.jsx)(m.Z.Header,{style:{backgroundColor:i.Z3[n]},closeButton:!0,children:(0,h.jsxs)(m.Z.Title,{children:[(0,h.jsx)("img",{className:"me-2 align-middle",src:"/stepn-utils/".concat(i.TX[n].main,".png"),alt:n,width:"20",height:"20"}),(0,h.jsxs)("span",{className:"align-middle",children:[(0,h.jsxs)("span",{className:"rounded p-1",style:{backgroundColor:a.P[g]},children:[g," ",p]})," ","x"," ",(0,h.jsxs)("span",{className:"rounded p-1",style:{backgroundColor:a.P[v]},children:[v," ",b]})]})]})}),(0,h.jsxs)(m.Z.Body,{className:"ps-0 pe-0",children:[(0,h.jsxs)("div",{className:"pb-3 ms-3 me-3 fw-bold",children:[(0,h.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(i.TX[n].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,h.jsxs)("span",{className:"me-2 align-middle",children:[C,"GST"]}),(0,h.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(i.TX[n].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,h.jsxs)("span",{className:"align-middle",children:[k,"GMT"]})]}),(0,h.jsx)(U,{className:"p-3 border-bottom border-top",label:"\u30df\u30f3\u30c8\u8cbb\u7528",cost:O,lowestPrice:L,benefit:S}),(0,h.jsx)(U,{className:"p-3 border-bottom",label:"1\u8db3\u5206Lvup\u8cbb\u7528\u8fbc",cost:O+F,lowestPrice:R,benefit:B}),(0,h.jsx)(U,{className:"p-3 border-bottom",label:"2\u8db3\u5206Lvup\u8cbb\u7528\u8fbc",cost:O+2*F,lowestPrice:G,benefit:X}),(0,h.jsxs)(c.Z,{className:"p-3 pb-0",children:[(0,h.jsx)(o.Z,{xs:5,children:(0,h.jsx)("small",{children:"1\u8db3\u5206Lvup\u8cbb\u7528"})}),(0,h.jsx)(o.Z,{className:"text-end",children:(0,h.jsxs)("small",{children:[(0,h.jsx)(x.g,{value:(F/T).toFixed(2)}),M.unit]})}),(0,h.jsx)(o.Z,{className:"text-end",children:(0,h.jsxs)("small",{children:["\xa5",(0,h.jsx)(x.g,{value:F.toFixed(2)})]})})]})]})]})]})},b=function(e){var n=e.mintingRateCommon,s=e.mintingRateUncommon,t=e.mintingRateRare,r=e.rarerity1,i=e.rarerity2,l=e.realm,c=e.crypts,o=e.floorPrice;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"text-start",children:(0,h.jsx)("small",{children:"\u8cbb\u7528\u8868\u30bf\u30c3\u30d7\u3067\u8a73\u7d30\u3092\u78ba\u8a8d"})}),(0,h.jsx)(u.Z,{bordered:!0,size:"sm",children:(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{}),p.map((function(e){return(0,h.jsx)("td",{className:"pt-0 pb-0",style:{backgroundColor:a.P[r]},children:(0,h.jsx)("small",{children:e})},e)}))]}),p.map((function(e){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:"pe-0",style:{backgroundColor:a.P[i]},children:(0,h.jsx)("small",{children:e})}),p.map((function(a){return(0,h.jsx)("td",{className:"p-0",children:(0,h.jsx)(v,{realm:l,crypts:c,mintingRateCommon:n,mintingRateUncommon:s,mintingRateRare:t,r1:r,m1:a,r2:i,m2:e,floorPrice:o})},a)}))]},e)}))]})})]})}},5521:function(e,n,s){s.d(n,{K:function(){return l}});var t=s(9396),r=(s(7294),s(2086)),i=s(8984),a=s(5893),l=function(e){var n=e.value,s=e.onChange,l=e.className;return(0,a.jsx)(r.Z,{className:l,children:Object.values(t.B_).map((function(e){return(0,a.jsxs)(i.Z,{id:"radio-realm-".concat(e),type:"radio",variant:"light",value:e,checked:n===e,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return s(e.currentTarget.value)})),style:{backgroundColor:n===e?t.Z3[e]:""},size:"sm",children:[(0,a.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(t.TX[e].main,".png"),alt:e,width:"20",height:"20"}),(0,a.jsx)("span",{className:"align-middle",children:e})]},e)}))})}},3673:function(e,n,s){s.d(n,{W:function(){return o}});var t=s(8655),r=(s(7294),s(2086)),i=s(8984),a=s(7663),l=s(5893),c=[t.s.Common,t.s.Uncommon,t.s.Rare],o=function(e){var n=e.value,s=e.onChange,o=e.className;return"button"===e.type?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{className:o,children:c.map((function(e){return(0,l.jsx)(i.Z,{id:"radio-rarerity-".concat(e),type:"radio",variant:"light",value:e,checked:n===e,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return s(e.currentTarget.value)})),style:{backgroundColor:n===e?t.P[e]:""},size:"sm",children:e},e)}))})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a.Z,{className:o,children:[(0,l.jsx)(a.Z.Toggle,{variant:"light",style:{backgroundColor:t.P[n]},className:"w-100",size:"sm",children:n}),(0,l.jsx)(a.Z.Menu,{children:c.map((function(e){return(0,l.jsx)(a.Z.Item,{onClick:function(){return s(e)},style:{backgroundColor:t.P[e]},children:e},e)}))})]})})}}}]);