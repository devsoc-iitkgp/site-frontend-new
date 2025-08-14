import{b7 as ge,b8 as xe,b0 as x,b9 as P,ba as he,bb as ve,bc as Se,bd as Ce,be,bf as Ne,bg as _,bh as Ve,bi as Re,b6 as we,bj as R,r as p,a$ as We,bk as X,bl as Ee,b3 as q,j as a,bm as Te,bn as A,p as Fe,g as Me,B as $,F as Le}from"./index-j7DW7U0N.js";import{T as Oe,P as Be,a as Pe,C as je,b as ze,c as He,d as ke}from"./PropTable-Baf4PZpP.js";import{D as Xe}from"./Dependencies-BSh7s3YA.js";import{P as Ae}from"./PreviewSlider-D0sSZbsU.js";import{u as $e}from"./use-motion-value-event-VagDUln8.js";import{C as Ye}from"./Customize-Dq9g9yhm.js";const W=new WeakMap;let m;const Q=(e,n,s)=>(t,r)=>r&&r[0]?r[0][e+"Size"]:xe(t)&&"getBBox"in t?t.getBBox()[n]:t[s],Ie=Q("inline","width","offsetWidth"),De=Q("block","height","offsetHeight");function Ge({target:e,borderBoxSize:n}){var s;(s=W.get(e))==null||s.forEach(t=>{t(e,{get width(){return Ie(e,n)},get height(){return De(e,n)}})})}function Ke(e){e.forEach(Ge)}function Ue(){typeof ResizeObserver>"u"||(m=new ResizeObserver(Ke))}function Je(e,n){m||Ue();const s=ge(e);return s.forEach(t=>{let r=W.get(t);r||(r=new Set,W.set(t,r)),r.add(n),m==null||m.observe(t)}),()=>{s.forEach(t=>{const r=W.get(t);r==null||r.delete(n),r!=null&&r.size||m==null||m.unobserve(t)})}}const E=new Set;let S;function _e(){S=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};E.forEach(n=>n(e))},window.addEventListener("resize",S)}function qe(e){return E.add(e),S||_e(),()=>{E.delete(e),!E.size&&typeof S=="function"&&(window.removeEventListener("resize",S),S=void 0)}}function Qe(e,n){return typeof e=="function"?qe(e):Je(e,n)}function Z(e,n){let s;const t=()=>{const{currentTime:r}=n,o=(r===null?0:r.value)/100;s!==o&&e(o),s=o};return x.preUpdate(t,!0),()=>P(t)}const Ze=50,Y=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),en=()=>({time:0,x:Y(),y:Y()}),nn={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function I(e,n,s,t){const r=s[n],{length:l,position:o}=nn[n],i=r.current,u=s.time;r.current=e[`scroll${o}`],r.scrollLength=e[`scroll${l}`]-e[`client${l}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=he(0,r.scrollLength,r.current);const c=t-u;r.velocity=c>Ze?0:ve(r.current-i,c)}function tn(e,n,s){I(e,"x",n,s),I(e,"y",n,s),n.time=s}function sn(e,n){const s={x:0,y:0};let t=e;for(;t&&t!==n;)if(Se(t))s.x+=t.offsetLeft,s.y+=t.offsetTop,t=t.offsetParent;else if(t.tagName==="svg"){const r=t.getBoundingClientRect();t=t.parentElement;const l=t.getBoundingClientRect();s.x+=r.left-l.left,s.y+=r.top-l.top}else if(t instanceof SVGGraphicsElement){const{x:r,y:l}=t.getBBox();s.x+=r,s.y+=l;let o=null,i=t.parentNode;for(;!o;)i.tagName==="svg"&&(o=i),i=t.parentNode;t=o}else break;return s}const B={start:0,center:.5,end:1};function D(e,n,s=0){let t=0;if(e in B&&(e=B[e]),typeof e=="string"){const r=parseFloat(e);e.endsWith("px")?t=r:e.endsWith("%")?e=r/100:e.endsWith("vw")?t=r/100*document.documentElement.clientWidth:e.endsWith("vh")?t=r/100*document.documentElement.clientHeight:e=r}return typeof e=="number"&&(t=n*e),s+t}const rn=[0,0];function ln(e,n,s,t){let r=Array.isArray(e)?e:rn,l=0,o=0;return typeof e=="number"?r=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?r=e.split(" "):r=[e,B[e]?e:"0"]),l=D(r[0],s,t),o=D(r[1],n),l-o}const on={All:[[0,0],[1,1]]},an={x:0,y:0};function cn(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function un(e,n,s){const{offset:t=on.All}=s,{target:r=e,axis:l="y"}=s,o=l==="y"?"height":"width",i=r!==e?sn(r,e):an,u=r===e?{width:e.scrollWidth,height:e.scrollHeight}:cn(r),c={width:e.clientWidth,height:e.clientHeight};n[l].offset.length=0;let d=!n[l].interpolate;const y=t.length;for(let g=0;g<y;g++){const h=ln(t[g],c[o],u[o],i[l]);!d&&h!==n[l].interpolatorOffsets[g]&&(d=!0),n[l].offset[g]=h}d&&(n[l].interpolate=Ce(n[l].offset,be(t),{clamp:!1}),n[l].interpolatorOffsets=[...n[l].offset]),n[l].progress=Ne(0,1,n[l].interpolate(n[l].current))}function pn(e,n=e,s){if(s.x.targetOffset=0,s.y.targetOffset=0,n!==e){let t=n;for(;t&&t!==e;)s.x.targetOffset+=t.offsetLeft,s.y.targetOffset+=t.offsetTop,t=t.offsetParent}s.x.targetLength=n===e?n.scrollWidth:n.clientWidth,s.y.targetLength=n===e?n.scrollHeight:n.clientHeight,s.x.containerLength=e.clientWidth,s.y.containerLength=e.clientHeight}function fn(e,n,s,t={}){return{measure:r=>{pn(e,t.target,s),tn(e,s,r),(t.offset||t.target)&&un(e,s,t)},notify:()=>n(s)}}const b=new WeakMap,G=new WeakMap,O=new WeakMap,K=e=>e===document.scrollingElement?window:e;function ee(e,{container:n=document.scrollingElement,...s}={}){if(!n)return _;let t=O.get(n);t||(t=new Set,O.set(n,t));const r=en(),l=fn(n,e,r,s);if(t.add(l),!b.has(n)){const i=()=>{for(const y of t)y.measure(Ve.timestamp);x.preUpdate(u)},u=()=>{for(const y of t)y.notify()},c=()=>x.read(i);b.set(n,c);const d=K(n);window.addEventListener("resize",c,{passive:!0}),n!==document.documentElement&&G.set(n,Qe(n,c)),d.addEventListener("scroll",c,{passive:!0}),c()}const o=b.get(n);return x.read(o,!1,!0),()=>{var c;P(o);const i=O.get(n);if(!i||(i.delete(l),i.size))return;const u=b.get(n);b.delete(n),u&&(K(n).removeEventListener("scroll",u),(c=G.get(n))==null||c(),window.removeEventListener("resize",u))}}const U=new Map;function mn(e){const n={value:0},s=ee(t=>{n.value=t[e.axis].progress*100},e);return{currentTime:n,cancel:s}}function ne({source:e,container:n,...s}){const{axis:t}=s;e&&(n=e);const r=U.get(n)??new Map;U.set(n,r);const l=s.target??"self",o=r.get(l)??{},i=t+(s.offset??[]).join(",");return o[i]||(o[i]=!s.target&&Re()?new ScrollTimeline({source:n,axis:t}):mn({container:n,...s})),o[i]}function dn(e,n){const s=ne(n);return e.attachTimeline({timeline:n.target?void 0:s,observe:t=>(t.pause(),Z(r=>{t.time=t.duration*r},s))})}function yn(e){return e.length===2}function gn(e,n){return yn(e)?ee(s=>{e(s[n.axis].progress,s)},n):Z(e,ne(n))}function xn(e,{axis:n="y",container:s=document.scrollingElement,...t}={}){if(!s)return _;const r={axis:n,container:s,...t};return typeof e=="function"?gn(e,r):dn(e,r)}const hn=()=>({scrollX:R(0),scrollY:R(0),scrollXProgress:R(0),scrollYProgress:R(0)}),w=e=>e?!e.current:!1;function vn({container:e,target:n,...s}={}){const t=we(hn),r=p.useRef(null),l=p.useRef(!1),o=p.useCallback(()=>(r.current=xn((i,{x:u,y:c})=>{t.scrollX.set(u.current),t.scrollXProgress.set(u.progress),t.scrollY.set(c.current),t.scrollYProgress.set(c.progress)},{...s,container:(e==null?void 0:e.current)||void 0,target:(n==null?void 0:n.current)||void 0}),()=>{var i;(i=r.current)==null||i.call(r)}),[e,n,JSON.stringify(s.offset)]);return We(()=>{if(l.current=!1,w(e)||w(n)){l.current=!0;return}else return o()},[o]),p.useEffect(()=>{if(l.current)return X(!w(e)),X(!w(n)),o()},[o]),t}function Sn(e){const n=p.useRef(0),{isStatic:s}=p.useContext(Ee);p.useEffect(()=>{if(s)return;const t=({timestamp:r,delta:l})=>{n.current||(n.current=r),e(r-n.current,l)};return x.update(t,!0),()=>P(t)},[e])}function Cn(e){const n=q(e.getVelocity()),s=()=>{const t=e.getVelocity();n.set(t),t&&x.update(s)};return $e(e,"change",()=>{x.update(s,!1,!0)}),n}function bn(e){const[n,s]=p.useState(0);return p.useLayoutEffect(()=>{function t(){e.current&&s(e.current.offsetWidth)}return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[e]),n}const Nn=({scrollContainerRef:e,texts:n=[],velocity:s=100,className:t="",damping:r=50,stiffness:l=400,numCopies:o=6,velocityMapping:i={input:[0,1e3],output:[0,5]},parallaxClassName:u="parallax",scrollerClassName:c="scroller",parallaxStyle:d,scrollerStyle:y})=>{function g({children:h,baseVelocity:N=s,scrollContainerRef:j,className:te="",damping:se,stiffness:re,numCopies:le,velocityMapping:v,parallaxClassName:oe,scrollerClassName:ie,parallaxStyle:ae,scrollerStyle:ce}){const T=q(0),ue=j?{container:j}:{},{scrollY:pe}=vn(ue),fe=Cn(pe),me=Te(fe,{damping:se??50,stiffness:re??400}),F=A(me,(v==null?void 0:v.input)||[0,1e3],(v==null?void 0:v.output)||[0,5],{clamp:!1}),z=p.useRef(null),H=bn(z);function de(f,M,C){const L=M-f;return((C-f)%L+L)%L+f}const ye=A(T,f=>H===0?"0px":`${de(-H,0,f)}px`),V=p.useRef(1);Sn((f,M)=>{let C=V.current*N*(M/1e3);F.get()<0?V.current=-1:F.get()>0&&(V.current=1),C+=V.current*C*F.get(),T.set(T.get()+C)});const k=[];for(let f=0;f<le;f++)k.push(a.jsx("span",{className:te,ref:f===0?z:null,children:h},f));return a.jsx("div",{className:oe,style:ae,children:a.jsx(Fe.div,{className:ie,style:{x:ye,...ce},children:k})})}return a.jsx("section",{children:n.map((h,N)=>a.jsxs(g,{className:t,baseVelocity:N%2!==0?-s:s,scrollContainerRef:e,damping:r,stiffness:l,numCopies:o,velocityMapping:i,parallaxClassName:u,scrollerClassName:c,parallaxStyle:d,scrollerStyle:y,children:[h," "]},N))})},Vn=`import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import "./ScrollVelocity.css";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return \`\${wrap(-copyWidth, 0, v)}px\`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span className={className} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div
          className={scrollerClassName}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
`,Rn=`.parallax {
  position: relative;
  overflow: hidden;
}

.scroller {
  display: flex;
  white-space: nowrap;
  text-align: center;
  font-family: sans-serif;
  font-size: 2.25rem;
  font-weight: bold;
  letter-spacing: -0.02em;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
}

.scroller span {
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .scroller {
    font-size: 5rem;
    line-height: 5rem;
  }
}`,wn=`import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return \`\${wrap(-copyWidth, 0, v)}px\`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < (numCopies ?? 1); i++) {
      spans.push(
        <span
          className={\`flex-shrink-0 \${className}\`}
          key={i}
          ref={i === 0 ? copyRef : null}
        >
          {children}
        </span>
      );
    }

    return (
      <div
        className={\`\${parallaxClassName} relative overflow-hidden\`}
        style={parallaxStyle}
      >
        <motion.div
          className={\`\${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]\`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
`,Wn=`import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import "./ScrollVelocity.css";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  texts: string[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }: VelocityTextProps) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min: number, max: number, v: number): number {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return \`\${wrap(-copyWidth, 0, v)}px\`;
    });

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < numCopies!; i++) {
      spans.push(
        <span className={className} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div
          className={scrollerClassName}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text: string, index: number) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
`,En=`import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  texts: string[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }: VelocityTextProps) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min: number, max: number, v: number): number {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return \`\${wrap(-copyWidth, 0, v)}px\`;
    });

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < numCopies!; i++) {
      spans.push(
        <span
          className={\`flex-shrink-0 \${className}\`}
          key={i}
          ref={i === 0 ? copyRef : null}
        >
          {children}
        </span>
      );
    }

    return (
      <div
        className={\`\${parallaxClassName} relative overflow-hidden\`}
        style={parallaxStyle}
      >
        <motion.div
          className={\`\${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]\`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text: string, index: number) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
`,J={...Me("TextAnimations/ScrollVelocity"),installation:"npm install motion",usage:`import ScrollVelocity from './ScrollVelocity';
  
<ScrollVelocity
  texts={['React Bits', 'Scroll Down']} 
  velocity={velocity} 
  className="custom-scroll-text"
/>`,code:Vn,css:Rn,tailwind:wn,tsCode:Wn,tsTailwind:En},jn=()=>{const[e,n]=p.useState(100),s=[{name:"scrollContainerRef",type:"React.RefObject<HTMLElement>",default:"undefined",description:"Optional ref for a custom scroll container to track scroll position."},{name:"texts",type:"string[]",default:"[]",description:"Array of strings to display as scrolling text."},{name:"velocity",type:"number",default:"100",description:"Base velocity for scrolling; sign is flipped for odd indexed texts."},{name:"className",type:"string",default:'""',description:"CSS class applied to each text copy (span)."},{name:"damping",type:"number",default:"50",description:"Damping value for the spring animation."},{name:"stiffness",type:"number",default:"400",description:"Stiffness value for the spring animation."},{name:"numCopies",type:"number",default:"6",description:"Number of copies of the text rendered for a continuous scrolling effect."},{name:"velocityMapping",type:"{ input: number[]; output: number[] }",default:"{ input: [0, 1000], output: [0, 5] }",description:"Mapping from scroll velocity to a movement multiplier for dynamic scrolling."},{name:"parallaxClassName",type:"string",default:'"parallax"',description:"CSS class for the parallax container."},{name:"scrollerClassName",type:"string",default:'"scroller"',description:"CSS class for the scroller container."},{name:"parallaxStyle",type:"React.CSSProperties",default:"undefined",description:"Inline styles for the parallax container."},{name:"scrollerStyle",type:"React.CSSProperties",default:"undefined",description:"Inline styles for the scroller container."}];return a.jsxs(Oe,{children:[a.jsxs(Be,{children:[a.jsx($,{position:"relative",className:"demo-container",h:600,maxH:600,overflow:"hidden",children:a.jsx(Le,{position:"relative",justifyContent:"center",alignItems:"center",children:a.jsx(Nn,{texts:["React Bits","Scroll Down"],velocity:e,className:"custom-scroll-text"})})}),a.jsx(Ye,{children:a.jsx(Ae,{title:"Velocity",min:10,max:500,step:10,value:e,onChange:t=>{n(t)}})}),a.jsx(Pe,{data:s}),a.jsx(Xe,{dependencyList:["motion"]}),a.jsx($,{mb:"50vh"})]}),a.jsx(je,{children:a.jsx(ze,{codeObject:J})}),a.jsx(He,{children:a.jsx(ke,{...J})})]})};export{jn as default};
