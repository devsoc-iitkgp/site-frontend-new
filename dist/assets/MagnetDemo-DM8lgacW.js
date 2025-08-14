import{r as e,j as n,g as L,B as M,F as S,T as I}from"./index-j7DW7U0N.js";import{T as H,P as D,a as $,C as B,b as k,c as F,d as z}from"./PropTable-Baf4PZpP.js";import{P as y}from"./PreviewSlider-D0sSZbsU.js";import{P as O}from"./PreviewSwitch-_xo3rdWG.js";import{C as G}from"./Customize-Dq9g9yhm.js";const w=({children:s,padding:i=100,disabled:t=!1,magnetStrength:a=2,activeTransition:o="transform 0.3s ease-out",inactiveTransition:l="transform 0.5s ease-in-out",wrapperClassName:c="",innerClassName:d="",...R})=>{const[X,u]=e.useState(!1),[p,m]=e.useState({x:0,y:0}),f=e.useRef(null);e.useEffect(()=>{if(t){m({x:0,y:0});return}const g=r=>{if(!f.current)return;const{left:Y,top:T,width:h,height:v}=f.current.getBoundingClientRect(),x=Y+h/2,b=T+v/2,P=Math.abs(x-r.clientX),E=Math.abs(b-r.clientY);if(P<h/2+i&&E<v/2+i){u(!0);const j=(r.clientX-x)/a,A=(r.clientY-b)/a;m({x:j,y:A})}else u(!1),m({x:0,y:0})};return window.addEventListener("mousemove",g),()=>{window.removeEventListener("mousemove",g)}},[i,t,a]);const N=X?o:l;return n.jsx("div",{ref:f,className:c,style:{position:"relative",display:"inline-block"},...R,children:n.jsx("div",{className:d,style:{transform:`translate3d(${p.x}px, ${p.y}px, 0)`,transition:N,willChange:"transform"},children:s})})},J=`import { useState, useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
`,U=`import { useState, useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
`,W=`import React, { useState, useEffect, useRef, ReactNode, HTMLAttributes } from "react";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
`,_=`import React, { useState, useEffect, useRef, ReactNode, HTMLAttributes } from "react";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
`,C={...L("Animations/Magnet"),usage:`import Magnet from './Magnet'

<Magnet padding={50} disabled={false} magnetStrength={50}>
  <p>Star React Bits on GitHub!</p>
</Magnet>`,code:J,tailwind:U,tsCode:W,tsTailwind:_},nn=()=>{const[s,i]=e.useState(!1),[t,a]=e.useState(100),[o,l]=e.useState(2),c=[{name:"padding",type:"number",default:100,description:"Specifies the distance (in pixels) around the element that activates the magnet pull."},{name:"disabled",type:"boolean",default:!1,description:"Disables the magnet effect when set to true."},{name:"magnetStrength",type:"number",default:2,description:"Controls the strength of the pull; higher values reduce movement, lower values increase it."},{name:"activeTransition",type:"string",default:'"transform 0.3s ease-out"',description:"CSS transition applied to the element when the magnet is active."},{name:"inactiveTransition",type:"string",default:'"transform 0.5s ease-in-out"',description:"CSS transition applied when the magnet is inactive (mouse out of range)."},{name:"wrapperClassName",type:"string",default:'""',description:"Optional CSS class name for the outermost wrapper element."},{name:"innerClassName",type:"string",default:'""',description:"Optional CSS class name for the moving (inner) element."},{name:"children",type:"ReactNode",default:"",description:"The content (JSX) to be displayed inside the magnetized element."}];return n.jsxs(H,{children:[n.jsxs(D,{children:[n.jsx("h2",{className:"demo-title-extra",children:"Container"}),n.jsx(M,{position:"relative",className:"demo-container",minH:300,children:n.jsx(w,{padding:t,disabled:s,magnetStrength:o,children:n.jsx(S,{w:200,h:100,fontSize:"xl",fontWeight:"bolder",color:"#fff",bg:"#060010",border:"1px solid #222",borderRadius:"20px",justifyContent:"center",alignItems:"center",children:"Hover Me!"})})}),n.jsx("h2",{className:"demo-title-extra",children:"Link"}),n.jsx(M,{position:"relative",className:"demo-container",minH:300,children:n.jsx(w,{padding:Math.floor(t/2),disabled:s,magnetStrength:o,children:n.jsx("a",{href:"https://github.com/DavidHDev/react-bits",target:"_blank",rel:"noreferrer",children:n.jsxs(S,{fontSize:"lg",color:"#fff",children:["Star ",n.jsx(I,{color:"#5227FF",children:"React Bits"})," on GitHub!"]})})})}),n.jsxs(G,{children:[n.jsx(O,{title:"Disabled",isChecked:s,onChange:d=>i(d)}),n.jsx(y,{title:"Padding",min:0,max:300,step:10,value:t,valueUnit:"px",onChange:a}),n.jsx(y,{title:"Strength",min:1,max:10,step:1,value:o,onChange:l})]}),n.jsx($,{data:c})]}),n.jsx(B,{children:n.jsx(k,{codeObject:C})}),n.jsx(F,{children:n.jsx(z,{...C})})]})};export{nn as default};
