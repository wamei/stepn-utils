(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{5077:function(e,n,s){"use strict";s.d(n,{D:function(){return r}});s(7294);var t=s(5147),i=s(5893),r=function(e){var n,s=e.crypts,r=e.className;return(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)(t.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,i.jsx)("tbody",{children:s.map((function(e){return(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,i.jsx)("span",{className:"align-middle",children:e.short})]}),(0,i.jsxs)("td",{children:["\xa5",e.jpy]}),(0,i.jsxs)("td",{children:["$",e.usd]})]},e.id)}))})}),(0,i.jsx)("div",{className:"text-end",style:{marginTop:"-6px"},children:(0,i.jsxs)("span",{style:{fontSize:"8px"},children:["\u6700\u7d42\u66f4\u65b0\u65e5\u6642 ",null===(n=s[0])||void 0===n?void 0:n.lastUpdatedAt.toLocaleString()]})})]})}},6559:function(e,n,s){"use strict";s.d(n,{e:function(){return l}});s(7294);var t=s(2178),i=s(1555),r=s(5893),l=function(e){var n=e.children,s=e.label,l=e.className;return(0,r.jsxs)(t.Z.Group,{as:i.Z,className:"".concat(l),children:[(0,r.jsx)(t.Z.Label,{style:{transform:"scale(.82)"},className:"text-muted",children:s}),(0,r.jsx)(i.Z,{children:n})]})}},6300:function(e,n,s){"use strict";s.d(n,{t:function(){return p},p:function(){return v}});var t=s(2809),i=s(6868),r=s(9396),l=s(7257),a=s(7294),c=s(4051),o=s(1555),d=s(5005),m=s(1881),u=s(5147),g=s(5893);function h(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function x(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?h(Object(s),!0).forEach((function(n){(0,t.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}var j=[0,1,2,3,4,5,6],p=function(e,n,s,a,c,o,d,m,u){var g,h,j,p,f,v,b=(g={},(0,t.Z)(g,l.J.Common,s),(0,t.Z)(g,l.J.Uncommon,a),(0,t.Z)(g,l.J.Rare,a),(0,t.Z)(g,l.J.Epic,a),(0,t.Z)(g,l.J.Legendary,a),g),N=b[c].gst/2,y=b[d].gst/2,Z=b[c].gmt/2,w=b[d].gmt/2,C=(null===(h=n.find((function(n){return n.id===r.TX[e].gst})))||void 0===h?void 0:h.usd)||0,P={gst:N+N/2*Math.max(0,o-1)+y+y/2*Math.max(0,m-1),gmt:Z+Z/2*Math.max(0,o-1)+w+w/2*Math.max(0,m-1)},T=(0,i.it)(P,C),k={costGst:P.gst,costGmt:P.gmt+T},X=r.TX[e],R=(null===(j=n.find((function(e){return e.id===X.gst})))||void 0===j?void 0:j.jpy)||0,S=(null===(p=n.find((function(e){return e.id===X.gmt})))||void 0===p?void 0:p.jpy)||0,O=(null===(f=n.find((function(e){return e.id===X.main})))||void 0===f?void 0:f.jpy)||0,L=(null===(v=n.find((function(e){return e.id===X.main})))||void 0===v?void 0:v.usd)||0,F=1.02*(k.costGst*R+k.costGmt*S),G=20*R+10*S,U=F/.94,_=(F+G)/.94,J=(F+2*G)/.94,B=u*O*.94-F,E=u*O*.94-F-G,M=u*O*.94-F-2*G;return x(x({},k),{},{gstPrice:R,gmtPrice:S,mainPrice:O,mainPriceUsd:L,mintPrice:F,lvupPrice:G,lowestPrice:U,lowestLvupPrice:_,lowest2LvupPrice:J,lowestBenefit:B,lowestLvupBenefit:E,lowest2LvupBenefit:M})},f=function(e){var n=e.realm,s=e.crypts,t=e.mintingRateCommon,i=e.mintingRateUncommon,u=e.r1,h=e.m1,j=e.r2,f=e.m2,v=e.floorPrice;if(!n)throw new Promise((function(e){e("realm not found")}));var b=(0,a.useState)(!1),N=b[0],y=b[1],Z=p(n,s,t,i,u,h,j,f,v),w=Z.costGst,C=Z.costGmt,P=Z.mainPrice,T=Z.mintPrice,k=Z.lvupPrice,X=Z.lowestPrice,R=Z.lowestLvupPrice,S=Z.lowest2LvupPrice,O=Z.lowestBenefit,L=Z.lowestLvupBenefit,F=Z.lowest2LvupBenefit,G=r.TX[n],U=function(e){var n=e.label,s=e.cost,t=e.lowestPrice,i=e.benefit,r=e.className;return(0,g.jsxs)("div",{style:x({},v<t/P?{backgroundColor:"rgba(255, 0, 0, 0.1)"}:{}),className:r,children:[(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(o.Z,{xs:5,children:n}),(0,g.jsxs)(o.Z,{children:[(s/P).toFixed(2),G.unit]}),(0,g.jsxs)(o.Z,{children:["\xa5",s.toFixed(2)]})]}),(0,g.jsxs)(c.Z,{className:"fw-bold",children:[(0,g.jsx)(o.Z,{xs:5,children:"\u6700\u4f4e\u8ca9\u58f2\u4fa1\u683c"}),(0,g.jsxs)(o.Z,{children:[(t/P).toFixed(2),G.unit]}),(0,g.jsxs)(o.Z,{children:["\xa5",t.toFixed(2)]})]}),(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(o.Z,{xs:5,children:(0,g.jsx)("small",{children:"\u5229\u76ca"})}),(0,g.jsx)(o.Z,{children:(0,g.jsxs)("small",{className:"".concat(i<0?"text-danger":""),children:[(i/P).toFixed(2),G.unit]})}),(0,g.jsx)(o.Z,{children:(0,g.jsxs)("small",{className:"".concat(i<0?"text-danger":""),children:["\xa5",i.toFixed(2)]})})]})]})};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{style:x({},F>0?{}:L>0?{backgroundColor:"rgba(255, 0, 0, 0.1)"}:O>0?{backgroundColor:"rgba(255, 0, 0, 0.2)"}:{backgroundColor:"rgba(255, 0, 0, 0.3)"}),children:(0,g.jsxs)(d.Z,{variant:"link",onClick:function(){return y(!0)},className:"w-100 text-start d-block p-0 text-body text-decoration-none",children:[(0,g.jsxs)("small",{className:"text-nowrap",children:[(0,g.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(r.TX[n].gst,".png"),alt:"GST",width:"10",height:"10"}),(0,g.jsx)("span",{className:"align-middle",children:w})]}),(0,g.jsx)("br",{}),(0,g.jsxs)("small",{className:"text-nowrap",children:[(0,g.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(r.TX[n].gmt,".png"),alt:"GMT",width:"10",height:"10"}),(0,g.jsx)("span",{className:"align-middle",children:C})]})]})}),(0,g.jsxs)(m.Z,{show:N,onHide:function(){return y(!1)},children:[(0,g.jsx)(m.Z.Header,{style:{backgroundColor:r.Z3[n]},closeButton:!0,children:(0,g.jsxs)(m.Z.Title,{children:[(0,g.jsx)("img",{className:"me-2 align-middle",src:"/stepn-utils/".concat(r.TX[n].main,".png"),alt:n,width:"20",height:"20"}),(0,g.jsxs)("span",{className:"align-middle",children:[(0,g.jsxs)("span",{className:"rounded p-1",style:{backgroundColor:l.m[u]},children:[u," ",h]})," ","x"," ",(0,g.jsxs)("span",{className:"rounded p-1",style:{backgroundColor:l.m[j]},children:[j," ",f]})]})]})}),(0,g.jsxs)(m.Z.Body,{className:"ps-0 pe-0",children:[(0,g.jsxs)("div",{className:"pb-3 ms-3 me-3 fw-bold",children:[(0,g.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(r.TX[n].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,g.jsxs)("span",{className:"me-2 align-middle",children:[w,"GST"]}),(0,g.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(r.TX[n].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,g.jsxs)("span",{className:"align-middle",children:[C,"GMT"]})]}),(0,g.jsx)(U,{className:"p-3 border-bottom border-top",label:"\u30df\u30f3\u30c8\u8cbb\u7528",cost:T,lowestPrice:X,benefit:O}),(0,g.jsx)(U,{className:"p-3 border-bottom",label:"1\u8db3\u5206Lvup\u8cbb\u7528\u8fbc",cost:T+k,lowestPrice:R,benefit:L}),(0,g.jsx)(U,{className:"p-3 border-bottom",label:"2\u8db3\u5206Lvup\u8cbb\u7528\u8fbc",cost:T+2*k,lowestPrice:S,benefit:F}),(0,g.jsx)("div",{className:"ms-3 me-3 mt-3",children:(0,g.jsxs)("small",{children:["1\u8db3\u5206Lvup\u8cbb\u7528",(0,g.jsx)("br",{}),(0,g.jsxs)(c.Z,{children:[(0,g.jsxs)(o.Z,{children:[(k/P).toFixed(2),G.unit]}),(0,g.jsxs)(o.Z,{children:["\xa5",k.toFixed(2)]})]})]})})]})]})]})},v=function(e){var n=e.mintingRateCommon,s=e.mintingRateUncommon,t=e.rarerity1,i=e.rarerity2,r=e.realm,a=e.crypts,c=e.floorPrice;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"text-start",children:(0,g.jsx)("small",{children:"\u8cbb\u7528\u8868\u30bf\u30c3\u30d7\u3067\u8a73\u7d30\u3092\u78ba\u8a8d"})}),(0,g.jsx)(u.Z,{bordered:!0,size:"sm",children:(0,g.jsxs)("tbody",{children:[(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{}),j.map((function(e){return(0,g.jsx)("td",{className:"pt-0 pb-0",style:{backgroundColor:l.m[t]},children:(0,g.jsx)("small",{children:e})},e)}))]}),j.map((function(e){return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"pe-0",style:{backgroundColor:l.m[i]},children:(0,g.jsx)("small",{children:e})}),j.map((function(l){return(0,g.jsx)("td",{className:"p-0",children:(0,g.jsx)(f,{realm:r,crypts:a,mintingRateCommon:n,mintingRateUncommon:s,r1:t,m1:l,r2:i,m2:e,floorPrice:c})},l)}))]},e)}))]})})]})}},5521:function(e,n,s){"use strict";s.d(n,{K:function(){return a}});var t=s(9396),i=(s(7294),s(2086)),r=s(8984),l=s(5893),a=function(e){var n=e.value,s=e.onChange,a=e.className;return(0,l.jsx)(i.Z,{className:a,children:Object.values(t.B_).map((function(e){return(0,l.jsxs)(r.Z,{id:"radio-realm-".concat(e),type:"radio",variant:"light",value:e,checked:n===e,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return s(e.currentTarget.value)})),style:{backgroundColor:n===e?t.Z3[e]:""},size:"sm",children:[(0,l.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(t.TX[e].main,".png"),alt:e,width:"20",height:"20"}),(0,l.jsx)("span",{className:"align-middle",children:e})]},e)}))})}},9994:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return T}});var t=s(682),i=s(9396),r=s(7294),l=s(4051),a=s(2178),c=s(1814),o=s(6650),d=s(5005),m=s(2230),u=s(6559),g=s(6300),h=s(6868),x=s(2315),j=s(2086),p=s(7663),f=s(1555),v=s(5893),b=function(e){var n=e.realm,s=e.crypts,t=e.mintingRateList,c=e.value,o=e.onChange,d=e.className,m=(0,r.useState)(String(c.gst)),u=m[0],g=m[1],b=(0,r.useState)(String(c.gmt)),N=b[0],y=b[1],Z=(0,r.useState)(!1),w=Z[0],C=Z[1],P=s.find((function(e){return e.id===i.TX[n].gst})),T=s.find((function(e){return e.id===i.TX[n].gmt}));return(0,r.useEffect)((function(){o({gst:Number(u),gmt:Number(N)})}),[u,N]),(0,r.useEffect)((function(){g(String(c.gst)),y(String(c.gmt))}),[c]),(0,v.jsxs)(x.Z,{as:j.Z,className:d,variant:"outline-secondary",size:"sm",title:w?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(i.TX[n].gst,".png"),alt:null===P||void 0===P?void 0:P.name,width:"20",height:"20"}),(0,v.jsx)(a.Z.Control,{className:"me-2 align-middle d-inline-block p-0",style:{width:"50px",height:"20px",minHeight:"20px"},size:"sm",type:"number",value:u,onClick:function(e){return e.stopPropagation()},onChange:function(e){g(e.target.value)}}),(0,v.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(i.TX[n].gmt,".png"),alt:null===T||void 0===T?void 0:T.name,width:"20",height:"20"}),(0,v.jsx)(a.Z.Control,{className:"align-middle d-inline-block p-0",style:{width:"50px",height:"20px",minHeight:"20px"},size:"sm",type:"number",value:N,onClick:function(e){return e.stopPropagation()},onChange:function(e){y(e.target.value)}}),"+",(0,h.it)(c,(null===P||void 0===P?void 0:P.usd)||0)]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(i.TX[n].gst,".png"),alt:null===P||void 0===P?void 0:P.name,width:"20",height:"20"}),(0,v.jsx)("span",{className:"me-2 align-middle",children:c.gst}),(0,v.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(i.TX[n].gmt,".png"),alt:null===T||void 0===T?void 0:T.name,width:"20",height:"20"}),(0,v.jsxs)("span",{className:"align-middle",children:[c.gmt,"+",(0,h.it)(c,(null===P||void 0===P?void 0:P.usd)||0)]})]}),children:[t.flatMap((function(e,s){var t=(0,v.jsx)(p.Z.Item,{onClick:function(){o(e),C(!1)},children:(0,v.jsxs)(l.Z,{children:[(0,v.jsxs)(f.Z,{xs:5,children:[(0,v.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(i.TX[n].gst,".png"),alt:null===P||void 0===P?void 0:P.name,width:"15",height:"15"}),(0,v.jsx)("span",{className:"align-middle",children:(0,v.jsx)("small",{children:e.gst})})]}),(0,v.jsxs)(f.Z,{xs:7,children:[(0,v.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(i.TX[n].gmt,".png"),alt:null===T||void 0===T?void 0:T.name,width:"15",height:"15"}),(0,v.jsx)("span",{className:"align-middle",children:(0,v.jsxs)("small",{children:[e.gmt,"+",(0,h.it)(e,(null===P||void 0===P?void 0:P.usd)||0)]})})]})]})},"".concat(e.gst,"-").concat(e.gmt));return 0===s?t:[(0,v.jsx)(p.Z.Divider,{},"divine-".concat(s)),t]})),(0,v.jsx)(p.Z.Divider,{}),(0,v.jsxs)(p.Z.Item,{onClick:function(){C(!0)},children:[(0,v.jsx)("small",{children:"\u81ea\u7531\u5165\u529b"}),(0,v.jsxs)(l.Z,{children:[(0,v.jsxs)(f.Z,{xs:5,children:[(0,v.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(i.TX[n].gst,".png"),alt:null===P||void 0===P?void 0:P.name,width:"15",height:"15"}),(0,v.jsx)("span",{className:"align-middle",children:(0,v.jsx)("small",{children:u})})]}),(0,v.jsxs)(f.Z,{xs:7,children:[(0,v.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(i.TX[n].gmt,".png"),alt:null===T||void 0===T?void 0:T.name,width:"15",height:"15"}),(0,v.jsx)("span",{className:"align-middle",children:(0,v.jsxs)("small",{children:[N,"+",(0,h.it)(c,(null===P||void 0===P?void 0:P.usd)||0)]})})]})]})]})]})},N=s(5521),y=s(5077),Z=s(1962),w=s(7257),C=function(){var e=(0,r.useContext)(Z._),n=e.crypts,s=e.realm,t=e.setRealm,x=e.mintingRateCommon,j=e.setMintingRateCommon,p=e.mintingRateUncommon,f=e.setMintingRateUncommon,C=e.floorPriceString,P=e.setFloorPriceString,T=e.floorPrices;e.setFloorPrices,e.shoe1,e.setShoe1,e.shoe2,e.setShoe2;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.Z,{className:"mb-2",children:(0,v.jsx)(N.K,{value:s,onChange:t})}),(0,v.jsx)(y.D,{crypts:n.filter((function(e){return e.id===i.TX[s].main||e.id===i.TX[s].gst||e.id===i.TX[s].gmt}))}),(0,v.jsxs)(a.Z,{children:[(0,v.jsx)(l.Z,{className:"m-2",children:(0,v.jsx)(c.Z,{trigger:"click",rootClose:!0,placement:"bottom",overlay:(0,v.jsx)(o.Z,{children:(0,v.jsx)(o.Z.Body,{children:(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(u.e,{label:"Common\u8cbb\u7528",className:"mb-2",children:(0,v.jsx)(b,{realm:s,crypts:n,mintingRateList:h.GD,value:x,onChange:j})}),(0,v.jsx)(u.e,{label:"Uncommon\u8cbb\u7528",className:"mb-2",children:(0,v.jsx)(b,{realm:s,crypts:n,mintingRateList:h.GA,value:p,onChange:f})})]})})}),children:(0,v.jsx)(d.Z,{variant:"outline-secondary",size:"sm",children:"\u8cbb\u7528\u8a2d\u5b9a"})})}),(0,v.jsx)(m.Z,{label:"\u30d5\u30ed\u30a2\u4fa1\u683c(".concat(i.TX[s].unit,")"),className:"mb-3",children:(0,v.jsx)(a.Z.Control,{type:"number",value:C,onChange:function(e){P(e.target.value)}})})]}),(0,v.jsx)(g.p,{mintingRateCommon:x,mintingRateUncommon:p,rarerity1:w.J.Common,rarerity2:w.J.Common,realm:s,crypts:n,floorPrice:T[s]||0}),(0,v.jsx)(g.p,{mintingRateCommon:x,mintingRateUncommon:p,rarerity1:w.J.Uncommon,rarerity2:w.J.Common,realm:s,crypts:n,floorPrice:T[s]||0}),(0,v.jsx)(g.p,{mintingRateCommon:x,mintingRateUncommon:p,rarerity1:w.J.Uncommon,rarerity2:w.J.Uncommon,realm:s,crypts:n,floorPrice:T[s]||0})]})},P=function(){return(0,v.jsx)(t.Z,{className:"mt-2",style:{maxWidth:"540px"},children:(0,v.jsx)(C,{})})};P.suppressFirstRenderFlicker=!0,P.getLayout=function(e){return(0,v.jsx)(Z.Z,{title:"Costs",children:e})};var T=P},3212:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/costs",function(){return s(9994)}])}},function(e){e.O(0,[774,746,663,508,962,888,179],(function(){return n=3212,e(e.s=n);var n}));var n=e.O();_N_E=n}]);