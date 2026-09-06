import{t as e}from"./vendor-react-CJ-iRaMF.js";import{L as t}from"./tekivex-ui-C9wlHCjq.js";import{t as n}from"./DemoSection-DEixK5oF.js";import{t as r}from"./PropTable-Cy1Qr_aV.js";var i=e(),a=`# TkxMarkdown

A **production-grade**, *zero-dependency* CommonMark + GFM renderer.

## Why another renderer?

- Tiny: ships with zero runtime deps
- Safe: blocks \`javascript:\`, \`vbscript:\`, non-image \`data:\` URLs
- Responsive: works on **every** device
- SSR-ready: \`'use client'\` directive for Next.js App Router

## Inline formatting

You can use **bold**, *italic*, ~~strikethrough~~, and \`inline code\`.
Escape special chars with a backslash: \\*not italic\\*.

## Lists & tasks

- Unordered item
- Another item
  - Nested child
  - Another nested

1. Ordered one
2. Ordered two

- [x] Published to npm
- [x] Pushed to GitHub
- [ ] Conquer the world

## GFM table

| Feature | Bundle | Runtime deps |
| --- | :---: | ---: |
| CommonMark | ✓ | 0 |
| GFM tables | ✓ | 0 |
| Task lists | ✓ | 0 |

## Blockquote

> "Markdown is for humans first, machines second."

## Code block

\`\`\`tsx
import { TkxMarkdown } from 'tekivex-ui';

export default function Doc() {
  return <TkxMarkdown src="/docs/README.md" />;
}
\`\`\`

## Links & images

Visit the [docs](https://www.tekivex.com/ui/) or the autolink <https://www.tekivex.com/ui>.

![Placeholder](https://via.placeholder.com/600x120/00f5d4/0a0a0f?text=TkxMarkdown)
`,o="Visit **[TekiVex](https://tekivex.com)** — render `# markdown` *anywhere*.",s=`| Device | Works |
| --- | :---: |
| 📱 Mobile | ✓ |
| 💻 Laptop | ✓ |
| 🖥️ Desktop | ✓ |
| 📺 TV | ✓ |`,c=`**Try to inject a script:**

[evil link](javascript:void0)

![evil image](javascript:alert('pwn'))

The component renders the text but the URLs are blocked.`,l=[{name:`source`,type:`string`,default:`—`,description:`Markdown source string. Takes precedence over src.`},{name:`src`,type:`string`,default:`—`,description:`Remote URL (or relative path) to a .md file. Fetched on mount.`},{name:`maxWidth`,type:`number | string`,default:`'100%'`,description:`Max content width.`},{name:`compact`,type:`boolean`,default:`false`,description:`Compact variant with smaller headings / line-heights.`},{name:`copyableCode`,type:`boolean`,default:`true`,description:`Show a copy button on fenced code blocks.`},{name:`onLinkClick`,type:`(href, ev) => boolean | void`,default:`—`,description:`Called when a link is clicked. Return false to suppress navigation.`},{name:`externalLinkRel`,type:`string`,default:`'noopener noreferrer'`,description:`rel attribute for external links.`},{name:`externalLinkTarget`,type:`'_blank' | '_self' | '_parent' | '_top'`,default:`'_blank'`,description:`target attribute for external links.`},{name:`loadingFallback`,type:`ReactNode`,default:`—`,description:`Replace the default loading state for remote src.`},{name:`errorFallback`,type:`(error: string) => ReactNode`,default:`—`,description:`Replace the default error state for remote src.`},{name:`className`,type:`string`,default:`—`,description:`Pass through className for custom styling.`},{name:`style`,type:`CSSProperties`,default:`—`,description:`Inline style overrides.`}];function u({theme:e}){let u={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`};return(0,i.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,i.jsx)(n,{title:`Markdown`,description:`Renders a Markdown string (CommonMark + GFM subset) with sanitized links and images. Fully responsive — works on every device.`,theme:e,code:`<TkxMarkdown source={\`# Hello

**Production-grade** markdown with *zero deps*.

- Lists
- [x] Tasks
- [Links](https://www.tekivex.com/ui/)

\\\`\\\`\\\`ts
const x = 1;
\\\`\\\`\\\`
\`} />`,children:(0,i.jsx)(t,{source:a})}),(0,i.jsx)(`hr`,{style:u}),(0,i.jsx)(n,{title:`Inline Usage`,description:`Render a short inline snippet with bold, italic, code, and a link.`,theme:e,code:'<TkxMarkdown source="Visit **[TekiVex](https://tekivex.com)** — render \\`# markdown\\` *anywhere*." />',children:(0,i.jsx)(t,{source:o})}),(0,i.jsx)(`hr`,{style:u}),(0,i.jsx)(n,{title:`GFM Tables`,description:`GitHub-Flavored Markdown tables with alignment support.`,theme:e,code:`<TkxMarkdown source={\`| Device | Works |
| --- | :---: |
| 📱 Mobile | ✓ |
| 💻 Laptop | ✓ |
| 🖥️ Desktop | ✓ |
| 📺 TV | ✓ |\`} />`,children:(0,i.jsx)(t,{source:s})}),(0,i.jsx)(`hr`,{style:u}),(0,i.jsx)(n,{title:`Remote .md file`,description:"Pass a `src` URL to fetch and render a remote markdown file. Includes built-in loading and error states.",theme:e,code:`<TkxMarkdown src="/docs/README.md" />`,children:(0,i.jsxs)(`div`,{style:{padding:16,borderRadius:8,background:e.surfaceAlt,color:e.textMuted,fontSize:13},children:[`Example: `,(0,i.jsx)(`code`,{children:`<TkxMarkdown src="/docs/README.md" />`}),` — fetches the file, shows a loading state, then renders it. Errors display a role=alert message.`]})}),(0,i.jsx)(`hr`,{style:u}),(0,i.jsx)(n,{title:`Security (XSS protection)`,description:`javascript:, vbscript:, and non-image data: URLs are blocked automatically. The link/image degrades to plain text.`,theme:e,code:`<TkxMarkdown source={\`
[evil link](javascript:void0)

![evil image](javascript:alert('pwn'))
\`} />`,children:(0,i.jsx)(t,{source:c})}),(0,i.jsx)(`hr`,{style:u}),(0,i.jsx)(n,{title:`Compact variant`,description:`Pass compact for a smaller, denser rendering — great for feed items and comments.`,theme:e,code:`<TkxMarkdown compact source="**Comment:** looks great!" />`,children:(0,i.jsx)(t,{compact:!0,source:`**Comment:** looks great! ~~Just kidding~~ — actually it *really* does.`})}),(0,i.jsx)(`hr`,{style:u}),(0,i.jsx)(r,{title:`TkxMarkdown props`,props:l,theme:e})]})}export{u as MarkdownPage};