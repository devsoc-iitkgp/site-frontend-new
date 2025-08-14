import{g as se,r as c,a as T,j as t,B as ie}from"./index-j7DW7U0N.js";import{T as le,P as ue,a as fe,C as de,b as pe,c as me,d as be}from"./PropTable-Baf4PZpP.js";import{C as ge}from"./Customize-Dq9g9yhm.js";import{P as he}from"./PreviewSelect-BhKIbQB2.js";import{P as _}from"./PreviewSlider-D0sSZbsU.js";import{P as K}from"./PreviewSwitch-_xo3rdWG.js";import{D as ve}from"./Dependencies-BSh7s3YA.js";import"./field-BmHOm1Rn.js";const Re=`import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cubes.css";

const Cubes = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = "power3.out",
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = "1px solid #fff",
  faceColor = "#060010",
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = "#fff",
  rippleSpeed = 2,
}) => {
  const sceneRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimerRef = useRef(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0, y: 0 });
  const simTargetRef = useRef({ x: 0, y: 0 });
  const simRAFRef = useRef(null);

  const colGap =
    typeof cellGap === "number"
      ? \`\${cellGap}px\`
      : (cellGap)?.col !== undefined
        ? \`\${(cellGap).col}px\`
        : "5%";
  const rowGap =
    typeof cellGap === "number"
      ? \`\${cellGap}px\`
      : (cellGap)?.row !== undefined
        ? \`\${(cellGap).row}px\`
        : "5%";

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter, colCenter) => {
      if (!sceneRef.current) return;
      sceneRef.current
        .querySelectorAll(".cube")
        .forEach((cube) => {
          const r = +cube.dataset.row;
          const c = +cube.dataset.col;
          const dist = Math.hypot(r - rowCenter, c - colCenter);
          if (dist <= radius) {
            const pct = 1 - dist / radius;
            const angle = pct * maxAngle;
            gsap.to(cube, {
              duration: enterDur,
              ease: easing,
              overwrite: true,
              rotateX: -angle,
              rotateY: angle,
            });
          } else {
            gsap.to(cube, {
              duration: leaveDur,
              ease: "power3.out",
              overwrite: true,
              rotateX: 0,
              rotateY: 0,
            });
          }
        });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    (e) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll(".cube").forEach((cube) =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      
      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    (e) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      
      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings = {};
      sceneRef.current
        .querySelectorAll(".cube")
        .forEach((cube) => {
            const r = +cube.dataset.row;
            const c = +cube.dataset.col;
            const dist = Math.hypot(r - rowHit, c - colHit);
            const ring = Math.round(dist);
            if (!rings[ring]) rings[ring] = [];
            rings[ring].push(cube);
          });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach((ring) => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube) =>
            Array.from(cube.querySelectorAll(".cube-face"))
          );

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: "power3.out",
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: "power3.out",
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize,
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) {
        cancelAnimationFrame(simRAFRef.current);
      }
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", resetAll);
    el.addEventListener("click", onClick);
    
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", resetAll);
      el.removeEventListener("click", onClick);
      
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      
      rafRef.current != null && cancelAnimationFrame(rafRef.current);
      idleTimerRef.current && clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle = {
    gridTemplateColumns: cubeSize
      ? \`repeat(\${gridSize}, \${cubeSize}px)\`
      : \`repeat(\${gridSize}, 1fr)\`,
    gridTemplateRows: cubeSize
      ? \`repeat(\${gridSize}, \${cubeSize}px)\`
      : \`repeat(\${gridSize}, 1fr)\`,
    columnGap: colGap,
    rowGap: rowGap,
  };
  const wrapperStyle = {
    "--cube-face-border": borderStyle,
    "--cube-face-bg": faceColor,
    "--cube-face-shadow":
      shadow === true ? "0 0 6px rgba(0,0,0,.5)" : shadow || "none",
    ...(cubeSize
      ? {
        width: \`\${gridSize * cubeSize}px\`,
        height: \`\${gridSize * cubeSize}px\`,
      }
      : {}),
  };

  return (
    <div className="default-animation" style={wrapperStyle}>
      <div
        ref={sceneRef}
        className="default-animation--scene"
        style={sceneStyle}
      >
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div key={\`\${r}-\${c}\`} className="cube" data-row={r} data-col={c}>
              <div className="cube-face cube-face--top" />
              <div className="cube-face cube-face--bottom" />
              <div className="cube-face cube-face--left" />
              <div className="cube-face cube-face--right" />
              <div className="cube-face cube-face--front" />
              <div className="cube-face cube-face--back" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
`,ye=`:root {
  --col-gap: 5%;
  --row-gap: 5%;
  --cube-perspective: 99999999px;
  --cube-face-border: 1px solid #fff;
  --cube-face-bg: #060010;
}

.default-animation {
  position: relative;
  width: 50%;
  aspect-ratio: 1 / 1;
  height: auto;
}

.default-animation--scene {
  display: grid;
  width: 100%;
  height: 100%;
  column-gap: var(--col-gap);
  row-gap: var(--row-gap);
  perspective: var(--cube-perspective);
  grid-auto-rows: 1fr;
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  transform-style: preserve-3d;
}

.cube::before {
  content: '';
  position: absolute;
  top: -36px;
  right: -36px;
  bottom: -36px;
  left: -36px;
}

.default-animation .cube-face {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cube-face-bg);
  border: var(--cube-face-border);
  opacity: 1;
}

.default-animation .cube-face--top {
  transform: translateY(-50%) rotateX(90deg);
}

.default-animation .cube-face--bottom {
  transform: translateY(50%) rotateX(-90deg);
}

.default-animation .cube-face--left {
  transform: translateX(-50%) rotateY(-90deg);
}

.default-animation .cube-face--right {
  transform: translateX(50%) rotateY(90deg);
}

.default-animation .cube-face--back,
.default-animation .cube-face--front {
  transform: rotateY(-90deg) translateX(50%) rotateY(90deg);
}

@media (max-width: 768px) {
  .default-animation {
    width: 90%;
  }
}`,Se=`import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

const Cubes = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = "power3.out",
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = "1px solid #fff",
  faceColor = "#060010",
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = "#fff",
  rippleSpeed = 2,
}) => {
  const sceneRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimerRef = useRef(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0, y: 0 });
  const simTargetRef = useRef({ x: 0, y: 0 });
  const simRAFRef = useRef(null);

  const colGap =
    typeof cellGap === "number"
      ? \`\${cellGap}px\`
      : (cellGap)?.col !== undefined
        ? \`\${(cellGap).col}px\`
        : "5%";
  const rowGap =
    typeof cellGap === "number"
      ? \`\${cellGap}px\`
      : (cellGap)?.row !== undefined
        ? \`\${(cellGap).row}px\`
        : "5%";

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter, colCenter) => {
      if (!sceneRef.current) return;
      sceneRef.current
        .querySelectorAll(".cube")
          .forEach((cube) => {
            const r = +cube.dataset.row;
            const c = +cube.dataset.col;
            const dist = Math.hypot(r - rowCenter, c - colCenter);
            if (dist <= radius) {
              const pct = 1 - dist / radius;
              const angle = pct * maxAngle;
              gsap.to(cube, {
                duration: enterDur,
                ease: easing,
                overwrite: true,
                rotateX: -angle,
                rotateY: angle,
              });
            } else {
              gsap.to(cube, {
                duration: leaveDur,
                ease: "power3.out",
                overwrite: true,
                rotateX: 0,
                rotateY: 0,
              });
            }
          });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    (e) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll(".cube").forEach((cube) =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      
      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    (e) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      
      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings = {};
      sceneRef.current
        .querySelectorAll(".cube")
          .forEach((cube) => {
            const r = +cube.dataset.row;
            const c = +cube.dataset.col;
            const dist = Math.hypot(r - rowHit, c - colHit);
            const ring = Math.round(dist);
            if (!rings[ring]) rings[ring] = [];
            rings[ring].push(cube);
          });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach((ring) => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube) =>
            Array.from(cube.querySelectorAll(".cube-face"))
          );

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: "power3.out",
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: "power3.out",
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize,
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) cancelAnimationFrame(simRAFRef.current);
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", resetAll);
    el.addEventListener("click", onClick);
    
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", resetAll);
      el.removeEventListener("click", onClick);
      
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle = {
    gridTemplateColumns: cubeSize
      ? \`repeat(\${gridSize}, \${cubeSize}px)\`
      : \`repeat(\${gridSize}, 1fr)\`,
    gridTemplateRows: cubeSize
      ? \`repeat(\${gridSize}, \${cubeSize}px)\`
      : \`repeat(\${gridSize}, 1fr)\`,
    columnGap: colGap,
    rowGap: rowGap,
    perspective: "99999999px",
    gridAutoRows: "1fr",
  };
  const wrapperStyle = {
    "--cube-face-border": borderStyle,
    "--cube-face-bg": faceColor,
    "--cube-face-shadow":
      shadow === true ? "0 0 6px rgba(0,0,0,.5)" : shadow || "none",
    ...(cubeSize
      ? {
        width: \`\${gridSize * cubeSize}px\`,
        height: \`\${gridSize * cubeSize}px\`,
      }
      : {}),
  };

  return (
    <div
      className="relative w-1/2 max-md:w-11/12 aspect-square"
      style={wrapperStyle}
    >
      <div ref={sceneRef} className="grid w-full h-full" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div
              key={\`\${r}-\${c}\`}
              className="cube relative w-full h-full aspect-square [transform-style:preserve-3d]"
              data-row={r}
              data-col={c}
            >
              <span className="absolute pointer-events-none -inset-9" />

              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateY(-50%) rotateX(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateY(50%) rotateX(-90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateX(-50%) rotateY(-90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateX(50%) rotateY(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "rotateY(-90deg) translateX(50%) rotateY(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "rotateY(90deg) translateX(-50%) rotateY(-90deg)",
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
`,Ce=`import React, { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cubes.css";

interface Gap {
  row: number;
  col: number;
}
interface Duration {
  enter: number;
  leave: number;
}

export interface CubesProps {
  gridSize?: number;
  cubeSize?: number;
  maxAngle?: number;
  radius?: number;
  easing?: gsap.EaseString;
  duration?: Duration;
  cellGap?: number | Gap;
  borderStyle?: string;
  faceColor?: string;
  shadow?: boolean | string;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
  rippleColor?: string;
  rippleSpeed?: number;
}

const Cubes: React.FC<CubesProps> = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = "power3.out",
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = "1px solid #fff",
  faceColor = "#060010",
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = "#fff",
  rippleSpeed = 2,
}) => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simRAFRef = useRef<number | null>(null);

  const colGap =
    typeof cellGap === "number"
      ? \`\${cellGap}px\`
      : (cellGap as Gap)?.col !== undefined
        ? \`\${(cellGap as Gap).col}px\`
        : "5%";
  const rowGap =
    typeof cellGap === "number"
      ? \`\${cellGap}px\`
      : (cellGap as Gap)?.row !== undefined
        ? \`\${(cellGap as Gap).row}px\`
        : "5%";

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter: number, colCenter: number) => {
      if (!sceneRef.current) return;
      sceneRef.current
        .querySelectorAll<HTMLDivElement>(".cube")
        .forEach((cube) => {
          const r = +cube.dataset.row!;
          const c = +cube.dataset.col!;
          const dist = Math.hypot(r - rowCenter, c - colCenter);
          if (dist <= radius) {
            const pct = 1 - dist / radius;
            const angle = pct * maxAngle;
            gsap.to(cube, {
              duration: enterDur,
              ease: easing,
              overwrite: true,
              rotateX: -angle,
              rotateY: angle,
            });
          } else {
            gsap.to(cube, {
              duration: leaveDur,
              ease: "power3.out",
              overwrite: true,
              rotateX: 0,
              rotateY: 0,
            });
          }
        });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll<HTMLDivElement>(".cube").forEach((cube) =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      
      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      
      const clientX = (e as MouseEvent).clientX || 
                     ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientX);
      const clientY = (e as MouseEvent).clientY || 
                     ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientY);
      
      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings: Record<number, HTMLDivElement[]> = {};
      sceneRef.current
        .querySelectorAll<HTMLDivElement>(".cube")
        .forEach((cube) => {
          const r = +cube.dataset.row!;
          const c = +cube.dataset.col!;
          const dist = Math.hypot(r - rowHit, c - colHit);
          const ring = Math.round(dist);
          if (!rings[ring]) rings[ring] = [];
          rings[ring].push(cube);
        });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach((ring) => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube) =>
            Array.from(cube.querySelectorAll<HTMLElement>(".cube-face"))
          );

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: "power3.out",
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: "power3.out",
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize,
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) {
        cancelAnimationFrame(simRAFRef.current);
      }
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", resetAll);
    el.addEventListener("click", onClick);
    
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", resetAll);
      el.removeEventListener("click", onClick);
      
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      
      rafRef.current != null && cancelAnimationFrame(rafRef.current);
      idleTimerRef.current && clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle: React.CSSProperties = {
    gridTemplateColumns: cubeSize
      ? \`repeat(\${gridSize}, \${cubeSize}px)\`
      : \`repeat(\${gridSize}, 1fr)\`,
    gridTemplateRows: cubeSize
      ? \`repeat(\${gridSize}, \${cubeSize}px)\`
      : \`repeat(\${gridSize}, 1fr)\`,
    columnGap: colGap,
    rowGap: rowGap,
  };
  const wrapperStyle = {
    "--cube-face-border": borderStyle,
    "--cube-face-bg": faceColor,
    "--cube-face-shadow":
      shadow === true ? "0 0 6px rgba(0,0,0,.5)" : shadow || "none",
    ...(cubeSize
      ? {
          width: \`\${gridSize * cubeSize}px\`,
          height: \`\${gridSize * cubeSize}px\`,
        }
      : {}),
  } as React.CSSProperties;

  return (
    <div className="default-animation" style={wrapperStyle}>
      <div
        ref={sceneRef}
        className="default-animation--scene"
        style={sceneStyle}
      >
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div key={\`\${r}-\${c}\`} className="cube" data-row={r} data-col={c}>
              <div className="cube-face cube-face--top" />
              <div className="cube-face cube-face--bottom" />
              <div className="cube-face cube-face--left" />
              <div className="cube-face cube-face--right" />
              <div className="cube-face cube-face--front" />
              <div className="cube-face cube-face--back" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
`,we=`import React, { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

interface Gap {
  row: number;
  col: number;
}
interface Duration {
  enter: number;
  leave: number;
}

export interface CubesProps {
  gridSize?: number;
  cubeSize?: number;
  maxAngle?: number;
  radius?: number;
  easing?: gsap.EaseString;
  duration?: Duration;
  cellGap?: number | Gap;
  borderStyle?: string;
  faceColor?: string;
  shadow?: boolean | string;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
  rippleColor?: string;
  rippleSpeed?: number;
}

const Cubes: React.FC<CubesProps> = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = "power3.out",
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = "1px solid #fff",
  faceColor = "#060010",
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = "#fff",
  rippleSpeed = 2,
}) => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simRAFRef = useRef<number | null>(null);

  const colGap =
    typeof cellGap === "number"
      ? \`\${cellGap}px\`
      : (cellGap as Gap)?.col !== undefined
        ? \`\${(cellGap as Gap).col}px\`
        : "5%";
  const rowGap =
    typeof cellGap === "number"
      ? \`\${cellGap}px\`
      : (cellGap as Gap)?.row !== undefined
        ? \`\${(cellGap as Gap).row}px\`
        : "5%";

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter: number, colCenter: number) => {
      if (!sceneRef.current) return;
      sceneRef.current
        .querySelectorAll<HTMLDivElement>(".cube")
        .forEach((cube) => {
          const r = +cube.dataset.row!;
          const c = +cube.dataset.col!;
          const dist = Math.hypot(r - rowCenter, c - colCenter);
          if (dist <= radius) {
            const pct = 1 - dist / radius;
            const angle = pct * maxAngle;
            gsap.to(cube, {
              duration: enterDur,
              ease: easing,
              overwrite: true,
              rotateX: -angle,
              rotateY: angle,
            });
          } else {
            gsap.to(cube, {
              duration: leaveDur,
              ease: "power3.out",
              overwrite: true,
              rotateX: 0,
              rotateY: 0,
            });
          }
        });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll<HTMLDivElement>(".cube").forEach((cube) =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault(); 
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      
      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      
      // 터치와 마우스 모두 지원
      const clientX = (e as MouseEvent).clientX || 
                     ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientX);
      const clientY = (e as MouseEvent).clientY || 
                     ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientY);
      
      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings: Record<number, HTMLDivElement[]> = {};
      sceneRef.current
        .querySelectorAll<HTMLDivElement>(".cube")
        .forEach((cube) => {
          const r = +cube.dataset.row!;
          const c = +cube.dataset.col!;
          const dist = Math.hypot(r - rowHit, c - colHit);
          const ring = Math.round(dist);
          if (!rings[ring]) rings[ring] = [];
          rings[ring].push(cube);
        });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach((ring) => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube) =>
            Array.from(cube.querySelectorAll<HTMLElement>(".cube-face"))
          );

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: "power3.out",
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: "power3.out",
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize,
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) cancelAnimationFrame(simRAFRef.current);
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", resetAll);
    el.addEventListener("click", onClick);
    
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", resetAll);
      el.removeEventListener("click", onClick);
      
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle: React.CSSProperties = {
    gridTemplateColumns: cubeSize
      ? \`repeat(\${gridSize}, \${cubeSize}px)\`
      : \`repeat(\${gridSize}, 1fr)\`,
    gridTemplateRows: cubeSize
      ? \`repeat(\${gridSize}, \${cubeSize}px)\`
      : \`repeat(\${gridSize}, 1fr)\`,
    columnGap: colGap,
    rowGap: rowGap,
    perspective: "99999999px",
    gridAutoRows: "1fr",
  };
  const wrapperStyle = {
    "--cube-face-border": borderStyle,
    "--cube-face-bg": faceColor,
    "--cube-face-shadow":
      shadow === true ? "0 0 6px rgba(0,0,0,.5)" : shadow || "none",
    ...(cubeSize
      ? {
          width: \`\${gridSize * cubeSize}px\`,
          height: \`\${gridSize * cubeSize}px\`,
        }
      : {}),
  } as React.CSSProperties;

  return (
    <div
      className="relative w-1/2 max-md:w-11/12 aspect-square"
      style={wrapperStyle}
    >
      <div ref={sceneRef} className="grid w-full h-full" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div
              key={\`\${r}-\${c}\`}
              className="cube relative w-full h-full aspect-square [transform-style:preserve-3d]"
              data-row={r}
              data-col={c}
            >
              <span className="absolute pointer-events-none -inset-9" />

              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateY(-50%) rotateX(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateY(50%) rotateX(-90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateX(-50%) rotateY(-90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "translateX(50%) rotateY(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "rotateY(-90deg) translateX(50%) rotateY(90deg)",
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: "var(--cube-face-bg)",
                  border: "var(--cube-face-border)",
                  boxShadow: "var(--cube-face-shadow)",
                  transform: "rotateY(90deg) translateX(-50%) rotateY(-90deg)",
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
`,Q={...se("Animations/Cubes"),installation:"npm install gsap",usage:`// CREDIT
// Component inspired from Can Tastemel's original work for the lambda.ai landing page
// https://cantastemel.com
  
import Cubes from './Cubes'

<div style={{ height: '600px', position: 'relative' }}>
  <Cubes 
    gridSize={8}
    maxAngle={60}
    radius={4}
    borderStyle="2px dashed #5227FF"
    faceColor="#1a1a2e"
    rippleColor="#ff6b6b"
    rippleSpeed={1.5}
    autoAnimate={true}
    rippleOnClick={true}
  />
</div>`,code:Re,css:ye,tailwind:Se,tsCode:Ce,tsTailwind:we},Ae=({gridSize:n=10,cubeSize:l,maxAngle:y=45,radius:S=3,easing:C="power3.out",duration:E={enter:.3,leave:.6},cellGap:a,borderStyle:H="1px solid #fff",faceColor:b="#060010",shadow:k=!1,autoAnimate:w=!0,rippleOnClick:M=!0,rippleColor:z="#fff",rippleSpeed:g=2})=>{const i=c.useRef(null),u=c.useRef(null),f=c.useRef(null),h=c.useRef(!1),I=c.useRef({x:0,y:0}),Y=c.useRef({x:0,y:0}),D=c.useRef(null),V=typeof a=="number"?`${a}px`:(a==null?void 0:a.col)!==void 0?`${a.col}px`:"5%",Z=typeof a=="number"?`${a}px`:(a==null?void 0:a.row)!==void 0?`${a.row}px`:"5%",J=E.enter,L=E.leave,v=c.useCallback((e,r)=>{i.current&&i.current.querySelectorAll(".cube").forEach(o=>{const s=+o.dataset.row,d=+o.dataset.col,p=Math.hypot(s-e,d-r);if(p<=S){const F=(1-p/S)*y;T.to(o,{duration:J,ease:C,overwrite:!0,rotateX:-F,rotateY:F})}else T.to(o,{duration:L,ease:"power3.out",overwrite:!0,rotateX:0,rotateY:0})})},[S,y,J,L,C]),X=c.useCallback(e=>{h.current=!0,f.current&&clearTimeout(f.current);const r=i.current.getBoundingClientRect(),o=r.width/n,s=r.height/n,d=(e.clientX-r.left)/o,p=(e.clientY-r.top)/s;u.current&&cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>v(p,d)),f.current=setTimeout(()=>{h.current=!1},3e3)},[n,v]),A=c.useCallback(()=>{i.current&&i.current.querySelectorAll(".cube").forEach(e=>T.to(e,{duration:L,rotateX:0,rotateY:0,ease:"power3.out"}))},[L]),N=c.useCallback(e=>{e.preventDefault(),h.current=!0,f.current&&clearTimeout(f.current);const r=i.current.getBoundingClientRect(),o=r.width/n,s=r.height/n,d=e.touches[0],p=(d.clientX-r.left)/o,$=(d.clientY-r.top)/s;u.current&&cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>v($,p)),f.current=setTimeout(()=>{h.current=!1},3e3)},[n,v]),P=c.useCallback(()=>{h.current=!0},[]),j=c.useCallback(()=>{i.current&&A()},[A]),q=c.useCallback(e=>{if(!M||!i.current)return;const r=i.current.getBoundingClientRect(),o=r.width/n,s=r.height/n,d=e.clientX||e.touches&&e.touches[0].clientX,p=e.clientY||e.touches&&e.touches[0].clientY,$=Math.floor((d-r.left)/o),F=Math.floor((p-r.top)/s),te=.15,re=.3,ce=.6,oe=te/g,W=re/g,ae=ce/g,x={};i.current.querySelectorAll(".cube").forEach(m=>{const R=+m.dataset.row,G=+m.dataset.col,O=Math.hypot(R-F,G-$),B=Math.round(O);x[B]||(x[B]=[]),x[B].push(m)}),Object.keys(x).map(Number).sort((m,R)=>m-R).forEach(m=>{const R=m*oe,G=x[m].flatMap(O=>Array.from(O.querySelectorAll(".cube-face")));T.to(G,{backgroundColor:z,duration:W,delay:R,ease:"power3.out"}),T.to(G,{backgroundColor:b,duration:W,delay:R+W+ae,ease:"power3.out"})})},[M,n,b,z,g]);c.useEffect(()=>{if(!w||!i.current)return;I.current={x:Math.random()*n,y:Math.random()*n},Y.current={x:Math.random()*n,y:Math.random()*n};const e=.02,r=()=>{if(!h.current){const o=I.current,s=Y.current;o.x+=(s.x-o.x)*e,o.y+=(s.y-o.y)*e,v(o.y,o.x),Math.hypot(o.x-s.x,o.y-s.y)<.1&&(Y.current={x:Math.random()*n,y:Math.random()*n})}D.current=requestAnimationFrame(r)};return D.current=requestAnimationFrame(r),()=>{D.current!=null&&cancelAnimationFrame(D.current)}},[w,n,v]),c.useEffect(()=>{const e=i.current;if(e)return e.addEventListener("pointermove",X),e.addEventListener("pointerleave",A),e.addEventListener("click",q),e.addEventListener("touchmove",N,{passive:!1}),e.addEventListener("touchstart",P,{passive:!0}),e.addEventListener("touchend",j,{passive:!0}),()=>{e.removeEventListener("pointermove",X),e.removeEventListener("pointerleave",A),e.removeEventListener("click",q),e.removeEventListener("touchmove",N),e.removeEventListener("touchstart",P),e.removeEventListener("touchend",j),u.current!=null&&cancelAnimationFrame(u.current),f.current&&clearTimeout(f.current)}},[X,A,q,N,P,j]);const U=Array.from({length:n}),ee={gridTemplateColumns:l?`repeat(${n}, ${l}px)`:`repeat(${n}, 1fr)`,gridTemplateRows:l?`repeat(${n}, ${l}px)`:`repeat(${n}, 1fr)`,columnGap:V,rowGap:Z},ne={"--cube-face-border":H,"--cube-face-bg":b,"--cube-face-shadow":k===!0?"0 0 6px rgba(0,0,0,.5)":k||"none",...l?{width:`${n*l}px`,height:`${n*l}px`}:{}};return t.jsx("div",{className:"default-animation",style:ne,children:t.jsx("div",{ref:i,className:"default-animation--scene",style:ee,children:U.map((e,r)=>U.map((o,s)=>t.jsxs("div",{className:"cube","data-row":r,"data-col":s,children:[t.jsx("div",{className:"cube-face cube-face--top"}),t.jsx("div",{className:"cube-face cube-face--bottom"}),t.jsx("div",{className:"cube-face cube-face--left"}),t.jsx("div",{className:"cube-face cube-face--right"}),t.jsx("div",{className:"cube-face cube-face--front"}),t.jsx("div",{className:"cube-face cube-face--back"})]},`${r}-${s}`)))})})},$e=()=>{const[n,l]=c.useState("2px dashed #B19EEF"),[y,S]=c.useState(10),[C,E]=c.useState(45),[a,H]=c.useState(3),[b,k]=c.useState(!0),[w,M]=c.useState(!0),z=[{value:"2px dotted #fff",label:"Dotted White"},{value:"2px dashed #B19EEF",label:"Dashed Purple"},{value:"3px solid #fff",label:"Solid White"}],g=[{name:"gridSize",type:"number",default:"10",description:"The size of the grid (number of cubes per row/column)"},{name:"cubeSize",type:"number",default:"undefined",description:"Fixed size of each cube in pixels. If not provided, cubes will be responsive"},{name:"maxAngle",type:"number",default:"45",description:"Maximum rotation angle for the tilt effect in degrees"},{name:"radius",type:"number",default:"3",description:"Radius of the tilt effect (how many cubes around the cursor are affected)"},{name:"easing",type:"string",default:"'power3.out'",description:"GSAP easing function for the tilt animation"},{name:"duration",type:"object",default:"{ enter: 0.3, leave: 0.6 }",description:"Animation duration for enter and leave effects"},{name:"cellGap",type:"number | object",default:"undefined",description:"Gap between cubes. Can be a number or object with row/col properties"},{name:"borderStyle",type:"string",default:"'1px solid #fff'",description:"CSS border style for cube faces"},{name:"faceColor",type:"string",default:"'#060010'",description:"Background color for cube faces"},{name:"shadow",type:"boolean | string",default:"false",description:"Shadow effect for cubes. Can be boolean or custom CSS shadow"},{name:"autoAnimate",type:"boolean",default:"true",description:"Whether to automatically animate when user is idle"},{name:"rippleOnClick",type:"boolean",default:"true",description:"Whether to show ripple effect on click"},{name:"rippleColor",type:"string",default:"'#fff'",description:"Color of the ripple effect"},{name:"rippleSpeed",type:"number",default:"2",description:"Speed multiplier for the ripple animation"}];return t.jsxs(le,{children:[t.jsxs(ue,{children:[t.jsx(ie,{position:"relative",className:"demo-container",h:650,overflow:"hidden",children:t.jsx(Ae,{borderStyle:n,gridSize:y,maxAngle:C,radius:a,autoAnimate:b,rippleOnClick:w})}),t.jsxs(ge,{children:[t.jsx(he,{title:"Border Style",options:z,value:n,onChange:l,width:150}),t.jsx(_,{title:"Grid Size",min:6,max:12,step:1,value:y,onChange:S,width:150}),t.jsx(_,{title:"Max Angle",min:15,max:180,step:5,value:C,valueUnit:"°",onChange:E,width:150}),t.jsx(_,{title:"Radius",min:1,max:5,step:1,value:a,onChange:H,width:150}),t.jsx(K,{title:"Auto Animate",isChecked:b,onChange:k}),t.jsx(K,{title:"Ripple On Click",isChecked:w,onChange:M})]}),t.jsx(fe,{data:g}),t.jsx(ve,{dependencyList:["gsap"]})]}),t.jsx(de,{children:t.jsx(pe,{codeObject:Q})}),t.jsx(me,{children:t.jsx(be,{...Q})})]})};export{$e as default};
