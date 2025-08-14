import{r as s,j as e,g as R,B as I,T as b}from"./index-j7DW7U0N.js";import{T as y,P as A,a as N,C as D,b as E,c as C,d as j}from"./PropTable-Baf4PZpP.js";import{R as X}from"./RefreshButton-BMj2HM2t.js";import{u as Y}from"./useForceRerender-LUtjsLCb.js";import{P as u}from"./PreviewSlider-D0sSZbsU.js";import{C as P}from"./Customize-Dq9g9yhm.js";const F=({patternSize:p=250,patternScaleX:h=1,patternScaleY:m=1,patternRefreshInterval:d=2,patternAlpha:o=15})=>{const f=s.useRef(null);return s.useEffect(()=>{const t=f.current;if(!t)return;const c=t.getContext("2d",{alpha:!0});if(!c)return;let v=0,n;const r=1024,a=()=>{t&&(t.width=r,t.height=r,t.style.width="100vw",t.style.height="100vh")},x=()=>{const S=c.createImageData(r,r),l=S.data;for(let i=0;i<l.length;i+=4){const g=Math.random()*255;l[i]=g,l[i+1]=g,l[i+2]=g,l[i+3]=o}c.putImageData(S,0,0)},w=()=>{v%d===0&&x(),v++,n=window.requestAnimationFrame(w)};return window.addEventListener("resize",a),a(),w(),()=>{window.removeEventListener("resize",a),window.cancelAnimationFrame(n)}},[p,h,m,d,o]),e.jsx("canvas",{className:"noise-overlay",ref:f,style:{imageRendering:"pixelated"}})},L=`import { useRef, useEffect } from 'react';
import './Noise.css';

const Noise = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return <canvas className="noise-overlay" ref={grainRef} style={{ imageRendering: 'pixelated' }} />;
};

export default Noise;`,T=`.noise-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
`,G=`import { useRef, useEffect } from 'react';

const Noise = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return <canvas className="pointer-events-none absolute inset-0 w-full h-full" ref={grainRef} style={{ imageRendering: 'pixelated' }} />;
};

export default Noise;`,M=`import type React from "react"
import { useRef, useEffect } from "react"
import "./Noise.css"

interface NoiseProps {
  patternSize?: number
  patternScaleX?: number
  patternScaleY?: number
  patternRefreshInterval?: number
  patternAlpha?: number
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = grainRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let frame = 0
    let animationId: number
    const canvasSize = 1024

    const resize = () => {
      if (!canvas) return
      canvas.width = canvasSize
      canvas.height = canvasSize
      
      canvas.style.width = '100vw'
      canvas.style.height = '100vh'
    }

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize)
      const data = imageData.data
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = patternAlpha
      }
      
      ctx.putImageData(imageData, 0, 0)
    }

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain()
      }
      frame++
      animationId = window.requestAnimationFrame(loop)
    }

    window.addEventListener("resize", resize)
    resize()
    loop()

    return () => {
      window.removeEventListener("resize", resize)
      window.cancelAnimationFrame(animationId)
    }
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha])

  return <canvas className="noise-overlay" ref={grainRef} style={{ imageRendering: 'pixelated' }} />
}

export default Noise`,q=`import React, { useRef, useEffect } from "react";

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const canvasSize = 1024;
    
    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      className="pointer-events-none absolute top-0 left-0 h-screen w-screen"
      ref={grainRef}
      style={{
        imageRendering: 'pixelated',
      }}
    />
  );
};

export default Noise;`,z={...R("Animations/Noise"),usage:`import Noise from './Noise;'

<div style={{width: '600px', height: '400px', position: 'relative', overflow: 'hidden'}}>
  <Noise
    patternSize={250}
    patternScaleX={1}
    patternScaleY={1}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
</div>`,code:L,css:T,tailwind:G,tsCode:M,tsTailwind:q},J=()=>{const[p,h]=s.useState(250),[m,d]=s.useState(2),[o,f]=s.useState(2),[t,c]=s.useState(15),[v,n]=Y(),r=[{name:"patternSize",type:"number",default:250,description:"Defines the size of the grain pattern."},{name:"patternScaleX",type:"number",default:1,description:"Scaling factor for the X-axis of the grain pattern."},{name:"patternScaleY",type:"number",default:1,description:"Scaling factor for the Y-axis of the grain pattern."},{name:"patternRefreshInterval",type:"number",default:2,description:"Number of frames before the grain pattern refreshes."},{name:"patternAlpha",type:"number",default:15,description:"Opacity of the grain pattern (0-255)."}];return e.jsxs(y,{children:[e.jsxs(A,{children:[e.jsxs(I,{position:"relative",className:"demo-container",background:"#060010",minH:400,overflow:"hidden",children:[e.jsx(b,{color:"#271E37",fontSize:"6rem",fontWeight:900,textAlign:"center",children:"Ooh, edgy!"}),e.jsx(F,{patternSize:p,patternScaleX:m,patternScaleY:o,patternAlpha:t},v),e.jsx(X,{onClick:n})]}),e.jsxs(P,{children:[e.jsx(u,{title:"Pattern Size",min:50,max:500,step:10,value:p,valueUnit:"px",onChange:a=>{h(a),n()}}),e.jsx(u,{title:"Scale X",min:.1,max:5,step:.1,value:m,onChange:a=>{d(a),n()}}),e.jsx(u,{title:"Scale Y",min:.1,max:5,step:.1,value:o,onChange:a=>{f(a),n()}}),e.jsx(u,{title:"Pattern Alpha",min:0,max:25,step:5,value:t,onChange:a=>{c(a),n()}})]}),e.jsx(N,{data:r})]}),e.jsx(D,{children:e.jsx(E,{codeObject:z})}),e.jsx(C,{children:e.jsx(j,{...z})})]})};export{J as default};
