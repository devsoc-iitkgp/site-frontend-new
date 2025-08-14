import{g as D,r as s,o as L,a as w,j as e,S as V,B as G,u as F,F as U,b as M,T as $}from"./index-j7DW7U0N.js";import{T as H,P as O,a as W,C as B,b as z,c as I,d as _}from"./PropTable-Baf4PZpP.js";import{u as q}from"./useForceRerender-LUtjsLCb.js";import{R as J}from"./RefreshButton-BMj2HM2t.js";import{D as K}from"./Dependencies-BSh7s3YA.js";import{C as Q}from"./Customize-Dq9g9yhm.js";import{P as A}from"./PreviewSlider-D0sSZbsU.js";import{P as X}from"./PreviewSwitch-_xo3rdWG.js";const Y=`import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    
    animationCompletedRef.current = false;

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    let splitter;
    try {
      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      });
    } catch (error) {
      console.error("Failed to create SplitText:", error);
      return;
    }

    let targets;
    switch (splitType) {
      case "lines":
        targets = splitter.lines;
        break;
      case "words":
        targets = splitter.words;
        break;
      case "chars":
        targets = splitter.chars;
        break;
      default:
        targets = splitter.chars;
    }

    if (!targets || targets.length === 0) {
      console.warn("No targets found for SplitText animation");
      splitter.revert();
      return;
    }

    targets.forEach((t) => {
      t.style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\\d+(?:\\.\\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
    const sign = marginValue < 0 ? \`-=\${Math.abs(marginValue)}\${marginUnit}\` : \`+=\${marginValue}\${marginUnit}\`;
    const start = \`top \${startPct}%\${sign}\`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
        onToggle: (self) => {
          scrollTriggerRef.current = self;
        },
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      gsap.killTweensOf(targets);
      if (splitter) {
        splitter.revert();
      }
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={\`split-parent \${className}\`}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
`,Z=`import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    
    animationCompletedRef.current = false;

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    let splitter;
    try {
      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      });
    } catch (error) {
      console.error("Failed to create SplitText:", error);
      return;
    }

    let targets;
    switch (splitType) {
      case "lines":
        targets = splitter.lines;
        break;
      case "words":
        targets = splitter.words;
        break;
      case "chars":
        targets = splitter.chars;
        break;
      default:
        targets = splitter.chars;
    }

    if (!targets || targets.length === 0) {
      console.warn("No targets found for SplitText animation");
      splitter.revert();
      return;
    }

    targets.forEach((t) => {
      t.style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\\d+(?:\\.\\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
    const sign = marginValue < 0 ? \`-=\${Math.abs(marginValue)}\${marginUnit}\` : \`+=\${marginValue}\${marginUnit}\`;
    const start = \`top \${startPct}%\${sign}\`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
        onToggle: (self) => {
          scrollTriggerRef.current = self;
        },
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      gsap.killTweensOf(targets);
      if (splitter) {
        splitter.revert();
      }
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={\`split-parent overflow-hidden inline-block whitespace-normal \${className}\`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
`,ee=`import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    
    animationCompletedRef.current = false;

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    let splitter: GSAPSplitText;
    try {
      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      });
    } catch (error) {
      console.error("Failed to create SplitText:", error);
      return;
    }

    let targets: Element[];
    switch (splitType) {
      case "lines":
        targets = splitter.lines;
        break;
      case "words":
        targets = splitter.words;
        break;
      case "chars":
        targets = splitter.chars;
        break;
      default:
        targets = splitter.chars;
    }

    if (!targets || targets.length === 0) {
      console.warn("No targets found for SplitText animation");
      splitter.revert();
      return;
    }

    targets.forEach((t) => {
      (t as HTMLElement).style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\\d+(?:\\.\\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
    const sign = marginValue < 0 ? \`-=\${Math.abs(marginValue)}\${marginUnit}\` : \`+=\${marginValue}\${marginUnit}\`;
    const start = \`top \${startPct}%\${sign}\`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
        onToggle: (self) => {
          scrollTriggerRef.current = self;
        },
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      gsap.killTweensOf(targets);
      if (splitter) {
        splitter.revert();
      }
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={\`split-parent \${className}\`}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
`,ne=`import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    
    animationCompletedRef.current = false;

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    let splitter: GSAPSplitText;
    try {
      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      });
    } catch (error) {
      console.error("Failed to create SplitText:", error);
      return;
    }

    let targets: Element[];
    switch (splitType) {
      case "lines":
        targets = splitter.lines;
        break;
      case "words":
        targets = splitter.words;
        break;
      case "chars":
        targets = splitter.chars;
        break;
      default:
        targets = splitter.chars;
    }

    if (!targets || targets.length === 0) {
      console.warn("No targets found for SplitText animation");
      splitter.revert();
      return;
    }

    targets.forEach((t) => {
      (t as HTMLElement).style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\\d+(?:\\.\\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
    const sign = marginValue < 0 ? \`-=\${Math.abs(marginValue)}\${marginUnit}\` : \`+=\${marginValue}\${marginUnit}\`;
    const start = \`top \${startPct}%\${sign}\`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
        onToggle: (self) => {
          scrollTriggerRef.current = self;
        },
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      gsap.killTweensOf(targets);
      if (splitter) {
        splitter.revert();
      }
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={\`split-parent overflow-hidden inline-block whitespace-normal \${className}\`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
`,v={...D("TextAnimations/SplitText"),installation:"npm install gsap",usage:`import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

<SplitText
  text="Hello, GSAP!"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>`,code:Y,tailwind:Z,tsCode:ee,tsTailwind:ne};w.registerPlugin(V,L);const te=({text:l,className:b="",delay:m=100,duration:x=.6,ease:o="power3.out",splitType:c="chars",from:i={opacity:0,y:40},to:u={opacity:1,y:0},threshold:f=.1,rootMargin:T="-100px",textAlign:y="center",onLetterAnimationComplete:p})=>{const d=s.useRef(null),r=s.useRef(!1),g=s.useRef(null);return s.useEffect(()=>{if(typeof window>"u"||!d.current||!l)return;const n=d.current;r.current=!1;const P=c==="lines";P&&(n.style.position="relative");let a;try{a=new L(n,{type:c,absolute:P,linesClass:"split-line"})}catch(h){console.error("Failed to create SplitText:",h);return}let t;switch(c){case"lines":t=a.lines;break;case"words":t=a.words;break;case"chars":t=a.chars;break;default:t=a.chars}if(!t||t.length===0){console.warn("No targets found for SplitText animation"),a.revert();return}t.forEach(h=>{h.style.willChange="transform, opacity"});const E=(1-f)*100,S=/^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(T),C=S?parseFloat(S[1]):0,k=S&&S[2]||"px",j=C<0?`-=${Math.abs(C)}${k}`:`+=${C}${k}`,N=`top ${E}%${j}`,R=w.timeline({scrollTrigger:{trigger:n,start:N,toggleActions:"play none none none",once:!0,onToggle:h=>{g.current=h}},smoothChildTiming:!0,onComplete:()=>{r.current=!0,w.set(t,{...u,clearProps:"willChange",immediateRender:!0}),p==null||p()}});return R.set(t,{...i,immediateRender:!1,force3D:!0}),R.to(t,{...u,duration:x,ease:o,stagger:m/1e3,force3D:!0}),()=>{R.kill(),g.current&&(g.current.kill(),g.current=null),w.killTweensOf(t),a&&a.revert()}},[l,m,x,o,c,i,u,f,T,p]),e.jsx("p",{ref:d,className:`split-parent overflow-hidden inline-block whitespace-normal ${b}`,style:{textAlign:y,wordWrap:"break-word"},children:l})},ge=()=>{const[l,b]=s.useState(70),[m,x]=s.useState(2),[o,c]=s.useState("elastic.out(1, 0.3)"),[i,u]=s.useState("chars"),[f,T]=s.useState(.1),[y,p]=s.useState(!0),[d,r]=q(),g=[{name:"text",type:"string",default:'""',description:"The text content to animate."},{name:"className",type:"string",default:'""',description:"Additional class names to style the component."},{name:"delay",type:"number",default:"100",description:"Delay between animations for each letter (in ms)."},{name:"duration",type:"number",default:"0.6",description:"Duration of each letter animation (in seconds)."},{name:"ease",type:"string",default:'"power3.out"',description:"GSAP easing function for the animation."},{name:"splitType",type:"string",default:'"chars"',description:'Split type: "chars", "words", "lines", or "words, chars".'},{name:"from",type:"object",default:"{ opacity: 0, y: 40 }",description:"Initial GSAP properties for each letter/word."},{name:"to",type:"object",default:"{ opacity: 1, y: 0 }",description:"Target GSAP properties for each letter/word."},{name:"threshold",type:"number",default:"0.1",description:"Intersection threshold to trigger the animation (0-1)."},{name:"rootMargin",type:"string",default:'"-100px"',description:"Root margin for the ScrollTrigger."},{name:"textAlign",type:"string",default:'"center"',description:"Text alignment: 'left', 'center', 'right', etc."},{name:"onLetterAnimationComplete",type:"function",default:"undefined",description:"Callback function when all animations complete."}];return e.jsxs(H,{children:[e.jsxs(O,{children:[e.jsxs(G,{position:"relative",className:"demo-container",minH:400,overflow:"hidden",children:[e.jsx(J,{onClick:r}),e.jsx(te,{text:"Hello, you!",delay:l,duration:m,ease:o,splitType:i,threshold:f,className:"split-text-demo",onLetterAnimationComplete:y?()=>F("✅ Animation Finished!"):void 0},d)]}),e.jsxs(Q,{children:[e.jsxs(U,{gap:2,wrap:"wrap",children:[e.jsxs(M,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{u(i==="chars"?"words":i==="words"?"lines":"chars"),r()},children:["Split Type ",e.jsxs($,{color:"#a1a1aa",children:[" ",i]})]}),e.jsxs(M,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{c(o==="power3.out"?"bounce.out":o==="bounce.out"?"elastic.out(1, 0.3)":"power3.out"),r()},children:["Ease: ",e.jsxs($,{color:"#a1a1aa",children:[" ",o]})]})]}),e.jsx(X,{title:"Show Completion Toast",isChecked:y,onChange:n=>{p(n),r()}}),e.jsx(A,{title:"Stagger Delay (ms)",min:10,max:500,step:10,value:l,onChange:n=>{b(n),r()}}),e.jsx(A,{title:"Duration (s)",min:.1,max:2,step:.1,value:m,onChange:n=>{x(n),r()}}),e.jsx(A,{title:"Threshold",min:.1,max:1,step:.1,value:f,onChange:n=>{T(n),r()}})]}),e.jsx(W,{data:g}),e.jsx(K,{dependencyList:["gsap"]})]}),e.jsx(B,{children:e.jsx(z,{codeObject:v})}),e.jsx(I,{children:e.jsx(_,{...v})})]})};export{ge as default};
