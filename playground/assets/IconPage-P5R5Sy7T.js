import{t as e}from"./vendor-react-CJ-iRaMF.js";import{c as t,l as n,s as r}from"./tekivex-ui-C9wlHCjq.js";import{i,r as a}from"./index-BLCt_kC2.js";import{t as o}from"./DemoSection-DEixK5oF.js";import{t as s}from"./PropTable-Cy1Qr_aV.js";var c=e(),l=[{name:`name`,type:`IconName`,description:`Name of a built-in icon. One of 60+ available icon names organized by category.`},{name:`size`,type:`number | string`,default:`24`,description:`Width and height of the SVG element. Accepts any CSS size (e.g. 32, "2rem", "1.5em").`},{name:`color`,type:`string`,default:`currentColor`,description:`Stroke/fill color. Accepts a theme token name (e.g. "primary", "danger") or any CSS color value.`},{name:`strokeWidth`,type:`number`,default:`2`,description:`Width of strokes used in outlined (non-filled) icons.`},{name:`filled`,type:`boolean`,default:`false`,description:`When true, renders icons in filled style instead of the default outlined/stroke style.`},{name:`label`,type:`string`,description:`If provided, adds role="img" and aria-label for semantic (non-decorative) usage. If omitted, aria-hidden="true" is set.`},{name:`children`,type:`ReactNode`,description:`Custom SVG path content. When provided, overrides the built-in icon paths. Use this to embed any custom SVG inside the TkxIcon wrapper.`},{name:`className`,type:`string`,description:`Additional CSS class names applied to the root SVG element.`},{name:`style`,type:`React.CSSProperties`,description:`Inline styles applied to the root SVG element.`}],u=[{name:`text`,type:`string`,default:`"TekiVex"`,description:`Brand name text. The last portion is automatically colored with the primary accent.`},{name:`tagline`,type:`string`,description:`Optional tagline displayed below the brand name.`},{name:`variant`,type:`"full" | "icon-only" | "text-only"`,default:`"full"`,description:`Controls which parts of the logo are rendered: full (mark + text), icon-only, or text-only.`},{name:`size`,type:`"sm" | "md" | "lg" | "xl"`,default:`"md"`,description:`Preset size that scales both the mark and typography proportionally.`},{name:`orientation`,type:`"horizontal" | "stacked"`,default:`"horizontal"`,description:`Layout direction: horizontal places the mark to the left, stacked places it above the text.`},{name:`mark`,type:`ReactNode`,description:`Custom icon/mark to replace the default hexagonal quantum symbol.`},{name:`color`,type:`string`,description:`Override the primary color used for the mark and accent text portion.`},{name:`onClick`,type:`() => void`,description:`Click handler. When provided, the logo becomes interactive with keyboard support.`},{name:`className`,type:`string`,description:`Additional CSS class names applied to the root element.`},{name:`style`,type:`React.CSSProperties`,description:`Inline styles applied to the root element.`}];function d({children:e,theme:t}){return(0,c.jsxs)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:t.text,margin:`48px 0 8px`,letterSpacing:`-0.02em`,display:`flex`,alignItems:`center`,gap:10},children:[(0,c.jsx)(`span`,{style:{display:`inline-block`,width:4,height:`1.1em`,borderRadius:2,backgroundColor:t.primary,flexShrink:0},"aria-hidden":`true`}),e]})}function f({theme:e}){return(0,c.jsx)(`hr`,{style:{border:`none`,borderTop:`1px solid ${e.border}`,margin:`40px 0`}})}function p({name:e,theme:t}){let r={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6,padding:`12px 8px`,borderRadius:8,border:`1px solid ${t.border}`,backgroundColor:t.surfaceAlt,cursor:`default`,minWidth:72,transition:`border-color 0.15s ease, background-color 0.15s ease`},i={fontSize:10,color:t.textMuted,textAlign:`center`,fontFamily:`"JetBrains Mono", "Fira Code", monospace`,wordBreak:`break-all`,lineHeight:1.3};return(0,c.jsxs)(`div`,{style:r,title:e,onMouseEnter:e=>{e.currentTarget.style.borderColor=t.primary+`60`,e.currentTarget.style.backgroundColor=t.primary+`0a`},onMouseLeave:e=>{e.currentTarget.style.borderColor=t.border,e.currentTarget.style.backgroundColor=t.surfaceAlt},children:[(0,c.jsx)(n,{name:e,size:20,color:t.text}),(0,c.jsx)(`span`,{style:i,children:e})]})}function m({category:e,names:t,theme:n}){return(0,c.jsxs)(`div`,{style:{marginBottom:24},children:[(0,c.jsx)(`p`,{style:{fontSize:11,fontWeight:700,letterSpacing:`0.06em`,textTransform:`uppercase`,color:n.textMuted,margin:`0 0 10px`},children:e}),(0,c.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6},children:t.map(e=>(0,c.jsx)(p,{name:e,theme:n},e))})]})}function h({theme:e}){let p={maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},h={fontSize:`2.25rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.04em`,lineHeight:1.1},g={fontSize:`15px`,color:e.textMuted,lineHeight:`1.7`,maxWidth:620,margin:`0 0 24px`},_={display:`inline-flex`,alignItems:`center`,gap:6,padding:`3px 12px`,borderRadius:9999,fontSize:11,fontWeight:700,letterSpacing:`0.04em`,backgroundColor:e.primary+`18`,color:e.primary,border:`1px solid `+e.primary+`35`,marginBottom:20},v={backgroundColor:e.surfaceAlt,border:`1px solid ${e.border}`,borderLeft:`3px solid ${e.info}`,borderRadius:8,padding:`14px 18px`,fontSize:13.5,color:e.textMuted,lineHeight:1.6,margin:`0 0 32px`},y={marginTop:40},b={fontSize:`1rem`,fontWeight:700,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.01em`},x=(0,c.jsx)(`div`,{style:{width:`100%`},children:Object.entries(t).map(([t,n])=>(0,c.jsx)(m,{category:t,names:n,theme:e},t))}),S=(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:20,flexWrap:`wrap`},children:[16,20,24,32,48].map(t=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,c.jsx)(n,{name:`star`,size:t,color:e.primary}),(0,c.jsxs)(`span`,{style:{fontSize:10,color:e.textMuted,fontFamily:`monospace`},children:[t,`px`]})]},t))}),C=(0,c.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:[{token:`primary`,label:`primary`},{token:`secondary`,label:`secondary`},{token:`danger`,label:`danger`},{token:`warning`,label:`warning`},{token:`success`,label:`success`},{token:`info`,label:`info`},{token:`text`,label:`text`},{token:`textMuted`,label:`textMuted`}].map(({token:t,label:r})=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,c.jsx)(n,{name:`heart`,size:24,color:t}),(0,c.jsx)(`span`,{style:{fontSize:10,color:e.textMuted,fontFamily:`monospace`},children:r})]},t))}),w=(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,c.jsx)(n,{name:`check-circle`,size:20,color:e.success}),(0,c.jsxs)(`span`,{style:{fontSize:14,color:e.textMuted},children:[`Decorative icon — `,(0,c.jsx)(`code`,{style:{color:e.primary,fontSize:12},children:`aria-hidden="true"`}),` (no label prop)`]})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,c.jsx)(n,{name:`alert-triangle`,size:20,color:e.warning,label:`Warning`}),(0,c.jsxs)(`span`,{style:{fontSize:14,color:e.textMuted},children:[`Semantic icon — `,(0,c.jsx)(`code`,{style:{color:e.primary,fontSize:12},children:`role="img" aria-label="Warning"`}),` (label prop set)`]})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,c.jsx)(n,{name:`info-circle`,size:20,color:e.info,label:`Information`}),(0,c.jsxs)(`span`,{style:{fontSize:14,color:e.textMuted},children:[`Semantic icon — `,(0,c.jsx)(`code`,{style:{color:e.primary,fontSize:12},children:`role="img" aria-label="Information"`})]})]})]}),T=[`star`,`heart`,`bookmark`,`play`,`shield`,`bell`],E=(0,c.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,c.jsx)(`span`,{style:{fontSize:11,fontWeight:700,letterSpacing:`0.05em`,textTransform:`uppercase`,color:e.textMuted},children:`Outlined (default)`}),(0,c.jsx)(`div`,{style:{display:`flex`,gap:12},children:T.map(t=>(0,c.jsx)(n,{name:t,size:24,color:e.primary,filled:!1},t))})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,c.jsx)(`span`,{style:{fontSize:11,fontWeight:700,letterSpacing:`0.05em`,textTransform:`uppercase`,color:e.textMuted},children:`Filled`}),(0,c.jsx)(`div`,{style:{display:`flex`,gap:12},children:T.map(t=>(0,c.jsx)(n,{name:t,size:24,color:e.primary,filled:!0},t))})]})]}),D=(0,c.jsx)(`div`,{style:{padding:`16px 0`},children:(0,c.jsx)(r,{size:`lg`,tagline:`Quantum UI System`})}),O=(0,c.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`,flexWrap:`wrap`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,c.jsx)(r,{variant:`full`}),(0,c.jsx)(`span`,{style:{fontSize:11,color:e.textMuted},children:`full`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,c.jsx)(r,{variant:`icon-only`}),(0,c.jsx)(`span`,{style:{fontSize:11,color:e.textMuted},children:`icon-only`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,c.jsx)(r,{variant:`text-only`}),(0,c.jsx)(`span`,{style:{fontSize:11,color:e.textMuted},children:`text-only`})]})]}),k=(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[`sm`,`md`,`lg`,`xl`].map(t=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,c.jsx)(r,{size:t}),(0,c.jsxs)(`span`,{style:{fontSize:11,color:e.textMuted,fontFamily:`monospace`},children:[`size="`,t,`"`]})]},t))}),A=(0,c.jsxs)(`div`,{style:{display:`flex`,gap:48,flexWrap:`wrap`,alignItems:`center`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,c.jsx)(r,{orientation:`horizontal`,tagline:`Quantum UI`}),(0,c.jsx)(`span`,{style:{fontSize:11,color:e.textMuted},children:`horizontal`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,c.jsx)(r,{orientation:`stacked`,tagline:`Quantum UI`}),(0,c.jsx)(`span`,{style:{fontSize:11,color:e.textMuted},children:`stacked`})]})]}),j=(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,c.jsx)(r,{text:`AstroFlow`,tagline:`Design System`,mark:(0,c.jsxs)(`svg`,{width:36,height:36,viewBox:`0 0 36 36`,fill:`none`,"aria-hidden":`true`,children:[(0,c.jsx)(`rect`,{width:`36`,height:`36`,rx:`8`,fill:e.secondary+`20`}),(0,c.jsx)(`circle`,{cx:`18`,cy:`18`,r:`8`,stroke:e.secondary,strokeWidth:`2`,fill:`none`}),(0,c.jsx)(`circle`,{cx:`18`,cy:`18`,r:`3`,fill:e.secondary}),(0,c.jsx)(`line`,{x1:`18`,y1:`4`,x2:`18`,y2:`10`,stroke:e.secondary,strokeWidth:`2`,strokeLinecap:`round`}),(0,c.jsx)(`line`,{x1:`18`,y1:`26`,x2:`18`,y2:`32`,stroke:e.secondary,strokeWidth:`2`,strokeLinecap:`round`}),(0,c.jsx)(`line`,{x1:`4`,y1:`18`,x2:`10`,y2:`18`,stroke:e.secondary,strokeWidth:`2`,strokeLinecap:`round`}),(0,c.jsx)(`line`,{x1:`26`,y1:`18`,x2:`32`,y2:`18`,stroke:e.secondary,strokeWidth:`2`,strokeLinecap:`round`})]}),color:e.secondary,size:`md`}),(0,c.jsx)(r,{text:`NovaSpark`,tagline:`Component Library`,color:e.warning,size:`md`})]}),M=(0,c.jsxs)(`nav`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`12px 20px`,backgroundColor:e.surfaceAlt,borderRadius:10,border:`1px solid ${e.border}`,width:`100%`,boxSizing:`border-box`},"aria-label":`Example navigation bar`,children:[(0,c.jsx)(r,{size:`sm`}),(0,c.jsx)(`div`,{style:{display:`flex`,gap:8},children:[`Docs`,`Components`,`Themes`,`GitHub`].map(t=>(0,c.jsx)(`span`,{style:{padding:`6px 12px`,borderRadius:6,fontSize:13,fontWeight:500,color:e.textMuted,cursor:`pointer`},children:t},t))}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,c.jsx)(n,{name:`search`,size:16,color:e.textMuted}),(0,c.jsx)(n,{name:`moon`,size:16,color:e.textMuted})]})]}),N=(0,c.jsxs)(`div`,{style:{display:`flex`,gap:20,alignItems:`center`},children:[(0,c.jsxs)(n,{size:32,color:e.primary,label:`Custom diamond icon`,children:[(0,c.jsx)(`polygon`,{points:`12 2 22 12 12 22 2 12`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`}),(0,c.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`,fill:`currentColor`})]}),(0,c.jsxs)(n,{size:32,color:e.secondary,label:`Custom target icon`,children:[(0,c.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`}),(0,c.jsx)(`circle`,{cx:`12`,cy:`12`,r:`6`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,c.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2`,fill:`currentColor`}),(0,c.jsx)(`line`,{x1:`12`,y1:`2`,x2:`12`,y2:`5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,c.jsx)(`line`,{x1:`12`,y1:`19`,x2:`12`,y2:`22`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,c.jsx)(`line`,{x1:`2`,y1:`12`,x2:`5`,y2:`12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,c.jsx)(`line`,{x1:`19`,y1:`12`,x2:`22`,y2:`12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]}),(0,c.jsx)(`span`,{style:{fontSize:13,color:e.textMuted,lineHeight:1.5},children:`Custom SVG paths passed as children inherit the wrapper's ARIA and sizing props.`})]});return(0,c.jsxs)(`div`,{style:p,children:[(0,c.jsxs)(`span`,{style:_,children:[(0,c.jsx)(n,{name:`grid`,size:12,color:e.primary}),`Component Docs`]}),(0,c.jsx)(`h1`,{style:h,children:`Icons & Logo`}),(0,c.jsxs)(`p`,{style:g,children:[(0,c.jsx)(`strong`,{children:`TkxIcon`}),` ships 60+ built-in SVG icons as pure path data — no icon font, no external sprite, no network request. Fully themeable, WCAG-compliant, and composable with custom SVG children. `,(0,c.jsx)(`strong`,{children:`TkxLogo`}),` provides a configurable brand mark for TekiVex or any custom product.`]}),(0,c.jsx)(a,{badges:[{criterion:`1.1.1 Non-text Content`,level:`AA`,status:`PASS`},{criterion:`1.3.1 Info & Relationships`,level:`AA`,status:`PASS`},{criterion:`4.1.2 Name, Role, Value`,level:`AA`,status:`PASS`}]}),(0,c.jsxs)(`p`,{style:{...v,marginTop:24},children:[`Decorative icons automatically get `,(0,c.jsx)(`code`,{style:{color:e.primary},children:`aria-hidden="true"`}),`. Pass a `,(0,c.jsx)(`code`,{style:{color:e.primary},children:`label`}),` prop to promote an icon to semantic, adding `,(0,c.jsx)(`code`,{style:{color:e.primary},children:`role="img"`}),` and an accessible name.`]}),(0,c.jsx)(d,{theme:e,children:`TkxIcon`}),(0,c.jsx)(o,{title:`Icon Gallery`,description:`All 60+ built-in icons organized by category. Hover to highlight.`,code:`import { TkxIcon } from 'tekivex-ui';

// Basic usage
<TkxIcon name="home" size={24} />

// With color token
<TkxIcon name="star" size={24} color="primary" />

// Semantic (non-decorative)
<TkxIcon name="alert-triangle" size={24} color="warning" label="Warning" />`,theme:e,children:x}),(0,c.jsx)(o,{title:`Icon Sizes`,description:`Use any number or CSS string for the size prop. Common sizes are 16, 20, 24, 32, and 48.`,code:`<TkxIcon name="star" size={16} color="primary" />
<TkxIcon name="star" size={20} color="primary" />
<TkxIcon name="star" size={24} color="primary" />
<TkxIcon name="star" size={32} color="primary" />
<TkxIcon name="star" size={48} color="primary" />

// CSS string sizes also work
<TkxIcon name="star" size="1.5em" color="primary" />
<TkxIcon name="star" size="2rem" color="primary" />`,theme:e,children:S}),(0,c.jsx)(o,{title:`Icon Colors — Theme Tokens`,description:`Pass a theme token name as the color prop and TkxIcon resolves it to the current theme value automatically.`,code:`// Theme token names
<TkxIcon name="heart" color="primary" />
<TkxIcon name="heart" color="secondary" />
<TkxIcon name="heart" color="danger" />
<TkxIcon name="heart" color="warning" />
<TkxIcon name="heart" color="success" />
<TkxIcon name="heart" color="info" />

// Also accepts any CSS color
<TkxIcon name="heart" color="#ff6b6b" />
<TkxIcon name="heart" color="rgba(0, 245, 212, 0.8)" />`,theme:e,children:C}),(0,c.jsx)(o,{title:`Semantic vs Decorative`,description:`Icons without a label are aria-hidden (decorative). Set label to provide an accessible name for screen readers.`,code:`// Decorative — aria-hidden="true" (default, no label)
<TkxIcon name="check-circle" color="success" />

// Semantic — role="img" aria-label="Warning"
<TkxIcon name="alert-triangle" color="warning" label="Warning" />

// In a button context — icon is decorative, button has its own label
<button aria-label="Delete item">
  <TkxIcon name="trash" color="danger" />
</button>`,theme:e,children:w}),(0,c.jsx)(o,{title:`Filled vs Outlined`,description:`Toggle the filled prop to switch between stroke-based (outlined) and fill-based rendering.`,code:`// Outlined (default)
<TkxIcon name="star" color="primary" filled={false} />

// Filled
<TkxIcon name="star" color="primary" filled={true} />

// Works on all icon types
<TkxIcon name="heart" color="danger" filled />
<TkxIcon name="bookmark" color="primary" filled />`,theme:e,children:E}),(0,c.jsx)(o,{title:`Custom SVG Children`,description:`Pass any SVG content as children. TkxIcon provides the wrapper with correct viewBox, sizing, and ARIA attributes.`,code:`// Pass custom SVG paths as children
<TkxIcon size={32} color="primary" label="Custom diamond icon">
  <polygon
    points="12 2 22 12 12 22 2 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
  />
  <circle cx="12" cy="12" r="3" fill="currentColor" />
</TkxIcon>`,theme:e,children:N}),(0,c.jsxs)(`div`,{style:y,children:[(0,c.jsx)(`h3`,{style:b,children:`TkxIcon Props`}),(0,c.jsx)(s,{props:l})]}),(0,c.jsx)(f,{theme:e}),(0,c.jsx)(d,{theme:e,children:`TkxLogo`}),(0,c.jsx)(o,{title:`Default Logo`,description:`The default TekiVex logo with a hexagonal quantum mark, brand name, and optional tagline.`,code:`import { TkxLogo } from 'tekivex-ui';

<TkxLogo />

// With tagline
<TkxLogo tagline="Quantum UI System" size="lg" />`,theme:e,children:D}),(0,c.jsx)(o,{title:`Logo Variants`,description:`Three variants control which parts of the logo are visible: "full", "icon-only", and "text-only".`,code:`<TkxLogo variant="full" />
<TkxLogo variant="icon-only" />
<TkxLogo variant="text-only" />`,theme:e,children:O}),(0,c.jsx)(o,{title:`Logo Sizes`,description:`Four preset sizes scale both the mark and typography proportionally.`,code:`<TkxLogo size="sm" />
<TkxLogo size="md" />
<TkxLogo size="lg" />
<TkxLogo size="xl" />`,theme:e,children:k}),(0,c.jsx)(o,{title:`Orientation`,description:`Choose between "horizontal" (mark left of text) and "stacked" (mark above text) layouts.`,code:`<TkxLogo orientation="horizontal" tagline="Quantum UI" />
<TkxLogo orientation="stacked" tagline="Quantum UI" />`,theme:e,children:A}),(0,c.jsx)(o,{title:`Custom Brand`,description:`Override the text, color, and mark to create a completely custom logo for any product.`,code:`// Custom mark SVG
const myMark = (
  <svg width={36} height={36} viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill="rgba(123, 47, 247, 0.12)" />
    <circle cx="18" cy="18" r="8" stroke="#7b2ff7" strokeWidth="2" fill="none" />
    <circle cx="18" cy="18" r="3" fill="#7b2ff7" />
  </svg>
);

<TkxLogo
  text="AstroFlow"
  tagline="Design System"
  mark={myMark}
  color="#7b2ff7"
/>`,theme:e,children:j}),(0,c.jsx)(o,{title:`Logo in a Navbar`,description:`A real-world usage example: TkxLogo in a responsive navigation bar alongside TkxIcon actions.`,code:`<nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px' }}>
  <TkxLogo size="sm" />

  <div style={{ display: 'flex', gap: 8 }}>
    {['Docs', 'Components', 'Themes', 'GitHub'].map((item) => (
      <a key={item} href="#">{item}</a>
    ))}
  </div>

  <div style={{ display: 'flex', gap: 8 }}>
    <TkxIcon name="search" size={16} />
    <TkxIcon name="moon" size={16} />
  </div>
</nav>`,theme:e,children:M}),(0,c.jsxs)(`div`,{style:y,children:[(0,c.jsx)(`h3`,{style:b,children:`TkxLogo Props`}),(0,c.jsx)(s,{props:u})]}),(0,c.jsx)(f,{theme:e}),(0,c.jsx)(d,{theme:e,children:`Using Custom Icons`}),(0,c.jsxs)(`p`,{style:{...g,marginBottom:20},children:[`When you need an icon not in the built-in set, pass SVG content as children. TkxIcon handles the wrapper, viewBox (0 0 24 24), dimensions, and ARIA attributes for you. Use `,(0,c.jsx)(`code`,{style:{color:e.primary,fontSize:13},children:`currentColor`}),` in paths to inherit the resolved color.`]}),(0,c.jsx)(i,{code:`import { TkxIcon } from 'tekivex-ui';

// 1. Custom path as children
<TkxIcon size={24} color="primary" label="Quantum ring">
  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
  <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.4" />
  <path d="M12 3 L12 21 M3 12 L21 12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
</TkxIcon>

// 2. Reusable custom icon component
function QuantumIcon(props: Omit<TkxIconProps, 'children'>) {
  return (
    <TkxIcon {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.4" />
    </TkxIcon>
  );
}

// 3. Inline in a button (decorative — button itself carries the label)
<button aria-label="Quantum action">
  <TkxIcon size={16} color="primary">
    <path d="M12 2L19 7V17L12 22L5 17V7L12 2Z"
      stroke="currentColor" strokeWidth="2" fill="none" />
  </TkxIcon>
</button>`,language:`tsx`,title:`Custom icon patterns`,showLineNumbers:!0})]})}export{h as IconPage};