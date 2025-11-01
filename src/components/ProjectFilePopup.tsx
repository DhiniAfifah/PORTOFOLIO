import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Grid,
  Link,
  Flex,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectData {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: { name: string; icon: string }[];
  links: { type: string; url: string; icon: string }[];
  category: string;
  year: string;
}

interface ProjectFilePopupProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

const ProjectFilePopup = ({
  isOpen,
  onClose,
  project,
}: ProjectFilePopupProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Global CSS for crosshair */}
          <style>
            {`
              .popup-crosshair,
              .popup-crosshair *,
              .popup-crosshair *:hover,
              .popup-crosshair button,
              .popup-crosshair a,
              .popup-crosshair div,
              .popup-crosshair span,
              .popup-crosshair p,
              .popup-crosshair img {
                cursor: crosshair !important;
              }
            `}
          </style>

          {/* iOS Style Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="popup-crosshair"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              zIndex: 9999,
              cursor: "crosshair !important",
            }}
          />

          {/* iOS Modal Container */}
          <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={10000}
            p={4}
            className="popup-crosshair"
            style={{ cursor: "crosshair !important" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94], // iOS-like easing
              }}
              className="popup-crosshair"
              style={{
                width: "100%",
                maxWidth: "950px",
                maxHeight: "85vh",
                cursor: "crosshair !important",
              }}
            >
              <Box
                bg="rgba(255, 255, 255, 0.95)"
                backdropFilter="blur(40px)"
                borderRadius="20px"
                boxShadow="0 25px 80px rgba(0,0,0,0.25)"
                overflow="hidden"
                width="100%"
                border="1px solid rgba(255,255,255,0.2)"
                className="popup-crosshair"
                style={{
                  cursor: "crosshair !important",
                  WebkitBackdropFilter: "blur(40px)",
                }}
              >
                {/* iOS Style Header */}
                <Box
                  bg="rgba(247, 247, 247, 0.8)"
                  backdropFilter="blur(20px)"
                  borderBottom="1px solid rgba(0,0,0,0.05)"
                  p={5}
                  position="relative"
                  className="popup-crosshair"
                  style={{
                    cursor: "crosshair !important",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <HStack justify="space-between" align="center">
                    {/* Left: Folder Icon and Title */}
                    <HStack gap={4} align="center">
                      <Box
                        bg="rgba(0, 122, 255, 0.1)"
                        borderRadius="12px"
                        p={2}
                        border="1px solid rgba(0, 122, 255, 0.2)"
                      >
                        <Text fontSize="24px">📁</Text>
                      </Box>
                      <VStack align="start" gap={0}>
                        <Text
                          fontSize="xl"
                          fontWeight="600"
                          color="gray.900"
                          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                          letterSpacing="-0.5px"
                        >
                          {project.title}
                        </Text>
                        <HStack gap={2}>
                          <Text
                            fontSize="sm"
                            color="gray.600"
                            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                            fontWeight="500"
                          >
                            {project.category}
                          </Text>
                          <Text fontSize="sm" color="gray.400">
                            •
                          </Text>
                          <Text
                            fontSize="sm"
                            color="gray.600"
                            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                            fontWeight="500"
                          >
                            {project.year}
                          </Text>
                        </HStack>
                      </VStack>
                    </HStack>

                    {/* Right: iOS Close Button */}
                    <Box
                      as="button"
                      onClick={onClose}
                      w="32px"
                      h="32px"
                      bg="rgba(120, 120, 128, 0.16)"
                      borderRadius="50%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      className="popup-crosshair"
                      _hover={{
                        bg: "rgba(120, 120, 128, 0.24)",
                        transform: "scale(1.05)",
                      }}
                      _active={{
                        transform: "scale(0.95)",
                      }}
                      transition="all 0.15s ease"
                      style={{ cursor: "crosshair !important" }}
                    >
                      <Text
                        fontSize="14px"
                        color="gray.600"
                        fontWeight="600"
                        lineHeight="1"
                      >
                        ✕
                      </Text>
                    </Box>
                  </HStack>
                </Box>

                {/* iOS Content */}
                <Box
                  maxHeight="70vh"
                  overflow="auto"
                  className="popup-crosshair"
                  style={{ cursor: "crosshair !important" }}
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "rgba(0,0,0,0.05)",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "rgba(0,0,0,0.2)",
                      borderRadius: "3px",
                    },
                  }}
                >
                  <VStack gap={0} align="stretch">
                    {/* iOS Project Images */}
                    <Box
                      p={6}
                      bg="rgba(248, 248, 248, 0.6)"
                      className="popup-crosshair"
                      style={{ cursor: "crosshair !important" }}
                    >
                      <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        gap={4}
                      >
                        {project.images.map((image, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.02, y: -2 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            style={{ cursor: "crosshair" }}
                          >
                            <Box
                              borderRadius="16px"
                              overflow="hidden"
                              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                              _hover={{
                                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                              }}
                              transition="box-shadow 0.25s ease"
                              border="1px solid rgba(0,0,0,0.04)"
                            >
                              <Image
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                objectFit="cover"
                                height="200px"
                                width="100%"
                              />
                            </Box>
                          </motion.div>
                        ))}
                      </Grid>
                    </Box>

                    {/* iOS Project Details */}
                    <VStack
                      gap={6}
                      p={6}
                      align="stretch"
                      className="popup-crosshair"
                      style={{ cursor: "crosshair !important" }}
                    >
                      {/* iOS Description Section */}
                      <Box
                        bg="rgba(255, 255, 255, 0.7)"
                        borderRadius="16px"
                        p={5}
                        border="1px solid rgba(0,0,0,0.04)"
                        backdropFilter="blur(10px)"
                        className="popup-crosshair"
                        style={{ cursor: "crosshair !important" }}
                      >
                        <VStack align="start" gap={3}>
                          <Text
                            fontSize="xl"
                            fontWeight="600"
                            color="gray.900"
                            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                            letterSpacing="-0.3px"
                          >
                            Project Overview
                          </Text>
                          <Text
                            fontSize="md"
                            color="gray.700"
                            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                            lineHeight="1.6"
                            letterSpacing="0.1px"
                          >
                            {project.longDescription}
                          </Text>
                        </VStack>
                      </Box>

                      {/* iOS Technologies Section */}
                      <Box
                        bg="rgba(255, 255, 255, 0.7)"
                        borderRadius="16px"
                        p={5}
                        border="1px solid rgba(0,0,0,0.04)"
                        backdropFilter="blur(10px)"
                        className="popup-crosshair"
                        style={{ cursor: "crosshair !important" }}
                      >
                        <VStack align="start" gap={4}>
                          <Text
                            fontSize="xl"
                            fontWeight="600"
                            color="gray.900"
                            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                            letterSpacing="-0.3px"
                          >
                            Technologies Used
                          </Text>
                          <Flex wrap="wrap" gap={3}>
                            {project.technologies.map((tech, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                style={{ cursor: "crosshair" }}
                              >
                                <VStack
                                  gap={2}
                                  p={3}
                                  bg="rgba(255, 255, 255, 0.9)"
                                  borderRadius="12px"
                                  minWidth="75px"
                                  boxShadow="0 2px 10px rgba(0,0,0,0.06)"
                                  border="1px solid rgba(0,0,0,0.04)"
                                  _hover={{
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                    bg: "rgba(255, 255, 255, 1)",
                                  }}
                                  transition="all 0.2s ease"
                                >
                                  <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    boxSize="32px"
                                    objectFit="contain"
                                  />
                                  <Text
                                    fontSize="xs"
                                    color="gray.700"
                                    fontWeight="500"
                                    textAlign="center"
                                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                                  >
                                    {tech.name}
                                  </Text>
                                </VStack>
                              </motion.div>
                            ))}
                          </Flex>
                        </VStack>
                      </Box>

                      {/* iOS Links Section */}
                      <Box
                        bg="rgba(255, 255, 255, 0.7)"
                        borderRadius="16px"
                        p={5}
                        border="1px solid rgba(0,0,0,0.04)"
                        backdropFilter="blur(10px)"
                        className="popup-crosshair"
                        style={{ cursor: "crosshair !important" }}
                      >
                        <VStack align="start" gap={4}>
                          <Text
                            fontSize="xl"
                            fontWeight="600"
                            color="gray.900"
                            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                            letterSpacing="-0.3px"
                          >
                            Project Links
                          </Text>
                          <HStack gap={3} flexWrap="wrap">
                            {project.links.map((link, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                                style={{ cursor: "crosshair" }}
                              >
                                <Link
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  _hover={{ textDecoration: "none" }}
                                  style={{ cursor: "crosshair" }}
                                >
                                  <Box
                                    px={4}
                                    py={3}
                                    bg="rgba(0, 122, 255, 1)"
                                    borderRadius="10px"
                                    color="white"
                                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                                    fontWeight="500"
                                    fontSize="sm"
                                    boxShadow="0 2px 8px rgba(0, 122, 255, 0.3)"
                                    _hover={{
                                      bg: "rgba(0, 122, 255, 0.9)",
                                      boxShadow:
                                        "0 4px 12px rgba(0, 122, 255, 0.4)",
                                    }}
                                    transition="all 0.15s ease"
                                  >
                                    <HStack gap={2}>
                                      <Image
                                        src={link.icon}
                                        alt={link.type}
                                        boxSize="16px"
                                        filter="brightness(0) invert(1)"
                                      />
                                      <Text>
                                        {link.type === "website"
                                          ? "Live Demo"
                                          : link.type === "github"
                                          ? "Source Code"
                                          : link.type === "figma"
                                          ? "Design File"
                                          : link.type}
                                      </Text>
                                    </HStack>
                                  </Box>
                                </Link>
                              </motion.div>
                            ))}
                          </HStack>
                        </VStack>
                      </Box>
                    </VStack>
                  </VStack>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectFilePopup;
