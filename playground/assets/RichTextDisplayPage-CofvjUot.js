import{t as e}from"./vendor-react-CJ-iRaMF.js";import{R as t}from"./tekivex-ui-C9wlHCjq.js";import{t as n}from"./DemoSection-DEixK5oF.js";import{t as r}from"./PropTable-Cy1Qr_aV.js";var i=e(),a=[{type:`heading`,content:`Getting Started`,level:1},{type:`paragraph`,content:`TkxRichTextDisplay renders an array of structured blocks into styled HTML. It supports headings, paragraphs, code, blockquotes, lists, callouts, and dividers.`},{type:`heading`,content:`Installation`,level:2},{type:`code`,content:`npm install tekivex-ui`,language:`bash`},{type:`divider`},{type:`heading`,content:`Features`,level:2},{type:`list`,items:[`Structured block-based content model`,`Syntax highlighting for code blocks`,`Four callout variants: info, warning, success, danger`,`Ordered and unordered lists`],ordered:!1},{type:`blockquote`,content:`Good design is as little design as possible. Less, but better.`},{type:`callout`,content:`This is an informational callout providing helpful context.`,variant:`info`},{type:`callout`,content:`Warning: this action cannot be undone once confirmed.`,variant:`warning`},{type:`callout`,content:`Success! Your changes have been saved.`,variant:`success`},{type:`callout`,content:`Error: unable to connect to the server. Please try again.`,variant:`danger`}],o=[{type:`heading`,content:`Heading Level 1`,level:1},{type:`heading`,content:`Heading Level 2`,level:2},{type:`heading`,content:`Heading Level 3`,level:3},{type:`paragraph`,content:`Regular paragraph text for comparison.`}],s=[{type:`heading`,content:`Code Example`,level:3},{type:`code`,content:`import { TkxRichTextDisplay } from 'tekivex-ui';

const blocks = [
  { type: 'heading', content: 'Hello', level: 1 },
  { type: 'paragraph', content: 'World' },
];

<TkxRichTextDisplay blocks={blocks} />`,language:`tsx`}],c=[{type:`heading`,content:`Ordered List`,level:3},{type:`list`,items:[`Clone the repository`,`Install dependencies`,`Run the dev server`,`Open the browser`],ordered:!0},{type:`heading`,content:`Unordered List`,level:3},{type:`list`,items:[`React 18+`,`TypeScript support`,`Tree-shakable exports`],ordered:!1}],l=[{name:`blocks`,type:`RichTextBlock[]`,description:`Array of content blocks to render.`,required:!0},{name:`className`,type:`string`,default:`undefined`,description:`Additional class name for the wrapper.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles for the wrapper.`}],u=[{name:`type`,type:`'heading' | 'paragraph' | 'blockquote' | 'code' | 'list' | 'divider' | 'image' | 'callout'`,description:`The block type to render.`,required:!0},{name:`content`,type:`string`,default:`undefined`,description:`Text content for heading, paragraph, blockquote, code, and callout blocks.`},{name:`level`,type:`1 | 2 | 3`,default:`1`,description:`Heading level (only used when type is "heading").`},{name:`language`,type:`string`,default:`undefined`,description:`Language hint for code blocks.`},{name:`items`,type:`string[]`,default:`undefined`,description:`List items (only used when type is "list").`},{name:`ordered`,type:`boolean`,default:`false`,description:`Use ordered numbering for list blocks.`},{name:`src`,type:`string`,default:`undefined`,description:`Image source URL (only used when type is "image").`},{name:`alt`,type:`string`,default:`undefined`,description:`Image alt text.`},{name:`variant`,type:`'info' | 'warning' | 'success' | 'danger'`,default:`'info'`,description:`Callout variant with distinct icon and color.`}];function d({theme:e}){let d={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`};return(0,i.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,i.jsx)(n,{title:`Rich Text Display`,description:`Renders structured blocks including headings, paragraphs, code, blockquotes, lists, callouts, and dividers.`,theme:e,code:`<TkxRichTextDisplay
  blocks={[
    { type: 'heading', content: 'Getting Started', level: 1 },
    { type: 'paragraph', content: 'Introductory text...' },
    { type: 'code', content: 'npm install tekivex-ui', language: 'bash' },
    { type: 'divider' },
    { type: 'list', items: ['Item A', 'Item B'], ordered: false },
    { type: 'blockquote', content: 'A notable quote.' },
    { type: 'callout', content: 'Helpful info.', variant: 'info' },
    { type: 'callout', content: 'A warning.', variant: 'warning' },
    { type: 'callout', content: 'All good!', variant: 'success' },
    { type: 'callout', content: 'Something failed.', variant: 'danger' },
  ]}
/>`,children:(0,i.jsx)(t,{blocks:a})}),(0,i.jsx)(`hr`,{style:d}),(0,i.jsx)(n,{title:`Headings`,description:`Three heading levels with distinct sizes and weights.`,theme:e,code:`<TkxRichTextDisplay
  blocks={[
    { type: 'heading', content: 'Level 1', level: 1 },
    { type: 'heading', content: 'Level 2', level: 2 },
    { type: 'heading', content: 'Level 3', level: 3 },
  ]}
/>`,children:(0,i.jsx)(t,{blocks:o})}),(0,i.jsx)(`hr`,{style:d}),(0,i.jsx)(n,{title:`Code Block`,description:`Renders a monospace code block with an optional language hint.`,theme:e,code:`<TkxRichTextDisplay
  blocks={[
    { type: 'code', content: 'const x = 42;', language: 'tsx' },
  ]}
/>`,children:(0,i.jsx)(t,{blocks:s})}),(0,i.jsx)(`hr`,{style:d}),(0,i.jsx)(n,{title:`Lists`,description:`Ordered and unordered lists rendered from an items array.`,theme:e,code:`<TkxRichTextDisplay
  blocks={[
    { type: 'list', items: ['Step 1', 'Step 2'], ordered: true },
    { type: 'list', items: ['React', 'TypeScript'], ordered: false },
  ]}
/>`,children:(0,i.jsx)(t,{blocks:c})}),(0,i.jsx)(`hr`,{style:d}),(0,i.jsxs)(`div`,{style:{marginTop:48},children:[(0,i.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxRichTextDisplay Props`}),(0,i.jsx)(r,{props:l})]}),(0,i.jsxs)(`div`,{style:{marginTop:40},children:[(0,i.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`RichTextBlock Props`}),(0,i.jsx)(r,{props:u})]})]})}export{d as RichTextDisplayPage};