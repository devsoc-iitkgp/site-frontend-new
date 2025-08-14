import{j as n,g as r,r as c,B as i}from"./index-j7DW7U0N.js";import{T as m,P as x,a as b,C as h,b as p,c as u,d as y}from"./PropTable-Baf4PZpP.js";import{P as g}from"./PreviewSlider-D0sSZbsU.js";import{C as f}from"./Customize-Dq9g9yhm.js";const a=({text:e,disabled:t=!1,speed:s=5,className:d=""})=>{const l=`${s}s`;return n.jsx("div",{className:`shiny-text ${t?"disabled":""} ${d}`,style:{animationDuration:l},children:e})},T=`import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = \`\${speed}s\`;

  return (
    <div
      className={\`shiny-text \${disabled ? 'disabled' : ''} \${className}\`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
`,S=`.shiny-text {
  color: #b5b5b5a4; /* Adjust this color to change intensity/style */
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 60%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  animation: shine 5s linear infinite;
}

@keyframes shine {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
}

.shiny-text.disabled {
  animation: none;
}
`,N=`const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = \`\${speed}s\`;

  return (
    <div
      className={\`text-[#b5b5b5a4] bg-clip-text inline-block \${disabled ? '' : 'animate-shine'} \${className}\`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };`,j=`import './ShinyText.css';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = \`\${speed}s\`;

    return (
        <div
            className={\`shiny-text \${disabled ? 'disabled' : ''} \${className}\`}
            style={{ animationDuration }}
        >
            {text}
        </div>
    );
};

export default ShinyText;`,k=`import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = \`\${speed}s\`;

    return (
        <div
            className={\`text-[#b5b5b5a4] bg-clip-text inline-block \${disabled ? '' : 'animate-shine'} \${className}\`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };`,o={...r("TextAnimations/ShinyText"),usage:`import ShinyText from './ShinyText';
  
<ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' />`,code:T,css:S,tailwind:N,tsCode:j,tsTailwind:k},w=()=>{const[e,t]=c.useState(3),s=[{name:"text",type:"string",default:"-",description:"The text to be displayed with the shiny effect."},{name:"disabled",type:"boolean",default:"false",description:"Disables the shiny effect when set to true."},{name:"speed",type:"number",default:"5",description:"Specifies the duration of the animation in seconds."},{name:"className",type:"string",default:"''",description:"Adds custom classes to the root element."}];return n.jsxs(m,{children:[n.jsxs(x,{children:[n.jsx("h2",{className:"demo-title-extra",children:"Basic"}),n.jsx(i,{position:"relative",className:"demo-container",minH:150,fontSize:"24px",children:n.jsx(a,{text:"Just some shiny text!",disabled:!1,speed:3,className:"shiny-text-demo"})}),n.jsx("h2",{className:"demo-title-extra",children:"Button Text"}),n.jsx(i,{position:"relative",className:"demo-container",minH:150,fontSize:"24px",children:n.jsx("div",{className:"shiny-button",children:n.jsx(a,{text:"Shiny Button",disabled:!1,speed:3,className:"shiny-text-demo"})})}),n.jsx("h2",{className:"demo-title-extra",children:"Configurable Speed"}),n.jsx(i,{position:"relative",className:"demo-container",minH:150,fontSize:"24px",children:n.jsx(a,{text:e<2.5?"🐎 This is fast!":"🐌 This is slow!",disabled:!1,speed:e,className:"shiny-text-demo"})}),n.jsx(f,{children:n.jsx(g,{title:"Animation Duration",min:1,max:5,step:.1,value:e,valueUnit:"s",onChange:t})}),n.jsx(b,{data:s})]}),n.jsx(h,{children:n.jsx(p,{codeObject:o})}),n.jsx(u,{children:n.jsx(y,{...o})})]})};export{w as default};
