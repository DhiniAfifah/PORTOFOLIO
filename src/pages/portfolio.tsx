import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import FolderIcon from "@/components/FolderIcon";
import DesktopObject from "@/components/DesktopObject";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleFolderClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <CustomCursor />

      {/* Desktop Background */}
      <Box
        minHeight="100vh"
        background="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
        position="relative"
        overflow="hidden"
        p={8}
      >
        {/* Decorative Objects */}
        <DesktopObject
          src="/image/about/Emoji4.png"
          alt="Cat"
          size="100px"
          position={{ top: "15%", right: "10%" }}
          animation="float"
        />

        <DesktopObject
          src="/image/about/profile.png"
          alt="Sofa"
          size="120px"
          position={{ bottom: "30%", left: "8%" }}
          animation="bounce"
        />

        <DesktopObject
          src="/image/about/Emoji2.png"
          alt="Coffee"
          size="80px"
          position={{ top: "20%", right: "25%" }}
          animation="rotate"
        />

        {/* Main Content */}
        <VStack gap={16} align="center" justify="center" minHeight="100vh">
          {/* Creative Folder */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              left: "5%",
              top: "25%",
            }}
          >
            <FolderIcon
              title="creative"
              icon="/image/Emoji.png"
              onClick={() => handleFolderClick("/creative")}
              size="medium"
            />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <VStack gap={4} align="center">
              <Text
                fontSize={{ base: "6xl", md: "8xl", lg: "12xl" }}
                fontWeight="300"
                color="black"
                fontFamily="Poppins, sans-serif"
                letterSpacing="-4px"
                textAlign="center"
                lineHeight="0.9"
              >
                Portofolio
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="gray.600"
                fontFamily="Poppins, sans-serif"
                textAlign="center"
              >
                by najla
              </Text>
            </VStack>
          </motion.div>

          {/* Design Folder */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              position: "absolute",
              bottom: "15%",
              right: "35%",
            }}
          >
            <FolderIcon
              title="design"
              icon="/image/about/Emoji3.png"
              onClick={() => handleFolderClick("/design")}
              size="medium"
            />
          </motion.div>

          {/* Meng Folder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              position: "absolute",
              right: "8%",
              top: "15%",
            }}
          >
            <FolderIcon
              title="meng"
              icon="/image/about/Emoji4.png"
              onClick={() => handleFolderClick("/about")}
              size="small"
            />
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{
              position: "absolute",
              bottom: "10%",
              right: "10%",
            }}
          >
            <Text
              fontSize="4xl"
              color="black"
              fontFamily="Poppins, sans-serif"
              fontWeight="300"
            >
              ©
            </Text>
          </motion.div>
        </VStack>
      </Box>
    </>
  );
};

export default Portfolio;
