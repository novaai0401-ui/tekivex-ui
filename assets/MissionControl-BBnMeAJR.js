import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{f as t,h as n}from"./vendor-react-SwSemskP.js";import{S as r,T as i,_ as a,b as o,t as s,v as c,w as l,y as u}from"./index-CnQ23JLu.js";import{t as d}from"./ExampleShell-eSWNSZxX.js";import{t as f}from"./OpenSourceFooter-Dpp-nGLL.js";var p=e(n(),1),m=t(),h=[{code:`us-east-1`,flag:`🇺🇸`,load:38,rps:4218,latency:42},{code:`us-west-2`,flag:`🇺🇸`,load:51,rps:3107,latency:36},{code:`eu-west-1`,flag:`🇮🇪`,load:67,rps:5823,latency:28},{code:`eu-central-1`,flag:`🇩🇪`,load:44,rps:2912,latency:24},{code:`ap-south-1`,flag:`🇮🇳`,load:71,rps:6402,latency:31},{code:`ap-northeast-1`,flag:`🇯🇵`,load:29,rps:1830,latency:38},{code:`ap-southeast-1`,flag:`🇸🇬`,load:56,rps:3404,latency:22},{code:`sa-east-1`,flag:`🇧🇷`,load:33,rps:1612,latency:87}],g=[{hash:`a3f2c1`,author:`mira`,msg:`fix(billing): clamp invoice rounding to 2 dp`,mins:2},{hash:`e9b71d`,author:`rohan`,msg:`feat(api): paginated /v2/sessions endpoint`,mins:7},{hash:`2c8f04`,author:`aanya`,msg:`chore(deps): bump three.js → 0.169 (+ types)`,mins:18},{hash:`1d7e9a`,author:`jin`,msg:`fix(charts): correct y-axis flip on negative values`,mins:24},{hash:`88ab53`,author:`lila`,msg:`feat(panel): add Holographic Gauge auto-color tone`,mins:41}];function _(){s(`Mission control example — TekiVex UI`,`A live-ops dashboard built with the tekivex-ui holographic surfaces — KPI tiles, gauges, a deploy pipeline, an alert feed terminal, regional capacity, and a commit stream that updates in real time.`,{keywords:`tekivex holographic example, ops dashboard, NOC ui, sre dashboard, live monitoring, holographic ui`});let[e,t]=(0,p.useState)(new Date().toLocaleTimeString(`en-IN`,{hour12:!1})),[n,a]=(0,p.useState)(34),[u,_]=(0,p.useState)(61),[D,O]=(0,p.useState)(72),[k,A]=(0,p.useState)(.18),[j,M]=(0,p.useState)(124820),[N,P]=(0,p.useState)(2418),[F,I]=(0,p.useState)(h),[L,R]=(0,p.useState)([{name:`Lint`,status:`done`,pct:100},{name:`Type-check`,status:`done`,pct:100},{name:`Test`,status:`done`,pct:100},{name:`Build`,status:`running`,pct:64},{name:`Deploy`,status:`pending`,pct:0},{name:`Smoke`,status:`pending`,pct:0}]),[z,B]=(0,p.useState)(()=>[{id:1,sev:`info`,text:`Deploy pipeline started — build #4218`,at:`−42s`},{id:2,sev:`warn`,text:`eu-west-1 load 67% (threshold 70%)`,at:`−1m 12s`},{id:3,sev:`info`,text:`Auto-scaler added 2 replicas in ap-south-1`,at:`−2m 44s`},{id:4,sev:`crit`,text:`sa-east-1 latency 87ms (P99 budget 80ms)`,at:`−4m 21s`},{id:5,sev:`info`,text:`New commit a3f2c1 by mira`,at:`−5m 02s`}]),[V]=(0,p.useState)(g),H=(0,p.useRef)(0);return(0,p.useEffect)(()=>{let e=setInterval(()=>{H.current+=1;let e=(e,t)=>Math.max(0,Math.min(100,e+(Math.random()-.5)*t));a(t=>e(t,8)),_(t=>e(t,4)),O(t=>e(t,12)),A(e=>Math.max(0,Math.min(2,e+(Math.random()-.5)*.08))),M(e=>e+Math.round(Math.random()*180)),P(e=>Math.max(1e3,e+Math.round((Math.random()-.4)*18))),I(t=>t.map(t=>({...t,load:e(t.load,6),rps:Math.max(0,t.rps+Math.round((Math.random()-.4)*80)),latency:Math.max(8,t.latency+Math.round((Math.random()-.5)*4))}))),t(new Date().toLocaleTimeString(`en-IN`,{hour12:!1})),R(e=>T(e)),H.current%6==0&&B(e=>[w(e.length+1),...e].slice(0,12))},1500);return()=>clearInterval(e)},[]),(0,m.jsxs)(d,{title:`Mission control`,eyebrow:`Use case · Live ops`,description:`A NOC / SRE-style live operations dashboard built entirely with the tekivex-ui holographic surfaces. Every tile updates in real time. Drop this layout in for SaaS analytics, observability, IoT monitoring, trading terminals, or live event scoreboards.`,sourceUrl:`https://github.com/007krcs/getekivex-ui/blob/master/landing/src/pages/examples/MissionControl.tsx`,surface:`light`,children:[(0,m.jsx)(E,{}),(0,m.jsxs)(`div`,{className:`mc-stage`,children:[(0,m.jsxs)(`div`,{className:`mc-grid`,children:[(0,m.jsxs)(`header`,{className:`mc-header`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`mc-status-dot`}),(0,m.jsx)(`span`,{className:`mc-eyebrow`,children:`Operations · live`}),(0,m.jsx)(`h2`,{className:`mc-title`,children:`Lumen Field — global ops`})]}),(0,m.jsxs)(`div`,{className:`mc-clock`,children:[(0,m.jsx)(`span`,{className:`mc-eyebrow`,children:`UTC+05:30`}),(0,m.jsx)(`span`,{className:`mc-now`,children:e})]})]}),(0,m.jsx)(v,{accent:`#06b6d4`,label:`Active users`,value:N.toLocaleString(),delta:`+18 / min`}),(0,m.jsx)(v,{accent:`#22c55e`,label:`Revenue today`,value:`₹${j.toLocaleString(`en-IN`)}`,delta:`+₹820 / min`}),(0,m.jsx)(v,{accent:`#3a86ff`,label:`Requests / sec`,value:Math.round(F.reduce((e,t)=>e+t.rps,0)/1e3)+`k`,delta:`across 8 regions`}),(0,m.jsx)(v,{accent:k>1?`#ef4444`:k>.5?`#f59e0b`:`#22c55e`,label:`Error rate`,value:`${k.toFixed(2)}%`,delta:`P99 = 42ms`}),(0,m.jsx)(l,{title:`System pressure`,subtitle:`rolling 60s average`,badge:(0,m.jsxs)(r,{size:`sm`,tone:n>80?`danger`:n>60?`warning`:`success`,children:[Math.round(n),`% CPU`]}),children:(0,m.jsxs)(`div`,{className:`mc-gauges`,children:[(0,m.jsx)(y,{value:n,accent:`#06b6d4`,label:`CPU`}),(0,m.jsx)(y,{value:u,accent:`#7c3aed`,label:`MEM`}),(0,m.jsx)(y,{value:D,accent:`#f59e0b`,label:`NET`})]})}),(0,m.jsx)(c,{accent:`#22c55e`,header:(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,width:`100%`,alignItems:`center`},children:[(0,m.jsx)(`strong`,{style:{color:`#fff`,fontSize:14},children:`Deploy pipeline`}),(0,m.jsx)(`span`,{style:{color:`#22c55e`,fontSize:12,fontWeight:700},children:`build #4218`})]}),footer:(0,m.jsx)(`span`,{style:{color:`#94a3b8`,fontSize:12},children:`triggered by mira · master@a3f2c1`}),children:(0,m.jsx)(`div`,{style:{padding:16,display:`flex`,flexDirection:`column`,gap:14},children:L.map(e=>(0,m.jsx)(b,{step:e},e.name))})}),(0,m.jsx)(l,{title:`Alert feed`,subtitle:`live tail`,badge:(0,m.jsxs)(r,{size:`sm`,tone:z.some(e=>e.sev===`crit`)?`danger`:`info`,children:[z.length,` active`]}),children:(0,m.jsx)(o,{accent:`#ef4444`,prompt:``,height:300,typeSpeed:0,maxLines:z.length+2,lines:z.map(e=>`${C(e.sev)} ${e.text}  ${e.at}`)})}),(0,m.jsx)(l,{title:`Regional capacity`,subtitle:`8 regions · auto-scaling`,badge:(0,m.jsxs)(r,{size:`sm`,tone:`info`,children:[F.filter(e=>e.load>70).length,` hot`]}),children:(0,m.jsx)(`div`,{className:`mc-regions`,children:F.map(e=>(0,m.jsx)(x,{region:e},e.code))})}),(0,m.jsx)(l,{title:`Commit stream`,subtitle:`last 24 hours`,badge:(0,m.jsx)(r,{size:`sm`,tone:`success`,children:`5 today`}),children:(0,m.jsx)(`div`,{className:`mc-commits`,children:V.map(e=>(0,m.jsxs)(`div`,{className:`mc-commit`,children:[(0,m.jsx)(`span`,{className:`mc-commit-hash`,children:e.hash}),(0,m.jsx)(`span`,{className:`mc-commit-msg`,children:e.msg}),(0,m.jsxs)(`span`,{className:`mc-commit-meta`,children:[e.author,` · `,e.mins,`m ago`]})]},e.hash))})}),(0,m.jsxs)(i,{style:{padding:22},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:14},children:[(0,m.jsx)(`strong`,{style:{color:`#fff`,fontSize:15},children:`SLO budget`}),(0,m.jsx)(r,{size:`sm`,tone:`success`,children:`healthy`})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:14},children:[(0,m.jsx)(S,{label:`Availability`,value:.998-k*.001,target:.995,accent:`#22c55e`}),(0,m.jsx)(S,{label:`Latency P95 < 80ms`,value:.92+Math.random()*.05,target:.9,accent:`#06b6d4`}),(0,m.jsx)(S,{label:`Error rate < 1%`,value:1-k/100,target:.99,accent:`#7c3aed`})]})]})]}),(0,m.jsxs)(`div`,{className:`mc-tip`,children:[(0,m.jsx)(`span`,{style:{fontSize:22},children:`📊`}),(0,m.jsxs)(`p`,{style:{margin:0},children:[(0,m.jsx)(`strong`,{children:`Why a holographic NOC?`}),` Tightly-packed glow + scan-line motifs map directly to the cognitive model operators already have for "live" data. Same vocabulary works for SaaS observability, trading floors, IoT monitoring, sports scoreboards, mission rooms.`]})]}),(0,m.jsx)(f,{})]})]})}function v({accent:e,label:t,value:n,delta:r}){return(0,m.jsxs)(`div`,{className:`mc-kpi`,style:{borderColor:e+`55`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:6},children:[(0,m.jsx)(`span`,{className:`mc-eyebrow`,style:{color:e},children:t}),(0,m.jsx)(`span`,{className:`mc-pulse-dot`,style:{background:e,boxShadow:`0 0 8px ${e}`}})]}),(0,m.jsx)(`div`,{className:`mc-kpi-value`,children:n}),(0,m.jsx)(`div`,{className:`mc-kpi-delta`,children:r})]})}function y({value:e,accent:t,label:n}){return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,m.jsx)(a,{value:Math.round(e),size:120,accent:t}),(0,m.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:t,letterSpacing:`0.06em`},children:n})]})}function b({step:e}){let[t,n]=e.status===`done`?[`#22c55e`,`✓`]:e.status===`running`?[`#06b6d4`,`●`]:e.status===`failed`?[`#ef4444`,`✗`]:[`#475569`,`○`];return(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:12.5,color:`#cbd5e1`,marginBottom:4},children:[(0,m.jsxs)(`span`,{children:[(0,m.jsx)(`span`,{style:{color:t,marginRight:8,fontWeight:800},children:n}),e.name]}),(0,m.jsxs)(`span`,{style:{color:`#94a3b8`},children:[Math.round(e.pct),`%`]})]}),(0,m.jsx)(u,{value:e.pct/100,accent:t,height:6,shimmer:e.status===`running`})]})}function x({region:e}){let t=e.load>80?`danger`:e.load>65?`warning`:e.load>35?`info`:`success`,n=t===`success`?`#22c55e`:t===`info`?`#3a86ff`:t===`warning`?`#f59e0b`:`#ef4444`;return(0,m.jsxs)(`div`,{className:`mc-region`,children:[(0,m.jsx)(`span`,{style:{fontSize:18},children:e.flag}),(0,m.jsx)(`span`,{style:{fontFamily:`ui-monospace, monospace`,fontSize:12,color:`#fff`,minWidth:110},children:e.code}),(0,m.jsx)(`div`,{style:{flex:1},children:(0,m.jsx)(u,{value:e.load/100,accent:n,height:5,shimmer:!1})}),(0,m.jsxs)(`span`,{style:{fontSize:11,color:`#94a3b8`,minWidth:64,textAlign:`right`},children:[e.rps.toLocaleString(),` rps`]}),(0,m.jsxs)(`span`,{style:{fontSize:11,color:n,minWidth:50,textAlign:`right`},children:[e.latency,`ms`]})]})}function S({label:e,value:t,target:n,accent:r}){let i=Math.max(0,Math.min(1,t)),a=i>=n;return(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:12,color:`#cbd5e1`,marginBottom:4},children:[(0,m.jsx)(`span`,{children:e}),(0,m.jsxs)(`span`,{style:{color:a?`#22c55e`:`#ef4444`},children:[(i*100).toFixed(2),`% `,a?`✓`:`⚠`]})]}),(0,m.jsx)(u,{value:i,accent:a?r:`#ef4444`,height:6})]})}function C(e){return e===`crit`?`[CRIT]`:e===`warn`?`[WARN]`:`[INFO]`}function w(e){let t=[{sev:`info`,text:`Cache warm: hit-ratio 96.4%`},{sev:`info`,text:`Auto-scaler removed 1 replica in ap-northeast-1`},{sev:`warn`,text:`us-west-2 P99 latency exceeded 60ms threshold`},{sev:`info`,text:`New session count baseline updated`},{sev:`warn`,text:`Queue depth 1.4k in eu-west-1, scaling up`},{sev:`crit`,text:`Pager: ap-south-1 disk pressure 92%`},{sev:`info`,text:`Deploy step Build complete (62.3s)`},{sev:`info`,text:`Connection pool resized: 240 → 320`}],n=t[e%t.length];return{id:e,sev:n.sev,text:n.text,at:`just now`}}function T(e){let t=e.findIndex(e=>e.status===`running`);if(t===-1)return e;let n=e.slice(),r={...n[t]};if(r.pct=Math.min(100,r.pct+Math.random()*6),r.pct>=100){if(r.status=`done`,n[t]=r,t+1<n.length){let e={...n[t+1],status:`running`,pct:1};n[t+1]=e}}else n[t]=r;return n}function E(){return(0,m.jsx)(`style`,{children:`
      .mc-stage {
        max-width: 1280px; margin: 24px auto 0; padding: 0 24px 64px;
      }
      .mc-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
        background: radial-gradient(ellipse at top, #1a1633 0%, #060716 80%);
        padding: 24px; border-radius: 18px;
        border: 1px solid rgba(196, 168, 255, 0.18);
        box-shadow: 0 12px 50px rgba(124, 58, 237, 0.18);
      }
      .mc-header {
        grid-column: 1 / -1;
        display: flex; justify-content: space-between; align-items: center;
        flex-wrap: wrap; gap: 12px;
      }
      .mc-status-dot {
        display: inline-block; width: 10px; height: 10px; border-radius: 50%;
        background: #22c55e; box-shadow: 0 0 8px #22c55e;
        animation: mc-pulse 1.6s ease-in-out infinite; margin-right: 8px;
        vertical-align: middle;
      }
      @keyframes mc-pulse {
        0%, 100% { opacity: 1; }
        50%      { opacity: 0.4; }
      }
      .mc-eyebrow {
        font-size: 10.5px; color: #94a3b8;
        text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700;
      }
      .mc-title { margin: 4px 0 0; color: #fff; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
      .mc-clock { text-align: right; font-family: ui-monospace, monospace; }
      .mc-now { display: block; color: #06b6d4; font-size: 22px; font-weight: 700; }

      .mc-kpi {
        background: rgba(8, 10, 25, 0.6); border: 1px solid;
        border-radius: 12px; padding: 14px;
      }
      .mc-kpi-value { color: #fff; font-size: 26px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; }
      .mc-kpi-delta { color: #94a3b8; font-size: 12px; margin-top: 2px; }
      .mc-pulse-dot {
        width: 8px; height: 8px; border-radius: 50%;
        animation: mc-pulse 1.6s ease-in-out infinite;
      }

      .mc-gauges {
        display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
      }

      .mc-regions {
        display: flex; flex-direction: column; gap: 8px;
      }
      .mc-region {
        display: flex; align-items: center; gap: 10px;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
      }

      .mc-commits {
        display: flex; flex-direction: column; gap: 8px;
      }
      .mc-commit {
        display: grid; grid-template-columns: 60px 1fr auto; gap: 10px; align-items: baseline;
        padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
      }
      .mc-commit-hash {
        font-family: ui-monospace, monospace; font-size: 11px;
        color: #c4a8ff; letter-spacing: 0.04em;
      }
      .mc-commit-msg { font-size: 13px; color: #e2e8f0; }
      .mc-commit-meta { font-size: 11px; color: #94a3b8; white-space: nowrap; }

      .mc-tip {
        margin-top: 18px; padding: 14px 18px;
        background: #fff; border: 1px solid #e6e8ef; border-radius: 12px;
        display: flex; gap: 12px; align-items: flex-start;
        color: #475569; font-size: 13.5px; line-height: 1.6;
      }
      .mc-tip strong { color: #0f172a; }

      /* Make tiles span the right widths */
      .mc-grid > *:nth-child(2),
      .mc-grid > *:nth-child(3),
      .mc-grid > *:nth-child(4),
      .mc-grid > *:nth-child(5) { grid-column: span 1; }
      .mc-grid > *:nth-child(6) { grid-column: span 2; }   /* System pressure */
      .mc-grid > *:nth-child(7) { grid-column: span 2; }   /* Deploy pipeline */
      .mc-grid > *:nth-child(8) { grid-column: span 2; }   /* Alerts */
      .mc-grid > *:nth-child(9) { grid-column: span 2; }   /* Regions */
      .mc-grid > *:nth-child(10) { grid-column: span 2; }  /* Commits */
      .mc-grid > *:nth-child(11) { grid-column: span 2; }  /* SLO */

      @media (max-width: 1080px) {
        .mc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .mc-grid > * { grid-column: span 1 !important; }
        .mc-grid > *:nth-child(6),
        .mc-grid > *:nth-child(7),
        .mc-grid > *:nth-child(8),
        .mc-grid > *:nth-child(9),
        .mc-grid > *:nth-child(10),
        .mc-grid > *:nth-child(11) { grid-column: span 2 !important; }
      }
      @media (max-width: 720px) {
        .mc-grid { grid-template-columns: 1fr; }
        .mc-grid > * { grid-column: span 1 !important; }
        .mc-gauges { grid-template-columns: 1fr; }
      }
    `})}export{_ as MissionControl};