import{r as n,j as e,g as _,B as N,F as T,T as A}from"./index-j7DW7U0N.js";import{T as ee,P as ne,a as te,C as re,b as oe,c as se,d as ie}from"./PropTable-Baf4PZpP.js";import{P as x}from"./PreviewSwitch-_xo3rdWG.js";import{u as ae}from"./useForceRerender-LUtjsLCb.js";import{R as ce}from"./RefreshButton-BMj2HM2t.js";import{C as le}from"./Customize-Dq9g9yhm.js";import{P as ue}from"./PreviewInput-C9vEteKu.js";import"./field-BmHOm1Rn.js";const fe=({text:p="Compressa",fontFamily:v="Compressa VF",fontUrl:F="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2",width:S=!0,weight:R=!0,italic:C=!0,alpha:g=!1,flex:$=!0,stroke:w=!1,scale:b=!1,textColor:d="#FFFFFF",strokeColor:L="#FF0000",className:k="",minFontSize:z=24})=>{const f=n.useRef(null),h=n.useRef(null),y=n.useRef([]),a=n.useRef({x:0,y:0}),l=n.useRef({x:0,y:0}),[c,t]=n.useState(z),[I,H]=n.useState(1),[q,P]=n.useState(1),V=p.split(""),X=(o,s)=>{const r=s.x-o.x,i=s.y-o.y;return Math.sqrt(r*r+i*i)};n.useEffect(()=>{const o=r=>{l.current.x=r.clientX,l.current.y=r.clientY},s=r=>{const i=r.touches[0];l.current.x=i.clientX,l.current.y=i.clientY};if(window.addEventListener("mousemove",o),window.addEventListener("touchmove",s,{passive:!1}),f.current){const{left:r,top:i,width:u,height:m}=f.current.getBoundingClientRect();a.current.x=r+u/2,a.current.y=i+m/2,l.current.x=a.current.x,l.current.y=a.current.y}return()=>{window.removeEventListener("mousemove",o),window.removeEventListener("touchmove",s)}},[]);const j=()=>{if(!f.current||!h.current)return;const{width:o,height:s}=f.current.getBoundingClientRect();let r=o/(V.length/2);r=Math.max(r,z),t(r),H(1),P(1),requestAnimationFrame(()=>{if(!h.current)return;const i=h.current.getBoundingClientRect();if(b&&i.height>0){const u=s/i.height;H(u),P(u)}})};n.useEffect(()=>(j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)),[b,p]),n.useEffect(()=>{let o;const s=()=>{if(a.current.x+=(l.current.x-a.current.x)/15,a.current.y+=(l.current.y-a.current.y)/15,h.current){const i=h.current.getBoundingClientRect().width/2;y.current.forEach(u=>{if(!u)return;const m=u.getBoundingClientRect(),U={x:m.x+m.width/2,y:m.y+m.height/2},M=X(a.current,U),E=(Q,Y,B)=>{const Z=B-Math.abs(B*Q/i);return Math.max(Y,Z+Y)},O=S?Math.floor(E(M,5,200)):100,G=R?Math.floor(E(M,100,900)):400,J=C?E(M,0,1).toFixed(2):0,K=g?E(M,0,1).toFixed(2):1;u.style.opacity=K,u.style.fontVariationSettings=`'wght' ${G}, 'wdth' ${O}, 'ital' ${J}`})}o=requestAnimationFrame(s)};return s(),()=>cancelAnimationFrame(o)},[S,R,C,g,V.length]);const D=[k,$?"flex":"",w?"stroke":""].filter(Boolean).join(" ");return e.jsxs("div",{ref:f,style:{position:"relative",width:"100%",height:"100%",background:"transparent"},children:[e.jsx("style",{children:`
        @font-face {
          font-family: '${v}';
          src: url('${F}');
          font-style: normal;
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .stroke span {
          position: relative;
          color: ${d};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${L};
        }

        .text-pressure-title {
          color: ${d};
        }
      `}),e.jsx("h1",{ref:h,className:`text-pressure-title ${D}`,style:{fontFamily:v,textTransform:"uppercase",fontSize:c,lineHeight:q,transform:`scale(1, ${I})`,transformOrigin:"center top",margin:0,textAlign:"center",userSelect:"none",whiteSpace:"nowrap",fontWeight:100,width:"100%"},children:V.map((o,s)=>e.jsx("span",{ref:r=>y.current[s]=r,"data-char":o,style:{display:"inline-block",color:w?void 0:d},children:o},s))})]})},he=`import { useEffect, useRef, useState } from 'react';

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  // This font is just an example, you should not use it in commercial projects.
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  className = '',

  minFontSize = 24,

}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split('');

  const dist = (a, b) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const setSize = () => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  };

  useEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
    // eslint-disable-next-line
  }, [scale, text]);

  useEffect(() => {
    let rafId;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach((span) => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };

          const d = dist(mouseRef.current, charCenter);

          const getAttr = (distance, minVal, maxVal) => {
            const val = maxVal - Math.abs((maxVal * distance) / maxDist);
            return Math.max(minVal, val + minVal);
          };

          const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : 0;
          const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : 1;

          span.style.opacity = alphaVal;
          span.style.fontVariationSettings = \`'wght' \${wght}, 'wdth' \${wdth}, 'ital' \${italVal}\`;
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha, chars.length]);

  const dynamicClassName = [className, flex ? 'flex' : '', stroke ? 'stroke' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
    >
      <style>{\`
        @font-face {
          font-family: '\${fontFamily}';
          src: url('\${fontUrl}');
          font-style: normal;
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .stroke span {
          position: relative;
          color: \${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: \${strokeColor};
        }

        .text-pressure-title {
          color: \${textColor};
        }
      \`}</style>

      <h1
        ref={titleRef}
        className={\`text-pressure-title \${dynamicClassName}\`}
        style={{
          fontFamily,
          textTransform: 'uppercase',
          fontSize: fontSize,
          lineHeight,
          transform: \`scale(1, \${scaleY})\`,
          transformOrigin: 'center top',
          margin: 0,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          fontWeight: 100,
          width: '100%',
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            data-char={char}
            style={{
              display: 'inline-block',
              color: stroke ? undefined : textColor
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
`,de=`import { useEffect, useRef, useState } from 'react';

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  // This font is just an example, you should not use it in commercial projects.
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 2,
  className = '',

  minFontSize = 24,

}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split('');

  const dist = (a, b) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const setSize = () => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  };

  useEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scale, text]);

  useEffect(() => {
    let rafId;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach((span) => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };

          const d = dist(mouseRef.current, charCenter);

          const getAttr = (distance, minVal, maxVal) => {
            const val = maxVal - Math.abs((maxVal * distance) / maxDist);
            return Math.max(minVal, val + minVal);
          };

          const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : 0;
          const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : 1;

          span.style.opacity = alphaVal;
          span.style.fontVariationSettings = \`'wght' \${wght}, 'wdth' \${wdth}, 'ital' \${italVal}\`;
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha, chars.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-transparent"
    >
      <style>{\`
        @font-face {
          font-family: '\${fontFamily}';
          src: url('\${fontUrl}');
          font-style: normal;
        }
        .stroke span {
          position: relative;
          color: \${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: \${strokeWidth}px;
          -webkit-text-stroke-color: \${strokeColor};
        }
      \`}</style>

      <h1
        ref={titleRef}
        className={\`text-pressure-title \${className} \${flex ? 'flex justify-between' : ''
          } \${stroke ? 'stroke' : ''} uppercase text-center\`}
        style={{
          fontFamily,
          fontSize: fontSize,
          lineHeight,
          transform: \`scale(1, \${scaleY})\`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor,
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            data-char={char}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
`,me=`import { useEffect, useRef, useState } from 'react';

interface TextPressureProps {
    text?: string;
    fontFamily?: string;
    fontUrl?: string;
    width?: boolean;
    weight?: boolean;
    italic?: boolean;
    alpha?: boolean;
    flex?: boolean;
    stroke?: boolean;
    scale?: boolean;
    textColor?: string;
    strokeColor?: string;
    className?: string;
    minFontSize?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({
    text = 'Compressa',
    fontFamily = 'Compressa VF',
    fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
    width = true,
    weight = true,
    italic = true,
    alpha = false,
    flex = true,
    stroke = false,
    scale = false,
    textColor = '#FFFFFF',
    strokeColor = '#FF0000',
    className = '',
    minFontSize = 24,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

    const mouseRef = useRef({ x: 0, y: 0 });
    const cursorRef = useRef({ x: 0, y: 0 });

    const [fontSize, setFontSize] = useState(minFontSize);
    const [scaleY, setScaleY] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);

    const chars = text.split('');

    const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorRef.current.x = e.clientX;
            cursorRef.current.y = e.clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const t = e.touches[0];
            cursorRef.current.x = t.clientX;
            cursorRef.current.y = t.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        if (containerRef.current) {
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            mouseRef.current.x = left + width / 2;
            mouseRef.current.y = top + height / 2;
            cursorRef.current.x = mouseRef.current.x;
            cursorRef.current.y = mouseRef.current.y;
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    const setSize = () => {
        if (!containerRef.current || !titleRef.current) return;

        const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

        let newFontSize = containerW / (chars.length / 2);
        newFontSize = Math.max(newFontSize, minFontSize);

        setFontSize(newFontSize);
        setScaleY(1);
        setLineHeight(1);

        requestAnimationFrame(() => {
            if (!titleRef.current) return;
            const textRect = titleRef.current.getBoundingClientRect();

            if (scale && textRect.height > 0) {
                const yRatio = containerH / textRect.height;
                setScaleY(yRatio);
                setLineHeight(yRatio);
            }
        });
    };

    useEffect(() => {
        setSize();
        window.addEventListener('resize', setSize);
        return () => window.removeEventListener('resize', setSize);
    }, [scale, text]);

    useEffect(() => {
        let rafId: number;
        const animate = () => {
            mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
            mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

            if (titleRef.current) {
                const titleRect = titleRef.current.getBoundingClientRect();
                const maxDist = titleRect.width / 2;

                spansRef.current.forEach((span) => {
                    if (!span) return;

                    const rect = span.getBoundingClientRect();
                    const charCenter = {
                        x: rect.x + rect.width / 2,
                        y: rect.y + rect.height / 2,
                    };

                    const d = dist(mouseRef.current, charCenter);

                    const getAttr = (distance: number, minVal: number, maxVal: number) => {
                        const val = maxVal - Math.abs((maxVal * distance) / maxDist);
                        return Math.max(minVal, val + minVal);
                    };

                    const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
                    const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
                    const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : 0;
                    const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : 1;

                    span.style.opacity = alphaVal.toString();
                    span.style.fontVariationSettings = \`'wght' \${wght}, 'wdth' \${wdth}, 'ital' \${italVal}\`;
                });
            }

            rafId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(rafId);
    }, [width, weight, italic, alpha, chars.length]);

    const dynamicClassName = [className, flex ? 'flex' : '', stroke ? 'stroke' : '']
        .filter(Boolean)
        .join(' ');

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                background: 'transparent',
            }}
        >
            <style>{\`
        @font-face {
          font-family: '\${fontFamily}';
          src: url('\${fontUrl}');
          font-style: normal;
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .stroke span {
          position: relative;
          color: \${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: \${strokeColor};
        }

        .text-pressure-title {
          color: \${textColor};
        }
      \`}</style>

            <h1
                ref={titleRef}
                className={\`text-pressure-title \${dynamicClassName}\`}
                style={{
                    fontFamily,
                    textTransform: 'uppercase',
                    fontSize: fontSize,
                    lineHeight,
                    transform: \`scale(1, \${scaleY})\`,
                    transformOrigin: 'center top',
                    margin: 0,
                    textAlign: 'center',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    fontWeight: 100,
                    width: '100%',
                }}
            >
                {chars.map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => (spansRef.current[i] = el)}
                        data-char={char}
                        style={{
                            display: 'inline-block',
                            color: stroke ? undefined : textColor
                        }}
                    >
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default TextPressure;
`,xe=`import { useEffect, useRef, useState } from 'react';

interface TextPressureProps {
    text?: string;
    fontFamily?: string;
    fontUrl?: string;
    width?: boolean;
    weight?: boolean;
    italic?: boolean;
    alpha?: boolean;
    flex?: boolean;
    stroke?: boolean;
    scale?: boolean;
    textColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    className?: string;
    minFontSize?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({
    text = 'Compressa',
    fontFamily = 'Compressa VF',
    fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
    width = true,
    weight = true,
    italic = true,
    alpha = false,
    flex = true,
    stroke = false,
    scale = false,
    textColor = '#FFFFFF',
    strokeColor = '#FF0000',
    strokeWidth = 2,
    className = '',
    minFontSize = 24,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

    const mouseRef = useRef({ x: 0, y: 0 });
    const cursorRef = useRef({ x: 0, y: 0 });

    const [fontSize, setFontSize] = useState(minFontSize);
    const [scaleY, setScaleY] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);

    const chars = text.split('');

    const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorRef.current.x = e.clientX;
            cursorRef.current.y = e.clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const t = e.touches[0];
            cursorRef.current.x = t.clientX;
            cursorRef.current.y = t.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        if (containerRef.current) {
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            mouseRef.current.x = left + width / 2;
            mouseRef.current.y = top + height / 2;
            cursorRef.current.x = mouseRef.current.x;
            cursorRef.current.y = mouseRef.current.y;
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    const setSize = () => {
        if (!containerRef.current || !titleRef.current) return;

        const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

        let newFontSize = containerW / (chars.length / 2);
        newFontSize = Math.max(newFontSize, minFontSize);

        setFontSize(newFontSize);
        setScaleY(1);
        setLineHeight(1);

        requestAnimationFrame(() => {
            if (!titleRef.current) return;
            const textRect = titleRef.current.getBoundingClientRect();

            if (scale && textRect.height > 0) {
                const yRatio = containerH / textRect.height;
                setScaleY(yRatio);
                setLineHeight(yRatio);
            }
        });
    };

    useEffect(() => {
        setSize();
        window.addEventListener('resize', setSize);
        return () => window.removeEventListener('resize', setSize);
    }, [scale, text]);

    useEffect(() => {
        let rafId: number;
        const animate = () => {
            mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
            mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

            if (titleRef.current) {
                const titleRect = titleRef.current.getBoundingClientRect();
                const maxDist = titleRect.width / 2;

                spansRef.current.forEach((span) => {
                    if (!span) return;

                    const rect = span.getBoundingClientRect();
                    const charCenter = {
                        x: rect.x + rect.width / 2,
                        y: rect.y + rect.height / 2,
                    };

                    const d = dist(mouseRef.current, charCenter);

                    const getAttr = (distance: number, minVal: number, maxVal: number) => {
                        const val = maxVal - Math.abs((maxVal * distance) / maxDist);
                        return Math.max(minVal, val + minVal);
                    };

                    const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
                    const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
                    const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : '0';
                    const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : '1';

                    span.style.opacity = alphaVal;
                    span.style.fontVariationSettings = \`'wght' \${wght}, 'wdth' \${wdth}, 'ital' \${italVal}\`;
                });
            }

            rafId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(rafId);
    }, [width, weight, italic, alpha, chars.length]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden bg-transparent"
        >
            <style>{\`
        @font-face {
          font-family: '\${fontFamily}';
          src: url('\${fontUrl}');
          font-style: normal;
        }
        .stroke span {
          position: relative;
          color: \${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: \${strokeWidth}px;
          -webkit-text-stroke-color: \${strokeColor};
        }
      \`}</style>

            <h1
                ref={titleRef}
                className={\`text-pressure-title \${className} \${flex ? 'flex justify-between' : ''
                    } \${stroke ? 'stroke' : ''} uppercase text-center\`}
                style={{
                    fontFamily,
                    fontSize: fontSize,
                    lineHeight,
                    transform: \`scale(1, \${scaleY})\`,
                    transformOrigin: 'center top',
                    margin: 0,
                    fontWeight: 100,
                    color: stroke ? undefined : textColor,
                }}
            >
                {chars.map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => (spansRef.current[i] = el)}
                        data-char={char}
                        className="inline-block"
                    >
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default TextPressure;
`,W={..._("TextAnimations/TextPressure"),usage:`import TextPressure from './TextPressure';

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used

<div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="Hello!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>`,code:he,tailwind:de,tsCode:me,tsTailwind:xe},pe=[{name:"text",type:"string",default:'"Hello!"',description:"Text content that will be displayed and animated."},{name:"fontFamily",type:"string",default:"",description:"Name of the variable font family."},{name:"fontUrl",type:"string",default:"URL to a .woff2 or .ttf file",description:"URL for the variable font file (needed)"},{name:"flex",type:"boolean",default:"true",description:"Whether the characters are spaced using flex layout."},{name:"scale",type:"boolean",default:"false",description:"If true, vertically scales the text to fill its container height."},{name:"alpha",type:"boolean",default:"false",description:"If true, applies an opacity effect based on cursor distance."},{name:"stroke",type:"boolean",default:"false",description:"If true, adds a stroke effect around characters."},{name:"width",type:"boolean",default:"true",description:'If true, varies the variable-font "width" axis.'},{name:"weight",type:"boolean",default:"true",description:'If true, varies the variable-font "weight" axis.'},{name:"italic",type:"boolean",default:"true",description:'If true, varies the variable-font "italics" axis.'},{name:"textColor",type:"string",default:"true",description:"The fill color of the text"},{name:"strokeColor",type:"string",default:"#FFFFFF",description:'The stroke color that will be applied to the text when "stroke" is set to true'},{name:"className",type:"string",default:"#FF0000",description:"Additional class for styling the <h1> wrapper."},{name:"minFontSize",type:"number",default:"24",description:"Sets a minimum font-size to avoid overly tiny text on smaller screens."}],be=()=>{const[p,v]=n.useState("Hello!"),[F,S]=n.useState(!0),[R,C]=n.useState(!1),[g,$]=n.useState(!1),[w,b]=n.useState(!0),[d,L]=n.useState(!0),[k,z]=n.useState(!0),[f,h]=n.useState("#ffffff"),[y,a]=n.useState("#5227FF"),[l,c]=ae();return e.jsxs(ee,{children:[e.jsxs(ne,{children:[e.jsxs(N,{position:"relative",className:"demo-container",bg:"#060010",minH:400,maxH:450,overflow:"hidden",mb:6,children:[e.jsx(ce,{onClick:c}),e.jsx(N,{w:"100%",h:"100%",children:e.jsx(fe,{text:p,flex:F,alpha:R,stroke:g,width:w,weight:d,italic:k,textColor:f,strokeColor:y,minFontSize:36},l)})]}),e.jsxs(le,{children:[e.jsx(ue,{title:"Text",value:p,placeholder:"Your text here...",width:200,maxLength:10,onChange:v}),e.jsxs(T,{alignItems:"center",gap:4,flexWrap:"wrap",mt:6,children:[e.jsxs(T,{gap:4,align:"center",children:[e.jsx(A,{fontSize:"sm",children:"Text Color"}),e.jsx("input",{type:"color",value:f,width:"60px",onChange:t=>{h(t.target.value),c()}})]}),e.jsxs(T,{gap:4,align:"center",children:[e.jsx(A,{fontSize:"sm",children:"Stroke Color"}),e.jsx("input",{type:"color",value:y,width:"60px",onChange:t=>{a(t.target.value),c()}})]})]}),e.jsx(A,{mt:6,color:"#999",children:"Animation Settings"}),e.jsxs(T,{gap:4,flexWrap:"wrap",children:[e.jsx(x,{title:"Flex",isChecked:F,onChange:t=>{S(t),c()}}),e.jsx(x,{title:"Alpha",isChecked:R,onChange:t=>{C(t),c()}}),e.jsx(x,{title:"Stroke",isChecked:g,onChange:t=>{$(t),c()}}),e.jsx(x,{title:"Width",isChecked:w,onChange:t=>{b(t),c()}}),e.jsx(x,{title:"Weight",isChecked:d,onChange:t=>{L(t),c()}}),e.jsx(x,{title:"Italic",isChecked:k,onChange:t=>{z(t),c()}})]})]}),e.jsx(te,{data:pe})]}),e.jsx(re,{children:e.jsx(oe,{codeObject:W})}),e.jsx(se,{children:e.jsx(ie,{...W})})]})};export{be as default};
