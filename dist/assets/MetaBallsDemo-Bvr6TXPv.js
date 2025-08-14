import{g as ln,r as p,R as sn,C as cn,k as un,V as F,P as mn,M as pn,e as fn,j as e,B as dn,F as hn,T as vn,I as gn}from"./index-j7DW7U0N.js";import{T as xn,P as bn,a as Cn,C as yn,b as Bn,c as Mn,d as zn}from"./PropTable-Baf4PZpP.js";import{D as wn}from"./Dependencies-BSh7s3YA.js";import{C as Pn}from"./Customize-Dq9g9yhm.js";import{P as w}from"./PreviewSlider-D0sSZbsU.js";import{P as Sn}from"./PreviewSwitch-_xo3rdWG.js";const Fn=`import { useEffect, useRef } from "react";
import {
  Renderer,
  Program,
  Mesh,
  Triangle,
  Transform,
  Vec3,
  Camera,
} from "ogl";

import "./MetaBalls.css";

function parseHexColor(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [r, g, b];
}

function fract(x) {
  return x - Math.floor(x);
}

function hash31(p) {
  let r = [p * 0.1031, p * 0.1030, p * 0.0973].map(fract);
  const r_yzx = [r[1], r[2], r[0]];
  const dotVal = r[0] * (r_yzx[0] + 33.33) +
    r[1] * (r_yzx[1] + 33.33) +
    r[2] * (r_yzx[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    r[i] = fract(r[i] + dotVal);
  }
  return r;
}

function hash33(v) {
  let p = [v[0] * 0.1031, v[1] * 0.1030, v[2] * 0.0973].map(fract);
  const p_yxz = [p[1], p[0], p[2]];
  const dotVal = p[0] * (p_yxz[0] + 33.33) +
    p[1] * (p_yxz[1] + 33.33) +
    p[2] * (p_yxz[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    p[i] = fract(p[i] + dotVal);
  }
  const p_xxy = [p[0], p[0], p[1]];
  const p_yxx = [p[1], p[0], p[0]];
  const p_zyx = [p[2], p[1], p[0]];
  const result = [];
  for (let i = 0; i < 3; i++) {
    result[i] = fract((p_xxy[i] + p_yxx[i]) * p_zyx[i]);
  }
  return result;
}

const vertex = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragment = \`#version 300 es
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
out vec4 outColor;
const float PI = 3.14159265359;

float getMetaBallValue(vec2 c, float r, vec2 p) {
  vec2 d = p - c;
  float dist2 = dot(d, d);
  return (r * r) / dist2;
}

void main() {
  vec2 fc = gl_FragCoord.xy;
  float scale = iAnimationSize / iResolution.y;
  vec2 coord = (fc - iResolution.xy * 0.5) * scale;
  vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;
  float m1 = 0.0;
  for (int i = 0; i < 50; i++) {
    if (i >= iBallCount) break;
    m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);
  }
  float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
  float total = m1 + m2;
  float f = smoothstep(-1.0, 1.0, (total - 1.3) / min(1.0, fwidth(total)));
  vec3 cFinal = vec3(0.0);
  if (total > 0.0) {
    float alpha1 = m1 / total;
    float alpha2 = m2 / total;
    cFinal = iColor * alpha1 + iCursorColor * alpha2;
  }
  outColor = vec4(cFinal * f, enableTransparency ? f : 1.0);
}
\`;

const MetaBalls = ({
  className = "",
  color = "#ffffff",
  speed = 0.3,
  enableMouseInteraction = true,
  hoverSmoothness = 0.05,
  animationSize = 30,
  ballCount = 15,
  clumpFactor = 1,
  cursorBallSize = 3,
  cursorBallColor = "#ffffff",
  enableTransparency = true,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dpr = 1;
    const renderer = new Renderer({ dpr, alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, enableTransparency ? 0 : 1);
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, {
      left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 10,
    });
    camera.position.z = 1;

    const geometry = new Triangle(gl);
    const [r1, g1, b1] = parseHexColor(color);
    const [r2, g2, b2] = parseHexColor(cursorBallColor);

    const metaBallsUniform = [];
    for (let i = 0; i < 50; i++) {
      metaBallsUniform.push(new Vec3(0, 0, 0));
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(0, 0, 0) },
        iMouse: { value: new Vec3(0, 0, 0) },
        iColor: { value: new Vec3(r1, g1, b1) },
        iCursorColor: { value: new Vec3(r2, g2, b2) },
        iAnimationSize: { value: animationSize },
        iBallCount: { value: ballCount },
        iCursorBallSize: { value: cursorBallSize },
        iMetaBalls: { value: metaBallsUniform },
        iClumpFactor: { value: clumpFactor },
        enableTransparency: { value: enableTransparency },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    const scene = new Transform();
    mesh.setParent(scene);

    const maxBalls = 50;
    const effectiveBallCount = Math.min(ballCount, maxBalls);
    const ballParams = [];
    for (let i = 0; i < effectiveBallCount; i++) {
      const idx = i + 1;
      const h1 = hash31(idx);
      const st = h1[0] * (2 * Math.PI);
      const dtFactor = 0.1 * Math.PI + h1[1] * (0.4 * Math.PI - 0.1 * Math.PI);
      const baseScale = 5.0 + h1[1] * (10.0 - 5.0);
      const h2 = hash33(h1);
      const toggle = Math.floor(h2[0] * 2.0);
      const radiusVal = 0.5 + h2[2] * (2.0 - 0.5);
      ballParams.push({ st, dtFactor, baseScale, toggle, radius: radiusVal });
    }

    const mouseBallPos = { x: 0, y: 0 };
    let pointerInside = false;
    let pointerX = 0;
    let pointerY = 0;

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = width + "px";
      gl.canvas.style.height = height + "px";
      program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, 0);
    }
    window.addEventListener("resize", resize);
    resize();

    function onPointerMove(e) {
      if (!enableMouseInteraction) return;
      const rect = container.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      pointerX = (px / rect.width) * gl.canvas.width;
      pointerY = (1 - py / rect.height) * gl.canvas.height;
    }
    function onPointerEnter() {
      if (!enableMouseInteraction) return;
      pointerInside = true;
    }
    function onPointerLeave() {
      if (!enableMouseInteraction) return;
      pointerInside = false;
    }
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    const startTime = performance.now();
    let animationFrameId;
    function update(t) {
      animationFrameId = requestAnimationFrame(update);
      const elapsed = (t - startTime) * 0.001;
      program.uniforms.iTime.value = elapsed;

      for (let i = 0; i < effectiveBallCount; i++) {
        const p = ballParams[i];
        const dt = elapsed * speed * p.dtFactor;
        const th = p.st + dt;
        const x = Math.cos(th);
        const y = Math.sin(th + dt * p.toggle);
        const posX = x * p.baseScale * clumpFactor;
        const posY = y * p.baseScale * clumpFactor;
        metaBallsUniform[i].set(posX, posY, p.radius);
      }

      let targetX, targetY;
      if (pointerInside) {
        targetX = pointerX;
        targetY = pointerY;
      } else {
        const cx = gl.canvas.width * 0.5;
        const cy = gl.canvas.height * 0.5;
        const rx = gl.canvas.width * 0.15;
        const ry = gl.canvas.height * 0.15;
        targetX = cx + Math.cos(elapsed * speed) * rx;
        targetY = cy + Math.sin(elapsed * speed) * ry;
      }
      mouseBallPos.x += (targetX - mouseBallPos.x) * hoverSmoothness;
      mouseBallPos.y += (targetY - mouseBallPos.y) * hoverSmoothness;
      program.uniforms.iMouse.value.set(mouseBallPos.x, mouseBallPos.y, 0);

      renderer.render({ scene, camera });
    }
    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    color,
    cursorBallColor,
    speed,
    enableMouseInteraction,
    hoverSmoothness,
    animationSize,
    ballCount,
    clumpFactor,
    cursorBallSize,
    enableTransparency,
  ]);

  return <div ref={containerRef} className={\`metaballs-container \${className}\`} />;
};

export default MetaBalls;
`,In=`.metaballs-container {
  position: relative;
  width: 100%;
  height: 100%;
}`,Tn=`import { useEffect, useRef } from "react";
import {
  Renderer,
  Program,
  Mesh,
  Triangle,
  Transform,
  Vec3,
  Camera,
} from "ogl";

function parseHexColor(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [r, g, b];
}

function fract(x) {
  return x - Math.floor(x);
}

function hash31(p) {
  let r = [p * 0.1031, p * 0.1030, p * 0.0973].map(fract);
  const r_yzx = [r[1], r[2], r[0]];
  const dotVal = r[0] * (r_yzx[0] + 33.33) +
    r[1] * (r_yzx[1] + 33.33) +
    r[2] * (r_yzx[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    r[i] = fract(r[i] + dotVal);
  }
  return r;
}

function hash33(v) {
  let p = [v[0] * 0.1031, v[1] * 0.1030, v[2] * 0.0973].map(fract);
  const p_yxz = [p[1], p[0], p[2]];
  const dotVal = p[0] * (p_yxz[0] + 33.33) +
    p[1] * (p_yxz[1] + 33.33) +
    p[2] * (p_yxz[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    p[i] = fract(p[i] + dotVal);
  }
  const p_xxy = [p[0], p[0], p[1]];
  const p_yxx = [p[1], p[0], p[0]];
  const p_zyx = [p[2], p[1], p[0]];
  const result = [];
  for (let i = 0; i < 3; i++) {
    result[i] = fract((p_xxy[i] + p_yxx[i]) * p_zyx[i]);
  }
  return result;
}

const vertex = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragment = \`#version 300 es
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
out vec4 outColor;
const float PI = 3.14159265359;

float getMetaBallValue(vec2 c, float r, vec2 p) {
  vec2 d = p - c;
  float dist2 = dot(d, d);
  return (r * r) / dist2;
}

void main() {
  vec2 fc = gl_FragCoord.xy;
  float scale = iAnimationSize / iResolution.y;
  vec2 coord = (fc - iResolution.xy * 0.5) * scale;
  vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;
  float m1 = 0.0;
  for (int i = 0; i < 50; i++) {
    if (i >= iBallCount) break;
    m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);
  }
  float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
  float total = m1 + m2;
  float f = smoothstep(-1.0, 1.0, (total - 1.3) / min(1.0, fwidth(total)));
  vec3 cFinal = vec3(0.0);
  if (total > 0.0) {
    float alpha1 = m1 / total;
    float alpha2 = m2 / total;
    cFinal = iColor * alpha1 + iCursorColor * alpha2;
  }
  outColor = vec4(cFinal * f, enableTransparency ? f : 1.0);
}
\`;

const MetaBalls = ({
  color = "#ffffff",
  speed = 0.3,
  enableMouseInteraction = true,
  hoverSmoothness = 0.05,
  animationSize = 30,
  ballCount = 15,
  clumpFactor = 1,
  cursorBallSize = 3,
  cursorBallColor = "#ffffff",
  enableTransparency = false,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dpr = 1;
    const renderer = new Renderer({ dpr, alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, enableTransparency ? 0 : 1);
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, {
      left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 10,
    });
    camera.position.z = 1;

    const geometry = new Triangle(gl);
    const [r1, g1, b1] = parseHexColor(color);
    const [r2, g2, b2] = parseHexColor(cursorBallColor);

    const metaBallsUniform = [];
    for (let i = 0; i < 50; i++) {
      metaBallsUniform.push(new Vec3(0, 0, 0));
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(0, 0, 0) },
        iMouse: { value: new Vec3(0, 0, 0) },
        iColor: { value: new Vec3(r1, g1, b1) },
        iCursorColor: { value: new Vec3(r2, g2, b2) },
        iAnimationSize: { value: animationSize },
        iBallCount: { value: ballCount },
        iCursorBallSize: { value: cursorBallSize },
        iMetaBalls: { value: metaBallsUniform },
        iClumpFactor: { value: clumpFactor },
        enableTransparency: { value: enableTransparency },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    const scene = new Transform();
    mesh.setParent(scene);

    const maxBalls = 50;
    const effectiveBallCount = Math.min(ballCount, maxBalls);
    const ballParams = [];
    for (let i = 0; i < effectiveBallCount; i++) {
      const idx = i + 1;
      const h1 = hash31(idx);
      const st = h1[0] * (2 * Math.PI);
      const dtFactor = 0.1 * Math.PI + h1[1] * (0.4 * Math.PI - 0.1 * Math.PI);
      const baseScale = 5.0 + h1[1] * (10.0 - 5.0);
      const h2 = hash33(h1);
      const toggle = Math.floor(h2[0] * 2.0);
      const radiusVal = 0.5 + h2[2] * (2.0 - 0.5);
      ballParams.push({ st, dtFactor, baseScale, toggle, radius: radiusVal });
    }

    const mouseBallPos = { x: 0, y: 0 };
    let pointerInside = false;
    let pointerX = 0;
    let pointerY = 0;

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = width + "px";
      gl.canvas.style.height = height + "px";
      program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, 0);
    }
    window.addEventListener("resize", resize);
    resize();

    function onPointerMove(e) {
      if (!enableMouseInteraction) return;
      const rect = container.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      pointerX = (px / rect.width) * gl.canvas.width;
      pointerY = (1 - py / rect.height) * gl.canvas.height;
    }
    function onPointerEnter() {
      if (!enableMouseInteraction) return;
      pointerInside = true;
    }
    function onPointerLeave() {
      if (!enableMouseInteraction) return;
      pointerInside = false;
    }
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    const startTime = performance.now();
    let animationFrameId;
    function update(t) {
      animationFrameId = requestAnimationFrame(update);
      const elapsed = (t - startTime) * 0.001;
      program.uniforms.iTime.value = elapsed;

      for (let i = 0; i < effectiveBallCount; i++) {
        const p = ballParams[i];
        const dt = elapsed * speed * p.dtFactor;
        const th = p.st + dt;
        const x = Math.cos(th);
        const y = Math.sin(th + dt * p.toggle);
        const posX = x * p.baseScale * clumpFactor;
        const posY = y * p.baseScale * clumpFactor;
        metaBallsUniform[i].set(posX, posY, p.radius);
      }

      let targetX, targetY;
      if (pointerInside) {
        targetX = pointerX;
        targetY = pointerY;
      } else {
        const cx = gl.canvas.width * 0.5;
        const cy = gl.canvas.height * 0.5;
        const rx = gl.canvas.width * 0.15;
        const ry = gl.canvas.height * 0.15;
        targetX = cx + Math.cos(elapsed * speed) * rx;
        targetY = cy + Math.sin(elapsed * speed) * ry;
      }
      mouseBallPos.x += (targetX - mouseBallPos.x) * hoverSmoothness;
      mouseBallPos.y += (targetY - mouseBallPos.y) * hoverSmoothness;
      program.uniforms.iMouse.value.set(mouseBallPos.x, mouseBallPos.y, 0);

      renderer.render({ scene, camera });
    }
    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    color,
    cursorBallColor,
    speed,
    enableMouseInteraction,
    hoverSmoothness,
    animationSize,
    ballCount,
    clumpFactor,
    cursorBallSize,
    enableTransparency,
  ]);

  return <div ref={containerRef} className="w-full h-full relative" />;
};

export default MetaBalls;
`,En=`import React, { useEffect, useRef } from "react";
import {
  Renderer,
  Program,
  Mesh,
  Triangle,
  Transform,
  Vec3,
  Camera,
} from "ogl";
import "./MetaBalls.css";

type MetaBallsProps = {
  color?: string;
  speed?: number;
  enableMouseInteraction?: boolean;
  hoverSmoothness?: number;
  animationSize?: number;
  ballCount?: number;
  clumpFactor?: number;
  cursorBallSize?: number;
  cursorBallColor?: string;
  enableTransparency?: boolean;
};

function parseHexColor(hex: string): [number, number, number] {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [r, g, b];
}

function fract(x: number): number {
  return x - Math.floor(x);
}

function hash31(p: number): number[] {
  let r = [p * 0.1031, p * 0.103, p * 0.0973].map(fract);
  const r_yzx = [r[1], r[2], r[0]];
  const dotVal =
    r[0] * (r_yzx[0] + 33.33) +
    r[1] * (r_yzx[1] + 33.33) +
    r[2] * (r_yzx[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    r[i] = fract(r[i] + dotVal);
  }
  return r;
}

function hash33(v: number[]): number[] {
  let p = [v[0] * 0.1031, v[1] * 0.103, v[2] * 0.0973].map(fract);
  const p_yxz = [p[1], p[0], p[2]];
  const dotVal =
    p[0] * (p_yxz[0] + 33.33) +
    p[1] * (p_yxz[1] + 33.33) +
    p[2] * (p_yxz[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    p[i] = fract(p[i] + dotVal);
  }
  const p_xxy = [p[0], p[0], p[1]];
  const p_yxx = [p[1], p[0], p[0]];
  const p_zyx = [p[2], p[1], p[0]];
  const result: number[] = [];
  for (let i = 0; i < 3; i++) {
    result[i] = fract((p_xxy[i] + p_yxx[i]) * p_zyx[i]);
  }
  return result;
}

const vertex = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragment = \`#version 300 es
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
out vec4 outColor;
const float PI = 3.14159265359;
 
float getMetaBallValue(vec2 c, float r, vec2 p) {
    vec2 d = p - c;
    float dist2 = dot(d, d);
    return (r * r) / dist2;
}
 
void main() {
    vec2 fc = gl_FragCoord.xy;
    float scale = iAnimationSize / iResolution.y;
    vec2 coord = (fc - iResolution.xy * 0.5) * scale;
    vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;
    float m1 = 0.0;
    for (int i = 0; i < 50; i++) {
        if (i >= iBallCount) break;
        m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);
    }
    float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
    float total = m1 + m2;
    float f = smoothstep(-1.0, 1.0, (total - 1.3) / min(1.0, fwidth(total)));
    vec3 cFinal = vec3(0.0);
    if (total > 0.0) {
        float alpha1 = m1 / total;
        float alpha2 = m2 / total;
        cFinal = iColor * alpha1 + iCursorColor * alpha2;
    }
    outColor = vec4(cFinal * f, enableTransparency ? f : 1.0);
}
\`;

type BallParams = {
  st: number;
  dtFactor: number;
  baseScale: number;
  toggle: number;
  radius: number;
};

const MetaBalls: React.FC<MetaBallsProps> = ({
  color = "#ffffff",
  speed = 0.3,
  enableMouseInteraction = true,
  hoverSmoothness = 0.05,
  animationSize = 30,
  ballCount = 15,
  clumpFactor = 1,
  cursorBallSize = 3,
  cursorBallColor = "#ffffff",
  enableTransparency = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dpr = 1;
    const renderer = new Renderer({
      dpr,
      alpha: true,
      premultipliedAlpha: false,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, enableTransparency ? 0 : 1);
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, {
      left: -1,
      right: 1,
      top: 1,
      bottom: -1,
      near: 0.1,
      far: 10,
    });
    camera.position.z = 1;

    const geometry = new Triangle(gl);
    const [r1, g1, b1] = parseHexColor(color);
    const [r2, g2, b2] = parseHexColor(cursorBallColor);

    const metaBallsUniform: Vec3[] = [];
    for (let i = 0; i < 50; i++) {
      metaBallsUniform.push(new Vec3(0, 0, 0));
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(0, 0, 0) },
        iMouse: { value: new Vec3(0, 0, 0) },
        iColor: { value: new Vec3(r1, g1, b1) },
        iCursorColor: { value: new Vec3(r2, g2, b2) },
        iAnimationSize: { value: animationSize },
        iBallCount: { value: ballCount },
        iCursorBallSize: { value: cursorBallSize },
        iMetaBalls: { value: metaBallsUniform },
        iClumpFactor: { value: clumpFactor },
        enableTransparency: { value: enableTransparency },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    const scene = new Transform();
    mesh.setParent(scene);

    const maxBalls = 50;
    const effectiveBallCount = Math.min(ballCount, maxBalls);
    const ballParams: BallParams[] = [];
    for (let i = 0; i < effectiveBallCount; i++) {
      const idx = i + 1;
      const h1 = hash31(idx);
      const st = h1[0] * (2 * Math.PI);
      const dtFactor = 0.1 * Math.PI + h1[1] * (0.4 * Math.PI - 0.1 * Math.PI);
      const baseScale = 5.0 + h1[1] * (10.0 - 5.0);
      const h2 = hash33(h1);
      const toggle = Math.floor(h2[0] * 2.0);
      const radiusVal = 0.5 + h2[2] * (2.0 - 0.5);
      ballParams.push({ st, dtFactor, baseScale, toggle, radius: radiusVal });
    }

    const mouseBallPos = { x: 0, y: 0 };
    let pointerInside = false;
    let pointerX = 0;
    let pointerY = 0;

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = \`\${width}px\`;
      gl.canvas.style.height = \`\${height}px\`;
      program.uniforms.iResolution.value.set(
        gl.canvas.width,
        gl.canvas.height,
        0
      );
    }
    window.addEventListener("resize", resize);
    resize();

    function onPointerMove(e: PointerEvent) {
      if (!enableMouseInteraction || !container) return;
      const rect = container.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      pointerX = (px / rect.width) * gl.canvas.width;
      pointerY = (1 - py / rect.height) * gl.canvas.height;
    }
    function onPointerEnter() {
      if (!enableMouseInteraction) return;
      pointerInside = true;
    }
    function onPointerLeave() {
      if (!enableMouseInteraction) return;
      pointerInside = false;
    }
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    const startTime = performance.now();
    let animationFrameId: number;
    function update(t: number) {
      animationFrameId = requestAnimationFrame(update);
      const elapsed = (t - startTime) * 0.001;
      program.uniforms.iTime.value = elapsed;

      for (let i = 0; i < effectiveBallCount; i++) {
        const p = ballParams[i];
        const dt = elapsed * speed * p.dtFactor;
        const th = p.st + dt;
        const x = Math.cos(th);
        const y = Math.sin(th + dt * p.toggle);
        const posX = x * p.baseScale * clumpFactor;
        const posY = y * p.baseScale * clumpFactor;
        metaBallsUniform[i].set(posX, posY, p.radius);
      }

      let targetX: number, targetY: number;
      if (pointerInside) {
        targetX = pointerX;
        targetY = pointerY;
      } else {
        const cx = gl.canvas.width * 0.5;
        const cy = gl.canvas.height * 0.5;
        const rx = gl.canvas.width * 0.15;
        const ry = gl.canvas.height * 0.15;
        targetX = cx + Math.cos(elapsed * speed) * rx;
        targetY = cy + Math.sin(elapsed * speed) * ry;
      }
      mouseBallPos.x += (targetX - mouseBallPos.x) * hoverSmoothness;
      mouseBallPos.y += (targetY - mouseBallPos.y) * hoverSmoothness;
      program.uniforms.iMouse.value.set(mouseBallPos.x, mouseBallPos.y, 0);

      renderer.render({ scene, camera });
    }
    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    color,
    cursorBallColor,
    speed,
    enableMouseInteraction,
    hoverSmoothness,
    animationSize,
    ballCount,
    clumpFactor,
    cursorBallSize,
    enableTransparency,
  ]);

  return <div ref={containerRef} className="metaballs-container" />;
};

export default MetaBalls;
`,_n=`import React, { useEffect, useRef } from "react";
import {
  Renderer,
  Program,
  Mesh,
  Triangle,
  Transform,
  Vec3,
  Camera,
} from "ogl";

type MetaBallsProps = {
  color?: string;
  speed?: number;
  enableMouseInteraction?: boolean;
  hoverSmoothness?: number;
  animationSize?: number;
  ballCount?: number;
  clumpFactor?: number;
  cursorBallSize?: number;
  cursorBallColor?: string;
  enableTransparency?: boolean;
};

function parseHexColor(hex: string): [number, number, number] {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [r, g, b];
}

function fract(x: number): number {
  return x - Math.floor(x);
}

function hash31(p: number): number[] {
  let r = [p * 0.1031, p * 0.103, p * 0.0973].map(fract);
  const r_yzx = [r[1], r[2], r[0]];
  const dotVal =
    r[0] * (r_yzx[0] + 33.33) +
    r[1] * (r_yzx[1] + 33.33) +
    r[2] * (r_yzx[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    r[i] = fract(r[i] + dotVal);
  }
  return r;
}

function hash33(v: number[]): number[] {
  let p = [v[0] * 0.1031, v[1] * 0.103, v[2] * 0.0973].map(fract);
  const p_yxz = [p[1], p[0], p[2]];
  const dotVal =
    p[0] * (p_yxz[0] + 33.33) +
    p[1] * (p_yxz[1] + 33.33) +
    p[2] * (p_yxz[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    p[i] = fract(p[i] + dotVal);
  }
  const p_xxy = [p[0], p[0], p[1]];
  const p_yxx = [p[1], p[0], p[0]];
  const p_zyx = [p[2], p[1], p[0]];
  const result: number[] = [];
  for (let i = 0; i < 3; i++) {
    result[i] = fract((p_xxy[i] + p_yxx[i]) * p_zyx[i]);
  }
  return result;
}

const vertex = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragment = \`#version 300 es
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
out vec4 outColor;
const float PI = 3.14159265359;
 
float getMetaBallValue(vec2 c, float r, vec2 p) {
    vec2 d = p - c;
    float dist2 = dot(d, d);
    return (r * r) / dist2;
}
 
void main() {
    vec2 fc = gl_FragCoord.xy;
    float scale = iAnimationSize / iResolution.y;
    vec2 coord = (fc - iResolution.xy * 0.5) * scale;
    vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;
    float m1 = 0.0;
    for (int i = 0; i < 50; i++) {
        if (i >= iBallCount) break;
        m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);
    }
    float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
    float total = m1 + m2;
    float f = smoothstep(-1.0, 1.0, (total - 1.3) / min(1.0, fwidth(total)));
    vec3 cFinal = vec3(0.0);
    if (total > 0.0) {
        float alpha1 = m1 / total;
        float alpha2 = m2 / total;
        cFinal = iColor * alpha1 + iCursorColor * alpha2;
    }
    outColor = vec4(cFinal * f, enableTransparency ? f : 1.0);
}
\`;

type BallParams = {
  st: number;
  dtFactor: number;
  baseScale: number;
  toggle: number;
  radius: number;
};

const MetaBalls: React.FC<MetaBallsProps> = ({
  color = "#ffffff",
  speed = 0.3,
  enableMouseInteraction = true,
  hoverSmoothness = 0.05,
  animationSize = 30,
  ballCount = 15,
  clumpFactor = 1,
  cursorBallSize = 3,
  cursorBallColor = "#ffffff",
  enableTransparency = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dpr = 1;
    const renderer = new Renderer({
      dpr,
      alpha: true,
      premultipliedAlpha: false,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, enableTransparency ? 0 : 1);
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, {
      left: -1,
      right: 1,
      top: 1,
      bottom: -1,
      near: 0.1,
      far: 10,
    });
    camera.position.z = 1;

    const geometry = new Triangle(gl);
    const [r1, g1, b1] = parseHexColor(color);
    const [r2, g2, b2] = parseHexColor(cursorBallColor);

    const metaBallsUniform: Vec3[] = [];
    for (let i = 0; i < 50; i++) {
      metaBallsUniform.push(new Vec3(0, 0, 0));
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(0, 0, 0) },
        iMouse: { value: new Vec3(0, 0, 0) },
        iColor: { value: new Vec3(r1, g1, b1) },
        iCursorColor: { value: new Vec3(r2, g2, b2) },
        iAnimationSize: { value: animationSize },
        iBallCount: { value: ballCount },
        iCursorBallSize: { value: cursorBallSize },
        iMetaBalls: { value: metaBallsUniform },
        iClumpFactor: { value: clumpFactor },
        enableTransparency: { value: enableTransparency },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    const scene = new Transform();
    mesh.setParent(scene);

    const maxBalls = 50;
    const effectiveBallCount = Math.min(ballCount, maxBalls);
    const ballParams: BallParams[] = [];
    for (let i = 0; i < effectiveBallCount; i++) {
      const idx = i + 1;
      const h1 = hash31(idx);
      const st = h1[0] * (2 * Math.PI);
      const dtFactor = 0.1 * Math.PI + h1[1] * (0.4 * Math.PI - 0.1 * Math.PI);
      const baseScale = 5.0 + h1[1] * (10.0 - 5.0);
      const h2 = hash33(h1);
      const toggle = Math.floor(h2[0] * 2.0);
      const radiusVal = 0.5 + h2[2] * (2.0 - 0.5);
      ballParams.push({ st, dtFactor, baseScale, toggle, radius: radiusVal });
    }

    const mouseBallPos = { x: 0, y: 0 };
    let pointerInside = false;
    let pointerX = 0;
    let pointerY = 0;

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = \`\${width}px\`;
      gl.canvas.style.height = \`\${height}px\`;
      program.uniforms.iResolution.value.set(
        gl.canvas.width,
        gl.canvas.height,
        0
      );
    }
    window.addEventListener("resize", resize);
    resize();

    function onPointerMove(e: PointerEvent) {
      if (!enableMouseInteraction || !container) return;
      const rect = container.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      pointerX = (px / rect.width) * gl.canvas.width;
      pointerY = (1 - py / rect.height) * gl.canvas.height;
    }
    function onPointerEnter() {
      if (!enableMouseInteraction) return;
      pointerInside = true;
    }
    function onPointerLeave() {
      if (!enableMouseInteraction) return;
      pointerInside = false;
    }
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    const startTime = performance.now();
    let animationFrameId: number;
    function update(t: number) {
      animationFrameId = requestAnimationFrame(update);
      const elapsed = (t - startTime) * 0.001;
      program.uniforms.iTime.value = elapsed;

      for (let i = 0; i < effectiveBallCount; i++) {
        const p = ballParams[i];
        const dt = elapsed * speed * p.dtFactor;
        const th = p.st + dt;
        const x = Math.cos(th);
        const y = Math.sin(th + dt * p.toggle);
        const posX = x * p.baseScale * clumpFactor;
        const posY = y * p.baseScale * clumpFactor;
        metaBallsUniform[i].set(posX, posY, p.radius);
      }

      let targetX: number, targetY: number;
      if (pointerInside) {
        targetX = pointerX;
        targetY = pointerY;
      } else {
        const cx = gl.canvas.width * 0.5;
        const cy = gl.canvas.height * 0.5;
        const rx = gl.canvas.width * 0.15;
        const ry = gl.canvas.height * 0.15;
        targetX = cx + Math.cos(elapsed * speed) * rx;
        targetY = cy + Math.sin(elapsed * speed) * ry;
      }
      mouseBallPos.x += (targetX - mouseBallPos.x) * hoverSmoothness;
      mouseBallPos.y += (targetY - mouseBallPos.y) * hoverSmoothness;
      program.uniforms.iMouse.value.set(mouseBallPos.x, mouseBallPos.y, 0);

      renderer.render({ scene, camera });
    }
    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    color,
    cursorBallColor,
    speed,
    enableMouseInteraction,
    hoverSmoothness,
    animationSize,
    ballCount,
    clumpFactor,
    cursorBallSize,
    enableTransparency,
  ]);

  return <div ref={containerRef} className="w-full h-full relative" />;
};

export default MetaBalls;
`,O={...ln("Animations/MetaBalls"),installation:"npm install ogl",usage:`import MetaBalls from './MetaBalls';

<MetaBalls
  color="#ffffff"
  cursorBallColor="#ffffff"
  cursorBallSize={2}
  ballCount={15}
  animationSize={30}
  enableMouseInteraction={true}
  enableTransparency={true}
  hoverSmoothness={0.05}
  clumpFactor={1}
  speed={0.3}
/>`,code:Fn,css:In,tailwind:Tn,tsCode:En,tsTailwind:_n};function J(a){const n=a.replace("#",""),l=parseInt(n.substring(0,2),16)/255,m=parseInt(n.substring(2,4),16)/255,c=parseInt(n.substring(4,6),16)/255;return[l,m,c]}function I(a){return a-Math.floor(a)}function Rn(a){let n=[a*.1031,a*.103,a*.0973].map(I);const l=[n[1],n[2],n[0]],m=n[0]*(l[0]+33.33)+n[1]*(l[1]+33.33)+n[2]*(l[2]+33.33);for(let c=0;c<3;c++)n[c]=I(n[c]+m);return n}function Vn(a){let n=[a[0]*.1031,a[1]*.103,a[2]*.0973].map(I);const l=[n[1],n[0],n[2]],m=n[0]*(l[0]+33.33)+n[1]*(l[1]+33.33)+n[2]*(l[2]+33.33);for(let r=0;r<3;r++)n[r]=I(n[r]+m);const c=[n[0],n[0],n[1]],C=[n[1],n[0],n[0]],v=[n[2],n[1],n[0]],h=[];for(let r=0;r<3;r++)h[r]=I((c[r]+C[r])*v[r]);return h}const Ln=`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Xn=`#version 300 es
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
out vec4 outColor;
const float PI = 3.14159265359;

