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
      <Box className="landing-content centered-content" width={{ base: "95%", md: "90%", lg: "80%" }} maxW="1400px" mx="auto">
        <Flex 
          direction={{ base: "column", md: "row" }} 
          align="center" 
          justify="space-between"
          position="relative"
        >
          {/* Left side: Hero Text Content */}
          <Box 
            flex={{ md: "1" }} 
            textAlign={{ base: "center", md: "left" }} 
            pr={{ md: 10 }}
            width={{ base: "100%", md: "auto" }}
          >
            <Flex direction="column" align={{ base: "center", md: "flex-start" }} className="hero-main-content">
              <Box className="title-container" mb={8}>
                <h1 className="landing-title super-enlarged-title" style={{ fontSize: "calc(2.5rem + 2vw)", lineHeight: 1.2 }}>
                  <ResponsiveSplitText
                    isMobile={isMobile}
                    text="DevSoc Society"
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

              <Text 
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }} 
                maxW={{ base: "800px", md: "100%" }}
                mx={{ base: "auto", md: 0 }}
                mb={10}
                fontWeight="medium"
                color="whiteAlpha.900"
              >
                <ResponsiveSplitText
                  isMobile={isMobile}
                  splitType="words"
                  delay={10}
                  duration={1}
                  text="A community of passionate student developers building the next generation of technology leaders"
                />
              </Text>

              <Flex className="button-container" width="100%" justifyContent={{ base: "center", md: "flex-start" }}>
                <Link to={"/join-us"} className="landing-button super-enlarged-button" style={{ fontSize: "1.25rem", padding: "1rem 2rem" }}>
                  <span>Join DevSoc</span>
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
                </Link>
              </Flex>
            </Flex>
          </Box>
          
          {/* Right side: Animation */}
          <Box 
            flex={{ md: "0 0 300px" }} 
            display={{ base: "none", md: "block" }}
            position="relative"
          >
            <Animation4 />
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default Hero;
