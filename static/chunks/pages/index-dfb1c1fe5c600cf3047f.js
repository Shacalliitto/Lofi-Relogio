(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,t,n){"use strict";var i=n(3038),r=n(319);t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,s=void 0!==r&&r,u=e.priority,d=void 0!==u&&u,m=e.loading,b=e.lazyBoundary,v=void 0===b?"200px":b,p=e.className,A=e.quality,y=e.width,w=e.height,j=e.objectFit,k=e.objectPosition,_=e.onLoadingComplete,E=e.loader,D=void 0===E?z:E,O=e.placeholder,P=void 0===O?"empty":O,L=e.blurDataURL,M=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),I=n?"responsive":"intrinsic";"layout"in M&&(M.layout&&(I=M.layout),delete M.layout);var N="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var R=h(t)?t.default:t;if(!R.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(R)));if(L=L||R.blurDataURL,N=R.src,(!I||"fill"!==I)&&(w=w||R.height,y=y||R.width,!R.height||!R.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(R)))}t="string"===typeof t?t:N;var B=S(y),H=S(w),C=S(A),q=!d&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,q=!1);g.has(t)&&(q=!1);0;var U,F,W,T=l.useIntersection({rootMargin:v,disabled:!q}),Q=i(T,2),J=Q[0],V=Q[1],G=!q||V,K={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:k},X="blur"===P?{filter:"blur(20px)",backgroundSize:j||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:k||"0% 0%"}:{};if("fill"===I)U={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof B&&"undefined"!==typeof H){var Y=H/B,Z=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===I?(U={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},F={display:"block",boxSizing:"border-box",paddingTop:Z}):"intrinsic"===I?(U={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},F={boxSizing:"border-box",display:"block",maxWidth:"100%"},W='<svg width="'.concat(B,'" height="').concat(H,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===I&&(U={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:B,height:H})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};G&&($=x({src:t,unoptimized:s,layout:I,width:B,quality:C,sizes:n,loader:D}));var ee=t;return o.default.createElement("div",{style:U},F?o.default.createElement("div",{style:F},W?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(W))}):null):null,o.default.createElement("img",Object.assign({},M,$,{decoding:"async","data-nimg":I,className:p,ref:function(e){J(e),function(e,t,n,i,r){if(!e)return;var o=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===i&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),g.add(t),r){var n=e.naturalWidth,o=e.naturalHeight;r({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ee,0,P,_)},style:f({},K,X)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},M,x({src:t,unoptimized:s,layout:I,width:B,quality:C,sizes:n,loader:D}),{decoding:"async","data-nimg":I,style:K,className:p,loading:m||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var o=d(n(7294)),a=d(n(639)),c=n(8997),s=n(5809),l=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){u(e,t,n[t])}))}return e}var g=new Set;var m=new Map([["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(e){return void 0!==e.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,v=b.deviceSizes,p=b.imageSizes,A=b.loader,y=b.path,w=(b.domains,[].concat(r(v),r(p)));function x(e){var t=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,o=/(^|\s)(1?\d?\d)vw/g,a=[];i=o.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:w.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(o,i,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t=m.get(A);if(t)return t(f({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(A))}function j(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},7426:function(e,t,n){"use strict";var i=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=r.useRef(),l=r.useState(!1),u=i(l,2),d=u[0],f=u[1],g=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[g,d]};var r=n(7294),o=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},7568:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});n(9008);var i=n(5675),r=n(4476),o=n.n(r),a={src:"/_next/static/image/public/imgs/sol.26f66de8a849d9a75bc8ee43f48bf3e2.png",height:120,width:120,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5UlEQVR42mP4ecWRkQEKPt+31wFifRj/50V7iNyXSx7+rxYyiHw4ZBf78bBd8pNmBqEvF92DGGDg/RYG7W+X/Hb9fdX19e/rrq9fL/geeLeewQgs+e2Irfq7VTKhv285/vv72PP/PyD+c9vh//vVMjHfDllrMnzdb+HwfrFK7detsv+/nlD/+/W46p8vm6T+v1ug1Pptv4UL2JR7DUoSb6aK3Xi/QOz/u7mi/99MEr3/pE9JjgEGPm00Sng5Q938Za9Y5as+8frXszTMP28ySgFLflinB/fmx41m1h83mjrA+ev1GQGfkW9rplLcLQAAAABJRU5ErkJggg=="},c={src:"/_next/static/image/public/imgs/lua.4733cc53c71e2c86df8f926e0d2ac60b.png",height:120,width:120,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAz0lEQVR42mNABm+PaTKC6PdnvBPeHLM0ZUAHn86HgRV8uZIs9ems96UPB+XUMBVdDWMB0d+vRBz8espuD8PvexaMb86GMsIUfH2cA1bw42b8vh/nnL8ywMD/90ks/78Ws4LYv6+HK/28k/Tv1xnrZww/7/jG3zyQJAJ36KkAhV+Pcs9+uxT8/+cp4zkM/x7Y2/y8E3j5y4243d9up+z6cTf176cLIf8/HrO49POskxDE+Jt6uv+vuR79dcHz94dj9q9e7zdc8O6QjTADAwMDAMggZgtNXsgRAAAAAElFTkSuQmCC"},s=n(5893);function l(){setInterval((function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),i=e.getSeconds();t<10&&(t="0"+t),n<10&&(n="0"+n),i<10&&(i="0"+i);var r="".concat(t,":").concat(n,":").concat(i);document.getElementById("rel").value=r}),1e3);var e=new Date;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:o().luz,children:[(0,s.jsx)("button",{className:o().btn,onClick:function(){document.querySelector("html").classList.add("lightMode")},children:(0,s.jsx)(i.default,{src:a,alt:"Bot\xe3o de Ligh mode",className:o().img})}),(0,s.jsx)("button",{className:o().btn,onClick:function(){document.querySelector("html").classList.remove("lightMode")},children:(0,s.jsx)(i.default,{src:c,alt:"Bot\xe3o de Dark mode",className:o().img})})]}),(0,s.jsx)("div",{}),(0,s.jsxs)("div",{className:o().clock,children:[(0,s.jsx)("h1",{children:"Lofi Clock"}),(0,s.jsx)("iframe",{className:o().lofi,src:"https://www.youtube.com/embed/DWcJFNfaw9c?autoplay=1&rel=0",frameBorder:"0"}),(0,s.jsx)("input",{type:"text",id:"rel",className:o().hora}),(0,s.jsxs)("h2",{children:[["Domingo","Segunda-Feira","Ter\xe7a-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado"][e.getDay()],", ",e.getDate()," de ",["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e.getMonth()]," de ",e.getFullYear()]})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7568)}])},4476:function(e){e.exports={luz:"Home_luz__16NEK",btn:"Home_btn__3Pfip",clock:"Home_clock__SS7Lt",hora:"Home_hora__1c3XC",lofi:"Home_lofi__3IdEB"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){n(639)},5675:function(e,t,n){e.exports=n(9917)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);