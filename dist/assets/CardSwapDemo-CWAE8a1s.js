import{g as F,r as t,ao as $,a as A,j as n,B as p,T as b,an as M,b as Y}from"./index-j7DW7U0N.js";import{T as X,P as V,a as B,C as _,b as W,c as q,d as J}from"./PropTable-Baf4PZpP.js";import{a as G,b as K,c as Q}from"./index-D14sruxH.js";import{C as U}from"./Customize-Dq9g9yhm.js";import{D as Z}from"./Dependencies-BSh7s3YA.js";import{P as z}from"./PreviewSlider-D0sSZbsU.js";import{P as nn}from"./PreviewSwitch-_xo3rdWG.js";import{u as en}from"./useForceRerender-LUtjsLCb.js";const tn=`import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

export const Card = forwardRef(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={\`card \${customClass ?? ""} \${rest.className ?? ""}\`.trim()}
    />
  )
);
Card.displayName = "Card";

const makeSlot = (
  i,
  distX,
  distY,
  total
) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
        ease: "elastic.out(0.6,0.9)",
        durDrop: 2,
        durMove: 2,
        durReturn: 2,
        promoteOverlap: 0.9,
        returnDelay: 0.05,
      }
      : {
        ease: "power1.inOut",
        durDrop: 0.8,
        durMove: 0.8,
        durReturn: 0.8,
        promoteOverlap: 0.45,
        returnDelay: 0.2,
      };

  const childArr = useMemo(
    () => Children.toArray(children),
    [children]
  );
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", \`-=\${config.durDrop * config.promoteOverlap}\`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          \`promote+=\${i * 0.15}\`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", \`promote+=\${config.durMove * config.returnDelay}\`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardDistance,
    verticalDistance,
    delay,
    pauseOnHover,
    skewAmount,
    easing,
  ]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
        key: i,
        ref: refs[i],
        style: { width, height, ...(child.props.style ?? {}) },
        onClick: (e) => {
          child.props.onClick?.(e);
          onCardClick?.(i);
        },
      }) : child
  );

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
`,rn=`.card-swap-container {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(5%, 20%);
  transform-origin: bottom right;

  perspective: 900px;
  overflow: visible;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 12px;
  border: 1px solid #fff;
  background: #000;

  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

@media (max-width: 768px) {
  .card-swap-container {
    transform: scale(0.75) translate(25%, 25%);
  }
}

@media (max-width: 480px) {
  .card-swap-container {
    transform: scale(0.55) translate(25%, 25%);
  }
}`,an=`import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

export const Card = forwardRef(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={\`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] \${customClass ?? ""} \${rest.className ?? ""}\`.trim()}
    />
  )
);
Card.displayName = "Card";

const makeSlot = (
  i,
  distX,
  distY,
  total
) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
        ease: "elastic.out(0.6,0.9)",
        durDrop: 2,
        durMove: 2,
        durReturn: 2,
        promoteOverlap: 0.9,
        returnDelay: 0.05,
      }
      : {
        ease: "power1.inOut",
        durDrop: 0.8,
        durMove: 0.8,
        durReturn: 0.8,
        promoteOverlap: 0.45,
        returnDelay: 0.2,
      };

  const childArr = useMemo(
    () => Children.toArray(children),
    [children]
  );
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", \`-=\${config.durDrop * config.promoteOverlap}\`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          \`promote+=\${i * 0.15}\`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", \`promote+=\${config.durMove * config.returnDelay}\`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
        key: i,
        ref: refs[i],
        style: { width, height, ...(child.props.style ?? {}) },
        onClick: (e) => {
          child.props.onClick?.(e);
          onCardClick?.(i);
        },
      }) : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
`,sn=`import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={\`card \${customClass ?? ""} \${rest.className ?? ""}\`.trim()}
    />
  )
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current!,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", \`-=\${config.durDrop * config.promoteOverlap}\`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          \`promote+=\${i * 0.15}\`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", \`promote+=\${config.durMove * config.returnDelay}\`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
`,on=`import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={\`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] \${customClass ?? ""} \${rest.className ?? ""}\`.trim()}
    />
  )
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current!,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", \`-=\${config.durDrop * config.promoteOverlap}\`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          \`promote+=\${i * 0.15}\`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", \`promote+=\${config.durMove * config.returnDelay}\`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
`,P={...F("Components/CardSwap"),installation:"npm install gsap",usage:`import CardSwap, { Card } from './CardSwap'

<div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div>`,code:tn,css:rn,tailwind:an,tsCode:sn,tsTailwind:on},I=t.forwardRef(({customClass:o,...e},l)=>n.jsx("div",{ref:l,...e,className:`card ${o??""} ${e.className??""}`.trim()}));I.displayName="Card";const j=(o,e,l,f)=>({x:o*e,y:-o*l,z:-o*e*1.5,zIndex:f-o}),ln=(o,e,l)=>A.set(o,{x:e.x,y:e.y,z:e.z,xPercent:-50,yPercent:-50,skewY:l,transformOrigin:"center center",zIndex:e.zIndex,force3D:!0}),cn=({width:o=500,height:e=400,cardDistance:l=60,verticalDistance:f=70,delay:v=5e3,pauseOnHover:C=!1,onCardClick:x,skewAmount:k=6,easing:y="elastic",children:D})=>{const s=y==="elastic"?{ease:"elastic.out(0.6,0.9)",durDrop:2,durMove:2,durReturn:2,promoteOverlap:.9,returnDelay:.05}:{ease:"power1.inOut",durDrop:.8,durMove:.8,durReturn:.8,promoteOverlap:.45,returnDelay:.2},g=t.useMemo(()=>t.Children.toArray(D),[D]),i=t.useMemo(()=>g.map(()=>$.createRef()),[g.length]),w=t.useRef(Array.from({length:g.length},(h,m)=>m)),R=t.useRef(null),a=t.useRef(),L=t.useRef(null);t.useEffect(()=>{const h=i.length;i.forEach((c,d)=>ln(c.current,j(d,l,f,h),k));const m=()=>{if(w.current.length<2)return;const[c,...d]=w.current,u=i[c].current,r=A.timeline();R.current=r,r.to(u,{y:"+=500",duration:s.durDrop,ease:s.ease}),r.addLabel("promote",`-=${s.durDrop*s.promoteOverlap}`),d.forEach((T,O)=>{const H=i[T].current,S=j(O,l,f,i.length);r.set(H,{zIndex:S.zIndex},"promote"),r.to(H,{x:S.x,y:S.y,z:S.z,duration:s.durMove,ease:s.ease},`promote+=${O*.15}`)});const E=j(i.length-1,l,f,i.length);r.addLabel("return",`promote+=${s.durMove*s.returnDelay}`),r.call(()=>{A.set(u,{zIndex:E.zIndex})},void 0,"return"),r.set(u,{x:E.x,z:E.z},"return"),r.to(u,{y:E.y,duration:s.durReturn,ease:s.ease},"return"),r.call(()=>{w.current=[...d,c]})};if(m(),a.current=window.setInterval(m,v),C){const c=L.current,d=()=>{var r;(r=R.current)==null||r.pause(),clearInterval(a.current)},u=()=>{var r;(r=R.current)==null||r.play(),a.current=window.setInterval(m,v)};return c.addEventListener("mouseenter",d),c.addEventListener("mouseleave",u),()=>{c.removeEventListener("mouseenter",d),c.removeEventListener("mouseleave",u),clearInterval(a.current)}}return()=>clearInterval(a.current)},[l,f,v,C,k,y]);const N=g.map((h,m)=>t.isValidElement(h)?t.cloneElement(h,{key:m,ref:i[m],style:{width:o,height:e,...h.props.style??{}},onClick:c=>{var d,u;(u=(d=h.props).onClick)==null||u.call(d,c),x==null||x(m)}}):h);return n.jsx("div",{ref:L,className:"card-swap-container",style:{width:o,height:e},children:N})},gn=()=>{const[o,e]=en(),[l,f]=t.useState(60),[v,C]=t.useState(70),[x,k]=t.useState(5e3),[y,D]=t.useState(6),[s,g]=t.useState("elastic"),[i,w]=t.useState(!1),R=[{name:"width",type:"number | string",default:"500",description:"Width of the card container"},{name:"height",type:"number | string",default:"400",description:"Height of the card container"},{name:"cardDistance",type:"number",default:"60",description:"X-axis spacing between cards"},{name:"verticalDistance",type:"number",default:"70",description:"Y-axis spacing between cards"},{name:"delay",type:"number",default:"5000",description:"Milliseconds between card swaps"},{name:"pauseOnHover",type:"boolean",default:"false",description:"Whether to pause animation on hover"},{name:"onCardClick",type:"(idx: number) => void",default:"undefined",description:"Callback function when a card is clicked"},{name:"skewAmount",type:"number",default:"6",description:"Degree of slope for top/bottom edges"},{name:"easing",type:"'linear' | 'elastic'",default:"'elastic'",description:"Animation easing type"},{name:"children",type:"ReactNode",default:"required",description:"Card components to display in the stack"}];return n.jsxs(X,{children:[n.jsxs(V,{children:[n.jsxs(p,{className:"demo-container",h:500,overflow:"hidden",display:"flex",flexDirection:{base:"column",lg:"row"},position:"relative",children:[n.jsxs(p,{pl:{base:0,lg:0},w:{base:"100%",lg:"50%"},h:{base:"auto",lg:"100%"},display:"flex",flexDirection:"column",justifyContent:{base:"flex-start",lg:"center"},alignItems:{base:"center",lg:"flex-start"},textAlign:{base:"center",lg:"left"},pt:{base:8,lg:0},pb:{base:4,lg:0},px:{base:4,lg:4},children:[n.jsxs(b,{fontSize:{base:"2xl",md:"3xl",lg:"4xl"},mb:4,fontWeight:500,lineHeight:1.1,pl:{base:0,lg:"6rem"},children:["Card stacks have never"," ",n.jsx(p,{as:"span",display:{base:"inline",lg:"block"},children:"looked so good"})]}),n.jsx(b,{fontSize:{base:"lg",lg:"xl"},mb:4,fontWeight:400,lineHeight:1.1,color:"#999",pl:{base:0,lg:"6rem"},children:"Just look at it go!"})]}),n.jsx(p,{w:{base:"100%",lg:"50%"},h:{base:"400px",lg:"100%"},position:"relative",children:n.jsxs(cn,{cardDistance:l,verticalDistance:v,delay:x,skewAmount:y,easing:s,pauseOnHover:i,children:[n.jsxs(I,{customClass:"one",children:[n.jsx(p,{borderBottom:"1px solid #fff",bg:"linear-gradient(to top, #271E37, #060606)",children:n.jsxs(b,{m:2,children:[n.jsx(M,{as:G,mr:2}),"Smooth"]})}),n.jsx(p,{position:"relative",p:2,children:n.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{borderRadius:"15px"},children:[n.jsx("source",{src:"https://cdn.dribbble.com/userupload/7053861/file/original-7956be57144058795db6bb24875bdab9.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})]}),n.jsxs(I,{customClass:"two",children:[n.jsx(p,{borderBottom:"1px solid #fff",bg:"linear-gradient(to top, #271E37, #060606)",children:n.jsxs(b,{m:2,children:[n.jsx(M,{as:K,mr:2}),"Reliable"]})}),n.jsx(p,{position:"relative",p:2,children:n.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{borderRadius:"15px"},children:[n.jsx("source",{src:"https://cdn.dribbble.com/userupload/7078020/file/original-b071e9063d9e3ba86a85a61b9d5a7c42.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})]}),n.jsxs(I,{customClass:"three",children:[n.jsx(p,{borderBottom:"1px solid #fff",bg:"linear-gradient(to top, #271E37, #060606)",children:n.jsxs(b,{m:2,children:[n.jsx(M,{as:Q,mr:2}),"Customizable"]})}),n.jsx(p,{position:"relative",p:2,children:n.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{borderRadius:"15px"},children:[n.jsx("source",{src:"https://cdn.dribbble.com/userupload/7098541/file/original-0b063b12ca835421580e6034368ad95a.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})]})]},o)})]}),n.jsxs(U,{children:[n.jsx(nn,{title:"Pause On Hover",isChecked:i,onChange:a=>{w(a),e()}}),n.jsx(z,{title:"Card Distance",min:30,max:100,step:5,value:l,onChange:a=>{f(a),e()}}),n.jsx(z,{title:"Vertical Distance",min:40,max:120,step:5,value:v,onChange:a=>{C(a),e()}}),n.jsx(z,{title:"Delay (ms)",min:3e3,max:8e3,step:500,value:x,onChange:a=>{k(a),e()}}),n.jsx(z,{title:"Skew Amount",min:0,max:12,step:1,value:y,onChange:a=>{D(a),e()}}),n.jsxs(Y,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{g(s==="elastic"?"linear":"elastic"),e()},children:["Easing: ",n.jsxs(b,{color:"#a1a1aa",children:[" ",s]})]})]}),n.jsx(B,{data:R}),n.jsx(Z,{dependencyList:["gsap"]})]}),n.jsx(_,{children:n.jsx(W,{codeObject:P})}),n.jsx(q,{children:n.jsx(J,{...P})})]})};export{gn as default};
