import{t as e}from"./index-Q0EkYOFr.js";import{t}from"./lib-DYo6bDIA.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`TkxTabs — docs`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`TkxTabs`}),` switches between sibling views of the same object, such as the
Overview / Activity / Settings of one record. Reach for it when the
sections are peers, the user will move between them often, and only one
needs to be visible at a time. Do not use tabs for sequential steps (use
a stepper) or for content that should all be readable at once (use
`,(0,n.jsx)(r.code,{children:`TkxAccordion`}),`). It is a compound component — `,(0,n.jsx)(r.code,{children:`TkxTabList`}),`, `,(0,n.jsx)(r.code,{children:`TkxTab`}),`,
`,(0,n.jsx)(r.code,{children:`TkxTabPanels`}),`, `,(0,n.jsx)(r.code,{children:`TkxTabPanel`}),` — with a roving tabindex, arrow-key
navigation and correct `,(0,n.jsx)(r.code,{children:`aria-controls`}),` wiring; pass `,(0,n.jsx)(r.code,{children:`tabCount`}),` so
keyboard navigation knows the bounds, and use `,(0,n.jsx)(r.code,{children:`activeIndex`}),` + `,(0,n.jsx)(r.code,{children:`onChange`}),`
to control it or `,(0,n.jsx)(r.code,{children:`defaultIndex`}),` to leave it uncontrolled.`]}),`
`,(0,n.jsx)(r.h2,{children:`Key props`}),`
`,(0,n.jsxs)(r.p,{children:[`| Prop | Use |
|---|---|
| `,(0,n.jsx)(r.code,{children:`activeIndex`}),` / `,(0,n.jsx)(r.code,{children:`onChange`}),` | Controlled mode |
| `,(0,n.jsx)(r.code,{children:`defaultIndex`}),` | Uncontrolled initial tab |
| `,(0,n.jsx)(r.code,{children:`tabCount`}),` | Number of tabs, for keyboard wrap-around |
| `,(0,n.jsx)(r.code,{children:`TkxTab disabled`}),` | Skips the tab in arrow navigation |`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};