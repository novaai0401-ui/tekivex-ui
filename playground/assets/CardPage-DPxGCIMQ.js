import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{$t as r,Qt as i,Vt as a,Xt as o,Zt as s,en as c}from"./tekivex-ui-C9wlHCjq.js";import{n as l,r as u}from"./index-BLCt_kC2.js";import{t as d}from"./DemoSection-DEixK5oF.js";import{t as f}from"./PropTable-Cy1Qr_aV.js";var p=e(t(),1),m=n(),h=[{name:`variant`,type:`'default' | 'glass' | 'quantum' | 'elevated' | 'outlined'`,default:`'default'`,description:`Visual treatment of the card surface.`},{name:`padding`,type:`'none' | 'sm' | 'md' | 'lg'`,default:`'md'`,description:`Inner padding preset applied to the root element.`},{name:`isHoverable`,type:`boolean`,default:`false`,description:`Adds a scale(1.01) transform on hover. Respects prefers-reduced-motion.`},{name:`isClickable`,type:`boolean`,default:`false`,description:`Renders as a <button> element, enabling keyboard activation and adding cursor: pointer.`},{name:`as`,type:`'div' | 'article' | 'section' | 'button'`,default:`undefined`,description:`Override the root element tag. Defaults to div, or button when isClickable is true.`},{name:`className`,type:`string`,default:`undefined`,description:`Extra class names merged with built-in tkx() classes.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles merged on top of variant styles.`},{name:`...rest`,type:`HTMLAttributes<HTMLElement>`,default:`—`,description:`All standard HTML element attributes are forwarded to the root element.`}],g=[{name:`title`,type:`ReactNode`,default:`undefined`,description:`Rendered as an h3 inside the header with theme.text color.`},{name:`subtitle`,type:`ReactNode`,default:`undefined`,description:`Rendered as a p below the title with theme.textMuted color.`},{name:`action`,type:`ReactNode`,default:`undefined`,description:`Slot for a right-aligned action element (badge, button, icon).`},{name:`children`,type:`ReactNode`,default:`undefined`,description:`Replaces title/subtitle if provided. Rendered inside the left flex column.`}];function _({color:e=`currentColor`}){return(0,m.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:e,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`})})}function v({up:e=!0}){return(0,m.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:e?(0,m.jsx)(`polyline`,{points:`23 6 13.5 15.5 8.5 10.5 1 18`}):(0,m.jsx)(`polyline`,{points:`23 18 13.5 8.5 8.5 13.5 1 6`})})}function y(){return(0,m.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12`})})}function b(){return(0,m.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z`})})}function x({theme:e}){let[t,n]=(0,p.useState)(null),x={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`},S={borderRadius:`10px`,border:`1px solid ${e.border}`,backgroundColor:e.surfaceAlt,padding:`20px 24px`,marginBottom:`40px`},C={fontSize:`13px`,fontWeight:700,color:e.text,margin:`0 0 12px`,display:`flex`,alignItems:`center`,gap:`6px`},w={fontSize:`13.5px`,color:e.textMuted,lineHeight:`1.7`,margin:`0 0 6px`,paddingLeft:`16px`,position:`relative`};return(0,m.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,m.jsx)(`div`,{style:{marginBottom:`24px`},children:(0,m.jsx)(u,{label:`WCAG 2.1 Compliance`,badges:[{criterion:`1.4.3 Contrast`,level:`AAA`,status:`PASS`},{criterion:`2.1.1 Keyboard`,level:`AA`,status:`PASS`},{criterion:`2.4.6 Headings`,level:`AA`,status:`PASS`},{criterion:`1.3.1 Info & Relationships`,level:`AA`,status:`PASS`}]})}),(0,m.jsx)(`h1`,{style:{fontSize:`2.25rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.03em`,lineHeight:1.15},children:`TkxCard`}),(0,m.jsx)(`p`,{style:{fontSize:`15px`,color:e.textMuted,lineHeight:`1.75`,maxWidth:`640px`,margin:`0 0 8px`},children:`A polymorphic content container with five surface variants, composable sub-components (Header, Body, Footer), hover/click interaction modes, and four padding presets. Built on the WAI-ARIA region pattern with full semantic element support.`}),(0,m.jsxs)(`p`,{style:{fontSize:`13px`,color:e.textMuted,lineHeight:`1.6`,maxWidth:`640px`,margin:`0 0 48px`},children:[(0,m.jsx)(`strong`,{style:{color:e.text},children:`WAI-ARIA:`}),` Use`,` `,(0,m.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`as="article"`}),` `,`for self-contained content, and`,` `,(0,m.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`as="section"`}),` `,`for page regions (add an `,(0,m.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`aria-label`}),`). Use `,(0,m.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`isClickable`}),` to render a semantically correct `,(0,m.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`<button>`}),`.`]}),(0,m.jsx)(d,{title:`Card Variants`,description:`Five visual treatments: default uses the surface color with a border, glass adds backdrop-blur, quantum adds a primary-color glow, elevated uses a deep shadow, and outlined is borderline with transparent background.`,theme:e,code:`<TkxCard variant="default">Default</TkxCard>
<TkxCard variant="glass">Glass</TkxCard>
<TkxCard variant="quantum">Quantum</TkxCard>
<TkxCard variant="elevated">Elevated</TkxCard>
<TkxCard variant="outlined">Outlined</TkxCard>`,children:(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(150px, 1fr))`,gap:`12px`,width:`100%`},children:[`default`,`glass`,`quantum`,`elevated`,`outlined`].map(t=>(0,m.jsxs)(o,{variant:t,padding:`sm`,children:[(0,m.jsx)(`p`,{style:{margin:0,fontSize:`13px`,fontWeight:600,color:e.text,textTransform:`capitalize`},children:t}),(0,m.jsxs)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:e.textMuted},children:[`variant="`,t,`"`]})]},t))})}),(0,m.jsx)(d,{title:`With Sub-components`,description:`TkxCardHeader provides title, subtitle, and action slots. TkxCardBody is a plain passthrough wrapper. TkxCardFooter renders a flex row with a top border for action buttons.`,theme:e,code:`<TkxCard variant="elevated">
  <TkxCardHeader
    title="Quarterly Revenue"
    subtitle="Jan – Mar 2026"
    action={<TkxBadge variant="success" size="sm">+12.4%</TkxBadge>}
  />
  <TkxCardBody>
    <p>Body content goes here. Charts, tables, descriptions — anything.</p>
  </TkxCardBody>
  <TkxCardFooter>
    <TkxButton size="sm" variant="ghost">Dismiss</TkxButton>
    <TkxButton size="sm">View Report</TkxButton>
  </TkxCardFooter>
</TkxCard>`,children:(0,m.jsx)(`div`,{style:{width:`100%`,maxWidth:`440px`},children:(0,m.jsxs)(o,{variant:`elevated`,children:[(0,m.jsx)(r,{title:`Quarterly Revenue`,subtitle:`Jan – Mar 2026`,action:(0,m.jsx)(a,{variant:`success`,size:`sm`,children:`+12.4%`})}),(0,m.jsx)(s,{children:(0,m.jsx)(`p`,{style:{margin:0,fontSize:`14px`,color:e.textMuted,lineHeight:`1.6`},children:`Total revenue reached $2.84M, up from $2.53M in the prior quarter. Growth driven by enterprise tier expansion in APAC.`})}),(0,m.jsxs)(i,{children:[(0,m.jsx)(c,{size:`sm`,variant:`ghost`,children:`Dismiss`}),(0,m.jsx)(c,{size:`sm`,children:`View Report`})]})]})})}),(0,m.jsx)(d,{title:`Hoverable & Clickable`,description:`isHoverable adds a scale(1.01) hover transform. isClickable renders a <button> element — keyboard-activatable with Enter/Space — and fires onClick. Click a card below to try it.`,theme:e,code:`// Hoverable only (no click)
<TkxCard isHoverable>Hover me</TkxCard>

// Clickable — renders as <button>
<TkxCard
  isClickable
  onClick={() => alert('Card activated!')}
>
  Click or press Enter/Space
</TkxCard>`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`,width:`100%`},children:[(0,m.jsxs)(o,{isHoverable:!0,style:{flex:`1`,minWidth:`180px`},children:[(0,m.jsx)(`p`,{style:{margin:0,fontWeight:600,color:e.text,fontSize:`14px`},children:`Hoverable Card`}),(0,m.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`13px`,color:e.textMuted},children:`Scales up on hover`})]}),(0,m.jsxs)(o,{isClickable:!0,style:{flex:`1`,minWidth:`180px`},onClick:()=>n(`card-click`),children:[(0,m.jsx)(`p`,{style:{margin:0,fontWeight:600,color:e.text,fontSize:`14px`},children:`Clickable Card`}),(0,m.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`13px`,color:e.textMuted},children:t===`card-click`?`✓ Activated!`:`Click or press Enter/Space`})]})]})}),(0,m.jsx)(d,{title:`Padding Sizes`,description:`Four padding presets: none (0), sm (12px), md (20px default), lg (28px). Use none when you want to apply your own internal layout.`,theme:e,code:`<TkxCard padding="none">No padding — custom layout</TkxCard>
<TkxCard padding="sm">Small padding (p-3)</TkxCard>
<TkxCard padding="md">Medium padding (p-5) — default</TkxCard>
<TkxCard padding="lg">Large padding (p-7)</TkxCard>`,children:(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`,width:`100%`,maxWidth:`400px`},children:[`none`,`sm`,`md`,`lg`].map(t=>(0,m.jsx)(o,{padding:t,variant:`outlined`,children:(0,m.jsxs)(`span`,{style:{fontSize:`13px`,color:e.text,fontWeight:500},children:[`padding="`,t,`"`,t===`md`&&` (default)`]})},t))})}),(0,m.jsx)(d,{title:`As Semantic Element`,description:`The "as" prop changes the root HTML element. Use as="article" for self-contained items (blog posts, product tiles), as="section" for page regions (add aria-label), or as="button" for clickable cards.`,theme:e,code:`// Article — self-contained, appears in document outline
<TkxCard as="article">
  <h2>Post Title</h2>
  <p>Article body...</p>
</TkxCard>

// Section — page region, requires aria-label for WCAG 1.3.1
<TkxCard as="section" aria-label="User profile">
  <p>Profile content...</p>
</TkxCard>`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`,width:`100%`},children:[(0,m.jsxs)(o,{as:`article`,style:{flex:`1`,minWidth:`200px`},children:[(0,m.jsx)(`p`,{style:{margin:`0 0 4px`,fontSize:`10px`,fontWeight:700,letterSpacing:`0.08em`,textTransform:`uppercase`,color:e.primary},children:`<article>`}),(0,m.jsx)(`p`,{style:{margin:0,fontWeight:600,color:e.text,fontSize:`14px`},children:`Self-Contained Content`}),(0,m.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`13px`,color:e.textMuted},children:`Blog posts, product cards, news items`})]}),(0,m.jsxs)(o,{as:`section`,"aria-label":`Feature overview`,style:{flex:`1`,minWidth:`200px`},children:[(0,m.jsx)(`p`,{style:{margin:`0 0 4px`,fontSize:`10px`,fontWeight:700,letterSpacing:`0.08em`,textTransform:`uppercase`,color:e.secondary},children:`<section>`}),(0,m.jsx)(`p`,{style:{margin:0,fontWeight:600,color:e.text,fontSize:`14px`},children:`Page Region`}),(0,m.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`13px`,color:e.textMuted},children:`Requires aria-label for WCAG 1.3.1`})]})]})}),(0,m.jsx)(d,{title:`Product Card Example`,description:`A realistic e-commerce product tile using TkxCard with an image placeholder, title, pricing, rating, and a CTA button.`,theme:e,code:`<TkxCard as="article" variant="elevated" padding="none" isHoverable>
  {/* Image area */}
  <div style={{ height: 180, backgroundColor: theme.surfaceAlt, borderRadius: '12px 12px 0 0',
    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <span style={{ color: theme.textMuted, fontSize: '13px' }}>Product Image</span>
  </div>
  {/* Details */}
  <div style={{ padding: '16px' }}>
    <TkxBadge variant="success" size="sm">In Stock</TkxBadge>
    <h3 style={{ margin: '8px 0 4px', fontSize: '15px', fontWeight: 700, color: theme.text }}>
      Quantum Wireless Headphones
    </h3>
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} color={i < 4 ? '#f59e0b' : theme.border} />
      ))}
      <span style={{ fontSize: '12px', color: theme.textMuted, marginLeft: '4px' }}>4.0 (128)</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
      <span style={{ fontSize: '20px', fontWeight: 800, color: theme.text }}>$149</span>
      <span style={{ fontSize: '13px', color: theme.textMuted, textDecoration: 'line-through' }}>$199</span>
      <TkxBadge variant="danger" size="sm">-25%</TkxBadge>
    </div>
    <TkxButton isFullWidth size="sm">Add to Cart</TkxButton>
  </div>
</TkxCard>`,children:(0,m.jsx)(`div`,{style:{width:`260px`},children:(0,m.jsxs)(o,{as:`article`,variant:`elevated`,padding:`none`,isHoverable:!0,children:[(0,m.jsx)(`div`,{style:{height:160,backgroundColor:e.surfaceAlt,borderRadius:`12px 12px 0 0`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,m.jsx)(`span`,{style:{color:e.textMuted,fontSize:`13px`},children:`Product Image`})}),(0,m.jsxs)(`div`,{style:{padding:`16px`},children:[(0,m.jsx)(a,{variant:`success`,size:`sm`,children:`In Stock`}),(0,m.jsx)(`h3`,{style:{margin:`8px 0 4px`,fontSize:`15px`,fontWeight:700,color:e.text},children:`Quantum Wireless Headphones`}),(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`3px`,marginBottom:`12px`},children:[Array.from({length:5}).map((t,n)=>(0,m.jsx)(_,{color:n<4?`#f59e0b`:e.border},n)),(0,m.jsx)(`span`,{style:{fontSize:`12px`,color:e.textMuted,marginLeft:`4px`},children:`4.0 (128)`})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:`8px`,marginBottom:`14px`},children:[(0,m.jsx)(`span`,{style:{fontSize:`20px`,fontWeight:800,color:e.text},children:`$149`}),(0,m.jsx)(`span`,{style:{fontSize:`13px`,color:e.textMuted,textDecoration:`line-through`},children:`$199`}),(0,m.jsx)(a,{variant:`danger`,size:`sm`,children:`-25%`})]}),(0,m.jsx)(c,{isFullWidth:!0,size:`sm`,children:`Add to Cart`})]})]})})}),(0,m.jsx)(d,{title:`Stats Card`,description:`A KPI/metric card with a large number, trend indicator, and sparkline placeholder. Use the quantum variant for a subtle glow that draws attention.`,theme:e,code:`<TkxCard variant="quantum">
  <TkxCardHeader
    title="Monthly Active Users"
    action={<TkxBadge variant="success" size="sm">↑ Live</TkxBadge>}
  />
  <TkxCardBody>
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
      <span style={{ fontSize: '40px', fontWeight: 800, lineHeight: 1, color: theme.text }}>
        84,210
      </span>
      <span style={{ fontSize: '14px', color: theme.success, fontWeight: 600, marginBottom: '6px',
        display: 'flex', alignItems: 'center', gap: '4px' }}>
        <IconTrend up /> +8.3%
      </span>
    </div>
    <p style={{ margin: '4px 0 0', fontSize: '13px', color: theme.textMuted }}>vs 77,760 last month</p>
    {/* Sparkline placeholder */}
    <div style={{ height: '40px', marginTop: '16px', borderRadius: '6px',
      background: 'linear-gradient(90deg, transparent, theme.primary + "22")',
      display: 'flex', alignItems: 'flex-end', gap: '2px', padding: '0 2px' }}>
      {[30,45,35,60,55,70,65,84].map((v, i) => (
        <div key={i} style={{ flex: 1, backgroundColor: theme.primary,
          height: v + '%', opacity: 0.5 + (i/16), borderRadius: '2px 2px 0 0' }} />
      ))}
    </div>
  </TkxCardBody>
</TkxCard>`,children:(0,m.jsx)(`div`,{style:{width:`100%`,maxWidth:`380px`},children:(0,m.jsxs)(o,{variant:`quantum`,children:[(0,m.jsx)(r,{title:`Monthly Active Users`,action:(0,m.jsx)(a,{variant:`success`,size:`sm`,pulse:!0,children:`↑ Live`})}),(0,m.jsxs)(s,{children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:`12px`},children:[(0,m.jsx)(`span`,{style:{fontSize:`40px`,fontWeight:800,lineHeight:1,color:e.text},children:`84,210`}),(0,m.jsxs)(`span`,{style:{fontSize:`14px`,color:e.success,fontWeight:600,marginBottom:`6px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,m.jsx)(v,{up:!0}),` +8.3%`]})]}),(0,m.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`13px`,color:e.textMuted},children:`vs 77,760 last month`}),(0,m.jsx)(`div`,{style:{height:`40px`,marginTop:`16px`,display:`flex`,alignItems:`flex-end`,gap:`2px`,padding:`0 2px`},children:[30,45,35,60,55,70,65,84].map((t,n)=>(0,m.jsx)(`div`,{style:{flex:1,backgroundColor:e.primary,height:`${t}%`,opacity:.4+n/12,borderRadius:`2px 2px 0 0`}},n))})]})]})})}),(0,m.jsx)(d,{title:`Profile Card`,description:`A user profile card with an avatar circle, name, role badge, bio, and social link buttons. Demonstrates how TkxCard composes with TkxBadge and TkxButton.`,theme:e,code:`<TkxCard variant="glass" style={{ textAlign: 'center' }}>
  {/* Avatar */}
  <div style={{ width: 72, height: 72, borderRadius: '50%', margin: '0 auto 12px',
    background: 'linear-gradient(135deg, theme.primary, theme.secondary)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '28px', fontWeight: 800, color: '#fff' }}>
    A
  </div>
  <h3 style={{ margin: '0 0 4px', fontSize: '17px', fontWeight: 700, color: theme.text }}>
    Avery Chen
  </h3>
  <div style={{ marginBottom: '10px' }}>
    <TkxBadge variant="primary" size="sm">Senior Engineer</TkxBadge>
  </div>
  <p style={{ fontSize: '13px', color: theme.textMuted, lineHeight: '1.6', margin: '0 0 16px' }}>
    Building quantum-grade UI systems. Open-source contributor.
  </p>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
    <TkxButton size="sm" variant="outline" aria-label="GitHub profile">
      <IconGithub />
    </TkxButton>
    <TkxButton size="sm" variant="outline" aria-label="Twitter profile">
      <IconTwitter />
    </TkxButton>
    <TkxButton size="sm">Follow</TkxButton>
  </div>
</TkxCard>`,children:(0,m.jsx)(`div`,{style:{width:`280px`},children:(0,m.jsxs)(o,{variant:`glass`,style:{textAlign:`center`},children:[(0,m.jsx)(`div`,{style:{width:72,height:72,borderRadius:`50%`,margin:`0 auto 12px`,background:`linear-gradient(135deg, ${e.primary}, ${e.secondary})`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`28px`,fontWeight:800,color:`#fff`},children:`A`}),(0,m.jsx)(`h3`,{style:{margin:`0 0 4px`,fontSize:`17px`,fontWeight:700,color:e.text},children:`Avery Chen`}),(0,m.jsx)(`div`,{style:{marginBottom:`10px`},children:(0,m.jsx)(a,{variant:`primary`,size:`sm`,children:`Senior Engineer`})}),(0,m.jsx)(`p`,{style:{fontSize:`13px`,color:e.textMuted,lineHeight:`1.6`,margin:`0 0 16px`},children:`Building quantum-grade UI systems. Open-source contributor.`}),(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`8px`},children:[(0,m.jsx)(c,{size:`sm`,variant:`outline`,"aria-label":`GitHub profile`,children:(0,m.jsx)(y,{})}),(0,m.jsx)(c,{size:`sm`,variant:`outline`,"aria-label":`Twitter profile`,children:(0,m.jsx)(b,{})}),(0,m.jsx)(c,{size:`sm`,children:`Follow`})]})]})})}),(0,m.jsx)(d,{title:`Custom CSS — tkx() and style overrides`,description:`Pass className to merge tkx() utility classes, or use style to apply one-off inline overrides. Both are merged after the variant styles so you always win.`,theme:e,code:`import { tkx } from 'tekivex-ui';

// Use the tkx() atomic CSS engine for utility classes
<TkxCard className={tkx('border-2 border-dashed')}>
  Dashed border via tkx()
</TkxCard>

// Or raw inline styles for one-offs
<TkxCard
  style={{
    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    border: 'none',
    boxShadow: '0 8px 32px #4f46e540',
  }}
>
  Custom gradient card
</TkxCard>`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`,width:`100%`},children:[(0,m.jsxs)(o,{style:{flex:`1`,minWidth:`180px`,borderStyle:`dashed`,borderWidth:`2px`},children:[(0,m.jsx)(`p`,{style:{margin:0,fontSize:`13px`,color:e.text,fontWeight:600},children:`Dashed Border`}),(0,m.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:e.textMuted},children:`via style override`})]}),(0,m.jsxs)(o,{style:{flex:`1`,minWidth:`180px`,background:`linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)`,border:`none`,boxShadow:`0 8px 32px #4f46e540`},children:[(0,m.jsx)(`p`,{style:{margin:0,fontSize:`13px`,color:`#c7d2fe`,fontWeight:600},children:`Custom Gradient`}),(0,m.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:`#a5b4fc`},children:`via inline style`})]})]})}),(0,m.jsx)(`hr`,{style:x}),(0,m.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:`TkxCard Props`}),(0,m.jsx)(`div`,{style:{marginBottom:`32px`},children:(0,m.jsx)(f,{props:h})}),(0,m.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:`TkxCardHeader Props`}),(0,m.jsx)(`div`,{style:{marginBottom:`48px`},children:(0,m.jsx)(f,{props:g})}),(0,m.jsx)(`hr`,{style:x}),(0,m.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 20px`,letterSpacing:`-0.02em`},children:`Accessibility Notes`}),(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,marginBottom:`24px`},children:[(0,m.jsx)(l,{criterion:`1.3.1 Info & Relationships`,level:`AA`,status:`PASS`}),(0,m.jsx)(l,{criterion:`1.3.5 Identify Input Purpose`,level:`AA`,status:`PASS`}),(0,m.jsx)(l,{criterion:`2.1.1 Keyboard Accessible`,level:`AA`,status:`PASS`}),(0,m.jsx)(l,{criterion:`2.4.3 Focus Order`,level:`AA`,status:`PASS`}),(0,m.jsx)(l,{criterion:`4.1.2 Name, Role, Value`,level:`AA`,status:`PASS`})]}),(0,m.jsxs)(`div`,{style:S,children:[(0,m.jsx)(`p`,{style:C,children:`Semantic Element Selection`}),(0,m.jsxs)(`p`,{style:w,children:[`Default `,(0,m.jsx)(`code`,{children:`div`}),` is appropriate for layout grouping. Use `,(0,m.jsx)(`code`,{children:`article`}),` for self-contained items that make sense in isolation (feeds, search results, product tiles).`]}),(0,m.jsxs)(`p`,{style:w,children:[`When using `,(0,m.jsx)(`code`,{children:`as="section"`}),`, always add an `,(0,m.jsx)(`code`,{children:`aria-label`}),` or pair with an `,(0,m.jsx)(`code`,{children:`aria-labelledby`}),` pointing to an `,(0,m.jsx)(`code`,{children:`h2/h3`}),` inside the card — otherwise the section landmark is unnamed and screenreaders may skip it.`]})]}),(0,m.jsxs)(`div`,{style:S,children:[(0,m.jsx)(`p`,{style:C,children:`Clickable Cards`}),(0,m.jsxs)(`p`,{style:w,children:[`Use `,(0,m.jsx)(`code`,{children:`isClickable`}),` to render a `,(0,m.jsx)(`code`,{children:`<button>`}),`. This enables keyboard activation (Enter/Space) and proper focus management without any extra ARIA.`]}),(0,m.jsxs)(`p`,{style:w,children:[`Do not wrap a `,(0,m.jsx)(`code`,{children:`<button>`}),` card around other interactive elements — nested interactive elements violate the HTML spec. Place inner buttons in the card's content, outside the clickable surface.`]}),(0,m.jsxs)(`p`,{style:w,children:[`Give every clickable card a visible label via its text content, or an explicit `,(0,m.jsx)(`code`,{children:`aria-label`}),`.`]})]}),(0,m.jsxs)(`div`,{style:S,children:[(0,m.jsx)(`p`,{style:C,children:`Motion & Animation`}),(0,m.jsxs)(`p`,{style:w,children:[`The hover scale transform uses CSS `,(0,m.jsx)(`code`,{children:`transition: transform`}),`. This animation is automatically suppressed when `,(0,m.jsx)(`code`,{children:`prefers-reduced-motion: reduce`}),` is active, courtesy of the tkx() engine's motion utilities.`]})]})]})}export{x as CardPage};