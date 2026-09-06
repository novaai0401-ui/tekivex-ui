import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{et as r}from"./tekivex-ui-C9wlHCjq.js";import{t as i}from"./DemoSection-DEixK5oF.js";var a=e(t(),1),o=n();function s({theme:e}){let[t,n]=(0,a.useState)(``),[s,c]=(0,a.useState)(``),[l,u]=(0,a.useState)(``),[d,f]=(0,a.useState)(``),p={fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,fontFamily:`monospace`},m={marginTop:`8px`,display:`inline-flex`,alignItems:`center`,gap:`6px`,background:e.surfaceAlt,border:`1px solid ${e.border}`,borderRadius:`6px`,padding:`4px 12px`,fontSize:`13px`,color:e.textMuted,fontFamily:`monospace`};return(0,o.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,o.jsx)(`h1`,{style:{fontSize:`2.25rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.03em`},children:`TkxOTP`}),(0,o.jsx)(`p`,{style:{fontSize:`15px`,color:e.textMuted,lineHeight:`1.75`,maxWidth:`640px`,margin:`0 0 8px`},children:`One-time password input with configurable length, character type, masking, and validation states. Supports keyboard navigation, clipboard paste, and auto-advance.`}),(0,o.jsxs)(`p`,{style:{fontSize:`13px`,color:e.textMuted,lineHeight:`1.6`,maxWidth:`640px`,margin:`0 0 48px`},children:[(0,o.jsx)(`strong`,{style:{color:e.text},children:`Import:`}),` `,(0,o.jsx)(`code`,{style:p,children:`import { TkxOTP } from 'tekivex-ui'`})]}),(0,o.jsx)(i,{title:`Basic — 6-digit`,description:`The default 6-box OTP input. Type a digit and focus auto-advances to the next box. Paste support fills all boxes at once.`,theme:e,code:`import { useState } from 'react';
import { TkxOTP } from 'tekivex-ui';

function MyOTP() {
  const [value, setValue] = useState('');

  return (
    <TkxOTP
      length={6}
      value={value}
      onChange={setValue}
      onComplete={(v) => console.log('OTP complete:', v)}
    />
  );
}`,children:(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:12,width:`100%`},children:[(0,o.jsx)(r,{length:6,value:t,onChange:n,onComplete:e=>console.log(`Complete:`,e)}),(0,o.jsxs)(`div`,{style:m,children:[(0,o.jsx)(`span`,{children:`value:`}),` `,(0,o.jsx)(`span`,{style:{color:e.text},children:t||`——`})]})]})}),(0,o.jsx)(i,{title:`4-digit with Hint`,description:`Use length={4} for a shorter code. The hint prop adds helper text below the boxes. Large size with size='lg'.`,theme:e,code:`<TkxOTP
  length={4}
  value={value}
  onChange={setValue}
  hint="Enter your 4-digit PIN"
  size="lg"
/>`,children:(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:12,width:`100%`},children:[(0,o.jsx)(r,{length:4,value:s,onChange:c,hint:`Enter your 4-digit PIN`,size:`lg`}),(0,o.jsxs)(`div`,{style:m,children:[(0,o.jsx)(`span`,{children:`value:`}),` `,(0,o.jsx)(`span`,{style:{color:e.text},children:s||`——`})]})]})}),(0,o.jsx)(i,{title:`Masked (Password Mode)`,description:`Set mask={true} to hide digits as dots. Useful for sensitive codes like PINs.`,theme:e,code:`<TkxOTP
  length={6}
  value={value}
  onChange={setValue}
  mask={true}
  hint="Digits are hidden as you type"
/>`,children:(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:12,width:`100%`},children:[(0,o.jsx)(r,{length:6,value:l,onChange:u,mask:!0,hint:`Digits are hidden as you type`}),(0,o.jsxs)(`div`,{style:m,children:[(0,o.jsx)(`span`,{children:`actual value:`}),` `,(0,o.jsx)(`span`,{style:{color:e.text},children:l||`——`})]})]})}),(0,o.jsx)(i,{title:`Numeric-only with Separator`,description:`Use type='number' to restrict to digits only. The separator prop inserts a custom element between boxes at the specified position.`,theme:e,code:`<TkxOTP
  length={6}
  value={value}
  onChange={setValue}
  type="number"
  separator={<span style={{ color: '#999', fontSize: '18px' }}>–</span>}
  separatorPosition={3}
  hint="Only digits are accepted"
  size="sm"
/>`,children:(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:12,width:`100%`},children:[(0,o.jsx)(r,{length:6,value:d,onChange:f,type:`number`,separator:(0,o.jsx)(`span`,{style:{color:e.textMuted,fontSize:`18px`,userSelect:`none`},children:`–`}),separatorPosition:3,hint:`Only digits are accepted`,size:`sm`}),(0,o.jsxs)(`div`,{style:m,children:[(0,o.jsx)(`span`,{children:`value:`}),` `,(0,o.jsx)(`span`,{style:{color:e.text},children:d||`——`})]})]})}),(0,o.jsx)(i,{title:`Invalid / Error State`,description:`Set isInvalid={true} to apply error styling. Use errorMessage for a descriptive error below the inputs.`,theme:e,code:`<TkxOTP
  length={6}
  value="123"
  isInvalid={true}
  errorMessage="Incorrect code. Please try again."
/>`,children:(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,width:`100%`},children:(0,o.jsx)(r,{length:6,value:`123`,isInvalid:!0,errorMessage:`Incorrect code. Please try again.`})})}),(0,o.jsxs)(`div`,{style:{marginTop:`64px`},children:[(0,o.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:700,color:e.text,margin:`0 0 24px`,letterSpacing:`-0.02em`},children:`Props`}),(0,o.jsx)(`div`,{style:{overflowX:`auto`,borderRadius:`10px`,border:`1px solid ${e.border}`},children:(0,o.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:13},children:[(0,o.jsx)(`thead`,{children:(0,o.jsx)(`tr`,{children:[`Prop`,`Type`,`Default`,`Description`].map(t=>(0,o.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,color:e.textMuted,fontWeight:600,background:e.surfaceAlt,borderBottom:`1px solid ${e.border}`,fontSize:12,textTransform:`uppercase`,letterSpacing:`0.06em`},children:t},t))})}),(0,o.jsx)(`tbody`,{children:[[`length`,`number`,`6`,`Number of OTP input boxes`],[`value`,`string`,`—`,`Controlled value`],[`onChange`,`(value: string) => void`,`—`,`Called on every change`],[`onComplete`,`(value: string) => void`,`—`,`Fired when all boxes are filled`],[`type`,`'number' | 'alphanumeric' | 'alpha'`,`'number'`,`Allowed character type`],[`mask`,`boolean`,`false`,`Render as password dots`],[`autoFocus`,`boolean`,`false`,`Auto-focus first box on mount`],[`isDisabled`,`boolean`,`false`,`Disable all boxes`],[`isInvalid`,`boolean`,`false`,`Apply error styling`],[`errorMessage`,`string`,`—`,`Error text below boxes`],[`hint`,`string`,`—`,`Helper text below boxes`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`,`Box size`],[`separator`,`ReactNode`,`—`,`Element between boxes at separatorPosition`],[`separatorPosition`,`number`,`—`,`Index after which separator is inserted`]].map(([t,n,r,i],a)=>(0,o.jsxs)(`tr`,{style:{background:a%2==0?`transparent`:e.surfaceAlt},children:[(0,o.jsx)(`td`,{style:{padding:`10px 14px`,borderBottom:`1px solid ${e.border}`},children:(0,o.jsx)(`code`,{style:p,children:t})}),(0,o.jsx)(`td`,{style:{padding:`10px 14px`,borderBottom:`1px solid ${e.border}`,fontFamily:`monospace`,fontSize:12,color:e.info},children:n}),(0,o.jsx)(`td`,{style:{padding:`10px 14px`,borderBottom:`1px solid ${e.border}`,fontFamily:`monospace`,fontSize:12,color:e.textMuted},children:r}),(0,o.jsx)(`td`,{style:{padding:`10px 14px`,borderBottom:`1px solid ${e.border}`,color:e.text},children:i})]},t))})]})})]})]})}export{s as OTPPage};