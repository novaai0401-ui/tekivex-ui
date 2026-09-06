import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{Yt as r,en as i}from"./tekivex-ui-C9wlHCjq.js";import{n as a,r as o}from"./index-BLCt_kC2.js";import{t as s}from"./DemoSection-DEixK5oF.js";import{t as c}from"./PropTable-Cy1Qr_aV.js";var l=e(t(),1),u=n(),d=[{name:`label`,type:`string`,required:!0,description:`Visible label text. Rendered as a <label> element properly associated via htmlFor/id. Also used for aria-label fallback.`},{name:`id`,type:`string`,default:`auto`,description:`Input id. Auto-generated with useId() if not provided. Used to associate the label.`},{name:`error`,type:`string`,default:`undefined`,description:`Error message shown below the input with an icon. Sets aria-invalid and aria-describedby.`},{name:`hint`,type:`string`,default:`undefined`,description:`Hint text shown below the input (hidden when error is present). Linked via aria-describedby.`},{name:`leftAddon`,type:`ReactNode`,default:`undefined`,description:`Node rendered on the left side inside the input border (icon, currency symbol, country code, etc.).`},{name:`rightAddon`,type:`ReactNode`,default:`undefined`,description:`Node rendered on the right side inside the input border (unit, button, icon, etc.).`},{name:`isInvalid`,type:`boolean`,default:`false`,description:`Manually set error state without a message. Sets aria-invalid and applies danger border color.`},{name:`isRequired`,type:`boolean`,default:`false`,description:`Shows a red asterisk beside the label and sets aria-required on the input.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables the input and reduces opacity to 60%.`},{name:`className`,type:`string`,default:`undefined`,description:`Extra class names applied to the root wrapper div.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles applied to the root wrapper div.`},{name:`...rest`,type:`InputHTMLAttributes<HTMLInputElement>`,default:`—`,description:`All standard input attributes (type, placeholder, value, onChange, onBlur, etc.) forwarded to the input.`}];function f({color:e=`currentColor`}){return(0,u.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:e,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,u.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]})}function p({color:e=`currentColor`}){return(0,u.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:e,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,u.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]})}function m({color:e=`currentColor`}){return(0,u.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:e,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,u.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]})}function h({color:e=`currentColor`}){return(0,u.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:e,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24`}),(0,u.jsx)(`line`,{x1:`1`,y1:`1`,x2:`23`,y2:`23`})]})}function g({color:e=`currentColor`}){return(0,u.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:e,strokeWidth:`2.5`,strokeLinecap:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,u.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}function _({color:e=`currentColor`}){return(0,u.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:e,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`}),(0,u.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`})]})}function v({theme:e}){let[t,n]=(0,l.useState)(!1),[v,y]=(0,l.useState)(``),[b,x]=(0,l.useState)({firstName:``,lastName:``,email:``,phone:``}),[S,C]=(0,l.useState)({}),[w,T]=(0,l.useState)(!1);function E(e,t){x(n=>({...n,[e]:t})),S[e]&&C(t=>({...t,[e]:void 0}))}function D(){let e={};b.firstName.trim()||(e.firstName=`First name is required.`),b.lastName.trim()||(e.lastName=`Last name is required.`),b.email.includes(`@`)||(e.email=`Enter a valid email address.`),Object.keys(e).length?C(e):(T(!0),C({}))}let O={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`},k={borderRadius:`10px`,border:`1px solid ${e.border}`,backgroundColor:e.surfaceAlt,padding:`20px 24px`,marginBottom:`24px`},A={fontSize:`13px`,fontWeight:700,color:e.text,margin:`0 0 12px`,display:`flex`,alignItems:`center`,gap:`6px`},j={fontSize:`13.5px`,color:e.textMuted,lineHeight:`1.7`,margin:`0 0 6px`};return(0,u.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,u.jsx)(`div`,{style:{marginBottom:`24px`},children:(0,u.jsx)(o,{label:`WCAG 2.1 Compliance`,badges:[{criterion:`1.3.1 Info & Relationships`,level:`AA`,status:`PASS`},{criterion:`1.4.3 Contrast`,level:`AAA`,status:`PASS`},{criterion:`2.4.6 Labels/Instructions`,level:`AA`,status:`PASS`},{criterion:`3.3.1 Error Identification`,level:`AA`,status:`PASS`},{criterion:`3.3.2 Labels / Instructions`,level:`AA`,status:`PASS`}]})}),(0,u.jsx)(`h1`,{style:{fontSize:`2.25rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.03em`,lineHeight:1.15},children:`TkxInput`}),(0,u.jsxs)(`p`,{style:{fontSize:`15px`,color:e.textMuted,lineHeight:`1.75`,maxWidth:`640px`,margin:`0 0 8px`},children:[`An accessible, theme-aware text input built on the WAI-ARIA textbox pattern. Features auto-associated labels, error and hint states linked via `,(0,u.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`aria-describedby`}),`, left/right addon slots, required field indicators, and full HTML input attribute forwarding.`]}),(0,u.jsxs)(`p`,{style:{fontSize:`13px`,color:e.textMuted,lineHeight:`1.6`,maxWidth:`640px`,margin:`0 0 48px`},children:[(0,u.jsx)(`strong`,{style:{color:e.text},children:`WAI-ARIA:`}),` Every input is paired with a visible`,` `,(0,u.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`<label>`}),` `,`via `,(0,u.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`htmlFor/id`}),`. Errors set `,(0,u.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`aria-invalid="true"`}),` `,`and link to the message via `,(0,u.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`aria-describedby`}),`.`]}),(0,u.jsx)(s,{title:`Basic Input`,description:`Provide a label (required) and optional placeholder. The id is auto-generated with useId() if not provided, ensuring the label association always works.`,theme:e,code:`<TkxInput
  label="Full Name"
  placeholder="e.g. Avery Chen"
/>

<TkxInput
  label="Company"
  placeholder="Your company name"
/>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`,maxWidth:`380px`},children:[(0,u.jsx)(r,{label:`Full Name`,placeholder:`e.g. Avery Chen`}),(0,u.jsx)(r,{label:`Company`,placeholder:`Your company name`})]})}),(0,u.jsx)(s,{title:`Required Field`,description:`isRequired renders a red asterisk beside the label and sets aria-required on the input. The asterisk is aria-hidden — screen readers use aria-required instead.`,theme:e,code:`<TkxInput
  label="Email Address"
  type="email"
  placeholder="you@company.com"
  isRequired
/>

<TkxInput
  label="Password"
  type="password"
  placeholder="Min. 8 characters"
  isRequired
/>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`,maxWidth:`380px`},children:[(0,u.jsx)(r,{label:`Email Address`,type:`email`,placeholder:`you@company.com`,isRequired:!0}),(0,u.jsx)(r,{label:`Password`,type:`password`,placeholder:`Min. 8 characters`,isRequired:!0})]})}),(0,u.jsx)(s,{title:`Error State`,description:`Pass an error string to show the validation message with an icon. The border switches to theme.danger, aria-invalid is set to true, and the message is linked via aria-describedby for screen readers.`,theme:e,code:`<TkxInput
  label="Email Address"
  type="email"
  value="not-an-email"
  error="Please enter a valid email address."
  isRequired
/>

<TkxInput
  label="Username"
  value="x"
  error="Username must be at least 3 characters."
/>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`,maxWidth:`380px`},children:[(0,u.jsx)(r,{label:`Email Address`,type:`email`,defaultValue:`not-an-email`,error:`Please enter a valid email address.`,isRequired:!0}),(0,u.jsx)(r,{label:`Username`,defaultValue:`x`,error:`Username must be at least 3 characters.`})]})}),(0,u.jsx)(s,{title:`Hint Text`,description:`hint renders supplementary guidance below the input, linked via aria-describedby. It is hidden when an error message is present to avoid conflicting announcements.`,theme:e,code:`<TkxInput
  label="Password"
  type="password"
  placeholder="Create a password"
  hint="Must be at least 8 characters with one uppercase and one number."
  isRequired
/>

<TkxInput
  label="Username"
  placeholder="Pick a unique username"
  hint="3–20 characters. Letters, numbers, and underscores only."
/>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`,width:`100%`,maxWidth:`400px`},children:[(0,u.jsx)(r,{label:`Password`,type:`password`,placeholder:`Create a password`,hint:`Must be at least 8 characters with one uppercase and one number.`,isRequired:!0}),(0,u.jsx)(r,{label:`Username`,placeholder:`Pick a unique username`,hint:`3–20 characters. Letters, numbers, and underscores only.`})]})}),(0,u.jsx)(s,{title:`With Addons`,description:`leftAddon and rightAddon accept any ReactNode rendered flush with the input border. Common uses: currency symbols, country codes, search icons, copy buttons, or unit labels.`,theme:e,code:`// Icon left addon
<TkxInput
  label="Search"
  placeholder="Search components..."
  leftAddon={<IconSearch />}
/>

// Text left addon (currency)
<TkxInput
  label="Price"
  type="number"
  placeholder="0.00"
  leftAddon="$"
/>

// Text right addon (domain)
<TkxInput
  label="Subdomain"
  placeholder="yourname"
  rightAddon=".tekivex.io"
/>

// Both addons
<TkxInput
  label="Website"
  placeholder="example"
  leftAddon="https://"
  rightAddon=".com"
/>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`,maxWidth:`400px`},children:[(0,u.jsx)(r,{label:`Search`,placeholder:`Search components...`,leftAddon:(0,u.jsx)(f,{color:e.textMuted})}),(0,u.jsx)(r,{label:`Price`,type:`number`,placeholder:`0.00`,leftAddon:(0,u.jsx)(`span`,{style:{fontWeight:600},children:`$`})}),(0,u.jsx)(r,{label:`Subdomain`,placeholder:`yourname`,rightAddon:(0,u.jsx)(`span`,{style:{fontSize:`13px`,whiteSpace:`nowrap`},children:`.tekivex.io`})}),(0,u.jsx)(r,{label:`Website`,placeholder:`example`,leftAddon:(0,u.jsx)(`span`,{style:{fontSize:`12px`,whiteSpace:`nowrap`},children:`https://`}),rightAddon:(0,u.jsx)(`span`,{style:{fontSize:`12px`,whiteSpace:`nowrap`},children:`.com`})})]})}),(0,u.jsx)(s,{title:`Disabled State`,description:`disabled reduces opacity to 60%, prevents interaction, and sets the disabled attribute on the input element. The label remains visible and legible.`,theme:e,code:`<TkxInput
  label="Account Email"
  value="avery@tekivex.io"
  disabled
  hint="Contact support to change your account email."
/>

<TkxInput
  label="SSO Provider"
  value="Google Workspace"
  disabled
/>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`,maxWidth:`380px`},children:[(0,u.jsx)(r,{label:`Account Email`,defaultValue:`avery@tekivex.io`,disabled:!0,hint:`Contact support to change your account email.`}),(0,u.jsx)(r,{label:`SSO Provider`,defaultValue:`Google Workspace`,disabled:!0})]})}),(0,u.jsx)(s,{title:`Input Types`,description:`TkxInput forwards the type attribute to the native input. The password field below includes a show/hide toggle implemented via a rightAddon button.`,theme:e,code:`// Email
<TkxInput label="Email" type="email" placeholder="you@example.com" />

// Password with show/hide toggle
const [show, setShow] = useState(false);
<TkxInput
  label="Password"
  type={show ? 'text' : 'password'}
  placeholder="••••••••"
  rightAddon={
    <button
      type="button"
      onClick={() => setShow(s => !s)}
      aria-label={show ? 'Hide password' : 'Show password'}
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: theme.textMuted }}
    >
      {show ? <IconEyeOff /> : <IconEye />}
    </button>
  }
/>

// Number
<TkxInput label="Age" type="number" placeholder="18" min={1} max={120} />

// Search
<TkxInput label="Search" type="search" placeholder="Search…" />`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`,maxWidth:`380px`},children:[(0,u.jsx)(r,{label:`Email`,type:`email`,placeholder:`you@example.com`,leftAddon:(0,u.jsx)(p,{color:e.textMuted})}),(0,u.jsx)(r,{label:`Password`,type:t?`text`:`password`,placeholder:`••••••••`,isRequired:!0,rightAddon:(0,u.jsx)(`button`,{type:`button`,onClick:()=>n(e=>!e),"aria-label":t?`Hide password`:`Show password`,style:{background:`none`,border:`none`,cursor:`pointer`,padding:`4px`,color:e.textMuted,display:`flex`,alignItems:`center`},children:t?(0,u.jsx)(h,{color:e.textMuted}):(0,u.jsx)(m,{color:e.textMuted})})}),(0,u.jsx)(r,{label:`Age`,type:`number`,placeholder:`18`,min:1,max:120}),(0,u.jsx)(r,{label:`Search`,type:`search`,placeholder:`Search…`,leftAddon:(0,u.jsx)(f,{color:e.textMuted})})]})}),(0,u.jsx)(s,{title:`Search Bar Example`,description:`A full-featured search bar with a leading icon addon, live clear button, and type='search' for browser-native UX. The clear button only appears when the field has content.`,theme:e,code:`const [query, setQuery] = useState('');

<TkxInput
  label="Search documentation"
  type="search"
  placeholder="Search components, props, patterns…"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  leftAddon={<IconSearch />}
  rightAddon={
    query ? (
      <button
        type="button"
        aria-label="Clear search"
        onClick={() => setQuery('')}
        style={{ /* style */ }}
      >
        <IconX />
      </button>
    ) : undefined
  }
/>`,children:(0,u.jsxs)(`div`,{style:{width:`100%`,maxWidth:`480px`},children:[(0,u.jsx)(r,{label:`Search documentation`,type:`search`,placeholder:`Search components, props, patterns…`,value:v,onChange:e=>y(e.target.value),leftAddon:(0,u.jsx)(f,{color:e.textMuted}),rightAddon:v?(0,u.jsx)(`button`,{type:`button`,"aria-label":`Clear search`,onClick:()=>y(``),style:{background:`none`,border:`none`,cursor:`pointer`,padding:`4px`,color:e.textMuted,display:`flex`,alignItems:`center`},children:(0,u.jsx)(g,{color:e.textMuted})}):void 0}),v&&(0,u.jsxs)(`p`,{style:{margin:`8px 0 0`,fontSize:`12px`,color:e.textMuted},children:[`Searching for: `,(0,u.jsxs)(`strong`,{style:{color:e.text},children:[`"`,v,`"`]})]})]})}),(0,u.jsx)(s,{title:`Form Group Example`,description:`Multiple TkxInput fields composed into a live-validated contact form. Click Submit to trigger error states on empty required fields.`,theme:e,code:`const [values, setValues] = useState({ firstName: '', lastName: '', email: '', phone: '' });
const [errors, setErrors] = useState({});

function handleSubmit() {
  const e = {};
  if (!values.firstName) e.firstName = 'First name is required.';
  if (!values.lastName)  e.lastName  = 'Last name is required.';
  if (!values.email.includes('@')) e.email = 'Enter a valid email.';
  setErrors(e);
}

<form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
    <TkxInput label="First Name" isRequired
      value={values.firstName} onChange={…} error={errors.firstName} />
    <TkxInput label="Last Name" isRequired
      value={values.lastName} onChange={…} error={errors.lastName} />
  </div>
  <TkxInput label="Email" type="email" isRequired
    value={values.email} onChange={…} error={errors.email}
    leftAddon={<IconMail />} />
  <TkxInput label="Phone" type="tel"
    value={values.phone} onChange={…}
    leftAddon="+1" hint="Optional. Used only for 2FA." />
  <TkxButton type="submit" isFullWidth>Submit</TkxButton>
</form>`,children:(0,u.jsx)(`div`,{style:{width:`100%`,maxWidth:`480px`},children:w?(0,u.jsxs)(`div`,{style:{padding:`20px 24px`,borderRadius:`10px`,backgroundColor:`${e.success}15`,border:`1px solid ${e.success}30`,color:e.success,fontSize:`14px`,fontWeight:600},children:[`✓ Form submitted successfully! Values: `,JSON.stringify(b)]}):(0,u.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),D()},style:{display:`flex`,flexDirection:`column`,gap:`16px`},noValidate:!0,children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`16px`},children:[(0,u.jsx)(r,{label:`First Name`,isRequired:!0,placeholder:`Avery`,leftAddon:(0,u.jsx)(_,{color:e.textMuted}),value:b.firstName,onChange:e=>E(`firstName`,e.target.value),error:S.firstName}),(0,u.jsx)(r,{label:`Last Name`,isRequired:!0,placeholder:`Chen`,value:b.lastName,onChange:e=>E(`lastName`,e.target.value),error:S.lastName})]}),(0,u.jsx)(r,{label:`Email Address`,type:`email`,isRequired:!0,placeholder:`you@company.com`,leftAddon:(0,u.jsx)(p,{color:e.textMuted}),value:b.email,onChange:e=>E(`email`,e.target.value),error:S.email}),(0,u.jsx)(r,{label:`Phone Number`,type:`tel`,placeholder:`(555) 000-0000`,leftAddon:(0,u.jsx)(`span`,{style:{fontSize:`13px`,fontWeight:600},children:`+1`}),value:b.phone,onChange:e=>E(`phone`,e.target.value),hint:`Optional. Used only for two-factor authentication.`}),(0,u.jsx)(i,{type:`submit`,isFullWidth:!0,children:`Submit Form`})]})})}),(0,u.jsx)(s,{title:`Custom Styling`,description:`Pass style to the root wrapper or use className for atomic CSS overrides. For the input border and background, apply style directly to the wrapper — the inner input inherits theme colors.`,theme:e,code:`// Rounded pill style via style override on wrapper
<TkxInput
  label="Search"
  placeholder="Pill search input"
  leftAddon={<IconSearch />}
  style={{ '--input-radius': '9999px' } as CSSProperties}
  className="rounded-full"
/>

// Brand accent border
<TkxInput
  label="API Key"
  placeholder="tkx_live_..."
  style={{
    // Wrapper styling
  }}
  className="font-mono"
/>`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`,maxWidth:`380px`},children:[(0,u.jsx)(r,{label:`Monospace Input`,placeholder:`tkx_live_abc123...`,hint:`API keys use monospace font for readability.`,style:{fontFamily:`"JetBrains Mono", "Fira Code", monospace`}}),(0,u.jsx)(r,{label:`Compact Search`,placeholder:`Quick find…`,leftAddon:(0,u.jsx)(f,{color:e.textMuted})})]})}),(0,u.jsx)(`hr`,{style:O}),(0,u.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 20px`,letterSpacing:`-0.02em`},children:`Props Reference`}),(0,u.jsx)(`div`,{style:{marginBottom:`48px`},children:(0,u.jsx)(c,{props:d})}),(0,u.jsx)(`hr`,{style:O}),(0,u.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 20px`,letterSpacing:`-0.02em`},children:`Accessibility Notes`}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,marginBottom:`24px`},children:[(0,u.jsx)(a,{criterion:`1.3.1 Info & Relationships`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`1.4.3 Contrast (Minimum)`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`2.4.6 Headings and Labels`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`3.3.1 Error Identification`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`3.3.2 Labels or Instructions`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`3.3.3 Error Suggestion`,level:`AA`,status:`PASS`}),(0,u.jsx)(a,{criterion:`4.1.2 Name, Role, Value`,level:`AA`,status:`PASS`})]}),(0,u.jsxs)(`div`,{style:k,children:[(0,u.jsx)(`p`,{style:A,children:`Label Association`}),(0,u.jsxs)(`p`,{style:j,children:[`Every TkxInput renders a visible `,(0,u.jsx)(`code`,{children:`<label>`}),` element connected to the input via `,(0,u.jsx)(`code`,{children:`htmlFor`}),` / `,(0,u.jsx)(`code`,{children:`id`}),`. The `,(0,u.jsx)(`code`,{children:`id`}),` is auto-generated using React's `,(0,u.jsx)(`code`,{children:`useId()`}),` hook when not provided, so you never accidentally create duplicate IDs.`]}),(0,u.jsxs)(`p`,{style:j,children:[`Never use `,(0,u.jsx)(`code`,{children:`placeholder`}),` as a replacement for `,(0,u.jsx)(`code`,{children:`label`}),` — placeholders disappear on input and have very low contrast by default.`]})]}),(0,u.jsxs)(`div`,{style:k,children:[(0,u.jsx)(`p`,{style:A,children:`Error State & aria-invalid`}),(0,u.jsxs)(`p`,{style:j,children:[`When `,(0,u.jsx)(`code`,{children:`error`}),` is provided, the input receives `,(0,u.jsx)(`code`,{children:`aria-invalid="true"`}),` and `,(0,u.jsx)(`code`,{children:`aria-describedby`}),` pointing to the error element's id. Screen readers announce the error message when the user focuses the field.`]}),(0,u.jsxs)(`p`,{style:j,children:[`Error messages include an icon (`,(0,u.jsx)(`code`,{children:`aria-hidden="true"`}),`) and are wrapped in `,(0,u.jsx)(`code`,{children:`role="alert"`}),` for live announcement — so VoiceOver and NVDA announce them immediately when they appear.`]}),(0,u.jsxs)(`p`,{style:j,children:[`The hint is hidden when an error is shown to prevent two competing `,(0,u.jsx)(`code`,{children:`aria-describedby`}),` messages. Both ids are still linked to the input so the active message is announced.`]})]}),(0,u.jsxs)(`div`,{style:k,children:[(0,u.jsx)(`p`,{style:A,children:`Required Fields`}),(0,u.jsxs)(`p`,{style:j,children:[`The visual red asterisk is `,(0,u.jsx)(`code`,{children:`aria-hidden="true"`}),`. Screen readers are notified via `,(0,u.jsx)(`code`,{children:`aria-required="true"`}),` on the input element.`]}),(0,u.jsx)(`p`,{style:j,children:`Add a note near the form header indicating that "* denotes required fields" as a sighted-user convention (WCAG 3.3.2).`})]}),(0,u.jsxs)(`div`,{style:k,children:[(0,u.jsx)(`p`,{style:A,children:`Addons & Keyboard Access`}),(0,u.jsxs)(`p`,{style:j,children:[`Addons are decorative by default (wrapped in a `,(0,u.jsx)(`code`,{children:`div`}),`). If your addon contains an interactive element (like the password show/hide toggle), ensure it has an `,(0,u.jsx)(`code`,{children:`aria-label`}),` and is reachable via Tab.`]}),(0,u.jsxs)(`p`,{style:j,children:[`For the password show/hide pattern, the toggle button should announce its state change: `,(0,u.jsx)(`code`,{children:`aria-label="Show password"`}),` when hidden, `,(0,u.jsx)(`code`,{children:`"Hide password"`}),` when shown.`]})]})]})}export{v as InputPage};