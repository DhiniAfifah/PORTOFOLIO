"use client";
import { Box, Text, VStack, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

interface WorkExperience {
  company: string;
  location: string;
  position: string;
  period: string;
  workDescription: string;
  color: string;
}

interface SelectedExperience extends WorkExperience {
  index: number;
}

const workExperiences: WorkExperience[] = [
  {
    company: "Badan Standardisasi Nasional",
    location: "Tangerang, Banten",
    position: "Software Developer Internship",
    period: "Feb 2025 – June 2025",
    workDescription:
      "Membangun backend Python FastAPI dengan SQLite untuk menghasilkan dan mengelola sertifikat kalibrasi digital. Mengembangkan API untuk generasi PDF/XML, konversi Excel, dan embedding multimedia Base64 yang aman, memastikan kepatuhan dengan skema PTB XSD. Berkolaborasi dengan tim frontend dan metrologi untuk menciptakan platform yang aman, optimal, dan andal.",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    company: "AirNav Indonesia",
    location: "Jakarta, Indonesia",
    position: "Software Development Intern",
    period: "Sep 2025 – Dec 2025",
    workDescription:
      "Mengembangkan dan memelihara sistem manajemen lalu lintas udara menggunakan teknologi web modern. Berkolaborasi dengan developer senior untuk mengimplementasikan fitur baru untuk sistem pelacakan penerbangan dan navigasi. Berpartisipasi dalam code review dan proses testing untuk memastikan keandalan sistem dan standar keselamatan yang digunakan oleh pengontrol lalu lintas udara di seluruh Indonesia.",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

export default function WorkExperienceSection() {
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedExperience, setSelectedExperience] =
    useState<SelectedExperience | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleCardClick = (experience: WorkExperience, index: number) => {
    setSelectedExperience({ ...experience, index });
    onOpen();
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    setTimeout(() => {
      onClose();
      setIsMinimized(false);
    }, 300);
  };

  return (
    <Box
      id="work-experience"
      minHeight="100vh"
      background="linear-gradient(135deg, #f4f1eb 0%, #e8e2d5 100%)"
      py={16}
      px={6}
      position="relative"
      overflow="hidden"
      mt="-1px"
    >
      {/* Background Elements - similar to FileExplorer */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        width="300px"
        height="300px"
        borderRadius="50%"
        background="rgba(123, 179, 240, 0.1)"
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-150px"
        left="-150px"
        width="400px"
        height="400px"
        borderRadius="50%"
        background="rgba(255, 255, 255, 0.2)"
        filter="blur(80px)"
      />

      <VStack gap={12} maxWidth="1200px" mx="auto" position="relative">
        {/* Clean Header - similar to FileExplorer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <VStack gap={4} textAlign="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="400"
              color="gray.800"
              fontFamily="Georgia, serif"
              fontStyle="italic"
            >
              Work Experience
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              fontFamily="Poppins, sans-serif"
              maxWidth="600px"
            >
              My professional journey through internships and work experiences,
              showcasing growth in software development and technical skills.
            </Text>
          </VStack>
        </motion.div>

        {/* Experience Cards Grid - similar to FileExplorer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          style={{ width: "100%" }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={8}
            justifyItems="center"
          >
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleCardClick(experience, index)}
                style={{ cursor: "pointer" }}
              >
                {/* Desktop Window Card */}
                <Box
                  width={{ base: "350px", md: "400px", lg: "450px" }}
                  height={{ base: "300px", md: "320px", lg: "340px" }}
                  position="relative"
                >
                  {/* Window Frame */}
                  <Box
                    width="100%"
                    height="100%"
                    background="white"
                    borderRadius="16px"
                    boxShadow="0 20px 60px rgba(0,0,0,0.15)"
                    border="1px solid rgba(0,0,0,0.1)"
                    overflow="hidden"
                    position="relative"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "0 25px 70px rgba(0,0,0,0.2)",
                    }}
                    transition="all 0.3s ease"
                  >
                    {/* Window Title Bar */}
                    <Box
                      height="40px"
                      background={index === 0 ? "#E57373" : "#4A90E2"}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      px={4}
                    >
                      {/* Window Controls */}
                      <Box display="flex" gap={2}>
                        <Box
                          w="12px"
                          h="12px"
                          bg="#FF5F57"
                          borderRadius="full"
                          _hover={{ bg: "#FF3B30" }}
                          transition="all 0.2s"
                        />
                        <Box
                          w="12px"
                          h="12px"
                          bg="#FFBD2E"
                          borderRadius="full"
                          _hover={{ bg: "#FF9500" }}
                          transition="all 0.2s"
                        />
                        <Box
                          w="12px"
                          h="12px"
                          bg="#28CA42"
                          borderRadius="full"
                          _hover={{ bg: "#30D158" }}
                          transition="all 0.2s"
                        />
                      </Box>
                      {/* Window Title */}
                      <Text
                        fontSize="sm"
                        color="white"
                        fontWeight="600"
                        fontFamily="Poppins, sans-serif"
                      >
                        {experience.company.split(" ")[0]} - Experience
                      </Text>
                      <Box w="36px" />
                    </Box>

                    {/* Window Content */}
                    <Box
                      p={6}
                      height="calc(100% - 40px)"
                      display="flex"
                      flexDirection="column"
                    >
                      {/* Company Header */}
                      <VStack gap={3} mb={4}>
                        <Text
                          fontSize={{ base: "lg", md: "xl" }}
                          fontWeight="bold"
                          color="gray.800"
                          fontFamily="Georgia, serif"
                          textAlign="center"
                          lineHeight="1.2"
                        >
                          {experience.company}
                        </Text>

                        <Box
                          bg={index === 0 ? "#E57373" : "#4A90E2"}
                          px={4}
                          py={2}
                          borderRadius="full"
                          color="white"
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="600"
                            fontFamily="Poppins, sans-serif"
                            textAlign="center"
                          >
                            {experience.position}
                          </Text>
                        </Box>
                      </VStack>

                      {/* Details Section */}
                      <VStack gap={3} flex="1">
                        {/* Location & Period */}
                        <Box
                          bg="gray.50"
                          p={3}
                          borderRadius="12px"
                          width="100%"
                          border="1px solid"
                          borderColor="gray.200"
                        >
                          <VStack gap={1}>
                            <Text
                              fontSize="sm"
                              color="gray.600"
                              fontFamily="Poppins, sans-serif"
                              textAlign="center"
                            >
                              📍 {experience.location}
                            </Text>
                            <Text
                              fontSize="sm"
                              color="gray.700"
                              fontFamily="Poppins, sans-serif"
                              textAlign="center"
                              fontWeight="600"
                            >
                              {experience.period}
                            </Text>
                          </VStack>
                        </Box>

                        {/* Subtle hint */}
                        <Text
                          fontSize="xs"
                          color="gray.400"
                          fontFamily="Poppins, sans-serif"
                          textAlign="center"
                          fontStyle="italic"
                          mt={2}
                        >
                          Click to view details
                        </Text>
                      </VStack>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}

            {/* Coming Soon Window */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Box
                width={{ base: "350px", md: "400px", lg: "450px" }}
                height={{ base: "380px", md: "420px", lg: "460px" }}
                position="relative"
              >
                {/* Window Frame */}
                <Box
                  width="100%"
                  height="100%"
                  background="white"
                  borderRadius="16px"
                  boxShadow="0 10px 30px rgba(0,0,0,0.1)"
                  border="2px dashed #D1D5DB"
                  overflow="hidden"
                  position="relative"
                  opacity="0.7"
                >
                  {/* Window Title Bar */}
                  <Box
                    height="40px"
                    background="#E5E7EB"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                  >
                    {/* Window Controls */}
                    <Box display="flex" gap={2}>
                      <Box
                        w="12px"
                        h="12px"
                        bg="rgba(107,114,128,0.3)"
                        borderRadius="full"
                      />
                      <Box
                        w="12px"
                        h="12px"
                        bg="rgba(107,114,128,0.3)"
                        borderRadius="full"
                      />
                      <Box
                        w="12px"
                        h="12px"
                        bg="rgba(107,114,128,0.3)"
                        borderRadius="full"
                      />
                    </Box>

                    {/* Window Title */}
                    <Text
                      fontSize="sm"
                      color="#6B7280"
                      fontWeight="600"
                      fontFamily="Poppins, sans-serif"
                    >
                      Coming Soon - Experience
                    </Text>

                    <Box w="36px" />
                  </Box>

                  {/* Window Content */}
                  <Box
                    p={6}
                    height="calc(100% - 40px)"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <VStack gap={6}>
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        color="#6B7280"
                        fontFamily="Georgia, serif"
                        fontStyle="italic"
                        textAlign="center"
                      >
                        More experiences coming soon
                      </Text>

                      {/* Animated Loading Dots */}
                      <Box display="flex" gap={3}>
                        {[0, 1, 2].map((index) => (
                          <motion.div
                            key={index}
                            animate={{
                              opacity: [0.3, 1, 0.3],
                              scale: [0.8, 1.3, 0.8],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: index * 0.2,
                              ease: "easeInOut",
                            }}
                          >
                            <Box
                              w="10px"
                              h="10px"
                              bg="#9CA3AF"
                              borderRadius="full"
                            />
                          </motion.div>
                        ))}
                      </Box>

                      {/* Progress Bar */}
                      <Box
                        width="200px"
                        height="4px"
                        bg="gray.200"
                        borderRadius="full"
                        overflow="hidden"
                      >
                        <motion.div
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            width: "50%",
                            height: "100%",
                            background:
                              "linear-gradient(90deg, transparent, #9CA3AF, transparent)",
                          }}
                        />
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </SimpleGrid>
        </motion.div>
      </VStack>

      {/* Custom Modal Popup */}
      <AnimatePresence>
        {open && selectedExperience && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(10px)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
              onClick={onClose}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{
                  scale: isMinimized ? 0.1 : 1,
                  opacity: isMinimized ? 0 : 1,
                  y: isMinimized ? 100 : 0,
                }}
                exit={{ scale: 0.3, opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.3,
                }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "90vw",
                  maxWidth: "1200px",
                  height: "80vh",
                  maxHeight: "800px",
                }}
              >
                {/* Expanded Window */}
                <Box
                  width="100%"
                  height="100%"
                  background="white"
                  borderRadius="20px"
                  boxShadow="0 30px 100px rgba(0,0,0,0.3)"
                  border="1px solid rgba(0,0,0,0.1)"
                  overflow="hidden"
                  position="relative"
                >
                  {/* Window Title Bar */}
                  <Box
                    height="50px"
                    background={
                      selectedExperience.index === 0 ? "#E57373" : "#4A90E2"
                    }
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px={6}
                  >
                    {/* Window Controls */}
                    <Box display="flex" gap={3}>
                      <Box
                        w="16px"
                        h="16px"
                        bg="#FF5F57"
                        borderRadius="full"
                        cursor="pointer"
                        _hover={{ bg: "#FF3B30", transform: "scale(1.1)" }}
                        transition="all 0.2s"
                        onClick={onClose}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="10px"
                        color="white"
                        fontWeight="bold"
                      >
                        ×
                      </Box>
                      <Box
                        w="16px"
                        h="16px"
                        bg="#FFBD2E"
                        borderRadius="full"
                        cursor="pointer"
                        _hover={{ bg: "#FF9500", transform: "scale(1.1)" }}
                        transition="all 0.2s"
                        onClick={handleMinimize}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="12px"
                        color="white"
                        fontWeight="bold"
                      >
                        −
                      </Box>
                      <Box
                        w="16px"
                        h="16px"
                        bg="#28CA42"
                        borderRadius="full"
                        cursor="pointer"
                        _hover={{ bg: "#30D158", transform: "scale(1.1)" }}
                        transition="all 0.2s"
                      />
                    </Box>

                    {/* Window Title */}
                    <Text
                      fontSize="md"
                      color="white"
                      fontWeight="600"
                      fontFamily="Poppins, sans-serif"
                    >
                      {selectedExperience.company} - Detailed Experience
                    </Text>

                    <Box w="60px" />
                  </Box>

                  {/* Window Content */}
                  <Box
                    p={8}
                    height="calc(100% - 50px)"
                    overflowY="auto"
                    css={{
                      "&::-webkit-scrollbar": {
                        width: "8px",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                        borderRadius: "4px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "#c1c1c1",
                        borderRadius: "4px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "#a8a8a8",
                      },
                    }}
                  >
                    <VStack gap={8} maxW="800px" mx="auto">
                      {/* Company Header */}
                      <VStack gap={4}>
                        <Text
                          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                          fontWeight="bold"
                          color="gray.800"
                          fontFamily="Georgia, serif"
                          textAlign="center"
                          lineHeight="1.2"
                        >
                          {selectedExperience.company}
                        </Text>

                        <Box
                          bg={
                            selectedExperience.index === 0
                              ? "#E57373"
                              : "#4A90E2"
                          }
                          px={6}
                          py={3}
                          borderRadius="full"
                          color="white"
                        >
                          <Text
                            fontSize="lg"
                            fontWeight="600"
                            fontFamily="Poppins, sans-serif"
                            textAlign="center"
                          >
                            {selectedExperience.position}
                          </Text>
                        </Box>
                      </VStack>

                      {/* Location & Period */}
                      <Box
                        bg="gray.50"
                        p={6}
                        borderRadius="16px"
                        width="100%"
                        border="1px solid"
                        borderColor="gray.200"
                      >
                        <VStack gap={3}>
                          <Text
                            fontSize="lg"
                            color="gray.600"
                            fontFamily="Poppins, sans-serif"
                            textAlign="center"
                          >
                            📍 {selectedExperience.location}
                          </Text>
                          <Text
                            fontSize="lg"
                            color="gray.700"
                            fontFamily="Poppins, sans-serif"
                            textAlign="center"
                            fontWeight="600"
                          >
                            {selectedExperience.period}
                          </Text>
                        </VStack>
                      </Box>

                      {/* Work Description */}
                      <Box width="100%">
                        <Text
                          fontSize="xl"
                          color="gray.700"
                          fontFamily="Poppins, sans-serif"
                          textAlign="center"
                          mb={6}
                          fontWeight="600"
                        >
                          Apa yang saya kerjakan:
                        </Text>
                        <Box
                          bg="gray.50"
                          p={6}
                          borderRadius="16px"
                          border="1px solid"
                          borderColor="gray.200"
                        >
                          <Text
                            fontSize="md"
                            color="gray.700"
                            fontFamily="Poppins, sans-serif"
                            textAlign="justify"
                            lineHeight="1.8"
                          >
                            {selectedExperience.workDescription}
                          </Text>
                        </Box>
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}
