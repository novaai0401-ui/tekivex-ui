import{t as e}from"./vendor-react-CJ-iRaMF.js";import{en as t,h as n}from"./tekivex-ui-C9wlHCjq.js";import{t as r}from"./DemoSection-DEixK5oF.js";import{t as i}from"./PropTable-Cy1Qr_aV.js";var a=e(),o=[{name:`status`,type:`'success' | 'error' | 'warning' | 'info' | '404' | '403' | '500'`,default:`—`,description:`Determines the icon, color, and semantic meaning of the result state.`,required:!0},{name:`title`,type:`string`,default:`—`,description:`Primary heading text shown below the icon.`,required:!0},{name:`subTitle`,type:`string`,default:`undefined`,description:`Secondary descriptive text shown below the title.`},{name:`icon`,type:`ReactNode`,default:`undefined`,description:`Override the default status icon with a custom node.`},{name:`extra`,type:`ReactNode`,default:`undefined`,description:`Action area rendered below the subtitle — typically buttons.`}];function s({theme:e}){let s={height:`1px`,backgroundColor:e.border,margin:`48px 0`,border:`none`};return(0,a.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`,padding:`48px 32px 80px`},children:[(0,a.jsx)(r,{title:`Success`,description:`Use after a user completes a task — payment, form submission, account activation, etc.`,theme:e,code:`<TkxResult
  status="success"
  title="Payment Successful"
  subTitle="Order #2024-00987 has been confirmed. You'll receive a confirmation email shortly."
  extra={
    <>
      <TkxButton>View Order</TkxButton>
      <TkxButton variant="outline">Continue Shopping</TkxButton>
    </>
  }
/>`,children:(0,a.jsx)(n,{status:`success`,title:`Payment Successful`,subTitle:`Order #2024-00987 has been confirmed. You'll receive a confirmation email shortly.`,extra:(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,justifyContent:`center`,flexWrap:`wrap`},children:[(0,a.jsx)(t,{children:`View Order`}),(0,a.jsx)(t,{variant:`outline`,children:`Continue Shopping`})]})})}),(0,a.jsx)(`hr`,{style:s}),(0,a.jsx)(r,{title:`Error`,description:`Shown when an operation fails. Always offer a clear recovery action.`,theme:e,code:`<TkxResult
  status="error"
  title="Upload Failed"
  subTitle="Your file could not be uploaded. Check your connection and try again."
  extra={<TkxButton variant="danger">Try Again</TkxButton>}
/>`,children:(0,a.jsx)(n,{status:`error`,title:`Upload Failed`,subTitle:`Your file could not be uploaded. Check your connection and try again.`,extra:(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,justifyContent:`center`},children:[(0,a.jsx)(t,{variant:`danger`,children:`Try Again`}),(0,a.jsx)(t,{variant:`outline`,children:`Get Help`})]})})}),(0,a.jsx)(`hr`,{style:s}),(0,a.jsx)(r,{title:`Warning`,description:`Alerts the user to a non-blocking issue that needs their attention.`,theme:e,code:`<TkxResult
  status="warning"
  title="Storage Almost Full"
  subTitle="You've used 92% of your 5 GB storage quota. Upgrade your plan to avoid interruptions."
  extra={<TkxButton>Upgrade Plan</TkxButton>}
/>`,children:(0,a.jsx)(n,{status:`warning`,title:`Storage Almost Full`,subTitle:`You've used 92% of your 5 GB storage quota. Upgrade your plan to avoid interruptions.`,extra:(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,justifyContent:`center`},children:[(0,a.jsx)(t,{children:`Upgrade Plan`}),(0,a.jsx)(t,{variant:`ghost`,children:`Manage Files`})]})})}),(0,a.jsx)(`hr`,{style:s}),(0,a.jsx)(r,{title:`HTTP Status Pages`,description:`Built-in status codes for common HTTP error pages: 403 Forbidden, 404 Not Found, 500 Server Error.`,theme:e,code:`<TkxResult status="404" title="Page Not Found"
  subTitle="The URL you requested doesn't exist."
  extra={<TkxButton>Go Home</TkxButton>}
/>

<TkxResult status="403" title="Access Denied"
  subTitle="You don't have permission to view this page."
  extra={<TkxButton>Request Access</TkxButton>}
/>

<TkxResult status="500" title="Server Error"
  subTitle="Something went wrong on our end. We're working on it."
  extra={<TkxButton>Refresh</TkxButton>}
/>`,children:(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:24},children:[`404`,`403`,`500`].map(r=>(0,a.jsx)(`div`,{style:{border:`1px solid ${e.border}`,borderRadius:12,padding:24},children:(0,a.jsx)(n,{status:r,title:r===`404`?`Not Found`:r===`403`?`Forbidden`:`Server Error`,subTitle:r===`404`?`Page does not exist.`:r===`403`?`No permission.`:`Something broke.`,extra:(0,a.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,a.jsx)(t,{size:`sm`,children:`Go Home`})})})},r))})}),(0,a.jsx)(`hr`,{style:s}),(0,a.jsx)(r,{title:`Info`,description:`Neutral informational state — useful for empty states, feature announcements, or help prompts.`,theme:e,code:`<TkxResult
  status="info"
  title="Connect Your Account"
  subTitle="Link your GitHub account to unlock CI/CD features and deploy automatically."
  extra={<TkxButton>Connect GitHub</TkxButton>}
/>`,children:(0,a.jsx)(n,{status:`info`,title:`Connect Your Account`,subTitle:`Link your GitHub account to unlock CI/CD features and deploy automatically.`,extra:(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,justifyContent:`center`},children:[(0,a.jsx)(t,{children:`Connect GitHub`}),(0,a.jsx)(t,{variant:`ghost`,children:`Learn More`})]})})}),(0,a.jsx)(`hr`,{style:s}),(0,a.jsxs)(`div`,{style:{marginTop:48},children:[(0,a.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:e.text,marginBottom:16},children:`TkxResult Props`}),(0,a.jsx)(i,{props:o})]})]})}export{s as ResultPage};