import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{B as r}from"./tekivex-ui-C9wlHCjq.js";import{t as i}from"./DemoSection-DEixK5oF.js";import{t as a}from"./PropTable-Cy1Qr_aV.js";var o=e(t(),1),s=n(),c=[{id:`1`,name:`Alice Chen`,role:`Staff Engineer`,department:`Engineering`,salary:185e3,startDate:`2019-03-12`,status:`active`},{id:`2`,name:`Bob Martinez`,role:`Product Manager`,department:`Product`,salary:162e3,startDate:`2020-07-01`,status:`active`},{id:`3`,name:`Carol Wu`,role:`UX Designer`,department:`Design`,salary:138e3,startDate:`2021-01-15`,status:`on-leave`},{id:`4`,name:`David Kim`,role:`Backend Engineer`,department:`Engineering`,salary:155e3,startDate:`2020-11-20`,status:`active`},{id:`5`,name:`Eva Johansson`,role:`Data Scientist`,department:`Analytics`,salary:17e4,startDate:`2022-04-10`,status:`active`},{id:`6`,name:`Frank Osei`,role:`DevOps Lead`,department:`Engineering`,salary:175e3,startDate:`2018-09-05`,status:`active`},{id:`7`,name:`Grace Patel`,role:`QA Engineer`,department:`Engineering`,salary:13e4,startDate:`2023-02-28`,status:`terminated`}],l=[{key:`name`,header:`Name`,width:180,sortable:!0},{key:`role`,header:`Role`,width:180},{key:`department`,header:`Department`,width:140,sortable:!0},{key:`salary`,header:`Salary`,width:120,align:`right`,sortable:!0,renderCell:e=>`$${e.toLocaleString()}`},{key:`startDate`,header:`Start Date`,width:130,sortable:!0},{key:`status`,header:`Status`,width:110}],u=[{name:`columns`,type:`DataGridColumn<T>[]`,description:`Column definitions including key, header, width, sortable, align, renderCell, etc.`,required:!0},{name:`data`,type:`T[]`,description:`Array of row data objects.`,required:!0},{name:`rowKey`,type:`string | ((row: T) => string)`,description:`Unique key field or accessor for each row.`,required:!0},{name:`selectable`,type:`boolean`,default:`false`,description:`Enable row selection with checkboxes.`},{name:`selectedRows`,type:`string[]`,default:`[]`,description:`Controlled selected row IDs.`},{name:`onSelectionChange`,type:`(ids: string[]) => void`,default:`undefined`,description:`Callback when selection changes.`},{name:`sortable`,type:`boolean`,default:`false`,description:`Enable column sorting globally.`},{name:`onSort`,type:`(key: string, direction: "asc" | "desc") => void`,default:`undefined`,description:`Callback when a column header is clicked for sorting.`},{name:`loading`,type:`boolean`,default:`false`,description:`Show skeleton loading state.`},{name:`emptyMessage`,type:`string`,default:`"No data"`,description:`Message displayed when data is empty.`},{name:`stickyHeader`,type:`boolean`,default:`false`,description:`Stick column headers to the top when scrolling.`},{name:`striped`,type:`boolean`,default:`false`,description:`Alternate row background colors.`},{name:`bordered`,type:`boolean`,default:`false`,description:`Add borders between cells.`},{name:`compact`,type:`boolean`,default:`false`,description:`Reduce row padding for denser layout.`},{name:`maxHeight`,type:`number | string`,default:`undefined`,description:`Constrain the grid height with vertical scrolling.`},{name:`onRowClick`,type:`(row: T) => void`,default:`undefined`,description:`Callback when a row body is clicked.`}],d=[{name:`key`,type:`string`,description:`Property name used to read the cell value from each row.`,required:!0},{name:`header`,type:`string`,description:`Text displayed in the column header.`,required:!0},{name:`width`,type:`number | string`,default:`auto`,description:`Fixed column width.`},{name:`sortable`,type:`boolean`,default:`false`,description:`Whether this column is sortable.`},{name:`filterable`,type:`boolean`,default:`false`,description:`Whether this column supports filtering.`},{name:`resizable`,type:`boolean`,default:`false`,description:`Whether the column can be resized by dragging.`},{name:`renderCell`,type:`(value: any, row: T) => ReactNode`,default:`undefined`,description:`Custom cell renderer.`},{name:`renderHeader`,type:`(col: DataGridColumn<T>) => ReactNode`,default:`undefined`,description:`Custom header renderer.`},{name:`align`,type:`'left' | 'center' | 'right'`,default:`'left'`,description:`Text alignment for the column.`},{name:`pinned`,type:`'left' | 'right'`,default:`undefined`,description:`Pin column to the left or right edge.`}];function f({theme:e}){let[t,n]=(0,o.useState)([]),f={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`};return(0,s.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,s.jsx)(i,{title:`Basic Data Grid`,description:`A simple grid with columns and data. Salary uses a custom renderCell for formatting.`,theme:e,code:`<TkxDataGrid
  columns={[
    { key: 'name', header: 'Name', width: 180, sortable: true },
    { key: 'role', header: 'Role', width: 180 },
    { key: 'department', header: 'Department', width: 140 },
    { key: 'salary', header: 'Salary', width: 120, align: 'right',
      renderCell: (v) => \`$\${v.toLocaleString()}\`,
    },
    { key: 'startDate', header: 'Start Date', width: 130 },
    { key: 'status', header: 'Status', width: 110 },
  ]}
  data={employees}
  rowKey="id"
/>`,children:(0,s.jsx)(r,{columns:l,data:c,rowKey:`id`})}),(0,s.jsx)(`hr`,{style:f}),(0,s.jsx)(i,{title:`Selectable Rows`,description:`Enable row selection via checkboxes. Control selected state with selectedRows and onSelectionChange.`,theme:e,code:`const [selected, setSelected] = useState<string[]>([]);

<TkxDataGrid
  columns={columns}
  data={employees}
  rowKey="id"
  selectable
  selectedRows={selected}
  onSelectionChange={setSelected}
/>`,children:(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{style:{fontSize:13,color:e.textMuted,marginBottom:12},children:[`Selected: `,t.length===0?`none`:t.join(`, `)]}),(0,s.jsx)(r,{columns:l,data:c,rowKey:`id`,selectable:!0,selectedRows:t,onSelectionChange:n})]})}),(0,s.jsx)(`hr`,{style:f}),(0,s.jsx)(i,{title:`Sortable Columns`,description:`Set sortable on both the grid and individual columns. Click column headers to toggle sort direction.`,theme:e,code:`<TkxDataGrid
  columns={columns} // columns with sortable: true
  data={employees}
  rowKey="id"
  sortable
/>`,children:(0,s.jsx)(r,{columns:l,data:c,rowKey:`id`,sortable:!0})}),(0,s.jsx)(`hr`,{style:f}),(0,s.jsx)(i,{title:`Striped and Bordered`,description:`Apply striped and bordered props for visual distinction between rows and cells.`,theme:e,code:`<TkxDataGrid
  columns={columns}
  data={employees}
  rowKey="id"
  striped
  bordered
/>`,children:(0,s.jsx)(r,{columns:l,data:c,rowKey:`id`,striped:!0,bordered:!0})}),(0,s.jsx)(`hr`,{style:f}),(0,s.jsx)(i,{title:`Compact Mode`,description:`Reduce row padding for a denser layout, ideal for data-heavy views.`,theme:e,code:`<TkxDataGrid
  columns={columns}
  data={employees}
  rowKey="id"
  compact
  striped
/>`,children:(0,s.jsx)(r,{columns:l,data:c,rowKey:`id`,compact:!0,striped:!0})}),(0,s.jsx)(`hr`,{style:f}),(0,s.jsx)(i,{title:`Loading State`,description:`Set loading to show skeleton placeholders while data is being fetched.`,theme:e,code:`<TkxDataGrid
  columns={columns}
  data={[]}
  rowKey="id"
  loading
/>`,children:(0,s.jsx)(r,{columns:l,data:[],rowKey:`id`,loading:!0})}),(0,s.jsx)(`hr`,{style:f}),(0,s.jsxs)(`div`,{style:{marginTop:48},children:[(0,s.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxDataGrid Props`}),(0,s.jsx)(a,{props:u})]}),(0,s.jsxs)(`div`,{style:{marginTop:40},children:[(0,s.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`DataGridColumn Props`}),(0,s.jsx)(a,{props:d})]})]})}export{f as DataGridPage};