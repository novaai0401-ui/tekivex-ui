import{t as e}from"./index-Q0EkYOFr.js";import{t}from"./lib-DYo6bDIA.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`TkxSelect — docs`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`TkxSelect`}),` is the listbox-style picker for choosing one or many values
from a known set. Reach for it when there are more than five or six
options (otherwise `,(0,n.jsx)(r.code,{children:`TkxRadioGroup`}),` or `,(0,n.jsx)(r.code,{children:`TkxCheckbox`}),` is faster to scan),
when options need grouping, icons or descriptions, or when the user must
be able to type to filter (`,(0,n.jsx)(r.code,{children:`searchable`}),`). Pass `,(0,n.jsx)(r.code,{children:`multiple`}),` for tag-style
multi-select and `,(0,n.jsx)(r.code,{children:`clearable`}),` to let the user reset to empty. It is fully
keyboard-operable and announces the selected option, so it is the right
choice over a native `,(0,n.jsx)(r.code,{children:`<select>`}),` whenever you need custom rendering without
giving up accessibility.`]}),`
`,(0,n.jsx)(r.h2,{children:`Key props`}),`
`,(0,n.jsxs)(r.p,{children:[`| Prop | Use |
|---|---|
| `,(0,n.jsx)(r.code,{children:`options`}),` | `,(0,n.jsx)(r.code,{children:`{ value, label, group?, disabled?, icon?, description? }[]`}),` |
| `,(0,n.jsx)(r.code,{children:`value`}),` / `,(0,n.jsx)(r.code,{children:`onChange`}),` | Controlled value — `,(0,n.jsx)(r.code,{children:`string`}),` or `,(0,n.jsx)(r.code,{children:`string[]`}),` when `,(0,n.jsx)(r.code,{children:`multiple`}),` |
| `,(0,n.jsx)(r.code,{children:`searchable`}),` | Type-to-filter; use `,(0,n.jsx)(r.code,{children:`virtualScroll`}),` for very long lists |
| `,(0,n.jsx)(r.code,{children:`isInvalid`}),` + `,(0,n.jsx)(r.code,{children:`errorMessage`}),` | Validation state |`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};