import{r as l,j as t,a as g,S,g as y,B as x,T as C}from"./index-j7DW7U0N.js";import{T as v,P as N,a as A,C as O,b as j,c as B,d as $}from"./PropTable-Baf4PZpP.js";import{u as P}from"./useForceRerender-LUtjsLCb.js";import{D as M}from"./Dependencies-BSh7s3YA.js";import{P as w}from"./PreviewSlider-D0sSZbsU.js";import{P as k}from"./PreviewSwitch-_xo3rdWG.js";import{C as L}from"./Customize-Dq9g9yhm.js";g.registerPlugin(S);const W=({children:n,scrollContainerRef:a,enableBlur:u=!0,baseOpacity:i=.1,baseRotation:d=3,blurStrength:c=4,containerClassName:b="",textClassName:p="",rotationEnd:f="bottom bottom",wordAnimationEnd:m="bottom bottom"})=>{const s=l.useRef(null),h=l.useMemo(()=>(typeof n=="string"?n:"").split(/(\s+)/).map((r,o)=>r.match(/^\s+$/)?r:t.jsx("span",{className:"word",children:r},o)),[n]);return l.useEffect(()=>{const e=s.current;if(!e)return;const r=a&&a.current?a.current:window;g.fromTo(e,{transformOrigin:"0% 50%",rotate:d},{ease:"none",rotate:0,scrollTrigger:{trigger:e,scroller:r,start:"top bottom",end:f,scrub:!0}});const o=e.querySelectorAll(".word");return g.fromTo(o,{opacity:i,willChange:"opacity"},{ease:"none",opacity:1,stagger:.05,scrollTrigger:{trigger:e,scroller:r,start:"top bottom-=20%",end:m,scrub:!0}}),u&&g.fromTo(o,{filter:`blur(${c}px)`},{ease:"none",filter:"blur(0px)",stagger:.05,scrollTrigger:{trigger:e,scroller:r,start:"top bottom-=20%",end:m,scrub:!0}}),()=>{S.getAll().forEach(R=>R.kill())}},[a,u,d,i,f,m,c]),t.jsx("h2",{ref:s,className:`scroll-reveal ${b}`,children:t.jsx("p",{className:`scroll-reveal-text ${p}`,children:h})})},H=`import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom"
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\\s+)/).map((word, index) => {
      if (word.match(/^\\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: \`blur(\${blurStrength}px)\` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={\`scroll-reveal \${containerClassName}\`}>
      <p className={\`scroll-reveal-text \${textClassName}\`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
`,D=`.scroll-reveal {
  margin: 20px 0;
}

.scroll-reveal-text {
  font-size: clamp(1.6rem, 4vw, 3rem);
  line-height: 1.5;
  font-weight: 600;
}

.word {
  display: inline-block;
}`,q=`import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom"
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\\s+)/).map((word, index) => {
      if (word.match(/^\\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: \`blur(\${blurStrength}px)\` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={\`my-5 \${containerClassName}\`}>
      <p className={\`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold \${textClassName}\`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
`,z=`import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\\s+)/).map((word, index) => {
      if (word.match(/^\\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: \`blur(\${blurStrength}px)\` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={\`scroll-reveal \${containerClassName}\`}>
      <p className={\`scroll-reveal-text \${textClassName}\`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
`,F=`import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\\s+)/).map((word, index) => {
      if (word.match(/^\\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: \`blur(\${blurStrength}px)\` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={\`my-5 \${containerClassName}\`}>
      <p
        className={\`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold \${textClassName}\`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
`,T={...y("TextAnimations/ScrollReveal"),installation:"npm install gsap",usage:`import ScrollReveal from './ScrollReveal';

<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>`,code:H,css:D,tailwind:q,tsCode:z,tsTailwind:F},Q=()=>{const n=l.useRef(null),[a,u]=l.useState(!0),[i,d]=l.useState(.1),[c,b]=l.useState(3),[p,f]=l.useState(4),[m,s]=P();l.useEffect(()=>{const e=n.current;if(!e)return;const r=o=>{o.preventDefault();const E=(o.deltaY||o.detail||o.wheelDelta)*2;g.to(e,{scrollTop:e.scrollTop+E,duration:2,ease:"power3.out",overwrite:"auto"})};return e.addEventListener("wheel",r,{passive:!1}),()=>{e.removeEventListener("wheel",r)}},[]);const h=[{name:"children",type:"ReactNode",default:"—",description:"The text or elements to be animated. If a string is provided, it will be split into words."},{name:"scrollContainerRef",type:"React.RefObject",default:"window",description:"Optional ref for the scroll container. If provided, GSAP will use this container for scroll triggers; otherwise, it defaults to the window."},{name:"enableBlur",type:"boolean",default:"true",description:"Enables the blur animation effect on the words."},{name:"baseOpacity",type:"number",default:"0.1",description:"The initial opacity value for the words before the animation."},{name:"baseRotation",type:"number",default:"3",description:"The starting rotation (in degrees) for the container before it animates to 0."},{name:"blurStrength",type:"number",default:"4",description:"The strength of the blur effect (in pixels) applied at the start of the animation."},{name:"containerClassName",type:"string",default:'""',description:"Additional CSS class(es) to apply to the container element."},{name:"textClassName",type:"string",default:'""',description:"Additional CSS class(es) to apply to the text element."},{name:"rotationEnd",type:"string",default:'"bottom bottom"',description:"The scroll trigger end point for the container rotation animation."},{name:"wordAnimationEnd",type:"string",default:'"bottom bottom"',description:"The scroll trigger end point for the word opacity and blur animations. The animation will complete when the bottom of the text reaches the bottom of the container."}];return t.jsxs(v,{children:[t.jsxs(N,{children:[t.jsxs(x,{className:"demo-container",style:{height:"500px",maxHeight:"500px"},overflowY:"scroll",overflowX:"hidden",ref:n,position:"relative",children:[t.jsx(C,{textAlign:"center",color:"#271E37",fontSize:"clamp(4rem, 6vw, 4rem)",fontWeight:900,position:"absolute",top:"50%",transform:"translateY(-50%)",children:"Scroll Down"}),t.jsx(x,{position:"relative",pt:1600,pb:600,px:"3rem",children:t.jsx(W,{scrollContainerRef:n,baseOpacity:i,enableBlur:a,baseRotation:c,blurStrength:p,children:"When does a man die? When he is hit by a bullet? No! When he suffers a disease? No! When he ate a soup made out of a poisonous mushroom? No! A man dies when he is forgotten!"},m)})]}),t.jsxs(L,{children:[t.jsx(k,{title:"Enable Blur",isChecked:a,onChange:e=>{n.current.scrollTo({top:0,behavior:"smooth"}),u(e),s()}}),t.jsx(w,{title:"Blur Strength",min:0,max:15,step:1,value:p,onChange:e=>{n.current.scrollTo({top:0,behavior:"smooth"}),f(e),s()}}),t.jsx(w,{title:"Starting Opacity",min:0,max:1,step:.1,value:i,onChange:e=>{n.current.scrollTo({top:0,behavior:"smooth"}),d(e),s()}}),t.jsx(w,{title:"Starting Rotation",min:0,max:10,step:1,value:c,onChange:e=>{n.current.scrollTo({top:0,behavior:"smooth"}),b(e),s()},valueUnit:"°"})]}),t.jsx(A,{data:h}),t.jsx(M,{dependencyList:["gsap"]})]}),t.jsx(O,{children:t.jsx(j,{codeObject:T})}),t.jsx(B,{children:t.jsx($,{...T})})]})};export{Q as default};
