import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{A as r,D as i,M as a,N as o,O as s,j as c,k as l}from"./tekivex-ui-C9wlHCjq.js";import{t as u}from"./DemoSection-DEixK5oF.js";import{t as d}from"./PropTable-Cy1Qr_aV.js";var f=e(t(),1),p=n();function m(e,t,n){return(0,p.jsx)(`div`,{style:{background:e,color:`#fff`,padding:`12px 16px`,borderRadius:6,fontSize:13,fontWeight:600,textAlign:`center`,height:n??`auto`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:t})}var h=[{name:`children`,type:`ReactNode`,description:`Layout content (Header, Sider, Content, Footer).`,required:!0},{name:`hasSider`,type:`boolean`,default:`false`,description:`When true, the layout flows horizontally (for layouts containing a Sider).`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles for the layout wrapper.`},{name:`className`,type:`string`,default:`undefined`,description:`Additional class name.`}],g=[{name:`children`,type:`ReactNode`,description:`Header content.`,required:!0},{name:`height`,type:`number | string`,default:`64`,description:`Header height in px or CSS string.`},{name:`fixed`,type:`boolean`,default:`false`,description:`Stick to top of viewport.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles.`}],_=[{name:`children`,type:`ReactNode`,description:`Sider content.`,required:!0},{name:`width`,type:`number | string`,default:`240`,description:`Expanded width.`},{name:`collapsedWidth`,type:`number`,default:`64`,description:`Width when collapsed.`},{name:`collapsed`,type:`boolean`,default:`undefined`,description:`Controlled collapsed state.`},{name:`onCollapse`,type:`(collapsed: boolean) => void`,default:`undefined`,description:`Callback when collapsed state changes.`},{name:`collapsible`,type:`boolean`,default:`false`,description:`Show built-in collapse trigger at the bottom.`},{name:`breakpoint`,type:`'sm' | 'md' | 'lg' | 'xl'`,default:`undefined`,description:`Auto-collapse when viewport is narrower than this breakpoint.`},{name:`trigger`,type:`ReactNode | null`,default:`undefined`,description:`Custom trigger node. Pass null to hide the default trigger.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles.`}],v=[{name:`children`,type:`ReactNode`,description:`Main content.`,required:!0},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles.`}],y=[{name:`children`,type:`ReactNode`,description:`Footer content.`,required:!0},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles.`}],b=[{name:`children`,type:`ReactNode`,description:`TkxCol children.`,required:!0},{name:`gutter`,type:`number | [number, number]`,default:`0`,description:`Gutter in px. Single number or [horizontal, vertical].`},{name:`justify`,type:`'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'`,default:`'start'`,description:`Horizontal alignment of columns.`},{name:`align`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,default:`'top'`,description:`Vertical alignment of columns.`},{name:`wrap`,type:`boolean`,default:`true`,description:`Allow column wrapping.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles.`}],x=[{name:`children`,type:`ReactNode`,description:`Column content.`},{name:`span`,type:`number`,default:`undefined`,description:`Column span out of 24.`},{name:`offset`,type:`number`,default:`0`,description:`Left offset in columns.`},{name:`push`,type:`number`,default:`0`,description:`Push columns to the right via relative positioning.`},{name:`pull`,type:`number`,default:`0`,description:`Pull columns to the left via relative positioning.`},{name:`order`,type:`number`,default:`undefined`,description:`Flex order override.`},{name:`sm`,type:`number | { span: number; offset?: number }`,default:`undefined`,description:`Responsive config at >= 576px.`},{name:`md`,type:`number | { span: number; offset?: number }`,default:`undefined`,description:`Responsive config at >= 768px.`},{name:`lg`,type:`number | { span: number; offset?: number }`,default:`undefined`,description:`Responsive config at >= 992px.`},{name:`xl`,type:`number | { span: number; offset?: number }`,default:`undefined`,description:`Responsive config at >= 1200px.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles.`}];function S({theme:e}){let[t,n]=(0,f.useState)(!1),S={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`},C=`1px solid ${e.border}`;return(0,p.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,p.jsx)(u,{title:`Basic Layout`,description:`A standard application layout with Header, Sider, Content, and Footer.`,theme:e,code:`<TkxLayout>
  <TkxHeader style={{ background: '#1a1a2e', color: '#fff' }}>
    Header
  </TkxHeader>
  <TkxLayout hasSider>
    <TkxSider style={{ background: '#16213e' }}>
      Sider
    </TkxSider>
    <TkxContent style={{ padding: 24, minHeight: 200 }}>
      Content
    </TkxContent>
  </TkxLayout>
  <TkxFooter style={{ textAlign: 'center' }}>
    Footer
  </TkxFooter>
</TkxLayout>`,children:(0,p.jsx)(`div`,{style:{border:C,borderRadius:10,overflow:`hidden`},children:(0,p.jsxs)(c,{children:[(0,p.jsx)(r,{style:{background:`#1a1a2e`,color:`#fff`,display:`flex`,alignItems:`center`,padding:`0 24px`,fontSize:14,fontWeight:600},children:`Header`}),(0,p.jsxs)(c,{hasSider:!0,children:[(0,p.jsxs)(o,{width:180,style:{background:`#16213e`,color:`#a0a0c0`,padding:`24px 16px`,fontSize:13},children:[(0,p.jsx)(`div`,{children:`Nav Item 1`}),(0,p.jsx)(`div`,{style:{marginTop:8},children:`Nav Item 2`}),(0,p.jsx)(`div`,{style:{marginTop:8},children:`Nav Item 3`})]}),(0,p.jsx)(s,{style:{padding:24,minHeight:180,fontSize:14,color:e.textMuted},children:`Main content area. This is where the primary page content lives.`})]}),(0,p.jsx)(l,{style:{textAlign:`center`,fontSize:13,color:e.textMuted,padding:`12px 24px`,borderTop:C},children:`TekiVex UI Footer`})]})})}),(0,p.jsx)(`hr`,{style:S}),(0,p.jsx)(u,{title:`Collapsible Sider`,description:`Use collapsible to show a built-in trigger, or control collapsed state directly for custom behavior.`,theme:e,code:`const [collapsed, setCollapsed] = useState(false);

<TkxLayout hasSider>
  <TkxSider
    collapsible
    collapsed={collapsed}
    onCollapse={setCollapsed}
    width={200}
    collapsedWidth={64}
    style={{ background: '#16213e', color: '#fff' }}
  >
    {collapsed ? 'IC' : 'Full Navigation'}
  </TkxSider>
  <TkxContent style={{ padding: 24 }}>
    Content
  </TkxContent>
</TkxLayout>`,children:(0,p.jsx)(`div`,{style:{border:C,borderRadius:10,overflow:`hidden`},children:(0,p.jsxs)(c,{hasSider:!0,children:[(0,p.jsx)(o,{collapsible:!0,collapsed:t,onCollapse:n,width:200,collapsedWidth:64,style:{background:`#16213e`,color:`#a0a0c0`,padding:`24px 12px`,fontSize:13,minHeight:200},children:t?(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsx)(`div`,{children:`H`}),(0,p.jsx)(`div`,{style:{marginTop:8},children:`S`}),(0,p.jsx)(`div`,{style:{marginTop:8},children:`P`})]}):(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{style:{fontWeight:600,marginBottom:12,color:`#fff`},children:`Navigation`}),(0,p.jsx)(`div`,{children:`Home`}),(0,p.jsx)(`div`,{style:{marginTop:8},children:`Settings`}),(0,p.jsx)(`div`,{style:{marginTop:8},children:`Profile`})]})}),(0,p.jsx)(s,{style:{padding:24,fontSize:14,color:e.textMuted},children:(0,p.jsxs)(`div`,{children:[`Sider is `,t?`collapsed`:`expanded`,`. Click the trigger at the bottom of the sider to toggle.`]})})]})})}),(0,p.jsx)(`hr`,{style:S}),(0,p.jsx)(u,{title:`Two Column Grid`,description:`Use TkxRow and TkxCol to create a 24-column grid. Here, two equal columns each span 12.`,theme:e,code:`<TkxRow gutter={16}>
  <TkxCol span={12}>
    <div>Column 1 (span=12)</div>
  </TkxCol>
  <TkxCol span={12}>
    <div>Column 2 (span=12)</div>
  </TkxCol>
</TkxRow>`,children:(0,p.jsxs)(a,{gutter:16,children:[(0,p.jsx)(i,{span:12,children:m(e.accent,`span=12`)}),(0,p.jsx)(i,{span:12,children:m(`#e74c3c`,`span=12`)})]})}),(0,p.jsx)(`hr`,{style:S}),(0,p.jsx)(u,{title:`Three Column Grid`,description:`Three columns of span 8 each, filling all 24 columns.`,theme:e,code:`<TkxRow gutter={16}>
  <TkxCol span={8}><div>Col 1</div></TkxCol>
  <TkxCol span={8}><div>Col 2</div></TkxCol>
  <TkxCol span={8}><div>Col 3</div></TkxCol>
</TkxRow>`,children:(0,p.jsxs)(a,{gutter:16,children:[(0,p.jsx)(i,{span:8,children:m(e.accent,`span=8`)}),(0,p.jsx)(i,{span:8,children:m(`#2ecc71`,`span=8`)}),(0,p.jsx)(i,{span:8,children:m(`#f39c12`,`span=8`)})]})}),(0,p.jsx)(`hr`,{style:S}),(0,p.jsx)(u,{title:`Responsive Grid`,description:`Columns adapt to viewport size using sm, md, and lg breakpoint props. On small screens they stack, on large screens they split into thirds.`,theme:e,code:`<TkxRow gutter={[16, 16]}>
  <TkxCol sm={24} md={12} lg={8}>
    <div>Responsive A</div>
  </TkxCol>
  <TkxCol sm={24} md={12} lg={8}>
    <div>Responsive B</div>
  </TkxCol>
  <TkxCol sm={24} md={24} lg={8}>
    <div>Responsive C</div>
  </TkxCol>
</TkxRow>`,children:(0,p.jsxs)(a,{gutter:[16,16],children:[(0,p.jsx)(i,{sm:24,md:12,lg:8,children:m(`#9b59b6`,`sm=24 md=12 lg=8`)}),(0,p.jsx)(i,{sm:24,md:12,lg:8,children:m(`#1abc9c`,`sm=24 md=12 lg=8`)}),(0,p.jsx)(i,{sm:24,md:24,lg:8,children:m(`#e67e22`,`sm=24 md=24 lg=8`)})]})}),(0,p.jsx)(`hr`,{style:S}),(0,p.jsx)(u,{title:`Grid with Offset`,description:`Use the offset prop to push columns to the right.`,theme:e,code:`<TkxRow gutter={16}>
  <TkxCol span={8}>
    <div>span=8</div>
  </TkxCol>
  <TkxCol span={8} offset={8}>
    <div>span=8, offset=8</div>
  </TkxCol>
</TkxRow>`,children:(0,p.jsxs)(a,{gutter:16,children:[(0,p.jsx)(i,{span:8,children:m(e.accent,`span=8`)}),(0,p.jsx)(i,{span:8,offset:8,children:m(`#e74c3c`,`span=8, offset=8`)})]})}),(0,p.jsx)(`hr`,{style:S}),(0,p.jsxs)(`div`,{style:{marginTop:48},children:[(0,p.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxLayout Props`}),(0,p.jsx)(d,{props:h})]}),(0,p.jsxs)(`div`,{style:{marginTop:40},children:[(0,p.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxHeader Props`}),(0,p.jsx)(d,{props:g})]}),(0,p.jsxs)(`div`,{style:{marginTop:40},children:[(0,p.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxSider Props`}),(0,p.jsx)(d,{props:_})]}),(0,p.jsxs)(`div`,{style:{marginTop:40},children:[(0,p.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxContent Props`}),(0,p.jsx)(d,{props:v})]}),(0,p.jsxs)(`div`,{style:{marginTop:40},children:[(0,p.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxFooter Props`}),(0,p.jsx)(d,{props:y})]}),(0,p.jsxs)(`div`,{style:{marginTop:40},children:[(0,p.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxRow Props`}),(0,p.jsx)(d,{props:b})]}),(0,p.jsxs)(`div`,{style:{marginTop:40},children:[(0,p.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxCol Props`}),(0,p.jsx)(d,{props:x})]})]})}export{S as LayoutPage};