import{t as e}from"./vendor-react-CJ-iRaMF.js";import{Ot as t,Vt as n,en as r,kt as i}from"./tekivex-ui-C9wlHCjq.js";import{r as a}from"./index-BLCt_kC2.js";import{t as o}from"./DemoSection-DEixK5oF.js";import{t as s}from"./PropTable-Cy1Qr_aV.js";var c=e(),l=[{name:`Alice Chen`,email:`alice@example.com`,role:`Admin`,status:`Active`,joined:`Jan 12, 2023`},{name:`Bob Martinez`,email:`bob@example.com`,role:`Editor`,status:`Active`,joined:`Mar 4, 2023`},{name:`Carol White`,email:`carol@example.com`,role:`Viewer`,status:`Inactive`,joined:`Jun 21, 2023`},{name:`David Kim`,email:`david@example.com`,role:`Editor`,status:`Active`,joined:`Aug 9, 2023`},{name:`Elena Santos`,email:`elena@example.com`,role:`Admin`,status:`Suspended`,joined:`Oct 30, 2023`}],u=[{name:`Wireless Headphones`,category:`Electronics`,price:89.99,stock:142,sku:`WH-001`},{name:`Mechanical Keyboard`,category:`Electronics`,price:149,stock:58,sku:`KB-042`},{name:`Ergonomic Chair`,category:`Furniture`,price:399,stock:12,sku:`CH-088`},{name:`Standing Desk Mat`,category:`Furniture`,price:49.95,stock:0,sku:`DM-013`},{name:`USB-C Hub`,category:`Accessories`,price:34.99,stock:230,sku:`HB-007`}],d=[{orderId:`#10034`,customer:`Alice Chen`,date:`Apr 1, 2026`,amount:238.97,status:`Delivered`},{orderId:`#10035`,customer:`Bob Martinez`,date:`Apr 2, 2026`,amount:149,status:`Processing`},{orderId:`#10036`,customer:`Carol White`,date:`Apr 3, 2026`,amount:89.99,status:`Shipped`},{orderId:`#10037`,customer:`David Kim`,date:`Apr 4, 2026`,amount:484.94,status:`Processing`},{orderId:`#10038`,customer:`Elena Santos`,date:`Apr 5, 2026`,amount:34.99,status:`Cancelled`}];function f({status:e}){return(0,c.jsx)(n,{variant:e===`Active`?`success`:e===`Inactive`?`default`:`danger`,size:`sm`,children:e})}function p({status:e}){return(0,c.jsx)(n,{variant:e===`Delivered`?`success`:e===`Shipped`?`info`:e===`Processing`?`warning`:`danger`,size:`sm`,children:e})}function m({stock:e}){return e===0?(0,c.jsx)(n,{variant:`danger`,size:`sm`,children:`Out of stock`}):e<20?(0,c.jsxs)(n,{variant:`warning`,size:`sm`,children:[`Low (`,e,`)`]}):(0,c.jsxs)(n,{variant:`success`,size:`sm`,children:[e,` in stock`]})}var h=[{key:`name`,header:`Name`,sortable:!0},{key:`email`,header:`Email`},{key:`role`,header:`Role`,sortable:!0},{key:`status`,header:`Status`},{key:`joined`,header:`Joined`,sortable:!0}],g=e=>[{key:`name`,header:`User`,render:(t,n)=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,c.jsx)(i,{alt:n.name,initials:n.name.split(` `).map(e=>e[0]).join(``).slice(0,2),size:`sm`}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{fontWeight:600,fontSize:`13px`,color:e.text},children:n.name}),(0,c.jsx)(`div`,{style:{fontSize:`12px`,color:e.textMuted},children:n.email})]})]})},{key:`role`,header:`Role`},{key:`status`,header:`Status`,render:e=>(0,c.jsx)(f,{status:e})},{key:`joined`,header:`Joined`},{key:`email`,header:`Actions`,render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:6},children:[(0,c.jsx)(r,{variant:`ghost`,size:`sm`,children:`Edit`}),(0,c.jsx)(r,{variant:`ghost`,size:`sm`,children:`View`})]})}],_=e=>[{key:`name`,header:`Product`,render:(t,n)=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,c.jsx)(`div`,{style:{width:36,height:36,borderRadius:6,backgroundColor:e.surfaceAlt,border:`1px solid ${e.border}`,flexShrink:0}}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{fontWeight:600,fontSize:`13px`,color:e.text},children:n.name}),(0,c.jsx)(`div`,{style:{fontSize:`11px`,color:e.textMuted},children:n.sku})]})]})},{key:`category`,header:`Category`},{key:`price`,header:`Price`,sortable:!0,render:e=>(0,c.jsxs)(`span`,{style:{fontWeight:600},children:[`$`,e.toFixed(2)]})},{key:`stock`,header:`Stock`,sortable:!0,render:e=>(0,c.jsx)(m,{stock:e})},{key:`sku`,header:`Actions`,render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:6},children:[(0,c.jsx)(r,{variant:`outline`,size:`sm`,children:`Edit`}),(0,c.jsx)(r,{variant:`ghost`,size:`sm`,children:`Delete`})]})}],v=[{key:`orderId`,header:`Order ID`,sortable:!0},{key:`customer`,header:`Customer`,sortable:!0},{key:`date`,header:`Date`,sortable:!0},{key:`amount`,header:`Amount`,sortable:!0,render:e=>(0,c.jsxs)(`span`,{style:{fontWeight:600},children:[`$`,e.toFixed(2)]})},{key:`status`,header:`Status`,render:e=>(0,c.jsx)(p,{status:e})}];function y({theme:e}){return(0,c.jsxs)(`div`,{style:{textAlign:`center`,padding:`24px 0`},children:[(0,c.jsxs)(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:e.border,strokeWidth:1.5,style:{marginBottom:12},"aria-hidden":`true`,children:[(0,c.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,c.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,c.jsx)(`p`,{style:{margin:`0 0 4px`,fontWeight:600,fontSize:`14px`,color:e.text},children:`No results found`}),(0,c.jsx)(`p`,{style:{margin:0,fontSize:`13px`,color:e.textMuted},children:`Try adjusting your filters or search terms.`})]})}function b({theme:e}){let n={maxWidth:`860px`,margin:`0 auto`,padding:`48px 32px 80px`},r={fontSize:`2rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.03em`},i={fontSize:`15px`,color:e.textMuted,lineHeight:`1.7`,maxWidth:`620px`,margin:`0 0 24px`},f={fontSize:`1.2rem`,fontWeight:700,color:e.text,margin:`48px 0 16px`,letterSpacing:`-0.02em`},p={fontSize:`13px`,color:e.textMuted,lineHeight:`1.7`,padding:`16px`,borderRadius:8,border:`1px solid ${e.border}`,backgroundColor:e.surfaceAlt+`50`};return(0,c.jsxs)(`div`,{style:n,children:[(0,c.jsx)(`span`,{style:{display:`inline-block`,padding:`3px 10px`,borderRadius:`9999px`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.04em`,backgroundColor:e.primary+`18`,color:e.primary,border:`1px solid `+e.primary+`35`,marginBottom:`24px`},children:`Component Docs`}),(0,c.jsx)(`h1`,{style:r,children:`TkxTable`}),(0,c.jsxs)(`p`,{style:i,children:[(0,c.jsx)(`strong`,{children:`TkxTable`}),` is a fully-featured data table built on an accessible `,(0,c.jsx)(`code`,{children:`table`}),` element. It supports sortable columns with `,(0,c.jsx)(`code`,{children:`aria-sort`}),`, sticky headers, loading skeletons, custom cell rendering via render props, striped rows, and empty states.`]}),(0,c.jsx)(a,{label:`WCAG Compliance`,badges:[{criterion:`1.3.1 Info & Relationships`,level:`AA`,status:`PASS`},{criterion:`2.1.1 Keyboard`,level:`AA`,status:`PASS`},{criterion:`4.1.2 Name, Role, Value`,level:`AA`,status:`PASS`}]}),(0,c.jsx)(o,{theme:e,title:`Basic Table`,description:`A five-column users table with name, email, role, status, and join date. Data is passed as a typed array.`,code:`const columns: ColumnDef<UserRow>[] = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status' },
  { key: 'joined', header: 'Joined' },
];

<TkxTable columns={columns} data={users} />`,children:(0,c.jsx)(t,{columns:h,data:l})}),(0,c.jsx)(o,{theme:e,title:`Sortable Columns`,description:`Pass sortable=true on the table and mark individual columns as sortable. Click a header to sort ascending; click again for descending.`,code:`const columns: ColumnDef<UserRow>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role', sortable: true },
  { key: 'joined', header: 'Joined', sortable: true },
];

<TkxTable columns={columns} data={users} sortable />`,children:(0,c.jsx)(t,{columns:h,data:l,sortable:!0})}),(0,c.jsx)(o,{theme:e,title:`Striped Rows`,description:`Pass striped=true to alternate the background colour of even/odd rows. Improves readability for wide tables.`,code:`<TkxTable columns={columns} data={users} striped />`,children:(0,c.jsx)(t,{columns:h,data:l,striped:!0})}),(0,c.jsx)(o,{theme:e,title:`Sticky Header`,description:`stickyHeader=true makes the thead stick to the top when the table overflows its container. Wrap in a height-constrained div.`,code:`<div style={{ maxHeight: 220, overflowY: 'auto' }}>
  <TkxTable
    columns={columns}
    data={users}
    stickyHeader
  />
</div>`,children:(0,c.jsx)(`div`,{style:{maxHeight:220,overflowY:`auto`,borderRadius:8,border:`1px solid ${e.border}`},children:(0,c.jsx)(t,{columns:h,data:[...l,...l],stickyHeader:!0,style:{border:`none`}})})}),(0,c.jsx)(o,{theme:e,title:`Loading State`,description:`Pass isLoading=true to replace table rows with animated skeleton cells. The header remains visible so the layout stays stable.`,code:`<TkxTable
  columns={columns}
  data={[]}
  isLoading
/>`,children:(0,c.jsx)(t,{columns:h,data:[],isLoading:!0})}),(0,c.jsx)(o,{theme:e,title:`Empty State`,description:`When data is an empty array and isLoading is false, the emptyState ReactNode is rendered in a full-width cell.`,code:`<TkxTable
  columns={columns}
  data={[]}
  emptyState={<EmptyStatePlaceholder />}
/>`,children:(0,c.jsx)(t,{columns:h,data:[],emptyState:(0,c.jsx)(y,{theme:e})})}),(0,c.jsx)(o,{theme:e,title:`Custom Cell Rendering`,description:`Use the render prop on any ColumnDef to return arbitrary JSX — avatars, badges, action buttons, links, anything.`,code:`const columns: ColumnDef<UserRow>[] = [
  {
    key: 'name',
    header: 'User',
    render: (_val, row) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <TkxAvatar alt={row.name} initials={getInitials(row.name)} size="sm" />
        <div>
          <div style={{ fontWeight: 600 }}>{row.name}</div>
          <div style={{ fontSize: 12, color: theme.textMuted }}>{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    render: (val) => <TkxBadge variant={val === 'Active' ? 'success' : 'danger'}>{val}</TkxBadge>,
  },
  {
    key: 'email',
    header: 'Actions',
    render: () => (
      <div style={{ display: 'flex', gap: 6 }}>
        <TkxButton variant="ghost" size="sm">Edit</TkxButton>
        <TkxButton variant="ghost" size="sm">View</TkxButton>
      </div>
    ),
  },
];`,children:(0,c.jsx)(t,{columns:g(e),data:l})}),(0,c.jsx)(o,{theme:e,title:`Products Table`,description:`E-commerce product table with image placeholder, name+SKU, price, stock badge, and action buttons. Price and stock are sortable.`,code:`<TkxTable columns={productColumns} data={products} sortable />`,children:(0,c.jsx)(t,{columns:_(e),data:u,sortable:!0})}),(0,c.jsx)(o,{theme:e,title:`Orders Table`,description:`Order management table with ID, customer, date, amount (formatted), and status badge. All columns are sortable.`,code:`const orderColumns: ColumnDef<OrderRow>[] = [
  { key: 'orderId', header: 'Order ID', sortable: true },
  { key: 'customer', header: 'Customer', sortable: true },
  { key: 'date', header: 'Date', sortable: true },
  {
    key: 'amount',
    header: 'Amount',
    sortable: true,
    render: (val) => <span style={{ fontWeight: 600 }}>\${val.toFixed(2)}</span>,
  },
  {
    key: 'status',
    header: 'Status',
    render: (val) => <OrderStatusBadge status={val} />,
  },
];`,children:(0,c.jsx)(t,{columns:v,data:d,sortable:!0,striped:!0})}),(0,c.jsx)(o,{theme:e,title:`With Caption`,description:`The caption prop renders a visible caption above the table. Captions provide screen reader users with context about the table's purpose.`,code:`<TkxTable
  columns={columns}
  data={users}
  caption="Active users in the workspace — April 2026"
/>`,children:(0,c.jsx)(t,{columns:h,data:l,caption:`Active users in the workspace — April 2026`,striped:!0})}),(0,c.jsx)(`h2`,{style:f,children:`TkxTable Props`}),(0,c.jsx)(s,{props:[{name:`columns`,type:`ColumnDef<T>[]`,required:!0,description:`Array of column definitions. Each definition describes the key, header, optional render function, and optional width.`},{name:`data`,type:`T[]`,required:!0,description:`Array of row data. T must extend Record<string, unknown>. An empty array triggers the empty state.`},{name:`caption`,type:`string`,description:`Table caption rendered above the data. Improves accessibility by identifying the table to screen readers.`},{name:`sortable`,type:`boolean`,default:`false`,description:`Enables column sorting. Only columns with sortable: true (or not set to false) in their ColumnDef will be clickable.`},{name:`striped`,type:`boolean`,default:`false`,description:`Alternates row background colours for easier row scanning.`},{name:`stickyHeader`,type:`boolean`,default:`false`,description:`Fixes the thead to the top of the container when scrolling. Use inside a height-constrained wrapper.`},{name:`isLoading`,type:`boolean`,default:`false`,description:`Replaces table body rows with animated skeleton cells while data is loading.`},{name:`emptyState`,type:`ReactNode`,default:`'No data available'`,description:`Content to render in a full-width cell when data is empty and isLoading is false.`},{name:`style`,type:`CSSProperties`,description:`Inline styles for the table wrapper div.`},{name:`className`,type:`string`,description:`Additional class names for the table wrapper div.`}]}),(0,c.jsx)(`h2`,{style:{...f,marginTop:32},children:`ColumnDef Props`}),(0,c.jsx)(s,{props:[{name:`key`,type:`keyof T`,required:!0,description:`The data key to read from each row object.`},{name:`header`,type:`string`,required:!0,description:`Column header text rendered in the thead.`},{name:`render`,type:`(value: T[keyof T], row: T) => ReactNode`,description:`Custom render function. Receives the cell value and the full row. Return any valid JSX.`},{name:`width`,type:`string`,description:`CSS width for the column (e.g. "120px" or "20%").`},{name:`sortable`,type:`boolean`,description:`Set to false to prevent this column from being sortable even when the table has sortable=true.`}]}),(0,c.jsx)(`h2`,{style:f,children:`Accessibility Notes`}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,c.jsxs)(`div`,{style:p,children:[(0,c.jsx)(`strong`,{children:`aria-sort:`}),` Sortable column headers receive `,(0,c.jsx)(`code`,{children:`aria-sort="ascending"`}),`, `,(0,c.jsx)(`code`,{children:`aria-sort="descending"`}),`, or `,(0,c.jsx)(`code`,{children:`aria-sort="none"`}),` to communicate the current sort state to assistive technologies.`]}),(0,c.jsxs)(`div`,{style:p,children:[(0,c.jsx)(`strong`,{children:`scope="col":`}),` All `,(0,c.jsx)(`code`,{children:`th`}),` elements in the header row have `,(0,c.jsx)(`code`,{children:`scope="col"`}),`, allowing screen readers to associate header cells with their data cells correctly.`]}),(0,c.jsxs)(`div`,{style:p,children:[(0,c.jsx)(`strong`,{children:`caption:`}),` The optional `,(0,c.jsx)(`code`,{children:`caption`}),` prop renders a native HTML `,(0,c.jsx)(`code`,{children:`<caption>`}),` element. This is the recommended way to label a table for screen readers and is preferred over `,(0,c.jsx)(`code`,{children:`aria-label`}),`.`]}),(0,c.jsxs)(`div`,{style:p,children:[(0,c.jsx)(`strong`,{children:`Keyboard navigation:`}),` Sortable headers are focusable (tabIndex=0) and respond to `,(0,c.jsx)(`kbd`,{children:`Enter`}),` and `,(0,c.jsx)(`kbd`,{children:`Space`}),` to toggle sort direction.`]})]})]})}export{b as TablePage};