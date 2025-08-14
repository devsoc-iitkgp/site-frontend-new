import{r as d,j as e,g as b,B as P,T,F as M,I as U}from"./index-j7DW7U0N.js";import{T as R,P as j,a as A,C as G,b as H,c as D,d as N}from"./PropTable-Baf4PZpP.js";import{R as _}from"./RefreshButton-BMj2HM2t.js";import{D as W}from"./Dependencies-BSh7s3YA.js";import{u as $}from"./useForceRerender-LUtjsLCb.js";import{P as h}from"./PreviewSlider-D0sSZbsU.js";import{P as k}from"./PreviewSwitch-_xo3rdWG.js";import{C as I}from"./Customize-Dq9g9yhm.js";import{u as B,C as V,a as C}from"./react-three-fiber.esm-UKojRSAj.js";import{s as L}from"./shaderMaterial-CSBewI76.js";import{T as O,C as w,N as S,c as z,V as q}from"./three.module-Df1A5Gfx.js";function J(s,i,r=.9){return i*r+s*(1-r)}const K=s=>Math.sqrt(1-Math.pow(s-1,2));class Q{constructor({size:i=256,maxAge:r=750,radius:t=.3,intensity:o=.2,interpolate:l=0,smoothing:c=0,minForce:n=.3,blend:a="screen",ease:u=K}={}){this.size=i,this.maxAge=r,this.radius=t,this.intensity=o,this.ease=u,this.interpolate=l,this.smoothing=c,this.minForce=n,this.blend=a,this.trail=[],this.force=0,this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size;const i=this.canvas.getContext("2d");if(i===null)throw new Error("2D not available");this.ctx=i,this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new O(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height=`${this.canvas.width}px`}update(i){this.clear(),this.trail.forEach((r,t)=>{r.age+=i*1e3,r.age>this.maxAge&&this.trail.splice(t,1)}),this.trail.length||(this.force=0),this.trail.forEach(r=>{this.drawTouch(r)}),this.texture.needsUpdate=!0}clear(){this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(i){const r=this.trail[this.trail.length-1];if(r){const t=r.x-i.x,o=r.y-i.y,l=t*t+o*o,c=Math.max(this.minForce,Math.min(l*1e4,1));if(this.force=J(c,this.force,this.smoothing),this.interpolate){const n=Math.ceil(l/Math.pow(this.radius*.5/this.interpolate,2));if(n>1)for(let a=1;a<n;a++)this.trail.push({x:r.x-t/n*a,y:r.y-o/n*a,age:0,force:c})}}this.trail.push({x:i.x,y:i.y,age:0,force:this.force})}drawTouch(i){const r={x:i.x*this.size,y:(1-i.y)*this.size};let t=1;i.age<this.maxAge*.3?t=this.ease(i.age/(this.maxAge*.3)):t=this.ease(1-(i.age-this.maxAge*.3)/(this.maxAge*.7)),t*=i.force,this.ctx.globalCompositeOperation=this.blend;const o=this.size*this.radius*t,l=this.ctx.createRadialGradient(r.x,r.y,Math.max(0,o*.25),r.x,r.y,Math.max(0,o));l.addColorStop(0,`rgba(255, 255, 255, ${this.intensity})`),l.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.beginPath(),this.ctx.fillStyle=l,this.ctx.arc(r.x,r.y,Math.max(0,o),0,Math.PI*2),this.ctx.fill()}}function X(s={}){const{size:i,maxAge:r,radius:t,intensity:o,interpolate:l,smoothing:c,minForce:n,blend:a,ease:u}=s,p=d.useMemo(()=>new Q(s),[i,r,t,o,l,c,n,a,u]);B((m,x)=>void p.update(x));const f=d.useCallback(m=>p.addTouch(m.uv),[p]);return[p.texture,f]}const Y=({id:s="goo-filter",strength:i=10})=>e.jsx("svg",{className:"goo-filter-container",children:e.jsx("defs",{children:e.jsxs("filter",{id:s,children:[e.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:i,result:"blur"}),e.jsx("feColorMatrix",{in:"blur",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),e.jsx("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),Z=L({resolution:new q,mouseTrail:null,gridSize:100,pixelColor:new w("#ffffff")},`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  `);function ee({gridSize:s,trailSize:i,maxAge:r,interpolate:t,easingFunction:o,pixelColor:l}){const c=C(m=>m.size),n=C(m=>m.viewport),a=d.useMemo(()=>new Z,[]);a.uniforms.pixelColor.value=new w(l);const[u,p]=X({size:512,radius:i,maxAge:r,interpolate:t||.1,ease:o||(m=>m)});u&&(u.minFilter=S,u.magFilter=S,u.wrapS=z,u.wrapT=z);const f=Math.max(n.width,n.height)/2;return e.jsxs("mesh",{scale:[f,f,1],onPointerMove:p,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("primitive",{object:a,gridSize:s,resolution:[c.width*n.dpr,c.height*n.dpr],mouseTrail:u})]})}function re({gridSize:s=40,trailSize:i=.1,maxAge:r=250,interpolate:t=5,easingFunction:o=p=>p,canvasProps:l={},glProps:c={antialias:!1,powerPreference:"high-performance",alpha:!0},gooeyFilter:n,color:a="#ffffff",className:u=""}){return e.jsxs(e.Fragment,{children:[n&&e.jsx(Y,{id:n.id,strength:n.strength}),e.jsx(V,{...l,gl:c,className:`pixel-canvas ${u}`,style:n&&{filter:`url(#${n.id})`},children:e.jsx(ee,{gridSize:s,trailSize:i,maxAge:r,interpolate:t,easingFunction:o,pixelColor:a})})]})}const ie=`/* eslint-disable react/no-unknown-property */
import { useMemo } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { shaderMaterial, useTrailTexture } from '@react-three/drei'
import * as THREE from 'three'

import './PixelTrail.css';

const GooeyFilter = ({
  id = "goo-filter",
  strength = 10,
}) => {
  return (
    <svg className='goo-filter-container'>
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff')
  },
  \`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  \`,
  \`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  \`
)

function Scene({
  gridSize,
  trailSize,
  maxAge,
  interpolate,
  easingFunction,
  pixelColor
}) {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)

  const dotMaterial = useMemo(() => new DotMaterial(), [])
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor)

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x) => x)
  })

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  )
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter,
  color = '#ffffff',
  className = ''
}) {
  return (
    <>
      {gooeyFilter && (
        <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />
      )}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={\`pixel-canvas \${className}\`}
        style={gooeyFilter && { filter: \`url(#\${gooeyFilter.id})\` }}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  )
}
`,ne=`.goo-filter-container {
  position: absolute;
  overflow: hidden;
  z-index: 1;
}

.pixel-canvas {
  position: absolute;
  z-index: 1;
}`,te=`/* eslint-disable react/no-unknown-property */
import { useMemo } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { shaderMaterial, useTrailTexture } from '@react-three/drei'
import * as THREE from 'three'

const GooeyFilter = ({
  id = "goo-filter",
  strength = 10,
}) => {
  return (
    <svg className='absolute overflow-hidden z-1'>
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff')
  },
  \`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  \`,
  \`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  \`
)

function Scene({
  gridSize,
  trailSize,
  maxAge,
  interpolate,
  easingFunction,
  pixelColor
}) {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)

  const dotMaterial = useMemo(() => new DotMaterial(), [])
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor)

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x) => x)
  })

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  )
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter,
  color = '#ffffff',
  className = ''
}) {
  return (
    <>
      {gooeyFilter && (
        <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />
      )}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={\`absolute z-1 \${className}\`}
        style={gooeyFilter && { filter: \`url(#\${gooeyFilter.id})\` }}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  )
}
`,oe=`/* eslint-disable react/no-unknown-property */
import React, { useMemo } from "react";
import { Canvas, useThree, CanvasProps, ThreeEvent } from "@react-three/fiber";
import { shaderMaterial, useTrailTexture } from "@react-three/drei";
import * as THREE from "three";

import './PixelTrail.css';

interface GooeyFilterProps {
  id?: string;
  strength?: number;
}

interface DotMaterialUniforms {
  resolution: THREE.Vector2;
  mouseTrail: THREE.Texture | null;
  gridSize: number;
  pixelColor: THREE.Color;
}

interface SceneProps {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  pixelColor: string;
}

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: Partial<CanvasProps>;
  glProps?: WebGLContextAttributes & { powerPreference?: string };
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
}

const GooeyFilter: React.FC<GooeyFilterProps> = ({
  id = "goo-filter",
  strength = 10,
}) => {
  return (
    <svg className="goo-filter-container">
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color("#ffffff"),
  },
  /* glsl vertex shader */ \`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  \`,
  /* glsl fragment shader */ \`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  \`
);

function Scene({
  gridSize,
  trailSize,
  maxAge,
  interpolate,
  easingFunction,
  pixelColor,
}: SceneProps) {
  const size = useThree((s) => s.size);
  const viewport = useThree((s) => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x: number) => x),
  }) as [THREE.Texture | null, (e: ThreeEvent<PointerEvent>) => void];

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x: number) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: "high-performance",
    alpha: true,
  },
  gooeyFilter,
  color = "#ffffff",
  className = "",
}: PixelTrailProps) {
  return (
    <>
      {gooeyFilter && (
        <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />
      )}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={\`pixel-canvas \${className}\`}
        style={gooeyFilter ? { filter: \`url(#\${gooeyFilter.id})\` } : undefined}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  );
}
`,ae=`/* eslint-disable react/no-unknown-property */
import React, { useMemo } from "react";
import { Canvas, useThree, CanvasProps, ThreeEvent } from "@react-three/fiber";
import { shaderMaterial, useTrailTexture } from "@react-three/drei";
import * as THREE from "three";

interface GooeyFilterProps {
  id?: string;
  strength?: number;
}

interface DotMaterialUniforms {
  resolution: THREE.Vector2;
  mouseTrail: THREE.Texture | null;
  gridSize: number;
  pixelColor: THREE.Color;
}

interface SceneProps {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  pixelColor: string;
}

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: Partial<CanvasProps>;
  glProps?: WebGLContextAttributes & { powerPreference?: string };
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
}

const GooeyFilter: React.FC<GooeyFilterProps> = ({
  id = "goo-filter",
  strength = 10,
}) => {
  return (
    <svg className="absolute overflow-hidden z-1">
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color("#ffffff"),
  },
  /* glsl vertex shader */ \`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  \`,
  /* glsl fragment shader */ \`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  \`
);

function Scene({
  gridSize,
  trailSize,
  maxAge,
  interpolate,
  easingFunction,
  pixelColor,
}: SceneProps) {
  const size = useThree((s) => s.size);
  const viewport = useThree((s) => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x: number) => x),
  }) as [THREE.Texture | null, (e: ThreeEvent<PointerEvent>) => void];

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x: number) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: "high-performance",
    alpha: true,
  },
  gooeyFilter,
  color = "#ffffff",
  className = "",
}: PixelTrailProps) {
  return (
    <>
      {gooeyFilter && (
        <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />
      )}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={\`absolute z-1 \${className}\`}
        style={gooeyFilter ? { filter: \`url(#\${gooeyFilter.id})\` } : undefined}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  );
}
`,y={...b("Animations/PixelTrail"),installation:"npm install three @react-three/fiber @react-three/drei",usage:`import PixelTrail from './PixelTrail';

<div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <PixelTrail
    gridSize={50}
    trailSize={0.1}
    maxAge={250}
    interpolate={5}
    color="#fff"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
  />
</div>`,code:ie,css:ne,tailwind:te,tsCode:oe,tsTailwind:ae},xe=()=>{const[s,i]=d.useState(50),[r,t]=d.useState(.1),[o,l]=d.useState(250),[c,n]=d.useState(5),[a,u]=d.useState("#5227FF"),[p,f]=d.useState(!0),[m,x]=d.useState(2),[E,v]=$(),F=[{name:"gridSize",type:"number",default:"40",description:"Number of pixels in grid."},{name:"trailSize",type:"number",default:"0.1",description:"Size of each trail dot."},{name:"maxAge",type:"number",default:"500",description:"Duration of the trail effect."},{name:"interpolate",type:"number",default:"5",description:"Interpolation factor for pointer movement."},{name:"color",type:"string",default:"#ffffff",description:"Pixel color."},{name:"gooeyFilter",type:"object",default:"{ id: 'custom-goo-filter', strength: 5 }",description:"Configuration for gooey filter."}];return e.jsxs(R,{children:[e.jsxs(j,{children:[e.jsxs(P,{position:"relative",className:"demo-container",h:500,p:0,overflow:"hidden",children:[e.jsx(_,{onClick:v}),e.jsx(re,{gridSize:s,trailSize:r,maxAge:o,interpolate:c,color:a,gooeyFilter:p?{id:"custom-goo-filter",strength:m}:void 0},E),e.jsx(T,{position:"absolute",zIndex:0,fontSize:"clamp(2rem, 6vw, 6rem)",color:"#271E37",fontWeight:900,children:"Move Cursor."})]}),e.jsxs(I,{children:[e.jsx(h,{title:"Grid Size",min:10,max:100,step:1,value:s,onChange:g=>{i(g),v()}}),e.jsx(h,{title:"Trail Size",min:.05,max:.5,step:.01,value:r,onChange:g=>{t(g),v()}}),e.jsx(h,{title:"Max Age",min:100,max:1e3,step:50,value:o,onChange:g=>{l(g),v()}}),e.jsx(h,{title:"Interpolate",min:0,max:10,step:.1,value:c,onChange:g=>{n(g),v()}}),e.jsxs(M,{gap:4,align:"center",mt:4,children:[e.jsx(T,{fontSize:"sm",children:"Color"}),e.jsx(U,{type:"color",value:a,onChange:g=>{u(g.target.value),v()},width:"50px"}),e.jsx(T,{fontSize:"sm",children:a})]}),e.jsx(k,{title:"Gooey Filter",isChecked:p,onChange:g=>{f(g),v()}}),p&&e.jsx(h,{title:"Gooey Strength",min:1,max:20,step:1,value:m,onChange:g=>{x(g),v()}})]}),e.jsx(A,{data:F}),e.jsx(W,{dependencyList:["@react-three/fiber","@react-three/drei","three"]})]}),e.jsx(G,{children:e.jsx(H,{codeObject:y})}),e.jsx(D,{children:e.jsx(N,{...y})})]})};export{xe as default};
