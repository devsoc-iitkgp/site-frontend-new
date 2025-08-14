import { useEffect, useState } from "react";
import FeatureCards from "../components/landing/FeatureCards/FeatureCards";
import Testimonials from "../components/landing/Testimonials/Testimonials";
import StartBuilding from "../components/landing/StartBuilding/StartBuilding";
import PlasmaWaveV2 from "../components/landing/PlasmaWave/PlasmaWaveV2";
import Announcement from "../components/common/Misc/Announcement";
import Footer from "../components/landing/Footer/Footer";
import Hero from "../components/landing/Hero/Hero";
import Terminal from "../components/landing/Terminal/Terminal";
import CodeComparison from "../components/landing/CodeComparison/CodeComparison";
import heroImage from "../assets/common/hero.webp";
import { Box, SimpleGrid, Heading, Container, Text, Flex, VStack, HStack, Stack, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Create animated components using Chakra's components
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Enhanced terminal commands with DevSoc name animation
  const terminalCommands = [
    {
      text: "echo 'Welcome to'",
      result: "Welcome to"
    },

    {
      text: "echo 'DevSoc'",
      result: `
██████╗ ███████╗██╗   ██╗███████╗ ██████╗  ██████╗
██╔══██╗██╔════╝██║   ██║██╔════╝██╔═══██╗██╔════╝
██║  ██║█████╗  ██║   ██║███████╗██║   ██║██║     
██║  ██║██╔══╝  ╚██╗ ██╔╝╚════██║██║   ██║██║     
██████╔╝███████╗ ╚████╔╝ ███████║╚██████╔╝╚██████╗
╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝ ╚═════╝ ╚═════╝
                                                  
-- Empowering Student Developers --`
    },
    {
      text: "devsoc --help",
      result: `Available commands:
  - devsoc init           Initialize a new DevSoc project
  - devsoc deploy         Deploy your application
  - devsoc workshop       Access interactive workshops
  - devsoc collaborate    Connect with other developers`
    }
  ];

  // DevSoc related code comparison
  const beforeCode =`// Welcome to Developer Society 🚀

// Connect with passionate coders
console.log("Joining global dev network...");

// Learn, build, and share
console.log("Accessing open-source projects...");
console.log("Exploring tutorials and resources...");

// Collaborate in real-time
console.log("Pair-programming sessions initialized...");
console.log("Hackathon mode activated...");

// Grow your skills
console.log("Pulling latest tech trends...");
console.log("Pushing your own innovations...");

return "DevSoc: Where developers code, collaborate, and conquer together!";
`;



  const afterCode  = `// Deploying to Developer Society 🌐

console.log("Initializing DevSoc membership...");
console.log("Syncing with community knowledge base...");
console.log("Fetching latest project ideas...");

console.log("Installing collaboration tools...");
console.log("Connecting with mentors and peers...");
console.log("Cloning open-source repositories...");

console.log("Running 'share --ideas' command...");
console.log("Compiling friendships and innovations...");
console.log("Merging creativity with code...");

console.log("Optimizing skills for real-world challenges...");
console.log("Deploying contributions to global impact...");

return "✅ Developer Society setup complete — Let's build something amazing!";
`;




  return (
    <section className="landing-wrapper">
      <title>Devsoc Society - Empowering Student Developers</title>

      <Announcement />

      {isMobile && (
        <div className="mobile-hero-background-container">
          <img
            src={heroImage}
            alt="Hero background"
            className="mobile-hero-background-image"
          />
        </div>
      )}

      {/* Background elements with proper z-index positioning */}
      <div className="background-elements">
        {/* Top layer background */}
        <div className="plasma-wave-container" style={{ zIndex: 1 }}>
          <PlasmaWaveV2 yOffset={-300} xOffset={100} rotationDeg={-30} />
        </div>
        
        {/* Second layer background - positioned below plasma wave */}
        <div className="hyperspeed-container" style={{ zIndex: 0, position: "absolute", top: "20%", left: 0, right: 0, bottom: 0 }}>
          {/* <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
              }
            }}
          /> */}
        </div>
      </div>
      
      {/* Foreground content elements with centered layout */}
      <div className="content-container center-aligned">
        {/* Animation4 is now included in the Hero component */}
        <Hero />
        
        {/* Magic CUI Section with Terminal and Code Comparison */}
        <Container maxW="1900px" py={5} zIndex={10}>

          
          <VStack 
            spacing={40} // Increased from 24 to 40 for more separation
            mb={16}
            className="magic-cui-section"
            align="stretch"
          >
            {/* Terminal Section */}
            <Box mb={10}> {/* Added bottom margin */}
              <Center flexDirection="column" maxW="1200px" mx="auto">
                <Flex 
                  direction={{ base: "column", md: "row" }} 
                  align="center" 
                  justify="space-between" 
                  gap={{ base: 10, md: 20 }}
                  w="100%"
                >
                  {/* Left side: DevSoc Description */}
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
                      A powerful community of student developers building the next generation of technology.
                    </MotionText>
                    <MotionText 
                      color="whiteAlpha.800"
                      fontSize="md"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                    >
                      Our suite of developer tools streamlines workflows and empowers students to create meaningful projects with industry-standard practices.
                    </MotionText>
                    <MotionText 
                      color="whiteAlpha.700"
                      fontSize="md"
                      fontStyle="italic"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.8 }}
                    >
                      Try our CLI to experience the power of DevSoc.
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
                    <Terminal commands={terminalCommands} autoType={true} typeSpeed={80} />
                  </MotionBox>
                </Flex>
              </Center>
            </Box>
            
            {/* Spacer element for additional separation */}
            <Box 
              height="2px" 
              width="60%" 
              bg="whiteAlpha.200" 
              alignSelf="center" 
              my={8}
            />
            
            {/* Code Comparison Section */}
            <Box mt={10}> {/* Added top margin */}
              <Center flexDirection="column" maxW="1400px" mx="auto"> {/* Increased from 1200px to 1400px */}
                <Flex 
                  direction={{ base: "column", md: "row" }} 
                  align="center" 
                  justify="space-between" 
                  gap={{ base: 10, md: 20 }}
                  w="100%"
                >
                  <MotionBox 
                    flex={{ md: 1.5 }} /* Increased from 1 to 1.5 for more horizontal space */
                    maxW={{ base: "100%", md: "800px" }} /* Increased from 600px to 800px */
                    w="100%"
                    mr={{ md: 4 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <CodeComparison 
                      beforeCode={beforeCode} 
                      afterCode={afterCode} 
                      language="javascript" 
                    />
                  </MotionBox>
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
                      color="purple.400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      Modern Development
                    </MotionHeading>
                    <MotionText 
                      color="whiteAlpha.900" 
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="medium"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.9 }}
                    >
                      DevSoc tools streamline your development process, turning hours of setup into seconds of productivity.
                    </MotionText>
                    <MotionText 
                      color="whiteAlpha.800" 
                      fontSize="md"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 1.1 }}
                    >
                      Focus on what matters: building great applications, not configuring tools.
                    </MotionText>
                  </VStack>
                </Flex>
              </Center>
            </Box>
          </VStack>
        </Container>
        <FeatureCards />
        <StartBuilding />
        <Footer />
      </div>
    </section>
  );
};

export default LandingPage;