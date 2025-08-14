import{r as o,j as n,a as h,S as R,g as C,B as x,T as y}from"./index-j7DW7U0N.js";import{T,P as w,a as E,C as N,b as D,c as j,d as v}from"./PropTable-Baf4PZpP.js";import{u as F}from"./useForceRerender-LUtjsLCb.js";import{D as P}from"./Dependencies-BSh7s3YA.js";import{P as b}from"./PreviewSlider-D0sSZbsU.js";h.registerPlugin(R);const k=({children:t,scrollContainerRef:r,containerClassName:u="",textClassName:m="",animationDuration:g=1,ease:f="back.inOut(2)",scrollStart:s="center bottom+=50%",scrollEnd:p="bottom bottom-=40%",stagger:e=.03})=>{const c=o.useRef(null),a=o.useMemo(()=>(typeof t=="string"?t:"").split("").map((l,d)=>n.jsx("span",{className:"char",children:l===" "?" ":l},d)),[t]);return o.useEffect(()=>{const i=c.current;if(!i)return;const l=r&&r.current?r.current:window,d=i.querySelectorAll(".char");h.fromTo(d,{willChange:"opacity, transform",opacity:0,yPercent:120,scaleY:2.3,scaleX:.7,transformOrigin:"50% 0%"},{duration:g,ease:f,opacity:1,yPercent:0,scaleY:1,scaleX:1,stagger:e,scrollTrigger:{trigger:i,scroller:l,start:s,end:p,scrub:!0}})},[r,g,f,s,p,e]),n.jsx("h2",{ref:c,className:`scroll-float ${u}`,children:n.jsx("span",{className:`scroll-float-text ${m}`,children:a})})},O=`import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split("").map((char, index) => (
      <span className="char" key={index}>
        {char === " " ? "\\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll('.char');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={\`scroll-float \${containerClassName}\`}>
      <span className={\`scroll-float-text \${textClassName}\`}>
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
`,A=`.scroll-float {
  overflow: hidden;
}

.scroll-float-text {
  display: inline-block;
  font-size: clamp(1.6rem, 8vw, 10rem);
  font-weight: 900;
  text-align: center;
  line-height: 1.5;
}

.char {
  display: inline-block;
}`,M=`import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === " " ? "\\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <h2
      ref={containerRef}
      className={\`my-5 overflow-hidden \${containerClassName}\`}
    >
      <span
        className={\`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] \${textClassName}\`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
`,Y=`import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="char" key={index}>
        {char === " " ? "\\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".char");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <h2 ref={containerRef} className={\`scroll-float \${containerClassName}\`}>
      <span className={\`scroll-float-text \${textClassName}\`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
`,X=`import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === " " ? "\\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <h2
      ref={containerRef}
      className={\`my-5 overflow-hidden \${containerClassName}\`}
    >
      <span
        className={\`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] \${textClassName}\`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
`,S={...C("TextAnimations/ScrollFloat"),installation:"npm install gsap",usage:`import ScrollFloat from './ScrollFloat';

<ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
  React Bits
</ScrollFloat>`,code:O,css:A,tailwind:M,tsCode:Y,tsTailwind:X},z=()=>{const t=o.useRef(null),[r,u]=o.useState(.03),[m,g]=o.useState(1),[f,s]=F();o.useEffect(()=>{const e=t.current;if(!e)return;const c=a=>{a.preventDefault();const l=(a.deltaY||a.detail||a.wheelDelta)*2;h.to(e,{scrollTop:e.scrollTop+l,duration:2,ease:"power3.out",overwrite:"auto"})};return e.addEventListener("wheel",c,{passive:!1}),()=>{e.removeEventListener("wheel",c)}},[]);const p=[{name:"children",type:"ReactNode",default:"—",description:"The content to animate. If a string, it will be split into individual characters."},{name:"scrollContainerRef",type:"RefObject<HTMLElement>",default:"window",description:"Optional ref to the scroll container. Defaults to window if not provided."},{name:"containerClassName",type:"string",default:'""',description:"Additional Tailwind classes for the container element."},{name:"textClassName",type:"string",default:'""',description:"Additional Tailwind classes for the text element."},{name:"animationDuration",type:"number",default:"1",description:"Duration (in seconds) of the animation."},{name:"ease",type:"string",default:'"back.inOut(2)"',description:"Easing function used for the animation."},{name:"scrollStart",type:"string",default:'"center bottom+=50%"',description:"The scroll trigger start position."},{name:"scrollEnd",type:"string",default:'"bottom bottom-=40%"',description:"The scroll trigger end position."},{name:"stagger",type:"number",default:"0.03",description:"Delay between the animation start of each character."}];return n.jsxs(T,{children:[n.jsxs(w,{children:[n.jsxs(x,{className:"demo-container",style:{height:"500px",maxHeight:"500px"},overflowY:"scroll",overflowX:"hidden",ref:t,position:"relative",children:[n.jsx(y,{textAlign:"center",color:"#271E37",fontSize:"clamp(4rem, 6vw, 4rem)",fontWeight:900,position:"absolute",top:"50%",transform:"translateY(-50%)",children:"Scroll Down"}),n.jsx(x,{position:"relative",pt:1600,pb:600,px:"3rem",children:n.jsx(k,{stagger:r,animationDuration:m,scrollContainerRef:t,children:"React Bits"},f)})]}),n.jsxs("div",{className:"preview-options",children:[n.jsx("h2",{className:"demo-title-extra",children:"Customize"}),n.jsx(b,{title:"Stagger",min:.01,max:.1,step:.01,value:r,onChange:e=>{t.current.scrollTo({top:0,behavior:"smooth"}),u(e),s()},width:150}),n.jsx(b,{title:"Duration",min:1,max:10,step:.1,value:m,onChange:e=>{t.current.scrollTo({top:0,behavior:"smooth"}),g(e),s()},width:150})]}),n.jsx(E,{data:p}),n.jsx(P,{dependencyList:["gsap"]})]}),n.jsx(N,{children:n.jsx(D,{codeObject:S})}),n.jsx(j,{children:n.jsx(v,{...S})})]})};export{z as default};
