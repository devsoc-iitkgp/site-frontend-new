import{r as g,j as n,p as w,b3 as u,bn as b,g as x,B as k}from"./index-j7DW7U0N.js";import{T,P as D,a as R,C as S,b as B,c as j,d as q}from"./PropTable-Baf4PZpP.js";import{P as M}from"./PreviewSwitch-_xo3rdWG.js";import{C as N}from"./Customize-Dq9g9yhm.js";import{P as p}from"./PreviewSlider-D0sSZbsU.js";import{D as E}from"./Dependencies-BSh7s3YA.js";import{u as O}from"./useForceRerender-LUtjsLCb.js";function P({children:d,onSendToBack:m,sensitivity:e}){const s=u(0),i=u(0),h=b(i,[-100,100],[60,-60]),o=b(s,[-100,100],[-60,60]);function l(f,t){Math.abs(t.offset.x)>e||Math.abs(t.offset.y)>e?m():(s.set(0),i.set(0))}return n.jsx(w.div,{className:"card-rotate",style:{x:s,y:i,rotateX:h,rotateY:o},drag:!0,dragConstraints:{top:0,right:0,bottom:0,left:0},dragElastic:.6,whileTap:{cursor:"grabbing"},onDragEnd:l,children:d})}function V({randomRotation:d=!1,sensitivity:m=200,cardDimensions:e={width:208,height:208},cardsData:s=[],animationConfig:i={stiffness:260,damping:20},sendToBackOnClick:h=!1}){const[o,l]=g.useState(s.length?s:[{id:1,img:"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"},{id:2,img:"https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"},{id:3,img:"https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"},{id:4,img:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"}]),f=t=>{l(c=>{const r=[...c],a=r.findIndex(y=>y.id===t),[v]=r.splice(a,1);return r.unshift(v),r})};return n.jsx("div",{className:"stack-container",style:{width:e.width,height:e.height,perspective:600},children:o.map((t,c)=>{const r=d?Math.random()*10-5:0;return n.jsx(P,{onSendToBack:()=>f(t.id),sensitivity:m,children:n.jsx(w.div,{className:"card",onClick:()=>h&&f(t.id),animate:{rotateZ:(o.length-c-1)*4+r,scale:1+c*.06-o.length*.06,transformOrigin:"90% 90%"},initial:!1,transition:{type:"spring",stiffness:i.stiffness,damping:i.damping},style:{width:e.width,height:e.height},children:n.jsx("img",{src:t.img,alt:`card-${t.id}`,className:"card-image"})})},t.id)})})}const X=`import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import "./Stack.css";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
        { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
        { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
        { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
      ]
  );

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5
          : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={\`card-\${card.id}\`}
                className="card-image"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
`,Y=`.stack-container {
  position: relative;
  perspective: 600px;
}

.card-rotate {
  position: absolute;
  cursor: grab;
}

.card {
  border-radius: 20px;
  border: 5px solid #fff;
  overflow: hidden;
}

.card-image {
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,$=`import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
        { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
        { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
        { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
      ]
  );

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5
          : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-2xl overflow-hidden border-4 border-white"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={\`card-\${card.id}\`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}`,I=`import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import "./Stack.css";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
        { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
        { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
        { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
      ]
  );

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5
          : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={\`card-\${card.id}\`}
                className="card-image"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
`,Z=`import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          {
            id: 1,
            img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
          },
          {
            id: 2,
            img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
          },
          {
            id: 3,
            img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
          },
          {
            id: 4,
            img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
          },
        ]
  );

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-2xl overflow-hidden border-4 border-white"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={\`card-\${card.id}\`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
`,C={...x("Components/Stack"),installation:"npm install motion",usage:`import Stack from './Stack'

const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];
  
<Stack
  randomRotation={true}
  sensitivity={180}
  sendToBackOnClick={false}
  cardDimensions={{ width: 200, height: 200 }}
  cardsData={images}
/>`,code:X,css:Y,tailwind:$,tsCode:I,tsTailwind:Z},G=()=>{const[d,m]=g.useState(!1),[e,s]=g.useState(200),[i,h]=g.useState(208),[o,l]=g.useState(208),[f,t]=O(),c=[{name:"randomRotation",type:"boolean",default:!1,description:"Applies a random rotation to each card for a 'messy' look."},{name:"sensitivity",type:"number",default:200,description:"Drag sensitivity for sending a card to the back."},{name:"cardDimensions",type:"object",default:"{ width: 208, height: 208 }",description:"Defines the width and height of the cards."},{name:"sendToBackOnClick",type:"boolean",default:"false",description:"When enabled, the also stack shifts to the next card on click."},{name:"cardsData",type:"array",default:"[]",description:"The array of card data, including `id` and `img` properties."},{name:"animationConfig",type:"object",default:"{ stiffness: 260, damping: 20 }",description:"Configures the spring animation's stiffness and damping."}],r=[{id:1,img:"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"},{id:2,img:"https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"},{id:3,img:"https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"},{id:4,img:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"}];return n.jsxs(T,{children:[n.jsxs(D,{children:[n.jsx(k,{position:"relative",className:"demo-container",minH:400,overflow:"hidden",children:n.jsx(V,{randomRotation:d,sensitivity:e,cardDimensions:{width:i,height:o},cardsData:r},f)}),n.jsxs(N,{children:[n.jsx(M,{title:"Random Rotation",isChecked:d,onChange:a=>{m(a),t()}}),n.jsx(p,{title:"Sensitivity",min:100,max:300,step:10,value:e,onChange:a=>{s(a),t()}}),n.jsx(p,{title:"Card Width",min:150,max:300,step:10,value:i,onChange:a=>{h(a),t()},displayValue:a=>`${a}px`}),n.jsx(p,{title:"Card Height",min:150,max:300,step:10,value:o,onChange:a=>{l(a),t()},displayValue:a=>`${a}px`})]}),n.jsx(R,{data:c}),n.jsx(E,{dependencyList:["motion"]})]}),n.jsx(S,{children:n.jsx(B,{codeObject:C})}),n.jsx(j,{children:n.jsx(q,{...C})})]})};export{G as default};
