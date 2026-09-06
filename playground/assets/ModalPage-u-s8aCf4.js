import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{Bt as r,Lt as i,Rt as a,Vt as o,Yt as s,en as c}from"./tekivex-ui-C9wlHCjq.js";import{r as l}from"./index-BLCt_kC2.js";import{t as u}from"./DemoSection-DEixK5oF.js";import{t as d}from"./PropTable-Cy1Qr_aV.js";var f=e(t(),1),p=n();function m({theme:e}){let[t,n]=(0,f.useState)(!1),[r,o]=(0,f.useState)(``),[l,u]=(0,f.useState)(``),[d,m]=(0,f.useState)(!1),h=()=>{m(!0),n(!1)},g=()=>{n(!1),m(!1)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>{m(!1),n(!0)},children:`Open form modal`}),d&&(0,p.jsx)(`div`,{style:{marginTop:10},children:(0,p.jsxs)(a,{variant:`success`,title:`Profile updated`,children:[`Name: `,(0,p.jsx)(`strong`,{children:r||`(none)`}),` · Email: `,(0,p.jsx)(`strong`,{children:l||`(none)`})]})}),(0,p.jsx)(i,{isOpen:t,onClose:g,title:`Edit Profile`,size:`sm`,footer:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{variant:`outline`,colorScheme:`secondary`,size:`sm`,onClick:g,children:`Cancel`}),(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:h,children:`Save changes`})]}),children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,p.jsx)(s,{label:`Full name`,placeholder:`Jane Doe`,value:r,onChange:e=>o(e.target.value),isRequired:!0}),(0,p.jsx)(s,{label:`Email address`,type:`email`,placeholder:`jane@example.com`,value:l,onChange:e=>u(e.target.value),isRequired:!0})]})})]})}function h({theme:e}){let[t,n]=(0,f.useState)(!1),[r,o]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{colorScheme:`danger`,variant:`outline`,size:`sm`,onClick:()=>{o(!1),n(!0)},children:`Delete account`}),r&&(0,p.jsx)(`div`,{style:{marginTop:10},children:(0,p.jsx)(a,{variant:`danger`,title:`Account deleted`,children:`The account has been permanently removed.`})}),(0,p.jsx)(i,{isOpen:t,onClose:()=>n(!1),title:`Delete Account?`,size:`sm`,footer:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{variant:`outline`,colorScheme:`secondary`,size:`sm`,onClick:()=>n(!1),children:`Cancel`}),(0,p.jsx)(c,{colorScheme:`danger`,size:`sm`,onClick:()=>{o(!0),n(!1)},children:`Yes, delete permanently`})]}),children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(a,{variant:`danger`,title:`This action cannot be undone`,children:`All your data, projects, and billing information will be permanently erased. There is no recovery option.`}),(0,p.jsx)(`p`,{style:{marginTop:16,fontSize:14,lineHeight:1.6,color:e.text},children:`Are you sure you want to delete your account?`})]})})]})}function g(){let[e,t]=(0,f.useState)(!1),[n,r]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>t(!0),children:`Open outer modal`}),(0,p.jsxs)(i,{isOpen:e,onClose:()=>{t(!1),r(!1)},title:`Outer Modal`,size:`md`,footer:(0,p.jsx)(c,{variant:`outline`,colorScheme:`secondary`,size:`sm`,onClick:()=>{t(!1),r(!1)},children:`Close`}),children:[(0,p.jsx)(`p`,{style:{fontSize:14,lineHeight:1.6,margin:`0 0 16px`},children:`This is the outer modal. Click the button below to open a second, nested modal on top of this one.`}),(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>r(!0),children:`Open inner modal`}),(0,p.jsx)(i,{isOpen:n,onClose:()=>r(!1),title:`Inner Modal`,size:`sm`,footer:(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>r(!1),children:`Got it`}),children:(0,p.jsx)(`p`,{style:{fontSize:14,lineHeight:1.6,margin:0},children:`This is the inner (nested) modal. Focus is trapped here while it is open. Pressing Escape closes this modal; the outer modal remains.`})})]})]})}function _(){let[e,t]=(0,f.useState)(!1),[n,a]=(0,f.useState)(void 0),[s,l]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>{l(!1),a(0),t(!0);let e=0,n=setInterval(()=>{e+=Math.floor(Math.random()*12)+5,e>=100?(clearInterval(n),a(100),setTimeout(()=>{l(!0)},400)):a(e)},200)},disabled:e,children:`Run async operation`}),(0,p.jsx)(i,{isOpen:e,onClose:()=>{s&&(t(!1),a(void 0),l(!1))},title:s?`Operation Complete`:`Processing…`,size:`sm`,closeOnOverlayClick:s,footer:s?(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>{t(!1),a(void 0),l(!1)},children:`Done`}):void 0,children:(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`center`,textAlign:`center`,padding:`8px 0`},children:s?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{variant:`success`,size:`lg`,children:`Complete`}),(0,p.jsx)(`p`,{style:{fontSize:14,margin:0},children:`All tasks finished successfully.`})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{variant:`circular`,size:`lg`,label:`Processing`}),(0,p.jsx)(`div`,{style:{width:`100%`},children:(0,p.jsx)(r,{value:n,variant:`linear`,size:`md`,label:`Overall progress`,showValue:!0})}),(0,p.jsx)(`p`,{style:{fontSize:13,margin:0},children:`Please wait, this may take a moment…`})]})})})]})}function v({theme:e}){let[t,n]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>n(!0),children:`Open styled modal`}),(0,p.jsx)(i,{isOpen:t,onClose:()=>n(!1),title:`Custom Styled Modal`,size:`sm`,footer:(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>n(!1),children:`Close`}),children:(0,p.jsxs)(`p`,{style:{fontSize:14,lineHeight:1.6,margin:0},children:[`The modal panel accepts a`,` `,(0,p.jsx)(`code`,{style:{fontFamily:`monospace`,fontSize:12,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 4px`,borderRadius:4},children:`style`}),` `,`prop for overriding layout properties. Custom borders, gradients, and backdrop colours are possible by targeting the panel via `,(0,p.jsx)(`code`,{style:{fontFamily:`monospace`,fontSize:12,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 4px`,borderRadius:4},children:`className`}),`.`]})})]})}function y({theme:e}){let[t,n]=(0,f.useState)(!1),[r,a]=(0,f.useState)(!1),[o,s]=(0,f.useState)(!1),[y,b]=(0,f.useState)(!1),[x,S]=(0,f.useState)(!1),[C,w]=(0,f.useState)(!1),[T,E]=(0,f.useState)(!1),D={maxWidth:860,margin:`0 auto`,padding:`48px 32px 80px`},O={display:`inline-block`,padding:`3px 10px`,borderRadius:9999,fontSize:11,fontWeight:700,letterSpacing:`0.04em`,backgroundColor:`${e.primary}18`,color:e.primary,border:`1px solid ${e.primary}35`,marginBottom:24},k={fontSize:`2rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.03em`},A={fontSize:15,color:e.textMuted,lineHeight:1.7,maxWidth:620,margin:`0 0 20px`},j={border:`none`,borderTop:`1px solid ${e.border}`,margin:`40px 0`},M={fontSize:`1.1rem`,fontWeight:700,color:e.text,margin:`0 0 16px`,letterSpacing:`-0.02em`},N={fontSize:13,color:e.textMuted,lineHeight:1.7,padding:`16px 18px`,backgroundColor:`${e.info}10`,border:`1px solid ${e.info}30`,borderRadius:10},P={fontFamily:`"JetBrains Mono", "Fira Code", monospace`,fontSize:12,backgroundColor:`${e.info}18`,color:e.info,padding:`1px 5px`,borderRadius:4};return(0,p.jsxs)(`div`,{style:D,children:[(0,p.jsx)(`span`,{style:O,children:`Component Docs`}),(0,p.jsx)(`h1`,{style:k,children:`TkxModal`}),(0,p.jsxs)(`p`,{style:A,children:[`A portal-based dialog component implementing the WAI-ARIA`,` `,(0,p.jsx)(`strong`,{children:`dialog`}),` pattern. Provides automatic focus trapping, scroll locking, Escape-key dismissal, and focus restoration on close. Supports four sizes and an optional footer slot.`]}),(0,p.jsx)(l,{label:`WCAG 2.1 Compliance`,badges:[{criterion:`2.1.2 No Keyboard Trap`,level:`AA`,status:`PASS`},{criterion:`1.4.3 Contrast`,level:`AA`,status:`PASS`},{criterion:`2.1.1 Keyboard`,level:`AA`,status:`PASS`},{criterion:`4.1.2 Name, Role, Value`,level:`AA`,status:`PASS`}]}),(0,p.jsx)(`hr`,{style:j}),(0,p.jsxs)(u,{title:`Basic Modal`,description:`Open and close a modal with useState. The modal is portal-rendered to document.body and overlays the page.`,theme:e,code:`const [open, setOpen] = useState(false);

<TkxButton onClick={() => setOpen(true)}>Open modal</TkxButton>

<TkxModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Welcome"
  size="md"
>
  <p>This is the modal body. Press Escape or click the backdrop to close.</p>
</TkxModal>`,children:[(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>n(!0),children:`Open modal`}),(0,p.jsx)(i,{isOpen:t,onClose:()=>n(!1),title:`Welcome`,size:`md`,children:(0,p.jsxs)(`p`,{style:{fontSize:14,lineHeight:1.7,margin:0,color:e.text},children:[`This is the modal body. Press`,` `,(0,p.jsx)(`kbd`,{style:P,children:`Escape`}),` or click the backdrop to close. Focus is automatically trapped inside while the modal is open.`]})})]}),(0,p.jsxs)(u,{title:`Modal Sizes`,description:`Four sizes — sm (400 px), md (560 px, default), lg (720 px), and full (100vw). Each uses separate useState to allow independent open/close.`,theme:e,code:`const [smOpen, setSmOpen] = useState(false);
const [mdOpen, setMdOpen] = useState(false);
const [lgOpen, setLgOpen] = useState(false);
const [fullOpen, setFullOpen] = useState(false);

<TkxButton onClick={() => setSmOpen(true)}>sm</TkxButton>
<TkxButton onClick={() => setMdOpen(true)}>md</TkxButton>
<TkxButton onClick={() => setLgOpen(true)}>lg</TkxButton>
<TkxButton onClick={() => setFullOpen(true)}>full</TkxButton>

<TkxModal isOpen={smOpen}   onClose={() => setSmOpen(false)}   title="Small modal"      size="sm">   …</TkxModal>
<TkxModal isOpen={mdOpen}   onClose={() => setMdOpen(false)}   title="Medium modal"     size="md">   …</TkxModal>
<TkxModal isOpen={lgOpen}   onClose={() => setLgOpen(false)}   title="Large modal"      size="lg">   …</TkxModal>
<TkxModal isOpen={fullOpen} onClose={() => setFullOpen(false)} title="Full-screen modal" size="full"> …</TkxModal>`,children:[(0,p.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[{label:`sm`,open:r,setOpen:a},{label:`md`,open:o,setOpen:s},{label:`lg`,open:y,setOpen:b},{label:`full`,open:x,setOpen:S}].map(({label:e,open:t,setOpen:n})=>(0,p.jsxs)(c,{colorScheme:`primary`,variant:`outline`,size:`sm`,onClick:()=>n(!0),children:[`Size: `,e]},e))}),[{label:`sm`,size:`sm`,open:r,setOpen:a},{label:`md`,size:`md`,open:o,setOpen:s},{label:`lg`,size:`lg`,open:y,setOpen:b},{label:`full`,size:`full`,open:x,setOpen:S}].map(({label:t,size:n,open:r,setOpen:a})=>(0,p.jsx)(i,{isOpen:r,onClose:()=>a(!1),title:`${t.charAt(0).toUpperCase()+t.slice(1)} modal (${t})`,size:n,footer:(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>a(!1),children:`Close`}),children:(0,p.jsxs)(`p`,{style:{fontSize:14,lineHeight:1.7,margin:0,color:e.text},children:[`This modal uses `,(0,p.jsxs)(`code`,{style:P,children:[`size="`,t,`"`]}),`. The panel max-width is`,` `,{sm:`400 px`,md:`560 px`,lg:`720 px`,full:`100vw`}[t],`.`]})},t))]}),(0,p.jsxs)(u,{title:`With Footer Actions`,description:`Pass a footer prop to render Cancel / Confirm buttons in the modal footer bar. The footer is fixed-height and scrolls independently from the body.`,theme:e,code:`<TkxModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Publish article?"
  size="sm"
  footer={
    <>
      <TkxButton variant="outline" colorScheme="secondary" size="sm" onClick={() => setOpen(false)}>
        Cancel
      </TkxButton>
      <TkxButton colorScheme="primary" size="sm" onClick={handleConfirm}>
        Publish
      </TkxButton>
    </>
  }
>
  <p>The article will be visible to all readers immediately.</p>
</TkxModal>`,children:[(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>w(!0),children:`Open modal with footer`}),(0,p.jsx)(i,{isOpen:C,onClose:()=>w(!1),title:`Publish article?`,size:`sm`,footer:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{variant:`outline`,colorScheme:`secondary`,size:`sm`,onClick:()=>w(!1),children:`Cancel`}),(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>w(!1),children:`Publish`})]}),children:(0,p.jsx)(`p`,{style:{fontSize:14,lineHeight:1.7,margin:0,color:e.text},children:`The article will be visible to all readers immediately upon confirmation. You can unpublish it at any time from the dashboard.`})})]}),(0,p.jsx)(u,{title:`Confirmation Dialog`,description:`A danger-themed confirmation modal for destructive actions. Uses a danger alert in the body and a red confirm button to reinforce severity.`,theme:e,code:`<TkxModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Delete Account?"
  size="sm"
  footer={
    <>
      <TkxButton variant="outline" colorScheme="secondary" size="sm" onClick={() => setOpen(false)}>
        Cancel
      </TkxButton>
      <TkxButton colorScheme="danger" size="sm" onClick={confirmDelete}>
        Yes, delete permanently
      </TkxButton>
    </>
  }
>
  <TkxAlert variant="danger" title="This action cannot be undone">
    All data will be permanently erased.
  </TkxAlert>
</TkxModal>`,children:(0,p.jsx)(h,{theme:e})}),(0,p.jsx)(u,{title:`Form Modal`,description:`A modal containing TkxInput fields. Labels and focus management are handled automatically — the first focusable element inside receives focus on open.`,theme:e,code:`const [name, setName] = useState('');
const [email, setEmail] = useState('');

<TkxModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Edit Profile"
  size="sm"
  footer={
    <>
      <TkxButton variant="outline" colorScheme="secondary" size="sm" onClick={() => setOpen(false)}>
        Cancel
      </TkxButton>
      <TkxButton colorScheme="primary" size="sm" onClick={handleSubmit}>
        Save changes
      </TkxButton>
    </>
  }
>
  <TkxInput label="Full name"      placeholder="Jane Doe"          value={name}  onChange={e => setName(e.target.value)}  isRequired />
  <TkxInput label="Email address"  type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} isRequired />
</TkxModal>`,children:(0,p.jsx)(m,{theme:e})}),(0,p.jsxs)(u,{title:`No Overlay Close`,description:`Set closeOnOverlayClick=false to prevent the modal from closing when the user clicks the backdrop. Useful for forms with unsaved state.`,theme:e,code:`<TkxModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Unsaved Changes"
  size="sm"
  closeOnOverlayClick={false}
>
  <p>Clicking outside this modal does nothing. Only the × button or Escape closes it.</p>
</TkxModal>`,children:[(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>E(!0),children:`Open (no overlay close)`}),(0,p.jsx)(i,{isOpen:T,onClose:()=>E(!1),title:`Unsaved Changes`,size:`sm`,closeOnOverlayClick:!1,footer:(0,p.jsx)(c,{colorScheme:`primary`,size:`sm`,onClick:()=>E(!1),children:`Dismiss`}),children:(0,p.jsxs)(`p`,{style:{fontSize:14,lineHeight:1.7,margin:0,color:e.text},children:[`Clicking outside this modal has no effect.`,` `,`Use the `,(0,p.jsx)(`strong`,{children:`×`}),` button, the `,(0,p.jsx)(`kbd`,{style:P,children:`Escape`}),` key, or the Dismiss button below to close.`]})})]}),(0,p.jsx)(u,{title:`Nested Modals`,description:`A second modal opened from within the first. Each modal independently manages scroll lock, focus trap, and Escape handling using a shared scroll-lock counter.`,theme:e,code:`const [outerOpen, setOuterOpen] = useState(false);
const [innerOpen, setInnerOpen] = useState(false);

<TkxModal isOpen={outerOpen} onClose={() => { setOuterOpen(false); setInnerOpen(false); }} title="Outer Modal">
  <TkxButton onClick={() => setInnerOpen(true)}>Open inner modal</TkxButton>

  <TkxModal isOpen={innerOpen} onClose={() => setInnerOpen(false)} title="Inner Modal" size="sm">
    <p>Focus is trapped here while this modal is open.</p>
  </TkxModal>
</TkxModal>`,children:(0,p.jsx)(g,{})}),(0,p.jsx)(u,{title:`Loading State Modal`,description:`A modal displaying TkxProgress (both circular and linear) during an async operation. The close button and overlay click are disabled until the task completes.`,theme:e,code:`const [open, setOpen] = useState(false);
const [progress, setProgress] = useState<number | undefined>(undefined);

<TkxModal
  isOpen={open}
  onClose={() => { if (done) setOpen(false); }}
  title={done ? 'Operation Complete' : 'Processing…'}
  size="sm"
  closeOnOverlayClick={done}
>
  {done ? (
    <TkxBadge variant="success" size="lg">Complete</TkxBadge>
  ) : (
    <>
      <TkxProgress variant="circular" size="lg" label="Processing" />
      <TkxProgress value={progress} variant="linear" size="md" label="Overall progress" showValue />
    </>
  )}
</TkxModal>`,children:(0,p.jsx)(_,{})}),(0,p.jsx)(u,{title:`Custom Styling`,description:`The modal dialog panel forwards className and style, allowing custom borders, radii, and background colours. The overlay and backdrop are separate from the panel.`,theme:e,code:`<TkxModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Custom Styled Modal"
  size="sm"
>
  <p>Pass className or style to the modal to override the panel appearance.</p>
</TkxModal>`,children:(0,p.jsx)(v,{theme:e})}),(0,p.jsx)(`hr`,{style:j}),(0,p.jsxs)(`section`,{"aria-labelledby":`props-heading`,children:[(0,p.jsx)(`h2`,{id:`props-heading`,style:M,children:`Props`}),(0,p.jsx)(d,{props:[{name:`isOpen`,type:`boolean`,required:!0,description:`Controls whether the modal is visible. Manage with useState.`},{name:`onClose`,type:`() => void`,required:!0,description:`Callback fired when the user closes the modal (× button, Escape, or overlay click).`},{name:`title`,type:`string`,required:!0,description:`Dialog title rendered in the header and used as aria-labelledby for the dialog element.`},{name:`children`,type:`ReactNode`,required:!0,description:`Modal body content. Any ReactNode is accepted.`},{name:`size`,type:`"sm" | "md" | "lg" | "full"`,default:`"md"`,description:`Controls the max-width of the dialog panel. "full" stretches to the full viewport.`},{name:`closeOnOverlayClick`,type:`boolean`,default:`true`,description:`When false, clicking the backdrop does not fire onClose.`},{name:`closeOnEscape`,type:`boolean`,default:`true`,description:`When false, pressing Escape does not fire onClose.`},{name:`footer`,type:`ReactNode`,description:`Content rendered in the footer bar, typically action buttons. Omit to hide the footer.`}]})]}),(0,p.jsx)(`hr`,{style:j}),(0,p.jsxs)(`section`,{"aria-labelledby":`wcag-heading`,children:[(0,p.jsx)(`h2`,{id:`wcag-heading`,style:M,children:`Accessibility Notes`}),(0,p.jsxs)(`div`,{style:N,children:[(0,p.jsxs)(`p`,{style:{margin:`0 0 10px`},children:[(0,p.jsx)(`code`,{style:P,children:`TkxModal`}),` implements the WAI-ARIA`,` `,(0,p.jsx)(`a`,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`,style:{color:e.info},children:`dialog (modal) pattern`}),` `,`with the following built-in behaviours:`]}),(0,p.jsxs)(`ul`,{style:{margin:0,paddingLeft:20},children:[(0,p.jsxs)(`li`,{style:{marginBottom:6},children:[(0,p.jsx)(`strong`,{children:`Focus trap`}),` — keyboard focus is confined to the modal panel via`,` `,(0,p.jsx)(`code`,{style:P,children:`useFocusTrap()`}),`. Tab and Shift+Tab cycle only through focusable elements inside the dialog, preventing users from interacting with background content (WCAG 2.1.2).`]}),(0,p.jsxs)(`li`,{style:{marginBottom:6},children:[(0,p.jsx)(`strong`,{children:`Focus restoration`}),` — when the modal closes, focus returns to the element that triggered it, preserving navigation context for keyboard and screen reader users.`]}),(0,p.jsxs)(`li`,{style:{marginBottom:6},children:[(0,p.jsx)(`strong`,{children:`Scroll lock`}),` — `,(0,p.jsx)(`code`,{style:P,children:`document.body.overflow`}),` `,`is set to `,(0,p.jsx)(`code`,{style:P,children:`hidden`}),` while a modal is open. A reference counter handles nested modals so scroll is only restored when all modals are closed.`]}),(0,p.jsxs)(`li`,{style:{marginBottom:6},children:[(0,p.jsx)(`strong`,{children:`ARIA attributes`}),` — the panel carries`,` `,(0,p.jsx)(`code`,{style:P,children:`role="dialog"`}),`,`,` `,(0,p.jsx)(`code`,{style:P,children:`aria-modal="true"`}),`, and`,` `,(0,p.jsx)(`code`,{style:P,children:`aria-labelledby`}),` pointing to the title heading, giving screen readers a complete accessible description.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Escape key`}),` — pressing `,(0,p.jsx)(`kbd`,{style:P,children:`Escape`}),` `,`fires `,(0,p.jsx)(`code`,{style:P,children:`onClose`}),` by default. Set`,` `,(0,p.jsx)(`code`,{style:P,children:`closeOnEscape=false`}),` only when the dialog contains an action that cannot be safely abandoned.`]})]})]})]})]})}export{y as ModalPage};