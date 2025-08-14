import{g as G,r as t,a as A,j as e,B as V,b as P,T as H,F as j,c as _}from"./index-j7DW7U0N.js";import{T as q,P as Z,a as W,C as J,b as K,c as Q,d as U}from"./PropTable-Baf4PZpP.js";import{D as ee}from"./Dependencies-BSh7s3YA.js";import{C as ne}from"./Customize-Dq9g9yhm.js";import{P as i}from"./PreviewSlider-D0sSZbsU.js";const te=`"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import "./BlobCursor.css";

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#5227FF",
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.6, 0.6, 0.6],
  shadowColor = "rgba(0,0,0,0.75)",
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = "blob",
  filterStdDeviation = 30,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 100,
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (e) => {
      const { left, top } = updateOffset();
      const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
      const y = "clientY" in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      className="blob-container"
      style={{ zIndex }}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {useFilter && (
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={filterStdDeviation}
            />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="blob-main"
        style={{ filter: useFilter ? \`url(#\${filterId})\` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (blobsRef.current[i] = el)}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: \`\${shadowOffsetX}px \${shadowOffsetY}px \${shadowBlur}px 0 \${shadowColor}\`,
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === "circle" ? "50%" : "0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`,oe=`.blob-container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.blob-main {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  user-select: none;
  cursor: default;
}

.blob {
  position: absolute;
  will-change: transform;
  transform: translate(-50%, -50%);
}

.inner-dot {
  position: absolute;
}`,se=`"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#5227FF",
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.6, 0.6, 0.6],
  shadowColor = "rgba(0,0,0,0.75)",
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = "blob",
  filterStdDeviation = 30,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 100,
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (e) => {
      const { left, top } = updateOffset();
      const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
      const y = "clientY" in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative top-0 left-0 w-full h-full"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={filterStdDeviation}
            />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default"
        style={{ filter: useFilter ? \`url(#\${filterId})\` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (blobsRef.current[i] = el)}
            className="absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === "circle" ? "50%" : "0",
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: \`\${shadowOffsetX}px \${shadowOffsetY}px \${shadowBlur}px 0 \${shadowColor}\`,
            }}
          >
            <div
              className="absolute"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === "circle" ? "50%" : "0",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`,re=`"use client";

import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import "./BlobCursor.css";

export interface BlobCursorProps {
  blobType?: "circle" | "square";
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#5227FF",
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.6, 0.6, 0.6],
  shadowColor = "rgba(0,0,0,0.75)",
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = "blob",
  filterStdDeviation = 30,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 100,
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
      const { left, top } = updateOffset();
      const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
      const y = "clientY" in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      className="blob-container"
      style={{ zIndex }}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {useFilter && (
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={filterStdDeviation}
            />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="blob-main"
        style={{ filter: useFilter ? \`url(#\${filterId})\` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              blobsRef.current[i] = el;
            }}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: \`\${shadowOffsetX}px \${shadowOffsetY}px \${shadowBlur}px 0 \${shadowColor}\`,
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === "circle" ? "50%" : "0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`,ie=`"use client";

import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export interface BlobCursorProps {
  blobType?: "circle" | "square";
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#5227FF",
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.6, 0.6, 0.6],
  shadowColor = "rgba(0,0,0,0.75)",
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = "blob",
  filterStdDeviation = 30,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 100,
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
      const { left, top } = updateOffset();
      const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
      const y = "clientY" in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative top-0 left-0 w-full h-full"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={filterStdDeviation}
            />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default"
        style={{ filter: useFilter ? \`url(#\${filterId})\` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (blobsRef.current[i] = el)}
            className="absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === "circle" ? "50%" : "0",
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: \`\${shadowOffsetX}px \${shadowOffsetY}px \${shadowBlur}px 0 \${shadowColor}\`,
            }}
          >
            <div
              className="absolute"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === "circle" ? "50%" : "0",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`,$={...G("Animations/BlobCursor"),installation:"npm install gsap",usage:`import BlobCursor from './BlobCursor';

<BlobCursor
  blobType="circle"
  fillColor="#5227FF"
  trailCount={3}
  sizes={[60, 125, 75]}
  innerSizes={[20, 35, 25]}
  innerColor="rgba(255,255,255,0.8)"
  opacities={[0.6, 0.6, 0.6]}
  shadowColor="rgba(0,0,0,0.75)"
  shadowBlur={5}
  shadowOffsetX={10}
  shadowOffsetY={10}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.1}
  slowDuration={0.5}
  zIndex={100}
/>`,code:te,css:oe,tailwind:se,tsCode:re,tsTailwind:ie};function le({blobType:c="circle",fillColor:L="#5227FF",trailCount:y=3,sizes:d=[60,125,75],innerSizes:r=[20,35,25],innerColor:I="rgba(255,255,255,0.8)",opacities:l=[.6,.6,.6],shadowColor:S="rgba(0,0,0,0.75)",shadowBlur:a=5,shadowOffsetX:z=10,shadowOffsetY:R=10,filterId:D="blob",filterStdDeviation:u=30,filterColorMatrixValues:E="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",useFilter:w=!0,fastDuration:O=.1,slowDuration:x=.5,fastEase:B="power3.out",slowEase:C="power1.out",zIndex:F=100}){const p=t.useRef(null),M=t.useRef([]),f=t.useCallback(()=>{if(!p.current)return{left:0,top:0};const o=p.current.getBoundingClientRect();return{left:o.left,top:o.top}},[]),T=t.useCallback(o=>{const{left:s,top:b}=f(),k="clientX"in o?o.clientX:o.touches[0].clientX,X="clientY"in o?o.clientY:o.touches[0].clientY;M.current.forEach((h,n)=>{if(!h)return;const m=n===0;A.to(h,{x:k-s,y:X-b,duration:m?O:x,ease:m?B:C})})},[f,O,x,B,C]);return t.useEffect(()=>{const o=()=>f();return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[f]),e.jsxs("div",{ref:p,onMouseMove:T,onTouchMove:T,className:"relative top-0 left-0 w-full h-full",style:{zIndex:F},children:[w&&e.jsx("svg",{className:"absolute w-0 h-0",children:e.jsxs("filter",{id:D,children:[e.jsx("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:u}),e.jsx("feColorMatrix",{in:"blur",values:E})]})}),e.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default",style:{filter:w?`url(#${D})`:void 0},children:Array.from({length:y}).map((o,s)=>e.jsx("div",{ref:b=>M.current[s]=b,className:"absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2",style:{width:d[s],height:d[s],borderRadius:c==="circle"?"50%":"0",backgroundColor:L,opacity:l[s],boxShadow:`${z}px ${R}px ${a}px 0 ${S}`},children:e.jsx("div",{className:"absolute",style:{width:r[s],height:r[s],top:(d[s]-r[s])/2,left:(d[s]-r[s])/2,backgroundColor:I,borderRadius:c==="circle"?"50%":"0"}})},s))})]})}const pe=()=>{const[c,L]=t.useState("circle"),[y,d]=t.useState("#5227FF"),[r,I]=t.useState(3),[l,S]=t.useState([60,125,75]),[a,z]=t.useState([20,35,25]),[R,D]=t.useState("rgba(255,255,255,0.8)"),[u,E]=t.useState([.6,.6,.6]),[w,O]=t.useState("rgba(0,0,0,0.75)"),[x,B]=t.useState(5),[C,F]=t.useState(10),[p,M]=t.useState(10),[f,T]=t.useState(.1),[o,s]=t.useState(.5),[b,k]=t.useState(100),X=[{name:"blobType",type:"'circle' | 'square'",default:"'circle'",description:"Shape of the blobs."},{name:"fillColor",type:"string",default:"'#5227FF'",description:"Background color of each blob."},{name:"trailCount",type:"number",default:"3",description:"How many trailing blobs."},{name:"sizes",type:"number[]",default:"[60, 125, 75]",description:"Sizes (px) of each blob. Length must be ≥ trailCount."},{name:"innerSizes",type:"number[]",default:"[20, 35, 25]",description:"Sizes (px) of inner dots. Length must be ≥ trailCount."},{name:"innerColor",type:"string",default:"'rgba(255,255,255,0.8)'",description:"Background color of the inner dot."},{name:"opacities",type:"number[]",default:"[0.6, 0.6, 0.6]",description:"Opacity of each blob. Length ≥ trailCount."},{name:"shadowColor",type:"string",default:"'rgba(0,0,0,0.75)'",description:"Box-shadow color."},{name:"shadowBlur",type:"number",default:"5",description:"Box-shadow blur radius (px)."},{name:"shadowOffsetX",type:"number",default:"10",description:"Box-shadow X offset (px)."},{name:"shadowOffsetY",type:"number",default:"10",description:"Box-shadow Y offset (px)."},{name:"filterId",type:"string",default:"'blob'",description:"Optional custom filter ID (for multiple instances)."},{name:"filterStdDeviation",type:"number",default:"30",description:"feGaussianBlur stdDeviation for SVG filter."},{name:"filterColorMatrixValues",type:"string",default:"'1 0 0 ...'",description:"feColorMatrix values for SVG filter."},{name:"useFilter",type:"boolean",default:"true",description:"Enable the SVG filter."},{name:"fastDuration",type:"number",default:"0.1",description:"GSAP duration for the lead blob."},{name:"slowDuration",type:"number",default:"0.5",description:"GSAP duration for the following blobs."},{name:"fastEase",type:"string",default:"'power3.out'",description:"GSAP ease for the lead blob."},{name:"slowEase",type:"string",default:"'power1.out'",description:"GSAP ease for the following blobs."},{name:"zIndex",type:"number",default:"100",description:"CSS z-index of the whole component."}],h=(n,m,Y,N)=>{const g=[...N];g[m]=n,Y(g)};return e.jsxs(q,{children:[e.jsxs(Z,{children:[e.jsx(V,{height:600,position:"relative",className:"demo-container",overflow:"hidden",children:e.jsx(le,{blobType:c,fillColor:y,trailCount:r,sizes:l,innerSizes:a,innerColor:R,opacities:u,shadowColor:w,shadowBlur:x,shadowOffsetX:C,shadowOffsetY:p,fastDuration:f,slowDuration:o,zIndex:b})}),e.jsxs(ne,{children:[e.jsxs(P,{mb:2,fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>L(c==="circle"?"square":"circle"),children:["Blob Type: ",e.jsxs(H,{color:"#a1a1aa",children:[" ",c]})]}),e.jsxs(j,{direction:"column",mt:2,children:[e.jsxs(j,{alignItems:"center",fontSize:"xs",h:8,children:["Fill Color:  ",e.jsx("input",{type:"color",value:y,style:{height:"22px",outline:"none",border:"1px solid #999",width:"50px",background:"transparent"},onChange:n=>d(n.target.value)})]}),e.jsxs(j,{alignItems:"center",fontSize:"xs",h:8,children:["Inner Color:  ",e.jsx("input",{type:"color",value:R,style:{height:"22px",outline:"none",border:"1px solid #999",width:"50px",background:"transparent"},onChange:n=>D(n.target.value)})]}),e.jsxs(j,{alignItems:"center",fontSize:"xs",h:8,children:["Shadow Color:  ",e.jsx("input",{type:"color",value:w,style:{height:"22px",outline:"none",border:"1px solid #999",width:"50px",background:"transparent"},onChange:n=>O(n.target.value)})]})]}),e.jsx(i,{title:"Trail Count",min:1,max:5,step:1,value:r,onChange:n=>{I(n);const m=Array(n).fill(0).map((g,v)=>l[v]||l[l.length-1]||60),Y=Array(n).fill(0).map((g,v)=>a[v]||a[a.length-1]||20),N=Array(n).fill(0).map((g,v)=>u[v]||u[u.length-1]||.6);S(m),z(Y),E(N)}}),e.jsx(i,{title:"Lead Blob Size",min:10,max:200,step:1,value:l[0],onChange:n=>h(n,0,S,l),isDisabled:r<1}),e.jsx(i,{title:"Lead Inner Dot Size",min:1,max:100,step:1,value:a[0],onChange:n=>h(n,0,z,a),isDisabled:r<1}),e.jsx(i,{title:"Lead Blob Opacity",min:.1,max:1,step:.05,value:u[0],onChange:n=>h(n,0,E,u),isDisabled:r<1}),e.jsx(i,{title:"Shadow Blur",min:0,max:50,step:1,value:x,onChange:B}),e.jsx(i,{title:"Shadow Offset X",min:-50,max:50,step:1,value:C,onChange:F}),e.jsx(i,{title:"Shadow Offset Y",min:-50,max:50,step:1,value:p,onChange:M}),e.jsx(i,{title:"Fast Duration (Lead)",min:.01,max:2,step:.01,value:f,onChange:T}),e.jsx(i,{title:"Slow Duration (Trail)",min:.01,max:3,step:.01,value:o,onChange:s}),e.jsx(i,{title:"Z-Index",min:0,max:1e3,step:10,value:b,onChange:k})]}),e.jsxs("p",{className:"demo-extra-info",style:{marginTop:"20px"},children:[e.jsx(_,{position:"relative",top:"-1px",mr:"2"})," SVG filters are not fully supported on Safari. Performance may vary."]}),e.jsx(W,{data:X}),e.jsx(ee,{dependencyList:["gsap"]})]}),e.jsx(J,{children:e.jsx(K,{codeObject:$})}),e.jsx(Q,{children:e.jsx(U,{...$})})]})};export{pe as default};
