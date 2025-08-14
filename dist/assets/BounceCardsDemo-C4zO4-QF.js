import{r as u,a as o,j as n,g as C,F as R}from"./index-j7DW7U0N.js";import{T as X,P as N,a as H,C as k,b as E,c as j,d as D}from"./PropTable-Baf4PZpP.js";import{C as P}from"./Customize-Dq9g9yhm.js";import{P as B}from"./PreviewSwitch-_xo3rdWG.js";import{P as S}from"./PreviewSlider-D0sSZbsU.js";import{R as I}from"./RefreshButton-BMj2HM2t.js";import{D as M}from"./Dependencies-BSh7s3YA.js";import{u as W}from"./useForceRerender-LUtjsLCb.js";function O({className:h="",images:r=[],containerWidth:d=400,containerHeight:b=400,animationDelay:i=.5,animationStagger:f=.06,easeType:c="elastic.out(1, 0.8)",transformStyles:l=["rotate(10deg) translate(-170px)","rotate(5deg) translate(-85px)","rotate(-3deg)","rotate(-10deg) translate(85px)","rotate(2deg) translate(170px)"],enableHover:g=!0}){u.useEffect(()=>{o.fromTo(".card",{scale:0},{scale:1,stagger:f,ease:c,delay:i})},[f,c,i]);const x=e=>/rotate\([\s\S]*?\)/.test(e)?e.replace(/rotate\([\s\S]*?\)/,"rotate(0deg)"):e==="none"?"rotate(0deg)":`${e} rotate(0deg)`,y=(e,t)=>{const a=/translate\(([-0-9.]+)px\)/,m=e.match(a);if(m){const T=parseFloat(m[1])+t;return e.replace(a,`translate(${T}px)`)}else return e==="none"?`translate(${t}px)`:`${e} translate(${t}px)`},s=e=>{g&&r.forEach((t,a)=>{o.killTweensOf(`.card-${a}`);const m=l[a]||"none";if(a===e){const p=x(m);o.to(`.card-${a}`,{transform:p,duration:.4,ease:"back.out(1.4)",overwrite:"auto"})}else{const p=a<e?-160:160,T=y(m,p),$=Math.abs(e-a)*.05;o.to(`.card-${a}`,{transform:T,duration:.4,ease:"back.out(1.4)",delay:$,overwrite:"auto"})}})},w=()=>{g&&r.forEach((e,t)=>{o.killTweensOf(`.card-${t}`);const a=l[t]||"none";o.to(`.card-${t}`,{transform:a,duration:.4,ease:"back.out(1.4)",overwrite:"auto"})})};return n.jsx("div",{className:`bounceCardsContainer ${h}`,style:{position:"relative",width:d,height:b},children:r.map((e,t)=>n.jsx("div",{className:`card card-${t}`,style:{transform:l[t]??"none"},onMouseEnter:()=>s(t),onMouseLeave:w,children:n.jsx("img",{className:"image",src:e,alt:`card-${t}`})},t))})}const _=`import { useEffect } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)"
  ],
  enableHover = true
}) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    );
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\\([\\s\\S]*?\\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\\([\\s\\S]*?\\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return \`\${transformStr} rotate(0deg)\`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\\(([-0-9.]+)px\\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, \`translate(\${newX}px)\`);
    } else {
      return baseTransform === "none"
        ? \`translate(\${offsetX}px)\`
        : \`\${baseTransform} translate(\${offsetX}px)\`;
    }
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover) return;
    images.forEach((_, i) => {
      gsap.killTweensOf(\`.card-\${i}\`);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(\`.card-\${i}\`, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto"
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(\`.card-\${i}\`, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto"
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;
    images.forEach((_, i) => {
      gsap.killTweensOf(\`.card-\${i}\`);
      const baseTransform = transformStyles[i] || "none";
      gsap.to(\`.card-\${i}\`, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto"
      });
    });
  };

  return (
    <div
      className={\`bounceCardsContainer \${className}\`}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={\`card card-\${idx}\`}
          style={{
            transform: transformStyles[idx] ?? "none"
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img className="image" src={src} alt={\`card-\${idx}\`} />
        </div>
      ))}
    </div>
  );
}
`,F=`.bounceCardsContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
}

.card {
  position: absolute;
  width: 200px;
  aspect-ratio: 1;
  border: 5px solid #fff;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,L=`import { useEffect } from "react";
