import{g as k,j as e,r as a,B as O,T as v,F as I}from"./index-j7DW7U0N.js";import{T as z,P as w,a as P,C as G,b as A,c as H,d as T}from"./PropTable-Baf4PZpP.js";import{C as j}from"./Customize-Dq9g9yhm.js";import{P as x}from"./PreviewSlider-D0sSZbsU.js";import{P as D}from"./PreviewSwitch-_xo3rdWG.js";const N=`import "./GlareHover.css";

const GlareHover = ({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style = {},
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const vars = {
    "--gh-width": width,
    "--gh-height": height,
    "--gh-bg": background,
    "--gh-br": borderRadius,
    "--gh-angle": \`\${glareAngle}deg\`,
    "--gh-duration": \`\${transitionDuration}ms\`,
    "--gh-size": \`\${glareSize}%\`,
    "--gh-rgba": rgba,
    "--gh-border": borderColor,
  };

  return (
    <div
      className={\`glare-hover \${playOnce ? 'glare-hover--play-once' : ''} \${className}\`}
      style={{ ...vars, ...style }}
    >
      {children}
    </div>
  );
};

export default GlareHover;
`,F=`.glare-hover {
  width: var(--gh-width);
  height: var(--gh-height);
  background: var(--gh-bg);
  border-radius: var(--gh-br);
  border: 1px solid var(--gh-border);
  overflow: hidden;
  position: relative;
  display: grid;
  place-items: center;
}

.glare-hover::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(var(--gh-angle),
      hsla(0, 0%, 0%, 0) 60%,
      var(--gh-rgba) 70%,
      hsla(0, 0%, 0%, 0),
      hsla(0, 0%, 0%, 0) 100%);
  transition: var(--gh-duration) ease;
  background-size: var(--gh-size) var(--gh-size), 100% 100%;
  background-repeat: no-repeat;
  background-position: -100% -100%, 0 0;
}

.glare-hover:hover {
  cursor: pointer;
}

.glare-hover:hover::before {
  background-position: 100% 100%, 0 0;
}

.glare-hover--play-once::before {
  transition: none;
}

.glare-hover--play-once:hover::before {
  transition: var(--gh-duration) ease;
  background-position: 100% 100%, 0 0;
}`,E=`import { useRef } from "react";

const GlareHover = ({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style = {},
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[\\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[\\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const overlayRef = useRef(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";
    el.style.transition = \`\${transitionDuration}ms ease\`;
    el.style.backgroundPosition = "100% 100%, 0 0";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;

    if (playOnce) {
      el.style.transition = "none";
      el.style.backgroundPosition = "-100% -100%, 0 0";
    } else {
      el.style.transition = \`\${transitionDuration}ms ease\`;
      el.style.backgroundPosition = "-100% -100%, 0 0";
    }
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: \`linear-gradient(\${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        \${rgba} 70%,
        hsla(0,0%,0%,0) 100%)\`,
    backgroundSize: \`\${glareSize}% \${glareSize}%, 100% 100%\`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0",
    pointerEvents: "none",
  };

  return (
    <div
      className={\`relative grid place-items-center overflow-hidden border cursor-pointer \${className}\`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style,
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
`,M=`import React from "react";
import "./GlareHover.css";

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style = {},
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const vars: React.CSSProperties & { [k: string]: string } = {
    "--gh-width": width,
    "--gh-height": height,
    "--gh-bg": background,
    "--gh-br": borderRadius,
    "--gh-angle": \`\${glareAngle}deg\`,
    "--gh-duration": \`\${transitionDuration}ms\`,
    "--gh-size": \`\${glareSize}%\`,
    "--gh-rgba": rgba,
    "--gh-border": borderColor,
  };

  return (
    <div
      className={\`glare-hover \${playOnce ? 'glare-hover--play-once' : ''} \${className}\`}
      style={{ ...vars, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default GlareHover;
`,L=`import React, { useRef } from "react";

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style = {},
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[\\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[\\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const overlayRef = useRef<HTMLDivElement | null>(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";
    el.style.transition = \`\${transitionDuration}ms ease\`;
    el.style.backgroundPosition = "100% 100%, 0 0";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;

    if (playOnce) {
      el.style.transition = "none";
      el.style.backgroundPosition = "-100% -100%, 0 0";
    } else {
      el.style.transition = \`\${transitionDuration}ms ease\`;
      el.style.backgroundPosition = "-100% -100%, 0 0";
    }
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: \`linear-gradient(\${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        \${rgba} 70%,
        hsla(0,0%,0%,0) 100%)\`,
    backgroundSize: \`\${glareSize}% \${glareSize}%, 100% 100%\`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0",
    pointerEvents: "none",
  };

  return (
    <div
      className={\`relative grid place-items-center overflow-hidden border cursor-pointer \${className}\`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style,
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
`,$={...k("Animations/GlareHover"),usage:`import GlareHover from './GlareHover'

<div style={{ height: '600px', position: 'relative' }}>
  <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
  >
    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
      Hover Me
    </h2>
  </GlareHover>
</div>`,code:N,css:F,tailwind:E,tsCode:M,tsTailwind:L},B=({width:o="500px",height:c="500px",background:s="#000",borderRadius:h="10px",borderColor:i="#333",children:d,glareColor:r="#ffffff",glareOpacity:l=.5,glareAngle:g=-45,glareSize:p=250,transitionDuration:u=650,playOnce:t=!1,className:C="",style:S={}})=>{const n=r.replace("#","");let f=r;if(/^[0-9A-Fa-f]{6}$/.test(n)){const b=parseInt(n.slice(0,2),16),m=parseInt(n.slice(2,4),16),y=parseInt(n.slice(4,6),16);f=`rgba(${b}, ${m}, ${y}, ${l})`}else if(/^[0-9A-Fa-f]{3}$/.test(n)){const b=parseInt(n[0]+n[0],16),m=parseInt(n[1]+n[1],16),y=parseInt(n[2]+n[2],16);f=`rgba(${b}, ${m}, ${y}, ${l})`}const R={"--gh-width":o,"--gh-height":c,"--gh-bg":s,"--gh-br":h,"--gh-angle":`${g}deg`,"--gh-duration":`${u}ms`,"--gh-size":`${p}%`,"--gh-rgba":f,"--gh-border":i};return e.jsx("div",{className:`glare-hover ${t?"glare-hover--play-once":""} ${C}`,style:{...R,...S},children:d})},Q=()=>{const[o,c]=a.useState("#ffffff"),[s,h]=a.useState(.3),[i,d]=a.useState(300),[r,l]=a.useState(800),[g,p]=a.useState(!1),u=[{name:"width",type:"string",default:"500px",description:"The width of the hover element."},{name:"height",type:"string",default:"500px",description:"The height of the hover element."},{name:"background",type:"string",default:"#000",description:"The background color of the element."},{name:"borderRadius",type:"string",default:"10px",description:"The border radius of the element."},{name:"borderColor",type:"string",default:"#333",description:"The border color of the element."},{name:"children",type:"React.ReactNode",default:"undefined",description:"The content to display inside the glare hover element."},{name:"glareColor",type:"string",default:"#ffffff",description:"The color of the glare effect (hex format)."},{name:"glareOpacity",type:"number",default:"0.5",description:"The opacity of the glare effect (0-1)."},{name:"glareAngle",type:"number",default:"-45",description:"The angle of the glare effect in degrees."},{name:"glareSize",type:"number",default:"250",description:"The size of the glare effect as a percentage (e.g. 250 = 250%)."},{name:"transitionDuration",type:"number",default:"650",description:"The duration of the transition in milliseconds."},{name:"playOnce",type:"boolean",default:"false",description:"If true, the glare only animates on hover and doesn't return on mouse leave."},{name:"className",type:"string",default:'""',description:"Additional CSS class names."},{name:"style",type:"React.CSSProperties",default:"{}",description:"Additional inline styles."}];return e.jsxs(z,{children:[e.jsxs(w,{children:[e.jsx(O,{position:"relative",className:"demo-container",h:600,overflow:"hidden",children:e.jsx(B,{background:"#060010",borderColor:"#271E37",borderRadius:"20px",width:"400px",height:"300px",glareColor:o,glareOpacity:s,glareSize:i,transitionDuration:r,playOnce:g,children:e.jsx(v,{textAlign:"center",fontSize:"3rem",fontWeight:"900",color:"#271E37",m:0,children:"Hover Me"})})}),e.jsxs(j,{children:[e.jsxs(I,{gap:4,align:"center",mt:4,children:[e.jsx(v,{fontSize:"sm",children:"Glare Color"}),e.jsx("input",{type:"color",value:o,onChange:t=>c(t.target.value),style:{height:"22px",outline:"none",border:"none",width:"50px"}})]}),e.jsx(x,{title:"Glare Opacity",min:0,max:1,step:.1,value:s,onChange:h}),e.jsx(x,{title:"Glare Size",min:100,max:500,step:25,value:i,onChange:d,valueUnit:"%"}),e.jsx(x,{title:"Transition Duration",min:200,max:2e3,step:50,value:r,onChange:l,valueUnit:"ms"}),e.jsx(D,{title:"Play Once",isChecked:g,onChange:t=>p(t)})]}),e.jsx(P,{data:u})]}),e.jsx(G,{children:e.jsx(A,{codeObject:$})}),e.jsx(H,{children:e.jsx(T,{...$})})]})};export{Q as default};
