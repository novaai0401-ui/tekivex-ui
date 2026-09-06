import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{tt as r}from"./tekivex-ui-C9wlHCjq.js";import{t as i}from"./DemoSection-DEixK5oF.js";var a=e(t(),1),o=n();function s({theme:e}){let[t,n]=(0,a.useState)(0),[s,c]=(0,a.useState)(50);return(0,o.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`40px 32px`,color:e.text},children:[(0,o.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,marginBottom:8},children:`Number Input`}),(0,o.jsx)(`p`,{style:{color:e.textMuted,marginBottom:32},children:`Numeric input with increment/decrement controls, min/max constraints, step, and prefix/suffix support.`}),(0,o.jsx)(i,{title:`Basic`,description:`A controlled number input with min/max constraints.`,theme:e,code:`import { TkxNumberInput } from 'tekivex-ui';
import { useState } from 'react';

const [value, setValue] = useState(0);

<TkxNumberInput
  value={value}
  onChange={setValue}
  label="Count"
  min={0}
  max={100}
/>`,children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(r,{value:t,onChange:n,label:`Count`,min:0,max:100}),(0,o.jsxs)(`p`,{style:{marginTop:8,fontSize:12,color:e.textMuted},children:[`Value: `,t]})]})}),(0,o.jsx)(i,{title:`With Prefix / Suffix`,description:`Display currency symbols, percentage signs, or other affixes.`,theme:e,code:`<TkxNumberInput
  value={value}
  onChange={setValue}
  label="Percentage"
  min={0}
  max={100}
  suffix="%"
/>

<TkxNumberInput
  defaultValue={9.99}
  label="Price"
  min={0}
  step={0.01}
  prefix="$"
/>`,children:(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:24,flexWrap:`wrap`},children:[(0,o.jsx)(r,{value:s,onChange:c,label:`Percentage`,min:0,max:100,suffix:`%`}),(0,o.jsx)(r,{defaultValue:9.99,label:`Price`,min:0,step:.01,prefix:`$`})]})}),(0,o.jsx)(i,{title:`Sizes`,description:`Available size presets: small, medium, and large.`,theme:e,code:`<TkxNumberInput defaultValue={10} size="sm" label="Small" />
<TkxNumberInput defaultValue={10} size="md" label="Medium" />
<TkxNumberInput defaultValue={10} size="lg" label="Large" />`,children:(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:24,flexWrap:`wrap`},children:[(0,o.jsx)(r,{defaultValue:10,size:`sm`,label:`Small`}),(0,o.jsx)(r,{defaultValue:10,size:`md`,label:`Medium`}),(0,o.jsx)(r,{defaultValue:10,size:`lg`,label:`Large`})]})}),(0,o.jsx)(i,{title:`Disabled`,description:`A disabled number input that cannot be interacted with.`,theme:e,code:`<TkxNumberInput defaultValue={42} disabled label="Disabled" />`,children:(0,o.jsx)(r,{defaultValue:42,disabled:!0,label:`Disabled`})}),(0,o.jsx)(`h2`,{style:{fontSize:`1.1rem`,fontWeight:600,marginBottom:16},children:`Props`}),(0,o.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:13},children:[(0,o.jsx)(`thead`,{children:(0,o.jsx)(`tr`,{style:{borderBottom:`1px solid ${e.border}`},children:[`Prop`,`Type`,`Default`,`Description`].map(t=>(0,o.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 12px`,color:e.textMuted,fontWeight:600},children:t},t))})}),(0,o.jsx)(`tbody`,{children:[[`value`,`number`,`—`,`Controlled value`],[`defaultValue`,`number`,`0`,`Initial value (uncontrolled)`],[`onChange`,`(v: number) => void`,`—`,`Change handler`],[`min`,`number`,`—`,`Minimum value`],[`max`,`number`,`—`,`Maximum value`],[`step`,`number`,`1`,`Increment/decrement step`],[`prefix`,`string`,`—`,`Text shown before value`],[`suffix`,`string`,`—`,`Text shown after value`],[`size`,`"sm" | "md" | "lg"`,`"md"`,`Input size`],[`disabled`,`boolean`,`false`,`Disable the input`],[`label`,`string`,`—`,`Input label`]].map(([t,n,r,i])=>(0,o.jsxs)(`tr`,{style:{borderBottom:`1px solid ${e.border}`},children:[(0,o.jsx)(`td`,{style:{padding:`8px 12px`,fontFamily:`monospace`,color:e.primary},children:t}),(0,o.jsx)(`td`,{style:{padding:`8px 12px`,fontFamily:`monospace`,color:e.info},children:n}),(0,o.jsx)(`td`,{style:{padding:`8px 12px`,fontFamily:`monospace`,color:e.textMuted},children:r}),(0,o.jsx)(`td`,{style:{padding:`8px 12px`,color:e.text},children:i})]},t))})]})]})}export{s as NumberInputPage};