(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{5521:function(e,l,t){"use strict";t.d(l,{K:function(){return a}});var s=t(9396),n=(t(7294),t(2086)),r=t(8984),i=t(5893),a=function(e){var l=e.value,t=e.onChange,a=e.className;return(0,i.jsx)(n.Z,{className:a,children:Object.values(s.B_).map((function(e){return(0,i.jsxs)(r.Z,{id:"radio-realm-".concat(e),type:"radio",variant:"light",value:e,checked:l===e,onChange:function(e){function l(l){return e.apply(this,arguments)}return l.toString=function(){return e.toString()},l}((function(e){return t(e.currentTarget.value)})),style:{backgroundColor:l===e?s.Z3[e]:""},size:"sm",children:[(0,i.jsx)("img",{className:"me-1 align-middle",src:"/stepn-utils/".concat(s.TX[e].main,".png"),alt:e,width:"20",height:"20"}),(0,i.jsx)("span",{className:"align-middle",children:e})]},e)}))})}},885:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return j}});var s=t(9396),n=t(7294),r=t(5147),i=t(5646),a=t(5893),c=[{level:1,gst:1,gmt:0},{level:2,gst:2,gmt:0},{level:3,gst:3,gmt:0},{level:4,gst:4,gmt:0},{level:5,gst:10,gmt:10},{level:6,gst:6,gmt:0},{level:7,gst:7,gmt:0},{level:8,gst:8,gmt:0},{level:9,gst:9,gmt:0},{level:10,gst:30,gmt:30},{level:11,gst:11,gmt:0},{level:12,gst:12,gmt:0},{level:13,gst:13,gmt:0},{level:14,gst:14,gmt:0},{level:15,gst:15,gmt:0},{level:16,gst:16,gmt:0},{level:17,gst:17,gmt:0},{level:18,gst:18,gmt:0},{level:19,gst:19,gmt:0},{level:20,gst:60,gmt:60},{level:21,gst:21,gmt:0},{level:22,gst:22,gmt:0},{level:23,gst:23,gmt:0},{level:24,gst:24,gmt:0},{level:25,gst:25,gmt:0},{level:26,gst:26,gmt:0},{level:27,gst:27,gmt:0},{level:28,gst:28,gmt:0},{level:29,gst:29,gmt:29},{level:30,gst:100,gmt:100}],d=function(e){var l,t,n,r=e.realm,d=e.crypts,g=e.data,m=s.TX[r],u=(null===(l=d.find((function(e){return e.id===m.gst})))||void 0===l?void 0:l.jpy)||0,o=(null===(t=d.find((function(e){return e.id===m.gmt})))||void 0===t?void 0:t.jpy)||0,h=(null===(n=d.find((function(e){return e.id===m.main})))||void 0===n?void 0:n.jpy)||0,v=g.gst*u+g.gmt*o,x=c.filter((function(e){return e.level<=g.level})),j=x.reduce((function(e,l){return e+l.gst}),0)*u+x.reduce((function(e,l){return e+l.gmt}),0)*o;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("small",{children:g.level})}),(0,a.jsxs)("td",{className:"text-nowrap",children:[(0,a.jsx)("img",{className:"align-middle",src:"/stepn-utils/".concat(s.TX[r].gst,".png"),alt:"GST",width:"15",height:"15"}),(0,a.jsx)("span",{className:"align-middle",children:(0,a.jsx)("small",{children:g.gst})}),g.gmt>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{className:"ms-2 align-middle",src:"/stepn-utils/".concat(s.TX[r].gmt,".png"),alt:"GMT",width:"15",height:"15"}),(0,a.jsx)("span",{className:"align-middle",children:(0,a.jsx)("small",{children:g.gmt})})]})]}),(0,a.jsx)("td",{children:(0,a.jsx)("small",{children:(0,a.jsx)(i.g,{value:(v/h).toFixed(3)})})}),(0,a.jsx)("td",{children:(0,a.jsxs)("small",{children:["\xa5",(0,a.jsx)(i.g,{value:v.toFixed(0)})]})}),(0,a.jsx)("td",{children:(0,a.jsx)("small",{children:(0,a.jsx)(i.g,{value:(j/h).toFixed(3)})})}),(0,a.jsx)("td",{children:(0,a.jsxs)("small",{children:["\xa5",(0,a.jsx)(i.g,{value:j.toFixed(0)})]})})]},g.level)},g=function(e){var l=e.crypts,t=e.realm;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"mb-0",children:[(0,a.jsx)("thead",{className:"sticky-top",children:(0,a.jsxs)("tr",{style:{backgroundColor:"#ffffff"},children:[(0,a.jsx)("th",{children:(0,a.jsx)("small",{children:"Level"})}),(0,a.jsx)("th",{children:(0,a.jsx)("small",{children:"Cost"})}),(0,a.jsx)("th",{children:(0,a.jsx)("small",{children:s.TX[t].unit})}),(0,a.jsx)("th",{children:(0,a.jsx)("small",{children:"JPY"})}),(0,a.jsx)("th",{children:(0,a.jsx)("small",{children:"Total"})}),(0,a.jsx)("th",{children:(0,a.jsx)("small",{children:"JPY"})})]})}),(0,a.jsx)("tbody",{children:c.map((function(e){return(0,a.jsx)(d,{crypts:l,realm:t,data:e},e.level)}))})]})})},m=t(5521),u=t(682),o=t(4051),h=t(1555),v=t(1962),x=function(){var e,l=(0,n.useContext)(v._),t=l.realm,s=l.setRealm,r=l.crypts;return(0,a.jsxs)(u.Z,{className:"mt-2",style:{maxWidth:"540px"},children:[(0,a.jsx)(o.Z,{className:"mb-3 mt-3",children:(0,a.jsx)(h.Z,{className:"text-center",children:(0,a.jsx)("h5",{children:"Level Up Cost Table"})})}),(0,a.jsx)(o.Z,{className:"mb-2",children:(0,a.jsx)(m.K,{value:t,onChange:s})}),(0,a.jsx)(g,{crypts:r,realm:t}),(0,a.jsx)("div",{className:"text-end",children:(0,a.jsxs)("small",{children:["Last updated at ",null===(e=r[0])||void 0===e?void 0:e.lastUpdatedAt.toLocaleString()]})})]})};x.suppressFirstRenderFlicker=!0,x.getLayout=function(e){return(0,a.jsx)(v.Z,{title:"Level Up Cost Table",children:e})};var j=x},8758:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/levelup",function(){return t(885)}])},2086:function(e,l,t){"use strict";var s=t(4036),n=t.n(s),r=t(7294),i=t(600),a=t(5893);const c=r.forwardRef((({bsPrefix:e,size:l,vertical:t,className:s,as:r="div",...c},d)=>{const g=(0,i.vE)(e,"btn-group");let m=g;return t&&(m=`${g}-vertical`),(0,a.jsx)(r,{...c,ref:d,className:n()(s,m,l&&`${g}-${l}`)})}));c.displayName="ButtonGroup",c.defaultProps={vertical:!1,role:"group"},l.Z=c},8984:function(e,l,t){"use strict";var s=t(4036),n=t.n(s),r=t(7294),i=t(600),a=t(5005),c=t(5893);const d=()=>{},g=r.forwardRef((({bsPrefix:e,name:l,className:t,checked:s,type:r,onChange:g,value:m,disabled:u,id:o,inputRef:h,...v},x)=>(e=(0,i.vE)(e,"btn-check"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{className:e,name:l,type:r,value:m,ref:h,autoComplete:"off",checked:!!s,disabled:!!u,onChange:g||d,id:o}),(0,c.jsx)(a.Z,{...v,ref:x,className:n()(t,u&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:o})]}))));g.displayName="ToggleButton",l.Z=g}},function(e){e.O(0,[774,794,604,888,179],(function(){return l=8758,e(e.s=l);var l}));var l=e.O();_N_E=l}]);