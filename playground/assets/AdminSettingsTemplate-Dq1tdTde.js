import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{Ct as r,Dt as i,Et as a,Ft as o,It as ee,Lt as s,Mt as c,Nt as l,Pt as u,Rt as te,Vt as d,Xt as f,Yt as p,Zt as m,en as h,kt as ne,vt as re,wt as g,zt as _}from"./tekivex-ui-C9wlHCjq.js";import{t as v}from"./index-BLCt_kC2.js";import{t as y}from"./DemoSection-DEixK5oF.js";var b=e(t(),1),x=n(),ie=[{value:`en`,label:`English`},{value:`es`,label:`Spanish`},{value:`fr`,label:`French`},{value:`de`,label:`German`},{value:`ja`,label:`Japanese`},{value:`zh`,label:`Chinese (Simplified)`},{value:`pt`,label:`Portuguese`},{value:`ko`,label:`Korean`}],ae=[{name:`Blue`,value:`#3b82f6`},{name:`Purple`,value:`#8b5cf6`},{name:`Pink`,value:`#ec4899`},{name:`Red`,value:`#ef4444`},{name:`Orange`,value:`#f97316`},{name:`Green`,value:`#22c55e`},{name:`Teal`,value:`#14b8a6`},{name:`Indigo`,value:`#6366f1`}],S=[{device:`Chrome on Windows`,location:`San Francisco, CA`,lastActive:`Active now`,current:!0},{device:`Safari on iPhone 15`,location:`San Francisco, CA`,lastActive:`2 hours ago`,current:!1},{device:`Firefox on MacBook Pro`,location:`New York, NY`,lastActive:`3 days ago`,current:!1},{device:`Chrome on Linux`,location:`Austin, TX`,lastActive:`1 week ago`,current:!1}];function C({theme:e}){let t=v(),[n,C]=(0,b.useState)(`Alex Morrison`),[w,T]=(0,b.useState)(`alex.morrison@tekivex.io`),[E,D]=(0,b.useState)(`amorrison`),[O,k]=(0,b.useState)(`+1 (415) 555-0192`),[A,j]=(0,b.useState)(`Senior Platform Engineer with 8+ years of experience building distributed systems. Passionate about developer tooling and observability.`),[M,N]=(0,b.useState)(!0),[P,F]=(0,b.useState)(!0),[I,L]=(0,b.useState)(!1),[R,z]=(0,b.useState)(!0),[B,V]=(0,b.useState)(!1),[H,U]=(0,b.useState)(!0),[W,oe]=(0,b.useState)(``),[G,K]=(0,b.useState)(``),[q,se]=(0,b.useState)(``),[J,ce]=(0,b.useState)(!0),[le,Y]=(0,b.useState)(!1),[ue,de]=(0,b.useState)(`system`),[X,fe]=(0,b.useState)(16),[pe,me]=(0,b.useState)(`en`),[Z,Q]=(0,b.useState)(`#3b82f6`),[he,ge]=(0,b.useState)(0),$={page:{maxWidth:960,margin:`0 auto`,padding:t.isMobile?`20px 12px 48px`:`32px 24px 64px`},header:{marginBottom:t.isMobile?20:32},breadcrumb:{display:`flex`,alignItems:`center`,gap:6,fontSize:13,color:e.textMuted,marginBottom:8},breadcrumbSep:{color:e.border},title:{fontSize:t.isMobile?24:32,fontWeight:700,color:e.text,margin:0,letterSpacing:`-0.02em`},subtitle:{fontSize:14,color:e.textMuted,marginTop:4},formGrid:{display:`grid`,gridTemplateColumns:t.isMobile?`1fr`:`1fr 1fr`,gap:16},fullWidth:{gridColumn:t.isMobile?void 0:`1 / -1`},sectionLabel:{fontSize:15,fontWeight:600,color:e.text,margin:`0 0 4px 0`},sectionSub:{fontSize:12,color:e.textMuted,margin:0},toggleRow:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:t.isMobile?`14px 12px`:`16px 20px`,background:e.surface,border:`1px solid ${e.border}`,borderRadius:10},toggleLabel:{fontSize:14,fontWeight:600,color:e.text},toggleDesc:{fontSize:12,color:e.textMuted,marginTop:2},sessionRow:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`14px 0`},sessionDevice:{fontSize:14,fontWeight:600,color:e.text},sessionMeta:{fontSize:12,color:e.textMuted,marginTop:2},colorCircle:{width:32,height:32,borderRadius:`50%`,cursor:`pointer`,transition:`transform 0.15s, box-shadow 0.15s`,border:`2px solid transparent`,flexShrink:0},colorCircleActive:{transform:`scale(1.15)`,boxShadow:`0 0 0 3px `+e.primary+`40`},buttonRow:{display:`flex`,gap:12,justifyContent:`flex-end`,paddingTop:8},dangerZone:{border:`1px solid ${e.danger??`#ef4444`}40`,borderRadius:12,padding:t.isMobile?16:24,background:(e.danger??`#ef4444`)+`08`},dangerTitle:{fontSize:16,fontWeight:700,color:e.danger??`#ef4444`,margin:`0 0 4px`},dangerDesc:{fontSize:13,color:e.textMuted,margin:`0 0 16px`},demoArea:{marginTop:48},demoHeading:{fontSize:t.isMobile?20:24,fontWeight:700,color:e.text,marginBottom:8},demoSub:{fontSize:14,color:e.textMuted,marginBottom:24}},_e=[{label:`Email Notifications`,desc:`Receive emails for important updates and activity`,checked:M,onChange:N},{label:`Push Notifications`,desc:`Get push alerts on your browser and mobile devices`,checked:P,onChange:F},{label:`SMS Alerts`,desc:`Receive text messages for critical events`,checked:I,onChange:L},{label:`Weekly Digest`,desc:`Summary of activity delivered every Monday`,checked:R,onChange:z},{label:`Marketing Emails`,desc:`Product updates, tips, and promotional content`,checked:B,onChange:V},{label:`Security Alerts`,desc:`Notifications for login attempts and password changes`,checked:H,onChange:U}];return(0,x.jsxs)(`div`,{style:$.page,children:[(0,x.jsxs)(`div`,{style:$.header,children:[(0,x.jsxs)(`div`,{style:$.breadcrumb,children:[(0,x.jsx)(`span`,{children:`Admin`}),(0,x.jsx)(`span`,{style:$.breadcrumbSep,children:`/`}),(0,x.jsx)(`span`,{children:`Account`}),(0,x.jsx)(`span`,{style:$.breadcrumbSep,children:`/`}),(0,x.jsx)(`span`,{style:{color:e.text,fontWeight:500},children:`Settings`})]}),(0,x.jsx)(`h1`,{style:$.title,children:`Settings`}),(0,x.jsx)(`p`,{style:$.subtitle,children:`Manage your account preferences, security, and appearance`})]}),(0,x.jsx)(f,{style:{marginBottom:24},children:(0,x.jsx)(m,{children:(0,x.jsxs)(ee,{activeIndex:he,onChange:ge,children:[(0,x.jsxs)(l,{children:[(0,x.jsx)(c,{children:`Profile`}),(0,x.jsx)(c,{children:`Notifications`}),(0,x.jsx)(c,{children:`Security`}),(0,x.jsx)(c,{children:`Appearance`})]}),(0,x.jsxs)(o,{children:[(0,x.jsx)(u,{children:(0,x.jsxs)(`div`,{style:{paddingTop:16},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:20,marginBottom:28},children:[(0,x.jsx)(ne,{size:`xl`,alt:`Alex Morrison`,initials:`AM`,style:{flexShrink:0}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:{fontSize:18,fontWeight:700,color:e.text},children:`Alex Morrison`}),(0,x.jsx)(`div`,{style:{fontSize:13,color:e.textMuted,marginTop:2},children:`Senior Platform Engineer`}),(0,x.jsx)(h,{variant:`outline`,size:`sm`,style:{marginTop:10},children:`Change Avatar`})]})]}),(0,x.jsx)(i,{}),(0,x.jsxs)(`div`,{style:{...$.formGrid,marginTop:20},children:[(0,x.jsx)(p,{label:`Full Name`,value:n,onChange:e=>C(e.target.value),placeholder:`Enter your full name`}),(0,x.jsx)(p,{label:`Email Address`,value:w,onChange:e=>T(e.target.value),type:`email`,placeholder:`you@example.com`}),(0,x.jsx)(p,{label:`Username`,value:E,onChange:e=>D(e.target.value),placeholder:`username`}),(0,x.jsx)(p,{label:`Phone Number`,value:O,onChange:e=>k(e.target.value),placeholder:`+1 (555) 000-0000`})]}),(0,x.jsx)(`div`,{style:{marginTop:16},children:(0,x.jsx)(p,{label:`Bio`,value:A,onChange:e=>j(e.target.value),placeholder:`Tell us about yourself...`})}),(0,x.jsxs)(`div`,{style:$.buttonRow,children:[(0,x.jsx)(h,{variant:`outline`,size:`sm`,children:`Cancel`}),(0,x.jsx)(h,{variant:`primary`,size:`sm`,children:`Save Changes`})]})]})}),(0,x.jsx)(u,{children:(0,x.jsxs)(`div`,{style:{paddingTop:16,display:`flex`,flexDirection:`column`,gap:12},children:[(0,x.jsx)(te,{variant:`info`,title:`Notification Preferences`,children:`These settings control how and when you receive notifications. Security alerts cannot be fully disabled for admin accounts.`}),_e.map((e,t)=>(0,x.jsxs)(`div`,{style:$.toggleRow,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:$.toggleLabel,children:e.label}),(0,x.jsx)(`div`,{style:$.toggleDesc,children:e.desc})]}),(0,x.jsx)(_,{checked:e.checked,onChange:e.onChange})]},t)),(0,x.jsx)(`div`,{style:$.buttonRow,children:(0,x.jsx)(h,{variant:`primary`,size:`sm`,children:`Save Preferences`})})]})}),(0,x.jsx)(u,{children:(0,x.jsxs)(`div`,{style:{paddingTop:16},children:[(0,x.jsxs)(`div`,{style:{marginBottom:28},children:[(0,x.jsx)(`p`,{style:$.sectionLabel,children:`Change Password`}),(0,x.jsx)(`p`,{style:$.sectionSub,children:`Ensure your new password is at least 12 characters with mixed case, numbers, and symbols`}),(0,x.jsxs)(`div`,{style:{...$.formGrid,marginTop:16},children:[(0,x.jsx)(p,{label:`Current Password`,type:`password`,value:W,onChange:e=>oe(e.target.value),placeholder:`Enter current password`}),(0,x.jsx)(`div`,{}),(0,x.jsx)(p,{label:`New Password`,type:`password`,value:G,onChange:e=>K(e.target.value),placeholder:`Enter new password`}),(0,x.jsx)(p,{label:`Confirm New Password`,type:`password`,value:q,onChange:e=>se(e.target.value),placeholder:`Re-enter new password`,error:q&&q!==G?`Passwords do not match`:void 0})]}),(0,x.jsx)(`div`,{style:$.buttonRow,children:(0,x.jsx)(h,{variant:`primary`,size:`sm`,children:`Update Password`})})]}),(0,x.jsx)(i,{}),(0,x.jsx)(`div`,{style:{margin:`24px 0`},children:(0,x.jsxs)(`div`,{style:$.toggleRow,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:$.toggleLabel,children:`Two-Factor Authentication`}),(0,x.jsx)(`div`,{style:$.toggleDesc,children:`Add an extra layer of security to your account with TOTP or hardware keys`})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[J&&(0,x.jsx)(d,{variant:`success`,children:`Enabled`}),(0,x.jsx)(_,{checked:J,onChange:ce})]})]})}),(0,x.jsx)(i,{}),(0,x.jsxs)(`div`,{style:{margin:`24px 0`},children:[(0,x.jsx)(`p`,{style:$.sectionLabel,children:`Active Sessions`}),(0,x.jsx)(`p`,{style:{...$.sectionSub,marginBottom:12},children:`Manage devices where your account is currently signed in`}),S.map((e,t)=>(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{style:$.sessionRow,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{style:$.sessionDevice,children:[e.device,e.current&&(0,x.jsx)(d,{variant:`primary`,style:{marginLeft:8,fontSize:10},children:`This device`})]}),(0,x.jsxs)(`div`,{style:$.sessionMeta,children:[e.location,` · `,e.lastActive]})]}),!e.current&&(0,x.jsx)(h,{variant:`outline`,size:`sm`,children:`Revoke`})]}),t<S.length-1&&(0,x.jsx)(i,{})]},t))]}),(0,x.jsx)(i,{}),(0,x.jsx)(`div`,{style:{marginTop:24},children:(0,x.jsxs)(`div`,{style:$.dangerZone,children:[(0,x.jsx)(`p`,{style:$.dangerTitle,children:`Danger Zone`}),(0,x.jsx)(`p`,{style:$.dangerDesc,children:`Permanently delete your account and all associated data. This action is irreversible and cannot be undone.`}),(0,x.jsx)(h,{variant:`danger`,size:`sm`,onClick:()=>Y(!0),children:`Delete Account`})]})}),(0,x.jsx)(s,{isOpen:le,onClose:()=>Y(!1),children:(0,x.jsxs)(`div`,{style:{padding:24},children:[(0,x.jsx)(`h3`,{style:{margin:`0 0 8px`,fontSize:18,fontWeight:700,color:e.danger??`#ef4444`},children:`Confirm Account Deletion`}),(0,x.jsx)(`p`,{style:{fontSize:14,color:e.textMuted,marginBottom:20},children:`This will permanently delete your account, including all projects, data, and settings. You will not be able to recover your account.`}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:12,justifyContent:`flex-end`},children:[(0,x.jsx)(h,{variant:`outline`,size:`sm`,onClick:()=>Y(!1),children:`Cancel`}),(0,x.jsx)(h,{variant:`danger`,size:`sm`,onClick:()=>Y(!1),children:`Yes, Delete My Account`})]})]})})]})}),(0,x.jsx)(u,{children:(0,x.jsxs)(`div`,{style:{paddingTop:16},children:[(0,x.jsxs)(`div`,{style:{marginBottom:28},children:[(0,x.jsx)(`p`,{style:$.sectionLabel,children:`Theme`}),(0,x.jsx)(`p`,{style:{...$.sectionSub,marginBottom:16},children:`Choose how the interface looks to you`}),(0,x.jsxs)(g,{label:`Theme Mode`,value:ue,onChange:de,children:[(0,x.jsx)(r,{value:`light`,children:`Light`}),(0,x.jsx)(r,{value:`dark`,children:`Dark`}),(0,x.jsx)(r,{value:`system`,children:`System`})]})]}),(0,x.jsx)(i,{}),(0,x.jsxs)(`div`,{style:{margin:`24px 0`},children:[(0,x.jsx)(`p`,{style:$.sectionLabel,children:`Font Size`}),(0,x.jsx)(`p`,{style:{...$.sectionSub,marginBottom:16},children:`Adjust the base font size across the application`}),(0,x.jsx)(re,{label:`${X}px`,value:X,onChange:e=>fe(e),min:12,max:24,showValue:!0})]}),(0,x.jsx)(i,{}),(0,x.jsxs)(`div`,{style:{margin:`24px 0`,maxWidth:t.isMobile?`100%`:360},children:[(0,x.jsx)(`p`,{style:$.sectionLabel,children:`Language`}),(0,x.jsx)(`p`,{style:{...$.sectionSub,marginBottom:16},children:`Select your preferred display language`}),(0,x.jsx)(a,{label:`Display Language`,options:ie,value:pe,onChange:e=>me(e)})]}),(0,x.jsx)(i,{}),(0,x.jsxs)(`div`,{style:{margin:`24px 0`},children:[(0,x.jsx)(`p`,{style:$.sectionLabel,children:`Accent Color`}),(0,x.jsx)(`p`,{style:{...$.sectionSub,marginBottom:16},children:`Choose a primary accent color for buttons and interactive elements`}),(0,x.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:ae.map(e=>(0,x.jsx)(`div`,{title:e.name,onClick:()=>Q(e.value),style:{...$.colorCircle,background:e.value,borderColor:Z===e.value?e.value:`transparent`,...Z===e.value?$.colorCircleActive:{}}},e.value))})]}),(0,x.jsxs)(`div`,{style:$.buttonRow,children:[(0,x.jsx)(h,{variant:`outline`,size:`sm`,children:`Reset to Defaults`}),(0,x.jsx)(h,{variant:`primary`,size:`sm`,children:`Save Appearance`})]})]})})]})]})})}),(0,x.jsxs)(`div`,{style:$.demoArea,children:[(0,x.jsx)(`h2`,{style:$.demoHeading,children:`Build Your Own`}),(0,x.jsx)(`p`,{style:$.demoSub,children:`Copy these patterns to create settings interfaces in your own applications.`}),(0,x.jsx)(y,{title:`Settings Toggle Row`,description:`Create a settings option with label, description, and toggle. This pattern works well for boolean preferences like notification settings.`,code:`<div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 20px',
  border: '1px solid var(--border)',
  borderRadius: 10,
  background: 'var(--surface)',
}}>
  <div>
    <div style={{ fontWeight: 600, fontSize: 14 }}>Email Notifications</div>
    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
      Receive emails for important updates
    </div>
  </div>
  <TkxToggle checked={enabled} onChange={setEnabled} />
