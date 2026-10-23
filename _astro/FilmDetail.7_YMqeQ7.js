import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.BGV7IXSR.js";function F({item:i}){const d=s.useRef(null),l=s.useRef(null),[u,p]=s.useState(!0),[m,f]=s.useState(!1),[b,w]=s.useState(!1),[a,h]=s.useState(0),[o,c]=s.useState(0),k=e=>{if(e.startsWith("http://")||e.startsWith("https://"))return e;const r="/";return(r.endsWith("/")?r:r+"/")+(e.startsWith("/")?e.substring(1):e)},x=e=>{if(!Number.isFinite(e)||e<0)return"00:00";const r=Math.floor(e/60),n=Math.floor(e%60);return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`};s.useEffect(()=>{const e=l.current;e&&(e.duration&&Number.isFinite(e.duration)&&c(e.duration),e.muted=!1,p(!1))},[]);const g=()=>{const e=l.current;e&&(e.paused?e.play():e.pause())},j=e=>{const r=l.current,n=parseFloat(e.target.value);h(n),r&&(r.currentTime=n)},C=()=>{const e=l.current;e&&(e.muted=!e.muted,p(e.muted))},y=async e=>{if(e.requestFullscreen){if(await e.requestFullscreen(),screen.orientation&&screen.orientation.lock)try{await screen.orientation.lock("landscape")}catch(r){console.warn("Orientation lock not supported:",r)}}else e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},N=()=>{const e=d.current;e&&(e.requestFullscreen||e.webkitRequestFullscreen?document.fullscreenElement?document.exitFullscreen?.():y(e):w(r=>{const n=!r;if(n&&screen.orientation&&screen.orientation.lock)try{screen.orientation.lock("landscape")}catch(R){console.warn("Orientation lock not supported:",R)}return n}))},v=o>0?Math.min(100,a/o*100):0;return t.jsxs("div",{className:"relative w-full max-w-[1500px] mx-auto bg-white flex flex-col px-2.5 sm:px-3",children:[t.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 -z-10 shadow-2xl shadow-black/40 [clip-path:inset(1px_-100px_1px_-150px)]"}),t.jsx("style",{children:`
        .film-video-container {
          width: 100%;
          position: relative;
        }

        .film-video-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 14px 20px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent);
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          z-index: 10;
        }

        .film-progress-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }

        .film-progress-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
          transition: height 0.15s ease;
        }

        .film-progress-slider:hover {
          height: 6px;
        }

        .film-progress-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          transition: transform 0.15s ease, background-color 0.15s ease;
        }

        .film-progress-slider:hover::-webkit-slider-thumb {
          transform: scale(1.2);
          background: var(--color-red-700, #b91c1c);
        }

        .film-progress-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border: none;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          transition: transform 0.15s ease, background-color 0.15s ease;
        }

        .film-progress-slider:hover::-moz-range-thumb {
          transform: scale(1.2);
          background: var(--color-red-700, #b91c1c);
        }

        .film-time-label {
          color: white;
          font-size: 0.78rem;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
          user-select: none;
          letter-spacing: 0.03em;
        }

        .film-video-controls {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 6px;
        }

        .film-video-container:fullscreen,
        .film-video-container:-webkit-full-screen {
          width: 100%;
          height: 100%;
          background: black;
        }

        .film-video-container:fullscreen video,
        .film-video-container:-webkit-full-screen video {
          object-fit: contain;
        }

        .film-video-container video::-webkit-media-controls-fullscreen-button {
          display: none;
        }

        .film-control-btn {
          color: white;
          border: none;
          padding: 6px 8px;
          font-size: 1.8rem;
          border-radius: 8px;
          cursor: pointer;
          user-select: none;
          background: transparent;
        }

        .film-control-btn:hover {
          color: var(--color-red-700);
        }

        .film-video-container.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: black;
          z-index: 9999;
        }

        .film-video-container.fullscreen video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}),t.jsxs("div",{ref:d,"data-nosnippet":!0,className:`film-video-container aspect-video bg-black overflow-hidden ${b?"fullscreen":""}`,children:[t.jsx("video",{ref:l,src:k(i.videoUrl),muted:!0,loop:!0,playsInline:!0,preload:"auto",onPlay:()=>f(!0),onPause:()=>f(!1),onTimeUpdate:e=>h(e.currentTarget.currentTime),onLoadedMetadata:e=>c(e.currentTarget.duration),onDurationChange:e=>c(e.currentTarget.duration),onClick:g,className:"w-full h-full object-cover cursor-pointer",children:"Your browser does not support the video tag."}),t.jsxs("div",{className:"film-video-bottom-bar",children:[t.jsxs("div",{className:"film-progress-row",children:[t.jsx("input",{type:"range",min:0,max:o||0,step:.1,value:a,onChange:j,"aria-label":"Video progress",className:"film-progress-slider",style:{background:`linear-gradient(to right, #ffffff ${v}%, rgba(255, 255, 255, 0.3) ${v}%)`}}),t.jsxs("span",{className:"film-time-label",children:[x(a)," / ",x(o)]})]}),t.jsxs("div",{className:"film-video-controls",children:[t.jsx("button",{type:"button",onClick:g,className:"film-control-btn","aria-label":m?"Pause":"Play",children:m?t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",clipRule:"evenodd"})}):t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"})})}),t.jsx("button",{type:"button",onClick:C,className:"film-control-btn","aria-label":u?"Unmute":"Mute",children:u?t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:t.jsx("path",{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"})}):t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[t.jsx("path",{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"}),t.jsx("path",{d:"M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"})]})}),t.jsx("button",{type:"button",onClick:N,className:"film-control-btn","aria-label":"Fullscreen",children:t.jsxs("svg",{width:"30px",height:"30px",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.25 4C1.25 2.48122 2.48122 1.25 4 1.25H8C8.41421 1.25 8.75 1.58579 8.75 2C8.75 2.41421 8.41421 2.75 8 2.75H4C3.30964 2.75 2.75 3.30964 2.75 4V8C2.75 8.41421 2.41421 8.75 2 8.75C1.58579 8.75 1.25 8.41421 1.25 8V4Z"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 1.25C21.5188 1.25 22.75 2.48122 22.75 4L22.75 8C22.75 8.41421 22.4142 8.75 22 8.75C21.5858 8.75 21.25 8.41421 21.25 8L21.25 4C21.25 3.30964 20.6904 2.75 20 2.75L16 2.75C15.5858 2.75 15.25 2.41421 15.25 2C15.25 1.58579 15.5858 1.25 16 1.25L20 1.25Z"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.75 20C22.75 21.5188 21.5188 22.75 20 22.75L16 22.75C15.5858 22.75 15.25 22.4142 15.25 22C15.25 21.5858 15.5858 21.25 16 21.25L20 21.25C20.6904 21.25 21.25 20.6904 21.25 20L21.25 16C21.25 15.5858 21.5858 15.25 22 15.25C22.4142 15.25 22.75 15.5858 22.75 16L22.75 20Z"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.25 20C1.25 21.5188 2.48122 22.75 4 22.75L8 22.75C8.41421 22.75 8.75 22.4142 8.75 22C8.75 21.5858 8.41421 21.25 8 21.25L4 21.25C3.30964 21.25 2.75 20.6904 2.75 20L2.75 16C2.75 15.5858 2.41421 15.25 2 15.25C1.58579 15.25 1.25 15.5858 1.25 16L1.25 20Z"})]})})]})]})]}),t.jsxs("div",{className:"mt-8 sm:mt-10 text-center",children:[t.jsx("h1",{className:"font-helvetica-b uppercase text-black leading-none",style:{fontSize:"clamp(0.9rem, 1.5vw, 1.05rem)"},children:i.title}),i.year&&t.jsx("p",{className:"font-newcentury-r text-black",style:{fontSize:"clamp(0.75rem, 1vw, 0.9rem)"},children:i.year})]}),t.jsx("div",{className:"mt-6 sm:mt-8 w-full px-[25px] text-left font-newcentury-r text-black",children:t.jsx("p",{className:"whitespace-pre-line leading-[1.2]",style:{fontSize:"clamp(0.75rem, 0.6vw, 0.85rem)",hyphens:"auto"},children:i.text})}),t.jsx("div",{className:"mt-14 sm:mt-20 flex justify-center",children:t.jsx("a",{href:"/",className:"font-neogrotesk-r text-black font-medium uppercase cursor-pointer transition-opacity hover:opacity-75",style:{fontSize:"clamp(0.75rem, 3vw, .9rem)"}})})]})}export{F as default};
