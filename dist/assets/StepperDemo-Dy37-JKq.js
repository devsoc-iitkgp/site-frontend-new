import{r as c,j as n,ao as W,p,b2 as E,g as M,B as _,u as f,T as w,I as G}from"./index-j7DW7U0N.js";import{T as O,P as Y,a as z,C as J,b as X,c as q,d as K}from"./PropTable-Baf4PZpP.js";import{D as Q}from"./Dependencies-BSh7s3YA.js";function U({children:e,initialStep:i=1,onStepChange:o=()=>{},onFinalStepCompleted:r=()=>{},stepCircleContainerClassName:s="",stepContainerClassName:a="",contentClassName:b="",footerClassName:x="",backButtonProps:B={},nextButtonProps:R={},backButtonText:F="Back",nextButtonText:L="Continue",disableStepIndicators:j=!1,renderStepIndicator:k,...T}){const[t,I]=c.useState(i),[H,l]=c.useState(0),v=c.Children.toArray(e),d=v.length,N=t>d,g=t===d,u=S=>{I(S),S>d?r():o(S)},A=()=>{t>1&&(l(-1),u(t-1))},D=()=>{g||(l(1),u(t+1))},$=()=>{l(1),u(d+1)};return n.jsx("div",{className:"outer-container",...T,children:n.jsxs("div",{className:`step-circle-container ${s}`,style:{border:"1px solid #222"},children:[n.jsx("div",{className:`step-indicator-row ${a}`,children:v.map((S,y)=>{const h=y+1,V=y<d-1;return n.jsxs(W.Fragment,{children:[k?k({step:h,currentStep:t,onStepClick:m=>{l(m>t?1:-1),u(m)}}):n.jsx(tn,{step:h,disableStepIndicators:j,currentStep:t,onClickStep:m=>{l(m>t?1:-1),u(m)}}),V&&n.jsx(on,{isComplete:t>h})]},h)})}),n.jsx(Z,{isCompleted:N,currentStep:t,direction:H,className:`step-content-default ${b}`,children:v[t-1]}),!N&&n.jsx("div",{className:`footer-container ${x}`,children:n.jsxs("div",{className:`footer-nav ${t!==1?"spread":"end"}`,children:[t!==1&&n.jsx("button",{onClick:A,className:`back-button ${t===1?"inactive":""}`,...B,children:F}),n.jsx("button",{onClick:g?$:D,className:"next-button",...R,children:g?"Complete":L})]})})]})})}function Z({isCompleted:e,currentStep:i,direction:o,children:r,className:s}){const[a,b]=c.useState(0);return n.jsx(p.div,{className:s,style:{position:"relative",overflow:"hidden"},animate:{height:e?0:a},transition:{type:"spring",duration:.4},children:n.jsx(E,{initial:!1,mode:"sync",custom:o,children:!e&&n.jsx(nn,{direction:o,onHeightReady:x=>b(x),children:r},i)})})}function nn({children:e,direction:i,onHeightReady:o}){const r=c.useRef(null);return c.useLayoutEffect(()=>{r.current&&o(r.current.offsetHeight)},[e,o]),n.jsx(p.div,{ref:r,custom:i,variants:en,initial:"enter",animate:"center",exit:"exit",transition:{duration:.4},style:{position:"absolute",left:0,right:0,top:0},children:e})}const en={enter:e=>({x:e>=0?"-100%":"100%",opacity:0}),center:{x:"0%",opacity:1},exit:e=>({x:e>=0?"50%":"-50%",opacity:0})};function C({children:e}){return n.jsx("div",{className:"step-default",children:e})}function tn({step:e,currentStep:i,onClickStep:o,disableStepIndicators:r}){const s=i===e?"active":i<e?"inactive":"complete",a=()=>{e!==i&&!r&&o(e)};return n.jsx(p.div,{onClick:a,className:"step-indicator",animate:s,initial:!1,children:n.jsx(p.div,{variants:{inactive:{scale:1,backgroundColor:"#222",color:"#a3a3a3"},active:{scale:1,backgroundColor:"#5227FF",color:"#5227FF"},complete:{scale:1,backgroundColor:"#5227FF",color:"#3b82f6"}},transition:{duration:.3},className:"step-indicator-inner",children:s==="complete"?n.jsx(rn,{className:"check-icon"}):s==="active"?n.jsx("div",{className:"active-dot"}):n.jsx("span",{className:"step-number",children:e})})})}function on({isComplete:e}){const i={incomplete:{width:0,backgroundColor:"transparent"},complete:{width:"100%",backgroundColor:"#5227FF"}};return n.jsx("div",{className:"step-connector",children:n.jsx(p.div,{className:"step-connector-inner",variants:i,initial:!1,animate:e?"complete":"incomplete",transition:{duration:.4}})})}function rn(e){return n.jsx("svg",{...e,fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:n.jsx(p.path,{initial:{pathLength:0},animate:{pathLength:1},transition:{delay:.1,type:"tween",ease:"easeOut",duration:.3},strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}const an=`import React, { useState, Children, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import "./Stepper.css";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => { },
  onFinalStepCompleted = () => { },
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div className="outer-container" {...rest}>
      <div className={\`step-circle-container \${stepCircleContainerClassName}\`} style={{ border: "1px solid #222" }}>
        <div className={\`step-indicator-row \${stepContainerClassName}\`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && (
                  <StepConnector isComplete={currentStep > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={\`step-content-default \${contentClassName}\`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {!isCompleted && (
          <div className={\`footer-container \${footerClassName}\`}>
            <div className={\`footer-nav \${currentStep !== 1 ? "spread" : "end"}\`}>
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  className={\`back-button \${currentStep === 1 ? "inactive" : ""}\`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              <button
                onClick={isLastStep ? handleComplete : handleNext}
                className="next-button"
                {...nextButtonProps}
              >
                {isLastStep ? "Complete" : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepContentWrapper({ isCompleted, currentStep, direction, children, className }) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={(h) => setParentHeight(h)}>
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: "absolute", left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: (dir) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0,
  }),
};

export function Step({ children }) {
  return <div className="step-default">{children}</div>;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
  const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete";

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };

  return (
    <motion.div onClick={handleClick} className="step-indicator" animate={status} initial={false}>
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: "#222", color: "#a3a3a3" },
          active: { scale: 1, backgroundColor: "#5227FF", color: "#5227FF" },
          complete: { scale: 1, backgroundColor: "#5227FF", color: "#3b82f6" },
        }}
        transition={{ duration: 0.3 }}
        className="step-indicator-inner"
      >
        {status === "complete" ? (
          <CheckIcon className="check-icon" />
        ) : status === "active" ? (
          <div className="active-dot" />
        ) : (
          <span className="step-number">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  const lineVariants = {
    incomplete: { width: 0, backgroundColor: "transparent" },
    complete: { width: "100%", backgroundColor: "#5227FF" },
  };

  return (
    <div className="step-connector">
      <motion.div
        className="step-connector-inner"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? "complete" : "incomplete"}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.1, type: "tween", ease: "easeOut", duration: 0.3 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
`,sn=`.outer-container {
  display: flex;
  min-height: 100%;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

@media (min-width: 640px) {
  .outer-container {
    aspect-ratio: 4 / 3;
  }
}

@media (min-width: 768px) {
  .outer-container {
    aspect-ratio: 2 / 1;
  }
}

.step-circle-container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 28rem;
  border-radius: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.step-indicator-row {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 2rem;
}

.step-content-default {
  position: relative;
  overflow: hidden;
}

.step-default {
  padding-left: 2rem;
  padding-right: 2rem;
}

.footer-container {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
}

.footer-nav {
  margin-top: 2.5rem;
  display: flex;
}

.footer-nav.spread {
  justify-content: space-between;
}

.footer-nav.end {
  justify-content: flex-end;
}

.back-button {
  transition: all 350ms;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  color: #a3a3a3;
  cursor: pointer;
}

.back-button:hover {
  color: #52525b;
}

.back-button.inactive {
  pointer-events: none;
  opacity: 0.5;
  color: #a3a3a3;
}

.next-button {
  transition: all 350ms;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #5227FF;
  color: #fff;
  font-weight: 500;
  letter-spacing: -0.025em;
  padding: 0.375rem 0.875rem;
  cursor: pointer;
}

.next-button:hover {
  background-color: #5227FF;
}

.next-button:active {
  background-color: #5227FF;
}

.step-indicator {
  position: relative;
  cursor: pointer;
  outline: none;
}

.step-indicator-inner {
  display: flex;
  height: 2rem;
  width: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 600;
}

.active-dot {
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 9999px;
  background-color: #fff;
}

.step-number {
  font-size: 0.875rem;
}

.step-connector {
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 0.125rem;
  flex: 1;
  overflow: hidden;
  border-radius: 0.25rem;
  background-color: #52525b;
}

.step-connector-inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}

.check-icon {
  height: 1rem;
  width: 1rem;
  color: #fff;
}`,cn=`import React, { useState, Children, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => { },
  onFinalStepCompleted = () => { },
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) onFinalStepCompleted();
    else onStepChange(newStep);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div
      className="flex min-h-full flex-1 flex-col items-center justify-center p-4 sm:aspect-[4/3] md:aspect-[2/1]"
      {...rest}
    >
      <div
        className={\`mx-auto w-full max-w-md rounded-4xl shadow-xl \${stepCircleContainerClassName}\`}
        style={{ border: "1px solid #222" }}
      >
        <div className={\`\${stepContainerClassName} flex w-full items-center p-8\`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && (
                  <StepConnector isComplete={currentStep > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={\`space-y-2 px-8 \${contentClassName}\`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>
        {!isCompleted && (
          <div className={\`px-8 pb-8 \${footerClassName}\`}>
            <div
              className={\`mt-10 flex \${currentStep !== 1 ? "justify-between" : "justify-end"
                }\`}
            >
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  className={\`duration-350 rounded px-2 py-1 transition \${currentStep === 1
                    ? "pointer-events-none opacity-50 text-neutral-400"
                    : "text-neutral-400 hover:text-neutral-700"
                    }\`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              <button
                onClick={isLastStep ? handleComplete : handleNext}
                className="duration-350 flex items-center justify-center rounded-full bg-green-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-green-600 active:bg-green-700"
                {...nextButtonProps}
              >
                {isLastStep ? "Complete" : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepContentWrapper({ isCompleted, currentStep, direction, children, className }) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: "spring", duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition
            key={currentStep}
            direction={direction}
            onHeightReady={(h) => setParentHeight(h)}
          >
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: "absolute", left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: (dir) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0,
  }),
};

export function Step({ children }) {
  return <div className="px-8">{children}</div>;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
  const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete";

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="relative cursor-pointer outline-none focus:outline-none"
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: "#222", color: "#a3a3a3" },
          active: { scale: 1, backgroundColor: "#5227FF", color: "#5227FF" },
          complete: { scale: 1, backgroundColor: "#5227FF", color: "#3b82f6" },
        }}
        transition={{ duration: 0.3 }}
        className="flex h-8 w-8 items-center justify-center rounded-full font-semibold"
      >
        {status === "complete" ? (
          <CheckIcon className="h-4 w-4 text-black" />
        ) : status === "active" ? (
          <div className="h-3 w-3 rounded-full bg-[#060010]" />
        ) : (
          <span className="text-sm">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  const lineVariants = {
    incomplete: { width: 0, backgroundColor: "transparent" },
    complete: { width: "100%", backgroundColor: "#5227FF" },
  };

  return (
    <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-600">
      <motion.div
        className="absolute left-0 top-0 h-full"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? "complete" : "incomplete"}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.1, type: "tween", ease: "easeOut", duration: 0.3 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
`,pn=`import React, {
  useState,
  Children,
  useRef,
  useLayoutEffect,
  HTMLAttributes,
  ReactNode,
} from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

import "./Stepper.css";

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  backButtonText?: string;
  nextButtonText?: string;
  disableStepIndicators?: boolean;
  renderStepIndicator?: (props: RenderStepIndicatorProps) => ReactNode;
}

interface RenderStepIndicatorProps {
  step: number;
  currentStep: number;
  onStepClick: (clicked: number) => void;
}

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [direction, setDirection] = useState<number>(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div className="outer-container" {...rest}>
      <div
        className={\`step-circle-container \${stepCircleContainerClassName}\`}
        style={{ border: "1px solid #222" }}
      >
        <div className={\`step-indicator-row \${stepContainerClassName}\`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && (
                  <StepConnector isComplete={currentStep > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={\`step-content-default \${contentClassName}\`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {!isCompleted && (
          <div className={\`footer-container \${footerClassName}\`}>
            <div className={\`footer-nav \${currentStep !== 1 ? "spread" : "end"}\`}>
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  className={\`back-button \${currentStep === 1 ? "inactive" : ""}\`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              <button
                onClick={isLastStep ? handleComplete : handleNext}
                className="next-button"
                {...nextButtonProps}
              >
                {isLastStep ? "Complete" : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface StepContentWrapperProps {
  isCompleted: boolean;
  currentStep: number;
  direction: number;
  children: ReactNode;
  className?: string;
}

function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className,
}: StepContentWrapperProps) {
  const [parentHeight, setParentHeight] = useState<number>(0);

  return (
    <motion.div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={(h) => setParentHeight(h)}>
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface SlideTransitionProps {
  children: ReactNode;
  direction: number;
  onHeightReady: (h: number) => void;
}

function SlideTransition({ children, direction, onHeightReady }: SlideTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(containerRef.current.offsetHeight);
    }
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: "absolute", left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants: Variants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0,
  }),
};

interface StepProps {
  children: ReactNode;
}

export function Step({ children }: StepProps): JSX.Element {
  return <div className="step-default">{children}</div>;
}

interface StepIndicatorProps {
  step: number;
  currentStep: number;
  onClickStep: (step: number) => void;
  disableStepIndicators?: boolean;
}

function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators,
}: StepIndicatorProps) {
  const status =
    currentStep === step ? "active" : currentStep < step ? "inactive" : "complete";

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) {
      onClickStep(step);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className="step-indicator"
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: "#222", color: "#a3a3a3" },
          active: { scale: 1, backgroundColor: "#5227FF", color: "#5227FF" },
          complete: { scale: 1, backgroundColor: "#5227FF", color: "#3b82f6" },
        }}
        transition={{ duration: 0.3 }}
        className="step-indicator-inner"
      >
        {status === "complete" ? (
          <CheckIcon className="check-icon" />
        ) : status === "active" ? (
          <div className="active-dot" />
        ) : (
          <span className="step-number">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

interface StepConnectorProps {
  isComplete: boolean;
}

function StepConnector({ isComplete }: StepConnectorProps) {
  const lineVariants: Variants = {
    incomplete: { width: 0, backgroundColor: "transparent" },
    complete: { width: "100%", backgroundColor: "#5227FF" },
  };

  return (
    <div className="step-connector">
      <motion.div
        className="step-connector-inner"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? "complete" : "incomplete"}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {}

function CheckIcon(props: CheckIconProps) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.1, type: "tween", ease: "easeOut", duration: 0.3 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
`,ln=`import React, {
  useState,
  Children,
  useRef,
  useLayoutEffect,
  HTMLAttributes,
  ReactNode,
} from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  backButtonText?: string;
  nextButtonText?: string;
  disableStepIndicators?: boolean;
  renderStepIndicator?: (props: {
    step: number;
    currentStep: number;
    onStepClick: (clicked: number) => void;
  }) => ReactNode;
}

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [direction, setDirection] = useState<number>(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div
      className="flex min-h-full flex-1 flex-col items-center justify-center p-4 sm:aspect-[4/3] md:aspect-[2/1]"
      {...rest}
    >
      <div
        className={\`mx-auto w-full max-w-md rounded-4xl shadow-xl \${stepCircleContainerClassName}\`}
        style={{ border: "1px solid #222" }}
      >
        <div
          className={\`\${stepContainerClassName} flex w-full items-center p-8\`}
        >
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && (
                  <StepConnector isComplete={currentStep > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={\`space-y-2 px-8 \${contentClassName}\`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {!isCompleted && (
          <div className={\`px-8 pb-8 \${footerClassName}\`}>
            <div
              className={\`mt-10 flex \${
                currentStep !== 1 ? "justify-between" : "justify-end"
              }\`}
            >
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  className={\`duration-350 rounded px-2 py-1 transition \${
                    currentStep === 1
                      ? "pointer-events-none opacity-50 text-neutral-400"
                      : "text-neutral-400 hover:text-neutral-700"
                  }\`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              <button
                onClick={isLastStep ? handleComplete : handleNext}
                className="duration-350 flex items-center justify-center rounded-full bg-green-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-green-600 active:bg-green-700"
                {...nextButtonProps}
              >
                {isLastStep ? "Complete" : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface StepContentWrapperProps {
  isCompleted: boolean;
  currentStep: number;
  direction: number;
  children: ReactNode;
  className?: string;
}

function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className = "",
}: StepContentWrapperProps) {
  const [parentHeight, setParentHeight] = useState<number>(0);

  return (
    <motion.div
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: "spring", duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition
            key={currentStep}
            direction={direction}
            onHeightReady={(h) => setParentHeight(h)}
          >
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface SlideTransitionProps {
  children: ReactNode;
  direction: number;
  onHeightReady: (height: number) => void;
}

function SlideTransition({
  children,
  direction,
  onHeightReady,
}: SlideTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(containerRef.current.offsetHeight);
    }
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: "absolute", left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants: Variants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0,
  }),
};

interface StepProps {
  children: ReactNode;
}

export function Step({ children }: StepProps) {
  return <div className="px-8">{children}</div>;
}

interface StepIndicatorProps {
  step: number;
  currentStep: number;
  onClickStep: (clicked: number) => void;
  disableStepIndicators?: boolean;
}

function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators = false,
}: StepIndicatorProps) {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
        ? "inactive"
        : "complete";

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) {
      onClickStep(step);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className="relative cursor-pointer outline-none focus:outline-none"
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: "#222", color: "#a3a3a3" },
          active: { scale: 1, backgroundColor: "#5227FF", color: "#5227FF" },
          complete: { scale: 1, backgroundColor: "#5227FF", color: "#3b82f6" },
        }}
        transition={{ duration: 0.3 }}
        className="flex h-8 w-8 items-center justify-center rounded-full font-semibold"
      >
        {status === "complete" ? (
          <CheckIcon className="h-4 w-4 text-black" />
        ) : status === "active" ? (
          <div className="h-3 w-3 rounded-full bg-[#060010]" />
        ) : (
          <span className="text-sm">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

interface StepConnectorProps {
  isComplete: boolean;
}

function StepConnector({ isComplete }: StepConnectorProps) {
  const lineVariants: Variants = {
    incomplete: { width: 0, backgroundColor: "transparent" },
    complete: { width: "100%", backgroundColor: "#5227FF" },
  };

  return (
    <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-600">
      <motion.div
        className="absolute left-0 top-0 h-full"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? "complete" : "incomplete"}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {}

function CheckIcon(props: CheckIconProps) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.1,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
`,P={...M("Components/Stepper"),installation:"npm install motion",usage:`import Stepper, { Step } from './Stepper';
  
<Stepper
  initialStep={1}
  onStepChange={(step) => {
    console.log(step);
  }}
  onFinalStepCompleted={() => console.log("All steps completed!")}
  backButtonText="Previous"
  nextButtonText="Next"
>
  <Step>
    <h2>Welcome to the React Bits stepper!</h2>
    <p>Check out the next step!</p>
  </Step>
  <Step>
    <h2>Step 2</h2>
    <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
    <p>Custom step content!</p>
  </Step>
  <Step>
    <h2>How about an input?</h2>
    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
  </Step>
  <Step>
    <h2>Final Step</h2>
    <p>You made it!</p>
  </Step>
</Stepper>`,code:an,css:sn,tailwind:cn,tsCode:pn,tsTailwind:ln},Sn=()=>{const[e,i]=c.useState(""),[o,r]=c.useState(1),s=[{name:"children",type:"ReactNode",default:"—",description:"The Step components (or any custom content) rendered inside the stepper."},{name:"initialStep",type:"number",default:"1",description:"The first step to display when the stepper is initialized."},{name:"onStepChange",type:"(step: number) => void",default:"() => {}",description:"Callback fired whenever the step changes."},{name:"onFinalStepCompleted",type:"() => void",default:"() => {}",description:"Callback fired when the stepper completes its final step."},{name:"stepCircleContainerClassName",type:"string",default:"",description:"Custom class name for the container holding the step indicators."},{name:"stepContainerClassName",type:"string",default:"",description:"Custom class name for the row holding the step circles/connectors."},{name:"contentClassName",type:"string",default:"",description:"Custom class name for the step’s main content container."},{name:"footerClassName",type:"string",default:"",description:"Custom class name for the footer area containing navigation buttons."},{name:"backButtonProps",type:"object",default:"{}",description:"Extra props passed to the Back button."},{name:"nextButtonProps",type:"object",default:"{}",description:"Extra props passed to the Next/Complete button."},{name:"backButtonText",type:"string",default:'"Back"',description:"Text for the Back button."},{name:"nextButtonText",type:"string",default:'"Continue"',description:"Text for the Next button when not on the last step."},{name:"disableStepIndicators",type:"boolean",default:"false",description:"Disables click interaction on step indicators."},{name:"renderStepIndicator",type:"{}",default:"undefined",description:"Renders a custom step indicator."}];return n.jsxs(O,{children:[n.jsxs(Y,{children:[n.jsx(_,{position:"relative",className:"demo-container",h:500,overflow:"hidden",children:n.jsxs(U,{initialStep:o,onStepChange:a=>{a===4?(e?f(`👋🏻 Hello ${e}!`):f("You didn't provide your name :("),r(4)):(f(`✅ Step ${a}!`),r(a))},onFinalStepCompleted:()=>f("✅ All steps completed!"),nextButtonProps:{disabled:o===3&&!e},disableStepIndicators:o===3&&!e,backButtonText:"Previous",nextButtonText:"Next",children:[n.jsxs(C,{children:[n.jsx(w,{color:"#5227FF",fontSize:"1.2rem",fontWeight:600,children:"Welcome to the React Bits stepper!"}),n.jsx("p",{children:"Check out the next step!"})]}),n.jsxs(C,{children:[n.jsx("h2",{children:"Step 2"}),n.jsx("img",{style:{height:"100px",width:"100%",objectFit:"cover",objectPosition:"center -70px",borderRadius:"15px",marginTop:"1em"},src:"https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"}),n.jsx("p",{style:{marginTop:"1em"},children:"Custom step content!"})]}),n.jsxs(C,{children:[n.jsx("h2",{children:"How about an input?"}),n.jsx(G,{value:e,onChange:a=>i(a.target.value),mt:2,placeholder:"Your name?"})]}),n.jsxs(C,{children:[n.jsx(w,{color:"#5227FF",fontSize:"1.2rem",fontWeight:600,children:"Final Step"}),n.jsx("p",{children:"You made it!"})]})]})}),n.jsx(z,{data:s}),n.jsx(Q,{dependencyList:["motion"]})]}),n.jsx(J,{children:n.jsx(X,{codeObject:P})}),n.jsx(q,{children:n.jsx(K,{...P})})]})};export{Sn as default};
