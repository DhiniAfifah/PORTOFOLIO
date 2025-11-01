import { Box, Text, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface FolderIconProps {
  title: string;
  icon?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

const FolderIcon = ({
  title,
  icon,
  onClick,
  size = "medium",
}: FolderIconProps) => {
  const sizeConfig = {
    small: { folder: "80px", icon: "40px", text: "sm" },
    medium: { folder: "120px", icon: "60px", text: "md" },
    large: { folder: "160px", icon: "80px", text: "lg" },
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{ cursor: "none" }}
    >
      <VStack gap={2} align="center">
        <Box position="relative">
          {/* Folder background */}
          <Box
            width={config.folder}
            height={config.folder}
            background="linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)"
            borderRadius="12px"
            position="relative"
            boxShadow="0 4px 12px rgba(0,0,0,0.15)"
            _hover={{
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            }}
            transition="all 0.3s ease"
          >
            {/* Folder tab */}
            <Box
              position="absolute"
              top="-8px"
              left="20px"
              width="40px"
              height="16px"
              background="linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)"
              borderRadius="8px 8px 0 0"
            />

            {/* Content inside folder */}
            {icon && (
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                <Image
                  src={icon}
                  alt={title}
                  width={config.icon}
                  height={config.icon}
                  objectFit="contain"
                />
              </Box>
            )}
          </Box>
        </Box>

        <Text
          fontSize={config.text}
          fontWeight="medium"
          color="black"
          textAlign="center"
          fontFamily="Poppins, sans-serif"
          maxWidth="120px"
          truncate
        >
          {title}
        </Text>
      </VStack>
    </motion.div>
  );
};

export default FolderIcon;
