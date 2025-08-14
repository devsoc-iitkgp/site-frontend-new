import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutPage.css';

// Animated SVG component for decorative elements
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

// Team member data grouped by department
const teamData = {
  "Leadership": [
    { id: 1, name: "Alex Johnson", position: "CEO & Founder", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Maya Rodriguez", position: "COO", image: "https://randomuser.me/api/portraits/women/44.jpg" }
  ],
  "Development": [
    { id: 3, name: "Chris Lee", position: "Lead Developer", image: "https://randomuser.me/api/portraits/men/22.jpg" },
    { id: 4, name: "Taylor Smith", position: "Frontend Developer", image: "https://randomuser.me/api/portraits/women/17.jpg" },
    { id: 5, name: "Sam Wilson", position: "Backend Developer", image: "https://randomuser.me/api/portraits/men/45.jpg" }
  ],
  "Design": [
    { id: 6, name: "Jordan Chen", position: "Creative Director", image: "https://randomuser.me/api/portraits/women/28.jpg" },
    { id: 7, name: "Riley Garcia", position: "UI/UX Designer", image: "https://randomuser.me/api/portraits/men/37.jpg" }
  ],
  "Marketing": [
    { id: 8, name: "Casey Thompson", position: "Marketing Director", image: "https://randomuser.me/api/portraits/women/63.jpg" },
    { id: 9, name: "Jamie Parker", position: "Content Strategist", image: "https://randomuser.me/api/portraits/men/57.jpg" }
  ]
};

const AboutPage = () => {
  const words = ["Innovative", "Passionate", "Creative", "Dedicated"];
  
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
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We are{" "}
            <motion.span className="highlight">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  className="animated-word"
                  initial={{ display: "none", opacity: 0, y: 20 }}
                  animate={{ display: index === 0 ? "inline" : "none", opacity: index === 0 ? 1 : 0, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: (words.length - 1) * 2,
                    delay: index * 2,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>
        </div>
        
        <motion.p
          className="intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          We're a team dedicated to excellence and innovation. Our mission is to create solutions 
          that empower people and organizations to achieve their full potential.
        </motion.p>
      </section>
      
      {/* Mission Section with Animated SVG */}
      <section className="mission-section">
        <WavesSVG />
        
        <motion.div 
          className="mission-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Mission</h2>
          <div className="mission-columns">
            <div className="mission-text">
              <p>
                Founded in 2020, we set out with a clear purpose: to bridge the gap between technology and human needs.
                We believe that thoughtful design and cutting-edge innovation can transform how people interact with 
                the digital world.
              </p>
              <p>
                Every project we undertake is guided by our commitment to accessibility, sustainability, and creating 
                meaningful impact for our clients and their users.
              </p>
            </div>
            <div className="mission-visual">
              <AnimatedCircle color="#10B981" />
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Team Section */}
      <section className="team-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        
        {Object.entries(teamData).map(([department, members], deptIndex) => (
          <motion.div 
            key={department}
            className="team-department"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: deptIndex * 0.2 }}
          >
            <h3>{department}</h3>
            <div className="team-members">
              {members.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="member-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -10, boxShadow: "0 12px 30px rgba(0,0,0,0.15)" }}
                >
                  <div className="member-photo">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h4>{member.name}</h4>
                  <p>{member.position}</p>
                  <div className="member-socials">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
      
      {/* Values Section */}
      <section className="values-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>
        
        <div className="values-grid">
          {[
            { icon: "🌱", title: "Growth", text: "We continuously learn and evolve." },
            { icon: "🤝", title: "Collaboration", text: "We achieve more by working together." },
            { icon: "💡", title: "Innovation", text: "We embrace new ideas and approaches." },
            { icon: "🔍", title: "Quality", text: "We take pride in excellence at every level." }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Join Us Section */}
      <motion.section 
        className="join-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Join Our Journey</h2>
        <p>We're always looking for talented individuals who share our values and vision.</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Careers
        </motion.button>
      </motion.section>
    </div>
  );
};

export default AboutPage;