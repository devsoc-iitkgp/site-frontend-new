import{g as v,r,j as e,B as g,d as x,F as C}from"./index-j7DW7U0N.js";import{T as w,P as F,a as j,C as I,b as O,c as N,d as R}from"./PropTable-Baf4PZpP.js";import{R as V}from"./RefreshButton-BMj2HM2t.js";import{u as S}from"./useForceRerender-LUtjsLCb.js";import{P as i}from"./PreviewSlider-D0sSZbsU.js";import{P as T}from"./PreviewSwitch-_xo3rdWG.js";import{C as $}from"./Customize-Dq9g9yhm.js";const E=`import { useRef, useEffect, useState } from 'react';

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = 'ease-out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = ''
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(ref.current);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: \`opacity \${duration}ms \${easing}, filter \${duration}ms \${easing}\`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
`,P=`import { useRef, useEffect, useState } from 'react';

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = 'ease-out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = ''
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(ref.current);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: \`opacity \${duration}ms \${easing}, filter \${duration}ms \${easing}\`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
`,D=`import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: \`opacity \${duration}ms \${easing}, filter \${duration}ms \${easing}\`,
        filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none",
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
`,B=`import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: \`opacity \${duration}ms \${easing}, filter \${duration}ms \${easing}\`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
`,d={...v("Animations/FadeContent"),usage:`import FadeContent from './FadeContent'
  
<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
  {/* Anything placed inside this container will be fade into view */}
</FadeContent>`,code:E,tailwind:P,tsCode:D,tsTailwind:B},W=()=>{const[s,u]=r.useState(!1),[a,f]=r.useState(0),[o,m]=r.useState(1e3),[l,b]=r.useState(.1),[c,p]=r.useState(0),[h,t]=S(),y=[{name:"blur",type:"boolean",default:"false",description:"Enables a blur effect during the animation."},{name:"duration",type:"number",default:1e3,description:"Specifies the duration of the fade animation in milliseconds."},{name:"delay",type:"number",default:"0",description:"Adds a delay in milliseconds before triggering the animation."},{name:"easing",type:"string",default:"ease-out",description:"Defines the easing function for the fade transition."},{name:"threshold",type:"number",default:.1,description:"IntersectionObserver threshold for triggering the fade animation."},{name:"initialOpacity",type:"number",default:0,description:"The starting opacity of the component before it enters the viewport."},{name:"className",type:"string",default:"",description:"Custom class(es) to be added to the container."}];return e.jsxs(w,{children:[e.jsxs(F,{children:[e.jsxs(g,{position:"relative",className:"demo-container",minH:200,children:[e.jsx(x,{blur:s,duration:o,delay:a,threshold:l,initialOpacity:c,children:e.jsx(C,{fontSize:"xl",fontWeight:"bolder",justifyContent:"center",alignItems:"center",color:"#fff",h:100,borderRadius:"25px",border:"1px solid #392e4e",w:200,bg:"#060010",children:"Fade"})},h),e.jsx(V,{onClick:t})]}),e.jsxs($,{children:[e.jsx(T,{title:"Enable Blur",isChecked:s,onChange:n=>{u(n),t()}}),e.jsx(i,{title:"Duration",min:500,max:3e3,step:100,value:o,valueUnit:"ms",onChange:n=>{m(n),t()}}),e.jsx(i,{title:"Delay",min:0,max:2e3,step:100,value:a,valueUnit:"ms",onChange:n=>{f(n),t()}}),e.jsx(i,{title:"Threshold",min:.1,max:1,step:.1,value:l,onChange:n=>{b(n),t()}}),e.jsx(i,{title:"Initial Opacity",min:0,max:1,step:.1,value:c,onChange:n=>{p(n),t()}})]}),e.jsx(j,{data:y})]}),e.jsx(I,{children:e.jsx(O,{codeObject:d})}),e.jsx(N,{children:e.jsx(R,{...d})})]})};export{W as default};
