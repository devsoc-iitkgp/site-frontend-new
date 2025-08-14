import{r as e,j as n,p as M,g as F,B as T,F as S,T as N}from"./index-j7DW7U0N.js";import{T as E,P as B,a as j,C as D,b as L,c as $,d as P}from"./PropTable-Baf4PZpP.js";import{D as k}from"./Dependencies-BSh7s3YA.js";import{P as g}from"./PreviewSlider-D0sSZbsU.js";import{P as H}from"./PreviewSwitch-_xo3rdWG.js";import{C as z}from"./Customize-Dq9g9yhm.js";const O=({sentence:i="True Focus",manualMode:o=!1,blurAmount:l=5,borderColor:f="green",glowColor:d="rgba(0, 255, 0, 0.6)",animationDuration:c=.5,pauseBetweenAnimations:p=1})=>{const u=i.split(" "),[r,m]=e.useState(0),[b,h]=e.useState(null),a=e.useRef(null),v=e.useRef([]),[x,C]=e.useState({x:0,y:0,width:0,height:0});e.useEffect(()=>{if(!o){const s=setInterval(()=>{m(t=>(t+1)%u.length)},(c+p)*1e3);return()=>clearInterval(s)}},[o,c,p,u.length]),e.useEffect(()=>{if(r===null||r===-1||!v.current[r]||!a.current)return;const s=a.current.getBoundingClientRect(),t=v.current[r].getBoundingClientRect();C({x:t.left-s.left,y:t.top-s.top,width:t.width,height:t.height})},[r,u.length]);const I=s=>{o&&(h(s),m(s))},A=()=>{o&&m(b)};return n.jsxs("div",{className:"focus-container",ref:a,children:[u.map((s,t)=>{const w=t===r;return n.jsx("span",{ref:y=>v.current[t]=y,className:`focus-word ${o?"manual":""} ${w&&!o?"active":""}`,style:{filter:o?w?"blur(0px)":`blur(${l}px)`:w?"blur(0px)":`blur(${l}px)`,"--border-color":f,"--glow-color":d,transition:`filter ${c}s ease`},onMouseEnter:()=>I(t),onMouseLeave:A,children:s},t)}),n.jsxs(M.div,{className:"focus-frame",animate:{x:x.x,y:x.y,width:x.width,height:x.height,opacity:r>=0?1:0},transition:{duration:c},style:{"--border-color":f,"--glow-color":d},children:[n.jsx("span",{className:"corner top-left"}),n.jsx("span",{className:"corner top-right"}),n.jsx("span",{className:"corner bottom-left"}),n.jsx("span",{className:"corner bottom-right"})]})]})},U=`import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./TrueFocus.css";

const TrueFocus = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className={\`focus-word \${manualMode ? "manual" : ""} \${isActive && !manualMode ? "active" : ""
              }\`}
            style={{
              filter:
                manualMode
                  ? isActive
                    ? \`blur(0px)\`
                    : \`blur(\${blurAmount}px)\`
                  : isActive
                    ? \`blur(0px)\`
                    : \`blur(\${blurAmount}px)\`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: \`filter \${animationDuration}s ease\`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={{
          "--border-color": borderColor,
          "--glow-color": glowColor,
        }}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;`,q=`.focus-container {
  position: relative;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.focus-word {
  position: relative;
  font-size: 3rem;
  font-weight: 900;
  cursor: pointer;
  transition:
    filter 0.3s ease,
    color 0.3s ease;
}

.focus-word.active {
  filter: blur(0);
}

.focus-frame {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  box-sizing: content-box;
  border: none;
}

.corner {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border: 3px solid var(--border-color, #fff);
  filter: drop-shadow(0px 0px 4px var(--border-color, #fff));
  border-radius: 3px;
  transition: none;
}

.top-left {
  top: -10px;
  left: -10px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: -10px;
  right: -10px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: -10px;
  left: -10px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: -10px;
  right: -10px;
  border-left: none;
  border-top: none;
}
`,G=`import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const TrueFocus = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className="relative flex gap-4 justify-center items-center flex-wrap"
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className="relative text-[3rem] font-black cursor-pointer"
            style={{
              filter: manualMode
                ? isActive
                  ? \`blur(0px)\`
                  : \`blur(\${blurAmount}px)\`
                : isActive
                  ? \`blur(0px)\`
                  : \`blur(\${blurAmount}px)\`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: \`filter \${animationDuration}s ease\`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={{
          "--border-color": borderColor,
          "--glow-color": glowColor,
        }}
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
`,J=`import { useEffect, useRef, useState, RefObject } from "react";
import { motion } from "motion/react";
import "./TrueFocus.css";

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs: React.MutableRefObject<(HTMLSpanElement | null)[]> = useRef(
    []
  );
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex ?? 0);
    }
  };

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              if (el) {
                wordRefs.current[index] = el;
              }
            }}
            className={\`focus-word \${manualMode ? "manual" : ""} \${
              isActive && !manualMode ? "active" : ""
            }\`}
            style={
              {
                filter: manualMode
                  ? isActive
                    ? \`blur(0px)\`
                    : \`blur(\${blurAmount}px)\`
                  : isActive
                    ? \`blur(0px)\`
                    : \`blur(\${blurAmount}px)\`,
                transition: \`filter \${animationDuration}s ease\`,
                "--border-color": borderColor,
                "--glow-color": glowColor,
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={
          {
            "--border-color": borderColor,
            "--glow-color": glowColor,
          } as React.CSSProperties
        }
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
`,K=`import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface TrueFocusProps {
    sentence?: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
}

interface FocusRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
    sentence = "True Focus",
    manualMode = false,
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
}) => {
    const words = sentence.split(" ");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, (animationDuration + pauseBetweenAnimations) * 1000);

            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

    useEffect(() => {
        if (currentIndex === null || currentIndex === -1) return;
        if (!wordRefs.current[currentIndex] || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex, words.length]);

    const handleMouseEnter = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (manualMode) {
            setCurrentIndex(lastActiveIndex!);
        }
    };

    return (
        <div
            className="relative flex gap-4 justify-center items-center flex-wrap"
            ref={containerRef}
        >
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                return (
                    <span
                        key={index}
                        ref={(el) => { wordRefs.current[index] = el; }}
                        className="relative text-[3rem] font-black cursor-pointer"
                        style={{
                            filter: manualMode
                                ? isActive
                                    ? \`blur(0px)\`
                                    : \`blur(\${blurAmount}px)\`
                                : isActive
                                    ? \`blur(0px)\`
                                    : \`blur(\${blurAmount}px)\`,
                            transition: \`filter \${animationDuration}s ease\`,
                        } as React.CSSProperties}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {word}
                    </span>
                );
            })}

            <motion.div
                className="absolute top-0 left-0 pointer-events-none box-border border-0"
                animate={{
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex >= 0 ? 1 : 0,
                }}
                transition={{
                    duration: animationDuration,
                }}
                style={{
                    "--border-color": borderColor,
                    "--glow-color": glowColor,
                } as React.CSSProperties}
            >
                <span
                    className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
                    style={{
                        borderColor: "var(--border-color)",
                        filter: "drop-shadow(0 0 4px var(--border-color))",
                    }}
                ></span>
                <span
                    className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
                    style={{
                        borderColor: "var(--border-color)",
                        filter: "drop-shadow(0 0 4px var(--border-color))",
                    }}
                ></span>
                <span
                    className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
                    style={{
                        borderColor: "var(--border-color)",
                        filter: "drop-shadow(0 0 4px var(--border-color))",
                    }}
                ></span>
                <span
                    className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
                    style={{
                        borderColor: "var(--border-color)",
                        filter: "drop-shadow(0 0 4px var(--border-color))",
                    }}
                ></span>
            </motion.div>
        </div>
    );
};

export default TrueFocus;`,R={...F("TextAnimations/TrueFocus"),installation:"npm install motion",usage:`import TrueFocus from './TrueFocus';

<TrueFocus 
sentence="True Focus"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>`,code:U,css:q,tailwind:G,tsCode:J,tsTailwind:K},_=()=>{const[i,o]=e.useState(!1),[l,f]=e.useState(5),[d,c]=e.useState(.5),[p,u]=e.useState(1),[r,m]=e.useState("#5227FF"),b={sentence:"True Focus",manualMode:i,blurAmount:l,borderColor:r,animationDuration:d,pauseBetweenAnimations:p},h=[{name:"sentence",type:"string",default:"'True Focus'",description:"The text to display with the focus animation."},{name:"manualMode",type:"boolean",default:"false",description:"Disables automatic animation when set to true."},{name:"blurAmount",type:"number",default:"5",description:"The amount of blur applied to non-active words."},{name:"borderColor",type:"string",default:"'green'",description:"The color of the focus borders."},{name:"glowColor",type:"string",default:"'rgba(0, 255, 0, 0.6)'",description:"The color of the glowing effect on the borders."},{name:"animationDuration",type:"number",default:"0.5",description:"The duration of the animation for each word."},{name:"pauseBetweenAnimations",type:"number",default:"1",description:"Time to pause between focusing on each word (in auto mode)."}];return n.jsxs(E,{children:[n.jsxs(B,{children:[n.jsx(T,{position:"relative",className:"demo-container",minH:200,children:n.jsx(O,{...b})}),n.jsxs(z,{children:[n.jsxs(S,{align:"center",gap:2,mt:4,children:[n.jsx(N,{fontSize:"sm",children:"Border Color"}),n.jsx("input",{type:"color",value:r,onChange:a=>m(a.target.value),style:{width:"40px",border:"none",padding:"0",background:"none",cursor:"pointer"}})]}),n.jsx(H,{title:"Hover Mode",isChecked:i,onChange:a=>o(a)}),n.jsx(g,{title:"Blur Amount",min:0,max:15,step:.5,value:l,valueUnit:"px",onChange:f}),n.jsx(g,{title:"Animation Duration",min:.1,max:3,step:.1,value:d,valueUnit:"s",isDisabled:!i,onChange:c}),n.jsx(g,{title:"Pause Between Animations",min:0,max:5,step:.5,value:p,valueUnit:"s",isDisabled:i,onChange:u})]}),n.jsx(j,{data:h}),n.jsx(k,{dependencyList:["motion"]})]}),n.jsx(D,{children:n.jsx(L,{codeObject:R})}),n.jsx($,{children:n.jsx(P,{...R})})]})};export{_ as default};
