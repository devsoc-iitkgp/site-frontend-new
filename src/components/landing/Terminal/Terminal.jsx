import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import './Terminal.css';

// Create CSS keyframes animation instead of using Chakra's keyframes
const Terminal = ({ commands = [], typingSpeed = 50, initialDelay = 1000 }) => {
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);
  
  const bgColor = "rgba(8, 8, 27, 0.8)";
  const borderColor = "rgba(138, 43, 226, 0.4)";
  
  // Function to simulate typing
  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        const currentCommand = commands[currentCommandIndex];
        let i = 0;
        
        const typeChar = () => {
          if (i < currentCommand.text.length) {
            setCurrentText(prevText => prevText + currentCommand.text.charAt(i));
            i++;
            setTimeout(typeChar, typingSpeed);
          } else {
            setIsTyping(false);
            setShowCursor(false);
            
            // Add the completed command to displayed commands
            setTimeout(() => {
              setDisplayedCommands(prev => [
                ...prev, 
                { 
                  ...currentCommand, 
                  fullText: currentCommand.text,
                  result: currentCommand.result 
                }
              ]);
              setCurrentText('');
              setShowCursor(true);
              setCurrentCommandIndex(prevIndex => prevIndex + 1);
            }, 500);
          }
        };
        
        typeChar();
      }, currentCommandIndex === 0 ? initialDelay : 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentCommandIndex, commands, typingSpeed, initialDelay]);
  
  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedCommands, currentText]);

  return (
    <Box 
      className="terminal-container"
      bg={bgColor}
      borderRadius="md"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="0 0 20px rgba(138, 43, 226, 0.3)"
      overflow="hidden"
      maxW="100%"
      h={{ base: "300px", md: "400px" }}
      position="relative"
    >
      {/* Terminal Header */}
      <Flex 
        alignItems="center" 
        p={2} 
        borderBottom="1px solid"
        borderColor={borderColor}
        bg="rgba(30, 30, 60, 0.6)"
      >
        <Flex mr={2}>
          <Box className="terminal-btn red" />
          <Box className="terminal-btn yellow" />
          <Box className="terminal-btn green" />
        </Flex>
        <Text fontSize="sm" fontWeight="bold" color="whiteAlpha.800">
          DevSoc Terminal
        </Text>
      </Flex>
      
      {/* Terminal Content */}
      <Box 
        className="terminal-content"
        ref={terminalRef}
        p={4} 
        h="calc(100% - 40px)" 
        overflowY="auto"
        fontFamily="monospace"
        fontSize="sm"
        color="whiteAlpha.900"
      >
        {/* Terminal welcome message */}
        <Text mb={2} color="green.400">DevSoc Terminal v1.0.0</Text>
        <Text mb={4} color="whiteAlpha.700">Type a command or explore DevSoc projects</Text>
        
        {/* Previously completed commands */}
        {displayedCommands.map((cmd, index) => (
          <Box key={index} mb={3}>
            <Flex>
              <Text color="cyan.400" mr={2}>devsoc@user:~$</Text>
              <Text>{cmd.fullText}</Text>
            </Flex>
            {cmd.result && (
              <Text 
                mt={1} 
                color={cmd.isError ? "red.300" : "whiteAlpha.800"}
                whiteSpace="pre-wrap"
              >
                {cmd.result}
              </Text>
            )}
          </Box>
        ))}
        
        {/* Current command being typed */}
        {currentCommandIndex < commands.length && (
          <Flex>
            <Text color="cyan.400" mr={2}>devsoc@user:~$</Text>
            <Text>
              {currentText}
              {showCursor && (
                <Box 
                  as="span"
                  className="cursor-blink"
                  display="inline-block"
                  w="8px"
                  h="1em" 
                  bg="whiteAlpha.800"
                  ml="1px"
                  opacity={isTyping ? 1 : undefined}
                />
              )}
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Terminal;
