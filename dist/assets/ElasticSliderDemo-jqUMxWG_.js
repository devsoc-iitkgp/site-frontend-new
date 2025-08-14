import{bo as ce,b7 as de,bp as fe,bq as me,br as re,be as ge,bs as pe,bt as he,bu as Ve,bv as ve,ba as we,bw as xe,bx as Re,b8 as Se,by as ye,bz as be,bA as Me,bB as L,bC as Ee,bD as Te,bE as Pe,j as i,an as H,r as z,b3 as _,p as B,bn as E,g as Ie,B as k,bF as Ne,bG as je}from"./index-j7DW7U0N.js";import{R as Ae,e as Xe,T as Ce,P as De,a as Oe,C as Fe,b as ze,c as Be,d as Le}from"./PropTable-Baf4PZpP.js";import{D as He}from"./Dependencies-BSh7s3YA.js";import{u as Ue}from"./use-motion-value-event-VagDUln8.js";const We=(n,e,t)=>{const a=e-n;return((t-n)%a+a)%a+n};function se(n,e){return ce(n)?n[We(0,n.length,e)]:n}class _e{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let a=0;a<this.animations.length;a++)this.animations[a][e]=t}attachTimeline(e){const t=this.animations.map(a=>a.attachTimeline(e));return()=>{t.forEach((a,s)=>{a&&a(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ke extends _e{then(e,t){return this.finished.finally(e).then(()=>{})}}function $(n){return typeof n=="object"&&!Array.isArray(n)}function oe(n,e,t,a){return typeof n=="string"&&$(e)?de(n,t,a):n instanceof NodeList?Array.from(n):Array.isArray(n)?n:[n]}function Ge(n,e,t){return n*(e+1)}function ee(n,e,t,a){return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,n+parseFloat(e)):e==="<"?t:e.startsWith("<")?Math.max(0,t+parseFloat(e.slice(1))):a.get(e)??n}function $e(n,e,t){for(let a=0;a<n.length;a++){const s=n[a];s.at>e&&s.at<t&&(me(n,s),a--)}}function Ke(n,e,t,a,s,c){$e(n,s,c);for(let l=0;l<e.length;l++)n.push({value:e[l],at:fe(s,c,a[l]),easing:se(t,l)})}function Ye(n,e){for(let t=0;t<n.length;t++)n[t]=n[t]/(e+1)}function Je(n,e){return n.at===e.at?n.value===null?1:e.value===null?-1:0:n.at-e.at}const qe="easeInOut";function Qe(n,{defaultTransition:e={},...t}={},a,s){const c=e.duration||.3,l=new Map,g=new Map,y={},f=new Map;let R=0,d=0,T=0;for(let v=0;v<n.length;v++){const o=n[v];if(typeof o=="string"){f.set(o,d);continue}else if(!Array.isArray(o)){f.set(o.name,ee(d,o.at,R,f));continue}let[S,x,h={}]=o;h.at!==void 0&&(d=ee(d,h.at,R,f));let w=0;const r=(m,V,u,I=0,N=0)=>{const p=Ze(m),{delay:U=0,times:b=ge(p),type:W="keyframes",repeat:D,repeatType:wn,repeatDelay:xn=0,...ue}=V;let{ease:P=e.ease||"easeOut",duration:M}=V;const K=typeof U=="function"?U(I,N):U,Y=p.length,J=Ve(W)?W:s==null?void 0:s[W||"keyframes"];if(Y<=2&&J){let j=100;if(Y===2&&tn(p)){const A=p[1]-p[0];j=Math.abs(A)}const O={...ue};M!==void 0&&(O.duration=ve(M));const F=pe(O,j,J);P=F.ease,M=F.duration}M??(M=c);const q=d+K;b.length===1&&b[0]===0&&(b[1]=1);const Q=b.length-p.length;if(Q>0&&he(b,Q),p.length===1&&p.unshift(null),D){M=Ge(M,D);const j=[...p],O=[...b];P=Array.isArray(P)?[...P]:[P];const F=[...P];for(let A=0;A<D;A++){p.push(...j);for(let X=0;X<j.length;X++)b.push(O[X]+(A+1)),P.push(X===0?"linear":se(F,X-1))}Ye(b,D)}const Z=q+M;Ke(u,p,P,b,q,Z),w=Math.max(K+M,w),T=Math.max(Z,T)};if(re(S)){const m=ne(S,g);r(x,h,te("default",m))}else{const m=oe(S,x,a,y),V=m.length;for(let u=0;u<V;u++){x=x,h=h;const I=m[u],N=ne(I,g);for(const p in x)r(x[p],en(h,p),te(p,N),u,V)}}R=d,d+=w}return g.forEach((v,o)=>{for(const S in v){const x=v[S];x.sort(Je);const h=[],w=[],r=[];for(let V=0;V<x.length;V++){const{at:u,value:I,easing:N}=x[V];h.push(I),w.push(we(0,T,u)),r.push(N||"easeOut")}w[0]!==0&&(w.unshift(0),h.unshift(h[0]),r.unshift(qe)),w[w.length-1]!==1&&(w.push(1),h.push(null)),l.has(o)||l.set(o,{keyframes:{},transition:{}});const m=l.get(o);m.keyframes[S]=h,m.transition[S]={...e,duration:T,ease:r,times:w,...t}}}),l}function ne(n,e){return!e.has(n)&&e.set(n,{}),e.get(n)}function te(n,e){return e[n]||(e[n]=[]),e[n]}function Ze(n){return Array.isArray(n)?n:[n]}function en(n,e){return n&&n[e]?{...n,...n[e]}:{...n}}const nn=n=>typeof n=="number",tn=n=>n.every(nn);function an(n,e){return n in e}class rn extends xe{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(an(t,e)){const a=e[t];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return Re()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}}function sn(n){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},t=Se(n)&&!ye(n)?new be(e):new Me(e);t.mount(n),L.set(n,t)}function on(n){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},t=new rn(e);t.mount(n),L.set(n,t)}function ln(n,e){return re(n)||typeof n=="number"||typeof n=="string"&&!$(e)}function le(n,e,t,a){const s=[];if(ln(n,e))s.push(Ee(n,$(e)&&e.default||e,t&&(t.default||t)));else{const c=oe(n,e,a),l=c.length;for(let g=0;g<l;g++){const y=c[g],f=y instanceof Element?sn:on;L.has(y)||f(y);const R=L.get(y),d={...t};"delay"in d&&typeof d.delay=="function"&&(d.delay=d.delay(g,l)),s.push(...Te(R,{...e,transition:d},{}))}}return s}function un(n,e,t){const a=[];return Qe(n,e,t,{spring:Pe}).forEach(({keyframes:c,transition:l},g)=>{a.push(...le(g,c,l))}),a}function cn(n){return Array.isArray(n)&&n.some(Array.isArray)}function dn(n){function e(t,a,s){let c=[];return cn(t)?c=un(t,a,n):c=le(t,a,s,n),new ke(c)}return e}const C=dn(),ae=50;function G({defaultValue:n=50,startingValue:e=0,maxValue:t=100,className:a="",isStepped:s=!1,stepSize:c=1,leftIcon:l=i.jsx(H,{as:Ae}),rightIcon:g=i.jsx(H,{as:Xe})}){return i.jsx("div",{className:`slider-container ${a}`,children:i.jsx(fn,{defaultValue:n,startingValue:e,maxValue:t,isStepped:s,stepSize:c,leftIcon:l,rightIcon:g})})}function fn({defaultValue:n,startingValue:e,maxValue:t,isStepped:a,stepSize:s,leftIcon:c,rightIcon:l}){const[g,y]=z.useState(n),f=z.useRef(null),[R,d]=z.useState("middle"),T=_(0),v=_(0),o=_(1);z.useEffect(()=>{y(n)},[n]),Ue(T,"change",r=>{if(f.current){const{left:m,right:V}=f.current.getBoundingClientRect();let u;r<m?(d("left"),u=m-r):r>V?(d("right"),u=r-V):(d("middle"),u=0),v.jump(mn(u,ae))}});const S=r=>{if(r.buttons>0&&f.current){const{left:m,width:V}=f.current.getBoundingClientRect();let u=e+(r.clientX-m)/V*(t-e);a&&(u=Math.round(u/s)*s),u=Math.min(Math.max(u,e),t),y(u),T.jump(r.clientX)}},x=r=>{S(r),r.currentTarget.setPointerCapture(r.pointerId)},h=()=>{C(v,0,{type:"spring",bounce:.5})},w=()=>{const r=t-e;return r===0?0:(g-e)/r*100};return i.jsxs(i.Fragment,{children:[i.jsxs(B.div,{onHoverStart:()=>C(o,1.2),onHoverEnd:()=>C(o,1),onTouchStart:()=>C(o,1.2),onTouchEnd:()=>C(o,1),style:{scale:o,opacity:E(o,[1,1.2],[.7,1])},className:"slider-wrapper",children:[i.jsx(B.div,{animate:{scale:R==="left"?[1,1.4,1]:1,transition:{duration:.25}},style:{x:E(()=>R==="left"?-v.get()/o.get():0)},children:c}),i.jsx("div",{ref:f,className:"slider-root",onPointerMove:S,onPointerDown:x,onPointerUp:h,children:i.jsx(B.div,{style:{scaleX:E(()=>{if(f.current){const{width:r}=f.current.getBoundingClientRect();return 1+v.get()/r}}),scaleY:E(v,[0,ae],[1,.8]),transformOrigin:E(()=>{if(f.current){const{left:r,width:m}=f.current.getBoundingClientRect();return T.get()<r+m/2?"right":"left"}}),height:E(o,[1,1.2],[6,12]),marginTop:E(o,[1,1.2],[0,-3]),marginBottom:E(o,[1,1.2],[0,-3])},className:"slider-track-wrapper",children:i.jsx("div",{className:"slider-track",children:i.jsx("div",{className:"slider-range",style:{width:`${w()}%`}})})})}),i.jsx(B.div,{animate:{scale:R==="right"?[1,1.4,1]:1,transition:{duration:.25}},style:{x:E(()=>R==="right"?v.get()/o.get():0)},children:l})]}),i.jsx("p",{className:"value-indicator",children:Math.round(g)})]})}function mn(n,e){const t=n/e;return 2*(1/(1+Math.exp(-t))-.5)*e}const gn=`import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@chakra-ui/react";
import { RiVolumeDownFill, RiVolumeUpFill } from "react-icons/ri";

import './ElasticSlider.css';

const MAX_OVERFLOW = 50;

export default function ElasticSlider({
  defaultValue = 50,
  startingValue = 0,
  maxValue = 100,
  className = "",
  isStepped = false,
  stepSize = 1,
  leftIcon = <Icon as={RiVolumeDownFill} />,
  rightIcon = <Icon as={RiVolumeUpFill} />,
}) {
  return (
    <div className={\`slider-container \${className}\`}>
      <Slider
        defaultValue={defaultValue}
        startingValue={startingValue}
        maxValue={maxValue}
        isStepped={isStepped}
        stepSize={stepSize}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />
    </div>
  );
}

function Slider({
  defaultValue,
  startingValue,
  maxValue,
  isStepped,
  stepSize,
  leftIcon,
  rightIcon,
}) {
  const [value, setValue] = useState(defaultValue);
  const sliderRef = useRef(null);
  const [region, setRegion] = useState("middle");
  const clientX = useMotionValue(0);
  const overflow = useMotionValue(0);
  const scale = useMotionValue(1);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useMotionValueEvent(clientX, "change", (latest) => {
    if (sliderRef.current) {
      const { left, right } = sliderRef.current.getBoundingClientRect();
      let newValue;

      if (latest < left) {
        setRegion("left");
        newValue = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newValue = latest - right;
      } else {
        setRegion("middle");
        newValue = 0;
      }

      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  const handlePointerMove = (e) => {
    if (e.buttons > 0 && sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      let newValue = startingValue + ((e.clientX - left) / width) * (maxValue - startingValue);

      if (isStepped) {
        newValue = Math.round(newValue / stepSize) * stepSize;
      }

      newValue = Math.min(Math.max(newValue, startingValue), maxValue);
      setValue(newValue);
      clientX.jump(e.clientX);
    }
  };

  const handlePointerDown = (e) => {
    handlePointerMove(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = () => {
    animate(overflow, 0, { type: "spring", bounce: 0.5 });
  };

  const getRangePercentage = () => {
    const totalRange = maxValue - startingValue;
    if (totalRange === 0) return 0;

    return ((value - startingValue) / totalRange) * 100;
  };

  return (
    <>
      <motion.div
        onHoverStart={() => animate(scale, 1.2)}
        onHoverEnd={() => animate(scale, 1)}
        onTouchStart={() => animate(scale, 1.2)}
        onTouchEnd={() => animate(scale, 1)}
        style={{
          scale,
          opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
        }}
        className="slider-wrapper"
      >
        <motion.div
          animate={{
            scale: region === "left" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "left" ? -overflow.get() / scale.get() : 0,
            ),
          }}
        >
          {leftIcon}
        </motion.div>

        <div
          ref={sliderRef}
          className="slider-root"
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <motion.div
            style={{
              scaleX: useTransform(() => {
                if (sliderRef.current) {
                  const { width } = sliderRef.current.getBoundingClientRect();
                  return 1 + overflow.get() / width;
                }
              }),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
              transformOrigin: useTransform(() => {
                if (sliderRef.current) {
                  const { left, width } = sliderRef.current.getBoundingClientRect();
                  return clientX.get() < left + width / 2 ? "right" : "left";
                }
              }),
              height: useTransform(scale, [1, 1.2], [6, 12]),
              marginTop: useTransform(scale, [1, 1.2], [0, -3]),
              marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
            }}
            className="slider-track-wrapper"
          >
            <div className="slider-track">
              <div
                className="slider-range"
                style={{ width: \`\${getRangePercentage()}%\` }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            scale: region === "right" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "right" ? overflow.get() / scale.get() : 0,
            ),
          }}
        >
          {rightIcon}
        </motion.div>
      </motion.div>
      <p className="value-indicator">{Math.round(value)}</p>
    </>
  );
}

function decay(value, max) {
  if (max === 0) {
    return 0;
  }

  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);

  return sigmoid * max;
}
`,pn=`.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 12rem;
}

.slider-wrapper {
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.slider-root {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 200px;
  flex-grow: 1;
  cursor: grab;
  touch-action: none;
  user-select: none;
  align-items: center;
  padding: 1rem 0;
}

.slider-root:active {
  cursor: grabbing;
}

.slider-track-wrapper {
  display: flex;
  flex-grow: 1;
}

.slider-track {
  position: relative;
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 9999px;
  background-color: rgba(128, 128, 128, 0.4);
}

.slider-range {
  position: absolute;
  height: 100%;
  background-color: #888;
  border-radius: 9999px;
}

.value-indicator {
  color: #808080;
  position: absolute;
  transform: translateY(-1rem);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.icon {
  width: 24px;
  height: 24px;
  color: #888;
}

.icon.dark {
  color: #ddd;
}
`,hn=`import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const MAX_OVERFLOW = 50;

export default function ElasticSlider({
  defaultValue = 50,
  startingValue = 0,
  maxValue = 100,
  className = "",
  isStepped = false,
  stepSize = 1,
  leftIcon = <>-</>,
  rightIcon = <>+</>
}) {
  return (
    <div className={\`flex flex-col items-center justify-center gap-4 w-48 \${className}\`}>
      <Slider
        defaultValue={defaultValue}
        startingValue={startingValue}
        maxValue={maxValue}
        isStepped={isStepped}
        stepSize={stepSize}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />
    </div>
  );
}

function Slider({
  defaultValue,
  startingValue,
  maxValue,
  isStepped,
  stepSize,
  leftIcon,
  rightIcon,
}) {
  const [value, setValue] = useState(defaultValue);
  const sliderRef = useRef(null);
  const [region, setRegion] = useState("middle");
  const clientX = useMotionValue(0);
  const overflow = useMotionValue(0);
  const scale = useMotionValue(1);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useMotionValueEvent(clientX, "change", (latest) => {
    if (sliderRef.current) {
      const { left, right } = sliderRef.current.getBoundingClientRect();
      let newValue;

      if (latest < left) {
        setRegion("left");
        newValue = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newValue = latest - right;
      } else {
        setRegion("middle");
        newValue = 0;
      }

      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  const handlePointerMove = (e) => {
    if (e.buttons > 0 && sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      let newValue = startingValue + ((e.clientX - left) / width) * (maxValue - startingValue);

      if (isStepped) {
        newValue = Math.round(newValue / stepSize) * stepSize;
      }

      newValue = Math.min(Math.max(newValue, startingValue), maxValue);
      setValue(newValue);
      clientX.jump(e.clientX);
    }
  };

  const handlePointerDown = (e) => {
    handlePointerMove(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = () => {
    animate(overflow, 0, { type: "spring", bounce: 0.5 });
  };

  const getRangePercentage = () => {
    const totalRange = maxValue - startingValue;
    if (totalRange === 0) return 0;
    return ((value - startingValue) / totalRange) * 100;
  };

  return (
    <>
      <motion.div
        onHoverStart={() => animate(scale, 1.2)}
        onHoverEnd={() => animate(scale, 1)}
        onTouchStart={() => animate(scale, 1.2)}
        onTouchEnd={() => animate(scale, 1)}
        style={{
          scale,
          opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
        }}
        className="flex w-full touch-none select-none items-center justify-center gap-4"
      >
        <motion.div
          animate={{
            scale: region === "left" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "left" ? -overflow.get() / scale.get() : 0,
            ),
          }}
        >
          {leftIcon}
        </motion.div>

        <div
          ref={sliderRef}
          className="relative flex w-full max-w-xs flex-grow cursor-grab touch-none select-none items-center py-4"
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <motion.div
            style={{
              scaleX: useTransform(() => {
                if (sliderRef.current) {
                  const { width } = sliderRef.current.getBoundingClientRect();
                  return 1 + overflow.get() / width;
                }
              }),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
              transformOrigin: useTransform(() => {
                if (sliderRef.current) {
                  const { left, width } = sliderRef.current.getBoundingClientRect();
                  return clientX.get() < left + width / 2 ? "right" : "left";
                }
              }),
              height: useTransform(scale, [1, 1.2], [6, 12]),
              marginTop: useTransform(scale, [1, 1.2], [0, -3]),
              marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
            }}
            className="flex flex-grow"
          >
            <div className="relative h-full flex-grow overflow-hidden rounded-full bg-gray-400">
              <div
                className="absolute h-full bg-gray-500 rounded-full"
                style={{ width: \`\${getRangePercentage()}%\` }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            scale: region === "right" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "right" ? overflow.get() / scale.get() : 0,
            ),
          }}
        >
          {rightIcon}
        </motion.div>
      </motion.div>
      <p className="absolute text-gray-400 transform -translate-y-4 text-xs font-medium tracking-wide">
        {Math.round(value)}
      </p>
    </>
  );
}

function decay(value, max) {
  if (max === 0) {
    return 0;
  }

  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);

  return sigmoid * max;
}`,Vn=`import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { Icon } from "@chakra-ui/react";
import { RiVolumeDownFill, RiVolumeUpFill } from "react-icons/ri";

import "./ElasticSlider.css";

const MAX_OVERFLOW = 50;

interface ElasticSliderProps {
  defaultValue?: number;
  startingValue?: number;
  maxValue?: number;
  className?: string;
  isStepped?: boolean;
  stepSize?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const ElasticSlider: React.FC<ElasticSliderProps> = ({
  defaultValue = 50,
  startingValue = 0,
  maxValue = 100,
  className = "",
  isStepped = false,
  stepSize = 1,
  leftIcon = <Icon as={RiVolumeDownFill} />,
  rightIcon = <Icon as={RiVolumeUpFill} />,
}) => {
  return (
    <div className={\`slider-container \${className}\`}>
      <Slider
        defaultValue={defaultValue}
        startingValue={startingValue}
        maxValue={maxValue}
        isStepped={isStepped}
        stepSize={stepSize}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />
    </div>
  );
};

interface SliderProps {
  defaultValue: number;
  startingValue: number;
  maxValue: number;
  isStepped: boolean;
  stepSize: number;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({
  defaultValue,
  startingValue,
  maxValue,
  isStepped,
  stepSize,
  leftIcon,
  rightIcon,
}) => {
  const [value, setValue] = useState<number>(defaultValue);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [region, setRegion] = useState<"left" | "middle" | "right">("middle");
  const clientX = useMotionValue(0);
  const overflow = useMotionValue(0);
  const scale = useMotionValue(1);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useMotionValueEvent(clientX, "change", (latest: number) => {
    if (sliderRef.current) {
      const { left, right } = sliderRef.current.getBoundingClientRect();
      let newValue: number;
      if (latest < left) {
        setRegion("left");
        newValue = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newValue = latest - right;
      } else {
        setRegion("middle");
        newValue = 0;
      }
      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons > 0 && sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      let newValue =
        startingValue +
        ((e.clientX - left) / width) * (maxValue - startingValue);
      if (isStepped) {
        newValue = Math.round(newValue / stepSize) * stepSize;
      }
      newValue = Math.min(Math.max(newValue, startingValue), maxValue);
      setValue(newValue);
      clientX.jump(e.clientX);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    handlePointerMove(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = () => {
    animate(overflow, 0, { type: "spring", bounce: 0.5 });
  };

  const getRangePercentage = (): number => {
    const totalRange = maxValue - startingValue;
    if (totalRange === 0) return 0;
    return ((value - startingValue) / totalRange) * 100;
  };

  return (
    <>
      <motion.div
        onHoverStart={() => animate(scale, 1.2)}
        onHoverEnd={() => animate(scale, 1)}
        onTouchStart={() => animate(scale, 1.2)}
        onTouchEnd={() => animate(scale, 1)}
        style={{
          scale,
          opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
        }}
        className="slider-wrapper"
      >
        <motion.div
          animate={{
            scale: region === "left" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "left" ? -overflow.get() / scale.get() : 0
            ),
          }}
        >
          {leftIcon}
        </motion.div>

        <div
          ref={sliderRef}
          className="slider-root"
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <motion.div
            style={{
              scaleX: useTransform(() => {
                if (sliderRef.current) {
                  const { width } = sliderRef.current.getBoundingClientRect();
                  return 1 + overflow.get() / width;
                }
                return 1;
              }),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
              transformOrigin: useTransform(() => {
                if (sliderRef.current) {
                  const { left, width } =
                    sliderRef.current.getBoundingClientRect();
                  return clientX.get() < left + width / 2 ? "right" : "left";
                }
                return "center";
              }),
              height: useTransform(scale, [1, 1.2], [6, 12]),
              marginTop: useTransform(scale, [1, 1.2], [0, -3]),
              marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
            }}
            className="slider-track-wrapper"
          >
            <div className="slider-track">
              <div
                className="slider-range"
                style={{ width: \`\${getRangePercentage()}%\` }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            scale: region === "right" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "right" ? overflow.get() / scale.get() : 0
            ),
          }}
        >
          {rightIcon}
        </motion.div>
      </motion.div>
      <p className="value-indicator">{Math.round(value)}</p>
    </>
  );
};

function decay(value: number, max: number): number {
  if (max === 0) {
    return 0;
  }
  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);
  return sigmoid * max;
}

export default ElasticSlider;
`,vn=`import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

const MAX_OVERFLOW = 50;

interface ElasticSliderProps {
  defaultValue?: number;
  startingValue?: number;
  maxValue?: number;
  className?: string;
  isStepped?: boolean;
  stepSize?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const ElasticSlider: React.FC<ElasticSliderProps> = ({
  defaultValue = 50,
  startingValue = 0,
  maxValue = 100,
  className = "",
  isStepped = false,
  stepSize = 1,
  leftIcon = <>-</>,
  rightIcon = <>+</>,
}) => {
  return (
    <div
      className={\`flex flex-col items-center justify-center gap-4 w-48 \${className}\`}
    >
      <Slider
        defaultValue={defaultValue}
        startingValue={startingValue}
        maxValue={maxValue}
        isStepped={isStepped}
        stepSize={stepSize}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />
    </div>
  );
};

interface SliderProps {
  defaultValue: number;
  startingValue: number;
  maxValue: number;
  isStepped: boolean;
  stepSize: number;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({
  defaultValue,
  startingValue,
  maxValue,
  isStepped,
  stepSize,
  leftIcon,
  rightIcon,
}) => {
  const [value, setValue] = useState<number>(defaultValue);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [region, setRegion] = useState<"left" | "middle" | "right">("middle");
  const clientX = useMotionValue(0);
  const overflow = useMotionValue(0);
  const scale = useMotionValue(1);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useMotionValueEvent(clientX, "change", (latest: number) => {
    if (sliderRef.current) {
      const { left, right } = sliderRef.current.getBoundingClientRect();
      let newValue: number;
      if (latest < left) {
        setRegion("left");
        newValue = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newValue = latest - right;
      } else {
        setRegion("middle");
        newValue = 0;
      }
      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons > 0 && sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      let newValue =
        startingValue +
        ((e.clientX - left) / width) * (maxValue - startingValue);
      if (isStepped) {
        newValue = Math.round(newValue / stepSize) * stepSize;
      }
      newValue = Math.min(Math.max(newValue, startingValue), maxValue);
      setValue(newValue);
      clientX.jump(e.clientX);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    handlePointerMove(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = () => {
    animate(overflow, 0, { type: "spring", bounce: 0.5 });
  };

  const getRangePercentage = (): number => {
    const totalRange = maxValue - startingValue;
    if (totalRange === 0) return 0;
    return ((value - startingValue) / totalRange) * 100;
  };

  return (
    <>
      <motion.div
        onHoverStart={() => animate(scale, 1.2)}
        onHoverEnd={() => animate(scale, 1)}
        onTouchStart={() => animate(scale, 1.2)}
        onTouchEnd={() => animate(scale, 1)}
        style={{
          scale,
          opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
        }}
        className="flex w-full touch-none select-none items-center justify-center gap-4"
      >
        <motion.div
          animate={{
            scale: region === "left" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "left" ? -overflow.get() / scale.get() : 0
            ),
          }}
        >
          {leftIcon}
        </motion.div>

        <div
          ref={sliderRef}
          className="relative flex w-full max-w-xs flex-grow cursor-grab touch-none select-none items-center py-4"
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <motion.div
            style={{
              scaleX: useTransform(() => {
                if (sliderRef.current) {
                  const { width } = sliderRef.current.getBoundingClientRect();
                  return 1 + overflow.get() / width;
                }
                return 1;
              }),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
              transformOrigin: useTransform(() => {
                if (sliderRef.current) {
                  const { left, width } =
                    sliderRef.current.getBoundingClientRect();
                  return clientX.get() < left + width / 2 ? "right" : "left";
                }
                return "center";
              }),
              height: useTransform(scale, [1, 1.2], [6, 12]),
              marginTop: useTransform(scale, [1, 1.2], [0, -3]),
              marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
            }}
            className="flex flex-grow"
          >
            <div className="relative h-full flex-grow overflow-hidden rounded-full bg-gray-400">
              <div
                className="absolute h-full bg-gray-500 rounded-full"
                style={{ width: \`\${getRangePercentage()}%\` }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            scale: region === "right" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "right" ? overflow.get() / scale.get() : 0
            ),
          }}
        >
          {rightIcon}
        </motion.div>
      </motion.div>
      <p className="absolute text-gray-400 transform -translate-y-4 text-xs font-medium tracking-wide">
        {Math.round(value)}
      </p>
    </>
  );
};

function decay(value: number, max: number): number {
  if (max === 0) {
    return 0;
  }
  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);
  return sigmoid * max;
}

export default ElasticSlider;
`,ie={...Ie("Components/ElasticSlider"),installation:"npm install motion",usage:`import ElasticSlider from './ElasticSlider'
  
<ElasticSlider
  leftIcon={<>...your icon...</>}
  rightIcon={<>...your icon...</>}
  startingValue={500}
  defaultValue={750}
  maxValue={1000}
  isStepped
  stepSize={10}
/>`,code:gn,css:pn,tailwind:hn,tsCode:Vn,tsTailwind:vn},Mn=()=>{const n=[{name:"defaultValue",type:"number",default:50,description:"The initial value of the slider. It can be less than startingValue or greater than maxValue."},{name:"startingValue",type:"number",default:0,description:"The starting point for the slider's range, e.g., startingValue=100 allows the slider to start at 100."},{name:"maxValue",type:"number",default:100,description:"The maximum value the slider can reach."},{name:"className",type:"string",default:"",description:"Allows passing custom class names to style the component."},{name:"isStepped",type:"boolean",default:!1,description:"Enables or disables stepped increments on the slider."},{name:"stepSize",type:"number",default:1,description:"The size of the increments for the slider when isStepped is enabled."},{name:"leftIcon",type:"JSX.Element",default:"<>-</>",description:"Custom JSX or HTML code to display on the left side of the slider."},{name:"rightIcon",type:"JSX.Element",default:"<>+</>",description:"Custom JSX or HTML code to display on the right side of the slider."}];return i.jsxs(Ce,{children:[i.jsxs(De,{children:[i.jsx("h2",{className:"demo-title-extra",children:"Default"}),i.jsx(k,{position:"relative",className:"demo-container",minH:200,children:i.jsx(G,{})}),i.jsx("h2",{className:"demo-title-extra",children:"Steps"}),i.jsx(k,{position:"relative",className:"demo-container",minH:200,children:i.jsx(G,{isStepped:!0,stepSize:10})}),i.jsx("h2",{className:"demo-title-extra",children:"Custom Values & Icons"}),i.jsx(k,{position:"relative",className:"demo-container",minH:200,children:i.jsx(G,{leftIcon:i.jsx(H,{as:je}),rightIcon:i.jsx(H,{as:Ne}),startingValue:500,defaultValue:750,maxValue:1e3})}),i.jsx(Oe,{data:n}),i.jsx(He,{dependencyList:["motion"]})]}),i.jsx(Fe,{children:i.jsx(ze,{codeObject:ie})}),i.jsx(Be,{children:i.jsx(Le,{...ie})})]})};export{Mn as default};
