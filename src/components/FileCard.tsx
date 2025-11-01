import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FileTransition from "./FileTransition";

interface FileCardProps {
  title: string;
  description: string;
  image: string;
  route: string;
  fileType: "folder" | "document" | "image" | "code";
  tags?: string[];
  size?: "small" | "medium" | "large";
  rotation?: number;
  onFileClick?: () => void;
}

const FileCard = ({
  title,
  description,
  route,
  tags = [],
  size = "medium",
  rotation = 0,
  onFileClick,
}: FileCardProps) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sizeConfig = {
    small: { width: "260px", height: "200px", fontSize: "md" },
    medium: { width: "300px", height: "240px", fontSize: "lg" },
    large: { width: "340px", height: "280px", fontSize: "xl" },
  };

  const config = sizeConfig[size];

  const handleClick = () => {
    if (onFileClick) {
      onFileClick();
    } else if (route) {
      setIsTransitioning(true);
    }
  };

  const handleTransitionComplete = () => {
    navigate(route);
    setIsTransitioning(false);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        rotate: rotation + 1,
        zIndex: 10,
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ rotate: rotation }}
      onClick={handleClick}
      style={{
        cursor: "none",
        transformOrigin: "center center",
      }}
    >
      <Box width={config.width} height={config.height} position="relative">
        {/* Clean Folder Tab */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100px"
          height="24px"
          bg="#FFD700"
          borderRadius="8px 8px 0 0"
          zIndex={2}
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          _hover={{
            bg: "#FFC700",
          }}
          transition="all 0.2s ease"
        />

        {/* Clean Folder Body */}
        <Box
          width="100%"
          height="calc(100% - 24px)"
          bg="#FFF8DC"
          borderRadius="0 16px 16px 16px"
          position="absolute"
          top="24px"
          boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          border="1px solid rgba(0,0,0,0.1)"
          _hover={{
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            transform: "translateY(-2px)",
          }}
          transition="all 0.3s ease"
          overflow="hidden"
        >
          {/* Project Title */}
          <Box position="absolute" top="24px" left="16px" right="16px">
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="600"
              color="gray.800"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              textAlign="left"
              lineHeight="1.2"
              truncate
            >
              {title}
            </Text>
          </Box>

          {/* Project Description */}
          <Box position="absolute" top="56px" left="16px" right="16px">
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color="gray.600"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              textAlign="left"
              lineHeight="1.4"
              height="36px"
              overflow="hidden"
              fontWeight="400"
            >
              {description}
            </Text>
          </Box>

          {/* Bottom Section */}
          <Box
            position="absolute"
            bottom="12px"
            left="16px"
            right="16px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Tags */}
            <Text
              fontSize="xs"
              color="gray.500"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="500"
              textTransform="uppercase"
              letterSpacing="0.3px"
            >
              {tags.length > 0 ? tags.slice(0, 2).join(" • ") : "Project"}
            </Text>

            {/* Year Badge */}
            <Box
              px={2}
              py={1}
              bg="rgba(255, 193, 7, 0.2)"
              borderRadius="6px"
              border="1px solid rgba(255, 193, 7, 0.3)"
            >
              <Text
                fontSize="xs"
                color="rgba(184, 134, 11, 0.8)"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontWeight="600"
              >
                2024
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* File Transition */}
      <FileTransition
        isOpen={isTransitioning}
        fileName={title}
        onComplete={handleTransitionComplete}
      />
    </motion.div>
  );
};

export default FileCard;
