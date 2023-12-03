(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),i.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton {\n    border: none;\n    background-color: inherit;\n    cursor: pointer;\n}\n\nbutton,\nbutton:active,\nbutton:focus,\n.checkbox {\n    -webkit-tap-highlight-color: transparent;\n}\n\nli::marker {\n    color: #ffd1dc;\n}\n\ninput {\n    caret-color: #ffd1dc;\n}\n\n.no-scroll {\n    overflow: hidden;\n}\n\n/* wrappers */\n\n.wrapper-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: auto;\n    width: 100%;\n    background-color: #fafafa;\n    transition: blur 0.42s ease-in-out;\n}\n\n.blur {\n    filter: blur(0.1rem);\n    transition: 0.42s ease-in-out;\n}\n\n.wrapper-centering {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.wrapper-dialog {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    gap: 1.2rem;\n}\n\n.wrapper-modal-categories {\n    display: flex;\n    flex-direction: column;\n    max-width: 10rem;\n    max-height: 8rem;\n    gap: 1rem;\n    justify-content: start;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    word-break: break-all;\n}\n\n.wrapper-modal-categories::-webkit-scrollbar {\n    display: none;\n}\n\n.newToDoFormButtonWrapper {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* container */\n\n/* #tag-bar {\n    position: fixed;\n} */\n\n.main {\n    transition: 0.42s ease-in-out;\n}\n\n.container {\n    padding-top: 1.2rem;\n    padding-bottom: 1rem;\n}\n\n.container,\n.container-scroll-h,\n.scroll-item-container,\n.container-settings,\n.main,\n.navbar,\n.navbar-item {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.scroll-item-container {\n    gap: 1rem;\n}\n\n/* scrollable container */\n\n.container-scroll-h {\n    justify-content: flex-start;\n    flex: auto;\n    overflow-x: auto;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    padding-left: 1.2rem;\n}\n\n.container-scroll-h::-webkit-scrollbar {\n    display: none;\n}\n\n.scroll-item {\n    flex: 0 0 auto;\n}\n\n.active-tag {\n    background-color: #b8d8be !important;\n    transition: 0.1s ease-in-out;\n}\n\n.scroll-item button {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 0.2rem;\n    background-color: #ffd1dc;\n    border-radius: 1rem;\n    padding: 0.33rem 0.66rem;\n    font-size: 0.75rem;\n    transition: 0.1s ease-in-out;\n}\n\n.scroll-item button div {\n    background-color: palevioletred;\n    width: 0.69rem;\n}\n\n.addNewCategoryContainer {\n    position: relative;\n    min-width: 100%;\n    padding-right: 0.5rem;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.addNewCategoryContainer button:last-child {\n    background-color: #b8d8be;\n}\n\n.addNewCategoryContainer button:active {\n    scale: 0.96;\n    transition: 0.3s ease-in-out;\n}\n\n.addNewCategoryContainer path {\n    stroke: #fff;\n}\n\n.grower {\n    background-color: inherit;\n    min-width: 0;\n    transition: 0.2s ease-in-out;\n}\n\n.grow {\n    min-width: 100%;\n    transition: 0.2s ease-in-out;\n}\n\n.addNewCategoryInput {\n    width: 100%;\n    background-color: #eaeaea;\n    border: none;\n    height: 2rem;\n    border-radius: 1rem;\n    padding: 0 1rem;\n}\n\n.delete-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: fit-content;\n    background-color: #ffd1dc !important;\n}\n\n.delete-button-l1,\n.delete-button-l2 {\n    height: 0.1rem;\n    width: 1rem;\n    background-color: #fff;\n    border-radius: 0.05rem;\n}\n\n.delete-button-l1 {\n    transform: rotate(45deg);\n}\n\n.delete-button-l2 {\n    transform: rotate(90deg);\n}\n\n\n/* settings container */\n\n.container-settings {\n    justify-content: center;\n    position: relative;\n    display: flex;\n    max-width: 2.2rem;\n    box-shadow: -0.5rem 0 0.5rem -0.2rem #fafafa80;\n    border-left: 0.1rem solid #b8b8b880;\n    border-radius: 0.1rem;\n    margin-left: auto;\n}\n\n.button-settings,\n.button-menu,\n.button-todo,\n.button-calendar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    transition: 0.1337s;\n    height: 2rem;\n    width: 2rem;\n}\n\n.button-menu:active,\n.button-todo:active,\n.button-calendar:active {\n    background-color: #ffd1dc80;\n    padding: 2rem;\n}\n\n.hamburger-menu-dots,\n.hamburger-menu-lines {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.168rem;\n    border-radius: 50%;\n    pointer-events: none;\n    transition: 0.2s ease-in-out;\n}\n\n.spread {\n    gap: 0.42rem;\n    transition: 0.2s ease-in-out;\n}\n\n.hamburger-dots {\n    border: 0.15rem solid #b8b8b8;\n    border-radius: 50%;\n}\n\n/* main & to-do's */\n\nmain.wrapper-content {\n    justify-content: start;\n    align-items: start;\n}\n\n.to-do-container {\n    display: flex;\n    flex-direction: column;\n    padding: 0 1.2rem 10rem;\n    gap: 0.5rem;\n    overflow: scroll;\n    max-height: calc(100vh - 6rem);\n    scroll-behavior: smooth;\n}\n\n.to-do-container,\n.to-do-card {\n    width: 100%;\n}\n\n.to-do-card {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 0.5rem;\n    background-color: #eaeaea;\n    border-radius: 0.5rem;\n    padding: 1rem 0.5rem;\n}\n\n.checkbox {\n    margin: auto;\n    min-width: 1.2rem;\n    min-height: 1.2rem;\n    border: 0.1rem solid #ffd1dc;\n    background-color: #fff;\n    border-radius: 0.2rem;\n    position: relative;\n    cursor: pointer;\n}\n\n.checkmark1 {\n    position: absolute;\n    width: 0;\n    height: 0.2rem;\n    background-color: #fff;\n    top: 40%;\n    left: 3%;\n    transform: rotate(45deg);\n    transform-origin: left;\n    border-radius: 0.1rem 0 0.1rem 0.1rem;\n}\n\n.checkmark2 {\n    position: absolute;\n    width: 0;\n    height: 0.2rem;\n    background-color: #fff;\n    top: 0.1rem;\n    left: calc(100% - 0.1rem);\n    transform: rotate(-90deg);\n    transform-origin: left;\n    border-radius: 0 0.1rem 0.1rem 0.1rem;\n}\n\n.checkbox.checked {\n    background-color: #ffd1dc;\n    transition: 0.125s ease;\n}\n\n.checkbox.checked .checkmark1 {\n    width: 0.5rem;\n    transition: width 0.1s ease 0.2s;\n}\n\n.checkbox.checked .checkmark2 {\n    width: 1rem;\n    transition: width 0.1s ease 0.3s;\n}\n\n.to-do-card .to-do-menu {\n    display: flex;\n    align-self: flex-start;\n    justify-content: center;\n    padding: 0;\n    min-height: 1.2rem;\n    min-width: 1.2rem;\n}\n\n.to-do-menu .hamburger-dots {\n    border-color: #ffd1dc;\n}\n\n.to-do-task-container {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n}\n\n.to-do-task {\n    font-weight: 500;\n    font-size: 1rem;\n    word-break: break-all;\n}\n\n.to-do-subtask {\n    padding-left: 2rem;\n    padding-top: 0.5rem;\n}\n\n.to-do-subtask button {\n    position: relative;\n    overflow: hidden;\n    transition: 0.2s ease-in-out;\n}\n\n.to-do-subtask button::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 45%;\n    width: 100%;\n    height: 0.1rem;\n    background: #b8d8be;\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 0.2s ease-in-out;\n}\n\n.subtask-done {\n    color: #00000088;\n    transition: 0.2s ease-in-out;\n}\n\n\n.hidden {\n    display: none !important;\n}\n\n.to-do-subtask button.subtask-done::after {\n    transform: scaleX(1);\n}\n\n\n\n/* floating add new task button */\n\n.button-fixed {\n    position: fixed;\n    bottom: 4.5rem;\n    right: 1.3rem;\n    height: 3rem;\n    width: 3rem;\n    background-color: #ffd1dc;\n    border-radius: 50%;\n    box-shadow: 0 0 0.2rem 0.02rem #b8b8b888;\n    transition: 0.2s ease-in-out;\n}\n\n.button-fixed-tagBar-mode {\n    transform: rotate(45deg);\n    top: 4.5rem !important;\n    transition: 0.42s ease-in-out;\n}\n\n.button-fixed:active {\n    scale: 0.95;\n}\n\n.button-fixed>.wrapper-centering {\n    flex-direction: column;\n    gap: 0.2rem;\n}\n\n.line-h,\n.line-v {\n    position: absolute;\n    border: 0.1rem solid white;\n    border-radius: 0.1rem;\n    width: 1.2rem;\n}\n\n.line-h {\n    transform: rotate(90deg);\n}\n\n/* navigation navbar */\n\n.navbar {\n    position: fixed;\n    bottom: 0;\n    background-color: #fafafc;\n    box-shadow: 0 0 0.05rem 0.02rem #b8b8b888;\n    height: 3rem;\n    padding: 1rem;\n    overflow: hidden;\n}\n\n.navbar-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.hamburger-lines {\n    background-color: #ffd1dc;\n    border: 0.08rem solid #ffd1dc;\n    border-radius: 0.15rem;\n    width: 1rem;\n}\n\n.hamburger-lines:nth-child(2) {\n    width: 0.95rem;\n}\n\n/* modals */\n\n#dialog-settings-tasks {\n    position: absolute;\n    top: 3rem;\n    left: auto;\n    right: 1rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    text-wrap: nowrap;\n    background-color: #ffe9ee;\n    border: none;\n    box-shadow: 0 0.1rem 0.5rem 0.05rem #b8b8b888;\n    z-index: 1;\n}\n\n#dialog-categories {\n    position: absolute;\n    top: 6rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: #ffe9ee;\n    border: none;\n    box-shadow: 0 0.1rem 0.5rem 0.05rem #b8b8b888;\n}\n\n#dialog-categories::-webkit-scrollbar,\n.to-do-container::-webkit-scrollbar {\n    display: none;\n}\n\n.dialog-fade-in[open] {\n    animation: fade-in 200ms forwards;\n}\n\n.dialog-fade-out {\n    display: block;\n    animation: fade-out 200ms forwards;\n}\n\n.dialog-btn {\n    text-align: start;\n    word-break: break-all;\n}\n\n#addNewTaskModal {\n    max-height: 80vh;\n}\n\n.modal {\n    position: fixed;\n    top: 6rem;\n    margin: 0 auto;\n    width: 100%;\n    border-radius: 0.5rem;\n    border: none;\n    padding: 1rem 1.2rem;\n}\n\n.dialog-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.dialog-wrapper p {\n    display: flex;\n}\n\n.dialog-wrapper:nth-child(1),\n.dialog-wrapper:nth-child(3) {\n    font-weight: bold;\n}\n\n.dialog-wrapper div {\n    display: flex;\n    flex-direction: row;\n    gap: 3rem;\n}\n\n.dialog-wrapper span {\n    background-color: #ffd1dc;\n    padding: 0.5rem 1rem;\n    border-radius: 1rem;\n}\n\n.dialog-wrapper button:nth-child(1) {\n    background-color: #ff000080;\n    color: white;\n}\n\n.dialog-wrapper button:nth-child(2) {\n    background-color: #b8d8be;\n    color: white;\n}\n\n.newToDoForm {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.newToDoForm>div {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 0.5rem;\n}\n\n.newToDoForm>div>button,\n.addNewCategoryContainer button,\n.btn,\n.deleteToDo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.75rem;\n    padding: 0.33rem 0.66rem;\n    border-radius: 1rem;\n    background-color: #eaeaea;\n    color: #a8a8a8;\n    width: 4.5rem;\n    height: 1.75rem;\n}\n\n.newToDoFormButtonWrapper .btn-small {\n    width: 3rem;\n}\n\n#btn-removeToDo {\n    background-color: #ff000080;\n}\n\n#btn-addCategoryTag {\n    background-color: #ffd1dc;\n    color: #000;\n    min-width: fit-content;\n}\n\n#btn-submitToDo {\n    margin-left: auto;\n    background-color: #b8d8be;\n}\n\n#btn-submitToDo path {\n    stroke: #ffffff;\n}\n\nsvg>path {\n    stroke: #ffd1dc;\n}\n\n.addNewTaskInput {\n    width: 100%;\n    padding: 1rem 0.8rem;\n    border-radius: 0.5rem;\n    border: none;\n    background-color: #eaeaea;\n}\n\n.newSubtasksContainer,\n.newSubtasksWrapper {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 0.5rem;\n}\n\n.newSubtaskItem {\n    display: flex;\n    width: 100%;\n}\n\n.newSubtaskItem input {\n    border-radius: 0.5rem 0 0 0.5rem;\n}\n\n.newSubtaskItem button {\n    min-width: 3rem;\n    border-radius: 0.5rem;\n    border-radius: 0 0.5rem 0.5rem 0;\n}\n\n.moreSubtasksButtonContainer {\n    justify-content: center !important;\n    padding: 0 0 0.5rem;\n}\n\n.moreSubtasksButtonContainer>button.moreSubtasksButton {\n    display: flex;\n    padding: 1rem;\n    background-color: inherit;\n}\n\n.moreSubtasksButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n\n\n.moreSubtasksButton>div>div,\n.moreSubtasksButton>div>div>div {\n    height: 0.1rem;\n    width: 0.5rem;\n    border-radius: 0.05rem;\n    background-color: #ffd1dc;\n}\n\n.moreSubtasksButton>div>div>div {\n    transform: rotate(90deg);\n}\n\n.addNewTaskInput:focus,\n.addNewCategoryInput:focus {\n    outline: none;\n}\n\n.fade-in {\n    animation: fade-in 0.2s ease-in-out forwards ;\n}\n\n.fade-out {\n    animation: fade-out 0.2s ease-in-out forwards;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n\n.upAndRotate {\n    animation: slideUpAndRotate 420ms forwards;\n}\n\n.downAndRotate {\n    animation: slideDownAndRotate 420ms forwards;\n}\n\n@keyframes slideUpAndRotate {\n    from {\n        bottom: 4.5rem;\n        transform: rotate(0deg);\n    }\n\n    to {\n        bottom: calc(100% - 7.3rem);\n        transform: rotate(45deg);\n    }\n}\n\n@keyframes slideDownAndRotate {\n    from {\n        bottom: calc(100% - 7.3rem);\n        transform: rotate(45deg);\n    }\n\n    to {\n        bottom: 4.5rem;\n        transform: rotate(0deg);\n    }\n}\n\n@media only screen and (max-width: 300px) {\n    .newToDoFormButtonWrapper button {\n        flex: 1;\n    }\n}\n\n@media only screen and (max-width: 370px) {\n\n    #btn-submitToDo {\n        flex: auto;\n    }\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var m=n(u),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(g);else{var f=r(g,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=o(e,r),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e,t){e.classList.toggle(t)}function t(e){e.classList.add("dialog-fade-out"),setTimeout((()=>{e.classList.remove("dialog-fade-out")}),300)}function o(e){const t=this,n=t.getBoundingClientRect();(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom)&&(t.close(),x(),t===y.dialog&&w()),console.log("close modal")}function r(e,t,n){return!(n.target.tagName!==t||!e.contains(n.target))&&n.target.textContent}let a=[],i=["All"],s=0;function d(){localStorage.setItem("toDoList",JSON.stringify(a)),localStorage.setItem("categories",JSON.stringify(i))}function c(e,t,n,o){const r=function(e,t,n){const o=document.createElement("li"),r=document.createElement("button");return r.textContent=e,r.addEventListener("click",k),r.dataset.id=t,r.dataset.status=n,"done"===n&&r.classList.add("subtask-done"),o.classList.add("fade-in"),o.appendChild(r),o}(t,n,o),a=e.querySelector(".to-do-subtask");e.querySelector(".to-do-subtask ul").appendChild(r),a.classList.remove("hidden")}const l={main:document.getElementById("main"),toDoContainer:document.getElementById("toDoContainer")};function u(e){return e=parseInt(e),a.find((t=>t.id===e))}function m(e){document.body.classList.add("no-scroll");const t=e.target.closest(".to-do-card").dataset.taskId,n=e.target.closest(".to-do-card").querySelector(".to-do-task").textContent,o=u(t).subtasks;y.mainTask.value=n,y.submitButton.dataset.taskId=t.toString(),u(t).category===i[0]?y.categoryButton.textContent="category":y.categoryButton.textContent=u(t).category,o.length>0&&o.forEach((e=>{const t=P(e.description,e.id);y.subtasksContainer.appendChild(t)})),y.dialog.showModal(),E(),y.deleteButton.classList.contains("hidden")&&y.deleteButton.classList.remove("hidden"),y.submitButton.removeEventListener("click",B),y.submitButton.addEventListener("click",g),y.deleteButton.addEventListener("click",f)}function g(e){const t=parseInt(y.submitButton.dataset.taskId),n=u(t),o=document.querySelector(`.to-do-card[data-task-id='${t}']`);n.toDoDescription=document.getElementById("newToDoDescription").value,i.includes(y.categoryButton.textContent)?n.category=y.categoryButton.textContent:n.category="All",n.subtasks=D();const r=o.querySelectorAll("li");r.length>0&&Array.from(r).forEach((e=>{e.firstElementChild.removeEventListener("click",k),e.remove()})),document.querySelector(`.to-do-card[data-task-id='${t}'] .to-do-task`).textContent=n.toDoDescription,n.subtasks.length>0&&n.subtasks.forEach((e=>{c(o,e.description,e.id,e.status)})),0===y.subtasksContainer.querySelectorAll(".newSubtaskItem").length&&o.querySelector(".to-do-subtask").classList.add("hidden"),x(),w(),y.dialog.close(),d(),y.submitButton.removeEventListener("click",g)}function f(){w(),y.confirmRemoval.addEventListener("click",p),y.declineRemoval.addEventListener("click",b),y.taskToDelete.textContent=y.mainTask.value.trim(),y.deleteDialog.showModal()}function p(e){const t=y.submitButton.dataset.taskId,n=l.toDoContainer.querySelector(`.to-do-card[data-task-id='${t}']`);n.firstElementChild.removeEventListener("click",v);const o=Array.from(n.querySelectorAll("ul > li"));o.length>0&&o.forEach((e=>{e.firstElementChild.removeEventListener("click",k)})),n.lastElementChild.removeEventListener("click",m);const r=a.findIndex((e=>e.id===parseInt(t)));-1!==r&&a.splice(r,1),n.remove(),d(),h(),y.dialog.close()}function b(e){e.stopPropagation(),h()}function h(e){E(),y.deleteButton.classList.contains("hidden")&&y.deleteButton.classList.remove("hidden"),y.submitButton.removeEventListener("click",B),y.submitButton.addEventListener("click",g),y.deleteButton.addEventListener("click",f),y.confirmRemoval.removeEventListener("click",p),y.declineRemoval.removeEventListener("click",b),y.deleteDialog.close()}function v(t){const n=this;e(n,"checked");const o=u(t.target.closest(".to-do-card").dataset.taskId);o.status="checked"===o.status?"unchecked":"checked","checked"===o.status?n.setAttribute("aria-checked","true"):n.setAttribute("aria-checked","false"),d()}function k(e){const t=function(e){return u(e.target.closest(".to-do-card").dataset.taskId)}(e),n=e.target.closest(".to-do-card"),o=t.subtasks.find((t=>t.id===parseInt(e.target.dataset.id)));e.target.classList.contains("subtask-done")?(e.target.classList.remove("subtask-done"),e.target.dataset.status="open",o.status="open"):(e.target.classList.add("subtask-done"),e.target.dataset.status="done",o.status="done");const r=n.querySelectorAll(".to-do-subtask button");Array.from(r).every((e=>"done"===e.dataset.status))?n.firstElementChild.classList.contains("checked")||n.firstElementChild.click():n.firstElementChild.classList.contains("checked")&&n.firstElementChild.click(),d()}const y={get addNewTaskButton(){return document.getElementById("addNewTaskButton")},get dialog(){return document.getElementById("addNewTaskModal")},get form(){return document.getElementById("newToDoForm")},get mainTask(){return document.getElementById("newToDoDescription")},get subtasksContainer(){return document.getElementById("newSubtasksContainer")},get moreSubtasksButtonContainer(){return document.querySelector(".moreSubtasksButtonContainer")},get moreSubtasksButton(){return document.getElementById("moreSubtasksButton")},get categoryButton(){return document.getElementById("btn-addCategoryTag")},get dueDateButton(){return document.getElementById("btn-addDueDate")},get subtaskButton(){return document.getElementById("btn-addSubtask")},get submitButton(){return document.getElementById("btn-submitToDo")},get categoriesDialog(){return document.getElementById("dialog-categories")},get categoriesWrapper(){return document.getElementById("categoriesModal")},get subtaskItems(){return document.getElementsByClassName("newSubtaskItem")},get deleteButton(){return document.getElementById("btn-removeToDo")},get deleteDialog(){return document.getElementById("dialog-remove-todo")},get taskToDelete(){return document.getElementById("taskToDelete")},get confirmRemoval(){return document.getElementById("btn-confirm-removal")},get declineRemoval(){return document.getElementById("btn-decline-removal")}};function C(e){y.deleteButton.classList.add("hidden"),y.dialog.showModal(),E(),y.mainTask.focus(),console.log("newtaskbuttoneventlistener")}function E(){document.body.classList.add("no-scroll"),y.dialog.addEventListener("click",o),y.dialog.addEventListener("keydown",M),y.submitButton.addEventListener("click",B),y.categoryButton.addEventListener("click",S),y.subtaskButton.addEventListener("click",I),y.moreSubtasksButton.addEventListener("click",T),console.log("addtaskmodalevents")}function w(){y.dialog.removeEventListener("click",o),y.dialog.removeEventListener("keydown",M),y.submitButton.removeEventListener("click",B),y.categoryButton.removeEventListener("click",S),y.subtaskButton.removeEventListener("click",I),y.moreSubtasksButton.removeEventListener("click",T),y.categoriesDialog.removeEventListener("click",A),y.deleteButton.removeEventListener("click",f),console.log("removetaskmodalevents")}function x(){document.body.classList.remove("no-scroll"),y.mainTask.value="",y.categoryButton.textContent="category",Array.from(y.subtaskItems).forEach((e=>{e.children[1].removeEventListener("click",L),y.subtasksContainer.removeChild(e)})),y.moreSubtasksButtonContainer.classList.add("hidden"),y.moreSubtasksButtonContainer.removeEventListener("click",T),console.log("resetevent")}function L(e){const t=e.currentTarget;""===y.subtasksContainer.innerHTML&&y.moreSubtasksButtonContainer.classList.add("hidden"),t.removeEventListener("click",L),e.target.closest(".newSubtaskItem").remove(),console.log("removesubevents")}function B(){const e=y.mainTask.value.trim(),t=new Date;let n="All";if(!e)return w(),x(),void y.dialog.close();n="category"!==y.categoryButton.textContent&&i.includes(y.categoryButton.textContent)?y.categoryButton.textContent:"All",function(e,t,n,o){const r={id:s,toDoDescription:e,dueDate:t,category:n,creationDate:new Date,subtasks:o,status:"unchecked"};a.push(r);const i=O(s,e,r.status);r.subtasks.length>0&&r.subtasks.forEach((e=>{c(i,e.description,e.id,e.status)})),s++,l.toDoContainer.appendChild(i),d()}(e,t,n,D()),x(),w(),y.dialog.close(),console.log("subtminewtodoevents"),console.log(a)}function D(){const e=y.subtasksContainer.querySelectorAll(".newSubtaskItem");let t=[],n=0;return""!==y.subtasksContainer.innerHTML&&Array.from(e).forEach((e=>{if(""!==e.firstElementChild.value.trim()){const o={description:e.firstElementChild.value.trim(),id:n,status:"open"};t.push(o),n++}})),t}function I(){y.moreSubtasksButtonContainer.classList.remove("hidden"),T(),console.log("subtaskbuttnevents")}function T(){y.subtasksContainer.appendChild(P()),y.subtasksContainer.lastElementChild.firstElementChild.focus(),console.log("addnewsubtaskitemevent")}function S(e){const t=y.categoryButton.getBoundingClientRect();y.categoriesDialog.style.position="absolute",y.categoriesDialog.style.left=`${t.left}px`,y.categoriesDialog.style.top=`calc(${t.bottom}px + 0.5rem)`,function(){for(;y.categoriesWrapper.firstChild;)y.categoriesWrapper.removeChild(y.categoriesWrapper.firstChild);for(let e=1;e<i.length;e++)y.categoriesWrapper.appendChild(W(i[e]));""===y.categoriesWrapper.innerHTML&&y.categoriesWrapper.appendChild(W("Add Category"))}(),w(),y.categoriesDialog.classList.add("fade-in"),y.categoriesDialog.showModal(),y.categoriesDialog.addEventListener("click",A),y.categoriesDialog.addEventListener("keydown",q),console.log("Categorybuttonevents")}function A(e){e.stopPropagation();const t=y.categoriesDialog.getBoundingClientRect();if(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)return y.categoriesDialog.removeEventListener("click",A),y.categoriesDialog.removeEventListener("keydown",q),y.categoriesDialog.close(),void E();r(y.categoriesDialog,"BUTTON",e)&&("Add Category"===r(y.categoriesDialog,"BUTTON",e)&&(y.categoriesDialog.removeEventListener("click",A),y.categoriesDialog.removeEventListener("keydown",q),y.categoriesDialog.close(),y.dialog.removeEventListener("click",o),y.dialog.close(),z(j),ae(N,R)),y.categoryButton.textContent=r(y.categoriesDialog,"BUTTON",e),y.categoriesDialog.close(),y.categoriesDialog.removeEventListener("click",A),y.categoriesDialog.removeEventListener("keydown",q),E(),console.log("categorydialogevents1")),console.log("categorydialogevents2")}function N(){const e=U.input.value.trim();""===e||i.includes(e)?(G(),j()):(i.push(e),document.getElementById("scrollItemContainer").appendChild(F(i[i.length-1])),G(),d(),j())}function R(){j()}function j(){G(),ae(N,R),J(j),i.length>1&&(y.categoryButton.textContent=i[1]),setTimeout((()=>{y.dialog.showModal(),y.dialog.addEventListener("click",o)}),666)}function M(e){"Escape"===e.key&&(w(),x()),"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),y.dialog.removeEventListener("click",o),document.activeElement===y.mainTask&&""===y.subtasksContainer.innerHTML&&(y.submitButton.click(),console.log("submitted")),document.activeElement.classList.contains("newSubtaskInput")&&(document.activeElement===y.subtasksContainer.lastElementChild.firstElementChild&&""!==y.subtasksContainer.lastElementChild.firstElementChild.value?y.moreSubtasksButton.click():y.subtasksContainer.lastElementChild.firstElementChild.focus()),document.activeElement!==y.categoryButton&&document.activeElement!==y.subtaskButton&&document.activeElement!==y.submitButton||document.activeElement.click(),y.dialog.addEventListener("click",o))}function q(e){"Escape"===e.key&&(e.preventDefault(),y.categoriesDialog.removeEventListener("click",A),y.categoriesDialog.removeEventListener("keydown",q),y.categoriesDialog.close(),E()),"Enter"===e.key&&"BUTTON"===document.activeElement.tagName&&y.categoriesDialog.contains(document.activeElement)&&y.categoriesDialog.contains(document.activeElement)&&(e.preventDefault(),e.stopPropagation(),y.categoryButton.textContent=document.activeElement.textContent,y.categoriesDialog.close(),console.log("should close"),E(),y.categoriesDialog.removeEventListener("click",A),y.categoriesDialog.removeEventListener("keydown",q))}function O(e,t,n){const o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),d=document.createElement("p"),c=document.createElement("button"),l=document.createElement("div"),u=document.createElement("div"),g=document.createElement("div"),f=document.createElement("div"),p=document.createElement("div"),b=document.createElement("ul");return"checked"===n?(r.classList.add("checked"),r.setAttribute("aria-checked","true")):(r.setAttribute("aria-checked","false"),r.classList.remove("checked")),r.setAttribute("tabindex",0),o.classList.add("to-do-card","fade-in"),s.classList.add("to-do-task-container"),r.classList.add("checkbox"),a.classList.add("checkmark1"),i.classList.add("checkmark2"),d.classList.add("to-do-task"),c.classList.add("to-do-menu"),l.classList.add("hamburger-menu-dots"),u.classList.add("hamburger-dots"),g.classList.add("hamburger-dots"),f.classList.add("hamburger-dots"),p.classList.add("to-do-subtask","hidden"),d.textContent=t,o.dataset.taskId=e,r.addEventListener("click",v),c.addEventListener("click",m),a.appendChild(i),r.appendChild(a),l.appendChild(u),l.appendChild(g),l.appendChild(f),c.appendChild(l),p.appendChild(b),s.appendChild(d),s.appendChild(p),o.appendChild(r),o.appendChild(s),o.appendChild(c),o}function W(e){const t=document.createElement("button");return t.type="button",t.classList.add("dialog-btn"),t.textContent=e,t}function F(e){const t=document.createElement("div"),n=document.createElement("button"),o=document.createElement("span"),r=document.createElement("div"),a=document.createElement("div");return n.type="button",o.textContent=e,t.classList.add("scroll-item"),r.classList.add("delete-button-l1","hidden"),a.classList.add("delete-button-l2"),r.appendChild(a),n.appendChild(o),n.appendChild(r),t.appendChild(n),t}function P(e,t){const n=document.createElement("div"),o=document.createElement("input"),r=document.createElement("button"),a=document.createElement("div"),i=document.createElement("div");return r.type="button",o.type="text",o.placeholder="Add new subtask here",o.autocomplete="off",o.name="newSubtaskInput",o.classList.add("newSubtaskInput"),o.dataset.id=t,o.value=e||"",n.classList.add("newSubtaskItem","fade-in"),o.classList.add("addNewTaskInput","addNewSubtaskInput"),r.classList.add("delete-button"),a.classList.add("delete-button-l1"),i.classList.add("delete-button-l2"),r.addEventListener("click",L),a.appendChild(i),r.appendChild(a),n.appendChild(o),n.appendChild(r),n}y.addNewTaskButton.addEventListener("click",C);const U={grower:document.getElementById("grower"),newCategoryContainer:document.querySelector(".addNewCategoryContainer"),input:document.getElementById("addNewCategoryInput"),cancelButton:document.getElementById("cancelNewCategoryButton"),submitButton:document.getElementById("submitNewCategoryButton"),existingCategoryContainer:document.getElementById("scrollItemContainer"),settingsButton:document.getElementById("btn-settings"),menuDots:document.getElementById("menuDots"),get settingsDialog(){return document.getElementById("dialog-settings-tasks")},get removeCategoryButton(){return document.getElementById("removeCategory")},get addCategoryButton(){return document.getElementById("addCategory")},get editCategoryButton(){return document.getElementById("editCategory")}};U.settingsButton.addEventListener("click",(function(n){l.main.classList.contains("blur")||(e(U.menuDots,"spread"),U.settingsDialog.open?(t(U.settingsDialog),U.settingsDialog.close(),n.stopPropagation(),document.removeEventListener("click",X)):(U.settingsDialog.show(),document.addEventListener("click",X)))})),U.addCategoryButton.addEventListener("click",(function(){U.newCategoryContainer.classList.contains("hidden")?(ae(Q,K),setTimeout((()=>{U.input.focus()}),400),U.input.addEventListener("keydown",te)):U.input.focus()})),U.existingCategoryContainer.addEventListener("click",ne),U.removeCategoryButton.addEventListener("click",(function(){const e=U.existingCategoryContainer.querySelectorAll(".scroll-item");Array.from(e).length>1&&(Array.from(e).slice(1).forEach((e=>{e.firstElementChild.lastElementChild.classList.toggle("hidden")})),U.existingCategoryContainer.addEventListener("click",Y),z(Z))})),U.editCategoryButton.addEventListener("click",(function(){1!==i.length&&(z($),U.existingCategoryContainer.addEventListener("click",_))}));let H="";function X(n){n.target!==U.settingsDialog&&n.target!==U.settingsButton&&(e(U.menuDots,"spread"),t(U.settingsDialog),U.settingsDialog.close(),document.removeEventListener("click",X))}function z(e){oe(U.existingCategoryContainer.firstElementChild.firstElementChild),re(U.existingCategoryContainer.firstElementChild.firstElementChild.textContent),U.existingCategoryContainer.removeEventListener("click",ne),U.input.addEventListener("keydown",te),y.addNewTaskButton.removeEventListener("click",C),y.addNewTaskButton.addEventListener("click",e),y.addNewTaskButton.classList.toggle("upAndRotate"),l.main.classList.toggle("blur")}function J(e){y.addNewTaskButton.classList.toggle("downAndRotate"),l.main.classList.toggle("blur"),U.input.removeEventListener("keydown",te),y.addNewTaskButton.removeEventListener("click",e),y.addNewTaskButton.addEventListener("click",C),U.existingCategoryContainer.addEventListener("click",ne),setTimeout((()=>{y.addNewTaskButton.classList.remove("upAndRotate","downAndRotate")}),666)}function Z(){const e=U.existingCategoryContainer.querySelectorAll(".scroll-item");Array.from(e).length>1&&Array.from(e).slice(1).forEach((e=>{e.firstElementChild.lastElementChild.classList.toggle("hidden")})),U.existingCategoryContainer.removeEventListener("click",Y),J(Z)}function $(){U.existingCategoryContainer.removeEventListener("click",_),J($)}function Y(e){if(U.existingCategoryContainer.contains(e.target)){const t=e.target.closest(".scroll-item"),n=t.firstElementChild.firstElementChild.textContent;let o=i.indexOf(n);o>0&&i.splice(o,1),t.remove(),a.forEach((e=>{e.category===n&&(e.category="All")})),1===i.length&&y.addNewTaskButton.click(),d()}}function _(e){if(U.existingCategoryContainer.contains(e.target)){const t=e.target.closest(".scroll-item").firstElementChild.firstElementChild.textContent;if(0===i.indexOf(t))return;U.input.value=t,U.submitButton.dataset.edit=t,ae(ee,V)}}function G(){U.input.value=""}function K(){G(),ae(Q,K)}function Q(){const e=U.input.value.trim();""===e||i.includes(e)?(G(),ae(Q,K)):(i.push(e),document.getElementById("scrollItemContainer").appendChild(F(i[i.length-1])),G(),ae(Q,K),d())}function V(){G(),ae(ee,V)}function ee(){const e=Array.from(U.existingCategoryContainer.querySelectorAll(".scroll-item"));a.forEach((e=>{e.category===U.submitButton.dataset.edit&&(e.category=U.input.value.trim())}));for(let e=1;e<=i.length-1;e++)i[e]===U.submitButton.dataset.edit&&(i[e]=U.input.value.trim());e.forEach((e=>{e.firstElementChild.firstElementChild.textContent===U.submitButton.dataset.edit&&(e.firstElementChild.firstElementChild.textContent=U.input.value)})),console.log(U.input.value.trim(),U.submitButton.dataset.edit),console.log(i),d(),G(),ae(ee,V)}function te(e){"Enter"===e.key&&document.activeElement===U.input&&U.submitButton.click()}function ne(e){if(U.existingCategoryContainer.contains(e.target)&&e.target!==U.existingCategoryContainer){const t=e.target.closest(".scroll-item").firstElementChild;oe(t),re(t.firstElementChild.textContent)}}function oe(e){""===H&&(H=U.existingCategoryContainer.firstElementChild.firstElementChild),H.classList.toggle("active-tag"),e.classList.toggle("active-tag"),H=e}function re(e){const t=l.toDoContainer.getElementsByClassName("to-do-card");Array.from(t).forEach((t=>{const n=a.find((e=>e.id===parseInt(t.dataset.taskId))).category;e!==i[0]&&n!==e?t.classList.add("hidden"):t.classList.remove("hidden")}))}function ae(t,n){e(U.grower,"grow"),U.newCategoryContainer.classList.contains("hidden")?(setTimeout((()=>{e(U.newCategoryContainer,"hidden"),e(U.existingCategoryContainer,"hidden"),e(U.grower,"grow")}),330),U.submitButton.addEventListener("click",t),U.cancelButton.addEventListener("click",n),U.input.addEventListener("keydown",te),setTimeout((()=>{U.input.focus()}),500)):(setTimeout((()=>{e(U.newCategoryContainer,"hidden"),e(U.existingCategoryContainer,"hidden"),e(U.grower,"grow")}),330),U.submitButton.removeEventListener("click",t),U.cancelButton.removeEventListener("click",n),U.input.removeEventListener("keydown",te))}const ie={menu:document.getElementById("button-menu"),todo:document.getElementById("button-todo"),calendar:document.getElementById("button-calendar")};var se=n(379),de=n.n(se),ce=n(795),le=n.n(ce),ue=n(569),me=n.n(ue),ge=n(565),fe=n.n(ge),pe=n(216),be=n.n(pe),he=n(589),ve=n.n(he),ke=n(426),ye={};ye.styleTagTransform=ve(),ye.setAttributes=fe(),ye.insert=me().bind(null,"head"),ye.domAPI=le(),ye.insertStyleElement=be(),de()(ke.Z,ye),ke.Z&&ke.Z.locals&&ke.Z.locals,ie.todo.addEventListener("click",(function(){oe(U.existingCategoryContainer.firstElementChild.firstElementChild),re(U.existingCategoryContainer.firstElementChild.firstElementChild.textContent),l.toDoContainer.scrollTop=0})),function(){const e=localStorage.getItem("toDoList"),t=localStorage.getItem("categories");e&&(a=JSON.parse(e),s=Math.max(...a.map((e=>e.id)))+1,l.toDoContainer.innerHTML="",a.forEach((e=>{const t=O(e.id,e.toDoDescription,e.status);e.subtasks.length>0&&e.subtasks.forEach((e=>{c(t,e.description,e.id,e.status)})),l.toDoContainer.appendChild(t)}))),t&&(i=JSON.parse(t)),i.forEach((e=>{const t=F(e);U.existingCategoryContainer.appendChild(t),"All"===e&&t.firstElementChild.classList.add("active-tag")}))}()})()})();