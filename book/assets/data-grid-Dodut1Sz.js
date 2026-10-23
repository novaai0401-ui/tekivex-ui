import{t as e}from"./index-Q0EkYOFr.js";import{t}from"./lib-DYo6bDIA.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`TkxDataGrid — docs`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`TkxDataGrid`}),` is the heavyweight table for operational data: hundreds or
thousands of rows that users sort, filter, select, group, page through,
edit inline and export. Reach for it when a screen's main job is working
a dataset — admin lists, order books, ledgers. If you only need to
present a short, read-mostly list with sortable headers, `,(0,n.jsx)(r.code,{children:`TkxTable`}),` is
lighter and simpler. Columns are declared with `,(0,n.jsx)(r.code,{children:`DataGridColumn`}),`, rows are
identified by `,(0,n.jsx)(r.code,{children:`rowKey`}),`, and every feature is opt-in: `,(0,n.jsx)(r.code,{children:`selectable`}),`,
`,(0,n.jsx)(r.code,{children:`showFilters`}),`, `,(0,n.jsx)(r.code,{children:`pageSize`}),`, `,(0,n.jsx)(r.code,{children:`groupBy`}),`, `,(0,n.jsx)(r.code,{children:`virtualScroll`}),`, `,(0,n.jsx)(r.code,{children:`showExport`}),`,
`,(0,n.jsx)(r.code,{children:`editable`}),` on a column plus `,(0,n.jsx)(r.code,{children:`onCellEdit`}),`, and `,(0,n.jsx)(r.code,{children:`childRowsKey`}),` for tree
data.`]}),`
`,(0,n.jsx)(r.h2,{children:`Key props`}),`
`,(0,n.jsxs)(r.p,{children:[`| Prop | Use |
|---|---|
| `,(0,n.jsx)(r.code,{children:`columns`}),` / `,(0,n.jsx)(r.code,{children:`data`}),` / `,(0,n.jsx)(r.code,{children:`rowKey`}),` | Required core |
| `,(0,n.jsx)(r.code,{children:`selectable`}),` + `,(0,n.jsx)(r.code,{children:`selectedRows`}),` / `,(0,n.jsx)(r.code,{children:`onSelectionChange`}),` | Row checkboxes |
| `,(0,n.jsx)(r.code,{children:`pageSize`}),` | Client-side pagination; omit for one long list |
| `,(0,n.jsx)(r.code,{children:`groupBy`}),` | Group rows by a column key with per-group aggregates |
| `,(0,n.jsx)(r.code,{children:`virtualScroll`}),` + `,(0,n.jsx)(r.code,{children:`rowHeight`}),` | Render only visible rows for large data |`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};