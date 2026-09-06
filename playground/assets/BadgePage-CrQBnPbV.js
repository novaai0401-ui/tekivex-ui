import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{Vt as r,en as i}from"./tekivex-ui-C9wlHCjq.js";import{n as a,r as o}from"./index-BLCt_kC2.js";import{t as s}from"./DemoSection-DEixK5oF.js";import{t as c}from"./PropTable-Cy1Qr_aV.js";var l=e(t(),1),u=n(),d=[{name:`variant`,type:`'default' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info'`,default:`'default'`,description:`Semantic color variant. Colors are sourced from the active theme tokens.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`Controls font size, padding, and minimum height of the badge pill.`},{name:`dot`,type:`boolean`,default:`false`,description:`Renders a circle dot instead of text content. Size is controlled by the size prop.`},{name:`pulse`,type:`boolean`,default:`false`,description:`Adds a CSS pulse animation. Respects prefers-reduced-motion. Useful for live/active states.`},{name:`outlined`,type:`boolean`,default:`false`,description:`Renders with a transparent background and colored border/text instead of a filled background.`},{name:`className`,type:`string`,default:`undefined`,description:`Extra class names merged with built-in tkx() classes.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles merged on top of variant styles.`},{name:`...rest`,type:`HTMLAttributes<HTMLSpanElement>`,default:`—`,description:`All standard span attributes forwarded to the root element (aria-label, role, etc.).`}],f=[`default`,`primary`,`secondary`,`danger`,`warning`,`success`,`info`];function p({color:e=`currentColor`}){return(0,u.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:e,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9`}),(0,u.jsx)(`path`,{d:`M13.73 21a2 2 0 0 1-3.46 0`})]})}function m({color:e=`currentColor`}){return(0,u.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:e,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`}),(0,u.jsx)(`path`,{d:`M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`})]})}function h({theme:e}){let[t,n]=(0,l.useState)(3),h={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`},g={borderRadius:`10px`,border:`1px solid ${e.border}`,backgroundColor:e.surfaceAlt,padding:`20px 24px`,marginBottom:`24px`},_={fontSize:`13px`,fontWeight:700,color:e.text,margin:`0 0 12px`,display:`flex`,alignItems:`center`,gap:`6px`},v={fontSize:`13.5px`,color:e.textMuted,lineHeight:`1.7`,margin:`0 0 6px`},y=[{variant:`default`,bg:e.border,note:`Foreground auto-selected for ≥ 7:1 contrast.`},{variant:`primary`,bg:e.primary,note:`White or black chosen for AAA contrast.`},{variant:`secondary`,bg:e.secondary,note:`White or black chosen for AAA contrast.`},{variant:`danger`,bg:e.danger,note:`Critical — white foreground typically passes AAA.`},{variant:`warning`,bg:e.warning,note:`Warning — black foreground used for most yellows.`},{variant:`success`,bg:e.success,note:`Success green — foreground auto-selected.`},{variant:`info`,bg:e.info,note:`Informational blue — foreground auto-selected.`}];return(0,u.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,u.jsx)(`div`,{style:{marginBottom:`24px`},children:(0,u.jsx)(o,{label:`WCAG 2.1 Compliance`,badges:[{criterion:`1.4.3 Contrast`,level:`AAA`,status:`PASS`},{criterion:`1.4.1 Use of Color`,level:`AA`,status:`PASS`},{criterion:`2.5.3 Label in Name`,level:`AA`,status:`PASS`},{criterion:`4.1.3 Status Messages`,level:`AA`,status:`PASS`}]})}),(0,u.jsx)(`h1`,{style:{fontSize:`2.25rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.03em`,lineHeight:1.15},children:`TkxBadge`}),(0,u.jsx)(`p`,{style:{fontSize:`15px`,color:e.textMuted,lineHeight:`1.75`,maxWidth:`640px`,margin:`0 0 8px`},children:`A compact label component for status, counts, categories, and indicators. Supports seven semantic variants, three sizes, filled and outlined styles, dot mode, and pulse animation. Foreground colors are auto-calculated for AAA contrast against every variant background.`}),(0,u.jsxs)(`p`,{style:{fontSize:`13px`,color:e.textMuted,lineHeight:`1.6`,maxWidth:`640px`,margin:`0 0 48px`},children:[(0,u.jsx)(`strong`,{style:{color:e.text},children:`WAI-ARIA:`}),` Badge renders as a`,` `,(0,u.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`<span>`}),`. For status announcements add`,` `,(0,u.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`role="status"`}),`. Dot badges require an`,` `,(0,u.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`aria-label`}),` `,`since they have no visible text content.`]}),(0,u.jsx)(s,{title:`All Variants`,description:`Seven semantic variants mapped to theme token colors. The text foreground is auto-computed by getAccessibleForeground() to guarantee WCAG AAA contrast against each background.`,theme:e,code:`<TkxBadge variant="default">Default</TkxBadge>
<TkxBadge variant="primary">Primary</TkxBadge>
<TkxBadge variant="secondary">Secondary</TkxBadge>
<TkxBadge variant="danger">Danger</TkxBadge>
<TkxBadge variant="warning">Warning</TkxBadge>
<TkxBadge variant="success">Success</TkxBadge>
<TkxBadge variant="info">Info</TkxBadge>`,children:(0,u.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,alignItems:`center`},children:f.map(e=>(0,u.jsx)(r,{variant:e,style:{textTransform:`capitalize`},children:e},e))})}),(0,u.jsx)(s,{title:`Outlined Style`,description:`outlined=true renders with a transparent background and 1px border using the variant color. The text also inherits the variant color. Useful on white/light backgrounds where filled badges are too heavy.`,theme:e,code:`<TkxBadge variant="default" outlined>Default</TkxBadge>
<TkxBadge variant="primary" outlined>Primary</TkxBadge>
<TkxBadge variant="secondary" outlined>Secondary</TkxBadge>
<TkxBadge variant="danger" outlined>Danger</TkxBadge>
<TkxBadge variant="warning" outlined>Warning</TkxBadge>
<TkxBadge variant="success" outlined>Success</TkxBadge>
<TkxBadge variant="info" outlined>Info</TkxBadge>`,children:(0,u.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,alignItems:`center`},children:f.map(e=>(0,u.jsx)(r,{variant:e,outlined:!0,style:{textTransform:`capitalize`},children:e},e))})}),(0,u.jsxs)(s,{title:`Sizes`,description:`Three size presets: sm (12px text, 16px min-height), md (12px text, 20px min-height — default), lg (14px text, 24px min-height). Use sm for table cells and tight UIs, lg for hero labels.`,theme:e,code:`<TkxBadge size="sm" variant="primary">sm — Small</TkxBadge>
<TkxBadge size="md" variant="primary">md — Medium (default)</TkxBadge>
<TkxBadge size="lg" variant="primary">lg — Large</TkxBadge>`,children:[(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`,alignItems:`center`},children:[(0,u.jsx)(r,{size:`sm`,variant:`primary`,children:`sm — Small`}),(0,u.jsx)(r,{size:`md`,variant:`primary`,children:`md — Medium (default)`}),(0,u.jsx)(r,{size:`lg`,variant:`primary`,children:`lg — Large`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`,alignItems:`center`,marginTop:`12px`},children:[(0,u.jsx)(r,{size:`sm`,variant:`danger`,outlined:!0,children:`sm outlined`}),(0,u.jsx)(r,{size:`md`,variant:`danger`,outlined:!0,children:`md outlined`}),(0,u.jsx)(r,{size:`lg`,variant:`danger`,outlined:!0,children:`lg outlined`})]})]}),(0,u.jsx)(s,{title:`Dot Badges`,description:`dot=true renders a filled circle using the variant's background color. The children string is used as aria-label for screen reader accessibility. Sizes: sm (6px), md (8px), lg (10px).`,theme:e,code:`// Provide children as the accessible label
<TkxBadge dot variant="success">Online</TkxBadge>
<TkxBadge dot variant="danger">Offline</TkxBadge>
<TkxBadge dot variant="warning">Away</TkxBadge>
<TkxBadge dot variant="default">Unknown</TkxBadge>

// Size variants
<TkxBadge dot size="sm" variant="primary">Small dot</TkxBadge>
<TkxBadge dot size="md" variant="primary">Medium dot</TkxBadge>
<TkxBadge dot size="lg" variant="primary">Large dot</TkxBadge>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,u.jsx)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`,flexWrap:`wrap`},children:[`success`,`danger`,`warning`,`default`,`primary`,`info`].map(t=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,u.jsx)(r,{dot:!0,variant:t,size:`md`,children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,u.jsx)(`span`,{style:{fontSize:`13px`,color:e.textMuted,textTransform:`capitalize`},children:t})]},t))}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,u.jsx)(`span`,{style:{fontSize:`12px`,color:e.textMuted},children:`Sizes:`}),(0,u.jsx)(r,{dot:!0,size:`sm`,variant:`primary`,children:`Small`}),(0,u.jsx)(r,{dot:!0,size:`md`,variant:`primary`,children:`Medium`}),(0,u.jsx)(r,{dot:!0,size:`lg`,variant:`primary`,children:`Large`})]})]})}),(0,u.jsx)(s,{title:`Pulse Animation`,description:`pulse=true adds a CSS pulse (opacity) animation. Suppressed when prefers-reduced-motion is enabled. Ideal for live, recording, or real-time indicators.`,theme:e,code:`// Filled pulse badges
<TkxBadge variant="danger" pulse>● Live</TkxBadge>
<TkxBadge variant="success" pulse>● Recording</TkxBadge>
<TkxBadge variant="warning" pulse>● Processing</TkxBadge>

// Dot pulse
<TkxBadge dot variant="success" pulse>Active</TkxBadge>
<TkxBadge dot variant="danger" pulse>Recording</TkxBadge>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`12px`,alignItems:`center`},children:[(0,u.jsx)(r,{variant:`danger`,pulse:!0,children:`● Live`}),(0,u.jsx)(r,{variant:`success`,pulse:!0,children:`● Recording`}),(0,u.jsx)(r,{variant:`warning`,pulse:!0,children:`● Processing`}),(0,u.jsx)(r,{variant:`info`,pulse:!0,children:`● Syncing`}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,marginLeft:`8px`},children:[(0,u.jsx)(`span`,{style:{fontSize:`12px`,color:e.textMuted},children:`Dot pulse:`}),(0,u.jsx)(r,{dot:!0,variant:`success`,pulse:!0,children:`Active`}),(0,u.jsx)(r,{dot:!0,variant:`danger`,pulse:!0,children:`Recording`})]})]})}),(0,u.jsx)(s,{title:`On Avatars`,description:`Overlay a dot badge on an avatar using position: relative on the container and position: absolute on the badge. The aria-label on the dot badge describes the user's status.`,theme:e,code:`// Position wrapper around avatar + dot
function AvatarWithStatus({ name, status, color }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Avatar circle */}
      <div style={{
        width: 44, height: 44, borderRadius: '50%',
        backgroundColor: theme.primary,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '16px', fontWeight: 700, color: '#fff',
      }}>
        {name[0]}
      </div>
      {/* Status dot — absolutely positioned bottom-right */}
      <TkxBadge
        dot
        variant={color}
        size="sm"
        pulse={status === 'online'}
        style={{ position: 'absolute', bottom: 1, right: 1,
          boxShadow: '0 0 0 2px ' + theme.surface }}
      >
        {status}
      </TkxBadge>
    </div>
  );
}`,children:(0,u.jsx)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`,flexWrap:`wrap`},children:[{name:`Avery`,bg:e.primary,status:`Online`,variant:`success`,pulse:!0},{name:`Blake`,bg:e.secondary,status:`Away`,variant:`warning`,pulse:!1},{name:`Casey`,bg:e.danger,status:`Busy`,variant:`danger`,pulse:!1},{name:`Dana`,bg:e.textMuted,status:`Offline`,variant:`default`,pulse:!1}].map(({name:t,bg:n,status:i,variant:a,pulse:o})=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`6px`},children:[(0,u.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`},children:[(0,u.jsx)(`div`,{style:{width:44,height:44,borderRadius:`50%`,backgroundColor:n,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`16px`,fontWeight:700,color:`#fff`},children:t[0]}),(0,u.jsx)(r,{dot:!0,variant:a,size:`sm`,pulse:o,style:{position:`absolute`,bottom:1,right:1,boxShadow:`0 0 0 2px ${e.surface}`},children:i})]}),(0,u.jsx)(`span`,{style:{fontSize:`11px`,color:e.textMuted},children:t}),(0,u.jsx)(`span`,{style:{fontSize:`11px`,color:e.textMuted},children:i})]},t))})}),(0,u.jsx)(s,{title:`On Buttons`,description:`Overlay a count badge on a button by wrapping both in a position: relative container. Click the button to add notifications, or clear to reset.`,theme:e,code:`const [count, setCount] = useState(3);

<div style={{ position: 'relative', display: 'inline-block' }}>
  <TkxButton variant="outline" leftIcon={<IconBell />}>
    Notifications
  </TkxButton>
  {count > 0 && (
    <TkxBadge
      variant="danger"
      size="sm"
      aria-label={\`\${count} unread notifications\`}
      style={{
        position: 'absolute',
        top: -6,
        right: -8,
        minWidth: '18px',
        boxShadow: '0 0 0 2px ' + theme.surface,
      }}
    >
      {count > 99 ? '99+' : count}
    </TkxBadge>
  )}
</div>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`32px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,u.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`},children:[(0,u.jsx)(i,{variant:`outline`,leftIcon:(0,u.jsx)(p,{color:e.textMuted}),children:`Notifications`}),t>0&&(0,u.jsx)(r,{variant:`danger`,size:`sm`,"aria-label":`${t} unread notifications`,style:{position:`absolute`,top:-6,right:-8,minWidth:`18px`,boxShadow:`0 0 0 2px ${e.surface}`},children:t>99?`99+`:t})]}),(0,u.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`},children:[(0,u.jsx)(i,{variant:`ghost`,leftIcon:(0,u.jsx)(m,{color:e.textMuted}),children:`Inbox`}),(0,u.jsx)(r,{variant:`primary`,size:`sm`,pulse:!0,style:{position:`absolute`,top:-6,right:-8,minWidth:`18px`,boxShadow:`0 0 0 2px ${e.surface}`},children:`12`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,u.jsx)(i,{size:`sm`,colorScheme:`success`,onClick:()=>n(e=>e+1),children:`+ Add notification`}),(0,u.jsx)(i,{size:`sm`,variant:`outline`,colorScheme:`danger`,onClick:()=>n(0),children:`Clear all`})]})]})}),(0,u.jsx)(s,{title:`Status Indicators`,description:`A common pattern for user presence: dot + variant + label text. Use aria-label on the dot for screen readers, and pair it with visible text for WCAG 1.4.1 (Use of Color).`,theme:e,code:`// Status row component
function StatusRow({ label, variant, pulse = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <TkxBadge dot variant={variant} size="sm" pulse={pulse}>
        {label} status
      </TkxBadge>
      <span style={{ fontSize: '14px', color: theme.text }}>{label}</span>
    </div>
  );
}

<StatusRow label="Online"  variant="success" pulse />
<StatusRow label="Away"    variant="warning" />
<StatusRow label="Busy"    variant="danger" />
<StatusRow label="Offline" variant="default" />`,children:(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[{label:`Online`,variant:`success`,pulse:!0},{label:`Away`,variant:`warning`,pulse:!1},{label:`Busy`,variant:`danger`,pulse:!1},{label:`In a meeting`,variant:`secondary`,pulse:!1},{label:`Offline`,variant:`default`,pulse:!1}].map(({label:t,variant:n,pulse:i})=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,u.jsxs)(r,{dot:!0,variant:n,size:`sm`,pulse:i,children:[t,` status`]}),(0,u.jsx)(`span`,{style:{fontSize:`14px`,color:e.text},children:t})]},t))})}),(0,u.jsx)(s,{title:`Custom Color via Theme — createTheme`,description:`TkxBadge reads variant colors from the active ThemeProvider. Use createTheme to replace any color token — all badges using that variant update automatically.`,theme:e,code:`import { createTheme, ThemeProvider, TkxBadge } from 'tekivex-ui';

// Override primary with your brand color
const brandTheme = createTheme({
  primary: '#7c3aed',   // violet
  secondary: '#0ea5e9', // sky
  success: '#10b981',   // emerald
  danger: '#ef4444',    // red
  warning: '#f59e0b',   // amber
  info: '#3b82f6',      // blue
});

function App() {
  return (
    <ThemeProvider theme={brandTheme}>
      <TkxBadge variant="primary">Violet</TkxBadge>
      <TkxBadge variant="secondary">Sky</TkxBadge>
      <TkxBadge variant="success">Emerald</TkxBadge>
    </ThemeProvider>
  );
}

// Or override inline via style for one-off colors:
<TkxBadge
  style={{ backgroundColor: '#7c3aed', color: '#fff', border: 'none' }}
>
  Custom Violet
</TkxBadge>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,alignItems:`center`},children:[[{label:`Violet`,bg:`#7c3aed`,color:`#fff`},{label:`Sky`,bg:`#0ea5e9`,color:`#fff`},{label:`Emerald`,bg:`#10b981`,color:`#fff`},{label:`Rose`,bg:`#f43f5e`,color:`#fff`},{label:`Amber`,bg:`#f59e0b`,color:`#000`},{label:`Teal`,bg:`#14b8a6`,color:`#fff`}].map(({label:e,bg:t,color:n})=>(0,u.jsx)(r,{style:{backgroundColor:t,color:n,border:`none`},children:e},e)),(0,u.jsx)(`span`,{style:{fontSize:`12px`,color:e.textMuted,marginLeft:`4px`},children:`(brand colors via createTheme or style)`})]})}),(0,u.jsx)(`hr`,{style:h}),(0,u.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 20px`,letterSpacing:`-0.02em`},children:`Props Reference`}),(0,u.jsx)(`div`,{style:{marginBottom:`48px`},children:(0,u.jsx)(c,{props:d})}),(0,u.jsx)(`hr`,{style:h}),(0,u.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 20px`,letterSpacing:`-0.02em`},children:`Accessibility Notes`}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,marginBottom:`24px`},children:[(0,u.jsx)(a,{criterion:`1.4.1 Use of Color`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`1.4.3 Contrast (Minimum)`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`1.4.6 Contrast (Enhanced)`,level:`AAA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`2.5.3 Label in Name`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`4.1.3 Status Messages`,level:`AA`,status:`PASS`})]}),(0,u.jsxs)(`div`,{style:{borderRadius:`10px`,border:`1px solid ${e.border}`,overflow:`hidden`,marginBottom:`24px`},children:[(0,u.jsx)(`div`,{style:{padding:`12px 16px`,backgroundColor:e.surfaceAlt,borderBottom:`1px solid ${e.border}`},children:(0,u.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:700,color:e.textMuted,letterSpacing:`0.08em`,textTransform:`uppercase`},children:`Variant Contrast Reference`})}),(0,u.jsx)(`div`,{style:{padding:`4px 0`},children:y.map(({variant:t,bg:n,note:i})=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,padding:`10px 16px`,borderBottom:`1px solid ${e.border}`},children:[(0,u.jsx)(r,{variant:t,size:`sm`,style:{minWidth:`80px`,justifyContent:`center`,textTransform:`capitalize`},children:t}),(0,u.jsx)(`code`,{style:{fontSize:`11px`,color:e.textMuted,fontFamily:`monospace`,minWidth:`80px`},children:n}),(0,u.jsx)(`span`,{style:{fontSize:`13px`,color:e.textMuted},children:i})]},t))})]}),(0,u.jsxs)(`div`,{style:g,children:[(0,u.jsx)(`p`,{style:_,children:`Color Is Not the Only Indicator`}),(0,u.jsx)(`p`,{style:v,children:`WCAG 1.4.1 requires that color is never the only means of conveying information. Always pair a colored badge with text content or a distinct icon (e.g., "● Online" not just a green dot without label).`}),(0,u.jsxs)(`p`,{style:v,children:[`Dot badges address this via the `,(0,u.jsx)(`code`,{children:`aria-label`}),` derived from children text. The `,(0,u.jsx)(`code`,{children:`dot`}),` variant uses `,(0,u.jsx)(`code`,{children:`aria-label`}),` so screen readers announce the status even without visible text.`]})]}),(0,u.jsxs)(`div`,{style:g,children:[(0,u.jsx)(`p`,{style:_,children:`Status Messages (WCAG 4.1.3)`}),(0,u.jsxs)(`p`,{style:v,children:[`If a badge appears or updates dynamically (e.g., a notification count increasing), wrap the badge region in a `,(0,u.jsx)(`code`,{children:`<div role="status" aria-live="polite">`}),` so screen readers announce the change without losing focus.`]}),(0,u.jsxs)(`p`,{style:v,children:[`For critical alerts (e.g., error counts), use `,(0,u.jsx)(`code`,{children:`aria-live="assertive"`}),` to interrupt the screen reader immediately.`]})]}),(0,u.jsxs)(`div`,{style:g,children:[(0,u.jsx)(`p`,{style:_,children:`Pulse Animation`}),(0,u.jsxs)(`p`,{style:v,children:[`The `,(0,u.jsx)(`code`,{children:`pulse`}),` animation (CSS `,(0,u.jsx)(`code`,{children:`animate-pulse`}),`) uses opacity oscillation — not motion/translation — which is generally safe. However, it is suppressed via `,(0,u.jsx)(`code`,{children:`prefers-reduced-motion: reduce`}),` in the tkx() engine for users who are sensitive to animation.`]}),(0,u.jsxs)(`p`,{style:v,children:[`Do not use `,(0,u.jsx)(`code`,{children:`pulse`}),` as the only indicator that something is "live" — pair it with a text label ("● Live") so static users understand the state.`]})]}),(0,u.jsxs)(`div`,{style:g,children:[(0,u.jsx)(`p`,{style:_,children:`Count Badges on Buttons`}),(0,u.jsx)(`p`,{style:v,children:`When overlaying a count badge on a button, the button's accessible name should include the count so screen readers announce "Notifications, 3 unread" rather than just "Notifications".`}),(0,u.jsxs)(`p`,{style:v,children:[`One approach: `,(0,u.jsx)(`code`,{children:"<TkxButton aria-label={`Notifications (${count} unread)`}>"}),`. The visual badge remains for sighted users; the aria-label gives screen reader users the count in context.`]})]})]})}export{h as BadgePage};