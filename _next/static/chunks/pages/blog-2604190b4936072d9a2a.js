(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{20174:function(e,t,n){"use strict";var i=n(85893),r=n(67294),o=n(97184),s=(0,o.zo)("div",{pointerEvents:"none",position:"absolute",top:"50%",left:"50%",borderRadius:"50%",opacity:0,transform:"translate(-50%, -50%)",transition:"opacity 0.3s ease-in-out, transform 0.3s ease-in-out",width:8,height:8,backgroundColor:"#ffffff",zIndex:99999,"@media only screen and (max-width: 1024px)":{display:"none"}}),a=(0,o.zo)("div",{pointerEvents:"none",position:"absolute",top:"50%",left:"50%",borderRadius:"50%",opacity:0,transform:"translate(-50%, -50%)",transition:"opacity 0.3s ease-in-out, transform 0.3s ease-in-out",width:60,height:60,backgroundColor:"transparent",border:"2px solid #fff",zIndex:99999,"@media (pointer: none)":{display:"none"}});t.Z=function(){return r.useEffect((function(){({delay:8,_x:0,_y:0,endX:window.innerWidth/2,endY:window.innerHeight/2,cursorVisible:!0,cursorEnlarged:!1,$dot:document.querySelector(".cursor-dot"),$outline:document.querySelector(".cursor-dot-outline"),init:function(){this.dotSize=this.$dot.offsetWidth,this.outlineSize=this.$outline.offsetWidth,this.setupEventListeners(),this.animateDotOutline()},setupEventListeners:function(){var e=this;document.querySelectorAll("a").forEach((function(t){t.addEventListener("mouseover",(function(){e.cursorEnlarged=!0,e.toggleCursorSize()})),t.addEventListener("mouseout",(function(){e.cursorEnlarged=!1,e.toggleCursorSize()}))})),document.querySelectorAll("button").forEach((function(t){t.addEventListener("mouseover",(function(){e.cursorEnlarged=!0,e.toggleCursorSize()})),t.addEventListener("mouseout",(function(){e.cursorEnlarged=!1,e.toggleCursorSize()}))})),document.addEventListener("mousedown",(function(){e.cursorEnlarged=!0,e.toggleCursorSize()})),document.addEventListener("mouseup",(function(){e.cursorEnlarged=!1,e.toggleCursorSize()})),document.addEventListener("mousemove",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.endX=t.pageX,e.endY=t.pageY,e.$dot.style.top=e.endY+"px",e.$dot.style.left=e.endX+"px"})),document.addEventListener("mouseenter",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.$dot.style.opacity=1,e.$outline.style.opacity=1})),document.addEventListener("mouseleave",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.$dot.style.opacity=0,e.$outline.style.opacity=0}))},animateDotOutline:function(){var e=this;e._x+=(e.endX-e._x)/e.delay,e._y+=(e.endY-e._y)/e.delay,e.$outline.style.top=e._y+"px",e.$outline.style.left=e._x+"px",requestAnimationFrame(this.animateDotOutline.bind(e))},toggleCursorSize:function(){var e=this;e.cursorEnlarged?(e.$dot.style.transform="translate(-50%, -50%) scale(0.75)",e.$outline.style.transform="translate(-50%, -50%) scale(1.5)"):(e.$dot.style.transform="translate(-50%, -50%) scale(1)",e.$outline.style.transform="translate(-50%, -50%) scale(1)")},toggleCursorVisibility:function(){var e=this;e.cursorVisible?(e.$dot.style.opacity=1,e.$outline.style.opacity=1):(e.$dot.style.opacity=0,e.$outline.style.opacity=0)}}).init()})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{className:"cursor-dot-outline"}),(0,i.jsx)(s,{className:"cursor-dot"})]})}},56165:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(85893),r=n(13391),o=n(67294),s=n(97184),a=(0,s.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:999,"@media only screen and (min-width: 1024px)":{margin:100},"@media only screen and (max-width: 1024px)":{flexDirection:"column",justifyContent:"center"}}),l=(0,s.zo)("div",{display:"flex",alignItems:"center","@media only screen and (max-width: 1024px)":{margin:"10px 0"}}),c=(0,s.zo)("p",{display:"flex",alignItems:"center",color:"$main",fontSize:"$4",fontFamily:"$primary",marginRight:20,svg:{margin:"0 10px"},"@media only screen and (max-width: 1024px)":{fontSize:"$2"}}),d=(0,s.zo)("a",{textDecoration:"none",color:"$main",transition:"0.1s linear",margin:"0 10px","&:hover":{color:"$white",transform:"scale(1.1, 1.1)"}}),u=(0,s.zo)("a",{textDecoration:"none",color:"$main",margin:"0 5px","&:hover":{color:"$white"}}),m=n(52006),f=n(47811),p=n(46702),h=n(20706),x=n(16268),y=function(){var e=o.useState(null),t=(0,r.Z)(e,2),n=t[0],s=t[1];return o.useEffect((function(){var e=new Date;s(e.getFullYear())}),[]),(0,i.jsxs)(a,{children:[(0,i.jsx)(l,{children:(0,i.jsxs)(c,{children:[(0,i.jsx)(m.Z,{})," with ",(0,i.jsx)(f.Z,{})," and"," ",(0,i.jsx)(u,{href:"https://nextjs.org/",target:"_blank",children:"Next.js"})]})}),(0,i.jsxs)(l,{children:[(0,i.jsxs)(c,{children:["\xa9 ",n," Harsh Singh"]}),(0,i.jsx)(d,{href:"https://github.com/harshhhdev",target:"_blank",children:(0,i.jsx)(p.Z,{})}),(0,i.jsx)(d,{href:"https://twitter.com/harshhhdev",target:"_blank",children:(0,i.jsx)(h.Z,{})}),(0,i.jsx)(d,{href:"https://dribbble.com/harshhhdev",target:"_blank",children:(0,i.jsx)(x.Z,{})})]})]})}},37346:function(e,t,n){"use strict";var i=n(85893),r=(n(67294),n(9008));t.Z=function(e){var t=e.title,n=e.description,o="https://harshhhdev.github.io/";return(0,i.jsxs)(r.default,{children:[(0,i.jsxs)("title",{children:["Harsh Singh - ",t]}),(0,i.jsx)("meta",{property:"og:title",content:t}),(0,i.jsx)("meta",{property:"twitter:title",content:t}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:o}),(0,i.jsx)("meta",{property:"og:description",content:n}),(0,i.jsx)("meta",{property:"twitter:url",content:o}),(0,i.jsx)("meta",{property:"twitter:description",content:n}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),(0,i.jsx)("meta",{name:"theme-color",content:"#0da7ee"}),(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\udc4b</text></svg>"}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Inter:wght@600&family=JetBrains+Mono:wght@400&display=swap",rel:"stylesheet"})]})}},97055:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(85893),r=n(13391),o=n(67294),s=n(97184),a=(0,s.zo)("nav",{display:"flex",justifyContent:"center",position:"fixed",zIndex:999,top:0,left:0,right:0,background:"$dark",alignItems:"center",height:100,width:"100vw"}),l=(0,s.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",width:"70%","@media only screen and (max-width: 600px)":{width:"85%",justifyContent:"space-around !important"},"@media only screen and (max-width: 1024px)":{width:"100vw",justifyContent:"center"}}),c=(0,s.zo)("p",{fontFamily:"$mono",fontSize:"$3",color:"$main","@media only screen and (max-width: 600px)":{fontSize:"$2",display:"flex !important"},"@media only screen and (max-width: 320px)":{fontSize:"$1"},"@media only screen and (max-width: 1024px)":{display:"none"}}),d=(0,s.zo)("div",{display:"flex","@media only screen and (max-width: 600px)":{display:"none"}}),u=(0,s.zo)("a",{color:"$main",fontSize:"$3",textDecoration:"none",margin:"0 10px",fontFamily:"$main","&:hover":{color:"$white"}}),m=(0,s.zo)("button",{background:"none",outline:"none",border:"none",color:"$white",display:"flex",alignItems:"center",justifyContent:"center","@media only screen and (min-width: 600px)":{display:"none"}}),f=(0,s.zo)("div",{zIndex:999999,position:"fixed",height:"100vh",width:"100vw",background:"#2A2A2A90",display:"flex",justifyContent:"center",alignItems:"center"}),p=(0,s.zo)("div",{width:280,height:300,background:"$primary",zIndex:9999999,display:"flex",flexDirection:"column",justifyContent:"center"}),h=(0,s.zo)("a",{textDecoration:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",margin:"0 0 10px 30px"}),x=n(90408),y=function(e){var t=e.location,n=o.useState(!1),s=(0,r.Z)(n,2),y=s[0],g=s[1],v=function(){g((function(e){return!e}))},w=[{link:"/#home",title:"Home"},{link:"/#about",title:"About"},{link:"/#projects",title:"Projects"},{link:"/#designs",title:"Designs"},{link:"/#contact",title:"Contact"},{link:"/blog",title:"Blog"}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{className:y?"":"disabled",onClick:v,children:(0,i.jsx)(p,{children:w.map((function(e,t){return(0,i.jsx)(h,{href:e.link,onClick:v,children:e.title},t)}))})}),(0,i.jsx)(a,{children:(0,i.jsxs)(l,{children:[(0,i.jsxs)(c,{children:["~/harshsingh/",t]}),(0,i.jsx)(d,{children:w.map((function(e,t){return(0,i.jsx)(u,{href:e.link,children:e.title},t)}))}),(0,i.jsx)(m,{onClick:v,children:(0,i.jsx)(x.Z,{})})]})})]})}},96233:function(e,t,n){"use strict";var i=n(85893),r=n(67294);t.Z=function(){return r.useEffect((function(){var e=document.createElement("script");e.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"),e.setAttribute("crossorigin","anonymous"),document.querySelector("body").appendChild(e)}),[]),(0,i.jsx)(i.Fragment,{})}},33117:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return E},default:function(){return C}});var i=n(85893),r=n(67294),o=n(37346),s=n(20174),a=n(96233),l=n(97055),c=n(71317),d=n.n(c),u=n(97184),m=(0,u.zo)("div",{display:"flex",alignItems:"center",flexDirection:"column",minHeight:"100vh"}),f=(0,u.zo)("div",{display:"flex",alignItems:"center",flexDirection:"column",minHeight:"100vh",marginTop:100}),p=(0,u.zo)("input",{background:"$primary ",marginTop:100,padding:30,outline:"none",border:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",width:500,maxWidth:"90vw",margin:50,borderRadius:7,transition:"0.1s linear","&:focus":{transform:"scale(0.99, 0.99)"}}),h=(0,u.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw"}),x=(0,u.zo)("div",{display:"flex",flexDirection:"column",margin:"50px 0",width:"50vw"}),y=(0,u.zo)("a",{display:"inline-block",background:"$gradient",width:"fit-content",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"$4",fontFamily:"$main","@media only screen and (max-width: 768px)":{width:"90vw"}}),g=(0,u.zo)("p",{fontFamily:"$primary",color:"$main",margin:"30px 0",fontSize:"$2","@media only screen and (max-width: 768px)":{width:"80vw"}}),v=(0,u.zo)("div",{display:"flex",fontFamily:"$primary",color:"$white","@media only screen and (max-width: 768px)":{width:"80vw"}}),w=(0,u.zo)("div",{display:"flex",alignItems:"center",marginRight:30,svg:{marginRight:10}}),b=n(90791),j=n(91140),$=function(e){var t=e.blogsData,n=r.useRef(null);return(0,i.jsx)(m,{children:(0,i.jsxs)(f,{children:[(0,i.jsx)(p,{type:"text",ref:n,onKeyUp:function(){for(var e=document.querySelectorAll("div.blog-card"),t=0;t<e.length;t++){e[t].querySelector("a#title").innerHTML.toUpperCase().indexOf(n.current.value.toUpperCase())>-1?e[t].style.display="flex":e[t].style.display="none"}},placeholder:"Search Blogs..."}),(0,i.jsx)(h,{children:t.map((function(e,t){return(0,i.jsx)(d(),{animateIn:"animate__flipInX",animateOnce:!0,delay:200,children:(0,i.jsxs)(x,{className:"blog-card",children:[(0,i.jsx)(y,{href:"/blog/".concat(e.id),id:"title",children:e.title}),(0,i.jsx)(g,{children:e.description}),(0,i.jsxs)(v,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(b.Z,{}),e.readingTime," min"]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(j.Z,{}),e.formattedDate]})]})]},t)},t)}))})]})})},z=n(56165),k=n(42366),E=(n(16061),!0),C=function(e){var t=e.allBlogsData;return(0,k.Z)(),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{location:"blog"}),(0,i.jsx)(o.Z,{title:"Blog",description:"\ud83d\udc4b Hello. Welcome to my blog - Here, I'll write tutorials, and share my expriences on a wide variety of technologies."}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(a.Z,{}),(0,i.jsx)($,{blogsData:t}),(0,i.jsx)(z.Z,{})]})}},42366:function(e,t,n){"use strict";var i=(0,n(97184).CO)({"*":{margin:0,padding:0,boxSizing:"border-box",cursor:"none !important",scrollBehavior:"smooth"},html:{overflowX:"hidden"},body:{background:"$dark",overflowX:"hidden"},"::selection":{background:"#4560F060"},img:{userSelect:"none"},"body::-webkit-scrollbar":{width:10},h1:{fontFamily:"$main"},"body::-webkit-scrollbar-track":{background:"$primary"},"body::-webkit-scrollbar-thumb":{background:"$main"},"body::-webkit-scrollbar-thumb:hover":{background:"$main2"},"code, pre":{fontFamily:"$mono"},".invalid":{color:"#F16D6D !important"},".disabled":{display:"none !important"}});t.Z=i},97184:function(e,t,n){"use strict";n.d(t,{zo:function(){return r},CO:function(){return o},F4:function(){return s},vs:function(){return a}});var i=(0,n(34995).rm)({theme:{colors:{main:"#6B7C95",main2:"#8696AD",primary:"#37393E",dark:"#191919",white:"#F4F4F5",gradient:"linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)"},fontSizes:{1:"14px",2:"18px",3:"20px",4:"24px",5:"36px",6:"48px"},fonts:{main:"Inter, sans-serif",primary:"Barlow, sans-serif",mono:"JetBrains Mono, monospace"}}}),r=(i.css,i.styled),o=i.global,s=(i.getCssString,i.keyframes),a=r("div",{position:"relative",overflow:"hidden"})},32912:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(33117)}])},91140:function(e,t,n){"use strict";var i=n(67294),r=n(45697),o=n.n(r);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=(0,i.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,l=void 0===o?24:o,c=a(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),i.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),i.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),i.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Calendar",t.Z=l},90791:function(e,t,n){"use strict";var i=n(67294),r=n(45697),o=n.n(r);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=(0,i.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,l=void 0===o?24:o,c=a(e,["color","size"]);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("polyline",{points:"12 6 12 12 16 14"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Clock",t.Z=l}},function(e){e.O(0,[774,180,317],(function(){return t=32912,e(e.s=t);var t}));var t=e.O();_N_E=t}]);