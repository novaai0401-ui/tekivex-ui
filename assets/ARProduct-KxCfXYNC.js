import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{f as t,h as n}from"./vendor-react-SwSemskP.js";import{S as r,g as i,j as a,k as o,r as s,v as c,w as l}from"./vendor-three-C0P4-zBV.js";import{t as u}from"./XRSession-Bj0vmJgG.js";import{d,m as f,p,t as m,u as h}from"./index-CnQ23JLu.js";import{t as g}from"./ExampleShell-eSWNSZxX.js";import{t as _}from"./OpenSourceFooter-Dpp-nGLL.js";var v=e(n(),1);function y({size:e=[3,4],depth:t=.05,position:n=[0,0,0],color:u=`#00f5d4`,texture:d,backColor:p=`#1a1a2e`,maxTilt:m=.35,autoRotate:h=0,roughness:g=.3,metalness:_=.7,onClick:y}){let{scene:b,camera:x,renderer:S,onFrame:C}=f();return(0,v.useEffect)(()=>{let[f,v]=e,w=new s(f,v,t),T=null;d&&(T=new o().load(d),T.colorSpace=l);let E=new c({color:T?16777215:u,map:T,roughness:g,metalness:_}),D=new c({color:p,roughness:.5,metalness:_}),O=[D,D,D,D,E,new c({color:p,roughness:g,metalness:_})],k=new i(w,O);k.position.set(...n),k.castShadow=!0,k.receiveShadow=!0,b.add(k);let A=0,j=0,M=!1;function N(e){let t=S.domElement.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1,i=-((e.clientY-t.top)/t.height)*2+1,o=new r;o.setFromCamera(new a(n,i),x),M=o.intersectObject(k).length>0,A=-i*m,j=n*m}function P(){M=!1,A=0,j=0}function F(e){if(!y)return;let t=S.domElement.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1,i=-((e.clientY-t.top)/t.height)*2+1,o=new r;o.setFromCamera(new a(n,i),x),o.intersectObject(k).length>0&&y()}S.domElement.addEventListener(`pointermove`,N),S.domElement.addEventListener(`pointerleave`,P),S.domElement.addEventListener(`click`,F);let I=C(e=>{k.rotation.x+=(A-k.rotation.x)*.1,k.rotation.y+=(j-k.rotation.y)*.1,h&&!M&&(k.rotation.y+=h*e)});return()=>{I(),S.domElement.removeEventListener(`pointermove`,N),S.domElement.removeEventListener(`pointerleave`,P),S.domElement.removeEventListener(`click`,F),b.remove(k),w.dispose(),O.forEach(e=>e.dispose()),T&&T.dispose()}},[]),null}var b=t(),x=[{id:`oak`,label:`Natural oak`,swatch:`#c69c6d`,cardColor:`#c69c6d`},{id:`walnut`,label:`Smoked walnut`,swatch:`#5b3a29`,cardColor:`#5b3a29`},{id:`sage`,label:`Sage upholstery`,swatch:`#8a9b6e`,cardColor:`#8a9b6e`},{id:`navy`,label:`Deep navy`,swatch:`#1e293b`,cardColor:`#1e293b`}];function S(e){let{variant:t,angle:n}=e,r=t.cardColor,i=C(r,-.25),a=C(r,.18),o=`rgba(15, 23, 42, 0.18)`,s=n===`lifestyle`?`linear-gradient(180deg, #f8eedc 0%, #ead4b3 50%, #b88f5e 100%)`:`#f4f0ea`,c=n===`side`?`<g transform="translate(120 70)">
        <path d="M 60 280 Q 60 100 200 80 L 380 80 Q 460 80 470 110 L 470 260 Q 470 290 440 290 L 90 290 Q 60 290 60 280 Z"
              fill="${r}" stroke="${i}" stroke-width="3"/>
        <ellipse cx="265" cy="295" rx="200" ry="14" fill="${o}"/>
        <path d="M 100 290 L 95 380 L 130 380 L 135 290 Z" fill="${i}"/>
        <path d="M 425 290 L 420 380 L 455 380 L 460 290 Z" fill="${i}"/>
        <line x1="200" y1="100" x2="380" y2="100" stroke="${a}" stroke-width="2" opacity="0.6"/>
      </g>`:n===`detail`?`<g transform="translate(60 60)">
        <rect x="40" y="40" width="500" height="320" rx="40" fill="${r}" stroke="${i}" stroke-width="3"/>
        ${Array.from({length:26},(e,t)=>`<line x1="${70+t*18}" y1="80" x2="${70+t*18}" y2="92" stroke="${i}" stroke-width="1.5"/>`).join(``)}
        ${Array.from({length:26},(e,t)=>`<line x1="${70+t*18}" y1="308" x2="${70+t*18}" y2="320" stroke="${i}" stroke-width="1.5"/>`).join(``)}
        <path d="M 60 200 L 540 200" stroke="${a}" stroke-width="2" opacity="0.4"/>
      </g>`:n===`lifestyle`?`<g>
        <rect y="280" width="600" height="120" fill="rgba(255,255,255,0.4)"/>
        <rect x="40" y="120" width="160" height="220" fill="rgba(255,255,255,0.6)" stroke="rgba(15,23,42,0.1)" stroke-width="2"/>
        <line x1="120" y1="120" x2="120" y2="340" stroke="rgba(15,23,42,0.1)" stroke-width="1"/>
        <line x1="40" y1="230" x2="200" y2="230" stroke="rgba(15,23,42,0.1)" stroke-width="1"/>
        <g transform="translate(280 100)">
          <ellipse cx="100" cy="245" rx="100" ry="10" fill="${o}"/>
          <rect x="20" y="140" width="160" height="80" rx="20" fill="${r}" stroke="${i}" stroke-width="2"/>
          <rect x="30" y="60" width="140" height="100" rx="16" fill="${r}" stroke="${i}" stroke-width="2"/>
          <rect x="35" y="220" width="14" height="40" fill="${i}"/>
          <rect x="151" y="220" width="14" height="40" fill="${i}"/>
        </g>
        <rect x="450" y="200" width="100" height="140" fill="rgba(122, 85, 58, 0.25)" rx="3"/>
      </g>`:`<g transform="translate(80 60)">
        <ellipse cx="220" cy="345" rx="200" ry="12" fill="${o}"/>
        <rect x="40" y="40" width="360" height="160" rx="22" fill="${r}" stroke="${i}" stroke-width="3"/>
        <rect x="20" y="200" width="400" height="100" rx="18" fill="${a}" stroke="${i}" stroke-width="3"/>
        <rect x="30" y="296" width="20" height="58" fill="${i}" rx="2"/>
        <rect x="390" y="296" width="20" height="58" fill="${i}" rx="2"/>
        <rect x="50" y="296" width="20" height="58" fill="${i}" rx="2" opacity="0.55"/>
        <rect x="370" y="296" width="20" height="58" fill="${i}" rx="2" opacity="0.55"/>
        <line x1="60" y1="80" x2="380" y2="80" stroke="${a}" stroke-width="2" opacity="0.55"/>
        <line x1="60" y1="160" x2="380" y2="160" stroke="${a}" stroke-width="2" opacity="0.55"/>
      </g>`,l=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 460">`+(s.startsWith(`linear`)?`<defs><linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f8eedc"/><stop offset="50%" stop-color="#ead4b3"/><stop offset="100%" stop-color="#b88f5e"/></linearGradient></defs><rect width="600" height="460" fill="url(#bg)"/>`:`<rect width="600" height="460" fill="${s}"/>`)+c+`</svg>`;return`data:image/svg+xml;utf8,`+encodeURIComponent(l)}function C(e,t){let n=e.replace(`#`,``),r=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),a=parseInt(n.slice(4,6),16),o=e=>Math.max(0,Math.min(255,Math.round(e+255*t)));return`#${[o(r),o(i),o(a)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}var w={brand:`Lumen Studio`,name:`Aurora Lounge Chair`,rating:4.8,reviews:312,price:38900,oldPrice:45e3,inStock:!0,shipsIn:`3–5 business days`,dims:{w:78,d:82,h:95,weight:14},description:`Steam-bent solid wood frame, hand-stitched leather sling, and a counter-balanced backrest that recliines without a mechanism. Designed by Mira Joshi in our Bangalore studio.`,bullets:[`FSC-certified European oak (or walnut)`,`Full-grain leather sling, hand-stitched`,`Assembles in under 10 minutes — three bolts`,`10-year structural warranty`,`Ships in eco-foam, no plastic`]};function T(){let[e,t]=(0,v.useState)({ar:!1,vr:!1,checking:!0});return(0,v.useEffect)(()=>{let e=navigator.xr;if(!e||typeof e.isSessionSupported!=`function`){t({ar:!1,vr:!1,checking:!1});return}Promise.all([e.isSessionSupported(`immersive-ar`).catch(()=>!1),e.isSessionSupported(`immersive-vr`).catch(()=>!1)]).then(([e,n])=>t({ar:e,vr:n,checking:!1}))},[]),e}function E(){m(`AR product preview example — TekiVex UI`,`An e-commerce product page where shoppers can place the chair in their own room with WebXR AR. Built with tekivex-3d. Falls back to a draggable 3D viewer on devices without AR.`,{keywords:`tekivex ar example, webxr, ar furniture, virtual try on, 3d product viewer, react ecommerce ar`});let[e,t]=(0,v.useState)(`oak`),n=x.find(t=>t.id===e),[r,i]=(0,v.useState)(1),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(`photos`),[l,f]=(0,v.useState)(0),E=T(),[M,N]=(0,v.useState)(null),P=[{angle:`front`,label:`Front`},{angle:`side`,label:`Side`},{angle:`detail`,label:`Stitching`},{angle:`lifestyle`,label:`In a room`}];function F(){o(!0),setTimeout(()=>o(!1),2200)}return(0,b.jsxs)(g,{title:`Aurora Lounge Chair`,eyebrow:`Use case · E-commerce + AR`,description:`A real product page where shoppers can place the chair in their actual room before buying — built with tekivex-3d. Falls back gracefully to a draggable 3D viewer when WebXR isn't available.`,sourceUrl:`https://github.com/007krcs/tekivex-ui/blob/master/landing/src/pages/examples/ARProduct.tsx`,surface:`light`,children:[(0,b.jsx)(j,{}),(0,b.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`24px 24px 64px`},children:[(0,b.jsxs)(`div`,{className:`ar-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`ar-view-tabs`,role:`tablist`,"aria-label":`Product views`,children:[(0,b.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":s===`photos`,className:`ar-view-tab ${s===`photos`?`is-active`:``}`,onClick:()=>c(`photos`),children:`📸 Photos`}),(0,b.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":s===`3d`,className:`ar-view-tab ${s===`3d`?`is-active`:``}`,onClick:()=>c(`3d`),children:`🔄 3D view`}),(0,b.jsx)(`span`,{className:`ar-eyebrow`,style:{marginLeft:`auto`,alignSelf:`center`},children:s===`photos`?`${l+1} / ${P.length}`:`360° rotation`})]}),s===`photos`?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`ar-photo-main`,children:[(0,b.jsx)(`img`,{src:S({variant:n,angle:P[l].angle}),alt:`${w.name} — ${P[l].label} view (${n.label})`}),(0,b.jsxs)(`div`,{className:`ar-photo-pill`,children:[(0,b.jsx)(`span`,{className:`ar-eyebrow`,children:`Finish`}),(0,b.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,b.jsx)(`span`,{className:`ar-swatch`,style:{background:n.swatch},"aria-hidden":`true`}),n.label]})]}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>c(`3d`),className:`ar-photo-cta`,"data-tkx-xr-button":`ar`,children:`👓 View in your room`})]}),(0,b.jsx)(`div`,{className:`ar-photo-thumbs`,children:P.map((e,t)=>(0,b.jsxs)(`button`,{type:`button`,onClick:()=>f(t),"aria-pressed":t===l,className:`ar-photo-thumb ${t===l?`is-active`:``}`,children:[(0,b.jsx)(`img`,{src:S({variant:n,angle:e.angle}),alt:``,loading:`lazy`}),(0,b.jsx)(`span`,{children:e.label})]},e.angle))})]}):(0,b.jsxs)(`div`,{className:`ar-viewer`,children:[(0,b.jsxs)(p,{fov:45,cameraPosition:[2.4,1.6,3.6],background:`transparent`,children:[(0,b.jsx)(d,{count:300,volume:[8,6,8],driftSpeed:.1,size:.02}),(0,b.jsx)(y,{position:[0,.95,0],size:[1.3,.18],color:n.cardColor}),(0,b.jsx)(y,{position:[0,1.55,-.55],size:[1.3,1],color:n.cardColor}),(0,b.jsx)(y,{position:[-.55,.45,-.45],size:[.12,.85],color:C(n.cardColor,-.25)}),(0,b.jsx)(y,{position:[.55,.45,-.45],size:[.12,.85],color:C(n.cardColor,-.25)}),(0,b.jsx)(y,{position:[-.55,.45,.45],size:[.12,.85],color:C(n.cardColor,-.25)}),(0,b.jsx)(y,{position:[.55,.45,.45],size:[.12,.85],color:C(n.cardColor,-.25)}),(0,b.jsx)(h,{preset:`orbit`,autoRotate:!0}),(0,b.jsx)(u,{ar:!0,vr:!0,onSessionStart:e=>N(e),onSessionEnd:()=>N(null)})]}),(0,b.jsxs)(`div`,{className:`ar-viewer-hud`,children:[(0,b.jsxs)(`div`,{className:`ar-viewer-pill`,children:[(0,b.jsx)(`span`,{className:`ar-eyebrow`,children:`Variant`}),(0,b.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,b.jsx)(`span`,{className:`ar-swatch`,style:{background:n.swatch},"aria-hidden":`true`}),n.label]})]}),(0,b.jsxs)(`div`,{className:`ar-actions`,children:[(0,b.jsx)(D,{mode:`ar`,available:E.ar,active:M===`ar`,checking:E.checking}),(0,b.jsx)(D,{mode:`vr`,available:E.vr,active:M===`vr`,checking:E.checking})]})]}),(0,b.jsx)(`div`,{className:`ar-viewer-hint`,"aria-hidden":`true`,children:`🖱 drag to orbit · 🔍 scroll to zoom · 🥽 tap "View in your room" on a Quest 3 / Vision Pro / ARCore phone`})]}),(0,b.jsxs)(`div`,{className:`ar-cap-row`,children:[(0,b.jsx)(O,{icon:`📱`,title:`Modern Android`,body:`Tap 'View in your room'. Chrome lifts a WebXR session and the chair anchors to a real surface.`,ok:E.ar}),(0,b.jsx)(O,{icon:`🥽`,title:`Quest 3 / Vision Pro`,body:`Enter immersive AR pass-through. The chair places at floor height; walk around it like the real thing.`,ok:E.ar}),(0,b.jsx)(O,{icon:`🖥`,title:`iPhone / Desktop`,body:`WebXR isn't here yet, but the 3D viewer above stays interactive — drag to orbit, click to inspect.`,ok:!0})]})]}),(0,b.jsxs)(`aside`,{className:`ar-aside`,children:[(0,b.jsx)(`div`,{className:`ar-brand`,children:w.brand}),(0,b.jsx)(`h2`,{className:`ar-name`,children:w.name}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,marginBottom:14,flexWrap:`wrap`},children:[(0,b.jsxs)(`span`,{style:{color:`#f59e0b`,fontWeight:700,fontSize:14},children:[`★ `,w.rating]}),(0,b.jsxs)(`span`,{style:{color:`#64748b`,fontSize:13},children:[`(`,w.reviews.toLocaleString(),` reviews)`]}),(0,b.jsx)(`span`,{style:{color:w.inStock?`#16a34a`:`#dc2626`,fontSize:12,fontWeight:700},children:w.inStock?`● In stock`:`● Sold out`})]}),(0,b.jsxs)(`div`,{className:`ar-price-row`,children:[(0,b.jsxs)(`div`,{className:`ar-price`,children:[`₹`,w.price.toLocaleString(`en-IN`)]}),w.oldPrice&&(0,b.jsxs)(`div`,{className:`ar-old-price`,children:[`₹`,w.oldPrice.toLocaleString(`en-IN`)]}),(0,b.jsxs)(`span`,{className:`ar-discount`,children:[`Save ₹`,(w.oldPrice-w.price).toLocaleString(`en-IN`)]})]}),(0,b.jsxs)(`div`,{style:{color:`#64748b`,fontSize:13,marginBottom:18},children:[`Ships in `,w.shipsIn,` · Free delivery on orders over ₹25,000`]}),(0,b.jsxs)(`div`,{style:{marginBottom:16},children:[(0,b.jsxs)(`div`,{className:`ar-eyebrow`,style:{marginBottom:8},children:[`Finish · `,n.label]}),(0,b.jsx)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`},children:x.map(n=>(0,b.jsx)(`button`,{type:`button`,"aria-label":n.label,"aria-pressed":n.id===e,onClick:()=>t(n.id),className:`ar-swatch-btn ${n.id===e?`is-active`:``}`,style:{background:n.swatch},title:n.label},n.id))})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:16},children:[(0,b.jsx)(`div`,{className:`ar-eyebrow`,children:`Qty`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>i(e=>Math.max(1,e-1)),className:`ar-qty-btn`,children:`−`}),(0,b.jsx)(`span`,{style:{minWidth:24,textAlign:`center`,fontWeight:800},children:r}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>i(e=>Math.min(9,e+1)),className:`ar-qty-btn`,children:`+`})]}),(0,b.jsx)(`button`,{type:`button`,onClick:F,className:`ar-btn-primary`,disabled:a,children:a?`✓ Added to cart`:`Add to cart · ₹${(w.price*r).toLocaleString(`en-IN`)}`}),(0,b.jsx)(`button`,{type:`button`,className:`ar-btn-secondary`,"data-tkx-xr-button":`ar`,children:`👓 View in your room (AR)`}),(0,b.jsx)(`p`,{className:`ar-desc`,children:w.description}),(0,b.jsx)(`ul`,{className:`ar-bullets`,children:w.bullets.map(e=>(0,b.jsx)(`li`,{children:e},e))}),(0,b.jsxs)(`details`,{className:`ar-spec`,children:[(0,b.jsx)(`summary`,{children:`Dimensions & specs`}),(0,b.jsxs)(`div`,{className:`ar-spec-grid`,children:[(0,b.jsx)(k,{label:`Width`,value:`${w.dims.w} cm`}),(0,b.jsx)(k,{label:`Depth`,value:`${w.dims.d} cm`}),(0,b.jsx)(k,{label:`Height`,value:`${w.dims.h} cm`}),(0,b.jsx)(k,{label:`Weight`,value:`${w.dims.weight} kg`})]})]}),(0,b.jsxs)(`div`,{className:`ar-tip`,children:[(0,b.jsx)(`span`,{style:{fontSize:22},children:`🎯`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{style:{fontWeight:800,color:`#0f172a`,fontSize:14,marginBottom:4},children:`Why AR previews convert`}),(0,b.jsxs)(`p`,{style:{margin:0,fontSize:13,color:`#1e40af`,lineHeight:1.55},children:[`Returns drop `,(0,b.jsx)(`strong`,{children:`30–40%`}),` when shoppers can preview furniture in their room before buying (Shopify, 2023). The AR preview above is built with `,(0,b.jsx)(`code`,{children:`tekivex-3d`}),` in roughly 60 lines of React.`]})]})]})]})]}),(0,b.jsx)(A,{}),(0,b.jsx)(_,{}),(0,b.jsxs)(`details`,{className:`ar-code-reveal`,children:[(0,b.jsx)(`summary`,{children:`Show the source for the AR preview`}),(0,b.jsx)(`pre`,{children:`import { TkxScene, TkxXRSession, TkxCard3D, TkxOrbitControls } from 'tekivex-3d';

<TkxScene fov={50} cameraPosition={[2.5, 1.6, 3.4]}>
  <TkxCard3D
    position={[0, 1.0, 0]}
    size={[1.4, 1.6]}
    color="#c69c6d"
    title="Aurora Lounge Chair"
    subtitle="Natural oak"
  />
  <TkxOrbitControls preset="orbit" autoRotate />
  <TkxXRSession
    ar vr
    onSessionStart={(mode) => console.log('entered', mode)}
  />
</TkxScene>`})]})]})]})}function D({mode:e,available:t,active:n,checking:r}){return(0,b.jsx)(`div`,{"data-tkx-xr-button":e,"aria-disabled":!t,title:r?`checking…`:t?`ready`:`not on this device`,className:`ar-action ${n?`is-active`:``} ${t?``:`is-disabled`}`,children:e===`ar`?`👓 View in room`:`🥽 Enter VR`})}function O({icon:e,title:t,body:n,ok:r}){return(0,b.jsxs)(`div`,{className:`ar-cap`,children:[(0,b.jsx)(`div`,{style:{fontSize:22,marginBottom:4},children:e}),(0,b.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#0f172a`,marginBottom:2},children:t}),(0,b.jsx)(`div`,{style:{fontSize:12,color:`#64748b`,lineHeight:1.5,marginBottom:6},children:n}),(0,b.jsx)(`div`,{style:{fontSize:11,fontWeight:700,color:r?`#16a34a`:`#94a3b8`},children:r?`● supported`:`● not detected`})]})}function k({label:e,value:t}){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`ar-eyebrow`,children:e}),(0,b.jsx)(`div`,{style:{fontWeight:700,color:`#0f172a`},children:t})]})}function A(){return(0,b.jsxs)(`section`,{style:{marginTop:36},children:[(0,b.jsx)(`h3`,{style:{margin:`0 0 14px`,fontSize:22,color:`#0f172a`,fontWeight:800,letterSpacing:`-0.01em`},children:`Recent reviews`}),(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(260px, 1fr))`,gap:14},children:[{name:`Priya R.`,rating:5,body:`90 minutes from box to assembled. The leather sling softens beautifully after a week.`},{name:`Marcus T.`,rating:5,body:`Reclines without any mechanism — design is honest. Sage finish looks nicer in person.`},{name:`Hana K.`,rating:4,body:`Comfortable, but I'd prefer the seat 2 cm deeper. Colour matched the AR preview exactly.`}].map(e=>(0,b.jsxs)(`article`,{className:`ar-review`,children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:6},children:[(0,b.jsx)(`strong`,{style:{fontSize:14,color:`#0f172a`},children:e.name}),(0,b.jsx)(`span`,{style:{color:`#f59e0b`,fontSize:13},children:`★`.repeat(e.rating)})]}),(0,b.jsx)(`p`,{style:{margin:0,fontSize:13.5,color:`#475569`,lineHeight:1.55},children:e.body})]},e.name))})]})}function j(){return(0,b.jsx)(`style`,{children:`
      .ar-grid {
        display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: 32px;
      }

      /* View tabs */
      .ar-view-tabs {
        display: flex; gap: 6px; align-items: center;
        background: #f1f5f9; border: 1px solid #e6e8ef;
        border-radius: 999px; padding: 4px;
        margin-bottom: 14px; max-width: fit-content;
        padding-right: 16px;
      }
      .ar-view-tab {
        padding: 7px 16px; border-radius: 999px;
        background: transparent; border: none; cursor: pointer;
        font-size: 13px; font-weight: 700; color: #64748b;
        font-family: inherit; transition: background 0.15s, color 0.15s;
      }
      .ar-view-tab:hover { color: #0f172a; }
      .ar-view-tab.is-active { background: #ffffff; color: #4f46e5; box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08); }

      /* Photo gallery */
      .ar-photo-main {
        position: relative; aspect-ratio: 4 / 3; border-radius: 18px; overflow: hidden;
        background: #f4f0ea; border: 1px solid #e6e8ef;
        box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
      }
      .ar-photo-main img {
        width: 100%; height: 100%; object-fit: cover; display: block;
      }
      .ar-photo-pill {
        position: absolute; top: 14px; left: 14px;
        background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(8px);
        padding: 8px 14px; border-radius: 999px;
        border: 1px solid rgba(15, 23, 42, 0.08);
        color: #0f172a; font-size: 13px; font-weight: 700;
        display: flex; gap: 10px; align-items: center;
      }
      .ar-photo-pill .ar-eyebrow { color: #64748b; }
      .ar-photo-cta {
        position: absolute; right: 14px; bottom: 14px;
        padding: 11px 18px; border-radius: 999px;
        background: linear-gradient(135deg, #4f46e5, #7c3aed);
        color: #fff; border: none; font-weight: 800; font-size: 14px;
        cursor: pointer; font-family: inherit;
        box-shadow: 0 8px 22px rgba(79, 70, 229, 0.35);
        transition: transform 0.15s;
      }
      .ar-photo-cta:hover { transform: translateY(-1px); }
      .ar-photo-thumbs {
        display: grid; grid-template-columns: repeat(4, 1fr);
        gap: 10px; margin-top: 14px;
      }
      .ar-photo-thumb {
        position: relative; padding: 0; cursor: pointer;
        border: 2px solid #e6e8ef; border-radius: 12px; overflow: hidden;
        background: #f4f0ea; aspect-ratio: 4 / 3;
        transition: border-color 0.15s, transform 0.15s;
      }
      .ar-photo-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .ar-photo-thumb span {
        position: absolute; left: 8px; bottom: 6px;
        font-size: 11px; font-weight: 700; color: #0f172a;
        background: rgba(255, 255, 255, 0.85); padding: 2px 8px; border-radius: 4px;
      }
      .ar-photo-thumb.is-active { border-color: #4f46e5; transform: translateY(-2px); }

      .ar-aside { display: flex; flex-direction: column; }
      .ar-viewer {
        position: relative; aspect-ratio: 4 / 3; border-radius: 18px; overflow: hidden;
        background: radial-gradient(ellipse at 30% 30%, #1a1633 0%, #0a0b15 70%);
        border: 1px solid #e6e8ef; box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
      }
      .ar-viewer-hud {
        position: absolute; top: 14px; left: 14px; right: 14px;
        display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
      }
      .ar-viewer-pill {
        background: rgba(10, 11, 21, 0.78); backdrop-filter: blur(8px);
        padding: 10px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.1);
        color: #fff; font-size: 13px; font-weight: 700;
        display: flex; gap: 10px; align-items: center;
      }
      .ar-actions { display: flex; gap: 8px; }
      .ar-action {
        padding: 9px 14px; border-radius: 999px;
        background: linear-gradient(135deg, rgba(0,245,212,0.18), rgba(58,134,255,0.18));
        border: 1px solid rgba(0, 245, 212, 0.4); color: #00f5d4;
        font-weight: 700; font-size: 13px; cursor: pointer; user-select: none;
        backdrop-filter: blur(8px);
      }
      .ar-action.is-active { background: linear-gradient(135deg, #00f5d4, #3a86ff); color: #0a0b15; }
      .ar-action.is-disabled { opacity: 0.4; cursor: not-allowed; }
      .ar-viewer-hint {
        position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
        background: rgba(10, 11, 21, 0.7); color: #cbd5e1; padding: 6px 14px;
        border-radius: 999px; font-size: 11.5px; border: 1px solid rgba(255,255,255,0.1);
        max-width: calc(100% - 24px); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .ar-swatch {
        width: 16px; height: 16px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.4);
      }
      .ar-eyebrow {
        font-size: 10.5px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700;
      }
      .ar-cap-row {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;
        margin-top: 16px;
      }
      .ar-cap {
        background: #f8fafc; border: 1px solid #e6e8ef; border-radius: 12px;
        padding: 14px;
      }

      .ar-brand {
        font-size: 11px; font-weight: 800; color: #4f46e5;
        text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;
      }
      .ar-name {
        margin: 0 0 10px; font-size: 30px; font-weight: 800;
        letter-spacing: -0.02em; color: #0f172a; line-height: 1.15;
      }
      .ar-price-row {
        display: flex; gap: 10px; align-items: baseline; flex-wrap: wrap; margin-bottom: 6px;
      }
      .ar-price { font-size: 30px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; }
      .ar-old-price { font-size: 16px; color: #94a3b8; text-decoration: line-through; }
      .ar-discount {
        background: #ecfccb; color: #4d7c0f;
        padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 700;
      }

      .ar-swatch-btn {
        width: 36px; height: 36px; border-radius: 50%;
        border: 3px solid transparent; cursor: pointer; padding: 0;
        outline-offset: 3px; transition: transform 0.15s, border-color 0.15s;
      }
      .ar-swatch-btn:hover { transform: scale(1.08); }
      .ar-swatch-btn.is-active { border-color: #4f46e5; }

      .ar-qty-btn {
        width: 32px; height: 32px; border-radius: 8px;
        background: #f1f5f9; border: 1px solid #e6e8ef;
        font-size: 16px; font-weight: 800; cursor: pointer; font-family: inherit;
        color: #0f172a;
      }

      .ar-btn-primary {
        width: 100%; padding: 14px; border-radius: 10px;
        background: linear-gradient(135deg, #4f46e5, #7c3aed);
        color: #fff; border: none; font-size: 15px; font-weight: 800; cursor: pointer;
        font-family: inherit; transition: transform 0.15s, opacity 0.15s;
      }
      .ar-btn-primary:hover { transform: translateY(-1px); }
      .ar-btn-primary:disabled { background: #16a34a; cursor: default; transform: none; }
      .ar-btn-secondary {
        width: 100%; padding: 12px; border-radius: 10px; margin-top: 10px;
        background: #ffffff; color: #4f46e5; border: 1.5px solid #c7d2fe;
        font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit;
      }
      .ar-btn-secondary:hover { background: #eef2ff; }

      .ar-desc { color: #475569; font-size: 14.5px; line-height: 1.65; margin: 18px 0 12px; }
      .ar-bullets { margin: 0 0 18px; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.7; }

      .ar-spec {
        background: #f8fafc; border: 1px solid #e6e8ef; border-radius: 10px;
        padding: 10px 14px; margin-bottom: 16px;
      }
      .ar-spec summary { cursor: pointer; font-weight: 700; font-size: 13.5px; color: #0f172a; }
      .ar-spec-grid {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 12px; margin-top: 10px;
      }

      .ar-tip {
        background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px;
        padding: 12px 14px; display: flex; gap: 10px; align-items: flex-start;
      }

      .ar-review {
        background: #ffffff; border: 1px solid #e6e8ef; border-radius: 12px; padding: 14px;
      }

      .ar-code-reveal {
        margin-top: 32px; background: #f8fafc; border: 1px solid #e6e8ef;
        border-radius: 12px; padding: 12px 16px;
      }
      .ar-code-reveal summary { cursor: pointer; font-weight: 700; font-size: 14px; color: #0f172a; }
      .ar-code-reveal pre {
        margin: 12px 0 0; padding: 16px; background: #0f172a; color: #e2e8f0;
        border-radius: 8px; font-size: 12.5px; line-height: 1.6; overflow-x: auto;
        font-family: ui-monospace, monospace;
      }

      @media (max-width: 920px) {
        .ar-grid { grid-template-columns: 1fr; }
      }
    `})}export{E as ARProduct};