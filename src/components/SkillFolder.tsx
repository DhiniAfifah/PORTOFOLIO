import { Box, Text, VStack, Image, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SkillFolderProps {
  title: string;
  description: string;
  icon: string;
  tools: string[];
  color?: string;
}

const SkillFolder = ({
  title,
  description,
  icon,
  tools,
  color = "#4A90E2",
}: SkillFolderProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        position="relative"
        width={{ base: "280px", md: "320px", lg: "350px" }}
        height={{ base: "320px", md: "360px", lg: "400px" }}
      >
        {/* Folder Background */}
        <Box
          width="100%"
          height="85%"
          background={`linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`}
          borderRadius="16px"
          position="relative"
          boxShadow="0 8px 25px rgba(0,0,0,0.15)"
          _hover={{
            boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
          }}
          transition="all 0.3s ease"
          mt="40px"
        >
          {/* Folder Tab */}
          <Box
            position="absolute"
            top="-20px"
            left="30px"
            width="80px"
            height="40px"
            background={color}
            borderRadius="12px 12px 0 0"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontSize="xs" fontWeight="bold">
              SKILL
            </Text>
          </Box>

          {/* Content */}
          <VStack gap={4} p={6} pt={8} height="100%" justify="space-between">
            {/* Icon */}
            <Box
              bg="white"
              borderRadius="full"
              p={4}
              boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            >
              <Image
                src={icon}
                alt={title}
                width="60px"
                height="60px"
                objectFit="contain"
              />
            </Box>

            {/* Title */}
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="white"
              fontWeight="bold"
              textAlign="center"
              fontFamily="Poppins, sans-serif"
            >
              {title}
            </Text>

            {/* Description */}
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="white"
              textAlign="center"
              fontFamily="Poppins, sans-serif"
              opacity="0.9"
              lineHeight="1.4"
            >
              {description}
            </Text>

            {/* Tools */}
            <VStack gap={2} width="100%">
              <Text
                fontSize="sm"
                color="white"
                fontWeight="semibold"
                opacity="0.8"
              >
                Tools & Technologies:
              </Text>
              <HStack gap={2} wrap="wrap" justify="center">
                {tools.map((tool, index) => (
                  <Box
                    key={index}
                    bg="rgba(255,255,255,0.2)"
                    px={2}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    color="white"
                    fontWeight="medium"
                  >
                    {tool}
                  </Box>
                ))}
              </HStack>
            </VStack>
          </VStack>
        </Box>

        {/* Folder Label */}
        <Text
          position="absolute"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
          fontSize="md"
          fontWeight="medium"
          color="black"
          textAlign="center"
          fontFamily="Poppins, sans-serif"
          bg="white"
          px={3}
          py={1}
          borderRadius="full"
          boxShadow="0 2px 8px rgba(0,0,0,0.1)"
        >
          {title}
        </Text>
      </Box>
    </motion.div>
  );
};

export default SkillFolder;
