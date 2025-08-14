import{r as i,j as e,l as re,m as le,n as de,a as s,g as fe,B as me,T as L}from"./index-j7DW7U0N.js";import{T as ge,P as pe,a as ve,C as Te,b as he,c as be,d as xe}from"./PropTable-Baf4PZpP.js";import{C as we}from"./Customize-Dq9g9yhm.js";import{D as Re}from"./Dependencies-BSh7s3YA.js";import{P as ye}from"./PreviewSlider-D0sSZbsU.js";import{P as Ce}from"./PreviewSwitch-_xo3rdWG.js";const Ee=i.forwardRef(function(t,m){const{templateAreas:r,column:u,row:n,autoFlow:f,autoRows:p,templateRows:b,autoColumns:v,templateColumns:g,inline:c,...y}=t;return e.jsx(re.div,{...y,ref:m,css:[{display:c?"inline-grid":"grid",gridTemplateAreas:r,gridAutoColumns:v,gridColumn:u,gridRow:n,gridAutoFlow:f,gridAutoRows:p,gridTemplateRows:b,gridTemplateColumns:g},t.css]})});function _(d){return de(d,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}const A=i.forwardRef(function(t,m){const{area:r,colSpan:u,colStart:n,colEnd:f,rowEnd:p,rowSpan:b,rowStart:v,...g}=t,c=i.useMemo(()=>le({gridArea:r,gridColumn:_(u),gridRow:_(b),gridColumnStart:n,gridColumnEnd:f,gridRowStart:v,gridRowEnd:p}),[r,u,n,f,p,b,v]);return e.jsx(re.div,{ref:m,css:[c,t.css],...g})}),Se=({targetSelector:d=".cursor-target",spinDuration:t=2,hideDefaultCursor:m=!0})=>{const r=i.useRef(null),u=i.useRef(null),n=i.useRef(null),f=i.useRef(null),p=i.useMemo(()=>({borderWidth:3,cornerSize:12,parallaxStrength:5e-5}),[]),b=i.useCallback((v,g)=>{r.current&&s.to(r.current,{x:v,y:g,duration:.1,ease:"power3.out"})},[]);return i.useEffect(()=>{if(!r.current)return;const v=document.body.style.cursor;m&&(document.body.style.cursor="none");const g=r.current;u.current=g.querySelectorAll(".target-cursor-corner");let c=null,y=null,C=null,z=!1,H=null;const W=l=>{y&&l.removeEventListener("mousemove",y),C&&l.removeEventListener("mouseleave",C),y=null,C=null};s.set(g,{xPercent:-50,yPercent:-50,x:window.innerWidth/2,y:window.innerHeight/2}),(()=>{n.current&&n.current.kill(),n.current=s.timeline({repeat:-1}).to(g,{rotation:"+=360",duration:t,ease:"none"})})();const k=l=>b(l.clientX,l.clientY);window.addEventListener("mousemove",k);const I=()=>{if(!c||!r.current)return;const l=s.getProperty(r.current,"x"),P=s.getProperty(r.current,"y"),E=document.elementFromPoint(l,P);E&&(E===c||E.closest(d)===c)||C&&C()};window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("mousemove",k);const te=()=>{f.current&&(s.to(f.current,{scale:.7,duration:.3}),s.to(r.current,{scale:.9,duration:.2}))},ne=()=>{f.current&&(s.to(f.current,{scale:1,duration:.3}),s.to(r.current,{scale:1,duration:.2}))};window.addEventListener("mousedown",te),window.addEventListener("mouseup",ne);const G=l=>{var K;const P=l.target,E=[];let x=P;for(;x&&x!==document.body;)x.matches(d)&&E.push(x),x=x.parentElement;const w=E[0]||null;if(!w||!r.current||!u.current||c===w)return;c&&W(c),H&&(clearTimeout(H),H=null),c=w,s.killTweensOf(r.current,"rotation"),(K=n.current)==null||K.pause(),s.set(r.current,{rotation:0});const $=(T,a)=>{const o=w.getBoundingClientRect(),S=r.current.getBoundingClientRect(),O=S.left+S.width/2,R=S.top+S.height/2,[oe,se,ae,ce]=Array.from(u.current),{borderWidth:h,cornerSize:Y,parallaxStrength:V}=p;let j={x:o.left-O-h,y:o.top-R-h},U={x:o.right-O+h-Y,y:o.top-R-h},F={x:o.right-O+h-Y,y:o.bottom-R+h-Y},B={x:o.left-O-h,y:o.bottom-R+h-Y};if(T!==void 0&&a!==void 0){const q=o.left+o.width/2,X=o.top+o.height/2,M=(T-q)*V,D=(a-X)*V;j.x+=M,j.y+=D,U.x+=M,U.y+=D,F.x+=M,F.y+=D,B.x+=M,B.y+=D}const ie=s.timeline(),ue=[oe,se,ae,ce],Z=[j,U,F,B];ue.forEach((q,X)=>{ie.to(q,{x:Z[X].x,y:Z[X].y,duration:.2,ease:"power2.out"},0)})};z=!0,$(),setTimeout(()=>{z=!1},1);let N=null;const Q=T=>{N||z||(N=requestAnimationFrame(()=>{const a=T;$(a.clientX,a.clientY),N=null}))},J=()=>{if(c=null,z=!1,u.current){const T=Array.from(u.current);s.killTweensOf(T);const{cornerSize:a}=p,o=[{x:-a*1.5,y:-a*1.5},{x:a*.5,y:-a*1.5},{x:a*.5,y:a*.5},{x:-a*1.5,y:a*.5}],S=s.timeline();T.forEach((O,R)=>{S.to(O,{x:o[R].x,y:o[R].y,duration:.3,ease:"power3.out"},0)})}H=setTimeout(()=>{if(!c&&r.current&&n.current){const a=s.getProperty(r.current,"rotation")%360;n.current.kill(),n.current=s.timeline({repeat:-1}).to(r.current,{rotation:"+=360",duration:t,ease:"none"}),s.to(r.current,{rotation:a+360,duration:t*(1-a/360),ease:"none",onComplete:()=>{var o;(o=n.current)==null||o.restart()}})}H=null},50),W(w)};y=Q,C=J,w.addEventListener("mousemove",Q),w.addEventListener("mouseleave",J)};return window.addEventListener("mouseover",G,{passive:!0}),()=>{var l;window.removeEventListener("mousemove",k),window.removeEventListener("mouseover",G),window.removeEventListener("scroll",I),c&&W(c),console.log("Cleaning up TargetCursor"),(l=n.current)==null||l.kill(),document.body.style.cursor=v}},[d,t,b,p,m]),i.useEffect(()=>{!r.current||!n.current||n.current.isActive()&&(n.current.kill(),n.current=s.timeline({repeat:-1}).to(r.current,{rotation:"+=360",duration:t,ease:"none"}))},[t]),e.jsxs("div",{ref:r,className:"target-cursor-wrapper",children:[e.jsx("div",{ref:f,className:"target-cursor-dot"}),e.jsx("div",{className:"target-cursor-corner corner-tl"}),e.jsx("div",{className:"target-cursor-corner corner-tr"}),e.jsx("div",{className:"target-cursor-corner corner-br"}),e.jsx("div",{className:"target-cursor-corner corner-bl"})]})},Oe=`import { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import "./TargetCursor.css";

const TargetCursor = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
}) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null);
  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  const moveCursor = useCallback((x, y) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");

    let activeTarget = null;
    let currentTargetMove = null;
    let currentLeaveHandler = null;
    let isAnimatingToTarget = false;
    let resumeTimeout = null;

    const cleanupTarget = (target) => {
      if (currentTargetMove) {
        target.removeEventListener("mousemove", currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
    };

    createSpinTimeline();

    const moveHandler = (e) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;
      
      const mouseX = gsap.getProperty(cursorRef.current, "x");
      const mouseY = gsap.getProperty(cursorRef.current, "y");
      
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget = elementUnderMouse && (
        elementUnderMouse === activeTarget || 
        elementUnderMouse.closest(targetSelector) === activeTarget
      );
      
      if (!isStillOverTarget) {
        if (currentLeaveHandler) {
          currentLeaveHandler();
        }
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    //---------------------------------------------------------------
    // This code for onclick animation

    window.addEventListener("mousemove", moveHandler);
    const mouseDownHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
    };

    // Animate it back to its original size
    const mouseUpHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    //----------------------------------------------------------------
    const enterHandler = (e) => {
      const directTarget = e.target;

      const allTargets = [];
      let current = directTarget;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;

      gsap.killTweensOf(cursorRef.current, "rotation");
      spinTl.current?.pause();

      gsap.set(cursorRef.current, { rotation: 0 });

      const updateCorners = (mouseX, mouseY) => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const [tlc, trc, brc, blc] = Array.from(cornersRef.current);

        const { borderWidth, cornerSize, parallaxStrength } = constants;

        let tlOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let trOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let brOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };
        let blOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };

        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }

        const tl = gsap.timeline();
        const corners = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          );
        });
      };

      isAnimatingToTarget = true;
      updateCorners();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle = null;
      const targetMove = (ev) => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          const mouseEvent = ev;
          updateCorners(mouseEvent.clientX, mouseEvent.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(
              corner,
              {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.3,
                ease: "power3.out",
              },
              0
            );
          });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current && spinTl.current) {
            const currentRotation = gsap.getProperty(
              cursorRef.current,
              "rotation"
            );
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });

            gsap.to(cursorRef.current, {
              rotation: normalizedRotation + 360,
              duration: spinDuration * (1 - normalizedRotation / 360),
              ease: "none",
              onComplete: () => {
                spinTl.current?.restart();
              },
            });
          }
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener("mousemove", targetMove);
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      console.log("Cleaning up TargetCursor");

      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor]);

  useEffect(() => {
    if (!cursorRef.current || !spinTl.current) return;

    if (spinTl.current.isActive()) {
      spinTl.current.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });
    }
  }, [spinDuration]);

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div ref={dotRef} className="target-cursor-dot" />
      <div className="target-cursor-corner corner-tl" />
      <div className="target-cursor-corner corner-tr" />
      <div className="target-cursor-corner corner-br" />
      <div className="target-cursor-corner corner-bl" />
    </div>
  );
};

export default TargetCursor;
`,He=`.target-cursor-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
}

.target-cursor-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
}

.target-cursor-corner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border: 3px solid #fff;
  will-change: transform;
}

.corner-tl {
  transform: translate(-150%, -150%);
  border-right: none;
  border-bottom: none;
}

.corner-tr {
  transform: translate(50%, -150%);
  border-left: none;
  border-bottom: none;
}

.corner-br {
  transform: translate(50%, 50%);
  border-left: none;
  border-top: none;
}

.corner-bl {
  transform: translate(-150%, 50%);
  border-right: none;
  border-top: none;
}`,Le=`import { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

const TargetCursor = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
}) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null); 
  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  const moveCursor = useCallback((x, y) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");

    let activeTarget = null;
    let currentTargetMove = null;
    let currentLeaveHandler = null;
    let isAnimatingToTarget = false;
    let resumeTimeout = null;

    const cleanupTarget = (target) => {
      if (currentTargetMove) {
        target.removeEventListener("mousemove", currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
    };

    createSpinTimeline();

    const moveHandler = (e) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;
      
      const mouseX = gsap.getProperty(cursorRef.current, "x");
      const mouseY = gsap.getProperty(cursorRef.current, "y");
      
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget = elementUnderMouse && (
        elementUnderMouse === activeTarget || 
        elementUnderMouse.closest(targetSelector) === activeTarget
      );
      
      if (!isStillOverTarget) {
        if (currentLeaveHandler) {
          currentLeaveHandler();
        }
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    //---------------------------------------------------------------
    // This code for onclick animation

    window.addEventListener("mousemove", moveHandler);
    const mouseDownHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
    };

    // Animate it back to its original size
    const mouseUpHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    //----------------------------------------------------------------
    const enterHandler = (e) => {
      const directTarget = e.target;

      const allTargets = [];
      let current = directTarget;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;

      gsap.killTweensOf(cursorRef.current, "rotation");
      spinTl.current?.pause();

      gsap.set(cursorRef.current, { rotation: 0 });

      const updateCorners = (mouseX, mouseY) => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const [tlc, trc, brc, blc] = Array.from(cornersRef.current);

        const { borderWidth, cornerSize, parallaxStrength } = constants;

        let tlOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let trOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let brOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };
        let blOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };

        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }

        const tl = gsap.timeline();
        const corners = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          );
        });
      };

      isAnimatingToTarget = true;
      updateCorners();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle = null;
      const targetMove = (ev) => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          const mouseEvent = ev;
          updateCorners(mouseEvent.clientX, mouseEvent.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(
              corner,
              {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.3,
                ease: "power3.out",
              },
              0
            );
          });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current && spinTl.current) {
            const currentRotation = gsap.getProperty(
              cursorRef.current,
              "rotation"
            );
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });

            gsap.to(cursorRef.current, {
              rotation: normalizedRotation + 360,
              duration: spinDuration * (1 - normalizedRotation / 360),
              ease: "none",
              onComplete: () => {
                spinTl.current?.restart();
              },
            });
          }
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener("mousemove", targetMove);
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor]);

  useEffect(() => {
    if (!cursorRef.current || !spinTl.current) return;
    
    if (spinTl.current.isActive()) {
      spinTl.current.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });
    }
  }, [spinDuration]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: 'transform' }}
    >
      <div
        ref={dotRef}
        className="absolute left-1/2 top-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      />
      <div
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform -translate-x-[150%] -translate-y-[150%] border-r-0 border-b-0"
        style={{ willChange: 'transform' }}
      />
      <div
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform translate-x-1/2 -translate-y-[150%] border-l-0 border-b-0"
        style={{ willChange: 'transform' }}
      />
      <div
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform translate-x-1/2 translate-y-1/2 border-l-0 border-t-0"
        style={{ willChange: 'transform' }}
      />
      <div
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform -translate-x-[150%] translate-y-1/2 border-r-0 border-t-0"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default TargetCursor;`,ze=`import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import "./TargetCursor.css";

export interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<HTMLDivElement>>(null);
  const spinTl = useRef<gsap.core.Timeline>(null);
  const dotRef = useRef<HTMLDivElement>(null); 
  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll<HTMLDivElement>(
      ".target-cursor-corner"
    );

    let activeTarget: Element | null = null;
    let currentTargetMove: ((ev: Event) => void) | null = null;
    let currentLeaveHandler: (() => void) | null = null;
    let isAnimatingToTarget = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const cleanupTarget = (target: Element) => {
      if (currentTargetMove) {
        target.removeEventListener("mousemove", currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
    };

    createSpinTimeline();

    const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;
      
      const mouseX = gsap.getProperty(cursorRef.current, "x") as number;
      const mouseY = gsap.getProperty(cursorRef.current, "y") as number;
      
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget = elementUnderMouse && (
        elementUnderMouse === activeTarget || 
        elementUnderMouse.closest(targetSelector) === activeTarget
      );
      
      if (!isStillOverTarget) {
        if (currentLeaveHandler) {
          currentLeaveHandler();
        }
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    //---------------------------------------------------------------
        // This code for onclick animation
    
        window.addEventListener("mousemove", moveHandler);
        const mouseDownHandler = ():void => {
          if (!dotRef.current) return;
          gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
          gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
        };
    
        // Animate it back to its original size
        const mouseUpHandler = ():void => {
          if (!dotRef.current) return;
          gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
          gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
        };
    
        window.addEventListener("mousedown", mouseDownHandler);
        window.addEventListener("mouseup", mouseUpHandler);
    
        //----------------------------------------------------------------
    const enterHandler = (e: MouseEvent) => {
      const directTarget = e.target as Element;

      const allTargets: Element[] = [];
      let current = directTarget;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement!;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;

      gsap.killTweensOf(cursorRef.current, "rotation");
      spinTl.current?.pause();

      gsap.set(cursorRef.current, { rotation: 0 });

      const updateCorners = (mouseX?: number, mouseY?: number) => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current!.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const [tlc, trc, brc, blc] = Array.from(cornersRef.current!);

        const { borderWidth, cornerSize, parallaxStrength } = constants;

        let tlOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let trOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let brOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };
        let blOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };

        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }

        const tl = gsap.timeline();
        const corners = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          );
        });
      };

      isAnimatingToTarget = true;
      updateCorners();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle: number | null = null;
      const targetMove = (ev: Event) => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          const mouseEvent = ev as MouseEvent;
          updateCorners(mouseEvent.clientX, mouseEvent.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(
              corner,
              {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.3,
                ease: "power3.out",
              },
              0
            );
          });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current && spinTl.current) {
            const currentRotation = gsap.getProperty(
              cursorRef.current,
              "rotation"
            ) as number;
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });

            gsap.to(cursorRef.current, {
              rotation: normalizedRotation + 360,
              duration: spinDuration * (1 - normalizedRotation / 360),
              ease: "none",
              onComplete: () => {
                spinTl.current?.restart();
              },
            });
          }
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener("mousemove", targetMove);
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor]);

  useEffect(() => {
    if (!cursorRef.current || !spinTl.current) return;
    
    if (spinTl.current.isActive()) {
      spinTl.current.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });
    }
  }, [spinDuration]);

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div  ref={dotRef} className="target-cursor-dot" />
      <div className="target-cursor-corner corner-tl" />
      <div className="target-cursor-corner corner-tr" />
      <div className="target-cursor-corner corner-br" />
      <div className="target-cursor-corner corner-bl" />
    </div>
  );
};

export default TargetCursor;
`,Ye=`import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

export interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<HTMLDivElement>>(null);
  const spinTl = useRef<gsap.core.Timeline>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll<HTMLDivElement>(
      ".target-cursor-corner"
    );

    let activeTarget: Element | null = null;
    let currentTargetMove: ((ev: Event) => void) | null = null;
    let currentLeaveHandler: (() => void) | null = null;
    let isAnimatingToTarget = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const cleanupTarget = (target: Element) => {
      if (currentTargetMove) {
        target.removeEventListener("mousemove", currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
    };

    createSpinTimeline();

    const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;
      
      const mouseX = gsap.getProperty(cursorRef.current, "x") as number;
      const mouseY = gsap.getProperty(cursorRef.current, "y") as number;
      
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget = elementUnderMouse && (
        elementUnderMouse === activeTarget || 
        elementUnderMouse.closest(targetSelector) === activeTarget
      );
      
      if (!isStillOverTarget) {
        if (currentLeaveHandler) {
          currentLeaveHandler();
        }
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    //---------------------------------------------------------------
        // This code for onclick animation
    
        window.addEventListener("mousemove", moveHandler);
        const mouseDownHandler = ():void => {
          if (!dotRef.current) return;
          gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
          gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
        };
    
        // Animate it back to its original size
        const mouseUpHandler = ():void => {
          if (!dotRef.current) return;
          gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
          gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
        };
    
        window.addEventListener("mousedown", mouseDownHandler);
        window.addEventListener("mouseup", mouseUpHandler);
    
        //----------------------------------------------------------------

    const enterHandler = (e: MouseEvent) => {
      const directTarget = e.target as Element;

      const allTargets: Element[] = [];
      let current = directTarget;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement!;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;

      gsap.killTweensOf(cursorRef.current, "rotation");
      spinTl.current?.pause();

      gsap.set(cursorRef.current, { rotation: 0 });

      const updateCorners = (mouseX?: number, mouseY?: number) => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current!.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const [tlc, trc, brc, blc] = Array.from(cornersRef.current!);

        const { borderWidth, cornerSize, parallaxStrength } = constants;

        let tlOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let trOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let brOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };
        let blOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };

        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }

        const tl = gsap.timeline();
        const corners = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          );
        });
      };

      isAnimatingToTarget = true;
      updateCorners();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle: number | null = null;
      const targetMove = (ev: Event) => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          const mouseEvent = ev as MouseEvent;
          updateCorners(mouseEvent.clientX, mouseEvent.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(
              corner,
              {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.3,
                ease: "power3.out",
              },
              0
            );
          });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current && spinTl.current) {
            const currentRotation = gsap.getProperty(
              cursorRef.current,
              "rotation"
            ) as number;
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });

            gsap.to(cursorRef.current, {
              rotation: normalizedRotation + 360,
              duration: spinDuration * (1 - normalizedRotation / 360),
              ease: "none",
              onComplete: () => {
                spinTl.current?.restart();
              },
            });
          }
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener("mousemove", targetMove);
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor]);

  useEffect(() => {
    if (!cursorRef.current || !spinTl.current) return;
    
    if (spinTl.current.isActive()) {
      spinTl.current.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });
    }
  }, [spinDuration]);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: 'transform' }}
    >
      <div ref={dotRef}
        className="absolute left-1/2 top-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform -translate-x-[150%] -translate-y-[150%] border-r-0 border-b-0" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform translate-x-1/2 -translate-y-[150%] border-l-0 border-b-0" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform translate-x-1/2 translate-y-1/2 border-l-0 border-t-0" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform -translate-x-[150%] translate-y-1/2 border-r-0 border-t-0" 
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default TargetCursor;`,ee={...fe("Animations/TargetCursor"),usage:`import TargetCursor from './TargetCursor';

export default function App() {
  return (
    <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      
      <h1>Hover over the elements below</h1>
      <button className="cursor-target">Click me!</button>
      <div className="cursor-target">Hover target</div>
    </div>
  );
}`,code:Oe,css:He,tailwind:Le,tsCode:ze,tsTailwind:Ye},Ne=()=>{const[d,t]=i.useState(2),[m,r]=i.useState(!0),u=[{name:"targetSelector",type:"string",default:'".cursor-target"',description:"CSS selector for elements that should trigger the cursor targeting effect"},{name:"spinDuration",type:"number",default:"2",description:"Duration in seconds for the cursor's spinning animation when not targeting"},{name:"hideDefaultCursor",type:"boolean",default:"true",description:"Whether to hide the default browser cursor when the component is active"}];return e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsxs(pe,{children:[e.jsxs(me,{position:"relative",className:"demo-container",flexDirection:"column",h:500,overflow:"hidden",children:[e.jsx(L,{fontSize:"clamp(2rem, 6vw, 3rem)",fontWeight:900,mb:6,color:"#271E37",children:"Hover Below."}),e.jsxs(Ee,{templateColumns:"repeat(3, 1fr)",gap:4,mb:2,children:[e.jsx(A,{children:e.jsx(L,{borderRadius:"15px",color:"#B19EEF",border:"1px dashed #B19EEF",fontWeight:900,fontSize:"2rem",className:"cursor-target",py:2,px:6,textAlign:"center",children:"THIS"})}),e.jsx(A,{children:e.jsx(L,{borderRadius:"15px",color:"#B19EEF",border:"1px dashed #B19EEF",fontWeight:900,fontSize:"2rem",className:"cursor-target",py:2,px:6,textAlign:"center",children:"FEELS"})}),e.jsx(A,{children:e.jsx(L,{borderRadius:"15px",color:"#B19EEF",border:"1px dashed #B19EEF",fontWeight:900,fontSize:"2rem",className:"cursor-target",py:2,px:6,textAlign:"center",children:"QUITE"})}),e.jsx(A,{colSpan:3,children:e.jsx(L,{textAlign:"center",borderRadius:"15px",color:"#B19EEF",border:"1px dashed #B19EEF",fontWeight:900,fontSize:"2rem",className:"cursor-target",py:2,px:6,children:"SNAPPY!"})})]})]}),e.jsxs(we,{children:[e.jsx(ye,{title:"Spin Duration",min:.5,max:5,step:.1,value:d,valueUnit:"s",width:200,onChange:t}),e.jsx(Ce,{title:"Hide Default Cursor",isChecked:m,onChange:r})]}),e.jsx(ve,{data:u}),e.jsx(Re,{dependencyList:["gsap"]})]}),e.jsx(Te,{children:e.jsx(he,{codeObject:ee})}),e.jsx(be,{children:e.jsx(xe,{...ee})})]}),e.jsx(Se,{spinDuration:d,hideDefaultCursor:m})]})};export{Ne as default};
