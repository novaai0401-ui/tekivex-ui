import{aZ as i,ar as t,y as n}from"./Preview.CSiPW31e.js";import"./index.BJHLxEsq.js";/* empty css                            */const e={title:"Acme Dashboard — Reports",description:"Monthly usage reports for your Acme workspace.",canonical:"https://app.example.com/reports",image:"https://app.example.com/og/reports.png",twitterSite:"@acme",ogType:"website",locale:"en_US"},a=i.softwareApplication({name:"Acme Dashboard",description:"Usage analytics for Acme workspaces.",url:"https://app.example.com",version:"2.1.0"}),r=`document.title = ${JSON.stringify(e.title)}

<meta name="description" content="${e.description}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">

<meta property="og:title" content="${e.title}">
<meta property="og:description" content="${e.description}">
<meta property="og:type" content="${e.ogType}">
<meta property="og:url" content="${e.canonical}">
<meta property="og:image" content="${e.image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${e.locale}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${e.title}">
<meta name="twitter:description" content="${e.description}">
<meta name="twitter:image" content="${e.image}">
<meta name="twitter:site" content="${e.twitterSite}">

<link rel="canonical" href="${e.canonical}">

<script type="application/ld+json">
${JSON.stringify(a,null,2)}
<\/script>`,o={fontSize:12,color:"var(--sl-color-gray-2, #4b5563)",background:"var(--sl-color-gray-6, rgba(127,127,127,0.08))",padding:12,borderRadius:6,overflow:"auto",lineHeight:1.6,margin:0};function p(){return t.jsx(n,{label:"Static illustration — this panel does NOT modify this page's head",style:{flexDirection:"column",alignItems:"stretch"},children:t.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:12,fontWeight:600,marginBottom:6},children:"Props passed to <TkxSEO />"}),t.jsx("pre",{style:o,children:JSON.stringify(e,null,2)})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:12,fontWeight:600,marginBottom:6},children:"Tags TkxSEO writes into document.head (data-tkx-seo flagged; JSON-LD via the real seoSchema helper)"}),t.jsx("pre",{style:o,children:r})]})]})})}export{p as SeoTagPreview};
