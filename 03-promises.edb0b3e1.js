var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");function r(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}const u={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),btn:document.querySelector(".form")};u.delay.setAttribute("min",0),u.step.setAttribute("min",0),u.amount.setAttribute("min",0),u.btn.addEventListener("submit",(e=>{e.preventDefault();!function(e,t,n){for(let o=1;o<=n;o+=1)r(o,e).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{timeout:5e3})})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{timeout:5e3})})),e+=t}(Number(u.delay.value),Number(u.step.value),Number(u.amount.value))}));
//# sourceMappingURL=03-promises.edb0b3e1.js.map