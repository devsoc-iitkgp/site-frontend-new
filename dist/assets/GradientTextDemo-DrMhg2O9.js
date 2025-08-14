import{g as p,r as o,j as e,B as i,T as r,F as g,q as u}from"./index-j7DW7U0N.js";import{T as x,P as h,a as b,C as v,b as y,c as w,d as k}from"./PropTable-Baf4PZpP.js";import{C as N}from"./Customize-Dq9g9yhm.js";import{P as S}from"./PreviewSlider-D0sSZbsU.js";import{P as j}from"./PreviewInput-C9vEteKu.js";import{G as s}from"./GradientText-D0w35bCs.js";import"./field-BmHOm1Rn.js";const T=`import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: \`linear-gradient(to right, \${colors.join(", ")})\`,
    animationDuration: \`\${animationSpeed}s\`,
  };

  return (
    <div className={\`animated-gradient-text \${className}\`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}
`,z=`.animated-gradient-text {
  position: relative;
  margin: 0 auto;
  display: flex;
  max-width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.5s ease-out;
  overflow: hidden;
  cursor: pointer;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 300% 100%;
  animation: gradient linear infinite;
  border-radius: inherit;
  z-index: 0;
  pointer-events: none;
}

.gradient-overlay::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  border-radius: inherit;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #060010;
  z-index: -1;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.text-content {
  display: inline-block;
  position: relative;
  z-index: 2;
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient linear infinite;
}`,B=`export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: \`linear-gradient(to right, \${colors.join(", ")})\`,
    animationDuration: \`\${animationSpeed}s\`,
  };

  return (
    <div
      className={\`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer \${className}\`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// };`,C=`import "./GradientText.css";
import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: \`linear-gradient(to right, \${colors.join(", ")})\`,
    animationDuration: \`\${animationSpeed}s\`,
  };

  return (
    <div className={\`animated-gradient-text \${className}\`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
`,G=`import React, { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

export default function GradientText({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
}: GradientTextProps) {
    const gradientStyle = {
        backgroundImage: \`linear-gradient(to right, \${colors.join(", ")})\`,
        animationDuration: \`\${animationSpeed}s\`,
    };

    return (
        <div
            className={\`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer \${className}\`}
        >
            {showBorder && (
                <div
                    className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
                    style={{
                        ...gradientStyle,
                        backgroundSize: "300% 100%",
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
                        style={{
                            width: "calc(100% - 2px)",
                            height: "calc(100% - 2px)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    ></div>
                </div>
            )}
            <div
                className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
                style={{
                    ...gradientStyle,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    backgroundSize: "300% 100%",
                }}
            >
                {children}
            </div>
        </div>
    );
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// };`,d={...p("TextAnimations/GradientText"),usage:`import GradientText from './GradientText'
  
<GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Add a splash of color!
</GradientText>`,code:T,css:z,tailwind:B,tsCode:C,tsTailwind:G},F=()=>{const[n,l]=o.useState("#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa"),[t,c]=o.useState(3),m=n.split(",").map(a=>a.trim()),f=[{name:"children",type:"ReactNode",default:"-",description:"The content to be displayed inside the gradient text."},{name:"className",type:"string",default:"''",description:"Adds custom classes to the root element for additional styling."},{name:"colors",type:"string[]",default:'["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]',description:"Defines the gradient colors for the text or border."},{name:"animationSpeed",type:"number",default:"8",description:"The duration of the gradient animation in seconds."},{name:"showBorder",type:"boolean",default:"false",description:"Determines whether a border with the gradient effect is displayed."}];return e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx("h2",{className:"demo-title-extra",children:"Default"}),e.jsx(i,{position:"relative",className:"demo-container",minH:150,children:e.jsx(r,{fontSize:"2rem",as:"div",children:e.jsx(s,{colors:n.split(","),animationSpeed:t,showBorder:!1,children:"Add a splash of color!"})})}),e.jsx("h2",{className:"demo-title-extra",children:"Border Animation"}),e.jsx(i,{position:"relative",className:"demo-container",minH:150,children:e.jsx(r,{fontSize:"2rem",as:"div",children:e.jsx(s,{colors:n.split(","),animationSpeed:t,className:"custom-gradient-class",children:"Now with a cool border!"})})}),e.jsxs(N,{children:[e.jsx(S,{title:"Loop Duration",min:1,max:10,step:.5,value:t,onChange:c,valueUnit:"s"}),e.jsxs(g,{gap:0,direction:"column",children:[e.jsx(j,{title:"Colors",maxLength:100,placeholder:"Enter colors separated by commas",onChange:a=>l(a),value:n}),e.jsx(i,{bg:`linear-gradient(to right, ${m.join(", ")})`,w:"300px",marginLeft:"calc(2rem + 24px)",h:"12px",borderRadius:"md",border:"1px solid #271E37"})]})]}),e.jsxs("p",{className:"demo-extra-info",style:{marginTop:"1rem"},children:[e.jsx(u,{position:"relative"})," For a smoother animation, the gradient should start and end with the same color."]}),e.jsx(b,{data:f})]}),e.jsx(v,{children:e.jsx(y,{codeObject:d})}),e.jsx(w,{children:e.jsx(k,{...d})})]})};export{F as default};
