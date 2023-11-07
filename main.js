(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nbutton {\n    border: none;\n    background-color: inherit;\n    cursor: pointer;\n}\n\nbutton,\nbutton:active,\nbutton:focus {\n    -webkit-tap-highlight-color: transparent;\n}\n\nli::marker {\n    color: #ffd1dc;\n}\n\n/* wrappers */\n\n.wrapper-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: auto;\n    width: 100%;\n    background-color: #f5f5f5;\n}\n\n.wrapper-centering {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.wrapper-dialog {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    gap: 1.2rem;\n}\n\n/* container */\n\n.container {\n    padding-top: 1.2rem;\n    padding-bottom: 1rem;\n}\n\n.container,\n.container-scroll-h,\n.container-settings,\n.main,\n.navbar,\n.navbar-item {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n/* scrollable container */\n\n.container-scroll-h {\n    justify-content: flex-start;\n    flex: auto;\n    gap: 1rem;\n    overflow-x: auto;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    padding-left: 1.2rem;\n}\n\n.container-scroll-h::-webkit-scrollbar {\n    display: none;\n}\n\n.scroll-item {\n    flex: 0 0 auto;\n}\n\n.scroll-item button {\n    background-color: #ffd1dc;\n    border-radius: 1rem;\n    padding: 0.33rem 0.66rem;\n    font-size: 0.75rem;\n}\n\n/* settings container */\n\n.container-settings {\n    justify-content: center;\n    position: relative;\n    display: flex;\n    max-width: 2.2rem;\n    box-shadow: -0.5rem 0 0.5rem -0.2rem #f5f5f580;\n    border-left: 0.1rem solid #b8b8b880;\n    border-radius: 0.1rem;\n}\n\n.button-settings:active {\n    background-color: #ffd1dc80;\n}\n\n.button-settings,\n.button-menu,\n.button-todo,\n.button-calendar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    transition: 0.1337s;\n    height: 2rem;\n    width: 2rem;\n}\n\n\n.button-menu:active,\n.button-todo:active,\n.button-calendar:active {\n    background-color: #ffd1dc80;\n    padding: 2rem;\n}\n\n.hamburger-menu-dots,\n.hamburger-menu-lines {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.168rem;\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n.hamburger-dots {\n    border: 0.15rem solid #b8b8b8;\n    border-radius: 50%;\n}\n\n/* main & to-do's */\n\nmain.wrapper-content {\n    justify-content: start;\n    align-items: start;\n}\n\n.to-do-outer-container,\n.to-do-inner-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.to-do-outer-container,\n.to-do-inner-container,\n.to-do-card {\n    width: 100%;\n}\n\n.to-do-outer-container > button {\n    padding: 0.2rem 0 0.8rem 1.2rem;\n    font-size: 1rem;\n    width: 100%;\n    text-align: start;\n}\n\n.to-do-outer-container > button:active {\n    background-color: #cdcdcd;\n}\n\n.to-do-inner-container {\n    padding: 0 1.2rem;\n    gap: 0.5rem;\n}\n\n.to-do-card {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 0.5rem;\n    background-color: #eaeaea;\n    border-radius: 0.5rem;\n    padding: 1rem 0.5rem;\n}\n\n.to-do-card > button:nth-child(1) {\n    border-radius: 0.2rem;\n    min-height: 1.2rem;\n    min-width: 1.2rem;\n    border: 0.1rem solid #ffd1dc;\n    align-self: flex-start;\n}\n\n.to-do-card .to-do-menu {\n    display: flex;\n    align-self: flex-start;\n    justify-content: center;\n    padding: 0;\n    height: 1.2rem;\n    width: 1.2rem;\n}\n\n.to-do-menu .hamburger-dots {\n    border-color: #ffd1dc;\n}\n\n.to-do-task-container {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n}\n\n.to-do-task {\n    font-weight: 600;\n    font-size: 1rem;\n}\n\n.to-do-subtask {\n    padding-left: 2rem;\n    padding-top: 0.5rem;\n}\n\n.subtask-done {\n    text-decoration: line-through;\n}\n\n\n\n/* floating add new task button */\n\n.button-fixed {\n    position: fixed;\n    bottom: 4.5rem;\n    right: 1.5rem;\n    height: 3rem;\n    width: 3rem;\n    background-color: #ffd1dc;\n    border-radius: 50%;\n    box-shadow: 0 0 0.2rem 0.02rem #b8b8b888;\n    transition: 0.1337s;\n}\n\n.button-fixed:active {\n    scale: 0.95;\n}\n\n.button-fixed > .wrapper-centering {\n    flex-direction: column;\n    gap: 0.2rem;\n}\n\n.line-h,\n.line-v {\n    position: absolute;\n    border: 0.1rem solid white;\n    border-radius: 0.1rem;\n    width: 1.2rem;\n}\n\n.line-h {\n    transform: rotate(90deg);\n}\n\n/* navigation navbar */\n\n.navbar {\n    position: fixed;\n    bottom: 0;\n    background-color: #fafafc;\n    box-shadow: 0 0 0.2rem 0.02rem #b8b8b888;\n    height: 3rem;\n    padding: 1rem;\n    overflow: hidden;\n}\n\n.navbar-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.hamburger-lines {\n    background-color: #ffd1dc;\n    border: 0.08rem solid #ffd1dc;\n    border-radius: 0.15rem;\n    width: 1rem;\n}\n\n.hamburger-lines:nth-child(2) {\n    width: 0.95rem;\n}\n\n/* modals */\n\n#dialog-settings-tasks {\n    position: absolute;\n    top: 3rem;\n    left: auto;\n    right: 1rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    text-wrap: nowrap;\n    background-color: #ffe9ee;\n    border: none;\n    box-shadow: 0 0.1rem 0.5rem 0.05rem #b8b8b888;\n}\n\n.dialog-fade-in[open] {\n    animation: fade-in 168ms forwards;\n}\n\n.dialog-fade-out {\n    display: block;\n    animation: fade-out 168ms forwards;\n}\n\n.dialog-btn {\n    text-align: start;\n}\n\n\n.modal {\n    position: fixed;\n    top: 6rem;\n    margin: 0 auto;\n    width: 100%;\n    border-radius: 0.5rem;\n    border: none;\n    padding: 1rem 1.2rem;\n}\n\n.newToDoForm {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.newToDoForm > div {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 0.5rem;\n}\n\n.newToDoForm > div > button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.75rem;\n    padding: 0.33rem 0.66rem;\n    border-radius: 1rem;\n    background-color: #eaeaea;\n    color: #a8a8a8;\n    width: 4.5rem;\n    height: 1.75rem;\n}\n\n#btn-submitToDo {\n    margin-left: auto;\n    background-color: #b8d8be;\n}\n\n#btn-submitToDo path {\n    stroke: #ffffff;\n}\n\nsvg > path {\n    stroke: #ffd1dc;\n}\n\n.addNewTaskInput {\n    width: 100%;\n    padding: 1rem 0.8rem;\n    border-radius: 0.5rem;\n    border: none;\n    background-color: #eaeaea;\n}\n\n.addNewTaskInput:focus {\n    outline: none;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}",""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var f=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var p=r(m,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var c=o(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o={};(()=>{t.d(o,{w:()=>I});var n=t(379),e=t.n(n),r=t(795),i=t.n(r),a=t(569),d=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),f=t(589),m=t.n(f),p=t(426),b={};b.styleTagTransform=m(),b.setAttributes=s(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u(),e()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;const g=document.getElementById("btn-settings"),h=document.getElementById("dialog-settings-tasks"),v=document.getElementById("addNewTaskButton"),y=document.getElementById("addNewTaskModal");function x(n,e){n.addEventListener("click",e)}function w(n,e){n.removeEventListener("click",e)}function k(n){return"none"!==getComputedStyle(n).display}function T(n){n.classList.add("dialog-fade-out"),setTimeout((()=>{n.classList.remove("dialog-fade-out")}),300)}function j(n){!function(n,e,t){n.target!==e&&n.target!==t&&(T(e),e.close(),w(document,j))}(n,h,g)}function E(n){y.showModal(),x(y,I)}function I(n){!function(n,e){const t=n.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&(n.close(),w(n,E))}(y,n)}x(g,(function(n){k(h)&&(T(h),h.close(),n.stopPropagation(),w(document,j)),k(h)||(h.show(),x(document,j))})),v.addEventListener("click",(n=>{y.showModal(),x(y,I)})),x(v,E)})()})();