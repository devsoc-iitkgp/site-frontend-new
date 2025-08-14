import{j as n,bm as N,r as s,bn as z,p as V,g as j,B as k,F as w,b as y}from"./index-j7DW7U0N.js";import{T as $,P as D,a as F,C as W,b as E,c as H,d as B}from"./PropTable-Baf4PZpP.js";import{C as M}from"./Customize-Dq9g9yhm.js";import{P as u}from"./PreviewSlider-D0sSZbsU.js";import{D as A}from"./Dependencies-BSh7s3YA.js";function L({mv:t,number:i,height:o}){let d=z(t,a=>{let r=a%10,l=(10+i-r)%10,e=l*o;return l>5&&(e-=10*o),e});return n.jsx(V.span,{className:"counter-number",style:{y:d},children:i})}function _({place:t,value:i,height:o,digitStyle:d}){let a=Math.floor(i/t),r=N(a);return s.useEffect(()=>{r.set(a)},[r,a]),n.jsx("div",{className:"counter-digit",style:{height:o,...d},children:Array.from({length:10},(l,e)=>n.jsx(L,{mv:r,number:e,height:o},e))})}function I({value:t,fontSize:i=100,padding:o=0,places:d=[100,10,1],gap:a=8,borderRadius:r=4,horizontalPadding:l=8,textColor:e="white",fontWeight:b="bold",containerStyle:v,counterStyle:C,digitStyle:P,gradientHeight:c=16,gradientFrom:g="black",gradientTo:m="transparent",topGradientStyle:p,bottomGradientStyle:h}){const R=i+o,x={fontSize:i,gap:a,borderRadius:r,paddingLeft:l,paddingRight:l,color:e,fontWeight:b},T={height:c,background:`linear-gradient(to bottom, ${g}, ${m})`},G={height:c,background:`linear-gradient(to top, ${g}, ${m})`};return n.jsxs("div",{className:"counter-container",style:v,children:[n.jsx("div",{className:"counter-counter",style:{...x,...C},children:d.map(f=>n.jsx(_,{place:f,value:t,height:R,digitStyle:P},f))}),n.jsxs("div",{className:"gradient-container",children:[n.jsx("div",{className:"top-gradient",style:p||T}),n.jsx("div",{className:"bottom-gradient",style:h||G})]})]})}const q=`import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

import "./Counter.css";

function Number({ mv, number, height }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });
  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

function Digit({ place, value, height, digitStyle }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);
  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);
  return (
    <div className="counter-digit" style={{ height, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "black",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
}) {
  const height = fontSize + padding;
  const defaultCounterStyle = {
    fontSize,
    gap: gap,
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    color: textColor,
    fontWeight: fontWeight,
  };
  const defaultTopGradientStyle = {
    height: gradientHeight,
    background: \`linear-gradient(to bottom, \${gradientFrom}, \${gradientTo})\`,
  };
  const defaultBottomGradientStyle = {
    height: gradientHeight,
    background: \`linear-gradient(to top, \${gradientFrom}, \${gradientTo})\`,
  };
  return (
    <div className="counter-container" style={containerStyle}>
      <div
        className="counter-counter"
        style={{ ...defaultCounterStyle, ...counterStyle }}
      >
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>
      <div className="gradient-container">
        <div
          className="top-gradient"
          style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}
        ></div>
        <div
          className="bottom-gradient"
          style={
            bottomGradientStyle
              ? bottomGradientStyle
              : defaultBottomGradientStyle
          }
        ></div>
      </div>
    </div>
  );
}
`,O=`.counter-container {
  position: relative;
  display: inline-block;
}

.counter-counter {
  display: flex;
  overflow: hidden;
  line-height: 1;
}

.counter-digit {
  position: relative;
  width: 1ch;
  font-variant-numeric: tabular-nums;
}

.counter-number {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient-container {
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bottom-gradient {
  position: absolute;
  bottom: 0;
  width: 100%;
}`,J=`import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

function Number({ mv, number, height }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  const style = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <motion.span style={{ ...style, y }}>{number}</motion.span>;
}

function Digit({ place, value, height, digitStyle }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const defaultStyle = {
    height,
    position: "relative",
    width: "1ch",
    fontVariantNumeric: "tabular-nums",
  };

  return (
    <div style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "black",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
}) {
  const height = fontSize + padding;

  const defaultContainerStyle = {
    position: "relative",
    display: "inline-block",
  };

  const defaultCounterStyle = {
    fontSize,
    display: "flex",
    gap: gap,
    overflow: "hidden",
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    lineHeight: 1,
    color: textColor,
    fontWeight: fontWeight,
  };

  const gradientContainerStyle = {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  const defaultTopGradientStyle = {
    height: gradientHeight,
    background: \`linear-gradient(to bottom, \${gradientFrom}, \${gradientTo})\`,
  };

  const defaultBottomGradientStyle = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: gradientHeight,
    background: \`linear-gradient(to top, \${gradientFrom}, \${gradientTo})\`,
  };

  return (
    <div style={{ ...defaultContainerStyle, ...containerStyle }}>
      <div style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>
      <div style={gradientContainerStyle}>
        <div
          style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}
        />
        <div
          style={
            bottomGradientStyle
              ? bottomGradientStyle
              : defaultBottomGradientStyle
          }
        />
      </div>
    </div>
  );
}
`,K=`import { MotionValue, motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

import "./Counter.css";

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });
  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

interface DigitProps {
  place: number;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);
  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);
  return (
    <div className="counter-digit" style={{ height, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: number[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: React.CSSProperties;
  bottomGradientStyle?: React.CSSProperties;
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "black",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
}: CounterProps) {
  const height = fontSize + padding;
  const defaultCounterStyle: React.CSSProperties = {
    fontSize,
    gap: gap,
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    color: textColor,
    fontWeight: fontWeight,
  };
  const defaultTopGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: \`linear-gradient(to bottom, \${gradientFrom}, \${gradientTo})\`,
  };
  const defaultBottomGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: \`linear-gradient(to top, \${gradientFrom}, \${gradientTo})\`,
  };
  return (
    <div className="counter-container" style={containerStyle}>
      <div
        className="counter-counter"
        style={{ ...defaultCounterStyle, ...counterStyle }}
      >
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>
      <div className="gradient-container">
        <div
          className="top-gradient"
          style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}
        ></div>
        <div
          className="bottom-gradient"
          style={
            bottomGradientStyle
              ? bottomGradientStyle
              : defaultBottomGradientStyle
          }
        ></div>
      </div>
    </div>
  );
}
`,Q=`import { MotionValue, motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  const style: React.CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <motion.span style={{ ...style, y }}>{number}</motion.span>;
}

interface DigitProps {
  place: number;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const defaultStyle: React.CSSProperties = {
    height,
    position: "relative",
    width: "1ch",
    fontVariantNumeric: "tabular-nums",
  };

  return (
    <div style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: number[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: React.CSSProperties;
  bottomGradientStyle?: React.CSSProperties;
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "black",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
}: CounterProps) {
  const height = fontSize + padding;

  const defaultContainerStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
  };

  const defaultCounterStyle: React.CSSProperties = {
    fontSize,
    display: "flex",
    gap: gap,
    overflow: "hidden",
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    lineHeight: 1,
    color: textColor,
    fontWeight: fontWeight,
  };

  const gradientContainerStyle: React.CSSProperties = {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  const defaultTopGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: \`linear-gradient(to bottom, \${gradientFrom}, \${gradientTo})\`,
  };

  const defaultBottomGradientStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: gradientHeight,
    background: \`linear-gradient(to top, \${gradientFrom}, \${gradientTo})\`,
  };

  return (
    <div style={{ ...defaultContainerStyle, ...containerStyle }}>
      <div style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>
      <div style={gradientContainerStyle}>
        <div
          style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}
        />
        <div
          style={
            bottomGradientStyle
              ? bottomGradientStyle
              : defaultBottomGradientStyle
          }
        />
      </div>
    </div>
  );
}
`,S={...j("Components/Counter"),installation:"npm install motion",usage:`import Counter from './Counter';

<Counter
  value={1}
  places={[100, 10, 1]}
  fontSize={80}
  padding={5}
  gap={10}
  textColor="white"
  fontWeight={900}
/>`,code:q,css:O,tailwind:J,tsCode:K,tsTailwind:Q},en=()=>{const[t,i]=s.useState(1),[o,d]=s.useState(80),[a,r]=s.useState(10),l=[{name:"value",type:"number",default:"N/A (required)",description:"The numeric value to display in the counter."},{name:"fontSize",type:"number",default:"100",description:"The base font size used for the counter digits."},{name:"padding",type:"number",default:"0",description:"Additional padding added to the digit height."},{name:"places",type:"number[]",default:"[100, 10, 1]",description:"An array of place values to determine which digits to display."},{name:"gap",type:"number",default:"8",description:"The gap (in pixels) between each digit."},{name:"borderRadius",type:"number",default:"4",description:"The border radius (in pixels) for the counter container."},{name:"horizontalPadding",type:"number",default:"8",description:"The horizontal padding (in pixels) for the counter container."},{name:"textColor",type:"string",default:"'white'",description:"The text color for the counter digits."},{name:"fontWeight",type:"string | number",default:"'bold'",description:"The font weight of the counter digits."},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"Custom inline styles for the outer container."},{name:"counterStyle",type:"React.CSSProperties",default:"{}",description:"Custom inline styles for the counter element."},{name:"digitStyle",type:"React.CSSProperties",default:"{}",description:"Custom inline styles for each digit container."},{name:"gradientHeight",type:"number",default:"16",description:"The height (in pixels) of the gradient overlays."},{name:"gradientFrom",type:"string",default:"'black'",description:"The starting color for the gradient overlays."},{name:"gradientTo",type:"string",default:"'transparent'",description:"The ending color for the gradient overlays."},{name:"topGradientStyle",type:"React.CSSProperties",default:"undefined",description:"Custom inline styles for the top gradient overlay."},{name:"bottomGradientStyle",type:"React.CSSProperties",default:"undefined",description:"Custom inline styles for the bottom gradient overlay."}];return n.jsxs($,{children:[n.jsxs(D,{children:[n.jsxs(k,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:[n.jsx(I,{value:t,places:[100,10,1],gradientFrom:"#060010",fontSize:o,padding:5,gap:a,borderRadius:10,horizontalPadding:15,textColor:"white",fontWeight:900}),n.jsxs(w,{gap:4,bottom:"1em",direction:"row",justify:"center",mt:4,position:"absolute",children:[n.jsx(y,{bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:10,w:10,onClick:()=>i(t-1),children:"-"}),n.jsx(y,{bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:10,w:10,onClick:()=>t<999&&i(t+1),children:"+"})]})]}),n.jsxs(M,{children:[n.jsx(u,{title:"Value",min:0,max:999,step:1,value:t,onChange:e=>i(e)}),n.jsx(u,{title:"Gap",min:0,max:50,step:10,value:a,onChange:e=>r(e)}),n.jsx(u,{title:"Font Size",min:40,max:200,step:10,value:o,onChange:e=>d(e)})]}),n.jsx(F,{data:l}),n.jsx(A,{dependencyList:["motion"]})]}),n.jsx(W,{children:n.jsx(E,{codeObject:S})}),n.jsx(H,{children:n.jsx(B,{...S})})]})};export{en as default};
