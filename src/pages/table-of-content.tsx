import { Box, Text, VStack, HStack, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import FolderIcon from "@/components/FolderIcon";
import DesktopObject from "@/components/DesktopObject";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const TableOfContent = () => {
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
          src="/public/emo.svg"
          alt="Keyboard"
          size="120px"
          position={{ top: "10%", right: "15%" }}
          animation="float"
        />

        <DesktopObject
          src="/image/about/profile.png"
          alt="Coffee Cup"
          size="80px"
          position={{ bottom: "20%", right: "10%" }}
          animation="bounce"
        />

        {/* Main Content */}
        <VStack gap={12} align="center" justify="center" minHeight="100vh">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HStack gap={4} align="center">
              <DesktopObject
                src="/public/emo.svg"
                alt="Keyboard Icon"
                size="60px"
                position={{}}
                animation="none"
              />
              <Text
                fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
                fontWeight="300"
                color="black"
                fontFamily="Poppins, sans-serif"
                letterSpacing="-2px"
              >
                Table of content
              </Text>
              <DesktopObject
                src="/image/about/Emoji2.png"
                alt="Folder Icon"
                size="80px"
                position={{}}
                animation="none"
              />
            </HStack>
          </motion.div>

          {/* Folder Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
              gap={12}
              maxWidth="800px"
            >
              <motion.div variants={fadeInUp}>
                <FolderIcon
                  title="Books"
                  icon="/image/about/Emoji2.png"
                  onClick={() => handleFolderClick("/about")}
                  size="large"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <FolderIcon
                  title="Poster"
                  icon="/image/about/Emoji3.png"
                  onClick={() => handleFolderClick("/home")}
                  size="large"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <FolderIcon
                  title="Digital Ilustration"
                  icon="/image/about/Emoji4.png"
                  onClick={() => handleFolderClick("/portfolio")}
                  size="large"
                />
              </motion.div>
            </Grid>
          </motion.div>

          {/* Side Folders */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              position: "absolute",
              right: "5%",
              top: "30%",
            }}
          >
            <VStack gap={6}>
              <FolderIcon
                title="meng"
                icon="/image/Emoji.png"
                onClick={() => handleFolderClick("/contact")}
                size="medium"
              />
              <FolderIcon
                title="others"
                icon="/image/about/profile.png"
                onClick={() => handleFolderClick("/others")}
                size="medium"
              />
            </VStack>
          </motion.div>
        </VStack>
      </Box>
    </>
  );
};

export default TableOfContent;