</div>`,theme:e,children:(0,x.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`16px 20px`,border:`1px solid ${e.border}`,borderRadius:10,background:e.surface},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:{fontWeight:600,fontSize:14,color:e.text},children:`Email Notifications`}),(0,x.jsx)(`div`,{style:{fontSize:12,color:e.textMuted,marginTop:2},children:`Receive emails for important updates`})]}),(0,x.jsx)(_,{checked:M,onChange:N})]})}),(0,x.jsx)(y,{title:`Form Group`,description:`Compose TkxInput and TkxSelect in a responsive grid to build settings forms. Use a 2-column layout on desktop that collapses to a single column on mobile.`,code:`<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: 16,
}}>
  <TkxInput
    label="Display Name"
    value={name}
    onChange={e => setName(e.target.value)}
    placeholder="Enter your name"
  />
  <TkxSelect
    label="Timezone"
    options={[
      { value: 'utc', label: 'UTC' },
      { value: 'est', label: 'Eastern (EST)' },
      { value: 'pst', label: 'Pacific (PST)' },
      { value: 'cet', label: 'Central European (CET)' },
    ]}
    value={timezone}
    onChange={setTimezone}
  />
  <TkxInput
    label="Email"
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    placeholder="you@example.com"
  />
  <TkxSelect
    label="Role"
    options={[
      { value: 'admin', label: 'Administrator' },
      { value: 'editor', label: 'Editor' },
      { value: 'viewer', label: 'Viewer' },
    ]}
    value={role}
    onChange={setRole}
  />