float getMetaBallValue(vec2 c, float r, vec2 p) {
  vec2 d = p - c;
  float dist2 = dot(d, d);
  return (r * r) / dist2;
}

void main() {
  vec2 fc = gl_FragCoord.xy;
  float scale = iAnimationSize / iResolution.y;
  vec2 coord = (fc - iResolution.xy * 0.5) * scale;
  vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;
  float m1 = 0.0;
  for (int i = 0; i < 50; i++) {
    if (i >= iBallCount) break;
    m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);
  }
  float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
  float total = m1 + m2;
  float f = smoothstep(-1.0, 1.0, (total - 1.3) / min(1.0, fwidth(total)));
  vec3 cFinal = vec3(0.0);
  if (total > 0.0) {
    float alpha1 = m1 / total;
    float alpha2 = m2 / total;
    cFinal = iColor * alpha1 + iCursorColor * alpha2;
  }
  outColor = vec4(cFinal * f, enableTransparency ? f : 1.0);
}
`,Yn=({className:a="",color:n="#ffffff",speed:l=.3,enableMouseInteraction:m=!0,hoverSmoothness:c=.05,animationSize:C=30,ballCount:v=15,clumpFactor:h=1,cursorBallSize:r=3,cursorBallColor:T="#ffffff",enableTransparency:y=!0})=>{const E=p.useRef(null);return p.useEffect(()=>{const s=E.current;if(!s)return;const P=1,B=new sn({dpr:P,alpha:!0,premultipliedAlpha:!1}),t=B.gl;t.clearColor(0,0,0,y?0:1),s.appendChild(t.canvas);const S=new cn(t,{left:-1,right:1,top:1,bottom:-1,near:.1,far:10});S.position.z=1;const R=new un(t),[V,o,K]=J(n),[Q,Z,nn]=J(T),L=[];for(let i=0;i<50;i++)L.push(new F(0,0,0));const _=new mn(t,{vertex:Ln,fragment:Xn,uniforms:{iTime:{value:0},iResolution:{value:new F(0,0,0)},iMouse:{value:new F(0,0,0)},iColor:{value:new F(V,o,K)},iCursorColor:{value:new F(Q,Z,nn)},iAnimationSize:{value:C},iBallCount:{value:v},iCursorBallSize:{value:r},iMetaBalls:{value:L},iClumpFactor:{value:h},enableTransparency:{value:y}}}),en=new pn(t,{geometry:R,program:_}),H=new fn;en.setParent(H);const W=Math.min(v,50),U=[];for(let i=0;i<W;i++){const u=i+1,f=Rn(u),x=f[0]*(2*Math.PI),g=.1*Math.PI+f[1]*(.4*Math.PI-.1*Math.PI),d=5+f[1]*5,b=Vn(f),z=Math.floor(b[0]*2),j=.5+b[2]*(2-.5);U.push({st:x,dtFactor:g,baseScale:d,toggle:z,radius:j})}const M={x:0,y:0};let X=!1,q=0,N=0;function Y(){if(!s)return;const i=s.clientWidth,u=s.clientHeight;B.setSize(i*P,u*P),t.canvas.style.width=i+"px",t.canvas.style.height=u+"px",_.uniforms.iResolution.value.set(t.canvas.width,t.canvas.height,0)}window.addEventListener("resize",Y),Y();function k(i){if(!m)return;const u=s.getBoundingClientRect(),f=i.clientX-u.left,x=i.clientY-u.top;q=f/u.width*t.canvas.width,N=(1-x/u.height)*t.canvas.height}function D(){m&&(X=!0)}function $(){m&&(X=!1)}s.addEventListener("pointermove",k),s.addEventListener("pointerenter",D),s.addEventListener("pointerleave",$);const tn=performance.now();let A;function G(i){A=requestAnimationFrame(G);const u=(i-tn)*.001;_.uniforms.iTime.value=u;for(let g=0;g<W;g++){const d=U[g],b=u*l*d.dtFactor,z=d.st+b,j=Math.cos(z),on=Math.sin(z+b*d.toggle),an=j*d.baseScale*h,rn=on*d.baseScale*h;L[g].set(an,rn,d.radius)}let f,x;if(X)f=q,x=N;else{const g=t.canvas.width*.5,d=t.canvas.height*.5,b=t.canvas.width*.15,z=t.canvas.height*.15;f=g+Math.cos(u*l)*b,x=d+Math.sin(u*l)*z}M.x+=(f-M.x)*c,M.y+=(x-M.y)*c,_.uniforms.iMouse.value.set(M.x,M.y,0),B.render({scene:H,camera:S})}return A=requestAnimationFrame(G),()=>{var i;cancelAnimationFrame(A),window.removeEventListener("resize",Y),s.removeEventListener("pointermove",k),s.removeEventListener("pointerenter",D),s.removeEventListener("pointerleave",$),s.removeChild(t.canvas),(i=t.getExtension("WEBGL_lose_context"))==null||i.loseContext()}},[n,T,l,m,c,C,v,h,r,y]),e.jsx("div",{ref:E,className:`metaballs-container ${a}`})},kn=()=>{const[a,n]=p.useState("#ffffff"),[l,m]=p.useState("#ffffff"),[c,C]=p.useState(.3),[v,h]=p.useState(30),[r,T]=p.useState(15),[y,E]=p.useState(1),[s,P]=p.useState(!0),[B,t]=p.useState(.15),[S,R]=p.useState(2),V=[{name:"color",type:"string",default:"#ffffff",description:"The base color of the metaballs."},{name:"speed",type:"number",default:"0.3",description:"Speed multiplier for the animation."},{name:"enableMouseInteraction",type:"boolean",default:"true",description:"Enables or disables the ball following the mouse."},{name:"enableTransparency",type:"boolean",default:"false",description:"Enables or disables transparency for the container of the animation."},{name:"hoverSmoothness",type:"number",default:"0.05",description:"Smoothness factor for the cursor ball when following the mouse."},{name:"animationSize",type:"number",default:"30",description:"The size of the world for the animation."},{name:"ballCount",type:"number",default:"15",description:"Number of metaballs rendered."},{name:"clumpFactor",type:"number",default:"1",description:"Determines how close together the balls are rendered."},{name:"cursorBallSize",type:"number",default:"3",description:"Size of the cursor-controlled ball."},{name:"cursorBallColor",type:"string",default:"#ff0000",description:"Color of the cursor ball."}];return e.jsxs(xn,{children:[e.jsxs(bn,{children:[e.jsx(dn,{position:"relative",className:"demo-container",h:500,p:0,overflow:"hidden",children:e.jsx(Yn,{color:a,cursorBallColor:l,cursorBallSize:S,ballCount:r,animationSize:v,enableMouseInteraction:s,hoverSmoothness:B,clumpFactor:y,speed:c})}),e.jsxs(Pn,{className:"preview-options",children:[e.jsxs(hn,{gap:4,align:"center",mt:4,children:[e.jsx(vn,{fontSize:"sm",children:"Color"}),e.jsx(gn,{type:"color",value:a,onChange:o=>{n(o.target.value),m(o.target.value)},width:"50px"})]}),e.jsx(w,{title:"Ball Count",min:2,max:30,step:1,value:r,onChange:o=>T(o),width:150}),e.jsx(w,{title:"Speed",min:.1,max:1,step:.1,value:c,onChange:o=>C(o),width:150}),e.jsx(w,{title:"Size",min:10,max:50,step:1,value:v,onChange:o=>h(o),width:150}),e.jsx(w,{title:"Clump Factor",min:.1,max:2,step:.1,value:y,onChange:o=>E(o),width:150}),e.jsx(Sn,{title:"Follow Cursor",isChecked:s,onChange:o=>P(o)}),e.jsx(w,{title:"Cursor Smoothing",min:.001,max:.25,step:.001,value:B,onChange:o=>t(o),width:150}),e.jsx(w,{title:"Cursor Size",min:1,max:5,step:1,value:S,onChange:o=>R(o),width:150})]}),e.jsx(Cn,{data:V}),e.jsx(wn,{dependencyList:["ogl"]})]}),e.jsx(yn,{children:e.jsx(Bn,{codeObject:O})}),e.jsx(Mn,{children:e.jsx(zn,{...O})})]})};export{kn as default};
