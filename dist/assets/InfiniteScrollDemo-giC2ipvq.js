import{r as s,a as o,bH as A,j as e,g as $,B as N,t as X}from"./index-j7DW7U0N.js";import{T as z,P as q,a as Y,C as Z,b as B,c as W,d as U}from"./PropTable-Baf4PZpP.js";import{C as G}from"./Customize-Dq9g9yhm.js";import{P as F}from"./PreviewSwitch-_xo3rdWG.js";import{D as J}from"./Dependencies-BSh7s3YA.js";import{P}from"./PreviewSelect-BhKIbQB2.js";import{B as K}from"./Ballpit-Bvr-UC95.js";import"./field-BmHOm1Rn.js";import"./three.module-Df1A5Gfx.js";o.registerPlugin(A);function Q({width:w="30rem",maxHeight:p="100%",negativeMargin:u="-0.5em",items:r=[],itemMinHeight:T=150,isTilted:l=!1,tiltDirection:h="left",autoplay:d=!1,autoplaySpeed:v=.5,autoplayDirection:f="down",pauseOnHover:y=!1}){const x=s.useRef(null),I=s.useRef(null),H=()=>l?h==="left"?"rotateX(20deg) rotateZ(-20deg) skewX(20deg)":"rotateX(20deg) rotateZ(20deg) skewX(-20deg)":"none";return s.useEffect(()=>{const n=I.current;if(!n||r.length===0)return;const c=o.utils.toArray(n.children);if(!c.length)return;const S=c[0],O=getComputedStyle(S),D=S.offsetHeight,E=parseFloat(O.marginTop)||0,C=D+E,R=D*r.length+E*(r.length-1),M=o.utils.wrap(-R,R);c.forEach((i,g)=>{const m=g*C;o.set(i,{y:m})});const k=A.create({target:n,type:"wheel,touch,pointer",preventDefault:!0,onPress:({target:i})=>{i.style.cursor="grabbing"},onRelease:({target:i})=>{i.style.cursor="grab"},onChange:({deltaY:i,isDragging:g,event:m})=>{const a=m.type==="wheel"?-i:i,b=g?a*5:a*10;c.forEach(L=>{o.to(L,{duration:.5,ease:"expo.out",y:`+=${b}`,modifiers:{y:o.utils.unitize(M)}})})}});let t;if(d){const g=v*(f==="down"?1:-1),m=()=>{c.forEach(a=>{o.set(a,{y:`+=${g}`,modifiers:{y:o.utils.unitize(M)}})}),t=requestAnimationFrame(m)};if(t=requestAnimationFrame(m),y){const a=()=>t&&cancelAnimationFrame(t),b=()=>t=requestAnimationFrame(m);return n.addEventListener("mouseenter",a),n.addEventListener("mouseleave",b),()=>{k.kill(),a(),n.removeEventListener("mouseenter",a),n.removeEventListener("mouseleave",b)}}else return()=>{k.kill(),t&&cancelAnimationFrame(t)}}return()=>{k.kill(),t&&cancelAnimationFrame(t)}},[r,d,v,f,y,l,h,u]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .infinite-scroll-wrapper {
          max-height: ${p};
        }

        .infinite-scroll-container {
          width: ${w};
        }

        .infinite-scroll-item {
          height: ${T}px;
          margin-top: ${u};
        }
        `}),e.jsx("div",{className:"infinite-scroll-wrapper",ref:x,children:e.jsx("div",{className:"infinite-scroll-container",ref:I,style:{transform:H()},children:r.map((n,c)=>e.jsx("div",{className:"infinite-scroll-item",children:n.content},c))})})]})}const V=`import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import './InfiniteScroll.css';

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight = (itemHeight * items.length) + (itemMarginTop * (items.length - 1));

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        target.style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        target.style.cursor = "grab";
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            y: \`+=\${distance}\`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn)
            }
          });
        });
      }
    });

    let rafId;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: \`+=\${speedPerFrame}\`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn)
            }
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => (rafId = requestAnimationFrame(tick));

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin
  ]);

  return (
    <>
      <style>
        {\`
        .infinite-scroll-wrapper {
          max-height: \${maxHeight};
        }

        .infinite-scroll-container {
          width: \${width};
        }

        .infinite-scroll-item {
          height: \${itemMinHeight}px;
          margin-top: \${negativeMargin};
        }
        \`}
      </style>

      <div className="infinite-scroll-wrapper" ref={wrapperRef}>
        <div
          className="infinite-scroll-container"
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div
              className='infinite-scroll-item'
              key={i}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
`,_=`.infinite-scroll-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  overscroll-behavior: none;
}

.infinite-scroll-wrapper::before,
.infinite-scroll-wrapper::after {
  content: "";
  position: absolute;
  background: linear-gradient(var(--dir, to bottom), 060010, transparent);
  height: 25%;
  width: 100%;
  z-index: 1;
  pointer-events: none;
}

.infinite-scroll-wrapper::before {
  top: 0;
}

.infinite-scroll-wrapper::after {
  --dir: to top;
  bottom: 0;
}

.infinite-scroll-container {
  display: flex;
  flex-direction: column;
  overscroll-behavior: contain;
  padding-inline: 1rem;
  cursor: grab;
  transform-origin: center center;
}

.infinite-scroll-item {
  --accent-color: #ffffff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  border: 2px solid var(--accent-color);
  user-select: none;
  box-sizing: border-box;
  position: relative;
}`,ee=`import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        target.style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        target.style.cursor = "grab";
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            y: \`+=\${distance}\`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: \`+=\${speedPerFrame}\`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => (rafId = requestAnimationFrame(tick));

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden overscroll-none border-t-2 border-b-2 border-t-dotted border-b-dotted border-transparent"
      ref={wrapperRef}
      style={{ maxHeight }}
    >
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div
        className="flex flex-col overscroll-contain px-4 cursor-grab origin-center"
        ref={containerRef}
        style={{
          width,
          transform: getTiltTransform(),
        }}
      >
        {items.map((item, i) => (
          <div
            className="flex items-center justify-center p-4 text-xl font-semibold text-center border-2 border-white rounded-[15px] select-none box-border relative"
            key={i}
            style={{
              height: \`\${itemMinHeight}px\`,
              marginTop: negativeMargin,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
`,ne=`import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import "./InfiniteScroll.css";

gsap.registerPlugin(Observer);

interface InfiniteScrollItem {
  content: ReactNode;
}

interface InfiniteScrollProps {
  width?: string;
  maxHeight?: string;
  negativeMargin?: string;
  items?: InfiniteScrollItem[];
  itemMinHeight?: number;
  isTilted?: boolean;
  tiltDirection?: "left" | "right";
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: "down" | "up";
  pauseOnHover?: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTiltTransform = (): string => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        (target as HTMLElement).style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        (target as HTMLElement).style.cursor = "grab";
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            y: \`+=\${distance}\`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId: number;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: \`+=\${speedPerFrame}\`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => {
          rafId = requestAnimationFrame(tick);
        };

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <>
      <style>
        {\`
          .infinite-scroll-wrapper {
            max-height: \${maxHeight};
          }
  
          .infinite-scroll-container {
            width: \${width};
          }
  
          .infinite-scroll-item {
            height: \${itemMinHeight}px;
            margin-top: \${negativeMargin};
          }
        \`}
      </style>
      <div className="infinite-scroll-wrapper" ref={wrapperRef}>
        <div
          className="infinite-scroll-container"
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div className="infinite-scroll-item" key={i}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
`,te=`import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

interface InfiniteScrollItem {
  content: React.ReactNode;
}

interface InfiniteScrollProps {
  width?: string;
  maxHeight?: string;
  negativeMargin?: string;
  items?: InfiniteScrollItem[];
  itemMinHeight?: number;
  isTilted?: boolean;
  tiltDirection?: "left" | "right";
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: "down" | "up";
  pauseOnHover?: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTiltTransform = (): string => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        (target as HTMLElement).style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        (target as HTMLElement).style.cursor = "grab";
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            y: \`+=\${distance}\`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId: number;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: \`+=\${speedPerFrame}\`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => {
          rafId = requestAnimationFrame(tick);
        };

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <>
      <style>
        {\`
          .infinite-scroll-wrapper {
            max-height: \${maxHeight};
          }

          .infinite-scroll-container {
            width: \${width};
          }

          .infinite-scroll-item {
            height: \${itemMinHeight}px;
            margin-top: \${negativeMargin};
          }
        \`}
      </style>

      <div className="infinite-scroll-wrapper" ref={wrapperRef}>
        <div
          className="infinite-scroll-container"
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div className="infinite-scroll-item" key={i}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
`,j={...$("Components/InfiniteScroll"),installation:"npm install gsap",usage:`import InfiniteScroll from './InfiniteScroll';
  
const items = [
  { content: "Text Item 1" },
  { content: <p>Paragraph Item 2</p> },
  { content: "Text Item 3" },
  { content: <p>Paragraph Item 4</p> },
  { content: "Text Item 5" },
  { content: <p>Paragraph Item 6</p> },
  { content: "Text Item 7" },
  { content: <p>Paragraph Item 8</p> },
  { content: "Text Item 9" },
  { content: <p>Paragraph Item 10</p> },
  { content: "Text Item 11" },
  { content: <p>Paragraph Item 12</p> },
  { content: "Text Item 13" },
  { content: <p>Paragraph Item 14</p> },
];
  
<div style={{height: '500px', position: 'relative'}}>
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.1}
    autoplayDirection="down"
    pauseOnHover={true}
  />
</div>`,code:V,css:_,tailwind:ee,tsCode:ne,tsTailwind:te},de=()=>{const w=[{name:"width",type:"string",default:'"30rem"',description:"Width of the outer wrapper."},{name:"maxHeight",type:"string",default:'"100%"',description:"Maximum height of the outer wrapper."},{name:"items",type:"array",default:"[]",description:"Array of items with custom content. Each item should have a 'content' property containing a string or React node."},{name:"itemMinHeight",type:"number",default:"150",description:"Fixed height for each item in pixels."},{name:"isTilted",type:"boolean",default:"false",description:"Whether the container has a skewed perspective."},{name:"tiltDirection",type:'"left" | "right"',default:'"left"',description:"Direction of the tilt if 'isTilted' is true."},{name:"autoplay",type:"boolean",default:"false",description:"Whether the scroll should autoplay."},{name:"autoplaySpeed",type:"number",default:"20",description:"Speed of autoplay in pixels/frame."},{name:"autoplayDirection",type:'"up" | "down"',default:'"down"',description:"Direction of autoplay scrolling."},{name:"pauseOnHover",type:"boolean",default:"false",description:"Pause autoplay when hovering over the component."},{name:"negativeMargin",type:"string",default:'"-0.5em"',description:"Negative margin to reduce spacing between items."}],[p,u]=s.useState(!0),[r,T]=s.useState("left"),[l,h]=s.useState(!0),[d,v]=s.useState("up"),[f,y]=s.useState(!0),x=[{content:e.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:"5px",border:"1px solid #fff",overflow:"hidden",position:"realtive"},children:[e.jsx("p",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:-1,fontSize:"3rem",fontWeight:900,color:"#271E37"},children:"Balls!"}),e.jsx(K,{count:50,followCursor:!1})]})},{content:e.jsx("p",{children:"Paragraph Item 2"})},{content:"Text Item 3"},{content:e.jsx("p",{children:"Paragraph Item 4"})},{content:"Text Item 5"},{content:e.jsx("p",{children:"Paragraph Item 6"})},{content:"Text Item 7"},{content:e.jsx("p",{children:"Paragraph Item 8"})},{content:"Text Item 9"},{content:e.jsx("p",{children:"Paragraph Item 10"})},{content:"Text Item 11"},{content:e.jsx("p",{children:"Paragraph Item 12"})},{content:"Text Item 13"},{content:e.jsx("p",{children:"Paragraph Item 14"})}],I=[{value:"up",label:"Up"},{value:"down",label:"Down"}],H=[{value:"left",label:"Left"},{value:"right",label:"Right"}];return e.jsxs(z,{children:[e.jsxs(q,{children:[e.jsx(N,{position:"relative",className:"demo-container",h:500,p:0,overflow:"hidden",display:"flex",bg:"#060010",justifyContent:"center",alignItems:"center",children:e.jsx(Q,{items:x,isTilted:p,tiltDirection:r,autoplay:l,autoplaySpeed:1,autoplayDirection:d,pauseOnHover:f})}),e.jsxs(G,{children:[e.jsx(F,{isChecked:p,title:"Tilt",onChange:()=>u(!p)}),p&&e.jsx(P,{title:"Tilt Direction",options:H,value:r,name:"tiltDirection",width:150,onChange:n=>{T(n)}}),e.jsx(X,{my:4,borderColor:"#271E37"}),e.jsx(F,{isChecked:l,title:"Autoplay",onChange:()=>h(!l)}),l&&e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Autoplay Direction",options:I,value:d,name:"autoplayDirection",width:150,onChange:n=>{v(n)}}),e.jsx(F,{title:"Pause on Hover",isChecked:f,onChange:n=>y(n)})]})]}),e.jsx(Y,{data:w}),e.jsx(J,{dependencyList:["gsap"]})]}),e.jsx(Z,{children:e.jsx(B,{codeObject:j})}),e.jsx(W,{children:e.jsx(U,{...j})})]})};export{de as default};
