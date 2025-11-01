import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  // Redirect to main page
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
    >
      <VStack gap={4}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Text
            fontSize="2xl"
            fontWeight="600"
            color="gray.700"
            fontFamily="Poppins, sans-serif"
            textAlign="center"
          >
            Redirecting to main page...
          </Text>
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Box
            w="40px"
            h="40px"
            border="4px solid"
            borderColor="gray.200"
            borderTopColor="#FFD700"
            borderRadius="full"
          />
        </motion.div>
      </VStack>
    </Box>
  );
}
