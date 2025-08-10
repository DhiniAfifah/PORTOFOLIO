"use client";
import { Box, Stack, Text, Flex, Badge } from "@chakra-ui/react";
import { motion, type Variants } from "framer-motion";

const timelineVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.3,
    },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

// Loading animation variants
const loadingDotVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const rocketVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

// Title animation variants
const titleWordVariants: Variants = {
  hidden: { opacity: 0, y: -50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const workExperiences = [
  {
    company: "Badan Standardisasi Nasional",
    location: "Tangerang, Banten",
    position: "Software Developer Internship",
    period: "Feb 2025 – June 2025",
    status: "Current",
    achievements: [
      "Built a Python FastAPI backend with SQLite for generating and managing digital calibration certificates. Developed APIs for PDF/XML generation, Excel conversion, and secure Base64 multimedia embedding, ensuring compliance with PTB XSD schemas. Collaborated with frontend and metrology teams, achieving a secure, optimized, and reliable platform.",
    ],
    technologies: ["Python", "FastAPI", "SQLite", "XML", "Base64"],
    color: "linear-gradient(135deg, #FFE4F1 0%, #FFCDEA 50%, #FFB6E1 100%)",
  },
];

export default function WorkExperienceSection() {
  return (
    <Box
      id="work-experience"
      mt={{ base: "80px", md: "100px", lg: "270px" }}
      px={{ base: "20px", md: "40px", lg: "80px" }}
      maxW="1200px"
      mx="auto"
    >
      {/* Section Header */}
      <Stack
        align="center"
        mb={{ base: "60px", md: "80px", lg: "100px" }}
        gap={4}
      >
        {/* Creative Title Design */}
        <Box position="relative" textAlign="center">
          {/* Background decorative elements */}
          <Box
            position="absolute"
            top="-20px"
            left="50%"
            transform="translateX(-50%)"
            w="200px"
            h="200px"
            bgGradient="radial(circle, rgba(255, 107, 157, 0.1) 0%, transparent 70%)"
            borderRadius="full"
            zIndex={0}
          />

          {/* Main Title Container */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={{ base: 2, md: 4 }}
            position="relative"
            zIndex={1}
          >
            {/* "Work" - Bold and Outlined */}
            <motion.div
              custom={0}
              variants={titleWordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="900"
                fontFamily="Inter, sans-serif"
                color="transparent"
                textShadow="2px 2px 4px rgba(0,0,0,0.1)"
                style={{
                  WebkitTextStroke: "3px #FF6B9D",
                }}
                letterSpacing="-0.05em"
                transform="rotate(-2deg)"
                display="inline-block"
              >
                Work
              </Text>
            </motion.div>

            {/* Decorative separator */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Box
                w="40px"
                h="6px"
                bgGradient="linear(to-r, #FF6B9D, #C44569)"
                borderRadius="full"
                transform="rotate(15deg)"
                display={{ base: "none", md: "block" }}
              />
            </motion.div>

            {/* "Experience" - Gradient Fill with Shadow */}
            <motion.div
              custom={1}
              variants={titleWordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="700"
                fontFamily="Playfair Display, serif"
                bgGradient="linear(135deg, #FF6B9D 0%, #C44569 50%, #8B2635 100%)"
                bgClip="text"
                letterSpacing="-0.02em"
                transform="rotate(1deg)"
                display="inline-block"
                position="relative"
                _before={{
                  content: '"Experience"',
                  position: "absolute",
                  top: "4px",
                  left: "4px",
                  zIndex: -1,
                  color: "rgba(255, 107, 157, 0.2)",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  fontFamily: "inherit",
                }}
              >
                Experience
              </Text>
            </motion.div>
          </Flex>

          {/* Floating decorative elements */}
        </Box>
      </Stack>

      {/* Timeline Container */}
      <Box position="relative" maxW="900px" mx="auto">
        {/* Timeline Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Box
            position="absolute"
            left={{ base: "20px", md: "50px" }}
            top="60px"
            w="4px"
            h="calc(100% - 120px)"
            bgGradient="linear(to-b, #FF6B9D, #FFCDEA, #FFE4F1)"
            borderRadius="full"
            zIndex={1}
          />
        </motion.div>

        {/* Experience Items */}
        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Flex
              position="relative"
              mb={{ base: "40px", md: "60px" }}
              align="flex-start"
              direction={{ base: "column", md: "row" }}
            >
              {/* Timeline Dot */}
              <motion.div
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box
                  position={{ base: "absolute", md: "relative" }}
                  left={{ base: "12px", md: "42px" }}
                  top={{ base: "20px", md: "20px" }}
                  w="20px"
                  h="20px"
                  bg="white"
                  border="4px solid"
                  borderColor="#FF6B9D"
                  borderRadius="full"
                  zIndex={2}
                  boxShadow="0 0 0 4px rgba(255, 107, 157, 0.2)"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    w: "8px",
                    h: "8px",
                    bg: "#FF6B9D",
                    borderRadius: "full",
                  }}
                />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ flex: 1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Box
                  ml={{ base: "50px", md: "30px" }}
                  bg="white"
                  borderRadius="20px"
                  p={{ base: "24px", md: "32px" }}
                  boxShadow="0 10px 40px rgba(0,0,0,0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  position="relative"
                  _hover={{
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  }}
                  transition="all 0.3s ease"
                >
                  {/* Status Badge */}
                  {experience.status && (
                    <Badge
                      position="absolute"
                      top="-10px"
                      right="20px"
                      bg="#FF6B9D"
                      color="white"
                      px="12px"
                      py="4px"
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="none"
                    >
                      {experience.status}
                    </Badge>
                  )}

                  {/* Company & Location */}
                  <Stack gap={2} mb="16px">
                    <Text
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="bold"
                      color="gray.800"
                      fontFamily="Poppins, sans-serif"
                    >
                      {experience.company}
                    </Text>
                    <Text
                      fontSize="md"
                      color="gray.600"
                      fontFamily="Poppins, sans-serif"
                    >
                      📍 {experience.location}
                    </Text>
                  </Stack>

                  {/* Position & Period */}
                  <Flex
                    justify="space-between"
                    align={{ base: "flex-start", md: "center" }}
                    direction={{ base: "column", md: "row" }}
                    mb="24px"
                    gap={2}
                  >
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="semibold"
                      color="#FF6B9D"
                      fontFamily="Poppins, sans-serif"
                    >
                      {experience.position}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      fontWeight="500"
                      bg="gray.50"
                      px="12px"
                      py="4px"
                      borderRadius="full"
                    >
                      {experience.period}
                    </Text>
                  </Flex>

                  {/* Achievements */}
                  <Box mb="24px">
                    {experience.achievements.map((achievement, idx) => (
                      <Text
                        key={idx}
                        fontSize="sm"
                        color="gray.600"
                        lineHeight="1.6"
                        fontFamily="Poppins, sans-serif"
                        mb={
                          idx !== experience.achievements.length - 1
                            ? "8px"
                            : "0"
                        }
                      >
                        {achievement}
                      </Text>
                    ))}
                  </Box>

                  {/* Technologies */}
                  <Box>
                    <Text
                      fontSize="md"
                      fontWeight="semibold"
                      color="gray.700"
                      mb="12px"
                      fontFamily="Poppins, sans-serif"
                    >
                      Technologies Used:
                    </Text>
                    <Flex wrap="wrap" gap="8px">
                      {experience.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            bg="rgba(255, 107, 157, 0.1)"
                            color="#C44569"
                            px="10px"
                            py="4px"
                            borderRadius="full"
                            fontSize="xs"
                            fontWeight="500"
                            textTransform="none"
                            cursor="pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </Flex>
                  </Box>

                  {/* Decorative Element */}
                  <Box
                    position="absolute"
                    top="20px"
                    right="20px"
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    background={experience.color}
                    opacity="0.1"
                    zIndex={0}
                  />
                </Box>
              </motion.div>
            </Flex>
          </motion.div>
        ))}

        {/* Future Placeholder with Loading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Flex align="center" justify="center" mt="40px" position="relative">
            {/* Animated Timeline Dot */}
            <motion.div
              variants={loadingDotVariants}
              animate="animate"
              style={{
                position: "absolute",
                left: "42px",
              }}
            >
              <Box
                w="20px"
                h="20px"
                border="3px dashed"
                borderColor="gray.300"
                borderRadius="full"
                bg="gray.50"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  w: "6px",
                  h: "6px",
                  bg: "gray.400",
                  borderRadius: "full",
                }}
              />
            </motion.div>

            {/* Loading Text with Animated Dots and Rocket */}
            <Flex align="center" ml={{ base: "50px", md: "80px" }} gap="8px">
              <Text
                fontSize="lg"
                color="gray.400"
                fontStyle="italic"
                fontFamily="Poppins, sans-serif"
              >
                More experiences coming soon
              </Text>

              {/* Animated Loading Dots */}
              <Flex gap="2px" align="center">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Box w="4px" h="4px" bg="gray.400" borderRadius="full" />
                  </motion.div>
                ))}
              </Flex>

              {/* Animated Rocket */}
              <motion.span
                variants={rocketVariants}
                animate="animate"
                style={{
                  fontSize: "20px",
                  display: "inline-block",
                }}
              >
                🚀
              </motion.span>
            </Flex>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
}
