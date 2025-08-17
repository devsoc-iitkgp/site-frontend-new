import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SplitText from "../../../content/TextAnimations/SplitText/SplitText";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Animation4 from "../Animation/Animation4";

const ResponsiveSplitText = ({ isMobile, text, ...rest }) =>
  isMobile ? (
    <span className={rest.className}>{text}</span>
  ) : (
    <SplitText text={text} {...rest} />
  );

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <Center className="full-width-center" w="100%" py={{ base: 12, md: 20 }}>
      <Box
        className="landing-content centered-content"
        width={{ base: "95%", md: "90%", lg: "80%" }}
        maxW="1400px"
        mx="auto"
      >
        <Flex
          direction="column" // stacked layout
          align="center"     // center horizontally
          justify="center"
          textAlign="center" // center text
          position="relative"
        >
          {/* Hero Text Content */}
          <Box width="100%">
            <Flex
              direction="column"
              align="center"
              className="hero-main-content"
            >
              {/* Title */}
              <Box className="title-container" mb={8}>
                <h1
                  className="landing-title super-enlarged-title"
                  style={{
                    fontSize: "calc(2.5rem + 2vw)",
                    lineHeight: 1.2,
                    textAlign: "center",
                  }}
                >
                  <ResponsiveSplitText
                    isMobile={isMobile}
                    text="Developer Society"
                    className="hero-split main-title"
                    splitType="chars"
                    delay={30}
                    duration={2}
                    ease="elastic.out(0.5, 0.3)"
                  />
                  <br />
                  <ResponsiveSplitText
                    isMobile={isMobile}
                    text="innovate. create. inspire."
                    className="hero-split subtitle"
                    splitType="chars"
                    delay={30}
                    duration={2}
                    ease="elastic.out(0.5, 0.3)"
                    style={{ fontSize: "calc(1.5rem + 1vw)" }}
                  />
                </h1>
              </Box>



              {/* CTA Button */}
              <Flex
                className="button-container"
                width="100%"
                justifyContent="center"
              >
                <a
                  href="mailto:devsoc.iitkgp@gmail.com"
                  className="landing-button super-enlarged-button"
                  style={{ fontSize: "1.25rem", padding: "1rem 2rem" }}
                >
                  <span>Contact DevSoc</span>
                  <div className="button-arrow-circle">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="#4c1d95"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </Flex>
            </Flex>
          </Box>

          {/* Right side: Animation (visible only on desktop) */}
          <Box
            flex={{ md: "0 0 300px" }}
            display={{ base: "none", md: "block" }}
            position="relative"
          >
            {/* <Animation4 /> */}
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default Hero;