import { gsap } from "gsap";

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = false,
}) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      }
    );
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\\([\\s\\S]*?\\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\\([\\s\\S]*?\\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return \`\${transformStr} rotate(0deg)\`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\\(([-0-9.]+)px\\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, \`translate(\${newX}px)\`);
    } else {
      return baseTransform === "none"
        ? \`translate(\${offsetX}px)\`
        : \`\${baseTransform} translate(\${offsetX}px)\`;
    }
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      const selector = \`.card-\${i}\`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      const selector = \`.card-\${i}\`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      className={\`relative flex items-center justify-center \${className}\`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={\`card card-\${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden\`}
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transform: transformStyles[idx] || "none",
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={\`card-\${idx}\`}
          />
        </div>
      ))}
    </div>
  );
}
`,A=`import { useEffect } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = false,
}: BounceCardsProps) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      }
    );
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\\([\\s\\S]*?\\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\\([\\s\\S]*?\\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return \`\${transformStr} rotate(0deg)\`;
    }
  };

  const getPushedTransform = (
    baseTransform: string,
    offsetX: number
  ): string => {
    const translateRegex = /translate\\(([-0-9.]+)px\\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, \`translate(\${newX}px)\`);
    } else {
      return baseTransform === "none"
        ? \`translate(\${offsetX}px)\`
        : \`\${baseTransform} translate(\${offsetX}px)\`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      gsap.killTweensOf(\`.card-\${i}\`);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(\`.card-\${i}\`, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(\`.card-\${i}\`, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      gsap.killTweensOf(\`.card-\${i}\`);
      const baseTransform = transformStyles[i] || "none";
      gsap.to(\`.card-\${i}\`, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      className={\`bounceCardsContainer \${className}\`}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={\`card card-\${idx}\`}
          style={{ transform: transformStyles[idx] ?? "none" }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img className="image" src={src} alt={\`card-\${idx}\`} />
        </div>
      ))}
    </div>
  );
}
`,q=`import { useEffect } from "react";
import { gsap } from "gsap";

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = false,
}: BounceCardsProps) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      }
    );
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\\([\\s\\S]*?\\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\\([\\s\\S]*?\\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return \`\${transformStr} rotate(0deg)\`;
    }
  };

  const getPushedTransform = (
    baseTransform: string,
    offsetX: number
  ): string => {
    const translateRegex = /translate\\(([-0-9.]+)px\\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, \`translate(\${newX}px)\`);
    } else {
      return baseTransform === "none"
        ? \`translate(\${offsetX}px)\`
        : \`\${baseTransform} translate(\${offsetX}px)\`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      const selector = \`.card-\${i}\`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      const selector = \`.card-\${i}\`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      className={\`relative flex items-center justify-center \${className}\`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={\`card card-\${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden\`}
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transform: transformStyles[idx] || "none",
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={\`card-\${idx}\`}
          />
        </div>
      ))}
    </div>
  );
}
`,v={...C("Components/BounceCards"),installation:"npm install gsap",usage:`import BounceCards from './BounceCards'

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

<BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={500}
  containerHeight={250}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={false}
/>`,code:_,css:F,tailwind:L,tsTailwind:q,tsCode:A},nn=()=>{const[h,r]=W(),[d,b]=u.useState(!1),[i,f]=u.useState(1),[c,l]=u.useState(.08),g=["https://picsum.photos/400/400?grayscale","https://picsum.photos/500/500?grayscale","https://picsum.photos/600/600?grayscale","https://picsum.photos/700/700?grayscale","https://picsum.photos/300/300?grayscale"],x=["rotate(5deg) translate(-150px)","rotate(0deg) translate(-70px)","rotate(-5deg)","rotate(5deg) translate(70px)","rotate(-5deg) translate(150px)"],y=[{name:"className",type:"string",default:"",description:"Additional CSS classes for the container."},{name:"images",type:"string[]",default:"[]",description:"Array of image URLs to display."},{name:"containerWidth",type:"number",default:400,description:"Width of the container (px)."},{name:"containerHeight",type:"number",default:400,description:"Height of the container (px)."},{name:"animationDelay",type:"number",default:.5,description:"Delay (in seconds) before the animation starts."},{name:"animationStagger",type:"number",default:.06,description:"Time (in seconds) between each card's animation."},{name:"easeType",type:"string",default:"elastic.out(1, 0.8)",description:"Easing function for the bounce."},{name:"transformStyles",type:"string[]",default:"various rotations/translations",description:"Custom transforms for each card position."},{name:"enableHover",type:"boolean",default:"false",description:"If true, hovering pushes siblings aside and flattens the hovered card's rotation."}];return n.jsxs(X,{children:[n.jsxs(N,{children:[n.jsxs(R,{overflow:"hidden",justifyContent:"center",alignItems:"center",minH:"400px",position:"relative",pb:"4em",className:"demo-container",children:[n.jsx(O,{className:"custom-bounceCards",images:g,containerWidth:500,containerHeight:250,animationDelay:i,animationStagger:c,easeType:"elastic.out(1, 0.5)",transformStyles:x,enableHover:d},h),n.jsx(I,{onClick:r})]}),n.jsxs(P,{children:[n.jsx(B,{title:"Enable Hover Effect",isChecked:d,onChange:s=>{b(s),r()}}),n.jsx(S,{title:"Animation Delay",min:.1,max:2,step:.1,value:i,onChange:s=>{f(s),r()}}),n.jsx(S,{title:"Animation Stagger",min:0,max:.3,step:.01,value:c,onChange:s=>{l(s),r()}})]}),n.jsx(H,{data:y}),n.jsx(M,{dependencyList:["gsap"]})]}),n.jsx(k,{children:n.jsx(E,{codeObject:v})}),n.jsx(j,{children:n.jsx(D,{...v})})]})};export{nn as default};
