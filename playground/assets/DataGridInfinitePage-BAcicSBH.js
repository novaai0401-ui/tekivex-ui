import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{B as r}from"./tekivex-ui-C9wlHCjq.js";import{t as i}from"./DemoSection-DEixK5oF.js";import{t as a}from"./PropTable-Cy1Qr_aV.js";var o=e(t(),1),s=n(),c=[{name:`onLoadMore`,type:`() => void | Promise<void>`,default:`undefined`,description:`Called when the user scrolls near the bottom (within loadMoreThreshold px). Use to fetch the next page.`},{name:`hasMore`,type:`boolean`,default:`undefined`,description:`When false the sentinel is hidden and onLoadMore is never called again.`},{name:`loadingMore`,type:`boolean`,default:`false`,description:`Shows a skeleton row at the bottom while a page fetch is in progress.`},{name:`loadMoreThreshold`,type:`number`,default:`200`,description:`Pixels from the bottom of the scroll container at which onLoadMore is triggered.`},{name:`maxHeight`,type:`number | string`,default:`undefined`,description:`Constrains the grid height and enables internal scrolling — required for infinite scroll to work.`},{name:`virtualScroll`,type:`boolean`,default:`auto`,description:`Enable virtual scrolling. Defaults to auto (enabled when data ≥ 50 rows and maxHeight is set).`},{name:`rowHeight`,type:`number`,default:`40`,description:`Row height in px used by the virtual scroll engine to calculate visible range.`}],l=[`Alice`,`Bob`,`Carol`,`David`,`Eve`,`Frank`,`Grace`,`Hank`,`Ivy`,`Jack`],u=[`Smith`,`Johnson`,`Williams`,`Brown`,`Jones`,`Garcia`,`Miller`,`Davis`,`Wilson`,`Moore`],d=[`Admin`,`Editor`,`Viewer`,`Developer`,`Manager`,`Analyst`,`Support`,`Designer`],f=[`Active`,`Inactive`,`Pending`,`Suspended`];function p(e){return e[Math.floor(Math.random()*e.length)]}function m(e,t,n){return`${e.toLowerCase()}.${t.toLowerCase()}${n}@example.com`}function h(){let e=new Date(2020,0,1).getTime(),t=new Date(2025,11,31).getTime();return new Date(e+Math.random()*(t-e)).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})}function g(e,t){return Array.from({length:t},(t,n)=>{let r=e+n,i=p(l),a=p(u);return{id:r,name:`${i} ${a}`,email:m(i,a,r),role:p(d),status:p(f),joinDate:h()}})}var _={Active:`#10b981`,Inactive:`#6b7280`,Pending:`#f59e0b`,Suspended:`#ef4444`};function v(e){return[{key:`id`,header:`ID`,width:60,sortable:!0,align:`right`},{key:`name`,header:`Name`,width:160,sortable:!0},{key:`email`,header:`Email`,width:220,sortable:!0},{key:`role`,header:`Role`,width:120,sortable:!0},{key:`status`,header:`Status`,width:110,sortable:!0,renderCell:e=>(0,s.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,padding:`2px 8px`,borderRadius:`9999px`,fontSize:`11px`,fontWeight:600,backgroundColor:`${_[e]??`#6b7280`}20`,color:_[e]??`#6b7280`,border:`1px solid ${_[e]??`#6b7280`}40`},children:e})},{key:`joinDate`,header:`Join Date`,width:120,sortable:!0}]}var y=300,b=25,x=800;function S({theme:e}){let t=v(e),[n,l]=(0,o.useState)(()=>g(1,50)),[u,d]=(0,o.useState)(!1),[f,p]=(0,o.useState)(!0),m=(0,o.useCallback)(()=>{u||(d(!0),setTimeout(()=>{l(e=>{let t=[...e,...g(e.length+1,b)];return t.length>=y&&p(!1),t}),d(!1)},x))},[u]),[h,_]=(0,o.useState)(()=>g(1,50)),[S,C]=(0,o.useState)(!1),[w,T]=(0,o.useState)(!0),E=(0,o.useCallback)(()=>{S||(C(!0),setTimeout(()=>{_(e=>{let t=[...e,...g(e.length+1,b)];return t.length>=y&&T(!1),t}),C(!1)},x))},[S]),D={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`};return(0,s.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,s.jsx)(`h1`,{style:{fontSize:`2.25rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.03em`,lineHeight:1.15},children:`TkxDataGrid — Infinite Scroll`}),(0,s.jsx)(`p`,{style:{fontSize:`15px`,color:e.textMuted,lineHeight:`1.75`,maxWidth:`640px`,margin:`0 0 48px`},children:`Demonstrates the onLoadMore / hasMore / loadingMore props for infinite scroll pagination. The grid calls onLoadMore when the user scrolls within loadMoreThreshold pixels of the bottom. Rows accumulate up to 300 before hasMore is set to false.`}),(0,s.jsx)(i,{title:`Infinite Scroll DataGrid`,description:`Starts with 50 rows. Scroll to the bottom to trigger onLoadMore which appends 25 rows after an 800ms simulated network delay. loadingMore=true shows a skeleton row while fetching. Stops at 300 rows (hasMore=false).`,theme:e,code:`const [rows, setRows] = useState(initialRows); // 50 rows
const [loading, setLoading] = useState(false);
const [hasMore, setHasMore] = useState(true);

const handleLoadMore = () => {
  setLoading(true);
  setTimeout(() => {
    setRows(prev => {
      const next = [...prev, ...fetchNextPage(25)];
      if (next.length >= 300) setHasMore(false);
      return next;
    });
    setLoading(false);
  }, 800);
};

<TkxDataGrid
  columns={columns}
  data={rows}
  rowKey="id"
  maxHeight={500}
  stickyHeader={true}
  sortable={true}
  onLoadMore={handleLoadMore}
  hasMore={hasMore}
  loadingMore={loading}
/>`,children:(0,s.jsxs)(`div`,{style:{width:`100%`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,marginBottom:`10px`},children:[(0,s.jsxs)(`span`,{style:{fontSize:`12px`,color:e.textMuted},children:[n.length,` rows loaded`,!f&&` — all rows loaded`,u&&` — fetching...`]}),!f&&(0,s.jsxs)(`span`,{style:{fontSize:`11px`,padding:`2px 8px`,borderRadius:`9999px`,backgroundColor:`${e.success}20`,color:e.success,border:`1px solid ${e.success}40`,fontWeight:600},children:[`All `,y,` rows loaded`]})]}),(0,s.jsx)(r,{columns:t,data:n,rowKey:`id`,maxHeight:500,stickyHeader:!0,sortable:!0,striped:!0,onLoadMore:m,hasMore:f,loadingMore:u})]})}),(0,s.jsx)(i,{title:`Virtual Scroll + Infinite Scroll`,description:`Same infinite scroll behavior but with virtualScroll=true and rowHeight=44 set explicitly. Virtual scrolling only renders visible rows in the DOM, making it efficient for thousands of items.`,theme:e,code:`<TkxDataGrid
  columns={columns}
  data={rows}
  rowKey="id"
  maxHeight={500}
  stickyHeader={true}
  sortable={true}
  virtualScroll={true}
  rowHeight={44}
  onLoadMore={handleLoadMore}
  hasMore={hasMore}
  loadingMore={loading}
/>`,children:(0,s.jsxs)(`div`,{style:{width:`100%`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,marginBottom:`10px`},children:[(0,s.jsxs)(`span`,{style:{fontSize:`12px`,color:e.textMuted},children:[h.length,` rows loaded (virtual DOM)`,!w&&` — all rows loaded`,S&&` — fetching...`]}),(0,s.jsx)(`span`,{style:{fontSize:`11px`,padding:`2px 8px`,borderRadius:`9999px`,backgroundColor:`${e.primary}20`,color:e.primary,border:`1px solid ${e.primary}40`,fontWeight:600},children:`virtualScroll=true`})]}),(0,s.jsx)(r,{columns:t,data:h,rowKey:`id`,maxHeight:500,stickyHeader:!0,sortable:!0,striped:!0,virtualScroll:!0,rowHeight:44,onLoadMore:E,hasMore:w,loadingMore:S})]})}),(0,s.jsx)(`hr`,{style:D}),(0,s.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 20px`,letterSpacing:`-0.02em`},children:`Infinite Scroll Props`}),(0,s.jsx)(a,{props:c})]})}export{S as DataGridInfinitePage};