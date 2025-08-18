import React, { useState, useEffect } from "react";
import "./TeamPage.css";
import Squares from "../content/Backgrounds/Squares/Squares";
import LightRays from "../content/Backgrounds/LightRays/LightRays";
import Particles from "../content/Backgrounds/Particles/Particles"; // 👈 particle background

const TeamPage = () => {
  // Set tab name same as home page and scroll to top on mount
  useEffect(() => {
    document.title = "Developer's Society - Empowering Student Developers"; // Change to your home page title if different
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Harsh Bhatt",
      title: "Development Head",
      handle: "Harsh-BH",
      github: "https://github.com/Harsh-BH",
      status: "Coding",
      bio: "Passionate about innovation and technology with over 10 years of experience in the industry.",
      contactText: "Contact",
      avatar: "../assets/pics/harsh.jpg",
    },
    {
      id: 2,
      name: "Aditya Nigam",
      title: "Development Head",
      handle: "hiexbris",
      github: "https://github.com/hiexbris",
      status: "Online",
      bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture.",
      contactText: "Message",
      avatar: "../assets/pics/nigam.jpeg",
    },
    {
      id: 3,
      name: "Yashvardhan Jain",
      title: "Development Head",
      handle: "yashvardhanj",
      github: "https://github.com/yashvardhanj",
      status: "Online",
      bio: "Creative professional with a keen eye for detail and a passion for user-centric design.",
      contactText: "Connect",
      avatar: "../assets/pics/jain.jpeg",
    },
    {
      id: 4,
      name: "Aditya Kashyap",
      title: "Development Head",
      handle: "Aditya03-D",
      github: "https://github.com/Aditya03-D",
      status: "Online",
      bio: "Problem solver who loves building efficient and scalable solutions.",
      contactText: "Collaborate",
      avatar: "../assets/pics/kashyap.jpeg",
    },
    {
      id: 5,
      name: "Devansh Soni",
      title: "Executive Head",
      handle: "indenigrate",
      github: "https://github.com/indenigrate",
      status: "Online",
      bio: "Strategic thinker focused on delivering value through innovative products.",
      contactText: "Schedule Meeting",
      avatar: "../assets/pics/soni.jpeg",
    },
    {
      id: 6,
      name: "Daksh Yadav",
      title: "Executive Head",
      handle: "dakshyadav1810",
      github: "https://github.com/dakshyadav1810",
      status: "Online",
      bio: "Creative marketer with a data-driven approach to growing business.",
      contactText: "Reach Out",
      avatar: "../assets/pics/yadav.jpeg",
    },
  ];

  const [activeMember, setActiveMember] = useState(null);

  const handleContactClick = (member) => {
    console.log(`Contact clicked for ${member.name}`);
  };

  const handleCardHover = (memberId) => {
    setActiveMember(memberId);
  };

  return (
    <div className="team-page relative">
      {/* 🌌 Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleCount={350}
          particleSpread={10}
          particleBaseSize={80}
          sizeRandomness={1}
          speed={0.1}
          particleColors={["#ffffff", "#22d3ee", "#a855f7"]}
          alphaParticles={true}
        />
      </div>

      {/* Light rays layered above particles */}
      <div className="background-container relative z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="fullpage-rays"
        />
      </div>

      {/* Main Content */}
      <div className="team-content relative z-20">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div
              className={`team-card ${
                activeMember === member.id ? "active" : ""
              }`}
              key={member.id}
              onMouseEnter={() => handleCardHover(member.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {/* Avatar */}
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} />
                <div
                  className="status-indicator"
                  data-status={member.status}
                ></div>
              </div>

              {/* Info */}
              <h2>{member.name}</h2>
              <h3>{member.title}</h3>

              {/* GitHub handle → clickable */}
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="handle"
              >
                @{member.handle}
              </a>

              <p className="status">{member.status}</p>
              <p className="bio">{member.bio}</p>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
