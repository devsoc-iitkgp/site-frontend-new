import{r,j as e,b2 as O,p as N,g as L,B as S,T as k}from"./index-j7DW7U0N.js";import{T as B,P as q,a as H,C as z,b as W,c as G,d as J}from"./PropTable-Baf4PZpP.js";import{C as K}from"./Customize-Dq9g9yhm.js";import{P as D}from"./PreviewSwitch-_xo3rdWG.js";import{D as Q}from"./Dependencies-BSh7s3YA.js";import{u as U}from"./useForceRerender-LUtjsLCb.js";import{P as V}from"./PreviewInput-C9vEteKu.js";import"./field-BmHOm1Rn.js";const Z=({text:m="⚛️",delay:v=.01,spacing:o=100,followMouseDirection:y=!0,randomFloat:a=!0,exitDuration:h=.5,removalInterval:u=30,maxPoints:l=5})=>{const[g,i]=r.useState([]),d=r.useRef(null),M=r.useRef(Date.now()),R=r.useRef(0),I=n=>{if(!d.current)return;const s=d.current.getBoundingClientRect(),b=n.clientX-s.left,C=n.clientY-s.top;i(X=>{let t=[...X];if(t.length===0)t.push({id:R.current++,x:b,y:C,angle:0,...a&&{randomX:Math.random()*10-5,randomY:Math.random()*10-5,randomRotate:Math.random()*10-5}});else{const f=t[t.length-1],p=b-f.x,x=C-f.y,w=Math.sqrt(p*p+x*x);if(w>=o){let c=Math.atan2(x,p)*180/Math.PI;c>90?c-=180:c<-90&&(c+=180);const Y=y?c:0,E=Math.floor(w/o);for(let T=1;T<=E;T++){const A=o*T/w,F=f.x+p*A,j=f.y+x*A;t.push({id:R.current++,x:F,y:j,angle:Y,...a&&{randomX:Math.random()*10-5,randomY:Math.random()*10-5,randomRotate:Math.random()*10-5}})}}}return t.length>l&&(t=t.slice(t.length-l)),t}),M.current=Date.now()};return r.useEffect(()=>{const n=d.current;if(n)return n.addEventListener("mousemove",I),()=>n.removeEventListener("mousemove",I)},[]),r.useEffect(()=>{const n=setInterval(()=>{Date.now()-M.current>100&&i(s=>s.length>0?s.slice(1):s)},u);return()=>clearInterval(n)},[u]),e.jsx("div",{ref:d,className:"text-cursor-container",children:e.jsx("div",{className:"text-cursor-inner",children:e.jsx(O,{children:g.map(n=>e.jsx(N.div,{initial:{opacity:0,scale:1,x:0,y:0,rotate:n.angle},animate:{opacity:1,scale:1,x:a?[0,n.randomX||0,0]:0,y:a?[0,n.randomY||0,0]:0,rotate:a?[n.angle,n.angle+(n.randomRotate||0),n.angle]:n.angle},exit:{opacity:0,scale:0},transition:{opacity:{duration:h,ease:"easeOut",delay:v},...a&&{x:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"mirror"},y:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"mirror"},rotate:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"mirror"}}},className:"text-cursor-item",style:{left:n.x,top:n.y},children:m},n.id))})})})},_=`import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./TextCursor.css";

const TextCursor = ({
  text = "⚛️",
  delay = 0.01,
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5,
}) => {
  const [trail, setTrail] = useState([]);
  const containerRef = useRef(null);
  const lastMoveTimeRef = useRef(Date.now());
  const idCounter = useRef(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTrail((prev) => {
      let newTrail = [...prev];
      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...(randomFloat && {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5,
          }),
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          if (rawAngle > 90) rawAngle -= 180;
          else if (rawAngle < -90) rawAngle += 180;
          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);
          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;
            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...(randomFloat && {
                randomX: Math.random() * 10 - 5,
                randomY: Math.random() * 10 - 5,
                randomRotate: Math.random() * 10 - 5,
              }),
            });
          }
        }
      }
      if (newTrail.length > maxPoints) {
        newTrail = newTrail.slice(newTrail.length - maxPoints);
      }
      return newTrail;
    });
    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="text-cursor-container">
      <div className="text-cursor-inner">
        <AnimatePresence>
          {trail.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, x: 0, y: 0, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat
                  ? [
                    item.angle,
                    item.angle + (item.randomRotate || 0),
                    item.angle,
                  ]
                  : item.angle,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: "easeOut", delay },
                ...(randomFloat && {
                  x: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  y: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  rotate: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }),
              }}
              className="text-cursor-item"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
`,$=`.text-cursor-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.text-cursor-inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.text-cursor-item {
  position: absolute;
  user-select: none;
  white-space: nowrap;
  font-size: 1.875rem;
}
`,nn=`import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const TextCursor = ({
  text = "⚛️",
  delay = 0.01,
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5,
}) => {
  const [trail, setTrail] = useState([]);
  const containerRef = useRef(null);
  const lastMoveTimeRef = useRef(Date.now());
  const idCounter = useRef(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTrail((prev) => {
      let newTrail = [...prev];
      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...(randomFloat && {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5,
          }),
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          if (rawAngle > 90) rawAngle -= 180;
          else if (rawAngle < -90) rawAngle += 180;
          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);
          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;
            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...(randomFloat && {
                randomX: Math.random() * 10 - 5,
                randomY: Math.random() * 10 - 5,
                randomRotate: Math.random() * 10 - 5,
              }),
            });
          }
        }
      }
      if (newTrail.length > maxPoints) {
        newTrail = newTrail.slice(newTrail.length - maxPoints);
      }
      return newTrail;
    });
    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {trail.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, x: 0, y: 0, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat
                  ? [
                    item.angle,
                    item.angle + (item.randomRotate || 0),
                    item.angle,
                  ]
                  : item.angle,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: "easeOut", delay },
                ...(randomFloat && {
                  x: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  y: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  rotate: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }),
              }}
              className="absolute select-none whitespace-nowrap text-3xl"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
`,en=`import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./TextCursor.css";

interface TextCursorProps {
  text: string;
  delay?: number;
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  angle: number;
  randomX?: number;
  randomY?: number;
  randomRotate?: number;
}

const TextCursor: React.FC<TextCursorProps> = ({
  text = "⚛️",
  delay = 0.01,
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5,
}) => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMoveTimeRef = useRef<number>(Date.now());
  const idCounter = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTrail((prev) => {
      let newTrail = [...prev];
      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...(randomFloat && {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5,
          }),
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          if (rawAngle > 90) rawAngle -= 180;
          else if (rawAngle < -90) rawAngle += 180;
          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);
          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;
            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...(randomFloat && {
                randomX: Math.random() * 10 - 5,
                randomY: Math.random() * 10 - 5,
                randomRotate: Math.random() * 10 - 5,
              }),
            });
          }
        }
      }
      if (newTrail.length > maxPoints) {
        newTrail = newTrail.slice(newTrail.length - maxPoints);
      }
      return newTrail;
    });
    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="text-cursor-container">
      <div className="text-cursor-inner">
        <AnimatePresence>
          {trail.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, x: 0, y: 0, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat
                  ? [
                      item.angle,
                      item.angle + (item.randomRotate || 0),
                      item.angle,
                    ]
                  : item.angle,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: "easeOut", delay },
                ...(randomFloat && {
                  x: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  y: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  rotate: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }),
              }}
              className="text-cursor-item"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
`,tn=`import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TextCursorProps {
  text: string;
  delay?: number;
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  angle: number;
  randomX?: number;
  randomY?: number;
  randomRotate?: number;
}

const TextCursor: React.FC<TextCursorProps> = ({
  text = "⚛️",
  delay = 0.01,
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5,
}) => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMoveTimeRef = useRef<number>(Date.now());
  const idCounter = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTrail((prev) => {
      let newTrail = [...prev];
      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...(randomFloat && {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5,
          }),
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          if (rawAngle > 90) rawAngle -= 180;
          else if (rawAngle < -90) rawAngle += 180;
          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);
          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;
            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...(randomFloat && {
                randomX: Math.random() * 10 - 5,
                randomY: Math.random() * 10 - 5,
                randomRotate: Math.random() * 10 - 5,
              }),
            });
          }
        }
      }
      if (newTrail.length > maxPoints) {
        newTrail = newTrail.slice(newTrail.length - maxPoints);
      }
      return newTrail;
    });
    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {trail.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, x: 0, y: 0, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat
                  ? [
                      item.angle,
                      item.angle + (item.randomRotate || 0),
                      item.angle,
                    ]
                  : item.angle,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: "easeOut", delay },
                ...(randomFloat && {
                  x: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  y: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  rotate: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }),
              }}
              className="absolute select-none whitespace-nowrap text-3xl"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
`,P={...L("TextAnimations/TextCursor"),installation:"npm install motion",usage:`import TextCursor from './TextCursor';

<TextCursor
  text="Hello!"
  delay={0.01}
  spacing={80}
  followMouseDirection={true}
  randomFloat={true}
  exitDuration={0.3}
  removalInterval={20}
  maxPoints={10}
/>`,code:_,css:$,tailwind:nn,tsCode:en,tsTailwind:tn},dn=()=>{const[m,v]=r.useState("⚛️"),[o,y]=r.useState(!0),[a,h]=r.useState(!0),[u,l]=U(),g=[{name:"text",type:"string",default:"⚛️",description:"The text string to display as the trail."},{name:"delay",type:"number",default:"0.01",description:"The entry stagger delay in seconds for the fade-out animation."},{name:"spacing",type:"number",default:"100",description:"The spacing in pixels between each trail point."},{name:"followMouseDirection",type:"boolean",default:"true",description:"If true, each text rotates to follow the mouse direction."},{name:"randomFloat",type:"boolean",default:"true",description:"If true, enables random floating offsets in position and rotation for a dynamic effect."},{name:"exitDuration",type:"number",default:"0.5",description:"The duration in seconds for the exit animation of each trail item."},{name:"removalInterval",type:"number",default:"30",description:"The interval in milliseconds between removing trail items when the mouse stops moving."},{name:"maxPoints",type:"number",default:"5",description:"The maximum number of trail points to display."}];return e.jsxs(B,{children:[e.jsxs(q,{children:[e.jsxs(S,{position:"relative",className:"demo-container",h:500,overflow:"hidden",children:[e.jsx(Z,{text:m,followMouseDirection:o,randomFloat:a},u),e.jsx(k,{pointerEvents:"none",position:"absolute",textAlign:"center",fontSize:"4rem",fontWeight:900,userSelect:"none",color:"#271E37",children:"Hover Around!"})]}),e.jsxs(K,{children:[e.jsx(V,{title:"Text",value:m,placeholder:"Enter text...",width:160,maxLength:10,onChange:v}),e.jsx(D,{title:"Follow Mouse Direction",isChecked:o,onChange:i=>{y(i),l()}}),e.jsx(D,{title:"Enable Random Floating",isChecked:a,onChange:i=>{h(i),l()}})]}),e.jsx(H,{data:g}),e.jsx(Q,{dependencyList:["motion"]})]}),e.jsx(z,{children:e.jsx(W,{codeObject:P})}),e.jsx(G,{children:e.jsx(J,{...P})})]})};export{dn as default};
