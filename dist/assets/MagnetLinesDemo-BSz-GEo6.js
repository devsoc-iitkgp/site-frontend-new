import{r as h,j as n,g as S,F as E}from"./index-j7DW7U0N.js";import{T as $,P as A,a as N,C as T,b as I,c as j,d as H}from"./PropTable-Baf4PZpP.js";function z({rows:i=9,columns:l=9,containerSize:m="80vmin",lineColor:u="#efefef",lineWidth:y="1vmin",lineHeight:v="6vmin",baseAngle:w=-10,className:b="",style:M={}}){const d=h.useRef(null);h.useEffect(()=>{const s=d.current;if(!s)return;const e=s.querySelectorAll("span"),a=t=>{e.forEach(r=>{const o=r.getBoundingClientRect(),P=o.x+o.width/2,g=o.y+o.height/2,c=t.x-P,f=t.y-g,R=Math.sqrt(f*f+c*c)||1,L=Math.acos(c/R)*180/Math.PI*(t.y>g?1:-1);r.style.setProperty("--rotate",`${L}deg`)})};if(window.addEventListener("pointermove",a),e.length){const t=Math.floor(e.length/2),r=e[t].getBoundingClientRect();a({x:r.x,y:r.y})}return()=>{window.removeEventListener("pointermove",a)}},[]);const x=i*l,C=Array.from({length:x},(s,e)=>n.jsx("span",{style:{"--rotate":`${w}deg`,backgroundColor:u,width:y,height:v}},e));return n.jsx("div",{ref:d,className:`magnetLines-container ${b}`,style:{display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gridTemplateRows:`repeat(${i}, 1fr)`,width:m,height:m,...M},children:C})}const k=`import { useRef, useEffect } from "react";
import "./MagnetLines.css";

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className = "",
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll("span");

    const onPointerMove = (pointer) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          (Math.acos(b / c) * 180) / Math.PI * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty("--rotate", \`\${r}deg\`);
      });
    };

    window.addEventListener("pointermove", onPointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={{
        "--rotate": \`\${baseAngle}deg\`,
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`magnetLines-container \${className}\`}
      style={{
        display: "grid",
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
}
`,W=`.magnetLines-container {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);

  justify-items: center;
  align-items: center;

  width: 80vmin;
  height: 80vmin;
}

.magnetLines-container span {
  display: block;
  transform-origin: center;
  will-change: transform;
  transform: rotate(var(--rotate));
}
`,Y=`import { useRef, useEffect } from "react";

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className = "",
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll("span");

    const onPointerMove = (pointer) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty("--rotate", \`\${r}deg\`);
      });
    };

    window.addEventListener("pointermove", onPointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center"
      style={{
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
        "--rotate": \`\${baseAngle}deg\`,
        transform: "rotate(var(--rotate))",
        willChange: "transform"
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`grid place-items-center \${className}\`}
      style={{
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
}`,q=`import React, { useRef, useEffect, CSSProperties } from "react";
import "./MagnetLines.css";

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: CSSProperties;
}

const MagnetLines: React.FC<MagnetLinesProps> = ({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>("span");

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty("--rotate", \`\${r}deg\`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.x, y: e.y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={
        {
          "--rotate": \`\${baseAngle}deg\`,
          backgroundColor: lineColor,
          width: lineWidth,
          height: lineHeight,
        } as CSSProperties
      }
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`magnetLines-container \${className}\`}
      style={{
        display: "grid",
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      {spans}
    </div>
  );
};

export default MagnetLines;
`,B=`import React, { useRef, useEffect, CSSProperties } from "react";

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: CSSProperties;
}

const MagnetLines: React.FC<MagnetLinesProps> = ({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>("span");

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty("--rotate", \`\${r}deg\`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.x, y: e.y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center"
      style={{
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
        //@ts-ignore
        "--rotate": \`\${baseAngle}deg\`,
        transform: "rotate(var(--rotate))",
        willChange: "transform",
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`grid place-items-center \${className}\`}
      style={{
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      {spans}
    </div>
  );
};

export default MagnetLines;
`,p={...S("Animations/MagnetLines"),usage:`import MagnetLines from './MagnetLines';

<MagnetLines
  rows={9}
  columns={9}
  containerSize="60vmin"
  lineColor="tomato"
  lineWidth="0.8vmin"
  lineHeight="5vmin"
  baseAngle={0}
  style={{ margin: "2rem auto" }}
/>`,code:k,css:W,tailwind:Y,tsCode:q,tsTailwind:B},D=()=>{const i=[{name:"rows",type:"number",default:"9",description:"Number of grid rows."},{name:"columns",type:"number",default:"9",description:"Number of grid columns."},{name:"containerSize",type:"string",default:"80vmin",description:"Specifies the width and height of the entire grid container."},{name:"lineColor",type:"string",default:"#efefef",description:"Color for each line (the <span> elements)."},{name:"lineWidth",type:"string",default:"1vmin",description:"Specifies each line’s thickness."},{name:"lineHeight",type:"string",default:"6vmin",description:"Specifies each line’s length."},{name:"baseAngle",type:"number",default:"-10",description:"Initial rotation angle (in degrees) before pointer movement."},{name:"className",type:"string",default:"",description:"Additional class name(s) applied to the container."},{name:"style",type:"object",default:"{}",description:"Inline styles for the container."}];return n.jsxs($,{children:[n.jsxs(A,{children:[n.jsx(E,{overflow:"hidden",justifyContent:"center",pb:"1em",alignItems:"center",className:"demo-container",children:n.jsx(z,{rows:10,columns:12,containerSize:"40vmin",lineWidth:"2px",lineHeight:"30px"})}),n.jsx(N,{data:i})]}),n.jsx(T,{children:n.jsx(I,{codeObject:p})}),n.jsx(j,{children:n.jsx(H,{...p})})]})};export{D as default};
