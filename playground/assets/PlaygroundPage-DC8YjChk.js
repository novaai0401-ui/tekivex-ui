import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{_n as r,t as i}from"./tekivex-ui-C9wlHCjq.js";import{t as a}from"./quantum-ai-8WbmyCF0.js";import{t as o}from"./DemoSection-DEixK5oF.js";import{t as s}from"./PropTable-Cy1Qr_aV.js";var c=e(t(),1),l=n(),u=[`fetch(`,`XMLHttpRequest`,`navigator.sendBeacon`,`document.cookie`,`localStorage`,`sessionStorage`,`indexedDB`,`WebSocket`,`EventSource`,`import(`,`eval(`,`new Function(`,`postMessage`,`window.open`,`location.href`,`location.replace`,`location.assign`,`document.write`,`crypto.subtle`];function d(e,t){let n=[...u,...t??[]],r=e.toLowerCase();for(let e of n)if(r.includes(e.toLowerCase()))return e;return null}var f=[{label:`Hello World`,code:`<div style={{ padding: 24, fontFamily: 'sans-serif', color: '#e8e8f4' }}>
  <h2 style={{ margin: 0 }}>👋 Hello, TkxPlayground!</h2>
  <p style={{ marginTop: 8, opacity: 0.7 }}>Edit the code on the left to see live updates.</p>
</div>`},{label:`Button Styles`,code:`<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', padding: 24 }}>
  {['primary', 'success', 'danger', 'warning', 'info'].map(color => (
    <button
      key={color}
      style={{
        padding: '8px 18px',
        borderRadius: 8,
        border: 'none',
        background: color === 'primary' ? '#00f5d4' : color === 'success' ? '#06d6a0' : color === 'danger' ? '#f72585' : color === 'warning' ? '#ffbe0b' : '#3a86ff',
        color: '#0a0a0f',
        fontWeight: 700,
        cursor: 'pointer',
        textTransform: 'capitalize',
      }}
    >
      {color}
    </button>
  ))}
</div>`},{label:`Card Grid`,code:`<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, padding: 24 }}>
  {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'].map(name => (
    <div key={name} style={{
      background: '#1a1a2e',
      borderRadius: 10,
      border: '1px solid #2a2a3e',
      padding: '16px',
    }}>
      <div style={{ fontWeight: 700, color: '#00f5d4', marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 12, color: '#8888aa' }}>Quantum module {name.toLowerCase()}</div>
    </div>
  ))}
</div>`},{label:`Animated Counter`,code:`(() => {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ padding: 32, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: 64, fontWeight: 900, color: '#00f5d4', marginBottom: 16 }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button onClick={() => setCount(c => c - 1)} style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid #2a2a3e', background: '#1a1a2e', color: '#e8e8f4', fontSize: 20, cursor: 'pointer' }}>−</button>
        <button onClick={() => setCount(0)} style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid #2a2a3e', background: '#1a1a2e', color: '#8888aa', cursor: 'pointer' }}>Reset</button>
        <button onClick={() => setCount(c => c + 1)} style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid #2a2a3e', background: '#1a1a2e', color: '#e8e8f4', fontSize: 20, cursor: 'pointer' }}>+</button>
      </div>
    </div>
  );
})()`},{label:`Data Table`,code:`(() => {
  const rows = [
    { id: 1, name: 'Hydrogen', symbol: 'H', mass: 1.008 },
    { id: 2, name: 'Helium',   symbol: 'He', mass: 4.003 },
    { id: 3, name: 'Lithium',  symbol: 'Li', mass: 6.941 },
    { id: 4, name: 'Carbon',   symbol: 'C',  mass: 12.011 },
    { id: 5, name: 'Nitrogen', symbol: 'N',  mass: 14.007 },
  ];
  const cell = { padding: '8px 14px', borderBottom: '1px solid #2a2a3e', color: '#e8e8f4', fontSize: 13 };
  const hcell = { ...cell, color: '#8888aa', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' };
  return (
    <div style={{ padding: 16 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'sans-serif' }}>
        <thead>
          <tr>{['ID','Element','Symbol','Atomic Mass'].map(h => <th key={h} style={hcell}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} style={{ transition: 'background 0.15s' }}>
              <td style={cell}>{r.id}</td>
              <td style={cell}>{r.name}</td>
              <td style={{ ...cell, color: '#00f5d4', fontWeight: 700 }}>{r.symbol}</td>
              <td style={cell}>{r.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
})()`}],p=class extends c.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){this.props.onError(e.message)}componentDidUpdate(e){e.children!==this.props.children&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}};function m(){return typeof window>`u`?null:window.Babel??null}function h(e,t,n){let r=performance.now();try{let i=e.trim();if(n?.strictMode!==!1){let e=d(i,n?.forbiddenTokens);if(e){let t=parseFloat((performance.now()-r).toFixed(2));return{element:null,error:`Blocked by playground strictMode: code contains "${e}". This token is disallowed because playground snippets run in the page's JavaScript context. If you trust the source, pass strictMode={false} to <TkxPlayground>.`,renderMs:t}}}let a=`
      function PlaygroundRoot() {
        ${i.startsWith(`<`)||i.startsWith(`(`)?`return (${i});`:i}
      }
    `,o=m();o&&(a=o.transform(a,{presets:[`react`],filename:`playground.jsx`}).code??a);let s=Function(`React`,`imports`,`
      "use strict";
      const { ${Object.keys(t).join(`, `)} } = imports;
      ${a}
      return PlaygroundRoot;
    `)(c.default,t);return{element:c.createElement(s),error:null,renderMs:parseFloat((performance.now()-r).toFixed(2))}}catch(e){let t=parseFloat((performance.now()-r).toFixed(2));return{element:null,error:e instanceof Error?e.message:String(e),renderMs:t}}}function g({code:e,lineHeight:t}){let n=e.split(`
`);return(0,l.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:0,left:0,width:`36px`,padding:`12px 0`,textAlign:`right`,paddingRight:`8px`,userSelect:`none`,pointerEvents:`none`,fontSize:`12px`,lineHeight:`${t}px`,color:`#555577`,fontFamily:`"Fira Code", "Cascadia Code", "Consolas", monospace`,boxSizing:`border-box`},children:n.map((e,t)=>(0,l.jsx)(`div`,{children:t+1},t))})}var _=`TkxButton.TkxInput.TkxCard.TkxModal.TkxTable.TkxSelect.TkxCheckbox.TkxRadio.TkxSwitch.TkxSlider.TkxBadge.TkxAlert.TkxToast.TkxTooltip.TkxPopover.TkxTabs.TkxAccordion.TkxDrawer.TkxDropdown.TkxMenu.TkxForm.TkxDataGrid.TkxChart.TkxSpinner.TkxSkeleton.TkxAvatar.TkxTag.TkxDivider.TkxProgress.TkxStatistic.TkxQuantumForm.TkxPlayground`.split(`.`),v=new a;function y(e){let t=e.match(/([A-Z][a-zA-Z0-9]*)$/);return t?t[1]:``}function b(e,t=4){if(!e||e.length<2)return[];let n=e.toLowerCase();return v.amplify(_,e=>{let t=e.toLowerCase();if(t.startsWith(n))return 1;if(t.includes(n))return .7;let r=0;for(let e=0;e<n.length-1;e++)t.includes(n.slice(e,e+2))&&(r+=.15);return Math.min(r,.5)},.1).slice(0,t).map(e=>({name:_[e.index]??``,amplitude:parseFloat(e.combined.toFixed(3))})).filter(e=>e.name!==``)}function x({defaultCode:e,examples:t,height:n=480,imports:i={},strictMode:a=!0,forbiddenTokens:o}){let s=r(),u=[...f,...t??[]],d=e??f[0].code,[m,_]=(0,c.useState)(d),[v,x]=(0,c.useState)({element:null,error:null,renderMs:0}),[S,C]=(0,c.useState)(null),[w,T]=(0,c.useState)([]),[E,D]=(0,c.useState)(!1),[O,k]=(0,c.useState)(0),A=(0,c.useRef)(null),j=(0,c.useRef)(null),M=(0,c.useCallback)(e=>{C(null),x(h(e,i,{strictMode:a,forbiddenTokens:o}))},[i,a,o]);(0,c.useEffect)(()=>(j.current&&clearTimeout(j.current),j.current=setTimeout(()=>M(m),300),()=>{j.current&&clearTimeout(j.current)}),[m,M]),(0,c.useEffect)(()=>{M(d)},[]);let N=(0,c.useCallback)(e=>{let t=e.target.value;_(t);let n=y(t);n.length>=2?T(b(n,4)):T([])},[]),P=(0,c.useCallback)(e=>{let t=u[e];t&&(k(e),_(t.code),T([]))},[u]),F=(0,c.useCallback)(async()=>{try{await navigator.clipboard.writeText(m),D(!0),setTimeout(()=>D(!1),1500)}catch{}},[m]),I=(0,c.useCallback)(()=>{_(d),k(0),T([])},[d]),L=(0,c.useCallback)(e=>{let t=y(m);t&&_(n=>n.slice(0,n.lastIndexOf(t))+e),T([])},[m]),R=v.error!==null||S!==null,z=v.error??S??``,B=s.css.bg,V=s.css.surfaceAlt,H=s.css.border,U=s.css.surface,W={width:`50%`,display:`flex`,flexDirection:`column`,borderRight:`1px solid ${H}`,position:`relative`},G={display:`flex`,alignItems:`center`,gap:`6px`,padding:`6px 10px`,borderBottom:`1px solid ${H}`,backgroundColor:s.css.surface,flexWrap:`wrap`},K={padding:`3px 10px`,borderRadius:`6px`,border:`1px solid ${H}`,backgroundColor:`transparent`,color:s.css.textMuted,fontSize:`11px`,fontWeight:600,cursor:`pointer`,fontFamily:`inherit`,transition:`color 0.15s, border-color 0.15s`};return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,border:`1px solid ${H}`,borderRadius:`12px`,overflow:`hidden`,backgroundColor:B,fontFamily:`inherit`,boxSizing:`border-box`,position:`relative`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`8px 14px`,borderBottom:`1px solid ${H}`,backgroundColor:s.css.surface},children:[(0,l.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:700,color:s.css.primary,letterSpacing:`0.05em`},children:`⚛ TkxPlayground`}),(0,l.jsx)(`span`,{style:{fontSize:`10px`,color:s.css.textMuted},children:`Live JSX Preview`})]}),(0,l.jsx)(`div`,{style:{display:`flex`,gap:`4px`,padding:`6px 10px`,borderBottom:`1px solid ${H}`,backgroundColor:s.css.surface,overflowX:`auto`},children:u.map((e,t)=>(0,l.jsx)(`button`,{onClick:()=>P(t),style:{padding:`3px 10px`,borderRadius:`6px`,border:`1px solid ${t===O?s.css.primary:H}`,backgroundColor:t===O?`${s.css.primary}20`:`transparent`,color:t===O?s.css.primary:s.css.textMuted,fontSize:`11px`,fontWeight:t===O?700:400,cursor:`pointer`,whiteSpace:`nowrap`,fontFamily:`inherit`,transition:`all 0.15s`},children:e.label},t))}),(0,l.jsxs)(`div`,{style:{display:`flex`,height:`${n}px`},children:[(0,l.jsxs)(`div`,{style:W,children:[(0,l.jsxs)(`div`,{style:G,children:[(0,l.jsx)(`span`,{style:{fontSize:`11px`,color:s.css.textMuted,marginRight:`auto`},children:`editor.tsx`}),(0,l.jsx)(`button`,{onClick:F,style:K,title:`Copy code`,children:E?`✓ Copied`:`⎘ Copy`}),(0,l.jsx)(`button`,{onClick:I,style:K,title:`Reset to default`,children:`↺ Reset`})]}),(0,l.jsxs)(`div`,{style:{position:`relative`,flex:1,overflow:`hidden`},children:[(0,l.jsx)(g,{code:m,lineHeight:18}),(0,l.jsx)(`textarea`,{ref:A,value:m,onChange:N,spellCheck:!1,autoCorrect:`off`,autoCapitalize:`off`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,padding:`12px 12px 12px 44px`,margin:0,border:`none`,outline:`none`,resize:`none`,backgroundColor:B,color:s.css.text,fontSize:`12px`,lineHeight:`18px`,fontFamily:`"Fira Code", "Cascadia Code", "Consolas", "Courier New", monospace`,boxSizing:`border-box`,overflowY:`auto`,tabSize:2}})]}),w.length>0&&(0,l.jsxs)(`div`,{style:{position:`absolute`,bottom:`40px`,left:`44px`,zIndex:10,backgroundColor:s.css.surface,border:`1px solid ${s.css.primary}44`,borderRadius:`8px`,overflow:`hidden`,boxShadow:`0 4px 16px rgba(0,0,0,0.3)`,minWidth:`180px`},children:[(0,l.jsx)(`div`,{style:{padding:`4px 10px 4px`,fontSize:`10px`,color:s.css.primary,fontWeight:700,borderBottom:`1px solid ${H}`,letterSpacing:`0.05em`},children:`⚛ Quantum Suggestions`}),w.map(e=>(0,l.jsxs)(`button`,{onClick:()=>L(e.name),style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,width:`100%`,padding:`6px 10px`,border:`none`,backgroundColor:`transparent`,color:s.css.text,fontSize:`12px`,fontFamily:`"Fira Code", monospace`,cursor:`pointer`,textAlign:`left`,gap:`12px`},children:[(0,l.jsx)(`span`,{children:e.name}),(0,l.jsxs)(`span`,{style:{fontSize:`10px`,color:s.css.textMuted,flexShrink:0},children:[Math.round(e.amplitude*100),`%`]})]},e.name))]})]}),(0,l.jsxs)(`div`,{style:{width:`50%`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(`div`,{style:{padding:`6px 10px`,borderBottom:`1px solid ${H}`,backgroundColor:s.css.surface,fontSize:`11px`,color:s.css.textMuted,fontWeight:600},children:`Preview`}),(0,l.jsx)(`div`,{style:{flex:1,overflow:`auto`,backgroundColor:V,position:`relative`},children:R?(0,l.jsxs)(`div`,{style:{padding:`16px`,color:s.css.danger,fontFamily:`"Fira Code", monospace`,fontSize:`12px`,lineHeight:1.6,whiteSpace:`pre-wrap`,wordBreak:`break-word`},children:[(0,l.jsxs)(`div`,{style:{marginBottom:`8px`,fontWeight:700,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,l.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,l.jsx)(`path`,{d:`M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z`})}),`Runtime Error`]}),z]}):(0,l.jsx)(p,{onError:C,children:(0,l.jsx)(`div`,{style:{minHeight:`100%`},children:v.element})})})]})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`,padding:`4px 12px`,backgroundColor:U,borderTop:`1px solid ${H}`,fontSize:`11px`,color:s.css.textMuted},children:[(0,l.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`4px`,color:R?s.css.danger:s.css.success,fontWeight:600},children:[(0,l.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,backgroundColor:R?s.css.danger:s.css.success,display:`inline-block`}}),R?`Error`:`OK`]}),(0,l.jsxs)(`span`,{children:[`⏱ `,v.renderMs,` ms`]}),(0,l.jsxs)(`span`,{children:[m.split(`
`).length,` lines`]}),(0,l.jsxs)(`span`,{children:[m.length,` chars`]}),w.length>0&&(0,l.jsxs)(`span`,{style:{marginLeft:`auto`,color:s.css.primary,fontWeight:600},children:[`⚛ `,w.length,` suggestion`,w.length>1?`s`:``]})]})]})}x.displayName=`TkxPlayground`;var S=[{name:`defaultCode`,type:`string`,description:`Initial JSX code shown in the editor when the playground first mounts. If omitted, the first example from the examples array is used (or the first built-in example).`},{name:`examples`,type:`PlaygroundExample[]`,description:`Array of preset examples shown in the example picker. Each object has a label string and a code string. Prepended before built-in examples in the dropdown.`},{name:`height`,type:`number`,default:`480`,description:`Total height of the playground panel in pixels, split between the code editor and the live preview pane.`},{name:`imports`,type:`Record<string, unknown>`,description:`Object whose keys become available as variables inside evaluated JSX. Pass the entire tekivex-ui namespace to make all components available without explicit imports.`}],C=[{name:`label`,type:`string`,required:!0,description:`Display name shown in the example picker dropdown.`},{name:`code`,type:`string`,required:!0,description:`The JSX code string that loads into the editor when this example is selected.`}],w=[{label:`Hello Button`,code:`<TkxButton variant="solid" colorScheme="primary" size="md">
  Hello Quantum!
