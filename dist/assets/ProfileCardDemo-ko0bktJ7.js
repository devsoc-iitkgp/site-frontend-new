import{g as Q,ao as nn,r as i,j as n,B as en,b as an}from"./index-j7DW7U0N.js";import{T as tn,P as rn,a as on,C as cn,b as sn,c as ln,d as dn}from"./PropTable-Baf4PZpP.js";import{C as pn}from"./Customize-Dq9g9yhm.js";import{u as fn}from"./useForceRerender-LUtjsLCb.js";import{P as F}from"./PreviewSwitch-_xo3rdWG.js";const mn=`import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
};

const clamp = (value, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

const round = (value, precision = 3) =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value,
  fromMin,
  fromMax,
  toMin,
  toMax
) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;

    const updateCardTransform = (
      offsetX,
      offsetY,
      card,
      wrap
    ) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": \`\${percentX}%\`,
        "--pointer-y": \`\${percentY}%\`,
        "--background-x": \`\${adjust(percentX, 0, 100, 35, 65)}%\`,
        "--background-y": \`\${adjust(percentY, 0, 100, 35, 65)}%\`,
        "--pointer-from-center": \`\${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}\`,
        "--pointer-from-top": \`\${percentY / 100}\`,
        "--pointer-from-left": \`\${percentX / 100}\`,
        "--rotate-x": \`\${round(-(centerX / 5))}deg\`,
        "--rotate-y": \`\${round(centerY / 4)}deg\`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration,
      startX,
      startY,
      card,
      wrap
    ) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

  const handleDeviceOrientation = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const { beta, gamma } = event;
      if (!beta || !gamma) return;

      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;
    const deviceOrientationHandler = handleDeviceOrientation;

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      if (typeof window.DeviceMotionEvent.requestPermission === 'function') {
        window.DeviceMotionEvent
          .requestPermission()
          .then(state => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch(err => console.error(err));
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);
    card.addEventListener("click", handleClick);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      card.removeEventListener("click", handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    enableMobileTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation,
  ]);

  const cardStyle = useMemo(
    () =>
    ({
      "--icon": iconUrl ? \`url(\${iconUrl})\` : "none",
      "--grain": grainUrl ? \`url(\${grainUrl})\` : "none",
      "--behind-gradient": showBehindGradient
        ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
        : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
    }),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div
      ref={wrapRef}
      className={\`pc-card-wrapper \${className}\`.trim()}
      style={cardStyle}
    >
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={\`\${name || "User"} avatar\`}
              loading="lazy"
              onError={(e) => {
                const target = e.target;
                target.style.display = "none";
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={\`\${name || "User"} mini avatar\`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={handleContactClick}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={\`Contact \${name || "user"}\`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
`,un=`:root {
  --pointer-x: 50%;
  --pointer-y: 50%;
  --pointer-from-center: 0;
  --pointer-from-top: 0.5;
  --pointer-from-left: 0.5;
  --card-opacity: 0.8;
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --background-x: 50%;
  --background-y: 50%;
  --grain: none;
  --icon: none;
  --behind-gradient: none;
  --inner-gradient: none;
  --sunpillar-1: hsl(2, 100%, 73%);
  --sunpillar-2: hsl(53, 100%, 69%);
  --sunpillar-3: hsl(93, 100%, 69%);
  --sunpillar-4: hsl(176, 100%, 76%);
  --sunpillar-5: hsl(228, 100%, 74%);
  --sunpillar-6: hsl(283, 100%, 73%);
  --sunpillar-clr-1: var(--sunpillar-1);
  --sunpillar-clr-2: var(--sunpillar-2);
  --sunpillar-clr-3: var(--sunpillar-3);
  --sunpillar-clr-4: var(--sunpillar-4);
  --sunpillar-clr-5: var(--sunpillar-5);
  --sunpillar-clr-6: var(--sunpillar-6);
  --card-radius: 30px;
  --terminal-primary: #00ff9d;
  --terminal-secondary: #00c8ff;
  --terminal-dark: #001422;
  --terminal-light: rgba(0, 255, 235, 0.8);
  --terminal-text: #e0ffff;
  --terminal-shadow: rgba(0, 200, 255, 0.5);
}

.pc-card-wrapper {
  perspective: 1000px;
  transform: translate3d(0, 0, 0.1px);
  position: relative;
  touch-action: none;
  transform-style: preserve-3d;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1 / 1.6;
  margin: 0 auto;
  transition: transform 0.15s ease;
  isolation: isolate;
}

.pc-card-wrapper::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: inherit;
  background-position: inherit;
  border-radius: inherit;
  transition: all 0.5s ease;
  filter: contrast(2) saturate(2) blur(36px);
  transform: scale(0.8) translate3d(0, 0, 0.1px);
  background-size: 100% 100%;
  background-image: var(--behind-gradient);
}

.pc-card-wrapper:hover,
.pc-card-wrapper.active {
  --card-opacity: 1;
}

.pc-card-wrapper:hover::before,
.pc-card-wrapper.active::before {
  filter: contrast(1) saturate(2) blur(40px) opacity(1);
  transform: scale(0.9) translate3d(0, 0, 0.1px);
}

.pc-card {
  height: 80svh;
  max-height: 540px;
  display: grid;
  aspect-ratio: 0.718;
  border-radius: var(--card-radius);
  position: relative;
  background-blend-mode: color-dodge, normal, normal, normal;
  animation: glow-bg 12s linear infinite;
  box-shadow: rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
  transition: transform 1s ease;
  transform: translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg);
  background-size: 100% 100%;
  background-position: 0 0, 0 0, 50% 50%, 0 0;
  background-image: radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266, 100%, 90%, var(--card-opacity)) 4%, hsla(266, 50%, 80%, calc(var(--card-opacity) * 0.75)) 10%, hsla(266, 25%, 70%, calc(var(--card-opacity) * 0.5)) 50%, hsla(266, 0%, 60%, 0) 100%), radial-gradient(35% 52% at 55% 20%, #00ffaac4 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #c137ffff 100%);
  overflow: hidden;
  transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) translateZ(0);
  transform-style: preserve-3d;
  border-radius: 12px;
  box-shadow: 
    0 0 0 1px rgba(0, 230, 255, 0.1),
    0 2px 5px 0 rgba(0, 0, 0, 0.2), 
    0 20px 40px -15px rgba(0, 0, 0, 0.5);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
}

.pc-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      transparent, 
      rgba(0, 255, 255, 0.05) 2px, 
      transparent 4px
    );
  z-index: 20;
  pointer-events: none;
  opacity: 0.4;
}

.pc-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--background-x) var(--background-y),
    rgba(0, 255, 255, 0.08) 0%,
    transparent 70%
  );
  z-index: 20;
  mix-blend-mode: screen;
  pointer-events: none;
}

.pc-card:hover,
.pc-card.active {
  transition: none;
  transform: translate3d(0, 0, 0.1px) rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
}

.pc-card.active {
  box-shadow: 
    0 0 0 1px rgba(0, 230, 255, 0.2),
    0 8px 20px 0 rgba(0, 0, 0, 0.3), 
    0 30px 50px -20px rgba(0, 0, 0, 0.6);
}

.pc-card * {
  display: grid;
  grid-area: 1/-1;
  border-radius: var(--card-radius);
  transform: translate3d(0, 0, 0.1px);
  pointer-events: none;
}

.pc-inside {
  inset: 1px;
  position: absolute;
  background-image: var(--inner-gradient);
  background-color: rgba(0, 0, 0, 0.9);
  transform: translate3d(0, 0, 0.01px);
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px;
  background: rgba(0, 20, 40, 0.8);
  overflow: hidden;
  z-index: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
}

.pc-inside::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--grain);
  background-size: 200px;
  opacity: 0.12;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}

.pc-inside::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 30, 60, 0.8),
    rgba(0, 20, 40, 0.8)
  );
  pointer-events: none;
}

.pc-shine {
  mask-image: var(--icon);
  mask-mode: luminance;
  mask-repeat: repeat;
  mask-size: 150%;
  mask-position: top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x));
  transition: filter 0.6s ease;
  filter: brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5);
  animation: holo-bg 18s linear infinite;
  mix-blend-mode: color-dodge;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--behind-gradient);
  z-index: -1;
  opacity: var(--pointer-from-center);
  mix-blend-mode: screen;
  border-radius: 12px;
}

.pc-shine,
.pc-shine::after {
  --space: 5%;
  --angle: -45deg;
  transform: translate3d(0, 0, 1px);
  overflow: hidden;
  z-index: 3;
  background: transparent;
  background-size: cover;
  background-position: center;
  background-image: repeating-linear-gradient(0deg, var(--sunpillar-clr-1) calc(var(--space) * 1), var(--sunpillar-clr-2) calc(var(--space) * 2), var(--sunpillar-clr-3) calc(var(--space) * 3), var(--sunpillar-clr-4) calc(var(--space) * 4), var(--sunpillar-clr-5) calc(var(--space) * 5), var(--sunpillar-clr-6) calc(var(--space) * 6), var(--sunpillar-clr-1) calc(var(--space) * 7)), repeating-linear-gradient(var(--angle), #0e152e 0%, hsl(180, 10%, 60%) 3.8%, hsl(180, 29%, 66%) 4.5%, hsl(180, 10%, 60%) 5.2%, #0e152e 10%, #0e152e 12%), radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsla(0, 0%, 0%, 0.1) 12%, hsla(0, 0%, 0%, 0.15) 20%, hsla(0, 0%, 0%, 0.25) 120%);
  background-position: 0 var(--background-y), var(--background-x) var(--background-y), center;
  background-blend-mode: color, hard-light;
  background-size: 500% 500%, 300% 300%, 200% 200%;
  background-repeat: repeat;
}

.pc-shine::before,
.pc-shine::after {
  content: '';
  background-position: center;
  background-size: cover;
  grid-area: 1/1;
  opacity: 0;
}

.pc-card:hover .pc-shine,
.pc-card.active .pc-shine {
  filter: brightness(0.85) contrast(1.5) saturate(0.5);
  animation: none;
}

.pc-card:hover .pc-shine::before,
.pc-card.active .pc-shine::before,
.pc-card:hover .pc-shine::after,
.pc-card.active .pc-shine::after {
  opacity: 1;
}

.pc-shine::before {
  /* background-image: linear-gradient(45deg, var(--sunpillar-4), var(--sunpillar-5), var(--sunpillar-6), var(--sunpillar-1), var(--sunpillar-2), var(--sunpillar-3)), radial-gradient(circle at var(--pointer-x) var(--pointer-y), hsl(0, 0%, 70%) 0%, hsla(0, 0%, 30%, 0.2) 90%), var(--grain); */
  background-size: 250% 250%, 100% 100%, 220px 220px;
  background-position: var(--pointer-x) var(--pointer-y), center, calc(var(--pointer-x) * 0.01) calc(var(--pointer-y) * 0.01);
  background-blend-mode: color-dodge;
  filter: brightness(calc(2 - var(--pointer-from-center))) contrast(calc(var(--pointer-from-center) + 2)) saturate(calc(0.5 + var(--pointer-from-center)));
  mix-blend-mode: luminosity;
}

.pc-shine::after {
  background-position: 0 var(--background-y), calc(var(--background-x) * 0.4) calc(var(--background-y) * 0.5), center;
  background-size: 200% 300%, 700% 700%, 100% 100%;
  mix-blend-mode: difference;
  filter: brightness(0.8) contrast(1.5);
}

.pc-glare {
  transform: translate3d(0, 0, 1.1px);
  overflow: hidden;
  background-image: radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsl(248, 25%, 80%) 12%, hsla(207, 40%, 30%, 0.8) 90%);
  mix-blend-mode: overlay;
  filter: brightness(0.8) contrast(1.2);
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.15) calc(50% - 40% * var(--pointer-from-left)),
      rgba(255, 255, 255, 0) calc(50% + 40% * var(--pointer-from-left))
    );
  z-index: 3;
  mix-blend-mode: overlay;
  border-radius: 12px;
}

.pc-avatar-content {
  mix-blend-mode: screen;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
}

.pc-avatar-content .avatar {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scale(1);
  bottom: 2px;
  opacity: calc(1.75 - var(--pointer-from-center));
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--terminal-primary);
  box-shadow: 0 0 15px rgba(0, 255, 200, 0.5);
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  background-color: var(--terminal-dark);
}

.pc-avatar-content .avatar::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--terminal-primary), var(--terminal-secondary));
  z-index: -1;
  opacity: 0.6;
}

.pc-avatar-content::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  backdrop-filter: blur(30px);
  mask: linear-gradient(to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 1) 100%);
  pointer-events: none;
}

.pc-user-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 12px 14px;
  pointer-events: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgba(0, 20, 30, 0.7);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: 8px;
  padding: 8px 12px;
  margin-top: 12px;
  position: relative;
  overflow: hidden;
}

.pc-user-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--terminal-light),
    transparent
  );
}

.pc-user-info::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--terminal-light),
    transparent
  );
}

.pc-user-details {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pc-mini-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--terminal-secondary);
  margin-right: 8px;
  position: relative;
}

.pc-mini-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.pc-user-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 6px;
  display: flex;
  flex-direction: column;
}

.pc-handle {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  font-size: 12px;
  font-weight: 500;
  color: var(--terminal-primary);
  line-height: 1.2;
  font-family: 'Courier New', monospace;
}

.pc-status {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1;
  font-size: 10px;
  color: var(--terminal-secondary);
  line-height: 1.2;
  opacity: 0.8;
  font-family: 'Courier New', monospace;
}

.pc-contact-btn {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  background: linear-gradient(
    135deg,
    rgba(0, 200, 255, 0.2),
    rgba(0, 255, 200, 0.2)
  );
  border: 1px solid var(--terminal-secondary);
  color: var(--terminal-text);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.pc-contact-btn:hover {
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-1px);
  transition: all 0.2s ease;
  background: linear-gradient(
    135deg,
    rgba(0, 200, 255, 0.4),
    rgba(0, 255, 200, 0.4)
  );
  box-shadow: 0 0 8px var(--terminal-shadow);
}

.pc-contact-btn::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 200, 0.3),
    rgba(0, 200, 255, 0)
  );
  transform: translateX(-100%) translateY(-100%) rotate(45deg);
  transition: transform 0.6s ease;
}

.pc-contact-btn:hover::before {
  transform: translateX(100%) translateY(100%) rotate(45deg);
}

.pc-content {
  max-height: 100%;
  overflow: hidden;
  text-align: center;
  position: relative;
  transform: translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px) !important;
  z-index: 5;
  mix-blend-mode: luminosity;
  position: relative;
  z-index: 2;
  color: var(--terminal-text);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pc-details {
  width: 100%;
  position: absolute;
  top: 3em;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: auto;
}

.pc-details h3 {
  font-weight: 600;
  margin: 0;
  font-size: min(5svh, 3em);
  margin: 0;
  background-image: linear-gradient(to bottom, #fff, #6f6fbe);
  background-size: 1em 1.5em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 5px;
  color: var(--terminal-text);
  text-shadow: 0 0 5px var(--terminal-shadow);
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
}

.pc-details p {
  font-weight: 600;
  position: relative;
  top: -12px;
  white-space: nowrap;
  font-size: 16px;
  margin: 0 auto;
  width: min-content;
  background-image: linear-gradient(to bottom, #fff, #4a4ac0);
  background-size: 1em 1.5em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 14px;
  margin: 0;
  color: var(--terminal-secondary);
  opacity: 0.9;
  font-family: 'Courier New', monospace;
}

@keyframes glow-bg {
  0% {
    --bgrotate: 0deg;
  }

  100% {
    --bgrotate: 360deg;
  }
}

@keyframes holo-bg {
  0% {
    background-position: 0 var(--background-y), 0 0, center;
  }

  100% {
    background-position: 0 var(--background-y), 90% 90%, center;
  }
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

.pc-card-wrapper:hover .pc-details h3 {
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  animation-delay: calc(var(--pointer-from-center) * 0.5s);
  animation-duration: 0.2s;
  animation-iteration-count: 1;
}

@media (max-width: 768px) {
  .pc-card {
    height: 70svh;
    max-height: 450px;
  }

  .pc-details {
    top: 2em;
  }

  .pc-details h3 {
    font-size: min(4svh, 2.5em);
  }

  .pc-details p {
    font-size: 14px;
  }

  .pc-user-info {
    bottom: 15px;
    left: 15px;
    right: 15px;
    padding: 10px 12px;
  }

  .pc-mini-avatar {
    width: 28px;
    height: 28px;
  }

  .pc-user-details {
    gap: 10px;
  }

  .pc-handle {
    font-size: 13px;
  }

  .pc-status {
    font-size: 10px;
  }

  .pc-contact-btn {
    padding: 6px 12px;
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .pc-card {
    height: 60svh;
    max-height: 380px;
  }

  .pc-details {
    top: 1.5em;
  }

  .pc-details h3 {
    font-size: min(3.5svh, 2em);
  }

  .pc-details p {
    font-size: 12px;
    top: -8px;
  }

  .pc-user-info {
    bottom: 12px;
    left: 12px;
    right: 12px;
    padding: 8px 10px;
    border-radius: 50px;
  }

  .pc-mini-avatar {
    width: 24px;
    height: 24px;
  }

  .pc-user-details {
    gap: 8px;
  }

  .pc-handle {
    font-size: 12px;
  }

  .pc-status {
    font-size: 9px;
  }

  .pc-contact-btn {
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 50px;
  }
}

@media (max-width: 320px) {
  .pc-card {
    height: 55svh;
    max-height: 320px;
  }

  .pc-details h3 {
    font-size: min(3svh, 1.5em);
  }

  .pc-details p {
    font-size: 11px;
  }

  .pc-user-info {
    padding: 6px 8px;
    border-radius: 50px;
  }

  .pc-mini-avatar {
    width: 20px;
    height: 20px;
  }

  .pc-user-details {
    gap: 6px;
  }

  .pc-handle {
    font-size: 11px;
  }

  .pc-status {
    font-size: 8px;
  }

  .pc-contact-btn {
    padding: 4px 8px;
    font-size: 9px;
    border-radius: 50px;
  }
}`,vn=`import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  behindGradient?: string;
  innerGradient?: string;
  showBehindGradient?: boolean;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
} as const;

const clamp = (value: number, min = 0, max = 100): number =>
  Math.min(Math.max(value, min), max);

const round = (value: number, precision = 3): number =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;

    const updateCardTransform = (
      offsetX: number,
      offsetY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": \`\${percentX}%\`,
        "--pointer-y": \`\${percentY}%\`,
        "--background-x": \`\${adjust(percentX, 0, 100, 35, 65)}%\`,
        "--background-y": \`\${adjust(percentY, 0, 100, 35, 65)}%\`,
        "--pointer-from-center": \`\${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}\`,
        "--pointer-from-top": \`\${percentY / 100}\`,
        "--pointer-from-left": \`\${percentX / 100}\`,
        "--rotate-x": \`\${round(-(centerX / 5))}deg\`,
        "--rotate-y": \`\${round(centerY / 4)}deg\`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration: number,
      startX: number,
      startY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const { beta, gamma } = event;
      if (!beta || !gamma) return;

      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove as EventListener;
    const pointerEnterHandler = handlePointerEnter as EventListener;
    const pointerLeaveHandler = handlePointerLeave as EventListener;
    const deviceOrientationHandler = handleDeviceOrientation as EventListener;

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      if (typeof (window.DeviceMotionEvent as any).requestPermission === 'function') {
        (window.DeviceMotionEvent as any)
          .requestPermission()
          .then((state: string) => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch((err: any) => console.error(err));
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);
    card.addEventListener('click', handleClick);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      card.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    enableMobileTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation,
  ]);

  const cardStyle = useMemo(
    () =>
      ({
        "--icon": iconUrl ? \`url(\${iconUrl})\` : "none",
        "--grain": grainUrl ? \`url(\${grainUrl})\` : "none",
        "--behind-gradient": showBehindGradient
          ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
          : "none",
        "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
      }) as React.CSSProperties,
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div
      ref={wrapRef}
      className={\`pc-card-wrapper \${className}\`.trim()}
      style={cardStyle}
    >
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={\`\${name || "User"} avatar\`}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={\`\${name || "User"} mini avatar\`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={handleContactClick}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={\`Contact \${name || "user"}\`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
`,q={...Q("Components/ProfileCard",["default","ts/default"]),usage:`import ProfileCard from './ProfileCard'
  
<ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>`,code:mn,css:un,tsCode:vn},gn="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)",hn="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",A={SMOOTH_DURATION:600,INITIAL_DURATION:1500,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20},_=(t,c=0,l=100)=>Math.min(Math.max(t,c),l),G=(t,c=3)=>parseFloat(t.toFixed(c)),P=(t,c,l,b,u)=>G(b+(u-b)*(t-c)/(l-c)),bn=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,xn=({avatarUrl:t="<Placeholder for avatar URL>",iconUrl:c="<Placeholder for icon URL>",grainUrl:l="<Placeholder for grain URL>",behindGradient:b,innerGradient:u,showBehindGradient:L=!0,className:N="",enableTilt:T=!0,enableMobileTilt:M=!1,mobileTiltSensitivity:k=5,miniAvatarUrl:S,name:I="Javi A. Torres",title:D="Software Engineer",handle:x="javicodes",status:j="Online",contactText:z="Contact",showUserInfo:w=!0,onContactClick:v})=>{const p=i.useRef(null),f=i.useRef(null),r=i.useMemo(()=>{if(!T)return null;let e=null;const a=(s,m,g,E)=>{const h=g.clientWidth,C=g.clientHeight,d=_(100/h*s),y=_(100/C*m),H=d-50,X=y-50,Y={"--pointer-x":`${d}%`,"--pointer-y":`${y}%`,"--background-x":`${P(d,0,100,35,65)}%`,"--background-y":`${P(y,0,100,35,65)}%`,"--pointer-from-center":`${_(Math.hypot(y-50,d-50)/50,0,1)}`,"--pointer-from-top":`${y/100}`,"--pointer-from-left":`${d/100}`,"--rotate-x":`${G(-(H/5))}deg`,"--rotate-y":`${G(X/4)}deg`};Object.entries(Y).forEach(([R,U])=>{E.style.setProperty(R,U)})};return{updateCardTransform:a,createSmoothAnimation:(s,m,g,E,h)=>{const C=performance.now(),d=h.clientWidth/2,y=h.clientHeight/2,H=X=>{const Y=X-C,R=_(Y/s),U=bn(R),Z=P(U,0,1,m,d),K=P(U,0,1,g,y);a(Z,K,E,h),R<1&&(e=requestAnimationFrame(H))};e=requestAnimationFrame(H)},cancelAnimation:()=>{e&&(cancelAnimationFrame(e),e=null)}}},[T]),O=i.useCallback(e=>{const a=f.current,o=p.current;if(!a||!o||!r)return;const s=a.getBoundingClientRect();r.updateCardTransform(e.clientX-s.left,e.clientY-s.top,a,o)},[r]),$=i.useCallback(()=>{const e=f.current,a=p.current;!e||!a||!r||(r.cancelAnimation(),a.classList.add("active"),e.classList.add("active"))},[r]),B=i.useCallback(e=>{const a=f.current,o=p.current;!a||!o||!r||(r.createSmoothAnimation(A.SMOOTH_DURATION,e.offsetX,e.offsetY,a,o),o.classList.remove("active"),a.classList.remove("active"))},[r]),W=i.useCallback(e=>{const a=f.current,o=p.current;if(!a||!o||!r)return;const{beta:s,gamma:m}=e;!s||!m||r.updateCardTransform(a.clientHeight/2+m*k,a.clientWidth/2+(s-A.DEVICE_BETA_OFFSET)*k,a,o)},[r,k]);i.useEffect(()=>{if(!T||!r)return;const e=f.current,a=p.current;if(!e||!a)return;const o=O,s=$,m=B,g=W,E=()=>{!M||location.protocol!=="https:"||(typeof window.DeviceMotionEvent.requestPermission=="function"?window.DeviceMotionEvent.requestPermission().then(d=>{d==="granted"&&window.addEventListener("deviceorientation",g)}).catch(d=>console.error(d)):window.addEventListener("deviceorientation",g))};e.addEventListener("pointerenter",s),e.addEventListener("pointermove",o),e.addEventListener("pointerleave",m),e.addEventListener("click",E);const h=a.clientWidth-A.INITIAL_X_OFFSET,C=A.INITIAL_Y_OFFSET;return r.updateCardTransform(h,C,e,a),r.createSmoothAnimation(A.INITIAL_DURATION,h,C,e,a),()=>{e.removeEventListener("pointerenter",s),e.removeEventListener("pointermove",o),e.removeEventListener("pointerleave",m),e.removeEventListener("click",E),window.removeEventListener("deviceorientation",g),r.cancelAnimation()}},[T,M,r,O,$,B,W]);const J=i.useMemo(()=>({"--icon":c?`url(${c})`:"none","--grain":l?`url(${l})`:"none","--behind-gradient":L?b??gn:"none","--inner-gradient":u??hn}),[c,l,L,b,u]),V=i.useCallback(()=>{v==null||v()},[v]);return n.jsx("div",{ref:p,className:`pc-card-wrapper ${N}`.trim(),style:J,children:n.jsx("section",{ref:f,className:"pc-card",children:n.jsxs("div",{className:"pc-inside",children:[n.jsx("div",{className:"pc-shine"}),n.jsx("div",{className:"pc-glare"}),n.jsxs("div",{className:"pc-content pc-avatar-content",children:[n.jsx("img",{className:"avatar",src:t,alt:`${I||"User"} avatar`,loading:"lazy",onError:e=>{const a=e.target;a.style.display="none"}}),w&&n.jsxs("div",{className:"pc-user-info",children:[n.jsxs("div",{className:"pc-user-details",children:[n.jsx("div",{className:"pc-mini-avatar",children:n.jsx("img",{src:S||t,alt:`${I||"User"} mini avatar`,loading:"lazy",onError:e=>{const a=e.target;a.style.opacity="0.5",a.src=t}})}),n.jsxs("div",{className:"pc-user-text",children:[n.jsxs("div",{className:"pc-handle",children:["@",x]}),n.jsx("div",{className:"pc-status",children:j})]})]}),n.jsx("button",{className:"pc-contact-btn",onClick:V,style:{pointerEvents:"auto"},type:"button","aria-label":`Contact ${I||"user"}`,children:z})]})]}),n.jsx("div",{className:"pc-content",children:n.jsxs("div",{className:"pc-details",children:[n.jsx("h3",{children:I}),n.jsx("p",{children:D})]})})]})})})},wn=nn.memo(xn),Nn=()=>{const[t,c]=i.useState(!0),[l,b]=i.useState(!0),[u,L]=i.useState(!0),[N,T]=i.useState(!1),[M,k]=i.useState("radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)"),[S,I]=i.useState("linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"),[D,x]=fn(),j=()=>{const w=Math.floor(Math.random()*360),v=Math.floor(Math.random()*360),p=Math.floor(Math.random()*360),f=Math.floor(Math.random()*360),r=`radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(${w},100%,90%,var(--card-opacity)) 4%,hsla(${w},50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(${w},25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(${w},0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,hsl(${v}, 100%, 70%) 0%,transparent 100%),radial-gradient(100% 100% at 50% 50%,hsl(${p}, 100%, 65%) 1%,transparent 76%),conic-gradient(from 124deg at 50% 50%,hsl(${f}, 100%, 70%) 0%,hsl(${v}, 100%, 70%) 40%,hsl(${v}, 100%, 70%) 60%,hsl(${f}, 100%, 70%) 100%)`,O=`linear-gradient(145deg,hsla(${w}, 40%, 45%, 0.55) 0%,hsla(${p}, 60%, 70%, 0.27) 100%)`;k(r),I(O),x()},z=[{name:"avatarUrl",type:"string",default:'"<Placeholder for avatar URL>"',description:"URL for the main avatar image displayed on the card"},{name:"iconUrl",type:"string",default:'"<Placeholder for icon URL>"',description:"Optional URL for an icon pattern overlay on the card background"},{name:"grainUrl",type:"string",default:'"<Placeholder for grain URL>"',description:"Optional URL for a grain texture overlay effect"},{name:"behindGradient",type:"string",default:"undefined",description:"Custom CSS gradient string for the background gradient effect"},{name:"innerGradient",type:"string",default:"undefined",description:"Custom CSS gradient string for the inner card gradient"},{name:"showBehindGradient",type:"boolean",default:"true",description:"Whether to display the background gradient effect"},{name:"className",type:"string",default:'""',description:"Additional CSS classes to apply to the card wrapper"},{name:"enableTilt",type:"boolean",default:"true",description:"Enable or disable the 3D tilt effect on mouse hover"},{name:"enableMobileTilt",type:"boolean",default:"false",description:"Enable or disable the 3D tilt effect on mobile devices"},{name:"mobileTiltSensitivity",type:"number",default:"5",description:"Sensitivity of the 3D tilt effect on mobile devices"},{name:"miniAvatarUrl",type:"string",default:"undefined",description:"Optional URL for a smaller avatar in the user info section"},{name:"name",type:"string",default:'"Javi A. Torres"',description:"User's display name"},{name:"title",type:"string",default:'"Software Engineer"',description:"User's job title or role"},{name:"handle",type:"string",default:'"javicodes"',description:"User's handle or username (displayed with @ prefix)"},{name:"status",type:"string",default:'"Online"',description:"User's current status"},{name:"contactText",type:"string",default:'"Contact"',description:"Text displayed on the contact button"},{name:"showUserInfo",type:"boolean",default:"true",description:"Whether to display the user information section"},{name:"onContactClick",type:"function",default:"undefined",description:"Callback function called when the contact button is clicked"}];return n.jsxs(tn,{children:[n.jsxs(rn,{children:[n.jsx(en,{position:"relative",className:"demo-container",h:700,overflow:"hidden",children:n.jsx(wn,{name:"Javi A. Torres",title:"Software Engineer",handle:"javicodes",status:"Online",contactText:"Contact Me",avatarUrl:"/assets/person.png",iconUrl:t?"/assets/iconpattern.png":"",showUserInfo:l,showBehindGradient:u,grainUrl:"/assets/grain.webp",behindGradient:M,innerGradient:S,enableMobileTilt:N},D)}),"        ",n.jsxs(pn,{children:[n.jsx(an,{onClick:j,fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,children:"Randomize Colors"}),n.jsx(F,{title:"Show Icon Pattern",isChecked:t,onChange:()=>{c(!t),x()}}),n.jsx(F,{title:"Show User Info",isChecked:l,onChange:()=>{b(!l),x()}}),n.jsx(F,{title:"Show BG Gradient",isChecked:u,onChange:()=>{L(!u),x()}}),n.jsx(F,{title:"Enable Mobile Tilt",isChecked:N,onChange:()=>{T(!N),x()}})]}),n.jsx(on,{data:z})]}),n.jsx(cn,{children:n.jsx(sn,{codeObject:q})}),n.jsx(ln,{children:n.jsx(dn,{...q})})]})};export{Nn as default};