</div>`,theme:e,children:(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:t.isMobile?`1fr`:`1fr 1fr`,gap:16},children:[(0,x.jsx)(p,{label:`Display Name`,value:n,onChange:e=>C(e.target.value),placeholder:`Enter your name`}),(0,x.jsx)(a,{label:`Timezone`,options:[{value:`utc`,label:`UTC`},{value:`est`,label:`Eastern (EST)`},{value:`pst`,label:`Pacific (PST)`},{value:`cet`,label:`Central European (CET)`}],value:`utc`,onChange:()=>{}}),(0,x.jsx)(p,{label:`Email`,type:`email`,value:w,onChange:e=>T(e.target.value),placeholder:`you@example.com`}),(0,x.jsx)(a,{label:`Role`,options:[{value:`admin`,label:`Administrator`},{value:`editor`,label:`Editor`},{value:`viewer`,label:`Viewer`}],value:`admin`,onChange:()=>{}})]})}),(0,x.jsx)(y,{title:`Danger Zone`,description:`Use a visually distinct danger area with confirmation modal for destructive actions. The red-tinted border and background signal irreversibility to the user.`,code:`const [open, setOpen] = useState(false);

<TkxCard>
  <TkxCardBody>
    <div style={{
      border: '1px solid rgba(239, 68, 68, 0.25)',
      borderRadius: 12,
      padding: 24,
      background: 'rgba(239, 68, 68, 0.03)',
    }}>
      <p style={{ fontSize: 16, fontWeight: 700, color: '#ef4444' }}>
        Danger Zone
      </p>
      <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
        This action is permanent and cannot be reversed.
      </p>
      <TkxButton variant="danger" size="sm" onClick={() => setOpen(true)}>
        Delete Account
      </TkxButton>
    </div>
  </TkxCardBody>
