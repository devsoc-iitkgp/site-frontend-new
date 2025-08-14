import React, { useEffect, useState } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Button, 
  VStack, 
  HStack, 
  Icon, 
  useToast,
  SimpleGrid
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaEnvelope, FaDiscord, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../components/landing/Footer/Footer";
import PlasmaWaveV2 from "../components/landing/PlasmaWave/PlasmaWaveV2";
import Animation4 from "../components/landing/Animation/Animation4";
import Announcement from "../components/common/Misc/Announcement";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "University Campus, Innovation Building, Room 301",
      color: "#06b6d4"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "contact@devsocsociety.org",
      color: "#3b82f6"
    },
    {
      icon: FaDiscord,
      title: "Discord",
      content: "Join our community server",
      link: "https://discord.gg/devsoc",
      color: "#5865F2"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/devsocsociety", color: "#333" },
    { icon: FaTwitter, link: "https://twitter.com/devsocsociety", color: "#1DA1F2" },
    { icon: FaInstagram, link: "https://instagram.com/devsocsociety", color: "#E1306C" }
  ];

  return (
    <Box position="relative" overflowX="hidden">
      <title>Contact DevSoc Society</title>
      <Announcement />
      
      <Box className="background-elements">
        <Box className="plasma-wave-container" style={{ zIndex: 1 }}>
          <PlasmaWaveV2 yOffset={-300} xOffset={100} rotationDeg={-30} />
        </Box>
      </Box>
      
      <Animation4 />
      
      <Container maxW="1200px" className="content-container center-aligned" position="relative" zIndex="10" py={12}>
        <VStack spacing={12} align="center" w="100%">
          {/* Hero Section */}
          <VStack spacing={5} textAlign="center" mb={8}>
            <Heading 
              as="h1" 
              fontSize={{ base: "3rem", md: "4.5rem" }} 
              fontWeight="900"
              lineHeight="1.1"
              className="text-gradient"
            >
              Get In Touch
            </Heading>
            <Text 
              fontSize={{ base: "xl", md: "2xl" }} 
              maxW="800px" 
              textShadow="0 0 10px rgba(255,255,255,0.3)"
              color="whiteAlpha.900"
            >
              Have a question or want to join us? We'd love to hear from you!
            </Text>
          </VStack>
          
          {/* Contact Info */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
            {contactInfo.map((item, index) => (
              <VStack 
                key={index} 
                p={6} 
                borderRadius="lg" 
                bg="rgba(255,255,255,0.05)" 
                backdropFilter="blur(10px)"
                boxShadow="0 0 15px rgba(138, 43, 226, 0.2)"
                alignItems="center"
                textAlign="center"
                h="100%"
                justify="center"
              >
                <Icon as={item.icon} boxSize={8} color={item.color} mb={4} />
                <Heading size="md" mb={2} color="whiteAlpha.900">{item.title}</Heading>
                {item.link ? (
                  <Button as="a" href={item.link} target="_blank" variant="link" color="whiteAlpha.800">
                    {item.content}
                  </Button>
                ) : (
                  <Text color="whiteAlpha.800">{item.content}</Text>
                )}
              </VStack>
            ))}
          </SimpleGrid>
          
          {/* Contact Form */}
          <Box 
            w="100%" 
            p={8} 
            borderRadius="lg" 
            bg="rgba(255,255,255,0.05)" 
            backdropFilter="blur(10px)"
            boxShadow="0 0 20px rgba(138, 43, 226, 0.3)"
            mt={10}
          >
            <Heading as="h2" fontSize="2xl" mb={6} color="whiteAlpha.900" textAlign="center">
              Send us a message
            </Heading>
            
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                  <FormControl isRequired>
                    <FormLabel color="whiteAlpha.900">Name</FormLabel>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      bg="rgba(255,255,255,0.08)"
                      border="none"
                      color="white"
                      _placeholder={{ color: "whiteAlpha.400" }}
                      _hover={{ bg: "rgba(255,255,255,0.12)" }}
                      _focus={{ bg: "rgba(255,255,255,0.12)", boxShadow: "0 0 0 1px rgba(138, 43, 226, 0.6)" }}
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel color="whiteAlpha.900">Email</FormLabel>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      bg="rgba(255,255,255,0.08)"
                      border="none"
                      color="white"
                      _placeholder={{ color: "whiteAlpha.400" }}
                      _hover={{ bg: "rgba(255,255,255,0.12)" }}
                      _focus={{ bg: "rgba(255,255,255,0.12)", boxShadow: "0 0 0 1px rgba(138, 43, 226, 0.6)" }}
                    />
                  </FormControl>
                </SimpleGrid>
                
                <FormControl>
                  <FormLabel color="whiteAlpha.900">Subject</FormLabel>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    bg="rgba(255,255,255,0.08)"
                    border="none"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.400" }}
                    _hover={{ bg: "rgba(255,255,255,0.12)" }}
                    _focus={{ bg: "rgba(255,255,255,0.12)", boxShadow: "0 0 0 1px rgba(138, 43, 226, 0.6)" }}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.900">Message</FormLabel>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    bg="rgba(255,255,255,0.08)"
                    border="none"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.400" }}
                    _hover={{ bg: "rgba(255,255,255,0.12)" }}
                    _focus={{ bg: "rgba(255,255,255,0.12)", boxShadow: "0 0 0 1px rgba(138, 43, 226, 0.6)" }}
                  />
                </FormControl>
                
                <Button 
                  type="submit"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  colorScheme="purple" 
                  size="lg" 
                  w={{ base: "100%", md: "auto" }}
                  alignSelf="center"
                  mt={4}
                  bg="rgba(138, 43, 226, 0.8)"
                  _hover={{ bg: "rgba(138, 43, 226, 1)" }}
                  boxShadow="0 0 15px rgba(138, 43, 226, 0.4)"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
          
          {/* Social Links */}
          <VStack spacing={4} mt={8}>
            <Heading as="h2" fontSize="xl" color="whiteAlpha.900">Connect With Us</Heading>
            <HStack spacing={6}>
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  as="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.icon.name}
                  size="lg"
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  borderRadius="full"
                >
                  <Icon as={social.icon} boxSize={6} color={`rgba(255,255,255,0.9)`} />
                </Button>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default ContactPage;
