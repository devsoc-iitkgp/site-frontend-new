import{r as t,a as H,j as n,g as J,B as q}from"./index-j7DW7U0N.js";import{T as G,P as K,a as Q,C as X,b as Y,c as Z,d as ee}from"./PropTable-Baf4PZpP.js";import{C as ne}from"./Customize-Dq9g9yhm.js";import{P}from"./PreviewSwitch-_xo3rdWG.js";import{P as te}from"./PreviewSelect-BhKIbQB2.js";import{P as m}from"./PreviewSlider-D0sSZbsU.js";import{D as re}from"./Dependencies-BSh7s3YA.js";import{u as se}from"./useForceRerender-LUtjsLCb.js";import"./field-BmHOm1Rn.js";const ie=({text:f,as:s="div",typingSpeed:y=50,initialDelay:T=0,pauseDuration:g=2e3,deletingSpeed:h=30,loop:v=!0,className:I="",showCursor:C=!0,hideCursorWhileTyping:D=!1,cursorCharacter:k="|",cursorClassName:R="",cursorBlinkDuration:w=.5,textColors:i=[],variableSpeed:p,onSentenceComplete:d,startOnVisible:b=!1,reverseMode:S=!1,...M})=>{const[o,A]=t.useState(""),[a,E]=t.useState(0),[e,O]=t.useState(!1),[u,$]=t.useState(0),[_,L]=t.useState(!b),V=t.useRef(null),j=t.useRef(null),l=Array.isArray(f)?f:[f],U=()=>{if(!p)return y;const{min:r,max:x}=p;return Math.random()*(x-r)+r},z=()=>i.length===0?"#ffffff":i[u%i.length];t.useEffect(()=>{if(!b||!j.current)return;const r=new IntersectionObserver(x=>{x.forEach(N=>{N.isIntersecting&&L(!0)})},{threshold:.1});return r.observe(j.current),()=>r.disconnect()},[b]),t.useEffect(()=>{C&&V.current&&(H.set(V.current,{opacity:1}),H.to(V.current,{opacity:0,duration:w,repeat:-1,yoyo:!0,ease:"power2.inOut"}))},[C,w]),t.useEffect(()=>{if(!_)return;let r;const x=l[u],N=S?x.split("").reverse().join(""):x,B=()=>{if(e)if(o===""){if(O(!1),u===l.length-1&&!v)return;d&&d(l[u],u),$(c=>(c+1)%l.length),E(0),r=setTimeout(()=>{},g)}else r=setTimeout(()=>{A(c=>c.slice(0,-1))},h);else a<N.length?r=setTimeout(()=>{A(c=>c+N[a]),E(c=>c+1)},p?U():y):l.length>1&&(r=setTimeout(()=>{O(!0)},g))};return a===0&&!e&&o===""?r=setTimeout(B,T):B(),()=>clearTimeout(r)},[a,o,e,y,h,g,l,u,v,T,_,S,p,d]);const F=D&&(a<l[u].length||e);return t.createElement(s,{ref:j,className:`text-type ${I}`,...M},n.jsx("span",{className:"text-type__content",style:{color:z()},children:o}),C&&n.jsx("span",{ref:V,className:`text-type__cursor ${R} ${F?"text-type__cursor--hidden":""}`,children:k}))},oe=`"use client";

import { useEffect, useRef, useState, createElement } from "react";
import { gsap } from "gsap";
import "./TextType.css";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => { }, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: \`text-type \${className}\`,
      ...props,
    },
    <span
      className="text-type__content"
      style={{ color: getCurrentTextColor() }}
    >
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={\`text-type__cursor \${cursorClassName} \${shouldHideCursor ? "text-type__cursor--hidden" : ""}\`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
`,ae=`.text-type {
  display: inline-block;
  white-space: pre-wrap;
}

.text-type__cursor {
  margin-left: 0.25rem;
  display: inline-block;
  opacity: 1;
}

.text-type__cursor--hidden {
  display: none;
}`,ue=`"use client";

import { useEffect, useRef, useState, createElement } from "react";
import { gsap } from "gsap";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => { }, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: \`inline-block whitespace-pre-wrap tracking-tight \${className}\`,
      ...props,
    },
    <span className="inline" style={{ color: getCurrentTextColor() }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={\`ml-1 inline-block opacity-100 \${shouldHideCursor ? "hidden" : ""} \${cursorClassName}\`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
`,le=`"use client";

import { ElementType, useEffect, useRef, useState, createElement } from "react";
import { gsap } from "gsap";
import "./TextType.css";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: \`text-type \${className}\`,
      ...props,
    },
    <span
      className="text-type__content"
      style={{ color: getCurrentTextColor() }}
    >
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={\`text-type__cursor \${cursorClassName} \${shouldHideCursor ? "text-type__cursor--hidden" : ""}\`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
`,ce=`"use client";

import { ElementType, useEffect, useRef, useState, createElement } from "react";
import { gsap } from "gsap";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: \`inline-block whitespace-pre-wrap tracking-tight \${className}\`,
      ...props,
    },
    <span className="inline" style={{ color: getCurrentTextColor() }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={\`ml-1 inline-block opacity-100 \${shouldHideCursor ? "hidden" : ""} \${cursorClassName}\`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
`,W={...J("TextAnimations/TextType"),installation:"npm install gsap",usage:`import TextType from './TextType';

<TextType 
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>`,code:oe,css:ae,tailwind:ue,tsCode:le,tsTailwind:ce},Ce=()=>{const[f,s]=se(),[y]=t.useState(["Welcome to React Bits! It's great to have you here!","Build some amazing experiences!"]),[T,g]=t.useState(75),[h,v]=t.useState(1500),[I,C]=t.useState(50),[D,k]=t.useState(!0),[R,w]=t.useState("_"),[i,p]=t.useState(!1),[d,b]=t.useState(60),[S,M]=t.useState(120),[o,A]=t.useState(.5),a=[{value:"_",label:"Underscore (_)"},{value:"|",label:"Pipe (|)"},{value:"▎",label:"Block (▎)"},{value:"●",label:"Dot (●)"},{value:"█",label:"Full Block (█)"}],E=[{name:"text",type:"string | string[]",default:"-",description:"Text or array of texts to type out"},{name:"as",type:"ElementType",default:"div",description:"HTML tag to render the component as"},{name:"typingSpeed",type:"number",default:"50",description:"Speed of typing in milliseconds"},{name:"initialDelay",type:"number",default:"0",description:"Initial delay before typing starts"},{name:"pauseDuration",type:"number",default:"2000",description:"Time to wait between typing and deleting"},{name:"deletingSpeed",type:"number",default:"30",description:"Speed of deleting characters"},{name:"loop",type:"boolean",default:"true",description:"Whether to loop through texts array"},{name:"className",type:"string",default:"''",description:"Optional class name for styling"},{name:"showCursor",type:"boolean",default:"true",description:"Whether to show the cursor"},{name:"hideCursorWhileTyping",type:"boolean",default:"false",description:"Hide cursor while typing"},{name:"cursorCharacter",type:"string | React.ReactNode",default:"|",description:"Character or React node to use as cursor"},{name:"cursorBlinkDuration",type:"number",default:"0.5",description:"Animation duration for cursor blinking"},{name:"cursorClassName",type:"string",default:"''",description:"Optional class name for cursor styling"},{name:"textColors",type:"string[]",default:"[]",description:"Array of colors for each sentence"},{name:"variableSpeed",type:"{min: number, max: number}",default:"undefined",description:"Random typing speed within range for human-like feel"},{name:"onSentenceComplete",type:"(sentence: string, index: number) => void",default:"undefined",description:"Callback fired after each sentence is finished"},{name:"startOnVisible",type:"boolean",default:"false",description:"Start typing when component is visible in viewport"},{name:"reverseMode",type:"boolean",default:"false",description:"Type backwards (right to left)"}];return n.jsxs(G,{children:[n.jsxs(K,{children:[n.jsx(q,{position:"relative",className:"demo-container",h:350,p:16,overflow:"hidden",alignItems:"flex-start",justifyContent:"flex-start",children:n.jsx(ie,{text:y,typingSpeed:T,pauseDuration:h,deletingSpeed:I,showCursor:D,cursorCharacter:R,cursorBlinkDuration:o,variableSpeed:i?{min:d,max:S}:void 0,className:"custom-text-type"},f)}),n.jsxs(ne,{children:[n.jsx(te,{title:"Cursor Character",options:a,value:R,width:150,onChange:e=>{w(e),s()}}),n.jsx(m,{title:"Typing Speed",min:10,max:200,step:5,value:T,valueUnit:"ms",width:200,onChange:e=>{g(e),s()}}),n.jsx(m,{title:"Pause Duration",min:500,max:5e3,step:100,value:h,valueUnit:"ms",width:200,onChange:e=>{v(e),s()}}),n.jsx(m,{title:"Deleting Speed",min:10,max:100,step:5,value:I,valueUnit:"ms",width:200,onChange:e=>{C(e),s()}}),n.jsx(m,{title:"Cursor Blink Duration",min:.1,max:2,step:.1,value:o,valueUnit:"s",width:200,onChange:e=>{A(e),s()}}),n.jsx(P,{title:"Show Cursor",isChecked:D,onChange:e=>{k(e),s()}}),n.jsx(P,{title:"Variable Speed",isChecked:i,onChange:e=>{p(e),s()}}),n.jsx(m,{title:"Variable Speed Min",isDisabled:!i,min:10,max:150,step:5,value:d,valueUnit:"ms",width:200,onChange:e=>{b(e),s()}}),n.jsx(m,{title:"Variable Speed Max",isDisabled:!i,min:50,max:300,step:5,value:S,valueUnit:"ms",width:200,onChange:e=>{M(e),s()}})]}),n.jsx(Q,{data:E}),n.jsx(re,{dependencyList:["gsap"]})]}),n.jsx(X,{children:n.jsx(Y,{codeObject:W})}),n.jsx(Z,{children:n.jsx(ee,{...W})})]})};export{Ce as default};
