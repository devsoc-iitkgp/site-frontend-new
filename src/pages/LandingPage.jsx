import { useEffect, useState } from "react";
import FeatureCards from "../components/landing/FeatureCards/FeatureCards";
import Testimonials from "../components/landing/Testimonials/Testimonials";
import StartBuilding from "../components/landing/StartBuilding/StartBuilding";
import PlasmaWaveV2 from "../components/landing/PlasmaWave/PlasmaWaveV2";
import Announcement from "../components/common/Misc/Announcement";
import Footer from "../components/landing/Footer/Footer";
import Hero from "../components/landing/Hero/Hero";
import About from "../components/landing/AboutUs/AboutUs";
import Terminal from "../components/landing/Terminal/Terminal";
import CodeComparison from "../components/landing/CodeComparison/CodeComparison";
import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  VStack,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GlobeDemo } from "../components/landing/globe/globeusage";
import Particles from "../content/Backgrounds/Particles/Particles"; // 👈 import particles

// Motion components
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Terminal demo commands
  const terminalCommands = [
    { text: "echo 'Welcome to'", result: "Welcome to" },
    {
      text: "echo 'DevSoc'",
      result: `
██████╗ ███████╗██╗   ██╗███████╗ ██████╗  ██████╗
██╔══██╗██╔════╝██║   ██║██╔════╝██╔═══██╗██╔════╝
██║  ██║█████╗  ██║   ██║███████╗██║   ██║██║     
██║  ██║██╔══╝  ╚██╗ ██╔╝╚════██║██║   ██║██║     
██████╔╝███████╗ ╚████╔╝ ███████║╚██████╔╝╚██████╗
╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝ ╚═════╝ ╚═════╝
                                                  
-- Empowering Student Developers --`,
    },
    {
      text: "devsoc --help",
      result: `Available commands:
  - devsoc init           Initialize a new DevSoc project
  - devsoc deploy         Deploy your application
  - devsoc workshop       Access interactive workshops
  - devsoc collaborate    Connect with other developers`,
    },
  ];

  return (
    <section className="landing-wrapper relative">
      <title>Developer's Society - Empowering Student Developers</title>

      {/* 🌌 Fullscreen Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleCount={400}
          particleSpread={12}
          particleBaseSize={80}
          sizeRandomness={1.2}
          speed={0.15}
          particleColors={["#ffffff", "#22d3ee", "#a855f7"]} // white, cyan, purple
          alphaParticles={true}
        />
      </div>

      <div className="relative z-10">
        <Announcement />

        {/* Hero Section with Globe */}
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Globe behind hero */}
          <div
            className={`
              absolute top-1/2 -translate-y-1/2
              ${isMobile ? "w-[120%]" : "w-[80%]"}
              max-w-[800px] aspect-square 
              left-1/2 -translate-x-1/2 
              opacity-30 z-0
            `}
          >
            <GlobeDemo />
          </div>

          {/* Hero content */}
          <div className="relative z-20 w-full px-6 max-w-2xl text-center">
            <Hero />
          </div>
        </div>

        {/* Foreground content */}
        <div className="content-container center-aligned relative z-20">
          <Container maxW="1900px" py={2} zIndex={10}>
            <VStack spacing={0} mb={0} className="magic-cui-section" align="stretch">
              {/* Terminal Section */}
              <Box mb={0}>
                <Center flexDirection="column" maxW="1200px" mx="auto">
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: 10, md: 20 }}
                    w="100%"
                  >
                    {/* Left side */}
                    <VStack
                      align="flex-start"
                      spacing={6}
                      flex={{ md: "0 0 380px" }}
                      justifyContent="center"
                      ml={{ md: 4 }}
                    >
                      <MotionHeading
                        as="h3"
                        size="lg"
                        color="cyan.400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        DevSoc Society
                      </MotionHeading>
                      <MotionText
                        color="whiteAlpha.900"
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="medium"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        A powerful community of student developers building the
                        next generation of technology.
                      </MotionText>
                    </VStack>

                    {/* Right side: Terminal */}
                    <MotionBox
                      flex={{ md: 1 }}
                      maxW={{ base: "100%", md: "600px" }}
                      w="100%"
                      mr={{ md: 4 }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Terminal
                        commands={terminalCommands}
                        autoType={true}
                        typeSpeed={80}
                      />
                    </MotionBox>
                  </Flex>
                </Center>
              </Box>
            </VStack>
          </Container>
          <FeatureCards />
          <About />
          <StartBuilding />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