</TkxButton>`},{label:`Card with Badge`,code:`<TkxCard style={{ maxWidth: 320, padding: '20px 24px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
    <strong style={{ fontSize: 15, margin: 0 }}>Quantum Report</strong>
    <TkxBadge color="#06d6a0">● Live</TkxBadge>
  </div>
  <p style={{ opacity: 0.7, margin: 0, fontSize: 13, lineHeight: '1.6' }}>
    Real-time quantum annealing results from the optimization engine.
  </p>
</TkxCard>`},{label:`Form`,code:`<TkxForm layout="vertical" onSubmit={(v) => alert(JSON.stringify(v))}>
  <TkxFormField name="email" rules={[{ required: true }]}>
    <TkxInput label="Email" type="email" placeholder="you@example.com" />
  </TkxFormField>
  <TkxFormField name="password" rules={[{ required: true, min: 8 }]}>
    <TkxInput label="Password" type="password" placeholder="••••••••" />
  </TkxFormField>
  <TkxButton type="submit" variant="solid" colorScheme="primary" style={{ marginTop: 8 }}>
    Sign In
  </TkxButton>
</TkxForm>`},{label:`Data Display`,code:`<div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 8 }}>
  <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
    <TkxStatistic title="Qubits" value={127} suffix=" qbits" />
    <TkxStatistic title="Fidelity" value={99.4} suffix="%" precision={1} />
    <TkxStatistic title="Gate Depth" value={42} />
  </div>
  <TkxProgress value={72} showValue />
  <TkxProgress value={91} showValue color="#06d6a0" />
