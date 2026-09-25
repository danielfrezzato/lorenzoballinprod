const a=n=>{const e=document.createElement("div");e.classList.add("direction-indicator"),document.body.appendChild(e);const r=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>
`,i=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
</svg>
`,s=document.querySelector(n);let t=0;s?.addEventListener("mousemove",function(l){const o=l;e.style.top=o.pageY+"px",e.style.left=o.pageX+"px",t!==0&&(o.pageX>t?e.innerHTML=r:o.pageX<t&&(e.innerHTML=i)),t=o.pageX}),s?.addEventListener("mouseenter",function(){e.style.opacity="1",e.style.transform="scale(1)"}),s?.addEventListener("mouseleave",function(){e.style.opacity="0",e.style.transform="scale(0)",t=0})};export{a as s};
