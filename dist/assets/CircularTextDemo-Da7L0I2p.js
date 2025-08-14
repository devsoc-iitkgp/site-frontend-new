import{b3 as b,r as f,j as n,p as C,g as y,B as D}from"./index-j7DW7U0N.js";import{T as w,P as k,a as H,C as E,b as M,c as V,d as N}from"./PropTable-Baf4PZpP.js";import{D as S}from"./Dependencies-BSh7s3YA.js";import{C as P}from"./Customize-Dq9g9yhm.js";import{P as $}from"./PreviewSlider-D0sSZbsU.js";import{P as j}from"./PreviewSelect-BhKIbQB2.js";import{P as R}from"./PreviewInput-C9vEteKu.js";import{u as U}from"./use-animation-Dr2GfxAE.js";import"./field-BmHOm1Rn.js";const A=(a,t,r=!0)=>({from:t,to:t+360,ease:"linear",duration:a,type:"tween",repeat:r?1/0:0}),c=(a,t)=>({rotate:A(a,t),scale:{type:"spring",damping:20,stiffness:300}}),B=({text:a,spinDuration:t=20,onHover:r="speedUp",className:m=""})=>{const l=Array.from(a),s=U(),i=b(0);f.useEffect(()=>{const e=i.get();s.start({rotate:e+360,scale:1,transition:c(t,e)})},[t,a,r,s,i]);const g=()=>{const e=i.get();if(console.log("CircularText mounted with text:",a),!r)return;let o,u=1;switch(r){case"slowDown":o=c(t*2,e);break;case"speedUp":o=c(t/4,e);break;case"pause":o={rotate:{type:"spring",damping:20,stiffness:300},scale:{type:"spring",damping:20,stiffness:300}},u=1;break;case"goBonkers":o=c(t/20,e),u=.8;break;default:o=c(t,e)}s.start({rotate:e+360,scale:u,transition:o})},p=()=>{const e=i.get();s.start({rotate:e+360,scale:1,transition:c(t,e)})};return n.jsx(C.div,{className:`circular-text ${m}`,style:{rotate:i},initial:{rotate:0},animate:s,onMouseEnter:g,onMouseLeave:p,children:l.map((e,o)=>{const u=360/l.length*o,d=Math.PI/l.length,v=d*o,h=d*o,x=`rotateZ(${u}deg) translate3d(${v}px, ${h}px, 0)`;return n.jsx("span",{style:{transform:x,WebkitTransform:x},children:e},o)})})},I=`import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";

import "./CircularText.css";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    console.log("CircularText mounted with text:", text);
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={\`circular-text \${className}\`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = \`rotateZ(\${rotationDeg}deg) translate3d(\${x}px, \${y}px, 0)\`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
`,O=`.circular-text {
  margin: 0 auto;
  border-radius: 50%;
  width: 200px;
  position: relative;
  height: 200px;
  font-weight: bold;
  color: #fff;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
}

.circular-text span {
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 24px;
  transition: all 0.5s cubic-bezier(0, 0, 0, 1);
}`,L=`import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={\`m-0 mx-auto rounded-full w-[200px] h-[200px] relative text-white font-black text-center cursor-pointer origin-center \${className}\`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = \`rotateZ(\${rotationDeg}deg) translate3d(\${x}px, \${y}px, 0)\`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
`,z=`import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  MotionValue,
  Transition,
} from "motion/react";

import "./CircularText.css";
interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={\`circular-text \${className}\`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = \`rotateZ(\${rotationDeg}deg) translate3d(\${x}px, \${y}px, 0)\`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
`,W=`import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  MotionValue,
  Transition,
} from "motion/react";
interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
    className={\`m-0 mx-auto rounded-full w-[200px] h-[200px] relative font-black text-white text-center cursor-pointer origin-center \${className}\`}
    style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = \`rotateZ(\${rotationDeg}deg) translate3d(\${x}px, \${y}px, 0)\`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
`,T={...y("TextAnimations/CircularText"),installation:"npm install motion",usage:`import CircularText from './CircularText';
  
<CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>`,code:I,css:O,tailwind:L,tsCode:z,tsTailwind:W},_=()=>{const[a,t]=f.useState("REACT*BITS*COMPONENTS*"),[r,m]=f.useState("speedUp"),[l,s]=f.useState(20),i=[{name:"text",type:"string",default:"''",description:"The text to display in a circular layout."},{name:"spinDuration",type:"number",default:"20",description:"The duration (in seconds) for one full rotation."},{name:"onHover",type:"'slowDown' | 'speedUp' | 'pause' | 'goBonkers'",default:"undefined",description:"Specifies the hover behavior variant. Options include 'slowDown', 'speedUp', 'pause', and 'goBonkers'."},{name:"className",type:"string",default:"''",description:"Optional additional CSS classes to apply to the component."}],g=[{label:"Slow Down",value:"slowDown"},{label:"Speed Up",value:"speedUp"},{label:"Pause",value:"pause"},{label:"Go Bonkers",value:"goBonkers"}];return n.jsxs(w,{children:[n.jsxs(k,{children:[n.jsx(D,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:n.jsx(B,{text:a,onHover:r,spinDuration:l})}),n.jsxs(P,{className:"preview-options",children:[n.jsx(R,{title:"Text",value:a,placeholder:"Enter text...",width:220,maxLength:25,onChange:t}),n.jsx(j,{title:"On Hover",options:g,value:r,name:"setOnHover",width:150,onChange:p=>{m(p)}}),n.jsx($,{min:1,title:"Spin Duration (s)",max:60,step:1,value:l,onChange:p=>{s(p)}})]}),n.jsx(H,{data:i}),n.jsx(S,{dependencyList:["motion"]})]}),n.jsx(E,{children:n.jsx(M,{codeObject:T})}),n.jsx(V,{children:n.jsx(N,{...T})})]})};export{_ as default};
