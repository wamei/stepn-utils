(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{6559:function(e,t,n){"use strict";n.d(t,{e:function(){return c}});n(7294);var s=n(2178),r=n(1555),l=n(5893),c=function(e){var t=e.children,n=e.label,c=e.className;return(0,l.jsxs)(s.Z.Group,{as:r.Z,className:"".concat(c),children:[(0,l.jsx)(s.Z.Label,{style:{transform:"scale(.82)"},className:"text-muted",children:n}),(0,l.jsx)(r.Z,{children:t})]})}},5521:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var s=n(9396),r=(n(7294),n(2086)),l=n(8984),c=n(5893),i=function(e){var t=e.value,n=e.onChange,i=e.className;return(0,c.jsx)(r.Z,{className:i,children:Object.values(s.B_).map((function(e){return(0,c.jsxs)(l.Z,{id:"radio-realm-".concat(e),type:"radio",variant:"light",value:e,checked:t===e,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return n(e.currentTarget.value)})),style:{backgroundColor:t===e?s.Z3[e]:""},size:"sm",children:[(0,c.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(s.TX[e].main,".png"),alt:e,width:"20",height:"20"}),(0,c.jsx)("span",{className:"align-middle",children:e})]},e)}))})}},4250:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var s=n(9396),r=n(4591),l=(n(7294),n(2086)),c=n(8984),i=n(5893),a=function(e){var t=e.realm,n=e.value,a=e.onChange;return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(c.Z,{value:"realm",id:"radio-unit-0",type:"radio",variant:"light",style:{backgroundColor:"realm"===n?r.Cm.Common:""},onChange:function(e){return a(e.currentTarget.value)},size:"sm",children:s.TX[t].unit}),(0,i.jsx)(c.Z,{value:"jpy",id:"radio-unit-1",type:"radio",variant:"light",style:{backgroundColor:"jpy"===n?r.Cm.Common:""},onChange:function(e){return a(e.currentTarget.value)},size:"sm",children:"JPY"}),(0,i.jsx)(c.Z,{value:"usd",id:"radio-unit-2",type:"radio",variant:"light",style:{backgroundColor:"usd"===n?r.Cm.Common:""},onChange:function(e){return a(e.currentTarget.value)},size:"sm",children:"USD"})]})}},6609:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var s,r=n(682),l=n(2809),c=n(1962),i={1:{level:1,successRate:.35,numberOfGems:3,costGst:50,costGmt:0},2:{level:2,successRate:.55,numberOfGems:3,costGst:100,costGmt:0},3:{level:3,successRate:.65,numberOfGems:3,costGst:200,costGmt:0},4:{level:4,successRate:.75,numberOfGems:3,costGst:300,costGmt:200},5:{level:5,successRate:.85,numberOfGems:3,costGst:500,costGmt:500}},a={Efficiency:"Efficiency",Luck:"Luck",Comfort:"Comfort",Resilience:"Resilience"},o=(s={},(0,l.Z)(s,a.Efficiency,"rgb(245, 205, 7, 0.5)"),(0,l.Z)(s,a.Luck,"rgb(5, 243, 247, 0.5)"),(0,l.Z)(s,a.Comfort,"rgb(230, 38, 21, 0.5)"),(0,l.Z)(s,a.Resilience,"rgb(175, 36, 255, 0.5)"),s),u=n(9396),d=n(7294),m=n(4051),h=n(1555),j=n(7663),x=n(2230),v=n(2178),f=n(5147),g=n(919),p=n(6559),b=n(5521),Z=n(5646),y=n(4250),C=n(5893);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(){var e=(0,d.useContext)(c._),t=e.crypts,n=e.realm,s=e.setRealm,r=e.unitType,l=e.setUnitType,G=(0,d.useState)(""),O=G[0],_=G[1],k=(0,d.useState)(""),w=k[0],R=k[1],T=(0,d.useState)({level:1,type:a.Efficiency}),P=T[0],E=T[1],F=t.find((function(e){return e.id===u.TX[n].main})),S=t.find((function(e){return e.id===u.TX[n].gst})),X=t.find((function(e){return e.id===u.TX[n].gmt})),z=(null===F||void 0===F?void 0:F.jpy)||0,D=(null===F||void 0===F?void 0:F.usd)||0,L=(null===S||void 0===S?void 0:S.jpy)||0,M=(null===X||void 0===X?void 0:X.jpy)||0,B="realm"===r?u.TX[n].unit:"jpy"===r?"JPY":"USD",U=function(e,t){return"realm"===e?t/z:"jpy"===e?t:t/z*D};return(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(h.Z,{xs:12,md:12,children:(0,C.jsx)(m.Z,{className:"mb-3 mt-3",children:(0,C.jsx)(h.Z,{className:"text-center",children:(0,C.jsx)("h5",{children:(0,C.jsx)(g.c,{children:"gem_cost_emulator"})})})})}),(0,C.jsxs)(h.Z,{xs:12,md:12,children:[(0,C.jsx)(m.Z,{className:"mb-4",children:(0,C.jsx)(b.K,{value:n,onChange:s})}),(0,C.jsxs)(m.Z,{className:"mb-2",children:[(0,C.jsx)(h.Z,{xs:6,children:(0,C.jsx)(p.e,{label:(0,C.jsx)(g.c,{children:"gem_type"}),children:(0,C.jsxs)(j.Z,{children:[(0,C.jsx)(j.Z.Toggle,{variant:"light",className:"w-100",size:"sm",style:{backgroundColor:o[P.type]},children:P.type}),(0,C.jsx)(j.Z.Menu,{children:Object.values(a).map((function(e){return(0,C.jsx)(j.Z.Item,{onClick:function(){return E((function(t){return N(N({},t),{},{type:e})}))},style:{backgroundColor:o[e]},children:e},e)}))})]})})}),(0,C.jsx)(h.Z,{xs:6,children:(0,C.jsx)(p.e,{label:(0,C.jsx)(g.c,{children:"gem_level"}),children:(0,C.jsxs)(j.Z,{children:[(0,C.jsxs)(j.Z.Toggle,{variant:"light",className:"w-100",size:"sm",children:[(0,C.jsx)(g.c,{children:"level"})," ",P.level]}),(0,C.jsx)(j.Z.Menu,{children:Object.values(i).map((function(e){return(0,C.jsx)(j.Z.Item,{onClick:function(){return E((function(t){return N(N({},t),{},{level:e.level})}))},children:e.level},e.level)}))})]})})})]}),(0,C.jsxs)(m.Z,{className:"mb-3",children:[(0,C.jsx)(h.Z,{children:(0,C.jsx)(x.Z,{label:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(null===S||void 0===S?void 0:S.id,".png"),alt:null===S||void 0===S?void 0:S.name,width:"20",height:"20"}),null===S||void 0===S?void 0:S.symbol]}),children:(0,C.jsx)(v.Z.Control,{readOnly:!0,value:i[P.level].costGst})})}),(0,C.jsx)(h.Z,{children:(0,C.jsx)(x.Z,{label:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(null===X||void 0===X?void 0:X.id,".png"),alt:null===X||void 0===X?void 0:X.name,width:"20",height:"20"}),null===X||void 0===X?void 0:X.symbol]}),children:(0,C.jsx)(v.Z.Control,{readOnly:!0,value:i[P.level].costGmt})})})]}),(0,C.jsx)(m.Z,{children:(0,C.jsx)(h.Z,{children:(0,C.jsx)(x.Z,{label:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.c,{children:"level"}),P.level," ",(0,C.jsx)(g.c,{children:"gem_floor_price"}),"(".concat(B,")")]}),className:"mb-2",children:(0,C.jsx)(v.Z.Control,{value:O,onChange:function(e){return _(e.target.value)}})})})}),(0,C.jsx)(m.Z,{children:(0,C.jsx)(h.Z,{children:(0,C.jsx)(x.Z,{label:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.c,{children:"level"}),P.level+1," ",(0,C.jsx)(g.c,{children:"gem_floor_price"}),"(".concat(B,")")]}),className:"mb-2",children:(0,C.jsx)(v.Z.Control,{value:w,onChange:function(e){return R(e.target.value)}})})})}),(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(h.Z,{xs:7}),(0,C.jsx)(h.Z,{xs:5,children:(0,C.jsx)(y.n,{realm:n,value:r,onChange:l})})]}),(0,C.jsxs)(f.Z,{striped:!0,children:[(0,C.jsx)("thead",{children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{children:(0,C.jsx)(g.c,{children:"count"})}),(0,C.jsx)("th",{children:(0,C.jsx)(g.c,{children:"success_rate"})}),(0,C.jsx)("th",{children:(0,C.jsx)(g.c,{children:"cost"})}),(0,C.jsx)("th",{children:(0,C.jsx)(g.c,{children:"profit"})})]})}),(0,C.jsx)("tbody",{children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((function(e){var t=function(e,t){var n=i[e.level],s=1-Math.pow(1-n.successRate,t);return{costGst:n.costGst,costGmt:n.costGmt,successRate:n.successRate,totalSuccessRate:s,totalCostGst:n.costGst*t,totalCostGmt:n.costGmt*t,numberOfGem:n.numberOfGems}}(P,e);return(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:e}),(0,C.jsxs)("td",{children:[(0,C.jsx)(Z.g,{value:(Math.floor(100*t.totalSuccessRate*1e5)/1e5).toFixed(5)}),"%"]}),(0,C.jsx)("td",{children:(0,C.jsx)(Z.g,{value:U(r,Number(O)*z*t.numberOfGem*e+t.totalCostGst*L+t.totalCostGmt*M).toFixed(3)})}),(0,C.jsx)("td",{children:(0,C.jsx)(Z.g,{value:U(r,Number(w)*z*.94-(Number(O)*z*t.numberOfGem*e+t.totalCostGst*L+t.totalCostGmt*M)).toFixed(3)})})]},e)}))})]})]})]})},_=function(){return(0,C.jsx)(r.Z,{className:"mt-2",children:(0,C.jsx)(O,{})})};_.suppressFirstRenderFlicker=!0,_.getLayout=function(e){return(0,C.jsx)(c.Z,{title:"Gems",children:e})};var k=_},6670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gems",function(){return n(6609)}])},2086:function(e,t,n){"use strict";var s=n(4184),r=n.n(s),l=n(7294),c=n(600),i=n(5893);const a=l.forwardRef((({bsPrefix:e,size:t,vertical:n,className:s,as:l="div",...a},o)=>{const u=(0,c.vE)(e,"btn-group");let d=u;return n&&(d=`${u}-vertical`),(0,i.jsx)(l,{...a,ref:o,className:r()(s,d,t&&`${u}-${t}`)})}));a.displayName="ButtonGroup",a.defaultProps={vertical:!1,role:"group"},t.Z=a},8984:function(e,t,n){"use strict";var s=n(4184),r=n.n(s),l=n(7294),c=n(600),i=n(5005),a=n(5893);const o=()=>{},u=l.forwardRef((({bsPrefix:e,name:t,className:n,checked:s,type:l,onChange:u,value:d,disabled:m,id:h,inputRef:j,...x},v)=>(e=(0,c.vE)(e,"btn-check"),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{className:e,name:t,type:l,value:d,ref:j,autoComplete:"off",checked:!!s,disabled:!!m,onChange:u||o,id:h}),(0,a.jsx)(i.Z,{...x,ref:v,className:r()(n,m&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:h})]}))));u.displayName="ToggleButton",t.Z=u}},function(e){e.O(0,[774,994,663,604,888,179],(function(){return t=6670,e(e.s=t);var t}));var t=e.O();_N_E=t}]);