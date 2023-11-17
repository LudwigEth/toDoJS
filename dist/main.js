(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),d=t.n(a)()(r());d.push([n.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nbutton {\n    border: none;\n    background-color: inherit;\n    cursor: pointer;\n}\n\nbutton,\nbutton:active,\nbutton:focus,\n.checkbox {\n    -webkit-tap-highlight-color: transparent;\n}\n\nli::marker {\n    color: #ffd1dc;\n}\n\ninput {\n    caret-color: #ffd1dc;\n}\n\n.no-scroll {\n    overflow: hidden;\n}\n/* wrappers */\n\n.wrapper-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: auto;\n    width: 100%;\n    background-color: #f5f5f5;\n}\n\n.wrapper-centering {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.wrapper-dialog {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    gap: 1.2rem;\n}\n\n.wrapper-modal-categories {\n    display: flex;\n    flex-direction: column;\n    width: 5rem;\n    max-height: 8rem;\n    gap: 1rem;\n    justify-content: start;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    word-break: break-all;\n}\n\n.wrapper-modal-categories::-webkit-scrollbar {\n    display: none;\n}\n\n.newToDoFormButtonWrapper {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* container */\n\n.container {\n    padding-top: 1.2rem;\n    padding-bottom: 1rem;\n}\n\n.container,\n.container-scroll-h,\n.scroll-item-container,\n.container-settings,\n.main,\n.navbar,\n.navbar-item {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.scroll-item-container {\n    gap: 1rem;\n}\n\n/* scrollable container */\n\n.container-scroll-h {\n    justify-content: flex-start;\n    flex: auto;\n    overflow-x: auto;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    padding-left: 1.2rem;\n}\n\n.container-scroll-h::-webkit-scrollbar {\n    display: none;\n}\n\n.scroll-item {\n    flex: 0 0 auto;\n}\n\n.scroll-item button {\n    background-color: #ffd1dc;\n    border-radius: 1rem;\n    padding: 0.33rem 0.66rem;\n    font-size: 0.75rem;\n}\n\n.addNewCategoryContainer {\n    position: relative;\n    min-width: 100%;\n    padding-right: 0.5rem;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    z-index: 9999;\n}\n\n.addNewCategoryContainer button:last-child {\n    background-color: #b8d8be;\n}\n\n.addNewCategoryContainer button:active {\n    scale: 0.96;\n    transition: 0.3s ease-in-out;\n}\n\n.addNewCategoryContainer path {\n    stroke: #fff;\n}\n\n.grower {\n    background-color: inherit;\n    min-width: 0;\n    transition: 0.2s ease-in-out;\n}\n\n.grow {\n    min-width: 100%;\n    transition: 0.3s ease-in-out;\n}\n\n.addNewCategoryInput {\n    width: 100%;\n    background-color: #eaeaea;\n    border: none;\n    height: 2rem;\n    border-radius: 1rem;\n    padding: 0 1rem;\n}\n.delete-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: fit-content;\n    background-color: #ffd1dc !important;\n}\n\n.delete-button-l1,\n.delete-button-l2 {\n    height: 0.1rem;\n    width: 1rem;\n    background-color: #fff;\n    border-radius: 0.05rem;\n}\n\n.delete-button-l1 {\n    transform: rotate(45deg);\n}\n\n.delete-button-l2 {\n    transform: rotate(90deg);\n}\n\n\n/* settings container */\n\n.container-settings {\n    justify-content: center;\n    position: relative;\n    display: flex;\n    max-width: 2.2rem;\n    box-shadow: -0.5rem 0 0.5rem -0.2rem #f5f5f580;\n    border-left: 0.1rem solid #b8b8b880;\n    border-radius: 0.1rem;\n    margin-left: auto;\n}\n\n.button-settings,\n.button-menu,\n.button-todo,\n.button-calendar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    transition: 0.1337s;\n    height: 2rem;\n    width: 2rem;\n}\n\n\n.button-menu:active,\n.button-todo:active,\n.button-calendar:active {\n    background-color: #ffd1dc80;\n    padding: 2rem;\n}\n\n.hamburger-menu-dots,\n.hamburger-menu-lines {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.168rem;\n    border-radius: 50%;\n    pointer-events: none;\n    transition: 0.2s ease-in-out;\n}\n\n.spread {\n    gap: 0.42rem;\n    transition: 0.2s ease-in-out;\n}\n\n.hamburger-dots {\n    border: 0.15rem solid #b8b8b8;\n    border-radius: 50%;\n}\n\n/* main & to-do's */\n\nmain.wrapper-content {\n    justify-content: start;\n    align-items: start;\n    padding-bottom: 4rem;\n}\n\n.to-do-container {\n    display: flex;\n    flex-direction: column;\n    padding: 0 1.2rem;\n    gap: 0.5rem;\n}\n.to-do-container,\n.to-do-card {\n    width: 100%;\n}\n\n.to-do-card {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 0.5rem;\n    background-color: #eaeaea;\n    border-radius: 0.5rem;\n    padding: 1rem 0.5rem;\n}\n\n.checkbox {\n    margin: auto;\n    min-width: 1.2rem;\n    min-height: 1.2rem;\n    border: 0.1rem solid #ffd1dc;\n    background-color: #fff;\n    border-radius: 0.2rem;\n    position: relative;\n    cursor: pointer;\n  }\n\n.checkmark1 {\n    position: absolute;\n    width: 0;\n    height: 0.2rem;\n    background-color: #fff;\n    top: 40%;\n    left: 3%;\n    transform: rotate(45deg);\n    transform-origin: left;\n    border-radius: 0.1rem 0 0.1rem 0.1rem;\n}\n\n.checkmark2 {\n    position: absolute;\n    width: 0;\n    height: 0.2rem;\n    background-color: #fff;\n    top: 0.1rem;\n    left: calc(100% - 0.1rem);\n    transform: rotate(-90deg);\n    transform-origin: left;\n    border-radius: 0 0.1rem 0.1rem 0.1rem;\n}\n\n.checkbox.checked {\n    background-color: #ffd1dc;\n    transition: 0.125s ease;\n}\n  \n.checkbox.checked .checkmark1 {\n      width: 0.5rem;\n      transition: width 0.1s ease 0.2s;\n}\n  \n.checkbox.checked .checkmark2 {\n      width: 1rem;\n      transition: width 0.1s ease 0.3s;\n}\n\n.to-do-card .to-do-menu {\n    display: flex;\n    align-self: flex-start;\n    justify-content: center;\n    padding: 0;\n    min-height: 1.2rem;\n    min-width: 1.2rem;\n}\n\n.to-do-menu .hamburger-dots {\n    border-color: #ffd1dc;\n}\n\n.to-do-task-container {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n}\n\n.to-do-task {\n    font-weight: 500;\n    font-size: 1rem;\n    word-break: break-all;\n}\n\n.to-do-subtask {\n    padding-left: 2rem;\n    padding-top: 0.5rem;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.subtask-done {\n    text-decoration: line-through;\n}\n\n\n\n/* floating add new task button */\n\n.button-fixed {\n    position: fixed;\n    bottom: 4.5rem;\n    right: 1.5rem;\n    height: 3rem;\n    width: 3rem;\n    background-color: #ffd1dc;\n    border-radius: 50%;\n    box-shadow: 0 0 0.2rem 0.02rem #b8b8b888;\n    transition: 0.1337s;\n}\n\n.button-fixed:active {\n    scale: 0.95;\n}\n\n.button-fixed > .wrapper-centering {\n    flex-direction: column;\n    gap: 0.2rem;\n}\n\n.line-h,\n.line-v {\n    position: absolute;\n    border: 0.1rem solid white;\n    border-radius: 0.1rem;\n    width: 1.2rem;\n}\n\n.line-h {\n    transform: rotate(90deg);\n}\n\n/* navigation navbar */\n\n.navbar {\n    position: fixed;\n    bottom: 0;\n    background-color: #fafafc;\n    box-shadow: 0 0 0.2rem 0.02rem #b8b8b888;\n    height: 3rem;\n    padding: 1rem;\n    overflow: hidden;\n}\n\n.navbar-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.hamburger-lines {\n    background-color: #ffd1dc;\n    border: 0.08rem solid #ffd1dc;\n    border-radius: 0.15rem;\n    width: 1rem;\n}\n\n.hamburger-lines:nth-child(2) {\n    width: 0.95rem;\n}\n\n/* modals */\n\n#dialog-settings-tasks {\n    position: absolute;\n    top: 3rem;\n    left: auto;\n    right: 1rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    text-wrap: nowrap;\n    background-color: #ffe9ee;\n    border: none;\n    box-shadow: 0 0.1rem 0.5rem 0.05rem #b8b8b888;\n}\n\n#dialog-categories {\n    position: absolute;\n    top: 6rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: #ffe9ee;\n    border: none;\n    box-shadow: 0 0.1rem 0.5rem 0.05rem #b8b8b888;\n}\n\n#dialog-categories::-webkit-scrollbar {\n    display: none;\n}\n\n.dialog-fade-in[open] {\n    animation: fade-in 200ms forwards;\n}\n\n.dialog-fade-out {\n    display: block;\n    animation: fade-out 200ms forwards;\n}\n\n.dialog-btn {\n    text-align: start;\n    word-break: break-all;\n}\n\n\n.modal {\n    position: fixed;\n    top: 6rem;\n    margin: 0 auto;\n    width: 100%;\n    border-radius: 0.5rem;\n    border: none;\n    padding: 1rem 1.2rem;\n}\n\n.newToDoForm {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.newToDoForm > div {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 0.5rem;\n}\n\n.newToDoForm > div > button,\n.addNewCategoryContainer button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.75rem;\n    padding: 0.33rem 0.66rem;\n    border-radius: 1rem;\n    background-color: #eaeaea;\n    color: #a8a8a8;\n    width: 4.5rem;\n    height: 1.75rem;\n}\n\n#btn-addCategoryTag {\n    background-color: #ffd1dc;\n    color: #000;\n    min-width: fit-content;\n}\n\n#btn-submitToDo {\n    margin-left: auto;\n    background-color: #b8d8be;\n}\n\n#btn-submitToDo path {\n    stroke: #ffffff;\n}\n\nsvg > path {\n    stroke: #ffd1dc;\n}\n\n.addNewTaskInput {\n    width: 100%;\n    padding: 1rem 0.8rem;\n    border-radius: 0.5rem;\n    border: none;\n    background-color: #eaeaea;\n}\n\n.newSubtasksContainer,\n.newSubtasksWrapper {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 0.5rem;\n}\n\n.newSubtaskItem {\n    display: flex;\n    width: 100%;\n}\n\n.newSubtaskItem input {\n    border-radius: 0.5rem 0 0 0.5rem;\n}\n\n.newSubtaskItem button {\n    min-width: 3rem;\n    border-radius: 0.5rem;\n    border-radius: 0 0.5rem 0.5rem 0;\n}\n\n.moreSubtasksButtonContainer {\n    justify-content: center !important;\n    padding: 0 0 0.5rem;\n}\n\n.moreSubtasksButtonContainer > button.moreSubtasksButton {\n    display: flex;\n    padding: 1rem;\n    background-color: inherit;\n}\n\n.moreSubtasksButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n\n\n.moreSubtasksButton > div > div,\n.moreSubtasksButton > div > div > div {\n    height: 0.1rem;\n    width: 0.5rem;\n    border-radius: 0.05rem;\n    background-color: #ffd1dc;\n}\n\n.moreSubtasksButton > div > div > div {\n    transform: rotate(90deg);\n}\n\n.addNewTaskInput:focus,\n.addNewCategoryInput:focus {\n    outline: none;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@media only screen and (max-width: 299px) {\n    div.newToDoFormButtonWrapper {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    #btn-submitToDo {\n        margin: auto;\n    }\n}\n",""]);const i=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(d[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&d[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},d=[],i=0;i<n.length;i++){var s=n[i],c=o.base?s[0]+o.base:s[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var m=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var p=r(f,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:p,references:1})}d.push(u)}return d}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var d=0;d<a.length;d++){var i=t(a[d]);e[i].references--}for(var s=o(n,r),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o={};(()=>{t.d(o,{AT:()=>sn,ag:()=>dn,In:()=>cn,_Q:()=>on,H9:()=>rn,n1:()=>an});var n=t(379),e=t.n(n),r=t(795),a=t.n(r),d=t(569),i=t.n(d),s=t(565),c=t.n(s),l=t(216),u=t.n(l),m=t(589),f=t.n(m),p=t(426),g={};function b(n){const e=document.createElement("button");return e.type="button",e.classList.add("dialog-btn"),e.textContent=n,e}function h(n){const e=document.createElement("div"),t=document.createElement("button");return t.type="button",t.textContent=n,e.classList.add("scroll-item"),e.appendChild(t),e}function y(n,e,t){const o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),s=document.createElement("p"),c=document.createElement("button"),l=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),f=document.createElement("div"),p=document.createElement("div"),g=document.createElement("ul");return"checked"===t?(r.classList.add("checked"),r.setAttribute("aria-checked","true")):(r.setAttribute("aria-checked","false"),r.classList.remove("checked")),r.setAttribute("tabindex",0),o.classList.add("to-do-card"),i.classList.add("to-do-task-container"),r.classList.add("checkbox"),a.classList.add("checkmark1"),d.classList.add("checkmark2"),s.classList.add("to-do-task"),c.classList.add("to-do-menu"),l.classList.add("hamburger-menu-dots"),u.classList.add("hamburger-dots"),m.classList.add("hamburger-dots"),f.classList.add("hamburger-dots"),p.classList.add("to-do-subtask","hidden"),s.textContent=e,o.dataset.taskId=n,B(r,K),B(c,Z),a.appendChild(d),r.appendChild(a),l.appendChild(u),l.appendChild(m),l.appendChild(f),c.appendChild(l),p.appendChild(g),i.appendChild(s),i.appendChild(p),o.appendChild(r),o.appendChild(i),o.appendChild(c),o}g.styleTagTransform=f(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),e()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;const k=document.getElementById("addNewTaskButton"),w=document.getElementById("addNewTaskModal");let v=[],x=["Show All"],C=0;const E=document.getElementById("toDoContainer");function I(){localStorage.setItem("toDoList",JSON.stringify(v)),localStorage.setItem("categories",JSON.stringify(x))}function B(n,e){n.addEventListener("click",e)}function L(n,e){n.removeEventListener("click",e)}function S(n,e){n.addEventListener("keydown",e)}function T(n,e){n.removeEventListener("keydown",e)}function N(n){return"none"!==getComputedStyle(n).display}function D(n){n.classList.add("dialog-fade-out"),setTimeout((()=>{n.classList.remove("dialog-fade-out")}),300)}function j(n){!function(n,e,t){n.target!==e&&n.target!==t&&(U(document.getElementById("menuDots"),"spread"),D(e),e.close(),L(document,j))}(n,rn,on)}function A(n,e){const t=n.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&(dn.open?P(e):(L(an,H),L(an,R),L(sn,G),T(w,F),L(dn,O),J(),L(w,M),L(cn,tn),n.close()))}function M(n){A(w,n)}function O(n){A(dn,n),q(dn,"BUTTON",n)&&(sn.textContent=q(dn,"BUTTON",n)),P(n)}function q(n,e,t){if(t.target.tagName===e&&n.contains(t.target))return t.target.textContent}function P(n){n.stopPropagation(),L(dn,O),L(w,M),L(cn,tn),dn.close(),B(w,M)}function F(n){const e=document.getElementById("newToDoDescription"),t=document.getElementById("btn-submitToDo"),o=(document.getElementById("newSubtasksContainer"),document.querySelector(".moreSubtasksButtonContainer")),r=document.getElementById("btn-addSubtask");if("Enter"===n.key){if(document.activeElement===e&&o.classList.contains("hidden"))return t.click(),n.stopPropagation(),void console.log("first");if(document.activeElement!==e&&!o.classList.contains("hidden"))return r.click(),n.stopPropagation(),void console.log("second");document.activeElement.click(),console.log("activeElem")}}function z(){document.body.classList.add("no-scroll"),buttonToDoSubtask.classList.contains("subtask-done")?buttonToDoSubtask.classList.remove("subtask-done"):buttonToDoSubtask.classList.add("subtask-done")}function H(){const n=document.getElementById("newToDoDescription").value.trim();let e="Show All";if(!n)return L(an,H),L(sn,G),void w.close();const t=new Date;("category"===sn.textContent||x.includes(!sn.textContent))&&(e="Show All"),x.includes(sn.textContent)&&(e=sn.textContent),function(n,e,t){const o={id:C,description:n,creationDate:new Date,subtasks:[],category:t,status:"unchecked",dueDate:e};v.push(o);const r=y(C,n);C++,E.appendChild(r),I()}(n,t,e),J(),L(an,H),L(sn,G),T(w,F),w.close(),console.log(v,x)}function J(){document.body.classList.remove("no-scroll");const n=document.getElementById("newToDoDescription"),e=document.getElementById("btn-addCategoryTag");n.value="",e.textContent="category";const t=document.getElementById("newSubtasksContainer"),o=t.getElementsByClassName("newSubtaskItem");Array.from(o).forEach((n=>{L(n.children[1],en),t.removeChild(n)}));const r=document.querySelector("div.moreSubtasksButtonContainer");r.classList.add("hidden"),L(r,V)}function U(n,e){n.classList.toggle(e)}function Z(n){document.body.classList.add("no-scroll");const e=n.target.closest(".to-do-card").querySelector(".to-do-task").textContent;document.getElementById("newToDoDescription").value=e;const t=n.target.closest(".to-do-card").dataset.taskId;an.dataset.taskId=t.toString();const o=W(t);o.category===x[0]?sn.textContent="category":sn.textContent=o.category,w.showModal(),L(an,R),L(an,H),B(cn,tn),B(sn,G),B(an,R),B(w,M),S(w,F)}function R(n){const e=parseInt(an.dataset.taskId),t=W(e);t.description=document.getElementById("newToDoDescription").value,"category"===sn.textContent&&(t.category="Show All"),x.includes(sn.textContent)&&(t.category=sn.textContent),document.querySelector(`.to-do-card[data-task-id='${e}'] .to-do-task`).textContent=t.description,L(an,R),L(w,M),L(dn,M),L(sn,G),T(w,F),I(),J(),w.close()}function W(n){return n=parseInt(n),v.find((e=>e.id===n))}function $(n){const e=document.getElementById("addNewCategoryInput"),t=document.getElementById("submitNewCategoryButton");"Enter"===n.key&&document.activeElement===e&&t.click()}function _(){document.getElementById("addNewCategoryInput").value=""}function X(){_(),Q()}function Y(){const n=document.getElementById("addNewCategoryInput").value.trim();""===n||x.includes(n)?(_(),Q()):(x.push(n),document.getElementById("scrollItemContainer").appendChild(h(x[x.length-1])),_(),Q(),I())}function Q(){const n=document.getElementById("submitNewCategoryButton"),e=document.getElementById("cancelNewCategoryButton"),t=document.querySelector(".addNewCategoryContainer"),o=document.getElementById("scrollItemContainer"),r=document.getElementById("addNewCategoryInput"),a=document.getElementById("grower");a.classList.add("grow"),t.classList.contains("hidden")?(setTimeout((()=>{t.classList.remove("hidden"),o.classList.add("hidden"),a.classList.remove("grow")}),330),B(n,Y),B(e,X),S(r,$)):(setTimeout((()=>{t.classList.add("hidden"),o.classList.remove("hidden"),a.classList.remove("grow")}),330),L(n,Y),L(e,X),T(r,$))}function G(n){document.body.classList.add("no-scroll");const e=sn.getBoundingClientRect();dn.style.position="absolute",dn.style.left=`${e.left}px`,dn.style.top=`calc(${e.bottom}px + 0.5rem)`,function(){const n=document.getElementById("categoriesModal");for(;n.firstChild;)n.removeChild(n.firstChild);for(let e=1;e<x.length;e++)n.appendChild(b(x[e]))}(),dn.showModal(),L(w,M),B(dn,O)}function K(n){const e=this;!function(n){U(n,"checked")}(e);const t=W(n.target.closest(".to-do-card").dataset.taskId);t.status="checked"===t.status?"unchecked":"checked","checked"===t.status?e.setAttribute("aria-checked","true"):e.setAttribute("aria-checked","false"),I()}function V(){nn()}function nn(){const n=document.getElementById("newSubtasksContainer"),e=function(){const n=document.createElement("div"),e=document.createElement("input"),t=document.createElement("button"),o=document.createElement("div"),r=document.createElement("div");return t.type="button",e.type="text",e.placeholder="Add new subtask here",e.autocomplete="off",e.name="newSubtaskInput",n.classList.add("newSubtaskItem"),e.classList.add("addNewTaskInput","addNewSubtaskInput"),t.classList.add("delete-button"),o.classList.add("delete-button-l1"),r.classList.add("delete-button-l2"),B(t,en),o.appendChild(r),t.appendChild(o),n.appendChild(e),n.appendChild(t),n}();n.appendChild(e),n.lastElementChild.firstElementChild.focus()}function en(n){const e=document.getElementById("newSubtasksContainer"),t=document.querySelector("div.moreSubtasksButtonContainer"),o=n.currentTarget;n.target.closest(".newSubtaskItem").remove(),""===e.innerHTML&&t.classList.add("hidden"),L(o,en)}function tn(){const n=document.querySelector(".moreSubtasksButtonContainer");n.classList.remove("hidden"),B(n,V),nn()}document.getElementById("newToDoForm").addEventListener("keydown",(n=>{"Enter"===n.key&&(n.preventDefault(),console.log("form"))}));const on=document.getElementById("btn-settings"),rn=document.getElementById("dialog-settings-tasks"),an=document.getElementById("btn-submitToDo"),dn=document.getElementById("dialog-categories"),sn=document.getElementById("btn-addCategoryTag"),cn=document.getElementById("btn-addSubtask"),ln=document.getElementById("scrollItemContainer");B(on,(function(n){U(document.getElementById("menuDots"),"spread"),N(rn)&&(D(rn),rn.close(),n.stopPropagation(),L(document,j)),N(rn)||(rn.show(),B(document,j))})),k.addEventListener("click",(n=>{w.showModal(),B(w,M)})),B(k,(function(n){w.showModal(),document.body.classList.add("no-scroll"),B(an,H),B(w,M),B(sn,G),B(cn,tn),S(w,F)})),B(document.getElementById("addCategory"),(function(){const n=document.getElementById("addNewCategoryInput");document.querySelector(".addNewCategoryContainer").classList.contains("hidden")?(Q(),setTimeout((()=>{n.focus()}),400),S(n,$)):n.focus()})),B(ln,(function(n){if("BUTTON"===n.target.tagName){const e=n.target.textContent;n.stopPropagation(),function(n){const e=E.getElementsByClassName("to-do-card");Array.from(e).forEach((e=>{const t=v[parseInt(e.dataset.taskId)].category;n!==x[0]?(t!==n&&e.classList.add("hidden"),t===n&&e.classList.remove("hidden")):e.classList.remove("hidden")}))}(e)}})),function(){const n=localStorage.getItem("toDoList"),e=localStorage.getItem("categories");n&&(v=JSON.parse(n),C=Math.max(...v.map((n=>n.id)))+1,E.innerHTML="",v.forEach((n=>{const e=y(n.id,n.description,n.status);n.subtasks.forEach((n=>{!function(n,e){const t=function(n){const e=document.createElement("li"),t=document.createElement("button");return t.textContent=n,B(t,z),e.appendChild(t),e}(e);n.querySelector(".to-do-subtask ul").appendChild(t)}(e,n)})),E.appendChild(e)}))),e&&(x=JSON.parse(e)),function(){const n=document.getElementById("scrollItemContainer");x.forEach((e=>{const t=h(e);n.appendChild(t)}))}()}()})()})();