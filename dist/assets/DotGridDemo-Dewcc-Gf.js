import{g as qn,r as C,j as g,a as L,B as Bn,F as xn,T as vn,I as mn}from"./index-j7DW7U0N.js";import{T as Hn,P as Wn,a as Vn,C as Un,b as Jn,c as Kn,d as Qn}from"./PropTable-Baf4PZpP.js";import{C as Zn}from"./Customize-Dq9g9yhm.js";import{D as nt}from"./Dependencies-BSh7s3YA.js";import{P as j}from"./PreviewSlider-D0sSZbsU.js";import{B as tt}from"./BackgroundContent-Dpg35sHv.js";import"./PreviewSwitch-_xo3rdWG.js";const et=`'use client';
import { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import "./DotGrid.css";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

const DotGrid = ({
  dotSize = 16,
  gap = 32,
  baseColor = "#5227FF",
  activeColor = "#5227FF",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
  style,
}) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;

    const p = new window.Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = \`\${width}px\`;
    canvas.style.height = \`\${height}px\`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;

    const extraX = width - gridW;
    const extraY = height - gridH;

    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath) return;

    let rafId;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let style = baseColor;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = \`rgb(\${r},\${g},\${b})\`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();
    let ro = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(buildGrid);
      wrapperRef.current && ro.observe(wrapperRef.current);
    } else {
      window.addEventListener("resize", buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    const onMove = (e) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvasRef.current.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = dot.cx - pr.x + vx * 0.005;
          const pushY = dot.cy - pr.y + vy * 0.005;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const onClick = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
    };
  }, [
    maxSpeed,
    speedTrigger,
    proximity,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
  ]);

  return (
    <section className={\`dot-grid \${className}\`} style={style}>
      <div ref={wrapperRef} className="dot-grid__wrap">
        <canvas ref={canvasRef} className="dot-grid__canvas" />
      </div>
    </section>
  );
};

export default DotGrid;
`,st=`.dot-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
}

.dot-grid__wrap {
  width: 100%;
  height: 100%;
  position: relative;
}

.dot-grid__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}`,rt=`'use client';
import { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

const DotGrid = ({
  dotSize = 16,
  gap = 32,
  baseColor = "#5227FF",
  activeColor = "#5227FF",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
  style,
}) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;

    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = \`\${width}px\`;
    canvas.style.height = \`\${height}px\`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;

    const extraX = width - gridW;
    const extraY = height - gridH;

    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath) return;

    let rafId;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let style = baseColor;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = \`rgb(\${r},\${g},\${b})\`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();
    let ro = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(buildGrid);
      wrapperRef.current && ro.observe(wrapperRef.current);
    } else {
      window.addEventListener("resize", buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    const onMove = (e) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvasRef.current.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = dot.cx - pr.x + vx * 0.005;
          const pushY = dot.cy - pr.y + vy * 0.005;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const onClick = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
    };
  }, [
    maxSpeed,
    speedTrigger,
    proximity,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
  ]);

  return (
    <section
      className={\`p-4 flex items-center justify-center h-full w-full relative \${className}\`}
      style={style}
    >
      <div ref={wrapperRef} className="w-full h-full relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>
    </section>
  );
};

export default DotGrid;
`,ot=`'use client';
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import "./DotGrid.css";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastCall = 0;
  return function (this: any, ...args: any[]) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 16,
  gap = 32,
  baseColor = "#5227FF",
  activeColor = "#5227FF",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
  style,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;

    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = \`\${width}px\`;
    canvas.style.height = \`\${height}px\`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;

    const extraX = width - gridW;
    const extraY = height - gridH;

    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath) return;

    let rafId: number;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let style = baseColor;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = \`rgb(\${r},\${g},\${b})\`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();
    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(buildGrid);
      wrapperRef.current && ro.observe(wrapperRef.current);
    } else {
      (window as Window).addEventListener("resize", buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvasRef.current!.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = dot.cx - pr.x + vx * 0.005;
          const pushY = dot.cy - pr.y + vy * 0.005;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
    };
  }, [
    maxSpeed,
    speedTrigger,
    proximity,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
  ]);

  return (
    <section className={\`dot-grid \${className}\`} style={style}>
      <div ref={wrapperRef} className="dot-grid__wrap">
        <canvas ref={canvasRef} className="dot-grid__canvas" />
      </div>
    </section>
  );
};

export default DotGrid;
`,it=`'use client';
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastCall = 0;
  return function (this: any, ...args: any[]) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 16,
  gap = 32,
  baseColor = "#5227FF",
  activeColor = "#5227FF",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
  style,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;

    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = \`\${width}px\`;
    canvas.style.height = \`\${height}px\`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;

    const extraX = width - gridW;
    const extraY = height - gridH;

    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath) return;

    let rafId: number;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let style = baseColor;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = \`rgb(\${r},\${g},\${b})\`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();
    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(buildGrid);
      wrapperRef.current && ro.observe(wrapperRef.current);
    } else {
      (window as Window).addEventListener("resize", buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvasRef.current!.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = dot.cx - pr.x + vx * 0.005;
          const pushY = dot.cy - pr.y + vy * 0.005;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
    };
  }, [
    maxSpeed,
    speedTrigger,
    proximity,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
  ]);

  return (
    <section
      className={\`p-4 flex items-center justify-center h-full w-full relative \${className}\`}
      style={style}
    >
      <div ref={wrapperRef} className="w-full h-full relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>
    </section>
  );
};

export default DotGrid;
`,yn={...qn("Backgrounds/DotGrid"),installation:"npm install gsap",usage:`import DotGrid from './DotGrid';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DotGrid
    dotSize={10}
    gap={15}
    baseColor="#5227FF"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>`,code:et,css:st,tailwind:rt,tsCode:ot,tsTailwind:it};/*!
 * VelocityTracker: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var F,on,U,Mn,B,H,cn,On,Tn=function(){return F||typeof window<"u"&&(F=window.gsap)},an={},ct=function(n){return Math.round(n*1e4)/1e4},ln=function(n){return On(n).id},V=function(n){return an[ln(typeof n=="string"?U(n)[0]:n)]},wn=function(n){var t=B,e;if(n-cn>=.05)for(cn=n;t;)e=t.g(t.t,t.p),(e!==t.v1||n-t.t1>.2)&&(t.v2=t.v1,t.v1=e,t.t2=t.t1,t.t1=n),t=t._next},at={deg:360,rad:Math.PI*2},rn=function(){F=Tn(),F&&(U=F.utils.toArray,Mn=F.utils.getUnit,On=F.core.getCache,H=F.ticker,on=1)},lt=function(n,t,e,s){this.t=n,this.p=t,this.g=n._gsap.get,this.rCap=at[e||Mn(this.g(n,t))],this.v1=this.v2=0,this.t1=this.t2=H.time,s&&(this._next=s,s._prev=this)},Z=function(){function r(t,e){on||rn(),this.target=U(t)[0],an[ln(this.target)]=this,this._props={},e&&this.add(e)}r.register=function(e){F=e,rn()};var n=r.prototype;return n.get=function(e,s){var i=this._props[e]||console.warn("Not tracking "+e+" velocity."),p,a,c;return p=parseFloat(s?i.v1:i.g(i.t,i.p)),a=p-parseFloat(i.v2),c=i.rCap,c&&(a=a%c,a!==a%(c/2)&&(a=a<0?a+c:a-c)),ct(a/((s?i.t1:H.time)-i.t2))},n.getAll=function(){var e={},s=this._props,i;for(i in s)e[i]=this.get(i);return e},n.isTracking=function(e){return e in this._props},n.add=function(e,s){e in this._props||(B||(H.add(wn),cn=H.time),B=this._props[e]=new lt(this.target,e,s,B))},n.remove=function(e){var s=this._props[e],i,p;s&&(i=s._prev,p=s._next,i&&(i._next=p),p?p._prev=i:B===s&&(H.remove(wn),B=0),delete this._props[e])},n.kill=function(e){for(var s in this._props)this.remove(s);e||delete an[ln(this.target)]},r.track=function(e,s,i){on||rn();for(var p=[],a=U(e),c=s.split(","),o=(i||"").split(","),f=a.length,v,u;f--;){for(v=V(a[f])||new r(a[f]),u=c.length;u--;)v.add(c[u],o[u]||o[0]);p.push(v)}return p},r.untrack=function(e,s){var i=(s||"").split(",");U(e).forEach(function(p){var a=V(p);a&&(i.length?i.forEach(function(c){return a.remove(c)}):a.kill(1))})},r.isTracking=function(e,s){var i=V(e);return i&&i.isTracking(s)},r.getVelocity=function(e,s){var i=V(e);return!i||!i.isTracking(s)?console.warn("Not tracking velocity of "+s):i.get(s)},r}();Z.getByTarget=V;Tn()&&F.registerPlugin(Z);/*!
 * InertiaPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var k,Pn,bn,En,dn,J,Xn,Yn,An,un,zn,K,pn,Dn,tn=Z.getByTarget,Fn=function(){return k||typeof window<"u"&&(k=window.gsap)&&k.registerPlugin&&k},dt=function(n){return typeof n=="string"},Q=function(n){return typeof n=="number"},G=function(n){return typeof n=="object"},fn=function(n){return typeof n=="function"},pt=1,In=Array.isArray,ft=function(n){return n},q=1e10,Rn=1/q,Gn=.05,ut=function(n){return Math.round(n*1e4)/1e4},ht=function(n,t,e){for(var s in t)!(s in n)&&s!==e&&(n[s]=t[s]);return n},gt=function r(n){var t={},e,s;for(e in n)t[e]=G(s=n[e])&&!In(s)?r(s):s;return t},Cn=function(n,t,e,s,i){var p=t.length,a=0,c=q,o,f,v,u;if(G(n)){for(;p--;){o=t[p],f=0;for(v in n)u=o[v]-n[v],f+=u*u;f<c&&(a=p,c=f)}if((i||q)<q&&i<Math.sqrt(c))return n}else for(;p--;)o=t[p],f=o-n,f<0&&(f=-f),f<c&&o>=s&&o<=e&&(a=p,c=f);return t[a]},Nn=function(n,t,e,s,i,p,a){if(n.end==="auto")return n;var c=n.end,o,f;if(e=isNaN(e)?q:e,s=isNaN(s)?-q:s,G(t)){if(o=t.calculated?t:(fn(c)?c(t,a):Cn(t,c,e,s,p))||t,!t.calculated){for(f in o)t[f]=o[f];t.calculated=!0}o=o[i]}else o=fn(c)?c(t,a):In(c)?Cn(t,c,e,s,p):parseFloat(c);return o>e?o=e:o<s&&(o=s),{max:o,min:o,unitFactor:n.unitFactor}},en=function(n,t,e){return isNaN(n[t])?e:+n[t]},hn=function(n,t){return t*Gn*n/un},_n=function(n,t,e){return Math.abs((t-n)*un/e/Gn)},$n={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},jn=function(n,t,e,s){if(t.linkedProps){var i=t.linkedProps.split(","),p={},a,c,o,f,v,u;for(a=0;a<i.length;a++)c=i[a],o=t[c],o&&(Q(o.velocity)?f=o.velocity:(v=v||tn(n),f=v&&v.isTracking(c)?v.get(c):0),u=Math.abs(f/en(o,"resistance",s)),p[c]=parseFloat(e(n,c))+hn(f,u));return p}},xt=function(n,t,e,s,i,p){if(e===void 0&&(e=10),s===void 0&&(s=.2),i===void 0&&(i=1),dt(n)&&(n=En(n)[0]),!n)return 0;var a=0,c=q,o=t.inertia||t,f=An(n).get,v=en(o,"resistance",J.resistance),u,d,h,l,w,O,R,x,T,m;m=jn(n,o,f,v);for(u in o)$n[u]||(d=o[u],G(d)||(x=x||tn(n),x&&x.isTracking(u)?d=Q(d)?{velocity:d}:{velocity:x.get(u)}:(l=+d||0,h=Math.abs(l/v))),G(d)&&(Q(d.velocity)?l=d.velocity:(x=x||tn(n),l=x&&x.isTracking(u)?x.get(u):0),h=zn(s,e,Math.abs(l/en(d,"resistance",v))),w=parseFloat(f(n,u))||0,O=w+hn(l,h),"end"in d&&(d=Nn(d,m&&u in m?m:O,d.max,d.min,u,o.radius,l),K===t&&(K=o=gt(t)),o[u]=ht(d,o[u],"end")),"max"in d&&O>+d.max+Rn?(T=d.unitFactor||J.unitFactors[u]||1,R=w>d.max&&d.min!==d.max||l*T>-15&&l*T<45?s+(e-s)*.1:_n(w,d.max,l),R+i<c&&(c=R+i)):"min"in d&&O<+d.min-Rn&&(T=d.unitFactor||J.unitFactors[u]||1,R=w<d.min&&d.min!==d.max||l*T>-45&&l*T<15?s+(e-s)*.1:_n(w,d.min,l),R+i<c&&(c=R+i)),R>a&&(a=R)),h>a&&(a=h));return a>c&&(a=c),a>e?e:a<s?s:a},kn=function(){k=Fn(),k&&(bn=k.parseEase,En=k.utils.toArray,Xn=k.utils.getUnit,An=k.core.getCache,zn=k.utils.clamp,pn=k.core.getStyleSaver,Dn=k.core.reverting||function(){},dn=bn("power3"),un=dn(.05),Yn=k.core.PropTween,k.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),J=k.config(),k.registerPlugin(Z),Pn=1)},gn={version:"3.13.0",name:"inertia",register:function(n){k=n,kn()},init:function(n,t,e,s,i){Pn||kn();var p=tn(n);if(t==="auto"){if(!p){console.warn("No inertia tracking on "+n+". InertiaPlugin.track(target) first.");return}t=p.getAll()}this.styles=pn&&typeof n.style=="object"&&pn(n),this.target=n,this.tween=e,K=t;var a=n._gsap,c=a.get,o=t.duration,f=G(o),v=t.preventOvershoot||f&&o.overshoot===0,u=en(t,"resistance",J.resistance),d=Q(o)?o:xt(n,t,f&&o.max||10,f&&o.min||.2,f&&"overshoot"in o?+o.overshoot:v?0:1),h,l,w,O,R,x,T,m,P;t=K,K=0,P=jn(n,t,c,u);for(h in t)$n[h]||(l=t[h],fn(l)&&(l=l(s,n,i)),Q(l)?R=l:G(l)&&!isNaN(l.velocity)?R=+l.velocity:p&&p.isTracking(h)?R=p.get(h):console.warn("ERROR: No velocity was defined for "+n+" property: "+h),x=hn(R,d),m=0,w=c(n,h),O=Xn(w),w=parseFloat(w),G(l)&&(T=w+x,"end"in l&&(l=Nn(l,P&&h in P?P:T,l.max,l.min,h,t.radius,R)),"max"in l&&+l.max<T?v||l.preventOvershoot?x=l.max-w:m=l.max-w-x:"min"in l&&+l.min>T&&(v||l.preventOvershoot?x=l.min-w:m=l.min-w-x)),this._props.push(h),this.styles&&this.styles.save(h),this._pt=new Yn(this._pt,n,h,w,0,ft,0,a.set(n,h,this)),this._pt.u=O||0,this._pt.c1=x,this._pt.c2=m);return e.duration(d),pt},render:function(n,t){var e=t._pt;if(n=dn(t.tween._time/t.tween._dur),n||!Dn())for(;e;)e.set(e.t,e.p,ut(e.s+e.c1*n+e.c2*n*n)+e.u,e.d,n),e=e._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(r){return gn[r]=Z[r]});Fn()&&k.registerPlugin(gn);L.registerPlugin(gn);const vt=(r,n)=>{let t=0;return function(...e){const s=performance.now();s-t>=n&&(t=s,r.apply(this,e))}};function Sn(r){const n=r.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:{r:0,g:0,b:0}}const mt=({dotSize:r=16,gap:n=32,baseColor:t="#5227FF",activeColor:e="#5227FF",proximity:s=150,speedTrigger:i=100,shockRadius:p=250,shockStrength:a=5,maxSpeed:c=5e3,resistance:o=750,returnDuration:f=1.5,className:v="",style:u})=>{const d=C.useRef(null),h=C.useRef(null),l=C.useRef([]),w=C.useRef({x:0,y:0,vx:0,vy:0,speed:0,lastTime:0,lastX:0,lastY:0}),O=C.useMemo(()=>Sn(t),[t]),R=C.useMemo(()=>Sn(e),[e]),x=C.useMemo(()=>{if(typeof window>"u"||!window.Path2D)return null;const m=new window.Path2D;return m.arc(0,0,r/2,0,Math.PI*2),m},[r]),T=C.useCallback(()=>{const m=d.current,P=h.current;if(!m||!P)return;const{width:z,height:_}=m.getBoundingClientRect(),S=window.devicePixelRatio||1;P.width=z*S,P.height=_*S,P.style.width=`${z}px`,P.style.height=`${_}px`;const y=P.getContext("2d");y&&y.scale(S,S);const D=Math.floor((z+n)/(r+n)),b=Math.floor((_+n)/(r+n)),X=r+n,Y=X*D-n,A=X*b-n,E=z-Y,N=_-A,M=E/2+r/2,nn=N/2+r/2,I=[];for(let $=0;$<b;$++)for(let W=0;W<D;W++){const sn=M+W*X,Ln=nn+$*X;I.push({cx:sn,cy:Ln,xOffset:0,yOffset:0,_inertiaApplied:!1})}l.current=I},[r,n]);return C.useEffect(()=>{if(!x)return;let m;const P=s*s,z=()=>{const _=h.current;if(!_)return;const S=_.getContext("2d");if(!S)return;S.clearRect(0,0,_.width,_.height);const{x:y,y:D}=w.current;for(const b of l.current){const X=b.cx+b.xOffset,Y=b.cy+b.yOffset,A=b.cx-y,E=b.cy-D,N=A*A+E*E;let M=t;if(N<=P){const I=1-Math.sqrt(N)/s,$=Math.round(O.r+(R.r-O.r)*I),W=Math.round(O.g+(R.g-O.g)*I),sn=Math.round(O.b+(R.b-O.b)*I);M=`rgb(${$},${W},${sn})`}S.save(),S.translate(X,Y),S.fillStyle=M,S.fill(x),S.restore()}m=requestAnimationFrame(z)};return z(),()=>cancelAnimationFrame(m)},[s,t,R,O,x]),C.useEffect(()=>{T();let m=null;return"ResizeObserver"in window?(m=new ResizeObserver(T),d.current&&m.observe(d.current)):window.addEventListener("resize",T),()=>{m?m.disconnect():window.removeEventListener("resize",T)}},[T]),C.useEffect(()=>{const m=_=>{const S=performance.now(),y=w.current,D=y.lastTime?S-y.lastTime:16,b=_.clientX-y.lastX,X=_.clientY-y.lastY;let Y=b/D*1e3,A=X/D*1e3,E=Math.hypot(Y,A);if(E>c){const M=c/E;Y*=M,A*=M,E=c}y.lastTime=S,y.lastX=_.clientX,y.lastY=_.clientY,y.vx=Y,y.vy=A,y.speed=E;const N=h.current.getBoundingClientRect();y.x=_.clientX-N.left,y.y=_.clientY-N.top;for(const M of l.current){const nn=Math.hypot(M.cx-y.x,M.cy-y.y);if(E>i&&nn<s&&!M._inertiaApplied){M._inertiaApplied=!0,L.killTweensOf(M);const I=M.cx-y.x+Y*.005,$=M.cy-y.y+A*.005;L.to(M,{inertia:{xOffset:I,yOffset:$,resistance:o},onComplete:()=>{L.to(M,{xOffset:0,yOffset:0,duration:f,ease:"elastic.out(1,0.75)"}),M._inertiaApplied=!1}})}}},P=_=>{const S=h.current.getBoundingClientRect(),y=_.clientX-S.left,D=_.clientY-S.top;for(const b of l.current){const X=Math.hypot(b.cx-y,b.cy-D);if(X<p&&!b._inertiaApplied){b._inertiaApplied=!0,L.killTweensOf(b);const Y=Math.max(0,1-X/p),A=(b.cx-y)*a*Y,E=(b.cy-D)*a*Y;L.to(b,{inertia:{xOffset:A,yOffset:E,resistance:o},onComplete:()=>{L.to(b,{xOffset:0,yOffset:0,duration:f,ease:"elastic.out(1,0.75)"}),b._inertiaApplied=!1}})}}},z=vt(m,50);return window.addEventListener("mousemove",z,{passive:!0}),window.addEventListener("click",P),()=>{window.removeEventListener("mousemove",z),window.removeEventListener("click",P)}},[c,i,s,o,f,p,a]),g.jsx("section",{className:`dot-grid ${v}`,style:u,children:g.jsx("div",{ref:d,className:"dot-grid__wrap",children:g.jsx("canvas",{ref:h,className:"dot-grid__canvas"})})})},St=()=>{const[r,n]=C.useState(5),[t,e]=C.useState(15),[s,i]=C.useState("#271E37"),[p,a]=C.useState("#5227FF"),[c,o]=C.useState(120),[f,v]=C.useState(250),[u,d]=C.useState(5),[h,l]=C.useState(750),[w,O]=C.useState(1.5),R=[{name:"dotSize",type:"number",default:"16",description:"Size of each dot in pixels."},{name:"gap",type:"number",default:"32",description:"Gap between each dot in pixels."},{name:"baseColor",type:"string",default:"'#5227FF'",description:"Base color of the dots."},{name:"activeColor",type:"string",default:"'#5227FF'",description:"Color of dots when hovered or activated."},{name:"proximity",type:"number",default:"150",description:"Radius around the mouse pointer within which dots react."},{name:"speedTrigger",type:"number",default:"100",description:"Mouse speed threshold to trigger inertia effect."},{name:"shockRadius",type:"number",default:"250",description:"Radius of the shockwave effect on click."},{name:"shockStrength",type:"number",default:"5",description:"Strength of the shockwave effect on click."},{name:"maxSpeed",type:"number",default:"5000",description:"Maximum speed for inertia calculation."},{name:"resistance",type:"number",default:"750",description:"Resistance for the inertia effect."},{name:"returnDuration",type:"number",default:"1.5",description:"Duration for dots to return to their original position after inertia."},{name:"className",type:"string",default:"''",description:"Additional CSS classes for the component."},{name:"style",type:"React.CSSProperties",default:"{}",description:"Inline styles for the component."}];return g.jsxs(Hn,{children:[g.jsxs(Wn,{children:[g.jsxs(Bn,{position:"relative",className:"demo-container",h:600,overflow:"hidden",children:[g.jsx(mt,{dotSize:r,gap:t,baseColor:s,activeColor:p,proximity:c,shockRadius:f,shockStrength:u,resistance:h,returnDuration:w}),g.jsx(tt,{pillText:"New Background",headline:"Organized chaos with every cursor movement!"})]}),g.jsxs(Zn,{children:[g.jsxs(xn,{alignItems:"center",mb:4,children:[g.jsx(vn,{fontSize:"sm",mr:2,children:"Base Color"}),g.jsx(mn,{type:"color",value:s,onChange:x=>{i(x.target.value)},width:"50px"})]}),g.jsxs(xn,{alignItems:"center",mb:4,children:[g.jsx(vn,{fontSize:"sm",mr:2,children:"Active Color"}),g.jsx(mn,{type:"color",value:p,onChange:x=>{a(x.target.value)},width:"50px"})]}),g.jsx(j,{title:"Dot Size",min:2,max:50,step:1,value:r,onChange:n}),g.jsx(j,{title:"Gap",min:5,max:100,step:1,value:t,onChange:e}),g.jsx(j,{title:"Proximity",min:50,max:500,step:10,value:c,onChange:o}),g.jsx(j,{title:"Shock Radius",min:50,max:500,step:10,value:f,onChange:v}),g.jsx(j,{title:"Shock Strength",min:1,max:20,step:1,value:u,onChange:d}),g.jsx(j,{title:"Resistance (Inertia)",min:100,max:2e3,step:50,value:h,onChange:l}),g.jsx(j,{title:"Return Duration (Inertia)",min:.1,max:5,step:.1,value:w,onChange:O})]}),g.jsx(Vn,{data:R}),g.jsx(nt,{dependencyList:["gsap"]})]}),g.jsx(Un,{children:g.jsx(Jn,{codeObject:yn})}),g.jsx(Kn,{children:g.jsx(Qn,{...yn})})]})};export{St as default};
