import{g as Q,r as n,j as e,B as a,F as U,T as b,bZ as Y}from"./index-j7DW7U0N.js";import{T as X,P as Z,f as J,g as K,a as ee,C as ne,b as te,c as re,d as se}from"./PropTable-Baf4PZpP.js";import{L as ie}from"./lenis-DmOnhAnd.js";import{C as ae}from"./Customize-Dq9g9yhm.js";import{P as le}from"./PreviewSelect-BhKIbQB2.js";import{P as s}from"./PreviewSlider-D0sSZbsU.js";import{l as oe}from"./react-bits-logo-small-CT1j6F_f.js";import{D as ce}from"./DarkVeil-BeSqKBMQ.js";import"./field-BmHOm1Rn.js";import"./Vec2-Cf1C3GIc.js";const ue=`import { useEffect, useRef, useId } from "react";
import "./GlassSurface.css";

const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = "R",
  yChannel = "G",
  mixBlendMode = "difference",
  className = "",
  style = {},
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = \`glass-filter-\${uniqueId}\`;
  const redGradId = \`red-grad-\${uniqueId}\`;
  const blueGradId = \`blue-grad-\${uniqueId}\`;
  
  const containerRef = useRef(null);
  const feImageRef = useRef(null);
  const redChannelRef = useRef(null);
  const greenChannelRef = useRef(null);
  const blueChannelRef = useRef(null);
  const gaussianBlurRef = useRef(null);

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = \`
      <svg viewBox="0 0 \${actualWidth} \${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="\${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="\${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${redGradId})" />
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${blueGradId})" style="mix-blend-mode: \${mixBlendMode}" />
        <rect x="\${edgeSize}" y="\${edgeSize}" width="\${actualWidth - edgeSize * 2}" height="\${actualHeight - edgeSize * 2}" rx="\${borderRadius}" fill="hsl(0 0% \${brightness}% / \${opacity})" style="filter:blur(\${blur}px)" />
      </svg>
    \`;

    return \`data:image/svg+xml,\${encodeURIComponent(svgContent)}\`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute("href", generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset },
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute(
          "scale",
          (distortionScale + offset).toString()
        );
        ref.current.setAttribute("xChannelSelector", xChannel);
        ref.current.setAttribute("yChannelSelector", yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute("stdDeviation", displace.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  const supportsSVGFilters = () => {
    const isWebkit =
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement("div");
    div.style.backdropFilter = \`url(#\${filterId})\`;
    return div.style.backdropFilter !== "";
  };

  const containerStyle = {
    ...style,
    width: typeof width === "number" ? \`\${width}px\` : width,
    height: typeof height === "number" ? \`\${height}px\` : height,
    borderRadius: \`\${borderRadius}px\`,
    "--glass-frost": backgroundOpacity,
    "--glass-saturation": saturation,
    "--filter-id": \`url(#\${filterId})\`,
  };

  return (
    <div
      ref={containerRef}
      className={\`glass-surface \${supportsSVGFilters() ? "glass-surface--svg" : "glass-surface--fallback"} \${className}\`}
      style={containerStyle}
    >
      <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feImage
              ref={feImageRef}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="map"
            />

            <feDisplacementMap
              ref={redChannelRef}
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap
              ref={blueChannelRef}
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur
              ref={gaussianBlurRef}
              in="output"
              stdDeviation="0.7"
            />
          </filter>
        </defs>
      </svg>

      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
`,de=`.glass-surface {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity 0.26s ease-out;
}

.glass-surface__filter {
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: -1;
}

.glass-surface__content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: inherit;
  position: relative;
  z-index: 1;
}

.glass-surface--svg {
  background: light-dark(hsl(0 0% 100% / var(--glass-frost, 0)),
      hsl(0 0% 0% / var(--glass-frost, 0)));
  backdrop-filter: var(--filter-id, url(#glass-filter)) saturate(var(--glass-saturation, 1));
  box-shadow:
    0 0 2px 1px light-dark(color-mix(in oklch, black, transparent 85%),
      color-mix(in oklch, white, transparent 65%)) inset,
    0 0 10px 4px light-dark(color-mix(in oklch, black, transparent 90%),
      color-mix(in oklch, white, transparent 85%)) inset,
    0px 4px 16px rgba(17, 17, 26, 0.05),
    0px 8px 24px rgba(17, 17, 26, 0.05),
    0px 16px 56px rgba(17, 17, 26, 0.05),
    0px 4px 16px rgba(17, 17, 26, 0.05) inset,
    0px 8px 24px rgba(17, 17, 26, 0.05) inset,
    0px 16px 56px rgba(17, 17, 26, 0.05) inset;
}

.glass-surface--fallback {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px) saturate(1.8) brightness(1.1);
  -webkit-backdrop-filter: blur(12px) saturate(1.8) brightness(1.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px 0 rgba(31, 38, 135, 0.2),
    0 2px 16px 0 rgba(31, 38, 135, 0.1),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 0 rgba(255, 255, 255, 0.2);
}

@media (prefers-color-scheme: dark) {
  .glass-surface--fallback {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px) saturate(1.8) brightness(1.2);
    -webkit-backdrop-filter: blur(12px) saturate(1.8) brightness(1.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .glass-surface--fallback {
    background: rgba(255, 255, 255, 0.4);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.3);
  }

  .glass-surface--fallback::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.15);
    border-radius: inherit;
    z-index: -1;
  }
}

@supports not (backdrop-filter: blur(10px)) {
  @media (prefers-color-scheme: dark) {
    .glass-surface--fallback {
      background: rgba(0, 0, 0, 0.4);
    }

    .glass-surface--fallback::before {
      background: rgba(255, 255, 255, 0.05);
    }
  }
}

.glass-surface:focus-visible {
  outline: 2px solid light-dark(#007AFF, #0A84FF);
  outline-offset: 2px;
}`,fe=`import { useEffect, useRef, useState, useId } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handler = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDark;
};

const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = "R",
  yChannel = "G",
  mixBlendMode = "difference",
  className = "",
  style = {},
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = \`glass-filter-\${uniqueId}\`;
  const redGradId = \`red-grad-\${uniqueId}\`;
  const blueGradId = \`blue-grad-\${uniqueId}\`;
  
  const containerRef = useRef < HTMLDivElement > (null);
  const feImageRef = useRef < SVGFEImageElement > (null);
  const redChannelRef = useRef < SVGFEDisplacementMapElement > (null);
  const greenChannelRef = useRef < SVGFEDisplacementMapElement > (null);
  const blueChannelRef = useRef < SVGFEDisplacementMapElement > (null);
  const gaussianBlurRef = useRef < SVGFEGaussianBlurElement > (null);

  const isDarkMode = useDarkMode();

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = \`
      <svg viewBox="0 0 \${actualWidth} \${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="\${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="\${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${redGradId})" />
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${blueGradId})" style="mix-blend-mode: \${mixBlendMode}" />
        <rect x="\${edgeSize}" y="\${edgeSize}" width="\${actualWidth - edgeSize * 2}" height="\${actualHeight - edgeSize * 2}" rx="\${borderRadius}" fill="hsl(0 0% \${brightness}% / \${opacity})" style="filter:blur(\${blur}px)" />
      </svg>
    \`;

    return \`data:image/svg+xml,\${encodeURIComponent(svgContent)}\`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute("href", generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset },
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute(
          "scale",
          (distortionScale + offset).toString()
        );
        ref.current.setAttribute("xChannelSelector", xChannel);
        ref.current.setAttribute("yChannelSelector", yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute("stdDeviation", displace.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  const supportsSVGFilters = () => {
    const isWebkit =
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement("div");
    div.style.backdropFilter = \`url(#\${filterId})\`;
    return div.style.backdropFilter !== "";
  };

  const supportsBackdropFilter = () => {
    if (typeof window === "undefined") return false;
    return CSS.supports("backdrop-filter", "blur(10px)");
  };

  const getContainerStyles = () => {
    const baseStyles = {
      ...style,
      width: typeof width === "number" ? \`\${width}px\` : width,
      height: typeof height === "number" ? \`\${height}px\` : height,
      borderRadius: \`\${borderRadius}px\`,
      "--glass-frost": backgroundOpacity,
      "--glass-saturation": saturation,
    };

    const svgSupported = supportsSVGFilters();
    const backdropFilterSupported = supportsBackdropFilter();

    if (svgSupported) {
      return {
        ...baseStyles,
        background: isDarkMode
          ? \`hsl(0 0% 0% / \${backgroundOpacity})\`
          : \`hsl(0 0% 100% / \${backgroundOpacity})\`,
        backdropFilter: \`url(#\${filterId}) saturate(\${saturation})\`,
        boxShadow: isDarkMode
          ? \`0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
             0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset\`
          : \`0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
             0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset\`,
      };
    } else {
      if (isDarkMode) {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)\`,
          };
        } else {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
            WebkitBackdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)\`,
          };
        }
      } else {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)\`,
          };
        } else {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
            WebkitBackdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: \`0 8px 32px 0 rgba(31, 38, 135, 0.2),
                        0 2px 16px 0 rgba(31, 38, 135, 0.1),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)\`,
          };
        }
      }
    }
  };

  const glassSurfaceClasses =
    "relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out";

  const focusVisibleClasses = isDarkMode
    ? "focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2"
    : "focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2";

  return (
    <div
      ref={containerRef}
      className={\`\${glassSurfaceClasses} \${focusVisibleClasses} \${className}\`}
      style={getContainerStyles()}
    >
      <svg
        className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feImage
              ref={feImageRef}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="map"
            />

            <feDisplacementMap
              ref={redChannelRef}
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap
              ref={blueChannelRef}
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur
              ref={gaussianBlurRef}
              in="output"
              stdDeviation="0.7"
            />
          </filter>
        </defs>
      </svg>

      <div className="w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
`,pe=`import React, { useEffect, useRef, useId } from "react";
import "./GlassSurface.css";

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: "R" | "G" | "B";
  yChannel?: "R" | "G" | "B";
  mixBlendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | "plus-darker"
    | "plus-lighter";
  className?: string;
  style?: React.CSSProperties;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = "R",
  yChannel = "G",
  mixBlendMode = "difference",
  className = "",
  style = {},
}) => {
  const id = useId();
  const filterId = \`glass-filter-\${id}\`;
  const redGradId = \`red-grad-\${id}\`;
  const blueGradId = \`blue-grad-\${id}\`;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = \`
      <svg viewBox="0 0 \${actualWidth} \${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="\${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="\${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${redGradId})" />
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${blueGradId})" style="mix-blend-mode: \${mixBlendMode}" />
        <rect x="\${edgeSize}" y="\${edgeSize}" width="\${actualWidth - edgeSize * 2}" height="\${actualHeight - edgeSize * 2}" rx="\${borderRadius}" fill="hsl(0 0% \${brightness}% / \${opacity})" style="filter:blur(\${blur}px)" />
      </svg>
    \`;

    return \`data:image/svg+xml,\${encodeURIComponent(svgContent)}\`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute("href", generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset },
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute(
          "scale",
          (distortionScale + offset).toString()
        );
        ref.current.setAttribute("xChannelSelector", xChannel);
        ref.current.setAttribute("yChannelSelector", yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute("stdDeviation", displace.toString());
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
  }, [width, height]);

  const supportsSVGFilters = () => {
    const isWebkit =
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement("div");
    div.style.backdropFilter = \`url(#\${filterId})\`;
    return div.style.backdropFilter !== "";
  };

  const containerStyle: React.CSSProperties = {
    ...style,
    width: typeof width === "number" ? \`\${width}px\` : width,
    height: typeof height === "number" ? \`\${height}px\` : height,
    borderRadius: \`\${borderRadius}px\`,
    "--glass-frost": backgroundOpacity,
    "--glass-saturation": saturation,
    "--filter-id": \`url(#\${filterId})\`,
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={\`glass-surface \${supportsSVGFilters() ? "glass-surface--svg" : "glass-surface--fallback"} \${className}\`}
      style={containerStyle}
    >
      <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feImage
              ref={feImageRef}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="map"
            />

            <feDisplacementMap
              ref={redChannelRef}
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap
              ref={blueChannelRef}
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur
              ref={gaussianBlurRef}
              in="output"
              stdDeviation="0.7"
            />
          </filter>
        </defs>
      </svg>

      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
`,he=`import React, { useEffect, useRef, useState, useId } from "react";

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: "R" | "G" | "B";
  yChannel?: "R" | "G" | "B";
  mixBlendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | "plus-darker"
    | "plus-lighter";
  className?: string;
  style?: React.CSSProperties;
}

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDark;
};

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = "R",
  yChannel = "G",
  mixBlendMode = "difference",
  className = "",
  style = {},
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = \`glass-filter-\${uniqueId}\`;
  const redGradId = \`red-grad-\${uniqueId}\`;
  const blueGradId = \`blue-grad-\${uniqueId}\`;

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

  const isDarkMode = useDarkMode();

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = \`
      <svg viewBox="0 0 \${actualWidth} \${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="\${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="\${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${redGradId})" />
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${blueGradId})" style="mix-blend-mode: \${mixBlendMode}" />
        <rect x="\${edgeSize}" y="\${edgeSize}" width="\${actualWidth - edgeSize * 2}" height="\${actualHeight - edgeSize * 2}" rx="\${borderRadius}" fill="hsl(0 0% \${brightness}% / \${opacity})" style="filter:blur(\${blur}px)" />
      </svg>
    \`;

    return \`data:image/svg+xml,\${encodeURIComponent(svgContent)}\`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute("href", generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset },
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute(
          "scale",
          (distortionScale + offset).toString()
        );
        ref.current.setAttribute("xChannelSelector", xChannel);
        ref.current.setAttribute("yChannelSelector", yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute("stdDeviation", displace.toString());
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
  }, [width, height]);

  const supportsSVGFilters = () => {
    const isWebkit =
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement("div");
    div.style.backdropFilter = \`url(#\${filterId})\`;
    return div.style.backdropFilter !== "";
  };

  const supportsBackdropFilter = () => {
    if (typeof window === "undefined") return false;
    return CSS.supports("backdrop-filter", "blur(10px)");
  };

  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      ...style,
      width: typeof width === "number" ? \`\${width}px\` : width,
      height: typeof height === "number" ? \`\${height}px\` : height,
      borderRadius: \`\${borderRadius}px\`,
      "--glass-frost": backgroundOpacity,
      "--glass-saturation": saturation,
    } as React.CSSProperties;

    const svgSupported = supportsSVGFilters();
    const backdropFilterSupported = supportsBackdropFilter();

    if (svgSupported) {
      return {
        ...baseStyles,
        background: isDarkMode
          ? \`hsl(0 0% 0% / \${backgroundOpacity})\`
          : \`hsl(0 0% 100% / \${backgroundOpacity})\`,
        backdropFilter: \`url(#\${filterId}) saturate(\${saturation})\`,
        boxShadow: isDarkMode
          ? \`0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
             0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset\`
          : \`0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
             0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset\`,
      };
    } else {
      if (isDarkMode) {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)\`,
          };
        } else {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
            WebkitBackdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)\`,
          };
        }
      } else {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)\`,
          };
        } else {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
            WebkitBackdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: \`0 8px 32px 0 rgba(31, 38, 135, 0.2),
                        0 2px 16px 0 rgba(31, 38, 135, 0.1),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)\`,
          };
        }
      }
    }
  };

  const glassSurfaceClasses =
    "relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out";

  const focusVisibleClasses = isDarkMode
    ? "focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2"
    : "focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2";

  return (
    <div
      ref={containerRef}
      className={\`\${glassSurfaceClasses} \${focusVisibleClasses} \${className}\`}
      style={getContainerStyles()}
    >
      <svg
        className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feImage
              ref={feImageRef}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="map"
            />

            <feDisplacementMap
              ref={redChannelRef}
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap
              ref={blueChannelRef}
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur
              ref={gaussianBlurRef}
              in="output"
              stdDeviation="0.7"
            />
          </filter>
        </defs>
      </svg>

      <div className="w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
`,q={...Q("Components/GlassSurface"),usage:`import GlassSurface from './GlassSurface'

// Basic usage
<GlassSurface 
  width={300} 
  height={200}
  borderRadius={24}
  className="my-custom-class"
>
  <h2>Glass Surface Content</h2>
</GlassSurface>

// Custom displacement effects
<GlassSurface
  displace={15}
  distortionScale={-150}
  redOffset={5}
  greenOffset={15}
  blueOffset={25}
  brightness={60}
  opacity={0.8}
  mixBlendMode="screen"
>
  <span>Advanced Glass Distortion</span>
</GlassSurface>`,code:ue,css:de,tailwind:fe,tsCode:pe,tsTailwind:he},N=({children:h,width:d=200,height:l=80,borderRadius:c=20,borderWidth:G=.07,brightness:x=50,opacity:M=.93,blur:m=11,displace:I=0,backgroundOpacity:B=0,saturation:T=1,distortionScale:v=-180,redOffset:O=0,greenOffset:y=10,blueOffset:D=20,xChannel:R="R",yChannel:F="G",mixBlendMode:S="difference",className:V="",style:E={}})=>{const w=n.useId().replace(/:/g,"-"),g=`glass-filter-${w}`,j=`red-grad-${w}`,$=`blue-grad-${w}`,u=n.useRef(null),k=n.useRef(null),z=n.useRef(null),W=n.useRef(null),f=n.useRef(null),A=n.useRef(null),p=()=>{var P;const t=(P=u.current)==null?void 0:P.getBoundingClientRect(),r=(t==null?void 0:t.width)||400,i=(t==null?void 0:t.height)||200,H=Math.min(r,i)*(G*.5),L=`
      <svg viewBox="0 0 ${r} ${i}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${j}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${$}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${r}" height="${i}" fill="black"></rect>
        <rect x="0" y="0" width="${r}" height="${i}" rx="${c}" fill="url(#${j})" />
        <rect x="0" y="0" width="${r}" height="${i}" rx="${c}" fill="url(#${$})" style="mix-blend-mode: ${S}" />
        <rect x="${H}" y="${H}" width="${r-H*2}" height="${i-H*2}" rx="${c}" fill="hsl(0 0% ${x}% / ${M})" style="filter:blur(${m}px)" />
      </svg>
    `;return`data:image/svg+xml,${encodeURIComponent(L)}`},o=()=>{var t;(t=k.current)==null||t.setAttribute("href",p())};n.useEffect(()=>{var t;o(),[{ref:z,offset:O},{ref:W,offset:y},{ref:f,offset:D}].forEach(({ref:r,offset:i})=>{r.current&&(r.current.setAttribute("scale",(v+i).toString()),r.current.setAttribute("xChannelSelector",R),r.current.setAttribute("yChannelSelector",F))}),(t=A.current)==null||t.setAttribute("stdDeviation",I.toString())},[d,l,c,G,x,M,m,I,v,O,y,D,R,F,S]),n.useEffect(()=>{if(!u.current)return;const t=new ResizeObserver(()=>{setTimeout(o,0)});return t.observe(u.current),()=>{t.disconnect()}},[]),n.useEffect(()=>{if(!u.current)return;const t=new ResizeObserver(()=>{setTimeout(o,0)});return t.observe(u.current),()=>{t.disconnect()}},[]),n.useEffect(()=>{setTimeout(o,0)},[d,l]);const C=()=>{const t=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),r=/Firefox/.test(navigator.userAgent);if(t||r)return!1;const i=document.createElement("div");return i.style.backdropFilter=`url(#${g})`,i.style.backdropFilter!==""},_={...E,width:typeof d=="number"?`${d}px`:d,height:typeof l=="number"?`${l}px`:l,borderRadius:`${c}px`,"--glass-frost":B,"--glass-saturation":T,"--filter-id":`url(#${g})`};return e.jsxs("div",{ref:u,className:`glass-surface ${C()?"glass-surface--svg":"glass-surface--fallback"} ${V}`,style:_,children:[e.jsx("svg",{className:"glass-surface__filter",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("defs",{children:e.jsxs("filter",{id:g,colorInterpolationFilters:"sRGB",x:"0%",y:"0%",width:"100%",height:"100%",children:[e.jsx("feImage",{ref:k,x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none",result:"map"}),e.jsx("feDisplacementMap",{ref:z,in:"SourceGraphic",in2:"map",id:"redchannel",result:"dispRed"}),e.jsx("feColorMatrix",{in:"dispRed",type:"matrix",values:`1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0`,result:"red"}),e.jsx("feDisplacementMap",{ref:W,in:"SourceGraphic",in2:"map",id:"greenchannel",result:"dispGreen"}),e.jsx("feColorMatrix",{in:"dispGreen",type:"matrix",values:`0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0`,result:"green"}),e.jsx("feDisplacementMap",{ref:f,in:"SourceGraphic",in2:"map",id:"bluechannel",result:"dispBlue"}),e.jsx("feColorMatrix",{in:"dispBlue",type:"matrix",values:`0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0`,result:"blue"}),e.jsx("feBlend",{in:"red",in2:"green",mode:"screen",result:"rg"}),e.jsx("feBlend",{in:"rg",in2:"blue",mode:"screen",result:"output"}),e.jsx("feGaussianBlur",{ref:A,in:"output",stdDeviation:"0.7"})]})})}),e.jsx("div",{className:"glass-surface__content",children:h})]})},ke=()=>{const[h,d]=n.useState("scroll"),l=n.useRef(null),[c,G]=n.useState(50),[x,M]=n.useState(.07),[m,I]=n.useState(50),[B,T]=n.useState(.93),[v,O]=n.useState(11),[y,D]=n.useState(.5),[R,F]=n.useState(.1),[S,V]=n.useState(1),[E,w]=n.useState(-180),[g,j]=n.useState(0),[$,u]=n.useState(10),[k,z]=n.useState(20),W=[{value:"scroll",label:"Scroll"},{value:"landingPage",label:"Landing Page"}],f={borderRadius:c,borderWidth:x,brightness:m,opacity:B,blur:v,backgroundOpacity:R,saturation:S,distortionScale:E,redOffset:g,greenOffset:$,blueOffset:k,displace:y},A=[{name:"children",type:"React.ReactNode",default:"undefined",description:"Content to display inside the glass surface"},{name:"width",type:"number | string",default:"200",description:"Width of the glass surface (pixels or CSS value like '100%')"},{name:"height",type:"number | string",default:"80",description:"Height of the glass surface (pixels or CSS value like '100vh')"},{name:"borderRadius",type:"number",default:"20",description:"Border radius in pixels"},{name:"borderWidth",type:"number",default:"0.07",description:"Border width factor for displacement map"},{name:"brightness",type:"number",default:"50",description:"Brightness percentage for displacement map"},{name:"opacity",type:"number",default:"0.93",description:"Opacity of displacement map elements"},{name:"blur",type:"number",default:"11",description:"Input blur amount in pixels"},{name:"displace",type:"number",default:"0",description:"Output blur (stdDeviation)"},{name:"backgroundOpacity",type:"number",default:"0",description:"Background frost opacity (0-1)"},{name:"saturation",type:"number",default:"1",description:"Backdrop filter saturation factor"},{name:"distortionScale",type:"number",default:"-180",description:"Main displacement scale"},{name:"redOffset",type:"number",default:"0",description:"Red channel extra displacement offset"},{name:"greenOffset",type:"number",default:"10",description:"Green channel extra displacement offset"},{name:"blueOffset",type:"number",default:"20",description:"Blue channel extra displacement offset"},{name:"xChannel",type:"'R' | 'G' | 'B'",default:"'R'",description:"X displacement channel selector"},{name:"yChannel",type:"'R' | 'G' | 'B'",default:"'G'",description:"Y displacement channel selector"},{name:"mixBlendMode",type:"BlendMode",default:"'difference'",description:"Mix blend mode for displacement map"},{name:"className",type:"string",default:"''",description:"Additional CSS class names"},{name:"style",type:"React.CSSProperties",default:"{}",description:"Inline styles object"}];return n.useEffect(()=>{if(!l.current)return;const p=new ie({wrapper:l.current,content:l.current.firstElementChild,duration:1.2,easing:C=>Math.min(1,1.001-Math.pow(2,-10*C)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:2,infinite:!1});function o(C){p.raf(C),requestAnimationFrame(o)}return requestAnimationFrame(o),()=>{p.destroy()}},[h]),e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsxs(a,{ref:l,position:"relative",className:"demo-container",h:600,p:0,css:{overflow:"hidden"},children:[h==="scroll"&&e.jsxs(e.Fragment,{children:[e.jsx(N,{width:360,height:100,...f,style:{position:"sticky",top:"50%",transform:"translateY(-50%)",zIndex:10}}),e.jsxs(U,{gap:16,alignItems:"center",direction:"column",position:"absolute",top:0,left:0,right:0,children:[e.jsx(b,{position:"absolute",left:"50%",textAlign:"center",whiteSpace:"nowrap",top:"3em",transform:"translate(-50%, -50%)",fontSize:"2.6rem",fontWeight:900,zIndex:0,color:"#271E37",children:"Try scrolling."}),e.jsx(a,{height:"240px",width:"100%"}),[{src:"https://images.unsplash.com/photo-1500673587002-1d2548cfba1b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"The Summer Of Glass"},{src:"https://images.unsplash.com/photo-1594576547505-1be67997401e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"Can Hold Any Content"},{src:"https://images.unsplash.com/photo-1543127172-4b33cb699e35?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"Has Built-In Fallback"}].map((p,o)=>e.jsxs(a,{position:"relative",children:[e.jsx(Y,{w:"500px",borderRadius:"20px",objectFit:"cover",src:p.src,filter:"grayscale(100%)"}),e.jsx(b,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontWeight:900,textAlign:"center",lineHeight:"100%",fontSize:"3rem",minW:"300px",zIndex:5,mixBlendMode:"overlay",children:p.text})]},o)),e.jsx(a,{height:"240px",width:"100%"})]})]}),h==="landingPage"&&e.jsxs(e.Fragment,{children:[e.jsx(a,{w:"100%",h:"100%",position:"absolute",top:0,left:0,zIndex:0,filter:"grayscale(100%)",mixBlendMode:"screen",children:e.jsx(ce,{speed:2,hueShift:180,noiseIntensity:.05})}),e.jsx(a,{position:"absolute",top:"2em",left:0,width:"100%",height:"60px",zIndex:0,pointerEvents:"none",children:e.jsxs(N,{className:"custom-glass-surface",width:"90%",height:60,...f,children:[e.jsx("img",{src:oe,alt:"React Bits Logo",style:{height:"24px",borderRadius:"50px"}}),e.jsx(a,{display:{base:"flex",md:"none"},alignItems:"center",color:"white",children:e.jsx(J,{size:20})}),e.jsxs(a,{display:{base:"none",md:"flex"},alignItems:"center",gap:6,fontWeight:600,children:[e.jsx(b,{color:"white",fontSize:"14px",display:"flex",alignItems:"center",children:"Home"}),e.jsx(b,{color:"white",fontSize:"14px",display:"flex",alignItems:"center",children:"Docs"})]})]})}),e.jsxs(a,{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",height:"100%",zIndex:1,pointerEvents:"none",children:[e.jsxs(N,{height:40,width:160,...f,children:[e.jsx(K,{}),e.jsx(b,{ml:1,children:"Super Shiny"})]}),e.jsx(b,{textShadow:"0 0 16px rgba(0, 0, 0, 0.5)",mt:4,color:"white",fontSize:"clamp(2rem, 4vw, 2.6rem)",lineHeight:"1.2",textAlign:"center",letterSpacing:"-2px",maxWidth:"18ch",fontWeight:"bold",children:"The summer of glass, thanks a lot Apple!"}),e.jsxs(a,{display:"flex",gap:4,mt:8,alignItems:"center",children:[e.jsx(a,{as:"button",px:10,py:3,bg:"white",color:"black",borderRadius:"50px",fontSize:"14px",fontWeight:"500",border:"none",cursor:"pointer",_hover:{bg:"gray.100",transform:"translateY(-1px)"},transition:"all 0.2s ease",children:"Get Started"}),e.jsx(N,{height:44.98,width:154.31,borderRadius:100,...f,children:"Learn More"})]})]})]})]}),e.jsxs(ae,{children:[e.jsx(le,{title:"Example",options:W,value:h,onChange:d,width:160}),e.jsx(s,{title:"Border Radius",min:0,max:50,step:1,value:c,valueUnit:"px",onChange:G}),e.jsx(s,{title:"Background Opacity",min:0,max:1,step:.01,value:R,onChange:F}),e.jsx(s,{title:"Saturation",min:0,max:3,step:.1,value:S,onChange:V}),e.jsx(s,{title:"Border Width",min:0,max:.2,step:.01,value:x,onChange:M}),e.jsx(s,{title:"Brightness",min:0,max:100,step:1,value:m,valueUnit:"%",onChange:I}),e.jsx(s,{title:"Opacity",min:0,max:1,step:.01,value:B,onChange:T}),e.jsx(s,{title:"Blur",min:0,max:30,step:1,value:v,valueUnit:"px",onChange:O}),e.jsx(s,{title:"Displace",min:0,max:5,step:.1,value:y,onChange:D}),e.jsx(s,{title:"Distortion Scale",min:-300,max:300,step:10,value:E,onChange:w}),e.jsx(s,{title:"Red Offset",min:-50,max:50,step:1,value:g,onChange:j}),e.jsx(s,{title:"Green Offset",min:-50,max:50,step:1,value:$,onChange:u}),e.jsx(s,{title:"Blue Offset",min:-50,max:50,step:1,value:k,onChange:z})]}),e.jsx(ee,{data:A})]}),e.jsx(ne,{children:e.jsx(te,{codeObject:q})}),e.jsx(re,{children:e.jsx(se,{...q})})]})};export{ke as default};
