import{g as I,r,j as t,B as P,T as z,F as L}from"./index-j7DW7U0N.js";import{T as B,P as N,a as q,C as D,b as O,c as W,d as Y}from"./PropTable-Baf4PZpP.js";import{u as H}from"./useForceRerender-LUtjsLCb.js";import{P as g}from"./PreviewSlider-D0sSZbsU.js";import{C as X}from"./Customize-Dq9g9yhm.js";const _=`import { useRef, useEffect, useCallback } from "react";

const ClickSpark = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
  children
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);     
  const startTimeRef = useRef(null); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let resizeTimeout;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);

    resizeCanvas();

    return () => {
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;

    const draw = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp; 
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [
    sparkColor,
    sparkSize,
    sparkRadius,
    sparkCount,
    duration,
    easeFunc,
    extraScale,
  ]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));

    sparksRef.current.push(...newSparks);
  };

  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          userSelect: "none",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none"
        }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;`,J=`import { useRef, useEffect, useCallback } from "react";

const ClickSpark = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
  children
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]); 
  const startTimeRef = useRef(null); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let resizeTimeout;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100); 
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);

    resizeCanvas();

    return () => {
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;

    const draw = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp; 
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [
    sparkColor,
    sparkSize,
    sparkRadius,
    sparkCount,
    duration,
    easeFunc,
    extraScale,
  ]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));

    sparksRef.current.push(...newSparks);
  };

  return (
    <div className="relative w-full h-full" onClick={handleClick}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block absolute top-0 left-0 select-none pointer-events-none"
      />
      {children}
    </div>
  );
};

export default ClickSpark;`,U=`import React, { useRef, useEffect, useCallback } from "react";

interface ClickSparkProps {
    sparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
    easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
    extraScale?: number;
    children?: React.ReactNode;
}

interface Spark {
    x: number;
    y: number;
    angle: number;
    startTime: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
    sparkColor = "#fff",
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
    easing = "ease-out",
    extraScale = 1.0,
    children
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sparksRef = useRef<Spark[]>([]);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        let resizeTimeout : NodeJS.Timeout;

        const resizeCanvas = () => {
            const { width, height } = parent.getBoundingClientRect();
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
        };

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 100);
        };

        const ro = new ResizeObserver(handleResize);
        ro.observe(parent);

        resizeCanvas();

        return () => {
            ro.disconnect();
            clearTimeout(resizeTimeout);
        };
    }, []);


    const easeFunc = useCallback(
        (t: number) => {
            switch (easing) {
                case "linear":
                    return t;
                case "ease-in":
                    return t * t;
                case "ease-in-out":
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                default:
                    return t * (2 - t);
            }
        },
        [easing]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;

        const draw = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }
            ctx?.clearRect(0, 0, canvas.width, canvas.height);

            sparksRef.current = sparksRef.current.filter((spark: Spark) => {
                const elapsed = timestamp - spark.startTime;
                if (elapsed >= duration) {
                    return false;
                }

                const progress = elapsed / duration;
                const eased = easeFunc(progress);

                const distance = eased * sparkRadius * extraScale;
                const lineLength = sparkSize * (1 - eased);

                const x1 = spark.x + distance * Math.cos(spark.angle);
                const y1 = spark.y + distance * Math.sin(spark.angle);
                const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

                ctx.strokeStyle = sparkColor;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();

                return true;
            });

            animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const now = performance.now();
        const newSparks: Spark[] = Array.from({length: sparkCount}, (_, i) => ({
            x,
            y,
            angle: (2 * Math.PI * i) / sparkCount,
            startTime: now,
        }));

        sparksRef.current.push(...newSparks);
    };

    return (
        <div style={{
            width:"100%",
            height:"100%",
            position:"relative"
        }}
        onClick={handleClick}
        >
            <canvas
                ref={canvasRef}
                style={{
                   position:"absolute",
                   inset:0,
                   pointerEvents:"none"
                }}
            />
            {children}
        </div>
    );
};

export default ClickSpark;
`,G=`import React, { useRef, useEffect, useCallback } from "react";

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  extraScale?: number;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
    children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let resizeTimeout : NodeJS.Timeout;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);

    resizeCanvas();

    return () => {
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);


  const easeFunc = useCallback(
      (t: number) => {
        switch (easing) {
          case "linear":
            return t;
          case "ease-in":
            return t * t;
          case "ease-in-out":
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          default:
            return t * (2 - t);
        }
      },
      [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      ctx?.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark: Spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    const newSparks: Spark[] = Array.from({length: sparkCount}, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));

    sparksRef.current.push(...newSparks);
  };

    return (
        <div
          className="relative w-full h-full"
          onClick={handleClick}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
            />
            {children}
        </div>
    );
};

export default ClickSpark;
`,E={...I("Animations/ClickSpark"),usage:`import ClickSpark from './ClickSpark';

<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  {/* Your content here */}
</ClickSpark>`,code:_,tailwind:J,tsCode:U,tsTailwind:G},K=({sparkColor:p="#fff",sparkSize:x=10,sparkRadius:d=15,sparkCount:f=8,duration:l=400,easing:R="ease-out",extraScale:m=1,children:T})=>{const i=r.useRef(null),k=r.useRef([]),h=r.useRef(null);r.useEffect(()=>{const n=i.current;if(!n)return;const a=n.parentElement;if(!a)return;let e;const c=()=>{const{width:o,height:v}=a.getBoundingClientRect();(n.width!==o||n.height!==v)&&(n.width=o,n.height=v)},u=()=>{clearTimeout(e),e=setTimeout(c,100)},s=new ResizeObserver(u);return s.observe(a),c(),()=>{s.disconnect(),clearTimeout(e)}},[]);const C=r.useCallback(n=>{switch(R){case"linear":return n;case"ease-in":return n*n;case"ease-in-out":return n<.5?2*n*n:-1+(4-2*n)*n;default:return n*(2-n)}},[R]);r.useEffect(()=>{const n=i.current;if(!n)return;const a=n.getContext("2d");let e;const c=u=>{h.current||(h.current=u),a.clearRect(0,0,n.width,n.height),k.current=k.current.filter(s=>{const o=u-s.startTime;if(o>=l)return!1;const v=o/l,S=C(v),w=S*d*m,y=x*(1-S),F=s.x+w*Math.cos(s.angle),M=s.y+w*Math.sin(s.angle),A=s.x+(w+y)*Math.cos(s.angle),j=s.y+(w+y)*Math.sin(s.angle);return a.strokeStyle=p,a.lineWidth=2,a.beginPath(),a.moveTo(F,M),a.lineTo(A,j),a.stroke(),!0}),e=requestAnimationFrame(c)};return e=requestAnimationFrame(c),()=>{cancelAnimationFrame(e)}},[p,x,d,f,l,C,m]);const b=n=>{const a=i.current;if(!a)return;const e=a.getBoundingClientRect(),c=n.clientX-e.left,u=n.clientY-e.top,s=performance.now(),o=Array.from({length:f},(v,S)=>({x:c,y:u,angle:2*Math.PI*S/f,startTime:s}));k.current.push(...o)};return t.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},onClick:b,children:[t.jsx("canvas",{ref:i,style:{width:"100%",height:"100%",display:"block",userSelect:"none",position:"absolute",top:0,left:0,pointerEvents:"none"}}),T]})},en=()=>{const[p,x]=r.useState("#ffffff"),[d,f]=r.useState(10),[l,R]=r.useState(15),[m,T]=r.useState(8),[i,k]=r.useState(400),[h,C]=r.useState(1),[b,n]=H(),a=[{name:"sparkColor",type:"string",default:"'#f00'",description:"Color of each spark line."},{name:"sparkSize",type:"number",default:30,description:"Initial length of each spark line."},{name:"sparkRadius",type:"number",default:30,description:"How far sparks travel from the click center."},{name:"sparkCount",type:"number",default:8,description:"Number of spark lines that appear on each click."},{name:"duration",type:"number",default:660,description:"Animation duration in milliseconds."},{name:"easing",type:"string",default:"'ease-out'",description:"Easing function used for the spark animation."},{name:"extraScale",type:"number",default:1,description:"Additional multiplier for spark distance."},{name:"children",type:"React.ReactNode",default:"",description:"React children to render."}];return t.jsxs(B,{children:[t.jsxs(N,{children:[t.jsxs(P,{position:"relative",className:"demo-container",h:300,p:0,overflow:"hidden",children:[t.jsx(K,{sparkColor:p,sparkSize:d,sparkRadius:l,sparkCount:m,duration:i,extraScale:h},b),t.jsx(z,{position:"absolute",fontWeight:900,fontSize:"2rem",textAlign:"center",color:"#271E37",userSelect:"none",children:"Click Around!"})]}),t.jsxs(X,{children:[t.jsxs(L,{gap:4,align:"center",mt:4,children:[t.jsx(z,{fontSize:"sm",children:"Spark Color:"}),t.jsx("input",{type:"color",value:p,onChange:e=>{x(e.target.value),n()}})]}),t.jsx(g,{title:"Spark Size",min:5,max:60,step:1,value:d,onChange:e=>{f(e),n()}}),t.jsx(g,{title:"Spark Radius",min:10,max:200,step:5,value:l,onChange:e=>{R(e),n()}}),t.jsx(g,{title:"Spark Count",min:1,max:20,step:1,value:m,onChange:e=>{T(e),n()}}),t.jsx(g,{title:"Duration",min:200,max:2e3,step:100,value:i,valueUnit:"ms",onChange:e=>{k(e),n()}}),t.jsx(g,{title:"Extra Scale",min:.5,max:2,step:.1,value:h,onChange:e=>{C(e),n()}})]}),t.jsx(q,{data:a})]}),t.jsx(D,{children:t.jsx(O,{codeObject:E})}),t.jsx(W,{children:t.jsx(Y,{...E})})]})};export{en as default};
