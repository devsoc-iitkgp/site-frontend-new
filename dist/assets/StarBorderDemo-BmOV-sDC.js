import{j as e,g as p,r as d,B as u,T as b}from"./index-j7DW7U0N.js";import{T as h,P as x,a as g,C as y,b as v,c as f,d as N}from"./PropTable-Baf4PZpP.js";import{P as l}from"./PreviewSlider-D0sSZbsU.js";import{P as k}from"./PreviewSelect-BhKIbQB2.js";import{C}from"./Customize-Dq9g9yhm.js";import"./field-BmHOm1Rn.js";const S=({as:n="button",className:s="",color:t="white",speed:a="6s",thickness:r=1,children:i,...o})=>e.jsxs(n,{className:`star-border-container ${s}`,style:{padding:`${r}px 0`,...o.style},...o,children:[e.jsx("div",{className:"border-gradient-bottom",style:{background:`radial-gradient(circle, ${t}, transparent 10%)`,animationDuration:a}}),e.jsx("div",{className:"border-gradient-top",style:{background:`radial-gradient(circle, ${t}, transparent 10%)`,animationDuration:a}}),e.jsx("div",{className:"inner-content",children:i})]}),w=`import "./StarBorder.css";

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component 
      className={\`star-border-container \${className}\`} 
      style={{
        padding: \`\${thickness}px 0\`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
`,B=`.star-border-container {
  display: inline-block;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.border-gradient-bottom {
  position: absolute;
  width: 300%;
  height: 50%;
  opacity: 0.7;
  bottom: -12px;
  right: -250%;
  border-radius: 50%;
  animation: star-movement-bottom linear infinite alternate;
  z-index: 0;
}

.border-gradient-top {
  position: absolute;
  opacity: 0.7;
  width: 300%;
  height: 50%;
  top: -12px;
  left: -250%;
  border-radius: 50%;
  animation: star-movement-top linear infinite alternate;
  z-index: 0;
}

.inner-content {
  position: relative;
  border: 1px solid #222;
  background: #000;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 16px 26px;
  border-radius: 20px;
  z-index: 1;
}

@keyframes star-movement-bottom {
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(-100%, 0%);
    opacity: 0;
  }
}

@keyframes star-movement-top {
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(100%, 0%);
    opacity: 0;
  }
}
`,T=`const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component 
      className={\`relative inline-block overflow-hidden rounded-[20px] \${className}\`} 
      style={{
        padding: \`\${thickness}px 0\`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
//         'star-movement-top': 'star-movement-top linear infinite alternate',
//       },
//       keyframes: {
//         'star-movement-bottom': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
//         },
//         'star-movement-top': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
//         },
//       },
//     },
//   }
// }`,j=`import React from "react";
import "./StarBorder.css";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
  }

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component 
      className={\`star-border-container \${className}\`} 
      {...(rest as any)}
      style={{
        padding: \`\${thickness}px 0\`,
        ...(rest as any).style,
      }}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
`,$=`import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
  }

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component 
      className={\`relative inline-block overflow-hidden rounded-[20px] \${className}\`} 
      {...(rest as any)}
      style={{
        padding: \`\${thickness}px 0\`,
        ...(rest as any).style,
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
//         'star-movement-top': 'star-movement-top linear infinite alternate',
//       },
//       keyframes: {
//         'star-movement-bottom': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
//         },
//         'star-movement-top': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
//         },
//       },
//     },
//   }
// }`,c={...p("Animations/StarBorder"),usage:`import StarBorder from './StarBorder'
  
<StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="5s"
>
  // content
</StarBorder>`,code:w,css:B,tailwind:T,tsCode:j,tsTailwind:$},W=()=>{const[n,s]=d.useState(1),[t,a]=d.useState(5),[r,i]=d.useState("magenta"),o=[{value:"magenta",label:"Magenta"},{value:"cyan",label:"Cyan"},{value:"white",label:"White"}],m=[{name:"as",type:"string",default:"button",description:"Allows specifying the type of the parent component to be rendered."},{name:"className",type:"string",default:"-",description:"Allows adding custom classes to the component."},{name:"color",type:"string",default:"white",description:"Changes the main color of the border (fades to transparent)"},{name:"speed",type:"string",default:"6s",description:"Changes the speed of the animation."},{name:"thickness",type:"number",default:"3",description:"Controls the thickness of the star border effect."}];return e.jsxs(h,{children:[e.jsxs(x,{children:[e.jsx(u,{position:"relative",className:"demo-container",h:400,children:e.jsx(S,{className:"star-border-demo",color:r,thickness:n,speed:`${t}s`,children:e.jsx(b,{mx:0,fontSize:"1em",children:"Star Border"})})}),e.jsxs(C,{children:[e.jsx(k,{title:"Color",options:o,value:r,width:120,onChange:i}),e.jsx(l,{title:"Thickness",min:.5,max:8,step:.5,value:n,valueUnit:"px",width:200,onChange:s}),e.jsx(l,{title:"Speed",min:1,max:10,step:.5,value:t,valueUnit:"s",width:200,onChange:a})]}),e.jsx(g,{data:m})]}),e.jsx(y,{children:e.jsx(v,{codeObject:c})}),e.jsx(f,{children:e.jsx(N,{...c})})]})};export{W as default};
