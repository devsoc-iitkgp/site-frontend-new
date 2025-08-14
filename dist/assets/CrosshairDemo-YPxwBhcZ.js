import{r as s,a as f,j as e,g as V,B as w,F as S,T as R,I as H,b as C}from"./index-j7DW7U0N.js";import{T as z,P as T,a as A,C as j,b as q,c as X,d as F}from"./PropTable-Baf4PZpP.js";import{D as Y}from"./Dependencies-BSh7s3YA.js";import{C as D}from"./Customize-Dq9g9yhm.js";const N=(i,n,u)=>(1-u)*i+u*n,O=(i,n)=>{if(n){const u=n.getBoundingClientRect();return{x:i.clientX-u.left,y:i.clientY-u.top}}return{x:i.clientX,y:i.clientY}},B=({color:i="white",containerRef:n=null})=>{const u=s.useRef(null),l=s.useRef(null),o=s.useRef(null),d=s.useRef(null),m=s.useRef(null);let c={x:0,y:0};return s.useEffect(()=>{const v=r=>{if(c=O(r,n==null?void 0:n.current),n!=null&&n.current){const b=n.current.getBoundingClientRect();r.clientX<b.left||r.clientX>b.right||r.clientY<b.top||r.clientY>b.bottom?f.to([l.current,o.current],{opacity:0}):f.to([l.current,o.current],{opacity:1})}},a=(n==null?void 0:n.current)||window;a.addEventListener("mousemove",v);const t={tx:{previous:0,current:0,amt:.15},ty:{previous:0,current:0,amt:.15}};f.set([l.current,o.current],{opacity:0});const p=()=>{t.tx.previous=t.tx.current=c.x,t.ty.previous=t.ty.current=c.y,f.to([l.current,o.current],{duration:.9,ease:"Power3.easeOut",opacity:1}),requestAnimationFrame(E),a.removeEventListener("mousemove",p)};a.addEventListener("mousemove",p);const y={turbulence:0},g=f.timeline({paused:!0,onStart:()=>{l.current.style.filter="url(#filter-noise-x)",o.current.style.filter="url(#filter-noise-y)"},onUpdate:()=>{d.current&&m.current&&(d.current.setAttribute("baseFrequency",y.turbulence),m.current.setAttribute("baseFrequency",y.turbulence))},onComplete:()=>{l.current&&o.current&&(l.current.style.filter=o.current.style.filter="none")}}).to(y,{duration:.5,ease:"power1",startAt:{turbulence:1},turbulence:0}),h=()=>g.restart(),x=()=>g.progress(1).kill(),E=()=>{t.tx.current=c.x,t.ty.current=c.y;for(const r in t)t[r].previous=N(t[r].previous,t[r].current,t[r].amt);l.current&&l.current&&(f.set(o.current,{x:t.tx.previous}),f.set(l.current,{y:t.ty.previous})),requestAnimationFrame(E)},M=n!=null&&n.current?n.current.querySelectorAll("a"):document.querySelectorAll("a");return M.forEach(r=>{r.addEventListener("mouseenter",h),r.addEventListener("mouseleave",x)}),()=>{a.removeEventListener("mousemove",v),a.removeEventListener("mousemove",p),M.forEach(r=>{r.removeEventListener("mouseenter",h),r.removeEventListener("mouseleave",x)})}},[n]),e.jsxs("div",{ref:u,className:"cursor",style:{position:n?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1e4},children:[e.jsx("svg",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"},children:e.jsxs("defs",{children:[e.jsxs("filter",{id:"filter-noise-x",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:d}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]}),e.jsxs("filter",{id:"filter-noise-y",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:m}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]})]})}),e.jsx("div",{ref:l,style:{position:"absolute",width:"100%",height:"1px",background:i,pointerEvents:"none",transform:"translateY(50%)",opacity:0}}),e.jsx("div",{ref:o,style:{position:"absolute",height:"100%",width:"1px",background:i,pointerEvents:"none",transform:"translateX(50%)",opacity:0}})]})},P=`import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const lerp = (a, b, n) => (1 - n) * a + n * b;

const getMousePos = (e, container) => {
  if (container) {
    const bounds = container.getBoundingClientRect();
    return {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };
  }
  return { x: e.clientX, y: e.clientY };
};

const Crosshair = ({ color = 'white', containerRef = null }) => {
  const cursorRef = useRef(null);
  const lineHorizontalRef = useRef(null);
  const lineVerticalRef = useRef(null);
  const filterXRef = useRef(null);
  const filterYRef = useRef(null);

  let mouse = { x: 0, y: 0 };

  useEffect(() => {
    const handleMouseMove = (ev) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mouse = getMousePos(ev, containerRef?.current);

      if (containerRef?.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        if (
          ev.clientX < bounds.left ||
          ev.clientX > bounds.right ||
          ev.clientY < bounds.top ||
          ev.clientY > bounds.bottom
        ) {
          gsap.to([lineHorizontalRef.current, lineVerticalRef.current], { opacity: 0 });
        } else {
          gsap.to([lineHorizontalRef.current, lineVerticalRef.current], { opacity: 1 });
        }
      }
    };

    const target = containerRef?.current || window;
    target.addEventListener('mousemove', handleMouseMove);

    const renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
    };

    gsap.set([lineHorizontalRef.current, lineVerticalRef.current], { opacity: 0 });

    const onMouseMove = () => {
      renderedStyles.tx.previous = renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.previous = renderedStyles.ty.current = mouse.y;

      gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
        duration: 0.9,
        ease: 'Power3.easeOut',
        opacity: 1,
      });

      requestAnimationFrame(render);

      target.removeEventListener('mousemove', onMouseMove);
    };

    target.addEventListener('mousemove', onMouseMove);

    const primitiveValues = { turbulence: 0 };

    const tl = gsap.timeline({
      paused: true,
      onStart: () => {
        lineHorizontalRef.current.style.filter = \`url(#filter-noise-x)\`;
        lineVerticalRef.current.style.filter = \`url(#filter-noise-y)\`;
      },
      onUpdate: () => {
        if (filterXRef.current && filterYRef.current) {
          filterXRef.current.setAttribute('baseFrequency', primitiveValues.turbulence);
          filterYRef.current.setAttribute('baseFrequency', primitiveValues.turbulence);
        }
      },
      onComplete: () => {
        if (lineHorizontalRef.current && lineVerticalRef.current) {
          lineHorizontalRef.current.style.filter = lineVerticalRef.current.style.filter = 'none';
        }
      }
    }).to(primitiveValues, {
      duration: 0.5,
      ease: 'power1',
      startAt: { turbulence: 1 },
      turbulence: 0,
    });

    const enter = () => tl.restart();
    const leave = () => tl.progress(1).kill();

    const render = () => {
      renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.current = mouse.y;

      for (const key in renderedStyles) {
        renderedStyles[key].previous = lerp(renderedStyles[key].previous, renderedStyles[key].current, renderedStyles[key].amt);
      }

      if (lineHorizontalRef.current && lineHorizontalRef.current) {
        gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
        gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });
      }

      requestAnimationFrame(render);
    };

    const links = containerRef?.current
      ? containerRef.current.querySelectorAll('a')
      : document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('mouseenter', enter);
      link.addEventListener('mouseleave', leave);
    });

    return () => {
      target.removeEventListener('mousemove', handleMouseMove);
      target.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', enter);
        link.removeEventListener('mouseleave', leave);
      });
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{
        position: containerRef ? 'absolute' : 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    >
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
        <defs>
          <filter id="filter-noise-x">
            <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" ref={filterXRef} />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
          <filter id="filter-noise-y">
            <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" ref={filterYRef} />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lineHorizontalRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: '1px',
          background: color,
          pointerEvents: 'none',
          transform: 'translateY(50%)',
          opacity: 0,
        }}
      ></div>
      <div
        ref={lineVerticalRef}
        style={{
          position: 'absolute',
          height: '100%',
          width: '1px',
          background: color,
          pointerEvents: 'none',
          transform: 'translateX(50%)',
          opacity: 0,
        }}
      ></div>
    </div>
  );
};

export default Crosshair;
`,G=`import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const lerp = (a, b, n) => (1 - n) * a + n * b;

const getMousePos = (e, container) => {
  if (container) {
    const bounds = container.getBoundingClientRect();
    return {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };
  }
  return { x: e.clientX, y: e.clientY };
};

const Crosshair = ({ color = "white", containerRef = null }) => {
  const cursorRef = useRef(null);
  const lineHorizontalRef = useRef(null);
  const lineVerticalRef = useRef(null);
  const filterXRef = useRef(null);
  const filterYRef = useRef(null);

  let mouse = { x: 0, y: 0 };

  useEffect(() => {
    const handleMouseMove = (ev) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mouse = getMousePos(ev, containerRef?.current);

      if (containerRef?.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        if (
          ev.clientX < bounds.left ||
          ev.clientX > bounds.right ||
          ev.clientY < bounds.top ||
          ev.clientY > bounds.bottom
        ) {
          gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
            opacity: 0,
          });
        } else {
          gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
            opacity: 1,
          });
        }
      }
    };

    const target = containerRef?.current || window;
    target.addEventListener("mousemove", handleMouseMove);

    const renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
    };

    gsap.set([lineHorizontalRef.current, lineVerticalRef.current], {
      opacity: 0,
    });

    const onMouseMove = () => {
      renderedStyles.tx.previous = renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.previous = renderedStyles.ty.current = mouse.y;

      gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
        duration: 0.9,
        ease: "Power3.easeOut",
        opacity: 1,
      });

      requestAnimationFrame(render);

      target.removeEventListener("mousemove", onMouseMove);
    };

    target.addEventListener("mousemove", onMouseMove);

    const primitiveValues = { turbulence: 0 };

    const tl = gsap
      .timeline({
        paused: true,
        onStart: () => {
          lineHorizontalRef.current.style.filter = \`url(#filter-noise-x)\`;
          lineVerticalRef.current.style.filter = \`url(#filter-noise-y)\`;
        },
        onUpdate: () => {
          filterXRef.current.setAttribute(
            "baseFrequency",
            primitiveValues.turbulence
          );
          filterYRef.current.setAttribute(
            "baseFrequency",
            primitiveValues.turbulence
          );
        },
        onComplete: () => {
          lineHorizontalRef.current.style.filter = lineVerticalRef.current.style.filter = "none";
        },
      })
      .to(primitiveValues, {
        duration: 0.5,
        ease: "power1",
        startAt: { turbulence: 1 },
        turbulence: 0,
      });

    const enter = () => tl.restart();
    const leave = () => tl.progress(1).kill();

    const render = () => {
      renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.current = mouse.y;

      for (const key in renderedStyles) {
        renderedStyles[key].previous = lerp(
          renderedStyles[key].previous,
          renderedStyles[key].current,
          renderedStyles[key].amt
        );
      }

      gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
      gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });

      requestAnimationFrame(render);
    };

    const links = containerRef?.current
      ? containerRef.current.querySelectorAll("a")
      : document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
    });

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className={\`\${
        containerRef ? "absolute" : "fixed"
      } top-0 left-0 w-full h-full pointer-events-none z-[10000]\`}
    >
      <svg className="absolute top-0 left-0 w-full h-full">
        <defs>
          <filter id="filter-noise-x">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterXRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
          <filter id="filter-noise-y">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterYRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lineHorizontalRef}
        className={\`absolute w-full h-px pointer-events-none opacity-0 transform translate-y-1/2\`}
        style={{ background: color }}
      ></div>
      <div
        ref={lineVerticalRef}
        className={\`absolute h-full w-px pointer-events-none opacity-0 transform translate-x-1/2\`}
        style={{ background: color }}
      ></div>
    </div>
  );
};

export default Crosshair;
`,I=`import React, { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";

const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

const getMousePos = (
  e: Event,
  container?: HTMLElement | null
): { x: number; y: number } => {
  const mouseEvent = e as MouseEvent;
  if (container) {
    const bounds = container.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - bounds.left,
      y: mouseEvent.clientY - bounds.top,
    };
  }
  return { x: mouseEvent.clientX, y: mouseEvent.clientY };
};

interface CrosshairProps {
  color?: string;
  containerRef?: RefObject<HTMLElement>;
}

const Crosshair: React.FC<CrosshairProps> = ({
  color = "white",
  containerRef = null,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lineHorizontalRef = useRef<HTMLDivElement>(null);
  const lineVerticalRef = useRef<HTMLDivElement>(null);
  const filterXRef = useRef<SVGFETurbulenceElement>(null);
  const filterYRef = useRef<SVGFETurbulenceElement>(null);

  let mouse = { x: 0, y: 0 };

  useEffect(() => {
    const handleMouseMove = (ev: Event) => {
      const mouseEvent = ev as MouseEvent;
      mouse = getMousePos(mouseEvent, containerRef?.current);
      if (containerRef?.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        if (
          mouseEvent.clientX < bounds.left ||
          mouseEvent.clientX > bounds.right ||
          mouseEvent.clientY < bounds.top ||
          mouseEvent.clientY > bounds.bottom
        ) {
          gsap.to(
            [lineHorizontalRef.current, lineVerticalRef.current].filter(
              Boolean
            ),
            { opacity: 0 }
          );
        } else {
          gsap.to(
            [lineHorizontalRef.current, lineVerticalRef.current].filter(
              Boolean
            ),
            { opacity: 1 }
          );
        }
      }
    };

    const target: HTMLElement | Window = containerRef?.current || window;
    target.addEventListener("mousemove", handleMouseMove);

    const renderedStyles: {
      [key: string]: { previous: number; current: number; amt: number };
    } = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
    };

    gsap.set(
      [lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean),
      { opacity: 0 }
    );

    const onMouseMove = (_ev: Event) => {
      renderedStyles.tx.previous = renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.previous = renderedStyles.ty.current = mouse.y;

      gsap.to(
        [lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean),
        {
          duration: 0.9,
          ease: "Power3.easeOut",
          opacity: 1,
        }
      );

      requestAnimationFrame(render);

      target.removeEventListener("mousemove", onMouseMove);
    };

    target.addEventListener("mousemove", onMouseMove);

    const primitiveValues = { turbulence: 0 };

    const tl = gsap
      .timeline({
        paused: true,
        onStart: () => {
          if (lineHorizontalRef.current) {
            lineHorizontalRef.current.style.filter = "url(#filter-noise-x)";
          }
          if (lineVerticalRef.current) {
            lineVerticalRef.current.style.filter = "url(#filter-noise-y)";
          }
        },
        onUpdate: () => {
          if (filterXRef.current && filterYRef.current) {
            filterXRef.current.setAttribute(
              "baseFrequency",
              primitiveValues.turbulence.toString()
            );
            filterYRef.current.setAttribute(
              "baseFrequency",
              primitiveValues.turbulence.toString()
            );
          }
        },
        onComplete: () => {
          if (lineHorizontalRef.current && lineVerticalRef.current) {
            lineHorizontalRef.current.style.filter = "none";
            lineVerticalRef.current.style.filter = "none";
          }
        },
      })
      .to(primitiveValues, {
        duration: 0.5,
        ease: "power1",
        startAt: { turbulence: 1 },
        turbulence: 0,
      });

    const enter = () => tl.restart();
    const leave = () => {
      tl.progress(1).kill();
    };

    const render = () => {
      renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.current = mouse.y;

      for (const key in renderedStyles) {
        const style = renderedStyles[key];
        style.previous = lerp(style.previous, style.current, style.amt);
      }

      if (lineHorizontalRef.current && lineVerticalRef.current) {
        gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
        gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });
      }

      requestAnimationFrame(render);
    };

    const links: NodeListOf<HTMLAnchorElement> = containerRef?.current
      ? containerRef.current.querySelectorAll("a")
      : document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
    });

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{
        position: containerRef ? "absolute" : "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 10000,
      }}
    >
      <svg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <filter id="filter-noise-x">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterXRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
          <filter id="filter-noise-y">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterYRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lineHorizontalRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "1px",
          background: color,
          pointerEvents: "none",
          transform: "translateY(50%)",
          opacity: 0,
        }}
      />
      <div
        ref={lineVerticalRef}
        style={{
          position: "absolute",
          height: "100%",
          width: "1px",
          background: color,
          pointerEvents: "none",
          transform: "translateX(50%)",
          opacity: 0,
        }}
      />
    </div>
  );
};

export default Crosshair;
`,W=`import React, { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";

const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

const getMousePos = (
  e: Event,
  container?: HTMLElement | null
): { x: number; y: number } => {
  const mouseEvent = e as MouseEvent;
  if (container) {
    const bounds = container.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - bounds.left,
      y: mouseEvent.clientY - bounds.top,
    };
  }
  return { x: mouseEvent.clientX, y: mouseEvent.clientY };
};

interface CrosshairProps {
  color?: string;
  containerRef?: RefObject<HTMLElement>;
}

const Crosshair: React.FC<CrosshairProps> = ({
  color = "white",
  containerRef = null,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lineHorizontalRef = useRef<HTMLDivElement>(null);
  const lineVerticalRef = useRef<HTMLDivElement>(null);
  const filterXRef = useRef<SVGFETurbulenceElement>(null);
  const filterYRef = useRef<SVGFETurbulenceElement>(null);

  let mouse = { x: 0, y: 0 };

  useEffect(() => {
    const handleMouseMove = (ev: Event) => {
      const mouseEvent = ev as MouseEvent;
      mouse = getMousePos(mouseEvent, containerRef?.current);
      if (containerRef?.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        if (
          mouseEvent.clientX < bounds.left ||
          mouseEvent.clientX > bounds.right ||
          mouseEvent.clientY < bounds.top ||
          mouseEvent.clientY > bounds.bottom
        ) {
          gsap.to(
            [lineHorizontalRef.current, lineVerticalRef.current].filter(
              Boolean
            ),
            { opacity: 0 }
          );
        } else {
          gsap.to(
            [lineHorizontalRef.current, lineVerticalRef.current].filter(
              Boolean
            ),
            { opacity: 1 }
          );
        }
      }
    };

    const target: HTMLElement | Window = containerRef?.current || window;
    target.addEventListener("mousemove", handleMouseMove);

    const renderedStyles: {
      [key: string]: { previous: number; current: number; amt: number };
    } = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
    };

    gsap.set(
      [lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean),
      { opacity: 0 }
    );

    const onMouseMove = (_ev: Event) => {
      renderedStyles.tx.previous = renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.previous = renderedStyles.ty.current = mouse.y;

      gsap.to(
        [lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean),
        {
          duration: 0.9,
          ease: "Power3.easeOut",
          opacity: 1,
        }
      );

      requestAnimationFrame(render);

      target.removeEventListener("mousemove", onMouseMove);
    };

    target.addEventListener("mousemove", onMouseMove);

    const primitiveValues = { turbulence: 0 };

    const tl = gsap
      .timeline({
        paused: true,
        onStart: () => {
          if (lineHorizontalRef.current) {
            lineHorizontalRef.current.style.filter = "url(#filter-noise-x)";
          }
          if (lineVerticalRef.current) {
            lineVerticalRef.current.style.filter = "url(#filter-noise-y)";
          }
        },
        onUpdate: () => {
          if (filterXRef.current && filterYRef.current) {
            filterXRef.current.setAttribute(
              "baseFrequency",
              primitiveValues.turbulence.toString()
            );
            filterYRef.current.setAttribute(
              "baseFrequency",
              primitiveValues.turbulence.toString()
            );
          }
        },
        onComplete: () => {
          if (lineHorizontalRef.current && lineVerticalRef.current) {
            lineHorizontalRef.current.style.filter = "none";
            lineVerticalRef.current.style.filter = "none";
          }
        },
      })
      .to(primitiveValues, {
        duration: 0.5,
        ease: "power1",
        startAt: { turbulence: 1 },
        turbulence: 0,
      });

    const enter = () => tl.restart();
    const leave = () => {
      tl.progress(1).kill();
    };

    const render = () => {
      renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.current = mouse.y;

      for (const key in renderedStyles) {
        const style = renderedStyles[key];
        style.previous = lerp(style.previous, style.current, style.amt);
      }

      if (lineHorizontalRef.current && lineVerticalRef.current) {
        gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
        gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });
      }

      requestAnimationFrame(render);
    };

    const links: NodeListOf<HTMLAnchorElement> = containerRef?.current
      ? containerRef.current.querySelectorAll("a")
      : document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
    });

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className={\`\${
        containerRef ? "absolute" : "fixed"
      } top-0 left-0 w-full h-full pointer-events-none z-[10000]\`}
    >
      <svg className="absolute top-0 left-0 w-full h-full">
        <defs>
          <filter id="filter-noise-x">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterXRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
          <filter id="filter-noise-y">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterYRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lineHorizontalRef}
        className={\`absolute w-full h-px pointer-events-none opacity-0 transform translate-y-1/2\`}
        style={{ background: color }}
      ></div>
      <div
        ref={lineVerticalRef}
        className={\`absolute h-full w-px pointer-events-none opacity-0 transform translate-x-1/2\`}
        style={{ background: color }}
      ></div>
    </div>
  );
};

export default Crosshair;
`,k={...V("Animations/Crosshair"),installation:"npm install gsap",usage:`import { useRef } from 'react';
import Crosshair from './Crosshair';

const Component = () => {
const containerRef = useRef(null);

return (
  <div ref={containerRef} style={{ height: '300px', overflow: 'hidden' }}>
    <Crosshair containerRef={containerRef} color='#ffffff'/> // containerRef defaults to "window" if not provided
  </div>
)
};`,code:P,tailwind:G,tsCode:I,tsTailwind:W},L="Aim... aand...",K=()=>{const[i,n]=s.useState(L),[u,l]=s.useState("#ffffff"),[o,d]=s.useState(!0),m=s.useRef(null),c=s.useRef(null),[v,a]=s.useState(0),t=s.useRef(null),p=[{name:"color",type:"string",default:"'white'",description:"Color of the crosshair lines."},{name:"containerRef",type:"RefObject<HTMLElement>",default:"null",description:"Optional container ref to limit crosshair to specific element. If null, crosshair will be active on entire viewport."}];return s.useEffect(()=>{t.current&&v<t.current.getBoundingClientRect().width&&a(t.current.getBoundingClientRect().width)},[i]),e.jsxs(z,{children:[e.jsxs(T,{children:[e.jsxs(w,{ref:c,position:"relative",className:"demo-container",minH:300,overflow:"hidden",children:[e.jsx(B,{containerRef:o?null:c,color:u}),e.jsxs(S,{direction:"column",justifyContent:"center",alignItems:"center",children:[e.jsx(R,{_hover:{color:"magenta"},transition:".3s ease",textAlign:"center",fontWeight:900,fontSize:{base:"2rem",md:"4rem"},as:"a",href:"https://github.com/DavidHDev/react-bits",ref:m,onMouseEnter:()=>{n("Shoot!!!")},onMouseLeave:()=>{n(L)},style:{minWidth:v},children:i}),e.jsx(R,{position:"relative",top:"-10px",color:"#444",children:"(hover the text)"})]}),e.jsx(R,{ref:t,style:{visibility:"hidden",position:"absolute",whiteSpace:"nowrap",pointerEvents:"none",overflow:"hidden"},"aria-hidden":"true",textAlign:"center",fontWeight:900,fontSize:{base:"2rem",md:"4rem"},children:i})]}),e.jsxs(D,{children:[e.jsxs(S,{gap:4,align:"center",mt:4,mb:4,children:[e.jsx(R,{fontSize:"sm",children:"Crosshair Color"}),e.jsx(H,{type:"color",value:u,onChange:y=>{l(y.target.value)},width:"60px",p:0})]}),e.jsxs(C,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{d(!o)},children:["Cursor Container ",e.jsxs(R,{color:o?"lightgreen":"coral",children:[" ",o?"Viewport":"Targeted"]})]})]}),e.jsx(A,{data:p}),e.jsx(Y,{dependencyList:["gsap"]})]}),e.jsx(j,{children:e.jsx(q,{codeObject:k})}),e.jsx(X,{children:e.jsx(F,{...k})})]})};export{K as default};
