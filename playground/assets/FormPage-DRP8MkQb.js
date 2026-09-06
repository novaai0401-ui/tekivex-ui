import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t}from"./vendor-charts-Ch9BG0YP.js";import{t as n}from"./vendor-react-CJ-iRaMF.js";import{F as r,I as i,P as a,Yt as o,en as s}from"./tekivex-ui-C9wlHCjq.js";import{t as c}from"./DemoSection-DEixK5oF.js";import{t as l}from"./PropTable-Cy1Qr_aV.js";var u=e(t(),1),d=n(),f=[{name:`onSubmit`,type:`(values: Record<string, any>) => void | Promise<void>`,default:`undefined`,description:`Called with all field values when the form is submitted and validation passes.`},{name:`onValuesChange`,type:`(changed: Record<string, any>, all: Record<string, any>) => void`,default:`undefined`,description:`Called whenever a field value changes, with the changed fields and all current values.`},{name:`initialValues`,type:`Record<string, any>`,default:`{}`,description:`Initial values for all fields, keyed by field name.`},{name:`layout`,type:`'vertical' | 'horizontal' | 'inline'`,default:`'vertical'`,description:`Controls label/field arrangement: vertical stacks them, horizontal places labels beside fields, inline renders everything in a row.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Disables all fields in the form.`},{name:`children`,type:`ReactNode`,description:`Form content, typically TkxFormField components.`,required:!0},{name:`className`,type:`string`,default:`undefined`,description:`Additional class name for the form element.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles for the form element.`}],p=[{name:`name`,type:`string`,description:`Field name used as the key in form values.`,required:!0},{name:`label`,type:`string`,default:`undefined`,description:`Label text displayed above or beside the field.`},{name:`rules`,type:`ValidationRule[]`,default:`[]`,description:`Array of validation rules applied to this field.`},{name:`help`,type:`string`,default:`undefined`,description:`Helper text displayed below the field.`},{name:`required`,type:`boolean`,default:`false`,description:`Marks the field as required (visual indicator, also add a required rule for validation).`},{name:`children`,type:`ReactElement`,description:`A single input element. The form injects value and onChange props.`,required:!0},{name:`className`,type:`string`,default:`undefined`,description:`Additional class name for the field wrapper.`},{name:`style`,type:`CSSProperties`,default:`undefined`,description:`Inline styles for the field wrapper.`}],m=[{name:`required`,type:`boolean`,default:`false`,description:`Field must have a non-empty value.`},{name:`min`,type:`number`,default:`undefined`,description:`Minimum string length or numeric value.`},{name:`max`,type:`number`,default:`undefined`,description:`Maximum string length or numeric value.`},{name:`pattern`,type:`RegExp`,default:`undefined`,description:`Regular expression the value must match.`},{name:`validator`,type:`(value: any) => string | null | Promise<string | null>`,default:`undefined`,description:`Custom sync or async validator. Return an error string or null.`},{name:`message`,type:`string`,default:`undefined`,description:`Custom error message used when the rule fails.`}],h=[{name:`getFieldValue`,type:`(name: string) => any`,description:`Get the current value of a single field.`},{name:`setFieldValue`,type:`(name: string, value: any) => void`,description:`Set the value of a single field.`},{name:`getFieldsValue`,type:`() => Record<string, any>`,description:`Get all current field values.`},{name:`setFieldsValue`,type:`(values: Record<string, any>) => void`,description:`Set multiple field values at once.`},{name:`validateFields`,type:`() => Promise<Record<string, any>>`,description:`Validate all fields and return values if valid.`},{name:`validateField`,type:`(name: string) => Promise<boolean>`,description:`Validate a single field. Returns true if valid.`},{name:`resetFields`,type:`() => void`,description:`Reset all fields to their initial values and clear errors.`},{name:`getFieldError`,type:`(name: string) => string | null`,description:`Get the current error message for a field.`},{name:`isFieldTouched`,type:`(name: string) => boolean`,description:`Check whether a field has been interacted with.`}];function g({theme:e}){let[t,n]=(0,u.useState)(null),[i,g]=(0,u.useState)([]),_={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`},y={marginTop:12,padding:`12px 16px`,borderRadius:8,backgroundColor:e.surfaceAlt,border:`1px solid ${e.border}`,fontSize:13,color:e.textMuted,fontFamily:`monospace`,whiteSpace:`pre-wrap`,maxHeight:160,overflow:`auto`};return(0,d.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,d.jsx)(c,{title:`Basic Form with Validation`,description:`A registration form with email (required, pattern) and password (required, min length) validation. Submit to see the result.`,theme:e,code:`<TkxForm
  initialValues={{ email: '', password: '', name: '' }}
  onSubmit={(values) => console.log('Submitted:', values)}
>
  <TkxFormField
    name="name"
    label="Full Name"
    rules={[{ required: true, message: 'Name is required' }]}
    required
  >
    <TkxInput label="Full Name" placeholder="Jane Doe" />
  </TkxFormField>

  <TkxFormField
    name="email"
    label="Email"
    rules={[
      { required: true, message: 'Email is required' },
      { pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/, message: 'Enter a valid email' },
    ]}
    required
  >
    <TkxInput label="Email" type="email" placeholder="jane@example.com" />
  </TkxFormField>

  <TkxFormField
    name="password"
    label="Password"
    rules={[
      { required: true, message: 'Password is required' },
      { min: 8, message: 'Must be at least 8 characters' },
    ]}
    required
  >
    <TkxInput type="password" placeholder="Min 8 characters" />
  </TkxFormField>

  <TkxButton type="submit">Register</TkxButton>
</TkxForm>`,children:(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(a,{initialValues:{email:``,password:``,name:``},onSubmit:e=>n(JSON.stringify(e,null,2)),children:[(0,d.jsx)(r,{name:`name`,label:`Full Name`,rules:[{required:!0,message:`Name is required`}],required:!0,children:(0,d.jsx)(o,{placeholder:`Jane Doe`})}),(0,d.jsx)(r,{name:`email`,label:`Email`,rules:[{required:!0,message:`Email is required`},{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:`Enter a valid email`}],required:!0,children:(0,d.jsx)(o,{type:`email`,placeholder:`jane@example.com`})}),(0,d.jsx)(r,{name:`password`,label:`Password`,rules:[{required:!0,message:`Password is required`},{min:8,message:`Must be at least 8 characters`}],required:!0,children:(0,d.jsx)(o,{type:`password`,placeholder:`Min 8 characters`})}),(0,d.jsx)(`div`,{style:{marginTop:16},children:(0,d.jsx)(s,{type:`submit`,children:`Register`})})]}),t&&(0,d.jsxs)(`div`,{style:y,children:[`Submitted values:`,`
`,t]})]})}),(0,d.jsx)(`hr`,{style:_}),(0,d.jsx)(c,{title:`Horizontal Layout`,description:`Labels are placed beside fields instead of above. Ideal for settings forms with short labels.`,theme:e,code:`<TkxForm layout="horizontal" onSubmit={handleSubmit}>
  <TkxFormField name="username" label="Username" required
    rules={[{ required: true, message: 'Required' }]}>
    <TkxInput placeholder="Enter username" />
  </TkxFormField>

  <TkxFormField name="bio" label="Bio" help="A short description about yourself">
    <TkxInput placeholder="Tell us about yourself" />
  </TkxFormField>

  <TkxButton type="submit">Save</TkxButton>
</TkxForm>`,children:(0,d.jsxs)(a,{layout:`horizontal`,initialValues:{username:``,bio:``},onSubmit:e=>n(JSON.stringify(e,null,2)),children:[(0,d.jsx)(r,{name:`username`,label:`Username`,rules:[{required:!0,message:`Username is required`}],required:!0,children:(0,d.jsx)(o,{placeholder:`Enter username`})}),(0,d.jsx)(r,{name:`bio`,label:`Bio`,help:`A short description about yourself`,children:(0,d.jsx)(o,{placeholder:`Tell us about yourself`})}),(0,d.jsx)(`div`,{style:{marginTop:16},children:(0,d.jsx)(s,{type:`submit`,children:`Save`})})]})}),(0,d.jsx)(`hr`,{style:_}),(0,d.jsx)(c,{title:`Inline Layout`,description:`All fields render in a single row. Useful for search bars or compact filter controls.`,theme:e,code:`<TkxForm layout="inline" onSubmit={handleSearch}>
  <TkxFormField name="query">
    <TkxInput placeholder="Search..." />
  </TkxFormField>

  <TkxFormField name="category">
    <TkxInput placeholder="Category" />
  </TkxFormField>

  <TkxButton type="submit">Search</TkxButton>
</TkxForm>`,children:(0,d.jsxs)(a,{layout:`inline`,initialValues:{query:``,category:``},onSubmit:e=>n(JSON.stringify(e,null,2)),children:[(0,d.jsx)(r,{name:`query`,children:(0,d.jsx)(o,{placeholder:`Search...`})}),(0,d.jsx)(r,{name:`category`,children:(0,d.jsx)(o,{placeholder:`Category`})}),(0,d.jsx)(s,{type:`submit`,children:`Search`})]})}),(0,d.jsx)(`hr`,{style:_}),(0,d.jsx)(c,{title:`Custom Validator`,description:`Use a custom validator function for complex validation logic. Supports both sync and async validators.`,theme:e,code:`<TkxForm onSubmit={handleSubmit}>
  <TkxFormField
    name="code"
    label="Invite Code"
    rules={[
      { required: true, message: 'Code is required' },
      {
        validator: (value) => {
          if (value && value.length !== 6)
            return 'Code must be exactly 6 characters';
          if (value && !/^[A-Z0-9]+$/.test(value))
            return 'Only uppercase letters and digits';
          return null;
        },
      },
    ]}
    required
  >
    <TkxInput placeholder="ABC123" />
  </TkxFormField>

  <TkxButton type="submit">Verify</TkxButton>
</TkxForm>`,children:(0,d.jsxs)(a,{initialValues:{code:``},onSubmit:e=>n(JSON.stringify(e,null,2)),children:[(0,d.jsx)(r,{name:`code`,label:`Invite Code`,rules:[{required:!0,message:`Code is required`},{validator:e=>e&&e.length!==6?`Code must be exactly 6 characters`:e&&!/^[A-Z0-9]+$/.test(e)?`Only uppercase letters and digits`:null}],required:!0,children:(0,d.jsx)(o,{placeholder:`ABC123`})}),(0,d.jsx)(`div`,{style:{marginTop:16},children:(0,d.jsx)(s,{type:`submit`,children:`Verify`})})]})}),(0,d.jsx)(`hr`,{style:_}),(0,d.jsx)(c,{title:`Programmatic Access (useTkxForm)`,description:`Use the useTkxForm hook to get a FormInstance for reading, setting, validating, and resetting fields programmatically.`,theme:e,code:`function MyForm() {
  const form = useTkxForm();

  return (
    <TkxForm
      initialValues={{ firstName: '', lastName: '' }}
      onSubmit={(vals) => console.log(vals)}
    >
      <TkxFormField name="firstName" label="First Name" required
        rules={[{ required: true, message: 'Required' }]}>
        <TkxInput placeholder="First" />
      </TkxFormField>

      <TkxFormField name="lastName" label="Last Name">
        <TkxInput placeholder="Last" />
      </TkxFormField>

      <TkxButton onClick={() => {
        const vals = form.getFieldsValue();
        console.log('Current values:', vals);
      }}>
        Read Values
      </TkxButton>

      <TkxButton onClick={() => {
        form.setFieldsValue({ firstName: 'John', lastName: 'Doe' });
      }}>
        Set Values
      </TkxButton>

      <TkxButton onClick={() => form.resetFields()}>
        Reset
      </TkxButton>

      <TkxButton type="submit">Submit</TkxButton>
    </TkxForm>
  );
}`,children:(0,d.jsx)(v,{theme:e,log:i,onLog:e=>g(t=>[...t,e]),onClear:()=>g([])})}),(0,d.jsx)(`hr`,{style:_}),(0,d.jsx)(c,{title:`Disabled Form`,description:`Set disabled on the form to disable all child fields at once.`,theme:e,code:`<TkxForm disabled initialValues={{ email: 'locked@example.com' }}>
  <TkxFormField name="email" label="Email">
    <TkxInput />
  </TkxFormField>

  <TkxButton type="submit" disabled>Submit</TkxButton>
</TkxForm>`,children:(0,d.jsxs)(a,{disabled:!0,initialValues:{email:`locked@example.com`},children:[(0,d.jsx)(r,{name:`email`,label:`Email`,children:(0,d.jsx)(o,{})}),(0,d.jsx)(`div`,{style:{marginTop:16},children:(0,d.jsx)(s,{type:`submit`,disabled:!0,children:`Submit`})})]})}),(0,d.jsx)(`hr`,{style:_}),(0,d.jsxs)(`div`,{style:{marginTop:48},children:[(0,d.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxForm Props`}),(0,d.jsx)(l,{props:f})]}),(0,d.jsxs)(`div`,{style:{marginTop:40},children:[(0,d.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxFormField Props`}),(0,d.jsx)(l,{props:p})]}),(0,d.jsxs)(`div`,{style:{marginTop:40},children:[(0,d.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`ValidationRule Props`}),(0,d.jsx)(l,{props:m})]}),(0,d.jsxs)(`div`,{style:{marginTop:40},children:[(0,d.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`FormInstance Methods (useTkxForm)`}),(0,d.jsx)(l,{props:h})]})]})}function _({onLog:e}){let t=i();return(0,d.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:16,flexWrap:`wrap`},children:[(0,d.jsx)(s,{variant:`outline`,onClick:()=>{let n=t.getFieldsValue();e(`getFieldsValue: ${JSON.stringify(n)}`)},children:`Read Values`}),(0,d.jsx)(s,{variant:`outline`,onClick:()=>{t.setFieldsValue({firstName:`John`,lastName:`Doe`}),e(`setFieldsValue({ firstName: "John", lastName: "Doe" })`)},children:`Set Values`}),(0,d.jsx)(s,{variant:`outline`,onClick:()=>{t.resetFields(),e(`resetFields()`)},children:`Reset`}),(0,d.jsx)(s,{variant:`outline`,onClick:async()=>{try{let n=await t.validateFields();e(`validateFields passed: ${JSON.stringify(n)}`)}catch{e(`validateFields failed — check field errors`)}},children:`Validate`}),(0,d.jsx)(s,{type:`submit`,children:`Submit`})]})}function v({theme:e,log:t,onLog:n,onClear:i}){let c={marginTop:12,padding:`12px 16px`,borderRadius:8,backgroundColor:e.surfaceAlt,border:`1px solid ${e.border}`,fontSize:13,color:e.textMuted,fontFamily:`monospace`,whiteSpace:`pre-wrap`,maxHeight:160,overflow:`auto`};return(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(a,{initialValues:{firstName:``,lastName:``},onSubmit:e=>n(`Submitted: ${JSON.stringify(e)}`),children:[(0,d.jsx)(r,{name:`firstName`,label:`First Name`,rules:[{required:!0,message:`First name is required`}],required:!0,children:(0,d.jsx)(o,{label:`First Name`,placeholder:`First`})}),(0,d.jsx)(r,{name:`lastName`,label:`Last Name`,children:(0,d.jsx)(o,{label:`Last Name`,placeholder:`Last`})}),(0,d.jsx)(_,{onLog:n})]}),t.length>0&&(0,d.jsxs)(`div`,{style:c,children:[t.map((e,t)=>(0,d.jsx)(`div`,{children:e},t)),(0,d.jsx)(`div`,{style:{marginTop:8},children:(0,d.jsx)(s,{size:`sm`,variant:`ghost`,onClick:i,children:`Clear log`})})]})]})}export{g as FormPage};