</TkxCard>

<TkxModal isOpen={open} onClose={() => setOpen(false)}>
  <div style={{ padding: 24 }}>
    <h3>Confirm Deletion</h3>
    <p>Are you sure? This cannot be undone.</p>
    <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
      <TkxButton variant="outline" onClick={() => setOpen(false)}>
        Cancel
      </TkxButton>
      <TkxButton variant="danger" onClick={() => setOpen(false)}>
        Confirm Delete
      </TkxButton>
    </div>
  </div>
</TkxModal>`,theme:e,children:(0,x.jsx)(f,{children:(0,x.jsx)(m,{children:(0,x.jsxs)(`div`,{style:{border:`1px solid ${e.danger??`#ef4444`}40`,borderRadius:12,padding:t.isMobile?16:24,background:(e.danger??`#ef4444`)+`08`},children:[(0,x.jsx)(`p`,{style:{fontSize:16,fontWeight:700,color:e.danger??`#ef4444`,margin:`0 0 4px`},children:`Danger Zone`}),(0,x.jsx)(`p`,{style:{fontSize:13,color:e.textMuted,margin:`0 0 16px`},children:`This action is permanent and cannot be reversed.`}),(0,x.jsx)(h,{variant:`danger`,size:`sm`,onClick:()=>Y(!0),children:`Delete Account`})]})})})})]})]})}export{C as AdminSettingsTemplate};