import{r as t,a as b,S as E,j as n,g as I,B as N,F as A,b as j,T as R}from"./index-j7DW7U0N.js";import{T as F,P as $,a as B,C as L,b as W,c as H,d as M}from"./PropTable-Baf4PZpP.js";import{R as _}from"./RefreshButton-BMj2HM2t.js";import{D as G}from"./Dependencies-BSh7s3YA.js";import{u as q}from"./useForceRerender-LUtjsLCb.js";import{C as J}from"./Customize-Dq9g9yhm.js";import{P as o}from"./PreviewSlider-D0sSZbsU.js";import{P}from"./PreviewSwitch-_xo3rdWG.js";b.registerPlugin(E);const K=({children:s,distance:l=100,direction:c="vertical",reverse:g=!1,duration:d=.8,ease:h="power3.out",initialOpacity:p=0,animateOpacity:y=!0,scale:m=1,threshold:x=.1,delay:a=0,onComplete:C})=>{const u=t.useRef(null);return t.useEffect(()=>{const r=u.current;if(!r)return;const f=c==="horizontal"?"x":"y",O=g?-l:l,v=(1-x)*100;return b.set(r,{[f]:O,scale:m,opacity:y?p:1}),b.to(r,{[f]:0,scale:1,opacity:1,duration:d,ease:h,delay:a,onComplete:C,scrollTrigger:{trigger:r,start:`top ${v}%`,toggleActions:"play none none none",once:!0}}),()=>{E.getAll().forEach(T=>T.kill()),b.killTweensOf(r)}},[l,c,g,d,h,p,y,m,x,a,C]),n.jsx("div",{ref:u,children:s})},Q=`import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    });

    gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: \`top \${startPct}%\`,
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf(el);
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;
`,U=`import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    });

    gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: \`top \${startPct}%\`,
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf(el);
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;
`,V=`import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string | ((progress: number) => number);
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    });

    gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: \`top \${startPct}%\`,
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(el);
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;
`,X=`import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string | ((progress: number) => number);
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    });

    gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: \`top \${startPct}%\`,
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(el);
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;
`,w={...I("Animations/AnimatedContent"),installation:"npm install gsap",usage:`import AnimatedContent from './AnimatedContent'

<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
  <div>Content to Animate</div>
</AnimatedContent>`,code:Q,tailwind:U,tsCode:V,tsTailwind:X},sn=()=>{const[s,l]=t.useState("vertical"),[c,g]=t.useState(100),[d,h]=t.useState(0),[p,y]=t.useState(!1),[m,x]=t.useState(.8),[a,C]=t.useState("power3.out"),[u,r]=t.useState(0),[f,O]=t.useState(!0),[v,T]=t.useState(1),[S,D]=t.useState(.1),[k,i]=q(),z=[{name:"children",type:"ReactNode",default:"",description:"The content to be animated."},{name:"distance",type:"number",default:"100",description:"Distance (in pixels) the component moves during animation."},{name:"direction",type:"string",default:'"vertical"',description:'Animation direction. Can be "vertical" or "horizontal".'},{name:"reverse",type:"boolean",default:"false",description:"Whether the animation moves in the reverse direction."},{name:"duration",type:"number",default:"0.8",description:"Duration of the animation in seconds."},{name:"ease",type:"string",default:'"power3.out"',description:"GSAP easing function for the animation."},{name:"initialOpacity",type:"number",default:"0",description:"Initial opacity before animation begins."},{name:"animateOpacity",type:"boolean",default:"true",description:"Whether to animate opacity during transition."},{name:"scale",type:"number",default:"1",description:"Initial scale of the component."},{name:"threshold",type:"number",default:"0.1",description:"Intersection threshold to trigger animation (0-1)."},{name:"delay",type:"number",default:"0",description:"Delay before animation starts (in seconds)."},{name:"onComplete",type:"function",default:"undefined",description:"Callback function called when animation completes."}];return n.jsxs(F,{children:[n.jsxs($,{children:[n.jsxs(N,{position:"relative",className:"demo-container",minH:400,overflow:"hidden",children:[n.jsx(_,{onClick:i}),n.jsx(K,{direction:s,delay:d,distance:c,reverse:p,duration:m,ease:a,initialOpacity:u,animateOpacity:f,scale:v,threshold:S,children:n.jsx(A,{fontSize:"xl",fontWeight:"bolder",justifyContent:"center",alignItems:"center",color:"#fff",h:100,borderRadius:"25px",border:"1px solid #392e4e",w:200,bg:"#060010",children:"Animate Me"})},k)]}),n.jsxs(J,{children:[n.jsxs(A,{gap:2,wrap:"wrap",children:[n.jsxs(j,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{l(s==="vertical"?"horizontal":"vertical"),i()},children:["Direction: ",n.jsxs(R,{color:"#a1a1aa",children:[" ",String(s)]})]}),n.jsxs(j,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{C(a==="power3.out"?"bounce.out":a==="bounce.out"?"elastic.out(1, 0.3)":"power3.out"),i()},children:["Ease: ",n.jsxs(R,{color:"#a1a1aa",children:[" ",a]})]})]}),n.jsx(P,{title:"Reverse Direction",isChecked:p,onChange:e=>{y(e),i()}}),n.jsx(P,{title:"Animate Opacity",isChecked:f,onChange:e=>{O(e),i()}}),n.jsx(o,{title:"Distance",min:50,max:300,step:10,value:c,onChange:e=>{g(e),i()}}),n.jsx(o,{title:"Duration",min:.1,max:3,step:.1,value:m,onChange:e=>{x(e),i()}}),n.jsx(o,{title:"Delay",min:0,max:2,step:.1,value:d,onChange:e=>{h(e),i()}}),n.jsx(o,{title:"Initial Opacity",min:0,max:1,step:.1,value:u,onChange:e=>{r(e),i()}}),n.jsx(o,{title:"Initial Scale",min:.1,max:2,step:.1,value:v,onChange:e=>{T(e),i()}}),n.jsx(o,{title:"Threshold",min:.1,max:1,step:.1,value:S,onChange:e=>{D(e),i()}})]}),n.jsx(B,{data:z}),n.jsx(G,{dependencyList:["gsap"]})]}),n.jsx(L,{children:n.jsx(W,{codeObject:w})}),n.jsx(H,{children:n.jsx(M,{...w})})]})};export{sn as default};
