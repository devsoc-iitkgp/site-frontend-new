import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../styles/AboutPage.css';

// Animated SVG component for decorative elements

function AnimatedIntro() {
  const words = ["Innovative", "Passionate", "Creative", "Dedicated"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="animated-intro">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We are{" "}
        <span className="highlight">
          <AnimatePresence exitBeforeEnter>
            <motion.span
              key={words[index]}
              className="animated-word"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h2>
    </div>
  );
}

const AnimatedCircle = ({ color = "#4F46E5", delay = 0 }) => (
  <motion.svg 
    width="120" 
    height="120" 
    viewBox="0 0 120 120"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1, rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    className="decorative-svg"
  >
    <motion.circle 
      cx="60" 
      cy="60" 
      r="40" 
      stroke={color} 
      strokeWidth="3" 
      fill="none" 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle 
      cx="60" 
      cy="60" 
      r="30" 
      stroke={color} 
      strokeWidth="2" 
      fill="none" 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  </motion.svg>
);

const WavesSVG = () => (
  <motion.svg 
    width="100%" 
    height="120" 
    viewBox="0 0 1200 120"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="wave-svg"
  >
    <motion.path 
      d="M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,122.7C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      fill="#4F46E5"
      fillOpacity="0.2"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, yoyo: Infinity, ease: "easeInOut" }}
    />
    <motion.path 
      d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      fill="#4F46E5"
      fillOpacity="0.3"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 2.5, yoyo: Infinity, ease: "easeInOut", delay: 0.2 }}
    />
  </motion.svg>
);


const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Animated Text */}
      <section className="hero-section">
        <div className="svg-decorations">
          <AnimatedCircle color="#4F46E5" delay={0} />
          <AnimatedCircle color="#10B981" delay={0.5} />
          <AnimatedCircle color="#F59E0B" delay={1} />
        </div>
        
        <motion.h1 
          className="page-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        
        <div className="animated-intro">
          <AnimatedIntro />
        </div>
        
        <motion.p
          className="intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          The Developers’ Society (DevSoc) at IIT Kharagpur is a student community that promotes coding, software development, and open-source culture. It organizes workshops, hackathons, and projects, providing a platform for students to build skills, innovate, and bridge the gap between academics and real-world tech.
        </motion.p>

        <img
        src="/us.jpg"
        alt="Our team photo"
        style={{ marginTop: '20px' }}
        width={800}
        height={200}
      />
      </section>
    </div>
  );
};

export default AboutPage;