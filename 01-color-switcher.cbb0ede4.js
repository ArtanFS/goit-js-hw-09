const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let d=null;r.setAttribute("disabled","");e.addEventListener("click",(()=>{e.setAttribute("disabled",""),r.removeAttribute("disabled",""),d=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}),1e3)})),r.addEventListener("click",(()=>{e.removeAttribute("disabled",""),r.setAttribute("disabled",""),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.cbb0ede4.js.map