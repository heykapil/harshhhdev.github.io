(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{32912:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(54365)}])},10203:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),o=n(67294);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=n(85466),l=n(22921),s=(0,l.zo)("div",{position:"fixed",top:0,left:0,width:50,height:50,border:"2px solid white",borderRadius:"100%",transform:"translate(-50%, -50%)",transition:"0.2s ease-out",zIndex:999,pointerEvents:"none","@iPad":{display:"none"}}),c=(0,l.zo)("div",{position:"fixed",top:"50%",left:"50%",width:10,height:10,backgroundColor:"white",borderRadius:"100%",transform:"translate(-50%, -50%)",zIndex:999,pointerEvents:"none","@iPad":{display:"none"}}),u=function(){var e=function(){var e=i(o.useState({x:0,y:0}),2),t=e[0],n=e[1];return o.useEffect((function(){var e=function(e){var t=e.clientX,r=e.clientY;n({x:t,y:r})};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}}),[]),t}(),t=e.x,n=e.y,l=o.useContext(a.m),u=l.cursorType,d=l.cursorChangeHandler;return o.useEffect((function(){document.addEventListener("mousedown",(function(){return d("hovered")})),document.addEventListener("mouseup",(function(){return d("")})),Array.from(document.getElementsByTagName("a")).forEach((function(e){e.addEventListener("mouseover",(function(){return d("hovered")})),e.addEventListener("mouseout",(function(){return d("")}))}))})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{className:"ring "+u,style:{left:"".concat(t,"px"),top:"".concat(n,"px")}}),(0,r.jsx)(c,{className:"dot "+u,style:{left:"".concat(t,"px"),top:"".concat(n,"px")}})]})}},89105:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(85893),o=n(67294),i=n(22921),a=(0,i.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:999,"@media only screen and (min-width: 1024px)":{margin:100},"@iPadPro":{flexDirection:"column",justifyContent:"center"}}),l=(0,i.zo)("div",{display:"flex",alignItems:"center","@iPadPro":{margin:"10px 0"}}),s=(0,i.zo)("p",{display:"flex",alignItems:"center",color:"$main",fontSize:"$4",fontFamily:"$primary",marginRight:20,svg:{margin:"0 10px"},"@iPadPro":{fontSize:"$2"}}),c=(0,i.zo)("a",{textDecoration:"none",color:"$main",transition:"0.1s linear",margin:"0 10px","&:hover":{color:"$white",transform:"scale(1.1, 1.1)"}}),u=(0,i.zo)("a",{textDecoration:"none",color:"$main",margin:"0 5px","&:hover":{color:"$white"}}),d=n(52006),h=n(47811),f=n(46702),p=n(20706),m=n(16268);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(){var e=g(o.useState(null),2),t=e[0],n=e[1];return o.useEffect((function(){var e=new Date;n(e.getFullYear())}),[]),(0,r.jsxs)(a,{children:[(0,r.jsx)(l,{children:(0,r.jsxs)(s,{children:[(0,r.jsx)(d.Z,{})," with ",(0,r.jsx)(h.Z,{})," and"," ",(0,r.jsx)(u,{href:"https://nextjs.org/",target:"_blank",children:"Next.js"})]})}),(0,r.jsxs)(l,{children:[(0,r.jsxs)(s,{children:["\xa9 ",t," Harsh Singh"]}),(0,r.jsx)(c,{href:"https://github.com/harshhhdev",target:"_blank",children:(0,r.jsx)(f.Z,{})}),(0,r.jsx)(c,{href:"https://twitter.com/harshhhdev",target:"_blank",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(c,{href:"https://dribbble.com/harshhhdev",target:"_blank",children:(0,r.jsx)(m.Z,{})})]})]})}},88066:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),n(9008));t.Z=function(e){var t=e.title,n=e.description,i="https://harshhhdev.github.io/";return(0,r.jsxs)(o.default,{children:[(0,r.jsxs)("title",{children:["Harsh Singh - ",t]}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:i}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"twitter:url",content:i}),(0,r.jsx)("meta",{property:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),(0,r.jsx)("meta",{name:"theme-color",content:"#0da7ee"}),(0,r.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\udc4b</text></svg>"})]})}},22548:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(85893),o=n(67294),i=n(22921),a=(0,i.zo)("nav",{display:"flex",justifyContent:"center",position:"fixed",zIndex:999,top:0,left:0,right:0,background:"$dark",alignItems:"center",height:100,width:"100vw"}),l=(0,i.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",width:"70%","@Flip":{width:"85%",justifyContent:"space-around !important"},"@iPadPro":{width:"100vw",justifyContent:"center"}}),s=(0,i.zo)("p",{fontFamily:"$mono",fontSize:"$3",color:"$main","@Flip":{fontSize:"$2",display:"flex !important"},"@iPhoneSE":{fontSize:"$1"},"@iPadPro":{display:"none"}}),c=(0,i.zo)("div",{display:"flex","@Flip":{display:"none"}}),u=(0,i.zo)("a",{color:"$main",fontSize:"$3",textDecoration:"none",margin:"0 10px",fontFamily:"$main","&:hover":{color:"$white"}}),d=(0,i.zo)("button",{background:"none",outline:"none",border:"none",color:"$white",display:"flex",alignItems:"center",justifyContent:"center","@media only screen and (min-width: 600px)":{display:"none"}}),h=(0,i.zo)("div",{zIndex:999999,position:"fixed",height:"100vh",width:"100vw",background:"#2A2A2A90",display:"flex",justifyContent:"center",alignItems:"center"}),f=(0,i.zo)("div",{width:280,height:300,background:"$primary",zIndex:9999999,display:"flex",flexDirection:"column",justifyContent:"center"}),p=(0,i.zo)("a",{textDecoration:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",margin:"0 0 10px 30px"}),m=n(90408);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(e){var t=e.location,n=g(o.useState(!1),2),i=n[0],x=n[1],y=function(){x((function(e){return!e}))},v=[{link:"/#home",title:"Home"},{link:"/#about",title:"About"},{link:"/#projects",title:"Projects"},{link:"/#designs",title:"Designs"},{link:"/#contact",title:"Contact"},{link:"/blog",title:"Blog"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{className:i?"":"disabled",onClick:y,children:(0,r.jsx)(f,{children:v.map((function(e,t){return(0,r.jsx)(p,{href:e.link,onClick:y,children:e.title},t)}))})}),(0,r.jsx)(a,{children:(0,r.jsxs)(l,{children:[(0,r.jsxs)(s,{children:["~/harshsingh/",t]}),(0,r.jsx)(c,{children:v.map((function(e,t){return(0,r.jsx)(u,{href:e.link,children:e.title},t)}))}),(0,r.jsx)(d,{onClick:y,children:(0,r.jsx)(m.Z,{})})]})})]})}},37787:function(e,t,n){"use strict";var r=n(85893),o=n(67294);t.Z=function(){return o.useEffect((function(){var e=document.createElement("script");e.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"),e.setAttribute("crossorigin","anonymous"),document.querySelector("body").appendChild(e)}),[]),(0,r.jsx)(r.Fragment,{})}},54365:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Q},default:function(){return V}});var r=n(85893),o=n(67294),i=n(88066),a=n(10203),l=n(37787),s=n(22548),c=n(22921),u=(0,c.zo)("div",{display:"flex",alignItems:"center",flexDirection:"column",minHeight:"100vh"}),d=(0,c.zo)("h1",{fontSize:60,color:"$white",margin:"40px 0 20px 0",textAlign:"center"}),h=(0,c.zo)("p",{fontSize:20,color:"$white",maxWidth:"70vw",textAlign:"center"}),f=(0,c.zo)("div",{display:"flex",marginTop:30}),p=(0,c.zo)("a",{display:"flex",color:"$main",margin:"0 10px",transition:"0.1s linear","&:hover":{color:"$white",transform:"scale(1.15, 1.15)"},"@iPhoneSE":{margin:"0 7px"}}),m=(0,c.zo)("div",{display:"flex",alignItems:"center",flexDirection:"column",minHeight:"100vh",marginTop:100}),g=((0,c.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw"}),(0,c.zo)("div",{display:"flex",flexDirection:"column",margin:"50px 0",width:"50vw","@iPhone":{width:"90vw"}})),x=(0,c.zo)("a",{display:"inline-block",background:"$gradient",width:"fit-content",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$4",fontFamily:"$main","@iPad":{width:"90vw"}}),y=(0,c.zo)("p",{fontFamily:"$primary",color:"$main",margin:"30px 0",fontSize:"$2","@iPad":{width:"80vw"}}),v=(0,c.zo)("div",{display:"flex",fontFamily:"$primary",color:"$white","@iPad":{width:"80vw"},"@iPhoneSE":{fontSize:"$1"}}),w=(0,c.zo)("div",{display:"flex",alignItems:"center",marginRight:30,svg:{marginRight:10},"@iPhone":{marginRight:10}}),b=n(90791),j=n(91140),k=function(e){var t=e.index,n=e.id,o=e.title,i=e.description,a=e.readingTime,l=e.formattedDate;return(0,r.jsxs)(g,{children:[(0,r.jsx)(x,{href:"/blog/".concat(n),id:"title",children:o}),(0,r.jsx)(y,{children:i}),(0,r.jsxs)(v,{children:[(0,r.jsxs)(w,{children:[(0,r.jsx)(b.Z,{}),a," min"]}),(0,r.jsxs)(w,{children:[(0,r.jsx)(j.Z,{}),l]})]})]},t)},O=n(46702),z=n(20706),E=n(16268),P=n(45697),S=n.n(P);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var T=(0,o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,l=C(e,["color","size"]);return o.createElement("svg",$({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));T.propTypes={color:S().string,size:S().oneOfType([S().string,S().number])},T.displayName="BookOpen";var I=T;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D=(0,o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,l=Z(e,["color","size"]);return o.createElement("svg",F({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),o.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),o.createElement("circle",{cx:"4",cy:"4",r:"2"}))}));D.propTypes={color:S().string,size:S().oneOfType([S().string,S().number])},D.displayName="Linkedin";var _=D;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var B=(0,o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,l=L(e,["color","size"]);return o.createElement("svg",A({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.createElement("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}),o.createElement("polygon",{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}))}));B.propTypes={color:S().string,size:S().oneOfType([S().string,S().number])},B.displayName="Youtube";var N=B;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var H=(0,o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,l=W(e,["color","size"]);return o.createElement("svg",R({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),o.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),o.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}))}));H.propTypes={color:S().string,size:S().oneOfType([S().string,S().number])},H.displayName="Instagram";var M=H;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Y=(0,o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,l=G(e,["color","size"]);return o.createElement("svg",X({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),o.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));Y.propTypes={color:S().string,size:S().oneOfType([S().string,S().number])},Y.displayName="Send";var U=Y,q=function(e){var t=e.blogsData;o.useRef(null);return(0,r.jsx)(u,{children:(0,r.jsxs)(m,{children:[(0,r.jsx)(d,{children:"Harsh's Blog"}),(0,r.jsx)(h,{children:"Welcome to my tech blog! It consists mainly of tutorials & my experiences trying out new technologies"}),(0,r.jsxs)(f,{children:[(0,r.jsx)(p,{href:"https://github.com/harshhhdev/",target:"_blank",children:(0,r.jsx)(O.Z,{})}),(0,r.jsx)(p,{href:"https://twitter.com/harshhhdev/",target:"_blank",children:(0,r.jsx)(z.Z,{})}),(0,r.jsx)(p,{href:"https://dribbble.com/harshhhdev",target:"_blank",children:(0,r.jsx)(E.Z,{})}),(0,r.jsx)(p,{href:"https://dev.to/harshhhdev",target:"blank",children:(0,r.jsx)(I,{})}),(0,r.jsx)(p,{href:"https://www.linkedin.com/in/harsh-singh-5ba6b31b8/",target:"blank",children:(0,r.jsx)(_,{})}),(0,r.jsx)(p,{href:"https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ",target:"blank",children:(0,r.jsx)(N,{})}),(0,r.jsx)(p,{href:"https://instagram.com/harshh.singh_",target:"blank",children:(0,r.jsx)(M,{})}),(0,r.jsx)(p,{href:"https://t.me/harshhhdev",target:"blank",children:(0,r.jsx)(U,{})})]}),t.map((function(e,t){return(0,r.jsx)(k,{index:t,id:e.id,title:e.title,description:e.description,readingTime:e.readingTime,formattedDate:e.formattedDate})}))]})})},K=n(89105),J=n(14637),Q=(n(10015),!0),V=function(e){var t=e.allBlogsData;return(0,J.Z)(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{location:"blog"}),(0,r.jsx)(i.Z,{title:"Blog",description:"\ud83d\udc4b Hello. Welcome to my blog - Here, I'll write tutorials, and share my expriences on a wide variety of technologies."}),(0,r.jsx)(a.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(q,{blogsData:t}),(0,r.jsx)(K.Z,{})]})}},14637:function(e,t,n){"use strict";var r=(0,n(22921).CO)({"*":{margin:0,padding:0,boxSizing:"border-box",cursor:"none !important",scrollBehavior:"smooth"},html:{overflowX:"hidden"},body:{background:"$dark",overflowX:"hidden",fontFamily:"GTWalsheimPro"},"::selection":{background:"#4560F060"},img:{userSelect:"none"},"body::-webkit-scrollbar":{width:10},"body::-webkit-scrollbar-track":{background:"$primary"},"body::-webkit-scrollbar-thumb":{background:"$main"},"body::-webkit-scrollbar-thumb:hover":{background:"$main2"},"code, pre":{fontFamily:"$mono"},ul:{marginLeft:20},".invalid":{color:"#F16D6D !important"},".disabled":{display:"none !important"},"@font-face":{fontFamily:"GTWalsheimPro",src:"url(/GTWalsheimPro-Regular.ttf)",fontStyle:"normal",fontWeight:400,fontDisplay:"swap"},".ring.hovered":{width:80,height:80}});t.Z=r},22921:function(e,t,n){"use strict";n.d(t,{zo:function(){return o},CO:function(){return i},F4:function(){return a},vs:function(){return l}});var r=(0,n(86744).rm)({theme:{colors:{main:"#6B7C95",main2:"#8696AD",primary:"#37393E",dark:"#191919",white:"#F4F4F5",gradient:"linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)"},fontSizes:{1:"14px",2:"18px",3:"20px",4:"24px",5:"36px",6:"48px"},fonts:{main:"GTWalsheimPro, sans-serif",mono:"JetBrains Mono, monospace"}},media:{iPadPro:"(max-width: 1024px)",iPad:"(max-width: 768px)",Flip:"(max-width: 600px)",iPhonePlus:"(max-width: 414px)",iPhone:"(max-width: 375px)",iPhoneSE:"(max-width: 320px)"}}),o=(r.css,r.styled),i=r.global,a=(r.getCssString,r.keyframes),l=o("div",{position:"relative",overflow:"hidden"})},91140:function(e,t,n){"use strict";var r=n(67294),o=n(45697),i=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="Calendar",t.Z=s},90791:function(e,t,n){"use strict";var r=n(67294),o=n(45697),i=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("polyline",{points:"12 6 12 12 16 14"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="Clock",t.Z=s}},function(e){e.O(0,[202,774,888,179],(function(){return t=32912,e(e.s=t);var t}));var t=e.O();_N_E=t}]);