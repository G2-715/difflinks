!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);!function(){let n,e,t,o,r,i,a,s,d,c,l,p,f;function u(e){let t=function(n){if(!/^((http|https|ftp):\/\/)/.test(n))return"http://"+function(n,e){const t=[...n].findIndex(n=>n!==e),o=[...n].reverse().findIndex(n=>n!==e);return n.substring(t,n.length-o)}(n,"/");return n}(e=e.replace(/\s/g,"")),o=t;var r;n.classList.contains("loading")&&n.classList.remove("loading"),n.href=t,n.title=o,function n(e,t,o,r,i,a){r<o.length?(l&&(l=clearTimeout(l)),l=setTimeout(()=>{e[t]=o.substring(0,r+1),n(e,t,o,r+1,i,a)},i)):(l&&(l=clearTimeout(l)),a&&a())}(n,"innerHTML",o,0,(r=o).length>=d?Math.round(s/r.length):a)}function b(n){let o=e.value;var r;o&&(m(t,c=!0),(r=o,f?new Promise((n,e)=>{setTimeout(()=>{localStorage.setItem("link",r),n()},1e3)}):fetch(`${p}/setlink`,{method:"POST",body:JSON.stringify({link:r}),headers:{"Content-Type":"application/json"}})).then(()=>{m(t,c=!1)}).then(n=>{e.value="",u(o)}))}function h(){return(f?new Promise((n,e)=>{setTimeout(()=>{n(localStorage.getItem("link")||"...")},1e3)}):fetch(`${p}/link`).then(n=>n.json()).then(n=>n.link)).then(n=>{u(n)})}function g(n){13===n.keyCode&&b()}function m(n,e){e?n.classList.add("loading"):n.classList.remove("loading")}function y(n){n?i.classList.add("loading"):i.classList.remove("loading")}function v(){i.classList.add("hidden")}function x(n){n.classList.add("hidden")}function w(){var n;(n=r).classList.contains("hidden")?function(n){n.classList.remove("hidden")}(n):x(n)}function k(n){r.contains(n.target)||n.target===o||x(r)}function L(n){y(c=!0),h().then(v).then(()=>{y(c=!1)})}n=document.querySelector(".data-container_changing-data a"),e=document.querySelector(".data-container_data-input input"),t=document.querySelector(".data-container_change-data-btn button"),o=document.querySelector(".help_question-icon"),r=document.querySelector(".help_popover"),i=document.querySelector(".data-container_reload-data"),a=60,s=2e3,d=30,c=!1,l=null,p="http://localhost:5000",f=!1,window.addEventListener("DOMContentLoaded",h,!1),window.addEventListener("load",function(){t.addEventListener("click",b,!1),e.addEventListener("keyup",g,!1),o.addEventListener("click",w,!1),window.addEventListener("click",k,!1),i.addEventListener("click",L,!1)},!1),window.addEventListener("unload",function(){t.removeEventListener("click",b,!1),e.removeEventListener("keyup",g,!1),o.removeEventListener("click",w,!1),window.removeEventListener("click",k,!1),i.removeEventListener("click",L,!1)},!1)}()},function(n,e,t){var o=t(2);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(4)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(e=n.exports=t(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Quicksand);",""]),e.push([n.i,"html, body {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: #141727;\n  color: #b4b4b4;\n  font: normal 16px 'Quicksand', sans-serif; }\n  body .wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh; }\n    body .wrapper .header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      width: 100%;\n      padding: 20px 40px;\n      box-sizing: border-box; }\n      @media (max-width: 800px) {\n        body .wrapper .header {\n          padding: 20px; } }\n      body .wrapper .header .logo {\n        display: inline-block;\n        cursor: pointer; }\n        body .wrapper .header .logo_name {\n          display: block;\n          font-size: 36px;\n          font-weight: bold; }\n        body .wrapper .header .logo_tagline {\n          color: #ffffff;\n          font-size: 26px; }\n      body .wrapper .header .help {\n        position: relative; }\n        body .wrapper .header .help_question-icon {\n          width: 24px;\n          height: 24px;\n          padding: 6px;\n          border: 2px solid #b4b4b4;\n          border-radius: 50%;\n          cursor: pointer;\n          transition: .2s; }\n          body .wrapper .header .help_question-icon:hover {\n            background-color: rgba(255, 255, 255, 0.2);\n            border-color: #ffffff; }\n        body .wrapper .header .help_popover {\n          position: absolute;\n          top: 0;\n          right: 50px;\n          visibility: visible;\n          width: 260px;\n          background-color: #434552;\n          color: #fff;\n          border: 2px solid #ffffff;\n          border-radius: 8px;\n          padding: 10px 14px;\n          transition: .2s;\n          opacity: 1; }\n          body .wrapper .header .help_popover.hidden {\n            visibility: hidden;\n            opacity: 0; }\n          @media (max-width: 600px) {\n            body .wrapper .header .help_popover {\n              right: 0;\n              top: 50px; } }\n    body .wrapper .content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-grow: 1;\n      width: 100%;\n      padding: 20px 40px;\n      box-sizing: border-box; }\n      @media (max-width: 800px) {\n        body .wrapper .content {\n          padding: 20px; } }\n      body .wrapper .content .data-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position: relative; }\n        @media (max-width: 800px) {\n          body .wrapper .content .data-container {\n            width: 100%; } }\n        body .wrapper .content .data-container_changing-data {\n          padding: 14px 40px;\n          width: 680px;\n          min-height: 72px;\n          text-align: center;\n          border-radius: 8px;\n          background-color: inherit;\n          color: #ffffff;\n          border: 2px solid #ffffff;\n          margin-bottom: 24px;\n          transition: .2s;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          box-sizing: border-box; }\n          @media (max-width: 800px) {\n            body .wrapper .content .data-container_changing-data {\n              width: 100%;\n              min-height: 60px; } }\n          body .wrapper .content .data-container_changing-data:hover {\n            background-color: rgba(255, 255, 255, 0.2); }\n          body .wrapper .content .data-container_changing-data a {\n            font-size: 32px;\n            color: inherit;\n            transition: .2s; }\n            @media (max-width: 800px) {\n              body .wrapper .content .data-container_changing-data a {\n                font-size: 22px; } }\n        body .wrapper .content .data-container_reload-data {\n          position: absolute;\n          top: -38px;\n          right: 0;\n          visibility: visible;\n          width: 28px;\n          height: 28px;\n          cursor: pointer;\n          transition: .2s;\n          opacity: 1; }\n          body .wrapper .content .data-container_reload-data.hidden {\n            visibility: hidden;\n            opacity: 0; }\n          body .wrapper .content .data-container_reload-data.loading {\n            -webkit-animation: loading 1s ease-in-out infinite;\n            -moz-animation: loading 1s ease-in-out infinite;\n            -o-animation: loading 1s ease-in-out infinite;\n            animation: loading 1s ease-in-out infinite; }\n            body .wrapper .content .data-container_reload-data.loading:before {\n              display: none; }\n        body .wrapper .content .data-container_arrow-icon {\n          width: 40px;\n          color: #ffffff;\n          margin: 20px; }\n        body .wrapper .content .data-container_data-input {\n          width: 80%;\n          margin-top: 10px;\n          margin-bottom: 34px;\n          transition: .2s; }\n          body .wrapper .content .data-container_data-input input {\n            width: 100%;\n            font-size: 32px;\n            background-color: inherit;\n            color: #ffffff;\n            padding: 14px 8px;\n            outline: none;\n            border: none;\n            border-bottom: 2px solid;\n            box-sizing: border-box; }\n            @media (max-width: 800px) {\n              body .wrapper .content .data-container_data-input input {\n                font-size: 22px; } }\n        body .wrapper .content .data-container_change-data-btn .btn {\n          padding: 14px 40px;\n          font-size: 24px; }\n  body .btn {\n    padding: 8px 14px;\n    border-radius: 8px;\n    font-size: 16px;\n    background-color: transparent;\n    color: #ffffff;\n    border: 2px solid #ffffff;\n    outline: none;\n    transition: .2s;\n    cursor: pointer; }\n    body .btn:hover {\n      background-color: rgba(255, 255, 255, 0.2); }\n    body .btn:active {\n      background-color: rgba(255, 255, 255, 0.4); }\n  body .input {\n    font: normal 16px 'Quicksand', sans-serif; }\n  body .loading {\n    position: relative;\n    color: transparent !important; }\n    body .loading:before {\n      content: '';\n      display: inline-block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -12px;\n      margin-left: -12px;\n      width: 24px;\n      height: 24px;\n      background: transparent;\n      border-width: 2px;\n      border-style: solid;\n      border-top-color: transparent;\n      border-bottom-color: transparent;\n      border-left-color: #ffffff;\n      border-right-color: #ffffff;\n      border-radius: 50%;\n      box-sizing: border-box;\n      -webkit-animation: loading 1s ease-in-out infinite;\n      -moz-animation: loading 1s ease-in-out infinite;\n      -o-animation: loading 1s ease-in-out infinite;\n      animation: loading 1s ease-in-out infinite; }\n\n@-webkit-keyframes loading {\n  0% {\n    transform: rotate(0deg) scale(1); }\n  50% {\n    transform: rotate(180deg) scale(1.1); }\n  100% {\n    transform: rotate(360deg) scale(1); } }\n\n@-moz-keyframes loading {\n  0% {\n    transform: rotate(0deg) scale(1); }\n  50% {\n    transform: rotate(180deg) scale(1.1); }\n  100% {\n    transform: rotate(360deg) scale(1); } }\n\n@-o-keyframes loading {\n  0% {\n    transform: rotate(0deg) scale(1); }\n  50% {\n    transform: rotate(180deg) scale(1.1); }\n  100% {\n    transform: rotate(360deg) scale(1); } }\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg) scale(1); }\n  50% {\n    transform: rotate(180deg) scale(1.1); }\n  100% {\n    transform: rotate(360deg) scale(1); } }\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),d=null,c=0,l=[],p=t(5);function f(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(y(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function b(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,t);t.insertBefore(e,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return m(e,n.attrs),b(n,e),e}function m(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function y(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=c++;t=d||(d=g(e)),o=w.bind(null,t,a,!1),r=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(e,n.attrs),b(n,e),e}(e),o=function(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),r=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){h(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return f(t,e),function(n){for(var o=[],r=0;r<t.length;r++){var a=t[r];(s=i[a.id]).refs--,o.push(s)}n&&f(u(n,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete i[s.id]}}}};var v,x=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function w(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);