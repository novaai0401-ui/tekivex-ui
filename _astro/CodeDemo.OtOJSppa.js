import{ar as e,y as t,z as i}from"./Preview.CSiPW31e.js";import"./index.BJHLxEsq.js";/* empty css                            */const n=`interface Greeting {
  name: string;
  excited?: boolean;
}

// Build the greeting line
export function greet({ name, excited }: Greeting): string {
  const punctuation = excited ? '!' : '.';
  return \`Hello, \${name}\${punctuation}\`;
}`;function l(){return e.jsx(t,{style:{flexDirection:"column",alignItems:"stretch"},children:e.jsx("div",{style:{minWidth:320,width:"100%"},children:e.jsx(i,{language:"ts",filename:"greet.ts",code:n})})})}function c(){return e.jsx(t,{label:"showLineNumbers + highlightLines",style:{flexDirection:"column",alignItems:"stretch"},children:e.jsx("div",{style:{minWidth:320,width:"100%"},children:e.jsx(i,{language:"ts",showLineNumbers:!0,highlightLines:[8,9],code:n})})})}export{l as CodeBasic,c as CodeLineNumbers};
