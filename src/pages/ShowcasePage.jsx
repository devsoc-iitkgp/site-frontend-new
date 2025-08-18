import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import FadeContent from "../content/Animations/FadeContent/FadeContent";
import Footer from "../components/landing/Footer/Footer";

import '../css/showcase.css';

const ShowcasePage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const showcaseItems = [
    {
      name: 'cv-genie',
      url: 'https://cv-genie.onrender.com/',
    },
    {
      name: 'MailCold',
      url: 'https://mail-cold-hgur.vercel.app/',
    },
    {
      name: 'Harsh Portfolio',
      url: 'https://portfolio-rust-ten-23.vercel.app/',
    },
    {
      name: 'News Views',
      url: 'https://news-views-eight.vercel.app/',
    },

  ];  

  return (
    <>
      <section className="showcase-wrapper">
        <title>Developer's Society - Empowering Student Developers</title>

        <div className="showcase-header">
          <h1 className="showcase-title">Community Showcase</h1>
          <p className="showcase-subtitle">See how developers around the KGP showcasing their projects</p>
          <FadeContent blur delay={500}>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSeYEcy5of5QB1nMTQxOggODqyEg0Kirb1ZW08g7sb6_FAe1Yw/viewform?usp=header'
              target="_blank"
              rel='noreferrer'
              className="landing-button"
            >
              <span>Submit Your Project</span>
              <div className="button-arrow-circle">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </FadeContent>
        </div>

        <FadeContent blur duration={1000} className="fade-grid">
          <div className="grid-container">
            {showcaseItems.map((item, index) =>
              <Box as="a" href={item.url} rel="noreferrer" target="_blank" className="grid-item" key={item.url}>
                <img className="showcase-img" src={`https://davidhaz.com/react-bits-showcase/showcase-${index + 1}.webp`} alt={`Showcase website submitted by: ${item.name ? item.name : 'Anonymous'}`} />
                <div className="showcase-info">
                  {item.name && <Text className="author">{item.name}</Text>}
                </div>
              </Box>
            )}

       
          </div>
        </FadeContent>

      </section >

      <Footer />
    </>
  );
}

export default ShowcasePage;