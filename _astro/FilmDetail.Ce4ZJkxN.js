import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.BGV7IXSR.js";function j({item:l}){const c=o.useRef(null),r=o.useRef(null),[d,f]=o.useState(!0),[s,u]=o.useState(!1),[p,m]=o.useState(!1),h=t=>{if(t.startsWith("http://")||t.startsWith("https://"))return t;const n="/";return(n.endsWith("/")?n:n+"/")+(t.startsWith("/")?t.substring(1):t)};o.useEffect(()=>{const t=r.current;t&&(t.muted=!1,f(!1))},[]);const i=()=>{const t=r.current;t&&(t.paused?t.play():t.pause())},x=()=>{const t=r.current;t&&(t.muted=!t.muted,f(t.muted))},v=async t=>{if(t.requestFullscreen){if(await t.requestFullscreen(),screen.orientation&&screen.orientation.lock)try{await screen.orientation.lock("landscape")}catch(n){console.warn("Orientation lock not supported:",n)}}else t.webkitRequestFullscreen&&t.webkitRequestFullscreen()},b=()=>{const t=c.current;t&&(t.requestFullscreen||t.webkitRequestFullscreen?document.fullscreenElement?document.exitFullscreen?.():v(t):m(n=>{const a=!n;if(a&&screen.orientation&&screen.orientation.lock)try{screen.orientation.lock("landscape")}catch(g){console.warn("Orientation lock not supported:",g)}return a}))};return e.jsxs("div",{className:"relative w-full max-w-[1500px] mx-auto bg-white flex flex-col px-2.5 sm:px-3",children:[e.jsx("style",{children:`
        @font-face {
          font-family: homeVideo-r;
          src: url("/fonts/homevideo.ttf");
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: homeVideo-b;
          src: url("/fonts/homevideobold.ttf");
          font-style: normal;
          font-display: swap;
        }

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
          justify-content: flex-end;
          gap: 16px;
          z-index: 10;
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

        .film-play-btn {
          font-family: var(--font-homevideo), homeVideo-r, monospace, sans-serif;
          font-size: 0.95rem;
          font-weight: normal;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          white-space: nowrap;
          transition: color 0.15s ease;
        }

        .film-center-play-btn {
          position: absolute;
          inset: 0;
          margin: auto;
          width: fit-content;
          height: fit-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: white;
          font-family: var(--font-homevideo), homeVideo-r, monospace, sans-serif;
          font-weight: normal;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: transparent;
          border: none;
          cursor: pointer;
          user-select: none;
          z-index: 15;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .film-center-play-btn:hover {
          transform: scale(1.06);
          color: var(--color-red-700, #b91c1c);
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
      `}),e.jsxs("div",{ref:c,"data-nosnippet":!0,className:`film-video-container aspect-video bg-black overflow-hidden relative ${p?"fullscreen":""}`,children:[e.jsx("video",{ref:r,src:h(l.videoUrl),muted:!0,loop:!0,playsInline:!0,preload:"auto",onPlay:()=>u(!0),onPause:()=>u(!1),onClick:i,className:"w-full h-full object-cover cursor-pointer",children:"Your browser does not support the video tag."}),!s&&e.jsxs("button",{type:"button",onClick:t=>{t.stopPropagation(),i()},"aria-label":"Play video",className:"film-center-play-btn",style:{fontSize:"clamp(1.2rem, 2.8vw, 2.2rem)"},children:[e.jsx("span",{children:"PLAY"}),e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-[0.7em] h-[0.7em] shrink-0","aria-hidden":"true",children:e.jsx("path",{d:"M5 3.5v17l15-8.5L5 3.5z"})})]}),e.jsx("div",{className:"film-video-bottom-bar",children:e.jsxs("div",{className:"film-video-controls",children:[e.jsx("button",{type:"button",onClick:i,className:"film-control-btn film-play-btn","aria-label":s?"Pause":"Play",children:s?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"PAUSE"}),e.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-[0.75em] h-[0.75em] shrink-0","aria-hidden":"true",children:[e.jsx("rect",{x:"5",y:"4",width:"4.5",height:"16"}),e.jsx("rect",{x:"14.5",y:"4",width:"4.5",height:"16"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"PLAY"}),e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-[0.75em] h-[0.75em] shrink-0","aria-hidden":"true",children:e.jsx("path",{d:"M5 3.5v17l15-8.5L5 3.5z"})})]})}),e.jsx("button",{type:"button",onClick:x,className:"film-control-btn","aria-label":d?"Unmute":"Mute",children:d?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:e.jsx("path",{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"})}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[e.jsx("path",{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"}),e.jsx("path",{d:"M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"})]})}),e.jsx("button",{type:"button",onClick:b,className:"film-control-btn","aria-label":"Fullscreen",children:e.jsxs("svg",{width:"30px",height:"30px",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.25 4C1.25 2.48122 2.48122 1.25 4 1.25H8C8.41421 1.25 8.75 1.58579 8.75 2C8.75 2.41421 8.41421 2.75 8 2.75H4C3.30964 2.75 2.75 3.30964 2.75 4V8C2.75 8.41421 2.41421 8.75 2 8.75C1.58579 8.75 1.25 8.41421 1.25 8V4Z"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 1.25C21.5188 1.25 22.75 2.48122 22.75 4L22.75 8C22.75 8.41421 22.4142 8.75 22 8.75C21.5858 8.75 21.25 8.41421 21.25 8L21.25 4C21.25 3.30964 20.6904 2.75 20 2.75L16 2.75C15.5858 2.75 15.25 2.41421 15.25 2C15.25 1.58579 15.5858 1.25 16 1.25L20 1.25Z"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.75 20C22.75 21.5188 21.5188 22.75 20 22.75L16 22.75C15.5858 22.75 15.25 22.4142 15.25 22C15.25 21.5858 15.5858 21.25 16 21.25L20 21.25C20.6904 21.25 21.25 20.6904 21.25 20L21.25 16C21.25 15.5858 21.5858 15.25 22 15.25C22.4142 15.25 22.75 15.5858 22.75 16L22.75 20Z"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.25 20C1.25 21.5188 2.48122 22.75 4 22.75L8 22.75C8.41421 22.75 8.75 22.4142 8.75 22C8.75 21.5858 8.41421 21.25 8 21.25L4 21.25C3.30964 21.25 2.75 20.6904 2.75 20L2.75 16C2.75 15.5858 2.41421 15.25 2 15.25C1.58579 15.25 1.25 15.5858 1.25 16L1.25 20Z"})]})})]})})]}),e.jsxs("div",{className:"mx-auto flex h-auto min-h-[50vh] w-full flex-col items-center justify-start px-4 pt-8 pb-12 lg:h-full lg:w-[85%] lg:justify-center lg:overflow-y-auto lg:px-8 lg:py-8",children:[e.jsxs("div",{className:"mb-12 text-center",children:[e.jsx("h1",{className:"font-helvetica-b uppercase text-black leading-none",style:{fontSize:"clamp(0.9rem, 1.5vw, 1.05rem)"},children:l.title}),l.year&&e.jsx("p",{className:"font-newcentury-r text-black text-[12px]",children:l.year})]}),e.jsx("div",{className:"font-newcentury-r flex flex-col items-center justify-center w-full text-black text-center",children:l.text&&e.jsx("p",{className:"w-full text-center whitespace-pre-line leading-[1.2]",style:{fontSize:"clamp(0.75rem, 0.6vw, 0.85rem)",hyphens:"auto"},children:l.text})}),e.jsx("div",{className:"mt-14 sm:mt-20 flex justify-center",children:e.jsx("a",{href:"/",className:"font-neogrotesk-r text-black font-medium uppercase cursor-pointer transition-opacity hover:opacity-75",style:{fontSize:"clamp(0.75rem, 3vw, .9rem)"},children:"CLOSE"})})]})]})}export{j as default};
