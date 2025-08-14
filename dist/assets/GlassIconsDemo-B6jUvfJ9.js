import{j as n,g as l,r as c,B as m,bJ as d,bP as p,as as b,bQ as g,bR as u,bS as h}from"./index-j7DW7U0N.js";import{T as f,P as x,a as _,C as y,b as k,c as N,d as v}from"./PropTable-Baf4PZpP.js";import{C as w}from"./Customize-Dq9g9yhm.js";import{P as C}from"./PreviewSwitch-_xo3rdWG.js";const r={blue:"linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",purple:"linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",red:"linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",indigo:"linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",orange:"linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",green:"linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))"},I=({items:a,className:t})=>{const s=e=>r[e]?{background:r[e]}:{background:e};return n.jsx("div",{className:`icon-btns ${t||""}`,children:a.map((e,o)=>n.jsxs("button",{className:`icon-btn ${e.customClass||""}`,"aria-label":e.label,type:"button",children:[n.jsx("span",{className:"icon-btn__back",style:s(e.color)}),n.jsx("span",{className:"icon-btn__front",children:n.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:e.icon})}),n.jsx("span",{className:"icon-btn__label",children:e.label})]},o))})},j=`import "./GlassIcons.css";

const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={\`icon-btns \${className || ""}\`}>
      {items.map((item, index) => (
        <button
          key={index}
          className={\`icon-btn \${item.customClass || ""}\`}
          aria-label={item.label}
          type="button"
        >
          <span
            className="icon-btn__back"
            style={getBackgroundStyle(item.color)}
          ></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">{item.icon}</span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
`,G=`.icon-btns {
  display: grid;
  grid-gap: 5em;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  padding: 3em 0;
  overflow: visible;
}

.icon-btn {
  background-color: transparent;
  outline: none;
  position: relative;
  width: 4.5em;
  height: 4.5em;
  perspective: 24em;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;
}

.icon-btn__back,
.icon-btn__front,
.icon-btn__label {
  transition: opacity 0.3s cubic-bezier(0.83, 0, 0.17, 1),
    transform 0.3s cubic-bezier(0.83, 0, 0.17, 1);
}

.icon-btn__back,
.icon-btn__front {
  border-radius: 1.25em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.icon-btn__back {
  box-shadow: 0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15);
  display: block;
  transform: rotate(15deg);
  transform-origin: 100% 100%;
}

.icon-btn__front {
  background-color: hsla(0, 0%, 100%, 0.15);
  box-shadow: 0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset;
  backdrop-filter: blur(0.75em);
  -webkit-backdrop-filter: blur(0.75em);
  display: flex;
  transform-origin: 80% 50%;
}

.icon-btn__icon {
  margin: auto;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn__label {
  font-size: 1em;
  white-space: nowrap;
  text-align: center;
  line-height: 2;
  opacity: 0;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  transform: translateY(0);
}

.icon-btn:focus-visible .icon-btn__back,
.icon-btn:hover .icon-btn__back {
  transform: rotate(25deg) translate3d(-0.5em, -0.5em, 0.5em);
}

.icon-btn:focus-visible .icon-btn__front,
.icon-btn:hover .icon-btn__front {
  transform: translateZ(2em);
}

.icon-btn:focus-visible .icon-btn__label,
.icon-btn:hover .icon-btn__label {
  opacity: 1;
  transform: translateY(20%);
}

@media (min-width: 768px) {
  .icon-btns {
    grid-template-columns: repeat(3, 1fr);
  }
}`,S=`const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div
      className={\`grid gap-[5em] grid-cols-2 md:grid-cols-3 mx-auto py-[3em] overflow-visible \${className || ""
        }\`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={\`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group \${item.customClass || ""
            }\`}
        >
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center" aria-hidden="true">
              {item.icon}
            </span>
          </span>

          <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
`,F=`import React from "react";
import "./GlassIcons.css";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={\`icon-btns \${className || ""}\`}>
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          className={\`icon-btn \${item.customClass || ""}\`}
          aria-label={item.label}
        >
          <span
            className="icon-btn__back"
            style={getBackgroundStyle(item.color)}
          ></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
`,B=`import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div
      className={\`grid gap-[5em] grid-cols-2 md:grid-cols-3 mx-auto py-[3em] overflow-visible \${
        className || ""
      }\`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={\`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group \${
            item.customClass || ""
          }\`}
        >
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span
              className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center"
              aria-hidden="true"
            >
              {item.icon}
            </span>
          </span>

          <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
`,i={...l("Components/GlassIcons"),usage:`import GlassIcons from './GlassIcons'

// update with your own icons and colors
const items = [
  { icon: <FiFileText />, color: 'blue', label: 'Files' },
  { icon: <FiBook />, color: 'purple', label: 'Books' },
  { icon: <FiHeart />, color: 'red', label: 'Health' },
  { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
  { icon: <FiEdit />, color: 'orange', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
];

<div style={{ height: '600px', position: 'relative' }}>
  <GlassIcons items={items} className="custom-class"/>
</div>`,code:j,css:G,tailwind:S,tsCode:F,tsTailwind:B},$=()=>{const[a,t]=c.useState(!1),s=[{name:"items",type:"GlassIconsItem[]",default:"[]",description:"Array of items to render. Each item should include: an icon (React.ReactElement), a color (string), a label (string), and an optional customClass (string)."},{name:"className",type:"string",default:"''",description:"Optional additional CSS class(es) to be added to the container."}],e=[{icon:n.jsx(d,{}),color:a?"blue":"#444",label:"Files"},{icon:n.jsx(p,{}),color:a?"purple":"#444",label:"Books"},{icon:n.jsx(b,{}),color:a?"red":"#444",label:"Health"},{icon:n.jsx(g,{}),color:a?"indigo":"#444",label:"Weather"},{icon:n.jsx(u,{}),color:a?"orange":"#444",label:"Notes"},{icon:n.jsx(h,{}),color:a?"green":"#444",label:"Stats"}];return n.jsxs(f,{children:[n.jsxs(x,{children:[n.jsx(m,{position:"relative",className:"demo-container",h:500,overflow:"hidden",children:n.jsx(I,{items:e,className:"my-glass-icons"})}),n.jsx(w,{children:n.jsx(C,{title:"Colorful",isChecked:a,onChange:o=>{t(o)}})}),n.jsx(_,{data:s})]}),n.jsx(y,{children:n.jsx(k,{codeObject:i})}),n.jsx(N,{children:n.jsx(v,{...i})})]})};export{$ as default};
