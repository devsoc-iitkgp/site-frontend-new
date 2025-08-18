import { Box, Heading, Text, Flex, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import SplitText from "../../../content/TextAnimations/SplitText/SplitText";

// Pulse animation keyframes (inject into global CSS or Chakra theme)
const styles = `
@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.7; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
  100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.7; }
}
`;

// Inject keyframes dynamically (in case global CSS is not used)
if (typeof document !== "undefined" && !document.getElementById("pulse-style")) {
  const style = document.createElement("style");
  style.id = "pulse-style";
  style.innerHTML = styles;
  document.head.appendChild(style);
}

// Responsive SplitText (animation on desktop, plain text on mobile)
const ResponsiveSplitText = ({ isMobile, text, ...rest }) =>
  isMobile ? (
    <span className={rest.className}>{text}</span>
  ) : (
    <SplitText text={text} {...rest} />
  );

// Feature SVG icons
const featureImages = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16">
    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-taxi-front-fill" viewBox="0 0 16 16">
    <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1zM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17s-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4M4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
    <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
  </svg>`,
];

// Features text (improved)
const features = [
  {
    title: "Buy & Sell Instantly",
    description:
      "Discover a thriving student marketplace — trade books, gadgets, and essentials effortlessly within your campus.",
  },
  {
    title: "Smart Bus Tracking",
    description:
      "Follow live campus bus locations with ease. Plan your commute, save time, and never miss your ride again.",
  },
  {
    title: "Travel Together",
    description:
      "Team up with fellow students for ridesharing. Split costs, make new friends, and enjoy eco-friendly journeys.",
  },
  {
    title: "One-Tap Slot Booking",
    description:
      "Reserve labs, sports arenas, or event slots in seconds. Stay organized and make the most of campus facilities.",
  },
];

// Animations
const featureVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      delay: i * 0.25, 
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98],
    }
  }
};

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef();
  const [ballTop, setBallTop] = useState(80);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const updateBallPosition = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollPercentage =
        (window.innerHeight / 2 - containerRect.top) / containerRect.height;
      const newTop =
        containerRect.height *
        Math.max(0, Math.min(1, scrollPercentage));
      setBallTop(Math.max(40, Math.min(containerRect.height - 40, newTop)));
    };

    const handleScroll = () => {
      animationFrameId = window.requestAnimationFrame(updateBallPosition);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateBallPosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      id="about-section"
      position="relative"
      w="full"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
      bg="transparent"
      color="#fff"
      zIndex={1}
    >
      <Center flexDirection="column" maxW="1200px" mx="auto">
        <ResponsiveSplitText
          isMobile={isMobile}
          text="ABOUT US"
          className="hero-split main-title"
          splitType="chars"
          delay={30}
          duration={2}
          ease="elastic.out(0.5, 0.3)"
        />
        <Text
          fontSize="lg"
          lineHeight={1.7}
          mb={8}
          textAlign="center"
          w="100%"
        >
          Developers’ Society is an initiative by the Tech Team of the
          Technology Students’ Gymkhana, IIT Kharagpur, aimed at fostering and
          enhancing the software development culture within the institute.
          Formed by a group of passionate developers, we focus on building and
          maintaining impactful apps that serve the student community while
          promoting innovation and collaboration.
        </Text>
        <Heading
          as="h3"
          size="md"
          mb={4}
          textAlign="center"
          color="purple.300"
          fontWeight="semibold"
          w="100%"
        >
          Introducing ApnaInsti
        </Heading>
        <Text
          fontSize="lg"
          lineHeight={1.7}
          mb={10}
          textAlign="center"
          w="100%"
        >
          ApnaInsti is our flagship app designed to make campus life smoother
          and more connected. Explore its features below:
        </Text>

        {/* Timeline */}
        <Box w="100%" position="relative" ref={containerRef}>
          {/* Ball */}
          <Box
            position="absolute"
            left="0"
            top="0"
            h="100%"
            w="32px"
            display={{ base: "none", md: "block" }}
            zIndex={0}
          >
            <Box
              position="absolute"
              left="50%"
              top={ballTop}
              transform="translate(-50%, -50%)"
              w="22px"
              h="22px"
              bgGradient="linear(to-br, cyan.400, purple.500)"
              borderRadius="full"
              boxShadow="0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)"
              zIndex={2}
              transition="top 0.3s cubic-bezier(.4,2,.6,1)"
              _before={{
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                bgGradient: "radial(cyan.400, transparent 70%)",
                opacity: 0.6,
                animation: "pulse 2s infinite",
              }}
            />
            <Box
              position="absolute"
              left="50%"
              top="0"
              width="5px"
              height="100%"
              bgGradient="linear(to-b, cyan.400, purple.500)"
              borderRadius="full"
              style={{ transform: "translateX(-50%)" }}
              boxShadow="0 0 15px rgba(34, 211, 238, 0.6)"
            />
          </Box>

          {/* Features */}
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={featureVariants}
              style={{
                width: "100%",
                marginBottom: idx === features.length - 1 ? "0" : "64px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Flex
                direction="row"
                align="center"
                justify="flex-start"
                gap={{ base: 8, md: 32 }}
                w="100%"
                maxW="900px"
                mx="auto"
              >
                <Box minW="32px" display={{ base: "none", md: "block" }} h="1px" />
                {/* Feature icon */}
                <Box
                  flex="0 0 120px"
                  w="120px"
                  h="120px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "16px",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                      overflow: "hidden",
                    }}
                    dangerouslySetInnerHTML={{ __html: featureImages[idx] }}
                  />
                </Box>
                {/* Text */}
                <Box
                  bg="transparent"
                  borderRadius="lg"
                  boxShadow="none"
                  p={{ base: 5, md: 8 }}
                  w="600px"
                  textAlign="left"
                  minH="120px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  ml={{ md: 16 }}
                  fontFamily="inherit"
                >
                  <Heading
                    as="h5"
                    fontSize="30px"
                    mb={2}
                    color="cyan.400"
                    fontWeight="bold"
                    fontFamily="inherit"
                  >
                    {feature.title}
                  </Heading>
                  <Text
                    fontSize="23px"
                    color="whiteAlpha.900"
                    fontWeight="medium"
                    fontFamily="inherit"
                  >
                    {feature.description}
                  </Text>
                </Box>
              </Flex>
            </motion.div>
          ))}
        </Box>
      </Center>
    </Box>
  );
};

export default AboutUs;
