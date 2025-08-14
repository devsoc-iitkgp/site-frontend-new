import{r as l,j as e,p as q,g as $,B as P,T as M,F as z,b as O}from"./index-j7DW7U0N.js";import{T as G,P as U,a as J,C as K,b as Q,c as W,d as Z}from"./PropTable-Baf4PZpP.js";import{D as _}from"./Dependencies-BSh7s3YA.js";import{P as ee}from"./PreviewSlider-D0sSZbsU.js";function ne(r){l.useEffect(()=>{let i;const c=()=>{r(),i=requestAnimationFrame(c)};return i=requestAnimationFrame(c),()=>cancelAnimationFrame(i)},[r])}function te(r){const i=l.useRef({x:0,y:0});return l.useEffect(()=>{const c=(t,n)=>{if(r!=null&&r.current){const x=r.current.getBoundingClientRect();i.current={x:t-x.left,y:n-x.top}}else i.current={x:t,y:n}},u=t=>c(t.clientX,t.clientY),d=t=>{const n=t.touches[0];c(n.clientX,n.clientY)};return window.addEventListener("mousemove",u),window.addEventListener("touchmove",d),()=>{window.removeEventListener("mousemove",u),window.removeEventListener("touchmove",d)}},[r]),i}const C=l.forwardRef((r,i)=>{const{label:c,fromFontVariationSettings:u,toFontVariationSettings:d,containerRef:t,radius:n=50,falloff:x="linear",className:E="",onClick:I,style:L,...k}=r,h=l.useRef([]),S=l.useRef([]),g=te(t),R=l.useRef({x:null,y:null}),T=l.useMemo(()=>{const s=o=>new Map(o.split(",").map(f=>f.trim()).map(f=>{const[p,y]=f.split(" ");return[p.replace(/['"]/g,""),parseFloat(y)]})),a=s(u),m=s(d);return Array.from(a.entries()).map(([o,f])=>({axis:o,fromValue:f,toValue:m.get(o)??f}))},[u,d]),j=(s,a,m,o)=>Math.sqrt((m-s)**2+(o-a)**2),A=s=>{const a=Math.min(Math.max(1-s/n,0),1);switch(x){case"exponential":return a**2;case"gaussian":return Math.exp(-((s/(n/2))**2)/2);case"linear":default:return a}};ne(()=>{if(!(t!=null&&t.current))return;const s=t.current.getBoundingClientRect(),{x:a,y:m}=g.current;R.current.x===a&&R.current.y===m||(R.current={x:a,y:m},h.current.forEach((o,f)=>{if(!o)return;const p=o.getBoundingClientRect(),y=p.left+p.width/2-s.left,B=p.top+p.height/2-s.top,w=j(g.current.x,g.current.y,y,B);if(w>=n){o.style.fontVariationSettings=u;return}const H=A(w),V=T.map(({axis:X,fromValue:v,toValue:Y})=>{const D=v+(Y-v)*H;return`'${X}' ${D}`}).join(", ");S.current[f]=V,o.style.fontVariationSettings=V}))});const b=c.split(" ");let N=0;return e.jsxs("span",{ref:i,className:`${E} variable-proximity`,onClick:I,style:{display:"inline",...L},...k,children:[b.map((s,a)=>e.jsxs("span",{style:{display:"inline-block",whiteSpace:"nowrap"},children:[s.split("").map(m=>{const o=N++;return e.jsx(q.span,{ref:f=>{h.current[o]=f},style:{display:"inline-block",fontVariationSettings:S.current[o]},"aria-hidden":"true",children:m},o)}),a<b.length-1&&e.jsx("span",{style:{display:"inline-block"},children:" "})]},a)),e.jsx("span",{className:"sr-only",children:c})]})});C.displayName="VariableProximity";const oe=`import { forwardRef, useMemo, useRef, useEffect } from "react";
import { motion } from "motion/react";
import "./VariableProximity.css";

function useAnimationFrame(callback) {
  useEffect(() => {
    let frameId;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev) => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = "linear",
    className = "",
    onClick,
    style,
    ...restProps
  } = props;

  const letterRefs = useRef([]);
  const interpolatedSettingsRef = useRef([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef({ x: null, y: null });

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr) =>
      new Map(
        settingsStr.split(",")
          .map(s => s.trim())
          .map(s => {
            const [name, value] = s.split(" ");
            return [name.replace(/['"]/g, ""), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1, y1, x2, y2) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = (distance) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case "exponential": return norm ** 2;
      case "gaussian": return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case "linear":
      default: return norm;
    }
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { x, y } = mousePositionRef.current;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return;
    }
    lastPositionRef.current = { x, y };

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY
      );

      if (distance >= radius) {
        letterRef.style.fontVariationSettings = fromFontVariationSettings;
        return;
      }

      const falloffValue = calculateFalloff(distance);
      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
          return \`'\${axis}' \${interpolatedValue}\`;
        })
        .join(", ");

      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
    });
  });

  const words = label.split(" ");
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      className={\`\${className} variable-proximity\`}
      onClick={onClick}
      style={{ display: "inline", ...style }}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((letter) => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el) => { letterRefs.current[currentLetterIndex] = el; }}
                style={{
                  display: "inline-block",
                  fontVariationSettings:
                    interpolatedSettingsRef.current[currentLetterIndex],
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;
`,re=`@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap");

.variable-proximity {
  font-family: "Roboto Flex", sans-serif;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`,ie=`import { forwardRef, useMemo, useRef, useEffect } from "react";
import { motion } from "motion/react";

function useAnimationFrame(callback) {
  useEffect(() => {
    let frameId;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev) => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = "linear",
    className = "",
    onClick,
    style,
    ...restProps
  } = props;

  const letterRefs = useRef([]);
  const interpolatedSettingsRef = useRef([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef({ x: null, y: null });

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr) =>
      new Map(
        settingsStr.split(",")
          .map(s => s.trim())
          .map(s => {
            const [name, value] = s.split(" ");
            return [name.replace(/['"]/g, ""), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1, y1, x2, y2) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = (distance) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case "exponential": return norm ** 2;
      case "gaussian": return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case "linear":
      default: return norm;
    }
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) return;
    const { x, y } = mousePositionRef.current;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return;
    }
    lastPositionRef.current = { x, y };

    const containerRect = containerRef.current.getBoundingClientRect();

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY
      );

      if (distance >= radius) {
        letterRef.style.fontVariationSettings = fromFontVariationSettings;
        return;
      }

      const falloffValue = calculateFalloff(distance);
      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
          return \`'\${axis}' \${interpolatedValue}\`;
        })
        .join(", ");

      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
    });
  });

  const words = label.split(" ");
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      onClick={onClick}
      style={{
        display: "inline",
        fontFamily: '"Roboto Flex", sans-serif',
        ...style,
      }}
      className={className}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
        >
          {word.split("").map((letter) => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el) => { letterRefs.current[currentLetterIndex] = el; }}
                style={{
                  display: "inline-block",
                  fontVariationSettings:
                    interpolatedSettingsRef.current[currentLetterIndex],
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;
`,se=`import { forwardRef, useMemo, useRef, useEffect, MutableRefObject, RefObject, HTMLAttributes} from "react";
import { motion } from "motion/react";
import "./VariableProximity.css";

type Callback = () => void;

function useAnimationFrame(callback: Callback) {
    useEffect(() => {
        let frameId: number;
        const loop = () => {
            callback();
            frameId = requestAnimationFrame(loop);
        };
        frameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frameId);
    }, [callback]);
}

function useMousePositionRef(containerRef: RefObject<HTMLElement>) {
    const positionRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (x: number, y: number) => {
            if (containerRef?.current) {
                const rect = containerRef.current.getBoundingClientRect();
                positionRef.current = { x: x - rect.left, y: y - rect.top };
            } else {
                positionRef.current = { x, y };
            }
        };

        const handleMouseMove = (ev: MouseEvent) => updatePosition(ev.clientX, ev.clientY);
        const handleTouchMove = (ev: TouchEvent) => {
            const touch = ev.touches[0];
            updatePosition(touch.clientX, touch.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [containerRef]);

    return positionRef;
}

interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement>{
    label: string;
    fromFontVariationSettings: string;
    toFontVariationSettings: string;
    containerRef: RefObject<HTMLElement>;
    radius?: number;
    falloff?: "linear" | "exponential" | "gaussian";
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
    const {
        label,
        fromFontVariationSettings,
        toFontVariationSettings,
        containerRef,
        radius = 50,
        falloff = "linear",
        className = "",
        onClick,
        style,
        ...restProps
    } = props;

    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const interpolatedSettingsRef = useRef<string[]>([]);
    const mousePositionRef = useMousePositionRef(containerRef);
    const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

    const parsedSettings = useMemo(() => {
        const parseSettings = (settingsStr: string) =>
            new Map(
                settingsStr.split(",")
                    .map(s => s.trim())
                    .map(s => {
                        const [name, value] = s.split(" ");
                        return [name.replace(/['"]/g, ""), parseFloat(value)];
                    })
            );

        const fromSettings = parseSettings(fromFontVariationSettings);
        const toSettings = parseSettings(toFontVariationSettings);

        return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
            axis,
            fromValue,
            toValue: toSettings.get(axis) ?? fromValue,
        }));
    }, [fromFontVariationSettings, toFontVariationSettings]);

    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
        Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    const calculateFalloff = (distance: number) => {
        const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
        switch (falloff) {
            case "exponential": return norm ** 2;
            case "gaussian": return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
            case "linear":
            default: return norm;
        }
    };

    useAnimationFrame(() => {
        if (!containerRef?.current) return;
        const { x, y } = mousePositionRef.current;
        if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
          return;
        }
        lastPositionRef.current = { x, y };
        const containerRect = containerRef.current.getBoundingClientRect();

        letterRefs.current.forEach((letterRef, index) => {
            if (!letterRef) return;

            const rect = letterRef.getBoundingClientRect();
            const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
            const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

            const distance = calculateDistance(
                mousePositionRef.current.x,
                mousePositionRef.current.y,
                letterCenterX,
                letterCenterY
            );

            if (distance >= radius) {
                letterRef.style.fontVariationSettings = fromFontVariationSettings;
                return;
            }

            const falloffValue = calculateFalloff(distance);
            const newSettings = parsedSettings
                .map(({ axis, fromValue, toValue }) => {
                    const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
                    return \`'\${axis}' \${interpolatedValue}\`;
                })
                .join(", ");

            interpolatedSettingsRef.current[index] = newSettings;
            letterRef.style.fontVariationSettings = newSettings;
        });
    });

    const words = label.split(" ");
    let letterIndex = 0;

    return (
        <span
            ref={ref}
            className={\`\${className} variable-proximity\`}
            onClick={onClick}
            style={{ display: "inline", ...style }}
            {...restProps}
        >
            {words.map((word, wordIndex) => (
                <span
                    key={wordIndex}
                    style={{ display: "inline-block", whiteSpace: "nowrap" }}
                >
                    {word.split("").map((letter) => {
                        const currentLetterIndex = letterIndex++;
                        return (
                            <motion.span
                                key={currentLetterIndex}
                                ref={(el) => { letterRefs.current[currentLetterIndex] = el; }}
                                style={{
                                    display: "inline-block",
                                    fontVariationSettings:
                                        interpolatedSettingsRef.current[currentLetterIndex],
                                }}
                                aria-hidden="true"
                            >
                                {letter}
                            </motion.span>
                        );
                    })}
                    {wordIndex < words.length - 1 && (
                        <span style={{ display: "inline-block" }}>&nbsp;</span>
                    )}
                </span>
            ))}
            <span className="sr-only">{label}</span>
        </span>
    );
});

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;
`,ae=`import { forwardRef, useMemo, useRef, useEffect, MutableRefObject, CSSProperties, HTMLAttributes } from "react";
import { motion } from "motion/react";

function useAnimationFrame(callback: () => void) {
    useEffect(() => {
        let frameId: number;
        const loop = () => {
            callback();
            frameId = requestAnimationFrame(loop);
        };
        frameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frameId);
    }, [callback]);
}

function useMousePositionRef(containerRef: MutableRefObject<HTMLElement | null>) {
    const positionRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (x: number, y: number) => {
            if (containerRef?.current) {
                const rect = containerRef.current.getBoundingClientRect();
                positionRef.current = { x: x - rect.left, y: y - rect.top };
            } else {
                positionRef.current = { x, y };
            }
        };

        const handleMouseMove = (ev: MouseEvent) => updatePosition(ev.clientX, ev.clientY);
        const handleTouchMove = (ev: TouchEvent) => {
            const touch = ev.touches[0];
            updatePosition(touch.clientX, touch.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [containerRef]);

    return positionRef;
}

interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement>{
    label: string;
    fromFontVariationSettings: string;
    toFontVariationSettings: string;
    containerRef: MutableRefObject<HTMLElement | null>;
    radius?: number;
    falloff?: "linear" | "exponential" | "gaussian";
    className?: string;
    onClick?: () => void;
    style?: CSSProperties;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
    const {
        label,
        fromFontVariationSettings,
        toFontVariationSettings,
        containerRef,
        radius = 50,
        falloff = "linear",
        className = "",
        onClick,
        style,
        ...restProps
    } = props;

    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const interpolatedSettingsRef = useRef<string[]>([]);
    const mousePositionRef = useMousePositionRef(containerRef);
    const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

    const parsedSettings = useMemo(() => {
        const parseSettings = (settingsStr: string) =>
            new Map(
                settingsStr.split(",")
                    .map(s => s.trim())
                    .map(s => {
                        const [name, value] = s.split(" ");
                        return [name.replace(/['"]/g, ""), parseFloat(value)];
                    })
            );

        const fromSettings = parseSettings(fromFontVariationSettings);
        const toSettings = parseSettings(toFontVariationSettings);

        return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
            axis,
            fromValue,
            toValue: toSettings.get(axis) ?? fromValue,
        }));
    }, [fromFontVariationSettings, toFontVariationSettings]);

    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
        Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    const calculateFalloff = (distance: number) => {
        const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
        switch (falloff) {
            case "exponential": return norm ** 2;
            case "gaussian": return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
            case "linear":
            default: return norm;
        }
    };

    useAnimationFrame(() => {
        if (!containerRef?.current) return;
        const { x, y } = mousePositionRef.current;
        if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
          return;
        }
        lastPositionRef.current = { x, y };
        const containerRect = containerRef.current.getBoundingClientRect();

        letterRefs.current.forEach((letterRef, index) => {
            if (!letterRef) return;

            const rect = letterRef.getBoundingClientRect();
            const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
            const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

            const distance = calculateDistance(
                mousePositionRef.current.x,
                mousePositionRef.current.y,
                letterCenterX,
                letterCenterY
            );

            if (distance >= radius) {
                letterRef.style.fontVariationSettings = fromFontVariationSettings;
                return;
            }

            const falloffValue = calculateFalloff(distance);
            const newSettings = parsedSettings
                .map(({ axis, fromValue, toValue }) => {
                    const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
                    return \`'\${axis}' \${interpolatedValue}\`;
                })
                .join(", ");

            interpolatedSettingsRef.current[index] = newSettings;
            letterRef.style.fontVariationSettings = newSettings;
        });
    });

    const words = label.split(" ");
    let letterIndex = 0;

    return (
        <span
            ref={ref}
            onClick={onClick}
            style={{
                display: "inline",
                fontFamily: '"Roboto Flex", sans-serif',
                ...style,
            }}
            className={className}
            {...restProps}
        >
            {words.map((word, wordIndex) => (
                <span
                    key={wordIndex}
                    className="inline-block whitespace-nowrap"
                >
                    {word.split("").map((letter) => {
                        const currentLetterIndex = letterIndex++;
                        return (
                            <motion.span
                                key={currentLetterIndex}
                                ref={(el) => { letterRefs.current[currentLetterIndex] = el; }}
                                style={{
                                    display: "inline-block",
                                    fontVariationSettings:
                                        interpolatedSettingsRef.current[currentLetterIndex],
                                }}
                                aria-hidden="true"
                            >
                                {letter}
                            </motion.span>
                        );
                    })}
                    {wordIndex < words.length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </span>
            ))}
            <span className="sr-only">{label}</span>
        </span>
    );
});

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;
`,F={...$("TextAnimations/VariableProximity"),installation:"npm install motion",usage:`import { useRef } from 'react';
import VariableProximity from './VariableProximity';

const containerRef = useRef(null);

<div
ref={containerRef}
style={{position: 'relative'}}
>
  <VariableProximity
    label={'Hover me! And then star React Bits on GitHub, or else...'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff='linear'
  />
</div>`,code:oe,css:re,tailwind:ie,tsCode:se,tsTailwind:ae},me=()=>{const r=l.useRef(null),[i,c]=l.useState(100),[u,d]=l.useState("linear"),t=[{name:"label",type:"string",default:'""',description:"The text content to display."},{name:"fromFontVariationSettings",type:"string",default:"'wght' 400, 'opsz' 9",description:"The starting variation settings."},{name:"toFontVariationSettings",type:"string",default:"'wght' 800, 'opsz' 40",description:"The variation settings to reach at cursor proximity."},{name:"containerRef",type:"RefObject<HTMLDivElement>",default:"undefined",description:"Reference to container for relative calculations."},{name:"radius",type:"number",default:"50",description:"Proximity radius to influence the effect."},{name:"falloff",type:"'linear' | 'exponential' | 'gaussian'",default:'"linear"',description:"Type of falloff for the effect."}];return e.jsxs(G,{children:[e.jsxs(U,{children:[e.jsx(P,{ref:r,position:"relative",className:"demo-container",minH:400,overflow:"hidden",p:4,children:e.jsx(C,{label:"Hover me! And then star React Bits on GitHub, or else...",className:"variable-proximity-demo",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:r,radius:i,falloff:u})}),e.jsxs(P,{mt:6,className:"preview-options",children:[e.jsx(M,{fontSize:"xl",mb:2,children:"Customize"}),e.jsx(ee,{title:"Radius",min:50,max:300,step:10,value:i,valueUnit:"px",onChange:n=>c(n),width:200}),e.jsxs(z,{gap:4,align:"center",mt:4,children:[e.jsx(M,{fontSize:"sm",children:"Falloff"}),["linear","exponential","gaussian"].map(n=>e.jsx(O,{size:"sm",color:"#ffffff",borderRadius:"10px",border:n===u?"1px solid #170D27":"1px solid #271E37",bg:n===u?"#5227FF":"#170D27",onClick:()=>d(n),children:n},n))]})]}),e.jsx(J,{data:t}),e.jsx(_,{dependencyList:["motion"]})]}),e.jsx(K,{children:e.jsx(Q,{codeObject:F})}),e.jsx(W,{children:e.jsx(Z,{...F})})]})};export{me as default};
