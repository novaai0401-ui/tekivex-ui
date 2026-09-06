import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{_ as r}from"./tekivex-ui-C9wlHCjq.js";import{t as i}from"./DemoSection-DEixK5oF.js";import{t as a}from"./PropTable-Cy1Qr_aV.js";var o=e(t(),1),s=n(),c=[{name:`options`,type:`MentionOption[]`,default:`—`,description:`List of mentionable users/items. Each has value, label, and optional avatar URL.`,required:!0},{name:`value`,type:`string`,default:`''`,description:`Controlled text content of the textarea.`},{name:`onChange`,type:`(value: string) => void`,default:`undefined`,description:`Called on every keystroke with the full text content.`},{name:`trigger`,type:`string`,default:`'@'`,description:`Character that triggers the mention dropdown.`},{name:`placeholder`,type:`string`,default:`undefined`,description:`Placeholder text shown when the textarea is empty.`},{name:`label`,type:`string`,default:`undefined`,description:`Accessible label rendered above the textarea.`}],l=[{value:`alice`,label:`Alice Johnson`},{value:`bob`,label:`Bob Martinez`},{value:`carol`,label:`Carol Kim`},{value:`dave`,label:`Dave Chen`},{value:`emma`,label:`Emma Wilson`},{value:`frank`,label:`Frank O'Brien`},{value:`grace`,label:`Grace Patel`}],u=[{value:`bug`,label:`#bug`},{value:`feature`,label:`#feature`},{value:`docs`,label:`#docs`},{value:`design`,label:`#design`},{value:`urgent`,label:`#urgent`},{value:`review`,label:`#review`}];function d({theme:e}){let[t,n]=(0,o.useState)(``),[d,f]=(0,o.useState)(``),[p,m]=(0,o.useState)(`Hey @alice, can you look at `),h={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`},g={marginTop:12,padding:`10px 14px`,borderRadius:8,backgroundColor:e.surfaceAlt,border:`1px solid ${e.border}`,fontSize:13,color:e.textMuted,fontFamily:`monospace`,minHeight:40,whiteSpace:`pre-wrap`};return(0,s.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,s.jsx)(i,{title:`Basic Mentions`,description:`Type @ to trigger the mention dropdown. Use arrow keys to navigate, Enter or click to select. Keyboard-fully accessible.`,theme:e,code:`<TkxMentions
  label="Comment"
  placeholder="Type @ to mention a team member..."
  options={[
    { value: 'alice', label: 'Alice Johnson' },
    { value: 'bob', label: 'Bob Martinez' },
    { value: 'carol', label: 'Carol Kim' },
  ]}
  value={value}
  onChange={setValue}
/>`,children:(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{label:`Comment`,placeholder:`Type @ to mention a team member...`,options:l,value:t,onChange:n}),t&&(0,s.jsx)(`div`,{style:g,children:t})]})}),(0,s.jsx)(`hr`,{style:h}),(0,s.jsx)(i,{title:`Custom Trigger Character`,description:`Use any character as the trigger. Here # triggers label suggestions — great for tagging issues, tickets, or topics.`,theme:e,code:`<TkxMentions
  label="Add Labels"
  trigger="#"
  placeholder="Type # to add a label..."
  options={[
    { value: 'bug', label: '#bug' },
    { value: 'feature', label: '#feature' },
    { value: 'docs', label: '#docs' },
  ]}
  value={value}
  onChange={setValue}
/>`,children:(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{label:`Add Labels`,trigger:`#`,placeholder:`Type # to add a label tag...`,options:u,value:d,onChange:f}),d&&(0,s.jsx)(`div`,{style:g,children:d})]})}),(0,s.jsx)(`hr`,{style:h}),(0,s.jsx)(i,{title:`Pre-filled Value`,description:`Controlled mode with an initial value. Continue typing @ to mention more team members.`,theme:e,code:`const [value, setValue] = useState('Hey @alice, can you look at ');

<TkxMentions
  label="Message"
  options={teamMembers}
  value={value}
  onChange={setValue}
  placeholder="Continue the message..."
/>`,children:(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{label:`Message`,options:l,value:p,onChange:m,placeholder:`Continue the message...`}),p&&(0,s.jsx)(`div`,{style:g,children:p})]})}),(0,s.jsx)(`hr`,{style:h}),(0,s.jsxs)(`div`,{style:{padding:`32px`,borderRadius:12,border:`1px solid ${e.border}`,backgroundColor:e.surfaceAlt},children:[(0,s.jsx)(`h3`,{style:{margin:`0 0 16px`,fontSize:15,fontWeight:700,color:e.text},children:`💡 Common Use Cases`}),(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:12},children:[{icon:`💬`,title:`Team Chat`,desc:`Mention colleagues in messages and comments`},{icon:`🎟️`,title:`Issue Trackers`,desc:`Tag assignees and label tickets with #hashtags`},{icon:`📝`,title:`Rich Text Editors`,desc:`Embed user references in documents`},{icon:`📧`,title:`Email Composers`,desc:`Quickly fill To/CC fields from a contact list`}].map(({icon:t,title:n,desc:r})=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,s.jsx)(`span`,{style:{fontSize:20},children:t}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:0,fontWeight:600,fontSize:13,color:e.text},children:n}),(0,s.jsx)(`p`,{style:{margin:0,fontSize:12,color:e.textMuted},children:r})]})]},n))})]}),(0,s.jsx)(`hr`,{style:h}),(0,s.jsxs)(`div`,{style:{marginTop:48},children:[(0,s.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxMentions Props`}),(0,s.jsx)(a,{props:c})]})]})}export{d as MentionsPage};