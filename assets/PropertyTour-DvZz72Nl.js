import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{f as t,h as n}from"./vendor-react-SwSemskP.js";import{t as r}from"./Panorama360-BcGkRuMw.js";import{d as i,f as a,p as o,t as s}from"./index-CnQ23JLu.js";import{t as c}from"./ExampleShell-eSWNSZxX.js";import{t as l}from"./OpenSourceFooter-Dpp-nGLL.js";var u=e(n(),1),d=t();function f(e,t){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4096 2048" preserveAspectRatio="none">
  <defs>
    <linearGradient id="ceiling" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${t.ceilingDark}"/>
      <stop offset="100%" stop-color="${t.ceiling}"/>
    </linearGradient>
    <linearGradient id="floor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${t.floor}"/>
      <stop offset="100%" stop-color="${t.floorDark}"/>
    </linearGradient>
  </defs>
  <rect width="4096" height="700" fill="url(#ceiling)"/>
  <rect y="700" width="4096" height="700" fill="${t.wall}"/>
  <rect y="1400" width="4096" height="648" fill="url(#floor)"/>
  ${[700,1400].map(e=>`<line x1="0" y1="${e}" x2="4096" y2="${e}" stroke="${t.accent}" stroke-width="3" opacity="0.18"/>`).join(``)}
  ${[1024,2048,3072].map(e=>`<line x1="${e}" y1="700" x2="${e}" y2="1400" stroke="${t.accent}" stroke-width="2" opacity="0.12"/>`).join(``)}
  ${[{x:240,type:`window`,wide:600},{x:1280,type:`art`},{x:1696,type:`door`},{x:2304,type:`art`},{x:2848,type:`window`,wide:600},{x:3584,type:`plant`}].map(e=>e.type===`window`?`<rect x="${e.x}" y="800" width="${e.wide}" height="380" fill="${t.ceilingDark}" opacity="0.55" rx="6"/>
              <rect x="${e.x}" y="800" width="${e.wide}" height="380" fill="none" stroke="${t.accent}" stroke-width="2" opacity="0.3" rx="6"/>
              <line x1="${(e.x??0)+(e.wide??0)/2}" y1="800" x2="${(e.x??0)+(e.wide??0)/2}" y2="1180" stroke="${t.accent}" stroke-width="1" opacity="0.25"/>`:e.type===`art`?`<rect x="${e.x}" y="900" width="200" height="240" fill="${t.furniture}" rx="4"/>
              <rect x="${e.x}" y="900" width="200" height="240" fill="none" stroke="${t.accent}" stroke-width="3" opacity="0.4" rx="4"/>`:e.type===`door`?`<rect x="${e.x}" y="780" width="240" height="500" fill="${t.furniture}" opacity="0.6" rx="4"/>
              <circle cx="${e.x+220}" cy="1030" r="6" fill="${t.accent}"/>`:e.type===`plant`?`<rect x="${e.x}" y="1220" width="80" height="200" fill="${t.furniture}" rx="6"/>
              <ellipse cx="${e.x+40}" cy="1190" rx="100" ry="80" fill="${t.accent}" opacity="0.45"/>`:``).join(``)}
  ${[600,1648,2696,3744].map(e=>`<rect x="${e-180}" y="1430" width="360" height="180" fill="${t.furniture}" opacity="0.7" rx="14"/>`).join(``)}
  <text x="2048" y="1100" font-size="220" fill="${t.accent}" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" opacity="0.32">${e}</text>
  <text x="2048" y="1200" font-size="48" fill="${t.accent}" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="600" opacity="0.4" letter-spacing="6">DRAG TO LOOK</text>
</svg>`;return`data:image/svg+xml;utf8,`+encodeURIComponent(n)}var p={living:{ceiling:`#fef9f0`,ceilingDark:`#f8eedc`,wall:`#f5e6cf`,wallStripe:`#e8d4b3`,floor:`#a87b5a`,floorDark:`#7a553a`,furniture:`#5a4530`,accent:`#06b6d4`},kitchen:{ceiling:`#ffffff`,ceilingDark:`#f0f4f8`,wall:`#e7eef5`,wallStripe:`#d0dae6`,floor:`#7d92ab`,floorDark:`#56697f`,furniture:`#1e293b`,accent:`#3a86ff`},bedroom:{ceiling:`#fdf4f4`,ceilingDark:`#f5e3e7`,wall:`#ead4d8`,wallStripe:`#d9b8be`,floor:`#9b6d6e`,floorDark:`#704c4d`,furniture:`#3f2330`,accent:`#7c3aed`},balcony:{ceiling:`#bfe1f3`,ceilingDark:`#7bb8da`,wall:`#a9cee0`,wallStripe:`#86b8cf`,floor:`#8a8a8a`,floorDark:`#5a5a5a`,furniture:`#2c4759`,accent:`#f59e0b`}},m=[{id:`living`,label:`Living room`,emoji:`🛋️`,palette:p.living,hotspots:[{to:`kitchen`,label:`🍳 Kitchen`,pos:[-22,2,-10],color:`#3a86ff`},{to:`bedroom`,label:`🛏️ Bedroom`,pos:[22,2,-10],color:`#7c3aed`},{to:`balcony`,label:`🌅 Balcony`,pos:[0,4,22],color:`#f59e0b`}]},{id:`kitchen`,label:`Kitchen`,emoji:`🍳`,palette:p.kitchen,hotspots:[{to:`living`,label:`↩ Living room`,pos:[0,2,-22],color:`#06b6d4`},{to:`bedroom`,label:`🛏️ Bedroom`,pos:[22,2,-10],color:`#7c3aed`}]},{id:`bedroom`,label:`Bedroom`,emoji:`🛏️`,palette:p.bedroom,hotspots:[{to:`living`,label:`↩ Living room`,pos:[0,2,-22],color:`#06b6d4`},{to:`balcony`,label:`🌅 Balcony`,pos:[22,4,18],color:`#f59e0b`}]},{id:`balcony`,label:`Balcony`,emoji:`🌅`,palette:p.balcony,hotspots:[{to:`living`,label:`↩ Living room`,pos:[0,2,-22],color:`#06b6d4`},{to:`bedroom`,label:`🛏️ Bedroom`,pos:[-22,2,-10],color:`#7c3aed`}]}],h={title:`2-Bedroom Garden Apartment`,address:`14 Aurora Court · Bandra West, Mumbai 400050`,priceMonthly:185e3,priceTotal:285e5,beds:2,baths:2,area:1280,parking:1,available:`15 May 2026`,features:[`Floor-to-ceiling windows with city views`,`Italian marble kitchen counters`,`Smart-home wiring (HomeKit + Alexa ready)`,`Building gym, pool, and rooftop terrace`,`Two dedicated covered parking spots`,`24/7 concierge + gated security`,`Pet-friendly with a private grass run`,`Walking distance to schools and metro`],agent:{name:`Aanya Mehta`,title:`Senior listing partner`,initials:`AM`,phone:`+91 98 1234 5678`,email:`aanya@lumenrealty.example`,rating:4.9,deals:142}};function g(){s(`Property tour example — TekiVex UI`,`A real-estate listing page with an embedded 360° walkthrough — built with tekivex-3d. Drag to look around, click hotspots to teleport between rooms, and request a viewing without leaving the page.`,{keywords:`tekivex 360 example, real estate 360, virtual property tour, react webgl, panorama, immersive listing`});let[e,t]=(0,u.useState)(`living`),n=m.find(t=>t.id===e),p=(0,u.useMemo)(()=>f(n.label,n.palette),[n.id,n.label,n.palette]),[g,x]=(0,u.useState)(20),[S,C]=(0,u.useState)(20),[w,T]=(0,u.useState)(8.5),E=(0,u.useMemo)(()=>{let e=h.priceTotal*(1-g/100),t=w/100/12,n=S*12;if(t===0)return Math.round(e/n);let r=e*t*(1+t)**+n/((1+t)**+n-1);return Math.round(r)},[g,S,w]);return(0,d.jsxs)(c,{title:`Garden apartment in Bandra`,eyebrow:`Use case · Real estate`,description:`A complete property listing with an embedded 360° walkthrough — the same shape every real-estate, hotel, or venue site needs. Drag to look around, click a glowing hotspot to teleport between rooms, request a viewing without leaving the page.`,sourceUrl:`https://github.com/007krcs/tekivex-ui/blob/master/landing/src/pages/examples/PropertyTour.tsx`,surface:`light`,children:[(0,d.jsx)(b,{}),(0,d.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`24px 24px 64px`},children:[(0,d.jsxs)(`header`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) auto`,gap:18,alignItems:`flex-end`,flexWrap:`wrap`,marginBottom:18},className:`prop-header`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`div`,{style:{fontSize:12,fontWeight:700,color:`#06b6d4`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:6},children:[`For sale · Available `,h.available]}),(0,d.jsx)(`h2`,{style:{margin:`0 0 4px`,fontSize:`clamp(22px, 3vw, 32px)`,fontWeight:800,color:`#0f172a`,letterSpacing:`-0.02em`},children:h.title}),(0,d.jsx)(`div`,{style:{color:`#475569`,fontSize:15},children:h.address})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsxs)(`div`,{style:{fontSize:28,fontWeight:800,color:`#0f172a`,letterSpacing:`-0.02em`},children:[`₹`,h.priceTotal.toLocaleString(`en-IN`)]}),(0,d.jsxs)(`div`,{style:{fontSize:13,color:`#64748b`},children:[`or ₹`,h.priceMonthly.toLocaleString(`en-IN`),`/mo rent`]})]})]}),(0,d.jsxs)(`div`,{className:`prop-stats`,children:[(0,d.jsx)(_,{icon:`🛏️`,label:`Bedrooms`,value:String(h.beds)}),(0,d.jsx)(_,{icon:`🛁`,label:`Bathrooms`,value:String(h.baths)}),(0,d.jsx)(_,{icon:`📐`,label:`Carpet area`,value:`${h.area} sq ft`}),(0,d.jsx)(_,{icon:`🚗`,label:`Parking`,value:`${h.parking} spot`}),(0,d.jsx)(_,{icon:`🏛️`,label:`Year built`,value:`2024`})]}),(0,d.jsxs)(`div`,{className:`prop-layout`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`div`,{className:`prop-tour-shell`,children:[(0,d.jsxs)(o,{fov:75,cameraPosition:[0,0,.01],background:`transparent`,children:[(0,d.jsx)(r,{src:p,fadeMs:500,gyro:!0}),(0,d.jsx)(i,{count:400,volume:[40,20,40],driftSpeed:.1,size:.02}),n.hotspots.map(e=>(0,d.jsx)(a,{position:e.pos,label:e.label,color:e.color,size:1.4,pulseSpeed:2,onClick:()=>t(e.to)},`${n.id}-${e.to}`))]}),(0,d.jsxs)(`div`,{className:`prop-tour-hud`,children:[(0,d.jsxs)(`div`,{className:`prop-tour-hud-card`,children:[(0,d.jsx)(`span`,{className:`prop-eyebrow`,children:`Now viewing`}),(0,d.jsxs)(`span`,{className:`prop-tour-room`,children:[n.emoji,` `,n.label]})]}),(0,d.jsx)(`button`,{type:`button`,className:`prop-fullscreen-btn`,onClick:()=>{let e=document.querySelector(`.prop-tour-shell`);document.fullscreenElement?document.exitFullscreen():e?.requestFullscreen?.()},children:`⛶ Fullscreen`})]}),(0,d.jsx)(`div`,{className:`prop-tour-hint`,"aria-hidden":`true`,children:`🖱️ drag to look · 🎯 click a glowing dot to enter that room · 📱 tilt your phone`})]}),(0,d.jsx)(`div`,{className:`prop-rooms`,children:m.map(n=>(0,d.jsxs)(`button`,{type:`button`,onClick:()=>t(n.id),"aria-pressed":n.id===e,className:`prop-room-btn ${n.id===e?`is-active`:``}`,style:{background:`linear-gradient(180deg, ${n.palette.ceiling} 0%, ${n.palette.ceilingDark} 30%, ${n.palette.wall} 30%, ${n.palette.wall} 70%, ${n.palette.floor} 70%, ${n.palette.floorDark} 100%)`},children:[(0,d.jsx)(`span`,{className:`prop-room-emoji`,style:{color:n.palette.accent},children:n.emoji}),(0,d.jsx)(`span`,{children:n.label})]},n.id))}),(0,d.jsxs)(`section`,{style:{marginTop:36},children:[(0,d.jsx)(`h3`,{style:{margin:`0 0 10px`,fontSize:22,color:`#0f172a`,fontWeight:800,letterSpacing:`-0.01em`},children:`About this home`}),(0,d.jsx)(`p`,{style:{margin:`0 0 16px`,color:`#475569`,fontSize:15.5,lineHeight:1.7},children:`A bright, garden-facing apartment on the second floor of Aurora Court, with two bedrooms, two full bathrooms, an open kitchen-living plan, and a 90 sq ft balcony that opens onto the garden. The unit was completely renovated in 2024 — Italian marble counters, oak flooring, smart-home wiring throughout — and is offered furnished or unfurnished.`}),(0,d.jsx)(`div`,{className:`prop-features`,children:h.features.map(e=>(0,d.jsxs)(`div`,{className:`prop-feature`,children:[(0,d.jsx)(`span`,{style:{color:`#06b6d4`},children:`✓`}),(0,d.jsx)(`span`,{children:e})]},e))})]}),(0,d.jsxs)(`section`,{className:`prop-card`,style:{marginTop:28},children:[(0,d.jsx)(`h3`,{style:{margin:`0 0 10px`,fontSize:18,color:`#0f172a`,fontWeight:800},children:`Estimate your monthly payment`}),(0,d.jsxs)(`div`,{className:`prop-calc-grid`,children:[(0,d.jsx)(v,{label:`Down payment`,value:g,min:0,max:50,step:1,unit:`%`,onChange:x}),(0,d.jsx)(v,{label:`Loan term`,value:S,min:5,max:30,step:1,unit:` yr`,onChange:C}),(0,d.jsx)(v,{label:`Interest rate`,value:w,min:5,max:14,step:.1,unit:`%`,onChange:T,decimals:1})]}),(0,d.jsxs)(`div`,{className:`prop-calc-result`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`prop-eyebrow`,children:`Estimated monthly`}),(0,d.jsxs)(`div`,{style:{fontSize:28,fontWeight:800,color:`#4f46e5`,letterSpacing:`-0.02em`},children:[`₹`,E.toLocaleString(`en-IN`)]})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsx)(`span`,{className:`prop-eyebrow`,children:`Down payment`}),(0,d.jsxs)(`div`,{style:{fontWeight:700,color:`#0f172a`},children:[`₹`,Math.round(h.priceTotal*g/100).toLocaleString(`en-IN`)]})]})]}),(0,d.jsx)(`p`,{style:{margin:`12px 0 0`,fontSize:12,color:`#94a3b8`},children:`Estimate only. Doesn't include taxes, insurance, or maintenance fees.`})]})]}),(0,d.jsxs)(`aside`,{className:`prop-aside`,children:[(0,d.jsxs)(`div`,{className:`prop-card`,children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,marginBottom:14},children:[(0,d.jsx)(`div`,{className:`prop-avatar`,children:h.agent.initials}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontWeight:800,color:`#0f172a`},children:h.agent.name}),(0,d.jsx)(`div`,{style:{fontSize:12,color:`#64748b`},children:h.agent.title}),(0,d.jsxs)(`div`,{style:{fontSize:12,color:`#f59e0b`,marginTop:2},children:[`★ `,h.agent.rating,` · `,h.agent.deals,` deals closed`]})]})]}),(0,d.jsxs)(`a`,{href:`tel:${h.agent.phone}`,className:`prop-btn-secondary`,children:[`📞 `,h.agent.phone]}),(0,d.jsxs)(`a`,{href:`mailto:${h.agent.email}`,className:`prop-btn-secondary`,style:{marginTop:8},children:[`✉ `,h.agent.email]})]}),(0,d.jsx)(y,{propertyTitle:h.title}),(0,d.jsx)(`div`,{className:`prop-card`,style:{background:`#eff6ff`,borderColor:`#bfdbfe`},children:(0,d.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`flex-start`},children:[(0,d.jsx)(`span`,{style:{fontSize:22},children:`💡`}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontWeight:800,color:`#0f172a`,fontSize:14,marginBottom:4},children:`Why this listing has a tour`}),(0,d.jsxs)(`p`,{style:{margin:0,fontSize:13,color:`#1e40af`,lineHeight:1.55},children:[`Listings with a 360° walkthrough convert `,(0,d.jsx)(`strong`,{children:`3.4× higher`}),` than photo-only listings (NAR, 2024). The tour above is built with`,` `,(0,d.jsx)(`code`,{style:{background:`rgba(79, 70, 229, 0.08)`,padding:`0 4px`,borderRadius:3},children:`tekivex-3d`}),` `,`in ~80 lines of React.`]})]})]})})]})]}),(0,d.jsx)(l,{}),(0,d.jsxs)(`details`,{className:`prop-code-reveal`,children:[(0,d.jsx)(`summary`,{children:`Show the source for the tour`}),(0,d.jsx)(`pre`,{children:`import { TkxScene, TkxPanorama360, TkxHotspot } from 'tekivex-3d';

const ROOMS = [
  { id: 'living',  src: withBase('/living.jpg'),  hotspots: [{ to: 'kitchen', pos: [-22, 2, -10], color: '#06b6d4', label: '🍳 Kitchen' }] },
  { id: 'kitchen', src: withBase('/kitchen.jpg'), hotspots: [{ to: 'living',  pos: [0, 2, -22], color: '#4f46e5', label: '↩ Living room' }] },
];

function Tour() {
  const [activeId, setActiveId] = useState('living');
  const active = ROOMS.find((r) => r.id === activeId);
  return (
    <TkxScene fov={75} cameraPosition={[0, 0, 0.01]}>
      <TkxPanorama360 src={active.src} gyro />
      {active.hotspots.map((h) => (
        <TkxHotspot
          key={h.to}
          position={h.pos}
          label={h.label}
          color={h.color}
          onClick={() => setActiveId(h.to)}
        />
      ))}
    </TkxScene>
  );
}`})]})]})]})}function _({icon:e,label:t,value:n}){return(0,d.jsxs)(`div`,{className:`prop-stat`,children:[(0,d.jsx)(`div`,{style:{fontSize:22},children:e}),(0,d.jsx)(`div`,{style:{fontWeight:800,color:`#0f172a`},children:n}),(0,d.jsx)(`div`,{style:{fontSize:11,color:`#64748b`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:t})]})}function v({label:e,value:t,min:n,max:r,step:i,unit:a,onChange:o,decimals:s=0}){return(0,d.jsxs)(`label`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,d.jsxs)(`span`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:12,color:`#475569`,fontWeight:700},children:[(0,d.jsx)(`span`,{children:e}),(0,d.jsxs)(`span`,{style:{color:`#0f172a`},children:[t.toFixed(s),a]})]}),(0,d.jsx)(`input`,{type:`range`,min:n,max:r,step:i,value:t,onChange:e=>o(Number(e.target.value)),style:{accentColor:`#4f46e5`}})]})}function y({propertyTitle:e}){let[t,n]=(0,u.useState)(``),[r,i]=(0,u.useState)(``),[a,o]=(0,u.useState)(``),[s,c]=(0,u.useState)(!1);function l(e){e.preventDefault(),!(!t.trim()||!r.trim()||!a)&&c(!0)}return s?(0,d.jsxs)(`div`,{className:`prop-card`,style:{background:`#ecfdf5`,borderColor:`#bbf7d0`},children:[(0,d.jsx)(`div`,{style:{fontSize:28,marginBottom:6},children:`✅`}),(0,d.jsx)(`div`,{style:{fontWeight:800,color:`#065f46`,marginBottom:4},children:`Visit request sent`}),(0,d.jsxs)(`p`,{style:{margin:0,fontSize:13,color:`#047857`,lineHeight:1.55},children:[`We'll text `,r,` within 30 minutes to confirm your viewing for `,e,` on `,a,`.`]})]}):(0,d.jsxs)(`form`,{onSubmit:l,className:`prop-card`,"aria-label":`Schedule a viewing`,children:[(0,d.jsx)(`div`,{style:{fontWeight:800,color:`#0f172a`,marginBottom:10,fontSize:15},children:`Schedule a viewing`}),(0,d.jsx)(`input`,{value:t,onChange:e=>n(e.target.value),placeholder:`Your full name`,required:!0,className:`prop-input`}),(0,d.jsx)(`input`,{value:r,onChange:e=>i(e.target.value),placeholder:`+91 phone number`,required:!0,className:`prop-input`,style:{marginTop:8}}),(0,d.jsx)(`input`,{type:`date`,value:a,onChange:e=>o(e.target.value),required:!0,className:`prop-input`,style:{marginTop:8}}),(0,d.jsx)(`button`,{type:`submit`,className:`prop-btn-primary`,style:{marginTop:10},children:`Request a visit`}),(0,d.jsx)(`p`,{style:{margin:`8px 0 0`,fontSize:11,color:`#94a3b8`,lineHeight:1.5},children:`Mock form — submission stored locally only. Wire to your CRM in production.`})]})}function b(){return(0,d.jsx)(`style`,{children:`
      .prop-stats {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 10px; margin-bottom: 24px;
      }
      .prop-stat {
        background: #f8fafc; border: 1px solid #e6e8ef; border-radius: 10px;
        padding: 12px; display: flex; flex-direction: column; align-items: center; gap: 4px;
      }
      .prop-layout {
        display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 24px;
      }
      .prop-aside { display: flex; flex-direction: column; gap: 16px; }
      .prop-card {
        background: #ffffff; border: 1px solid #e6e8ef; border-radius: 14px;
        padding: 18px; box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
      }
      .prop-tour-shell {
        position: relative; aspect-ratio: 16 / 10; border-radius: 14px; overflow: hidden;
        border: 1px solid #e6e8ef; background: #0a0b15; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
      }
      .prop-tour-hud {
        position: absolute; top: 14px; left: 14px; right: 14px;
        display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;
        pointer-events: none;
      }
      .prop-tour-hud > * { pointer-events: auto; }
      .prop-tour-hud-card {
        background: rgba(10, 11, 21, 0.78); backdrop-filter: blur(8px);
        padding: 8px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);
        display: flex; flex-direction: column; gap: 2px;
      }
      .prop-eyebrow {
        font-size: 10.5px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700;
      }
      .prop-tour-room { color: #fff; font-weight: 800; font-size: 14px; }
      .prop-fullscreen-btn {
        padding: 8px 14px; border-radius: 999px; font-size: 12px; font-weight: 700; cursor: pointer;
        background: rgba(10, 11, 21, 0.78); color: #06b6d4; border: 1px solid rgba(6, 182, 212, 0.4);
        font-family: inherit;
      }
      .prop-tour-hint {
        position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
        background: rgba(10, 11, 21, 0.7); color: #cbd5e1; padding: 6px 14px;
        border-radius: 999px; font-size: 11.5px; border: 1px solid rgba(255,255,255,0.1);
        white-space: nowrap; max-width: calc(100% - 24px);
        overflow: hidden; text-overflow: ellipsis;
      }
      .prop-rooms {
        display: grid; grid-template-columns: repeat(${m.length}, 1fr); gap: 10px;
        margin-top: 14px;
      }
      .prop-room-btn {
        position: relative; padding: 0; border-radius: 10px; overflow: hidden;
        cursor: pointer; background: #f8fafc; aspect-ratio: 16 / 10;
        border: 2px solid #e6e8ef; transition: border-color 0.15s, transform 0.15s;
        font-family: inherit;
      }
      .prop-room-btn {
        display: flex; flex-direction: column; align-items: flex-start;
        justify-content: flex-end; padding: 14px;
        color: #1e293b; gap: 4px;
      }
      .prop-room-btn > span:last-child {
        font-size: 13px; font-weight: 800;
        text-shadow: 0 1px 2px rgba(255,255,255,0.5);
      }
      .prop-room-emoji {
        font-size: 26px; line-height: 1;
        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      }
      .prop-room-btn.is-active {
        border-color: #06b6d4; transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(6, 182, 212, 0.18);
      }
      .prop-features {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px 16px;
        margin-top: 12px;
      }
      .prop-feature {
        display: flex; gap: 8px; align-items: flex-start;
        font-size: 14px; color: #1e293b;
      }
      .prop-calc-grid {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px;
        margin-bottom: 14px;
      }
      .prop-calc-result {
        display: flex; justify-content: space-between; align-items: flex-end;
        padding: 12px 14px; border-radius: 10px;
        background: linear-gradient(135deg, #eef2ff, #ecfeff);
        border: 1px solid #c7d2fe;
      }
      .prop-avatar {
        width: 52px; height: 52px; border-radius: 50%;
        background: linear-gradient(135deg, #4f46e5, #06b6d4); color: #fff;
        display: grid; place-items: center; font-weight: 800; font-size: 18px;
      }
      .prop-input {
        width: 100%; padding: 10px 12px; border-radius: 8px;
        border: 1px solid #e6e8ef; font-size: 14px; font-family: inherit;
        color: #0f172a; background: #fff;
      }
      .prop-btn-primary {
        display: block; width: 100%; padding: 10px 14px; border-radius: 8px;
        background: linear-gradient(135deg, #4f46e5, #06b6d4); color: #fff;
        border: none; font-size: 14px; font-weight: 700; cursor: pointer;
        font-family: inherit; text-align: center; text-decoration: none;
      }
      .prop-btn-secondary {
        display: block; width: 100%; padding: 9px 14px; border-radius: 8px;
        background: #f8fafc; color: #1e293b; border: 1px solid #e6e8ef;
        font-size: 13px; font-weight: 600; cursor: pointer;
        font-family: inherit; text-align: center; text-decoration: none;
      }
      .prop-code-reveal {
        margin-top: 32px; background: #f8fafc; border: 1px solid #e6e8ef;
        border-radius: 12px; padding: 12px 16px;
      }
      .prop-code-reveal summary { cursor: pointer; font-weight: 700; font-size: 14px; color: #0f172a; }
      .prop-code-reveal pre {
        margin: 12px 0 0; padding: 16px; background: #0f172a; color: #e2e8f0;
        border-radius: 8px; font-size: 12.5px; line-height: 1.6; overflow-x: auto;
        font-family: ui-monospace, monospace;
      }
      @media (max-width: 920px) {
        .prop-layout { grid-template-columns: 1fr; }
        .prop-rooms { grid-template-columns: repeat(2, 1fr) !important; }
        .prop-header { grid-template-columns: 1fr !important; }
      }
    `})}export{g as PropertyTour};