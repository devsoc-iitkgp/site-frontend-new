import React, { useState } from 'react';
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaCode, FaRocket, FaCopy } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeComparison.css';

const CodeComparison = ({ beforeCode, afterCode, language = "javascript" }) => {
  const [activeTab, setActiveTab] = useState('before');
  const [copied, setCopied] = useState(false);
  
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bgColor = "rgba(8, 8, 27, 0.8)";
  const borderColor = "rgba(138, 43, 226, 0.4)";
  const activeBorderColor = "rgba(138, 43, 226, 0.8)";
  
  return (
    <Box 
      className="code-comparison-container"
      bg={bgColor}
      borderRadius="md"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="0 0 20px rgba(138, 43, 226, 0.3)"
      overflow="hidden"
      maxW="100%"
    >
      {/* Code Comparison Header */}
      <Flex 
        alignItems="center" 
        p={2} 
        borderBottom="1px solid"
        borderColor={borderColor}
        bg="rgba(30, 30, 60, 0.6)"
      >
        <Text fontSize="sm" fontWeight="bold" color="whiteAlpha.800">
          DevSoc Code Transformer
        </Text>
      </Flex>
      
      {/* Tab Navigation */}
      <Flex className="code-comparison-tabs" borderBottom="1px solid" borderColor={borderColor}>
        <Button
          leftIcon={<FaCode />}
          variant="ghost"
          size="sm"
          borderRadius="0"
          borderBottom="2px solid"
          borderBottomColor={activeTab === 'before' ? activeBorderColor : 'transparent'}
          color={activeTab === 'before' ? "white" : "whiteAlpha.700"}
          onClick={() => setActiveTab('before')}
          _hover={{ bg: "rgba(138, 43, 226, 0.1)" }}
          flex="1"
        >
          Before
        </Button>
        <Button
          leftIcon={<FaRocket />}
          variant="ghost"
          size="sm"
          borderRadius="0"
          borderBottom="2px solid"
          borderBottomColor={activeTab === 'after' ? activeBorderColor : 'transparent'}
          color={activeTab === 'after' ? "white" : "whiteAlpha.700"}
          onClick={() => setActiveTab('after')}
          _hover={{ bg: "rgba(138, 43, 226, 0.1)" }}
          flex="1"
        >
          After
        </Button>
        
        {/* Desktop view shows both side by side */}
        <Box 
          display={{ base: "none", md: "block" }}
          borderBottom="2px solid"
          borderBottomColor="transparent"
          px={4}
          py={2}
        >
          <Text fontSize="xs" color="whiteAlpha.500">Desktop: Side by Side</Text>
        </Box>
      </Flex>
      
      {/* Mobile View: Code Content (shows active tab only) */}
      <Box 
        className="code-content-mobile"
        display={{ base: "block", md: "none" }}
      >
        {activeTab === 'before' ? (
          <Box position="relative">
            <Button 
              size="xs" 
              leftIcon={<FaCopy />} 
              position="absolute" 
              top={2} 
              right={2} 
              zIndex={2}
              onClick={() => handleCopy(beforeCode)}
              colorScheme="purple"
              variant="ghost"
              opacity={0.7}
              _hover={{ opacity: 1 }}
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter 
              language={language} 
              style={vscDarkPlus} 
              customStyle={{ 
                margin: 0, 
                borderRadius: 0,
                padding: "16px",
                maxHeight: "350px",
                backgroundColor: "transparent" 
              }}
              wrapLines={true}
            >
              {beforeCode}
            </SyntaxHighlighter>
          </Box>
        ) : (
          <Box position="relative">
            <Button 
              size="xs" 
              leftIcon={<FaCopy />} 
              position="absolute" 
              top={2} 
              right={2} 
              zIndex={2}
              onClick={() => handleCopy(afterCode)}
              colorScheme="purple"
              variant="ghost"
              opacity={0.7}
              _hover={{ opacity: 1 }}
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter 
              language={language} 
              style={vscDarkPlus} 
              customStyle={{ 
                margin: 0, 
                borderRadius: 0,
                padding: "16px",
                maxHeight: "350px",
                backgroundColor: "transparent" 
              }}
              wrapLines={true}
            >
              {afterCode}
            </SyntaxHighlighter>
          </Box>
        )}
      </Box>
      
      {/* Desktop View: Side by Side Comparison */}
      <Flex 
        className="code-content-desktop"
        display={{ base: "none", md: "flex" }}
      >
        <Box width="50%" position="relative" borderRight="1px solid" borderColor={borderColor}>
          <Button 
            size="xs" 
            leftIcon={<FaCopy />} 
            position="absolute" 
            top={2} 
            right={2} 
            zIndex={2}
            onClick={() => handleCopy(beforeCode)}
            colorScheme="purple"
            variant="ghost"
            opacity={0.7}
            _hover={{ opacity: 1 }}
          >
            Copy
          </Button>
          <SyntaxHighlighter 
            language={language} 
            style={vscDarkPlus} 
            customStyle={{ 
              margin: 0, 
              borderRadius: 0,
              padding: "16px",
              maxHeight: "400px",
              backgroundColor: "transparent" 
            }}
            wrapLines={true}
          >
            {beforeCode}
          </SyntaxHighlighter>
        </Box>
        <Box width="50%" position="relative">
          <Button 
            size="xs" 
            leftIcon={<FaCopy />} 
            position="absolute" 
            top={2} 
            right={2} 
            zIndex={2}
            onClick={() => handleCopy(afterCode)}
            colorScheme="purple"
            variant="ghost"
            opacity={0.7}
            _hover={{ opacity: 1 }}
          >
            Copy
          </Button>
          <SyntaxHighlighter 
            language={language} 
            style={vscDarkPlus} 
            customStyle={{ 
              margin: 0, 
              borderRadius: 0,
              padding: "16px",
              maxHeight: "400px",
              backgroundColor: "transparent" 
            }}
            wrapLines={true}
            className="after-code"
          >
            {afterCode}
          </SyntaxHighlighter>
        </Box>
      </Flex>
    </Box>
  );
};

export default CodeComparison;
