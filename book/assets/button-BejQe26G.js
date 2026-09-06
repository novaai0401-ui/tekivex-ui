import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{n as t,t as n}from"./index-CELFv4e6.js";var r=e(t(),1),i=r.createContext({});function a(e){let t=r.useContext(i);return r.useMemo(function(){return typeof e==`function`?e(t):{...t,...e}},[t,e])}var o=n();function s(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...a(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:`TkxButton — docs`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:`TkxButton`}),` is the canonical action element. Variants, sizes, color
schemes, and a loading state — all in a single component.`]}),`
`,(0,o.jsx)(t.h2,{children:`When to use`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`A primary action on a form (`,(0,o.jsx)(t.code,{children:`variant="primary"`}),`)`]}),`
`,(0,o.jsxs)(t.li,{children:[`A secondary or destructive action (`,(0,o.jsx)(t.code,{children:`colorScheme="danger"`}),`)`]}),`
`,(0,o.jsxs)(t.li,{children:[`An inline link-style trigger (`,(0,o.jsx)(t.code,{children:`variant="link"`}),`)`]}),`
`]}),`
`,(0,o.jsx)(t.h2,{children:`When NOT to use`}),`
`,(0,o.jsxs)(t.p,{children:[`For navigation that changes URL, use `,(0,o.jsx)(t.code,{children:`<TkxButton as="a" href="...">`}),` or
just an `,(0,o.jsx)(t.code,{children:`<a>`}),` tag — buttons should perform actions, links should change
location.`]}),`
`,(0,o.jsx)(t.h2,{children:`Variants explained`}),`
`,(0,o.jsxs)(t.p,{children:[`| Variant | Use |
|---|---|
| `,(0,o.jsx)(t.code,{children:`primary`}),` | The single most-important action on the screen |
| `,(0,o.jsx)(t.code,{children:`secondary`}),` | Supporting actions next to a primary |
| `,(0,o.jsx)(t.code,{children:`outline`}),` | Non-destructive, equal-weight actions |
| `,(0,o.jsx)(t.code,{children:`ghost`}),` | Subtle, e.g. inside a card or tooltip |
| `,(0,o.jsx)(t.code,{children:`link`}),` | Inline action that reads as a link |`]}),`
`,(0,o.jsx)(t.h2,{children:`Loading state`}),`
`,(0,o.jsxs)(t.p,{children:[`When `,(0,o.jsx)(t.code,{children:`loading={true}`}),`, the button is `,(0,o.jsx)(t.code,{children:`aria-busy`}),` and `,(0,o.jsx)(t.code,{children:`disabled`}),`.
The label stays readable to screen readers; the spinner is `,(0,o.jsx)(t.code,{children:`aria-hidden`}),`.`]}),`
`,(0,o.jsx)(t.h2,{children:`Accessibility`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`44×44 minimum touch target on `,(0,o.jsx)(t.code,{children:`size="md"`}),` and above`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`:focus-visible`}),` outline at 2px (configurable via theme)`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`aria-pressed`}),` when used as a toggle (set `,(0,o.jsx)(t.code,{children:`pressed={true}`}),`)`]}),`
`,(0,o.jsxs)(t.li,{children:[`Disables all pointer events when `,(0,o.jsx)(t.code,{children:`disabled`}),` — never visually-only`]}),`
`]}),`
`,(0,o.jsx)(t.h2,{children:`Source`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:`https://www.tekivex.com/ui`,children:(0,o.jsx)(t.code,{children:`src/components/TkxButton.tsx`})})}),`
`,(0,o.jsxs)(t.li,{children:[`Docs page on the canonical site: `,(0,o.jsx)(t.a,{href:`https://www.tekivex.com/ui/components/button/`,children:`/components/button/`})]}),`
`]})]})}function c(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};