import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as p}from"./assets/vendor-BbSUbo7J.js";const o=document.querySelector("[data-start]"),u=document.querySelector("#datetime-picker");o.disabled=!0;u.disabled=!1;let m=null;const S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]"),w=document.querySelector(".timer");console.log(w);const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>Date.now()?(o.disabled=!1,m=e[0]):(p.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0)}};h("#datetime-picker",C);o.addEventListener("click",()=>{o.disabled=!0,u.disabled=!0;const e=setInterval(()=>{const t=m-new Date;if(t<=0){clearInterval(e),l(0,0,0,0),u.disabled=!1;return}const{days:n,hours:i,minutes:c,seconds:d}=s(t);l(n,i,c,d)},1e3)});function l(e,a,t,n){S.textContent=r(e),g.textContent=r(a),b.textContent=r(t),q.textContent=r(n)}function r(e){return String(e).padStart(2,"0")}function s(e){const c=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:f,seconds:y}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));console.log();
//# sourceMappingURL=1-timer.js.map
