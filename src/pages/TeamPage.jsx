import React, { useState } from 'react';
import './TeamPage.css';
import Squares from '../content/Backgrounds/Squares/Squares';
import LightRays from '../content/Backgrounds/LightRays/LightRays';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      title: 'CEO & Founder',
      handle: 'alexjohnson',
      status: 'Online',
      bio: 'Passionate about innovation and technology with over 10 years of experience in the industry.',
      contactText: 'Contact'
    },
    {
      id: 2,
      name: 'Sam Richards',
      title: 'CTO',
      handle: 'samrichards',
      status: 'Available',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud architecture.',
      contactText: 'Message'
    },
    {
      id: 3,
      name: 'Jamie Lee',
      title: 'Lead Designer',
      handle: 'jamielee',
      status: 'In a meeting',
      bio: 'Creative professional with a keen eye for detail and a passion for user-centric design.',
      contactText: 'Connect'
    },
    {
      id: 4,
      name: 'Taylor Smith',
      title: 'Software Engineer',
      handle: 'taylorsmith',
      status: 'Coding',
      bio: 'Problem solver who loves building efficient and scalable solutions.',
      contactText: 'Collaborate'
    },
    {
      id: 5,
      name: 'Morgan Black',
      title: 'Product Manager',
      handle: 'morganblack',
      status: 'Planning',
      bio: 'Strategic thinker focused on delivering value through innovative products.',
      contactText: 'Schedule Meeting'
    },
    {
      id: 6,
      name: 'Jordan Riley',
      title: 'Marketing Specialist',
      handle: 'jordanriley',
      status: 'Presenting',
      bio: 'Creative marketer with a data-driven approach to growing business.',
      contactText: 'Reach Out'
    }
  ];

  const [activeMember, setActiveMember] = useState(null);

  const handleContactClick = (member) => {
    console.log(`Contact clicked for ${member.name}`);
  };

  const handleCardHover = (memberId) => {
    setActiveMember(memberId);
  };

  return (
    <div className="team-page">
      <div className="background-container">
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
      
      <div className="team-content">
        <div className="team-grid">
          {teamMembers.map(member => (
            <div 
              className={`team-card ${activeMember === member.id ? 'active' : ''}`} 
              key={member.id}
              onMouseEnter={() => handleCardHover(member.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <div className="member-avatar">
                <div className="status-indicator" data-status={member.status}></div>
              </div>
              <h2>{member.name}</h2>
              <h3>{member.title}</h3>
              <p className="handle">@{member.handle}</p>
              <p className="status">{member.status}</p>
              <p className="bio">{member.bio}</p>
              <button 
                onClick={() => handleContactClick(member)} 
                className="contact-button"
              >
                {member.contactText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
