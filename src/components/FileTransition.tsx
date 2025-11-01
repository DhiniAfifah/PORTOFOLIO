import { Box, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface FileTransitionProps {
  isOpen: boolean;
  fileName: string;
  onComplete?: () => void;
}

const FileTransition = ({
  isOpen,
  fileName,
  onComplete,
}: FileTransitionProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
        onComplete?.();
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen, onComplete]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* File opening animation */}
          <motion.div
            initial={{ scale: 0.5, rotateY: -90 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0.5, rotateY: 90 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box
              width="400px"
              height="300px"
              background="white"
              borderRadius="16px"
              boxShadow="0 20px 60px rgba(0,0,0,0.3)"
              position="relative"
              overflow="hidden"
            >
              {/* File header */}
              <Box
                p={4}
                bg="gray.100"
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <Text
                  fontSize="lg"
                  fontWeight="medium"
                  color="gray.700"
                  fontFamily="Poppins, sans-serif"
                >
                  📄 {fileName}
                </Text>
              </Box>

              {/* Loading animation */}
              <VStack
                justify="center"
                align="center"
                height="calc(100% - 60px)"
                gap={4}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Box
                    width="40px"
                    height="40px"
                    border="3px solid"
                    borderColor="blue.200"
                    borderTopColor="blue.500"
                    borderRadius="full"
                  />
                </motion.div>

                <Text
                  fontSize="md"
                  color="gray.600"
                  fontFamily="Poppins, sans-serif"
                >
                  Opening file...
                </Text>
              </VStack>
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FileTransition;