</div>`},{label:`Alert Stack`,code:`<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
  <TkxAlert variant="info">Quantum engine initialized.</TkxAlert>
  <TkxAlert variant="success">Palette optimized — WCAG AAA passed on all pairs.</TkxAlert>
  <TkxAlert variant="warning">Annealing temperature above threshold.</TkxAlert>
  <TkxAlert variant="danger">Decoherence detected in qubit array.</TkxAlert>
</div>`},{label:`🤖 AI Confidence`,code:`<div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 16, maxWidth: 400 }}>
  <TkxAIConfidenceBar value={94} label="Field type inference" size="lg" />
  <TkxAIConfidenceBar value={67} label="Validation rules" />
  <TkxAIConfidenceBar value={28} label="Locale detection" size="sm" />
</div>`},{label:`🤖 AI Chat`,code:`(() => {
  const [msgs, setMsgs] = React.useState([
    { role: 'assistant', content: 'Hello! I can help you build forms with Quantum AI. What fields do you need?', confidence: 95 },
    { role: 'user', content: 'I need email, password and phone.' },
    { role: 'assistant', content: 'Perfect. Inferred: email → type=email + RFC regex, password → min 8 + strength meter, phone → E.164 international format. Adding entanglement: confirm_password auto-paired.', confidence: 88 },
  ]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 16, maxWidth: 520 }}>
      {msgs.map((m, i) => (
        <TkxAIChatBubble
          key={i}
          role={m.role}
          content={m.content}
          name={m.role === 'user' ? 'You' : 'Quantum AI'}
          confidence={m.role === 'assistant' ? m.confidence : undefined}
          copyable={m.role === 'assistant'}
        />
      ))}
    </div>
  );
})()`},{label:`🤖 AI Thinking`,code:`(() => {
  const [active, setActive] = React.useState(true);
  const steps = [
    'Analysing field names…',
    'Running Boltzmann inference…',
    'Applying Amplitude Amplification…',
    'Resolving entangled fields…',
    'Generating validation rules…',
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {['dots', 'pulse', 'wave', 'orbit'].map(v => (
          <div key={v} style={{ padding: '14px 18px', borderRadius: 10, border: '1px solid #2a2a3e', background: '#12121f' }}>
            <div style={{ fontSize: 10, color: '#8888aa', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{v}</div>
            <TkxAIThinking variant={v} active={active} />
          </div>
        ))}
      </div>
      <TkxAIThinking variant="orbit" size="lg" active={active} steps={steps} />
      <button
        onClick={() => setActive(a => !a)}
        style={{ padding: '8px 18px', borderRadius: 8, border: '1px solid #2a2a3e', background: '#1a1a2e', color: '#00f5d4', fontWeight: 700, cursor: 'pointer', alignSelf: 'flex-start' }}
      >
        {active ? 'Set active=false' : 'Set active=true'}
      </button>
    </div>
  );
})()`}];function T({theme:e}){let t={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`},n={borderRadius:`10px`,border:`1px solid ${e.info}30`,backgroundColor:`${e.info}08`,padding:`20px 24px`,marginBottom:`40px`},r={fontSize:`13px`,fontWeight:700,color:e.info,margin:`0 0 10px`},a={fontSize:`13.5px`,color:e.textMuted,lineHeight:`1.75`,margin:0};return(0,l.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,l.jsx)(`h1`,{style:{fontSize:`2.25rem`,fontWeight:800,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.03em`,lineHeight:1.15},children:`TkxPlayground`}),(0,l.jsxs)(`p`,{style:{fontSize:`15px`,color:e.textMuted,lineHeight:`1.75`,maxWidth:`660px`,margin:`0 0 8px`},children:[`An in-browser live component playground. Type JSX in the left pane and see it render instantly in the right pane — no build step, no server round-trip. Powered by`,` `,(0,l.jsx)(`code`,{style:{fontSize:`13px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`new Function()`}),` `,`evaluation, an error boundary, and quantum component suggestions via AmplitudeAmplifier.`]}),(0,l.jsxs)(`p`,{style:{fontSize:`13px`,color:e.textMuted,lineHeight:`1.6`,maxWidth:`660px`,margin:`0 0 48px`},children:[(0,l.jsx)(`strong`,{style:{color:e.text},children:`Pass any imports:`}),` Provide the`,` `,(0,l.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`imports`}),` `,`prop with`,` `,(0,l.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`* as TekivexComponents`}),` `,`and every component from`,` `,(0,l.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`tekivex-ui`}),` `,`becomes available in the sandbox by name.`]}),(0,l.jsxs)(`div`,{style:n,children:[(0,l.jsx)(`p`,{style:r,children:`🔍 Amplitude Amplification: O(√N) component suggestions`}),(0,l.jsx)(`p`,{style:a,children:`Component suggestions use Grover's algorithm — candidate components are treated as a search space. The oracle marks matching components as target states and amplitude amplification iteratively boosts their probability amplitude. After O(√N) iterations (instead of the classical O(N) linear scan), the highest-probability component rises to the top of the suggestion list. As you type, the quantum search re-runs in real time, ranking components by semantic distance from your partial input.`})]}),(0,l.jsx)(o,{title:`Full Playground — All Tekivex Components`,description:`The complete playground with all tekivex-ui components available in the sandbox. Select from 5 built-in examples or write your own JSX. Render-time metrics appear in the status bar.`,theme:e,code:`import * as TekivexComponents from 'tekivex-ui';

<TkxPlayground
  imports={TekivexComponents}
  examples={[
    {
      label: 'Hello Button',
      code: '<TkxButton variant="solid" colorScheme="primary">Hello Quantum!</TkxButton>',
    },
    {
      label: 'Card with Badge',
      code: \`<TkxCard style={{ maxWidth: 320, padding: '20px 24px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
    <strong style={{ fontSize: 15, margin: 0 }}>Quantum Report</strong>
    <TkxBadge color="#06d6a0">● Live</TkxBadge>
  </div>
  <p style={{ opacity: 0.7, margin: 0, fontSize: 13, lineHeight: '1.6' }}>
    Real-time quantum annealing results from the optimization engine.
  </p>
</TkxCard>\`,
    },
    {
      label: 'Form',
      code: \`<TkxForm layout="vertical" onSubmit={(v) => alert(JSON.stringify(v))}>
  <TkxFormField name="email" rules={[{ required: true }]}>
    <TkxInput label="Email" type="email" placeholder="you@example.com" />
  </TkxFormField>
  <TkxFormField name="password" rules={[{ required: true, min: 8 }]}>
    <TkxInput label="Password" type="password" placeholder="••••••••" />
  </TkxFormField>
  <TkxButton type="submit" variant="solid" colorScheme="primary" style={{ marginTop: 8 }}>
    Sign In
  </TkxButton>
</TkxForm>\`,
    },
    {
      label: 'Data Display',
      code: \`<div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 8 }}>
  <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
    <TkxStatistic title="Qubits" value={127} suffix=" qbits" />
    <TkxStatistic title="Fidelity" value={99.4} suffix="%" precision={1} />
    <TkxStatistic title="Gate Depth" value={42} />
  </div>
  <TkxProgress value={72} showValue />
  <TkxProgress value={91} showValue color="#06d6a0" />
</div>\`,
    },
    {
      label: 'Alert Stack',
      code: \`<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
  <TkxAlert variant="info">Quantum engine initialized.</TkxAlert>
  <TkxAlert variant="success">Palette optimized — WCAG AAA passed on all pairs.</TkxAlert>
  <TkxAlert variant="warning">Annealing temperature above threshold.</TkxAlert>
  <TkxAlert variant="danger">Decoherence detected in qubit array.</TkxAlert>
</div>\`,
    },
  ]}
/>`,children:(0,l.jsx)(`div`,{style:{width:`100%`},children:(0,l.jsx)(x,{imports:i,examples:w})})}),(0,l.jsx)(o,{title:`Small Embedded Playground — height=300`,description:`A compact playground suitable for embedding in documentation inline. height=300 gives a tighter split. Useful for single-component demos.`,theme:e,code:`<TkxPlayground
  height={300}
  imports={TekivexComponents}
  defaultCode={\`<TkxButton
  variant="solid"
  colorScheme="primary"
  size="lg"
>
  Hello Quantum!
</TkxButton>\`}
/>`,children:(0,l.jsx)(`div`,{style:{width:`100%`},children:(0,l.jsx)(x,{height:300,imports:i,defaultCode:`<TkxButton
  variant="solid"
  colorScheme="primary"
  size="lg"
>
  Hello Quantum!
</TkxButton>`})})}),(0,l.jsx)(`hr`,{style:t}),(0,l.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:`TkxPlaygroundProps`}),(0,l.jsxs)(`p`,{style:{fontSize:`13.5px`,color:e.textMuted,margin:`0 0 20px`,lineHeight:`1.6`},children:[`All props accepted by`,` `,(0,l.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`TkxPlayground`}),`.`]}),(0,l.jsx)(`div`,{style:{marginBottom:`40px`},children:(0,l.jsx)(s,{props:S})}),(0,l.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:`PlaygroundExample`}),(0,l.jsxs)(`p`,{style:{fontSize:`13.5px`,color:e.textMuted,margin:`0 0 20px`,lineHeight:`1.6`},children:[`Shape of each object in the`,` `,(0,l.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`examples`}),` `,`array.`]}),(0,l.jsx)(`div`,{style:{marginBottom:`48px`},children:(0,l.jsx)(s,{props:C})}),(0,l.jsx)(`hr`,{style:t}),(0,l.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700,color:e.text,margin:`0 0 12px`,letterSpacing:`-0.02em`},children:`Sandbox Scope`}),(0,l.jsxs)(`p`,{style:{fontSize:`13.5px`,color:e.textMuted,margin:`0 0 12px`,lineHeight:`1.6`},children:[`When you pass`,` `,(0,l.jsxs)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:[`imports=`,`{TekivexComponents}`]}),` `,`all exported members of`,` `,(0,l.jsx)(`code`,{style:{fontSize:`12px`,backgroundColor:`${e.primary}14`,color:e.primary,padding:`1px 5px`,borderRadius:`4px`,border:`1px solid ${e.primary}20`},children:`tekivex-ui`}),` `,`become top-level variables inside the playground sandbox. You can use any component directly by name without an import statement:`]}),(0,l.jsx)(`div`,{style:{borderRadius:`8px`,border:`1px solid ${e.border}`,backgroundColor:`#0d1117`,overflow:`hidden`,marginBottom:`32px`},children:(0,l.jsx)(`pre`,{style:{margin:0,padding:`16px 20px`,fontSize:`12px`,fontFamily:`"JetBrains Mono", "Fira Code", "SF Mono", monospace`,color:`#e6edf3`,lineHeight:`1.7`,overflowX:`auto`,whiteSpace:`pre`},children:`// Available in sandbox scope automatically:
<TkxButton />          // buttons
<TkxBadge />           // badges
<TkxCard />            // cards
<TkxAlert />           // alerts
<TkxTypography />      // typography
<TkxStatistic />       // statistics
<TkxProgress />        // progress bars
<TkxQuantumForm />     // quantum form
<TkxThemeBuilder />    // theme builder
// ...and every other export from tekivex-ui`})})]})}export{T as PlaygroundPage};