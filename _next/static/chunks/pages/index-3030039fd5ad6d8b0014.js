(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4177:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return je}});var s,r,l,i=n(2809),a=n(809),c=n.n(a),o=n(266),d=n(3888),m={Solana:"Solana",BSC:"BSC"},u=(s={},(0,i.Z)(s,m.Solana,{main:"solana",unit:"SOL",gst:"green-satoshi-token",gmt:"green-metaverse-token"}),(0,i.Z)(s,m.BSC,{main:"bnb",unit:"BNB",gst:"green-satoshi-token-bsc",gmt:"green-metaverse-token"}),s),g=(r={},(0,i.Z)(r,m.Solana,"#00ffbd"),(0,i.Z)(r,m.BSC,"#FCD535"),r),h=n(7294),x=n(2318),j=n(2230),p=n(6965),f=n(5147),v=n(7663),y=n(5893),b=function(e){var t=e.crypts,n=e.value,s=e.onChange;return(0,y.jsxs)(v.Z,{children:[(0,y.jsxs)(v.Z.Toggle,{variant:"outline-secondary",children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(n.id,".png"),alt:n.name,width:"20",height:"20"}),(0,y.jsx)("span",{className:"align-middle",children:n.symbol})]}),(0,y.jsx)(v.Z.Menu,{children:t.map((function(e){return(0,y.jsxs)(v.Z.Item,{onClick:function(){return s(e)},children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"20",height:"20"}),(0,y.jsx)("span",{className:"align-middle",children:e.short})]},e.id)}))})]})},N="WSU_Key_CryptExchange_SelectedCryptId",Z="WSU_Key_CryptExchange_Price",C=function(e){var t=e.crypts,n=e.className,s=e.realm,r=(0,h.useState)(1),l=r[0],i=r[1],a=(0,h.useState)("1"),c=a[0],o=a[1],m=(0,h.useState)(t[0]),g=m[0],v=m[1];return(0,h.useEffect)((function(){if(0!==t.length&&!g){var e=localStorage.getItem(N);v(e?t.find((function(t){return t.id===e})):t.find((function(e){return e.id===u[s].main})))}}),[t]),(0,h.useEffect)((function(){var e=localStorage.getItem(Z);e&&o(e)}),[]),(0,h.useEffect)((function(){c&&(i(Number(c)),localStorage.setItem(Z,c))}),[c]),(0,h.useEffect)((function(){g&&localStorage.setItem(N,g.id)}),[g]),g?(0,y.jsxs)("div",{className:n,children:[(0,y.jsx)("h4",{children:"\u901a\u8ca8\u5909\u63db"}),(0,y.jsxs)(x.Z,{className:"mb-3",children:[(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(j.Z,{controlId:"floatingInput",label:"".concat(g.name),children:(0,y.jsx)(p.Z.Control,{type:"number",value:c,onChange:function(e){o(e.target.value)}})})}),(0,y.jsx)(b,{crypts:t,value:g,onChange:v})]}),(0,y.jsx)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,y.jsx)("tbody",{children:[{id:"jpy",symbol:"JPY",name:"Japanese Yen",short:"JPY",jpy:1}].concat((0,d.Z)(t)).filter((function(e){return e.id!==g.id})).map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsxs)("td",{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:e.short})]}),(0,y.jsx)("td",{className:"text-end",children:(g.jpy*l*.9936/e.jpy).toFixed(2)}),(0,y.jsx)("td",{children:e.symbol})]},e.id)}))})})]}):(0,y.jsx)("p",{children:"Loading..."})},w=function(e){var t,n=e.crypts,s=e.className;return(0,y.jsxs)("div",{className:s,children:[0===n.length&&(0,y.jsx)("p",{children:"Loading..."}),(0,y.jsx)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:(0,y.jsx)("tbody",{children:n.map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsxs)("td",{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(e.id,".png"),alt:e.name,width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:e.short})]}),(0,y.jsxs)("td",{children:["\xa5",e.jpy]}),(0,y.jsxs)("td",{children:["$",e.usd]})]},e.id)}))})}),(0,y.jsx)("div",{className:"text-end",children:(0,y.jsxs)("small",{children:["\u6700\u7d42\u66f4\u65b0\u65e5\u6642 ",null===(t=n[0])||void 0===t?void 0:t.lastUpdatedAt.toLocaleString()]})})]})},O=n(1664),S=n(6025),k=n(4051),P=n(1555),E=function(e){var t=e.className;return(0,y.jsx)(S.Z,{className:t,children:(0,y.jsxs)(S.Z.Body,{children:[(0,y.jsx)("div",{className:"mb-2",children:(0,y.jsxs)(k.Z,{children:[(0,y.jsx)(P.Z,{children:"\u30c1\u30c3\u30d7\u306f\u3053\u3061\u3089"}),(0,y.jsx)(P.Z,{className:"text-end",children:(0,y.jsx)(O.default,{href:"https://twitter.com/Wam_Ei",children:(0,y.jsx)("small",{children:"@Wam_Ei"})})})]})}),(0,y.jsx)(j.Z,{onClick:function(){document.querySelector("#donation_sol_address").select(),document.execCommand("copy")},label:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u.Solana.main,".png"),alt:"".concat(u.Solana.main),width:"20",height:"20"}),"Solana"]}),className:"mb-3",children:(0,y.jsx)(p.Z.Control,{id:"donation_sol_address",type:"text",value:"AH1kGCnpjznAD7GBa2pBZQBPSMrNV4DgMK7QLsFdnN7X",onChange:function(e){return e}})}),(0,y.jsx)(j.Z,{onClick:function(){document.querySelector("#donation_bsc_address").select(),document.execCommand("copy")},label:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u.BSC.main,".png"),alt:"".concat(u.BSC.main),width:"20",height:"20"}),"BNB Smart Chain (BEP20)"]}),className:"mb-3",children:(0,y.jsx)(p.Z.Control,{id:"donation_bsc_address",type:"text",value:"0xc99e9d91d16a8d8acb6028855601a840f31fe80a",onChange:function(e){return e}})})]})})},_={Common:"Common",Uncommon:"Uncommon"},F=(l={},(0,i.Z)(l,_.Common,"#d3d3d3"),(0,i.Z)(l,_.Uncommon,"#98fb98"),l);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}var U=function(e){window.history.replaceState({},"","".concat(window.location.origin).concat(window.location.pathname,"?").concat(Object.entries(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)).flatMap((function(e){return e[1]?["".concat(e[0],"=").concat(e[1])]:[]})).join("&")))},D=n(2540),B=n(1814),R=n(6650),I=n(5005),T=function(e){var t=e.children,n=e.label,s=e.className;return(0,y.jsxs)(p.Z.Group,{as:P.Z,className:s,children:[(0,y.jsx)(p.Z.Label,{children:(0,y.jsx)("small",{children:n})}),(0,y.jsx)(P.Z,{children:t})]})},L=n(9057);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=[0,1,2,3,4,5,6],W=function(e){var t,n,s,r=e.realm,l=e.crypts,a=e.mintingRateCommon,c=e.mintingRateUncommon,o=e.r1,d=e.m1,m=e.r2,x=e.m2,j=e.floorPrice;if(!r)throw new Promise((function(e){e("realm not found")}));var p=(0,h.useState)(!1),f=p[0],v=p[1],b=function(e,t,n,s,r,l,a,c){var o,d,m=(o={},(0,i.Z)(o,_.Common,n),(0,i.Z)(o,_.Uncommon,s),o),g=m[r].gst/2,h=m[a].gst/2,x=m[r].gmt/2,j=m[a].gmt/2,p=(null===(d=t.find((function(t){return t.id===u[e].gst})))||void 0===d?void 0:d.usd)||0,f={gst:g+g/2*Math.max(0,l-1)+h+h/2*Math.max(0,c-1),gmt:x+x/2*Math.max(0,l-1)+j+j/2*Math.max(0,c-1)},v=function(e,t){return t<4?0:t>=4&&t<8?.5*(e.gst+e.gmt):t>=8&&t<12?1*(e.gst+e.gmt):t>=12&&t<16?2*(e.gst+e.gmt):t>=16&&t<20?4*(e.gst+e.gmt):t>=20&&t<30?8*(e.gst+e.gmt):t>=30&&t<40?16*(e.gst+e.gmt):t>=40&&t<50?32*(e.gst+e.gmt):64*(e.gst+e.gmt)}(f,p);return{gst:f.gst,gmt:f.gmt+v}}(r,l,a,c,o,d,m,x),N=u[r],Z=(null===(t=l.find((function(e){return e.id===N.gst})))||void 0===t?void 0:t.jpy)||0,C=(null===(n=l.find((function(e){return e.id===N.gmt})))||void 0===n?void 0:n.jpy)||0,w=(null===(s=l.find((function(e){return e.id===N.main})))||void 0===s?void 0:s.jpy)||0,O=1.02*(b.gst*Z+b.gmt*C),S=20*Z+10*C,E=O/.94,q=(O+S)/.94,U=(O+2*S)/.94,D=function(e){var t=e.label,n=e.cost,s=e.className,r=n/.94,l=j*w-r;return(0,y.jsxs)("div",{style:z({},j<r/w?{backgroundColor:"rgba(255, 0, 0, 0.1)"}:{}),className:s,children:[(0,y.jsxs)(k.Z,{children:[(0,y.jsx)(P.Z,{xs:5,children:t}),(0,y.jsxs)(P.Z,{children:[(n/w).toFixed(2),N.unit]}),(0,y.jsxs)(P.Z,{children:["\xa5",n.toFixed(2)]})]}),(0,y.jsxs)(k.Z,{className:"fw-bold",children:[(0,y.jsx)(P.Z,{xs:5,children:"\u6700\u4f4e\u8ca9\u58f2\u4fa1\u683c"}),(0,y.jsxs)(P.Z,{children:[(r/w).toFixed(2),N.unit]}),(0,y.jsxs)(P.Z,{children:["\xa5",r.toFixed(2)]})]}),(0,y.jsxs)(k.Z,{children:[(0,y.jsx)(P.Z,{xs:5,children:(0,y.jsx)("small",{children:"\u5229\u76ca"})}),(0,y.jsx)(P.Z,{children:(0,y.jsxs)("small",{className:"".concat(l<0?"text-danger":""),children:[(l/w).toFixed(2),N.unit]})}),(0,y.jsx)(P.Z,{children:(0,y.jsxs)("small",{className:"".concat(l<0?"text-danger":""),children:["\xa5",l.toFixed(2)]})})]})]})};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{style:z({},j<E/w?{backgroundColor:"rgba(255, 0, 0, 0.3)"}:j<q/w?{backgroundColor:"rgba(255, 0, 0, 0.2)"}:j<U/w?{backgroundColor:"rgba(255, 0, 0, 0.1)"}:{}),children:(0,y.jsxs)(I.Z,{variant:"link",onClick:function(){return v(!0)},className:"w-100 text-start d-block p-0 text-body text-decoration-none",children:[(0,y.jsxs)("small",{className:"text-nowrap",children:[(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gst,".png"),alt:"GST",width:"10",height:"10"}),(0,y.jsx)("span",{className:"align-middle",children:b.gst})]}),(0,y.jsx)("br",{}),(0,y.jsxs)("small",{className:"text-nowrap",children:[(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gmt,".png"),alt:"GMT",width:"10",height:"10"}),(0,y.jsx)("span",{className:"align-middle",children:b.gmt})]})]})}),(0,y.jsxs)(L.Z,{show:f,onHide:function(){return v(!1)},children:[(0,y.jsx)(L.Z.Header,{style:{backgroundColor:g[r]},closeButton:!0,children:(0,y.jsxs)(L.Z.Title,{children:[(0,y.jsx)("img",{className:"me-2 align-middle",src:"/stepn-utils/".concat(u[r].main,".png"),alt:r,width:"20",height:"20"}),(0,y.jsxs)("span",{className:"align-middle",children:[(0,y.jsxs)("span",{className:"rounded p-1",style:{backgroundColor:F[o]},children:[o," ",d]})," ","x"," ",(0,y.jsxs)("span",{className:"rounded p-1",style:{backgroundColor:F[m]},children:[m," ",x]})]})]})}),(0,y.jsxs)(L.Z.Body,{className:"ps-0 pe-0",children:[(0,y.jsxs)("div",{className:"pb-3 ms-3 me-3 fw-bold",children:[(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,y.jsxs)("span",{className:"me-2 align-middle",children:[b.gst,"GST"]}),(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,y.jsxs)("span",{className:"align-middle",children:[b.gmt,"GMT"]})]}),(0,y.jsx)(D,{className:"p-3 border-bottom border-top",label:"\u30df\u30f3\u30c8\u8cbb\u7528",cost:O}),(0,y.jsx)(D,{className:"p-3 border-bottom",label:"1\u8db3\u5206Lvup\u8cbb\u7528\u8fbc",cost:O+S}),(0,y.jsx)(D,{className:"p-3 border-bottom",label:"2\u8db3\u5206Lvup\u8cbb\u7528\u8fbc",cost:O+2*S}),(0,y.jsx)("div",{className:"ms-3 me-3 mt-3",children:(0,y.jsxs)("small",{children:["1\u8db3\u5206Lvup\u8cbb\u7528",(0,y.jsx)("br",{}),(0,y.jsxs)(k.Z,{children:[(0,y.jsxs)(P.Z,{children:[(S/w).toFixed(2),N.unit]}),(0,y.jsxs)(P.Z,{children:["\xa5",S.toFixed(2)]})]})]})})]})]})]})},G=function(e){var t=e.mintingRateCommon,n=e.mintingRateUncommon,s=e.rarerity1,r=e.rarerity2,l=e.realm,i=e.crypts,a=e.floorPrice;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"text-start",children:(0,y.jsx)("small",{children:"\u8cbb\u7528\u8868\u30bf\u30c3\u30d7\u3067\u8a73\u7d30\u3092\u78ba\u8a8d"})}),(0,y.jsx)(f.Z,{bordered:!0,size:"sm",children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{}),A.map((function(e){return(0,y.jsx)("td",{className:"pt-0 pb-0",style:{backgroundColor:F[s]},children:(0,y.jsx)("small",{children:e})},e)}))]}),A.map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{className:"pe-0",style:{backgroundColor:F[r]},children:(0,y.jsx)("small",{children:e})}),A.map((function(c){return(0,y.jsx)("td",{className:"p-0",children:(0,y.jsx)(W,{realm:l,crypts:i,mintingRateCommon:t,mintingRateUncommon:n,r1:s,m1:c,r2:r,m2:e,floorPrice:a})},c)}))]},e)}))]})})]})},K=n(2315),H=n(2086),J=function(e){var t=e.realm,n=e.crypts,s=e.mintingRateList,r=e.value,l=e.onChange,i=e.className,a=(0,h.useState)(String(r.gst)),c=a[0],o=a[1],d=(0,h.useState)(String(r.gmt)),m=d[0],g=d[1],x=(0,h.useState)(!1),j=x[0],f=x[1],b=n.find((function(e){return e.id===u[t].gst})),N=n.find((function(e){return e.id===u[t].gmt}));return(0,h.useEffect)((function(){l({gst:Number(c),gmt:Number(m)})}),[c,m]),(0,h.useEffect)((function(){o(String(r.gst)),g(String(r.gmt))}),[r]),(0,y.jsxs)(K.Z,{as:H.Z,className:i,variant:"outline-secondary",size:"sm",title:j?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gst,".png"),alt:null===b||void 0===b?void 0:b.name,width:"20",height:"20"}),(0,y.jsx)(p.Z.Control,{className:"me-2 align-middle d-inline-block p-0",style:{width:"50px",height:"20px",minHeight:"20px"},size:"sm",type:"number",value:c,onClick:function(e){return e.stopPropagation()},onChange:function(e){o(e.target.value)}}),(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gmt,".png"),alt:null===N||void 0===N?void 0:N.name,width:"20",height:"20"}),(0,y.jsx)(p.Z.Control,{className:"align-middle d-inline-block p-0",style:{width:"50px",height:"20px",minHeight:"20px"},size:"sm",type:"number",value:m,onClick:function(e){return e.stopPropagation()},onChange:function(e){g(e.target.value)}})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gst,".png"),alt:null===b||void 0===b?void 0:b.name,width:"20",height:"20"}),(0,y.jsx)("span",{className:"me-2 align-middle",children:r.gst}),(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gmt,".png"),alt:null===N||void 0===N?void 0:N.name,width:"20",height:"20"}),(0,y.jsx)("span",{className:"align-middle",children:r.gmt})]}),children:[s.flatMap((function(e,n){var s=(0,y.jsx)(v.Z.Item,{onClick:function(){l(e),f(!1)},children:(0,y.jsxs)(k.Z,{children:[(0,y.jsxs)(P.Z,{xs:6,children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gst,".png"),alt:null===b||void 0===b?void 0:b.name,width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:(0,y.jsx)("small",{children:e.gst})})]}),(0,y.jsxs)(P.Z,{xs:6,children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gmt,".png"),alt:null===N||void 0===N?void 0:N.name,width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:(0,y.jsx)("small",{children:e.gmt})})]})]})},"".concat(e.gst,"-").concat(e.gmt));return 0===n?s:[(0,y.jsx)(v.Z.Divider,{},"divine-".concat(n)),s]})),(0,y.jsx)(v.Z.Divider,{}),(0,y.jsxs)(v.Z.Item,{onClick:function(){f(!0)},children:[(0,y.jsx)("small",{children:"\u81ea\u7531\u5165\u529b"}),(0,y.jsxs)(k.Z,{children:[(0,y.jsxs)(P.Z,{xs:6,children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gst,".png"),alt:null===b||void 0===b?void 0:b.name,width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:(0,y.jsx)("small",{children:c})})]}),(0,y.jsxs)(P.Z,{xs:6,children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[t].gmt,".png"),alt:null===N||void 0===N?void 0:N.name,width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:(0,y.jsx)("small",{children:m})})]})]})]})]})},X=n(8984),Y=function(e){var t=e.value,n=e.onChange,s=e.className;return(0,y.jsx)(H.Z,{className:s,children:Object.values(m).map((function(e){return(0,y.jsxs)(X.Z,{id:"radio-realm-".concat(e),type:"radio",variant:"light",name:"radio",value:e,checked:t===e,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return n(e.currentTarget.value)})),style:{backgroundColor:t===e?g[e]:""},size:"sm",children:[(0,y.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(u[e].main,".png"),alt:e,width:"20",height:"20"}),(0,y.jsx)("span",{className:"align-middle",children:e})]},e)}))})},Q=function(e){var t=e.id,n=e.value,s=e.onChange;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(H.Z,{className:"mb-2",children:Object.values(_).map((function(e){return(0,y.jsx)(X.Z,{id:"radio-rarerity-".concat(t,"-").concat(e),type:"radio",variant:"light",name:"radio",value:e,checked:n===e,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return s(e.currentTarget.value)})),style:{backgroundColor:n===e?F[e]:""},size:"sm",children:e},e)}))})})},V=n(7563);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=[{gst:360,gmt:40}],ne=[{gst:1360,gmt:240}],se=function(e){var t=e.crypts,n=e.realm,s=e.setRealm,r=(0,D.useRouter)(),l=(0,h.useState)(te[0]),a=l[0],c=l[1],o=(0,h.useState)(ne[0]),d=o[0],g=o[1],x=(0,h.useState)(_.Common),f=x[0],v=x[1],b=(0,h.useState)(_.Common),N=b[0],Z=b[1],C=(0,h.useState)(""),w=C[0],O=C[1],S=(0,h.useState)({}),P=S[0],E=S[1];return(0,h.useEffect)((function(){var e=V.parse(location.search);U(ee(ee(ee({},e),{},{r1:f,r2:N},P),{},{gstC:a.gst,gmtC:a.gmt,gstU:d.gst,gmtU:d.gmt}))}),[U,P,f,N,a,d]),(0,h.useEffect)((function(){O(String(P[n]))}),[n]),(0,h.useEffect)((function(){E((function(e){return ee(ee({},e),{},(0,i.Z)({},n,Number(w)))}))}),[w]),(0,h.useEffect)((function(){var e=r.query.realm;r.query[e]&&O(String(r.query[e])),r.query.r1&&v(r.query.r1),r.query.r2&&Z(r.query.r2),(r.query.gstC||r.query.gmtC)&&c({gst:Number(r.query.gstC),gmt:Number(r.query.gmtC)}),(r.query.gstU||r.query.gmtU)&&g({gst:Number(r.query.gstU),gmt:Number(r.query.gmtU)}),Object.values(m).forEach((function(e){r.query[e]&&E((function(t){return ee(ee({},t),{},(0,i.Z)({},e,Number(r.query[e])))}))}))}),[r.query]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(p.Z,{children:[(0,y.jsxs)(k.Z,{className:"mb-2",children:[(0,y.jsx)(T,{label:"\u30c1\u30a7\u30fc\u30f3",children:(0,y.jsx)(Y,{value:n,onChange:s})}),(0,y.jsx)(T,{label:"\u3000",children:(0,y.jsx)(B.Z,{trigger:"click",rootClose:!0,placement:"bottom",overlay:(0,y.jsx)(R.Z,{children:(0,y.jsx)(R.Z.Body,{children:(0,y.jsxs)(k.Z,{children:[(0,y.jsx)(T,{label:"Common\u8cbb\u7528",className:"mb-2",children:(0,y.jsx)(J,{realm:n,crypts:t,mintingRateList:te,value:a,onChange:c})}),(0,y.jsx)(T,{label:"Uncommon\u8cbb\u7528",className:"mb-2",children:(0,y.jsx)(J,{realm:n,crypts:t,mintingRateList:ne,value:d,onChange:g})})]})})}),children:(0,y.jsx)(I.Z,{variant:"secondary",size:"sm",className:"mt-",children:"\u8cbb\u7528\u8a2d\u5b9a"})})})]}),(0,y.jsxs)(k.Z,{className:"mb-2",children:[(0,y.jsx)(T,{label:"\u97741",children:(0,y.jsx)(Q,{id:"r1",value:f,onChange:v})}),(0,y.jsx)(T,{label:"\u97742",children:(0,y.jsx)(Q,{id:"r2",value:N,onChange:Z})})]}),(0,y.jsx)(j.Z,{controlId:"floatingInput",label:"\u30d5\u30ed\u30a2\u4fa1\u683c(".concat(u[n].unit,")"),className:"mb-3",children:(0,y.jsx)(p.Z.Control,{type:"number",value:w,onChange:function(e){O(e.target.value)}})})]}),(0,y.jsx)(G,{mintingRateCommon:a,mintingRateUncommon:d,rarerity1:f,rarerity2:N,realm:n,crypts:t,floorPrice:P[n]||0})]})},re=[{level:1,gst:1,gmt:0},{level:2,gst:2,gmt:0},{level:3,gst:3,gmt:0},{level:4,gst:4,gmt:0},{level:5,gst:10,gmt:10},{level:6,gst:6,gmt:0},{level:7,gst:7,gmt:0},{level:8,gst:8,gmt:0},{level:9,gst:9,gmt:0},{level:10,gst:30,gmt:30},{level:11,gst:11,gmt:0},{level:12,gst:12,gmt:0},{level:13,gst:13,gmt:0},{level:14,gst:14,gmt:0},{level:15,gst:15,gmt:0},{level:16,gst:16,gmt:0},{level:17,gst:17,gmt:0},{level:18,gst:18,gmt:0},{level:19,gst:19,gmt:0},{level:20,gst:60,gmt:60},{level:21,gst:21,gmt:0},{level:22,gst:22,gmt:0},{level:23,gst:23,gmt:0},{level:24,gst:24,gmt:0},{level:25,gst:25,gmt:0},{level:26,gst:26,gmt:0},{level:27,gst:27,gmt:0},{level:28,gst:28,gmt:0},{level:29,gst:29,gmt:29},{level:30,gst:100,gmt:100}],le=function(e){var t,n,s,r=e.realm,l=e.crypts,i=e.data,a=u[r],c=(null===(t=l.find((function(e){return e.id===a.gst})))||void 0===t?void 0:t.jpy)||0,o=(null===(n=l.find((function(e){return e.id===a.gmt})))||void 0===n?void 0:n.jpy)||0,d=(null===(s=l.find((function(e){return e.id===a.main})))||void 0===s?void 0:s.jpy)||0,m=i.gst*c+i.gmt*o,g=re.filter((function(e){return e.level<=i.level})),h=g.reduce((function(e,t){return e+t.gst}),0)*c+g.reduce((function(e,t){return e+t.gmt}),0)*o;return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:(0,y.jsx)("small",{children:i.level})}),(0,y.jsxs)("td",{className:"text-nowrap",children:[(0,y.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(u[r].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:(0,y.jsx)("small",{children:i.gst})}),i.gmt>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("img",{className:"ms-2 align-middle",src:"/stepn-utils/".concat(u[r].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,y.jsx)("span",{className:"align-middle",children:(0,y.jsx)("small",{children:i.gmt})})]})]}),(0,y.jsx)("td",{children:(0,y.jsx)("small",{children:(m/d).toFixed(3)})}),(0,y.jsx)("td",{children:(0,y.jsxs)("small",{children:["\xa5",m.toFixed(0)]})}),(0,y.jsx)("td",{children:(0,y.jsx)("small",{children:(h/d).toFixed(3)})}),(0,y.jsx)("td",{children:(0,y.jsxs)("small",{children:["\xa5",h.toFixed(0)]})})]},i.level)},ie=function(e){var t=e.crypts,n=e.realm;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:[(0,y.jsx)("thead",{className:"sticky-top",children:(0,y.jsxs)("tr",{style:{backgroundColor:"#ffffff"},children:[(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"Level"})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"\u8cbb\u7528"})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:u[n].unit})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"\u5186"})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"\u7d2f\u8a08"})}),(0,y.jsx)("th",{children:(0,y.jsx)("small",{children:"\u5186"})})]})}),(0,y.jsx)("tbody",{children:re.map((function(e){return(0,y.jsx)(le,{crypts:t,realm:n,data:e},e.level)}))})]})})},ae="WSU_CryptocurrenciesResponse",ce=function(){var e=(0,o.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://script.google.com/macros/s/AKfycbxehX_2FJ-NopjtNC0EffWz0IAlw_HeInxY14M5R-p3WTC-HnBsQXB-WX1p6pvsvNud7A/exec");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,localStorage.setItem(ae,JSON.stringify(n)),e.abrupt("return",n.map((function(e){return{id:e.id,symbol:e.symbol,name:e.name,short:e.short,jpy:e.jpy,usd:e.usd,lastUpdatedAt:new Date(e.lastUpdatedAt)}})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=localStorage.getItem(ae);return e?JSON.parse(e).map((function(e){return{id:e.id,symbol:e.symbol,name:e.name,short:e.short,jpy:e.jpy,usd:e.usd,lastUpdatedAt:new Date(e.lastUpdatedAt)}})):null},de=n(6446),me=n(7905),ue=n(682);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=function(){var e,t=(0,D.useRouter)(),n=(0,h.useState)("home"),s=n[0],r=n[1],l=(0,h.useState)([]),i=l[0],a=l[1],d=(0,h.useState)(m.Solana),g=d[0],x=d[1],j=function(){var e=(0,o.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=oe())){e.next=7;break}if(0===i.length&&a(t),n=(new Date).getTime(),!t.every((function(e){return n<(e.lastUpdatedAt.getTime()||0)+3e5}))){e.next=6;break}return e.abrupt("return");case 6:a(t);case 7:return e.t0=a,e.next=10,ce();case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){j(),setInterval(j,6e4)}),[]),(0,h.useEffect)((function(){var e=V.parse(location.search);U(he(he({},e),{},{tab:s,realm:g}))}),[U,g,s]),(0,h.useEffect)((function(){var e=t.query.realm;t.query.tab&&r(t.query.tab),t.query.realm&&x(e)}),[t.query]),(0,y.jsxs)("div",{children:[(0,y.jsxs)(de.Z,{className:"fs-6 justify-content-center",activeKey:s,onSelect:function(e){r(e)},children:[(0,y.jsx)(me.Z,{eventKey:"home",title:"\u30df\u30f3\u30c8\u8cbb\u7528",children:(0,y.jsxs)(ue.Z,{className:"mt-2",style:{maxWidth:"540px"},children:[(0,y.jsx)(w,{crypts:i.filter((function(e){return e.id===u[g].main||e.id===u[g].gst||e.id===u[g].gmt}))}),(0,y.jsx)(se,{crypts:i,realm:g,setRealm:x})]})}),(0,y.jsx)(me.Z,{eventKey:"crypts",title:"\u901a\u8ca8\u4fa1\u683c",children:(0,y.jsxs)(ue.Z,{className:"mt-2",style:{maxWidth:"540px"},children:[(0,y.jsx)(w,{crypts:i,className:"mb-3"}),(0,y.jsx)(C,{crypts:i,realm:g})]})}),(0,y.jsx)(me.Z,{eventKey:"levelup",title:"Lvup\u8cbb\u7528",children:(0,y.jsxs)(ue.Z,{className:"mt-2",style:{maxWidth:"540px"},children:[(0,y.jsx)(Y,{className:"mb-2",value:g,onChange:x}),(0,y.jsx)(ie,{crypts:i,realm:g}),(0,y.jsx)("div",{className:"text-end",children:(0,y.jsxs)("small",{children:["\u6700\u7d42\u66f4\u65b0\u65e5\u6642 ",null===(e=i[0])||void 0===e?void 0:e.lastUpdatedAt.toLocaleString()]})})]})})]}),(0,y.jsx)("hr",{}),(0,y.jsx)(ue.Z,{style:{maxWidth:"540px"},children:(0,y.jsx)(E,{className:"border-0"})})]})};xe.suppressFirstRenderFlicker=!0;var je=xe},7540:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4177)}])}},function(e){e.O(0,[774,295,888,179],(function(){return t=7540,e(e.s=t);var t}));var t=e.O();_N_E=t}]);