import{j as e,g as b,r as h,B as x}from"./index-j7DW7U0N.js";import{T as m,P as v,a as u,C as w,b as g,c as C,d as S}from"./PropTable-Baf4PZpP.js";import{u as y}from"./useForceRerender-LUtjsLCb.js";import{P as p}from"./PreviewSwitch-_xo3rdWG.js";import{C as T}from"./Customize-Dq9g9yhm.js";import{P as _}from"./PreviewSlider-D0sSZbsU.js";const G=({children:t,speed:i=1,enableShadows:n=!0,enableOnHover:o=!0,className:a=""})=>{const s={"--after-duration":`${i*3}s`,"--before-duration":`${i*2}s`,"--after-shadow":n?"-5px 0 red":"none","--before-shadow":n?"5px 0 cyan":"none"},l=o?"enable-on-hover":"";return e.jsx("div",{className:`glitch ${l} ${a}`,style:s,"data-text":t,children:t})},$=`import './GlitchText.css';

const GlitchText = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = true,
  className = '',
}) => {
  const inlineStyles = {
    '--after-duration': \`\${speed * 3}s\`,
    '--before-duration': \`\${speed * 2}s\`,
    '--after-shadow': enableShadows ? '-5px 0 red' : 'none',
    '--before-shadow': enableShadows ? '5px 0 cyan' : 'none',
  };

  const hoverClass = enableOnHover ? 'enable-on-hover' : '';

  return (
    <div
      className={\`glitch \${hoverClass} \${className}\`}
      style={inlineStyles}
      data-text={children}
    >
      {children}
    </div>
  );
};

export default GlitchText;
`,j=`.glitch {
  color: #fff;
  font-size: clamp(2rem, 10vw, 8rem);
  white-space: nowrap;
  font-weight: 900;
  position: relative;
  margin: 0 auto;
  user-select: none;
  cursor: pointer;
}

.glitch::after,
.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  color: #fff;
  background-color: #060010;
  overflow: hidden;
  clip-path: inset(0 0 0 0);
}

.glitch:not(.enable-on-hover)::after {
  left: 10px;
  text-shadow: var(--after-shadow, -10px 0 red);
  animation: animate-glitch var(--after-duration, 3s) infinite linear alternate-reverse;
}
.glitch:not(.enable-on-hover)::before {
  left: -10px;
  text-shadow: var(--before-shadow, 10px 0 cyan);
  animation: animate-glitch var(--before-duration, 2s) infinite linear alternate-reverse;
}

.glitch.enable-on-hover::after,
.glitch.enable-on-hover::before {
  content: '';
  opacity: 0;
  animation: none;
}

.glitch.enable-on-hover:hover::after {
  content: attr(data-text);
  opacity: 1;
  left: 10px;
  text-shadow: var(--after-shadow, -10px 0 red);
  animation: animate-glitch var(--after-duration, 3s) infinite linear alternate-reverse;
}
.glitch.enable-on-hover:hover::before {
  content: attr(data-text);
  opacity: 1;
  left: -10px;
  text-shadow: var(--before-shadow, 10px 0 cyan);
  animation: animate-glitch var(--before-duration, 2s) infinite linear alternate-reverse;
}

@keyframes animate-glitch {
  0%   { clip-path: inset(20% 0 50% 0); }
  5%   { clip-path: inset(10% 0 60% 0); }
  10%  { clip-path: inset(15% 0 55% 0); }
  15%  { clip-path: inset(25% 0 35% 0); }
  20%  { clip-path: inset(30% 0 40% 0); }
  25%  { clip-path: inset(40% 0 20% 0); }
  30%  { clip-path: inset(10% 0 60% 0); }
  35%  { clip-path: inset(15% 0 55% 0); }
  40%  { clip-path: inset(25% 0 35% 0); }
  45%  { clip-path: inset(30% 0 40% 0); }
  50%  { clip-path: inset(20% 0 50% 0); }
  55%  { clip-path: inset(10% 0 60% 0); }
  60%  { clip-path: inset(15% 0 55% 0); }
  65%  { clip-path: inset(25% 0 35% 0); }
  70%  { clip-path: inset(30% 0 40% 0); }
  75%  { clip-path: inset(40% 0 20% 0); }
  80%  { clip-path: inset(20% 0 50% 0); }
  85%  { clip-path: inset(10% 0 60% 0); }
  90%  { clip-path: inset(15% 0 55% 0); }
  95%  { clip-path: inset(25% 0 35% 0); }
  100% { clip-path: inset(30% 0 40% 0); }
}
`,P=`const GlitchText = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const inlineStyles = {
    "--after-duration": \`\${speed * 3}s\`,
    "--before-duration": \`\${speed * 2}s\`,
    "--after-shadow": enableShadows ? "-5px 0 red" : "none",
    "--before-shadow": enableShadows ? "5px 0 cyan" : "none",
  };

  const baseClasses =
    "text-white text-[clamp(2rem,10vw,8rem)] font-black relative mx-auto select-none cursor-pointer";

  const pseudoClasses = !enableOnHover
    ? 
      "after:content-[attr(data-text)] after:absolute after:top-0 after:left-[10px] after:text-white after:bg-[#060010] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after " +
      "before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-10px] before:text-white before:bg-[#060010] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before"
    : 
      "after:content-[''] after:absolute after:top-0 after:left-[10px] after:text-white after:bg-[#060010] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:opacity-0 " +
      "before:content-[''] before:absolute before:top-0 before:left-[-10px] before:text-white before:bg-[#060010] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:opacity-0 " +
      "hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after " +
      "hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before";

  const combinedClasses = \`\${baseClasses} \${pseudoClasses} \${className}\`;

  return (
    <div style={inlineStyles} data-text={children} className={combinedClasses}>
      {children}
    </div>
  );
};

export default GlitchText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         glitch: {
//           "0%": { "clip-path": "inset(20% 0 50% 0)" },
//           "5%": { "clip-path": "inset(10% 0 60% 0)" },
//           "10%": { "clip-path": "inset(15% 0 55% 0)" },
//           "15%": { "clip-path": "inset(25% 0 35% 0)" },
//           "20%": { "clip-path": "inset(30% 0 40% 0)" },
//           "25%": { "clip-path": "inset(40% 0 20% 0)" },
//           "30%": { "clip-path": "inset(10% 0 60% 0)" },
//           "35%": { "clip-path": "inset(15% 0 55% 0)" },
//           "40%": { "clip-path": "inset(25% 0 35% 0)" },
//           "45%": { "clip-path": "inset(30% 0 40% 0)" },
//           "50%": { "clip-path": "inset(20% 0 50% 0)" },
//           "55%": { "clip-path": "inset(10% 0 60% 0)" },
//           "60%": { "clip-path": "inset(15% 0 55% 0)" },
//           "65%": { "clip-path": "inset(25% 0 35% 0)" },
//           "70%": { "clip-path": "inset(30% 0 40% 0)" },
//           "75%": { "clip-path": "inset(40% 0 20% 0)" },
//           "80%": { "clip-path": "inset(20% 0 50% 0)" },
//           "85%": { "clip-path": "inset(10% 0 60% 0)" },
//           "90%": { "clip-path": "inset(15% 0 55% 0)" },
//           "95%": { "clip-path": "inset(25% 0 35% 0)" },
//           "100%": { "clip-path": "inset(30% 0 40% 0)" },
//         },
//       },
//       animation: {
//         "glitch-after": "glitch var(--after-duration) infinite linear alternate-reverse",
//         "glitch-before": "glitch var(--before-duration) infinite linear alternate-reverse",
//       },
//     },
//   },
//   plugins: [],
// };`,N=`import { FC, CSSProperties } from "react";
import "./GlitchText.css";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration": string;
  "--before-duration": string;
  "--after-shadow": string;
  "--before-shadow": string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": \`\${speed * 3}s\`,
    "--before-duration": \`\${speed * 2}s\`,
    "--after-shadow": enableShadows ? "-5px 0 red" : "none",
    "--before-shadow": enableShadows ? "5px 0 cyan" : "none",
  };

  const hoverClass = enableOnHover ? "enable-on-hover" : "";

  return (
    <div
      className={\`glitch \${hoverClass} \${className}\`}
      style={inlineStyles}
      data-text={children}
    >
      {children}
    </div>
  );
};

export default GlitchText;
`,H=`import { FC, CSSProperties } from "react";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration": string;
  "--before-duration": string;
  "--after-shadow": string;
  "--before-shadow": string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": \`\${speed * 3}s\`,
    "--before-duration": \`\${speed * 2}s\`,
    "--after-shadow": enableShadows ? "-5px 0 red" : "none",
    "--before-shadow": enableShadows ? "5px 0 cyan" : "none",
  };

  const baseClasses =
    "text-white text-[clamp(2rem,10vw,8rem)] font-black relative mx-auto select-none cursor-pointer";

  const pseudoClasses = !enableOnHover
    ? "after:content-[attr(data-text)] after:absolute after:top-0 after:left-[10px] after:text-white after:bg-[#060010] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after " +
      "before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-10px] before:text-white before:bg-[#060010] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before"
    : "after:content-[''] after:absolute after:top-0 after:left-[10px] after:text-white after:bg-[#060010] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:opacity-0 " +
      "before:content-[''] before:absolute before:top-0 before:left-[-10px] before:text-white before:bg-[#060010] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:opacity-0 " +
      "hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after " +
      "hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before";

  const combinedClasses = \`\${baseClasses} \${pseudoClasses} \${className}\`;

  return (
    <div style={inlineStyles} data-text={children} className={combinedClasses}>
      {children}
    </div>
  );
};

export default GlitchText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         glitch: {
//           "0%": { "clip-path": "inset(20% 0 50% 0)" },
//           "5%": { "clip-path": "inset(10% 0 60% 0)" },
//           "10%": { "clip-path": "inset(15% 0 55% 0)" },
//           "15%": { "clip-path": "inset(25% 0 35% 0)" },
//           "20%": { "clip-path": "inset(30% 0 40% 0)" },
//           "25%": { "clip-path": "inset(40% 0 20% 0)" },
//           "30%": { "clip-path": "inset(10% 0 60% 0)" },
//           "35%": { "clip-path": "inset(15% 0 55% 0)" },
//           "40%": { "clip-path": "inset(25% 0 35% 0)" },
//           "45%": { "clip-path": "inset(30% 0 40% 0)" },
//           "50%": { "clip-path": "inset(20% 0 50% 0)" },
//           "55%": { "clip-path": "inset(10% 0 60% 0)" },
//           "60%": { "clip-path": "inset(15% 0 55% 0)" },
//           "65%": { "clip-path": "inset(25% 0 35% 0)" },
//           "70%": { "clip-path": "inset(30% 0 40% 0)" },
//           "75%": { "clip-path": "inset(40% 0 20% 0)" },
//           "80%": { "clip-path": "inset(20% 0 50% 0)" },
//           "85%": { "clip-path": "inset(10% 0 60% 0)" },
//           "90%": { "clip-path": "inset(15% 0 55% 0)" },
//           "95%": { "clip-path": "inset(25% 0 35% 0)" },
//           "100%": { "clip-path": "inset(30% 0 40% 0)" },
//         },
//       },
//       animation: {
//         "glitch-after": "glitch var(--after-duration) infinite linear alternate-reverse",
//         "glitch-before": "glitch var(--before-duration) infinite linear alternate-reverse",
//       },
//     },
//   },
//   plugins: [],
// };
`,f={...b("TextAnimations/GlitchText"),usage:`import GlitchText from './GlitchText';
  
<GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={true}
  className='custom-class'
>
  React Bits
</GlitchText>`,code:$,css:j,tailwind:P,tsCode:N,tsTailwind:H},D=()=>{const[t,i]=h.useState(1),[n,o]=h.useState(!0),[a,s]=h.useState(!1),[l,c]=y(),d=[{name:"children",type:"string",default:"",description:"The text content that will display the glitch effect."},{name:"speed",type:"number",default:"0.5",description:"Multiplier for the animation speed. Higher values slow down the glitch effect."},{name:"enableShadows",type:"boolean",default:"true",description:"Toggle the colored text shadows on the glitch pseudo-elements."},{name:"enableOnHover",type:"boolean",default:"false",description:"If true, the glitch animation is only activated on hover."},{name:"className",type:"string",default:"",description:"Additional custom classes to apply to the component."}];return e.jsxs(m,{children:[e.jsxs(v,{children:[e.jsx(x,{position:"relative",className:"demo-container",h:500,overflow:"hidden",children:e.jsx(G,{speed:t,enableShadows:n,enableOnHover:a,children:a?"Hover Me":"React Bits"},l)}),e.jsxs(T,{children:[e.jsx(_,{title:"Refresh Delay",min:.1,max:5,step:.1,value:t,onChange:r=>{i(r),c()}}),e.jsx(p,{title:"Glitch Colors",isChecked:n,onChange:r=>{o(r),c()}}),e.jsx(p,{title:"Glitch On Hover",isChecked:a,onChange:r=>{s(r),c()}})]}),e.jsx(u,{data:d})]}),e.jsx(w,{children:e.jsx(g,{codeObject:f})}),e.jsx(C,{children:e.jsx(S,{...f})})]})};export{D as default};
