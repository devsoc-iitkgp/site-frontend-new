import React, { useEffect, useRef } from "react";
import "./Animation4.css";

const Animation4 = () => {
  const animationRef = useRef(null);
  
  useEffect(() => {
    const animationElement = animationRef.current;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (animationElement) {
        // Calculate position based on scroll
        const rotateValue = scrollPosition * 0.1;
        const scaleValue = 1 + scrollPosition * 0.001;
        
        // Apply transformations
        animationElement.style.transform = `rotate(${rotateValue}deg) scale(${scaleValue})`;
        animationElement.style.opacity = Math.min(1, 0.2 + scrollPosition / viewportHeight);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial animation
    animationElement.classList.add("animate-in");
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="animation4-container">
      <div className="animation4-element" ref={animationRef}>
        <div className="circle-large"></div>
        <div className="circle-medium"></div>
        <div className="circle-small"></div>
        <div className="devsoc-logo">DevSoc</div>
      </div>
    </div>
  );
};

export default Animation4;
