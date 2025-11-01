"use client";

import { Box, Text, Image, SimpleGrid, Flex, VStack } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hover: {
    scale: 1.02,
    filter: "grayscale(0%) contrast(1.1)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const experiences = [
  {
    title: "Visual Journalism Day",
    category: "Web Development",
    image: "/image/VJD.png",
    description:
      "Collaborated with a team to develop a user-friendly website. Ensured design alignment, conducted functionality tests, and maintained the site for optimal performance and visitor engagement.",
    year: "2024",
    color: "linear-gradient(135deg, #FFE4F1 0%, #FFCDEA 50%, #FFB6E1 100%)",
  },
  {
    title: "UMN JUICE",
    category: "Web Development",
    image: "/image/JUICE.png",
    description:
      "Managed and updated website content to ensure data accuracy. Participated in resolving technical issues and improved the efficiency of data entry and website management processes.",
    year: "2024",
    color: "linear-gradient(135deg, #FFE4F1 0%, #FFCDEA 50%, #FFB6E1 100%)",
  },
  {
    title: "Mentoring UMN 2024",
    category: "Administration",
    image: "/image/CBM.png",
    description:
      "Managed attendance for 300+ committee members and ensured smooth event operations. Handled communications, student permissions, and coordinated administrative tasks.",
    year: "2024",
    color: "linear-gradient(135deg, #FFE4F1 0%, #FFCDEA 50%, #FFB6E1 100%)",
  },
  {
    title: "PPIF 2024",
    category: "Mentor",
    image: "/image/PPIF.png",
    description:
      "Guided new students through their orientation to the Informatics program. Led interactive activities and collaborated in planning events to ensure an engaging and informative experience.",
    year: "2024",
    color: "linear-gradient(135deg, #FFE4F1 0%, #FFCDEA 50%, #FFB6E1 100%)",
  },
  {
    title: "FeSoViTy 2024",
    category: "Education",
    image: "/image/fesofity.png",
    description:
      "Supervised elementary students, teaching eco-literacy and environmental awareness through interactive activities. Provided feedback and helped organize eco-friendly projects.",
    year: "2024",
    color: "linear-gradient(135deg, #FFE4F1 0%, #FFCDEA 50%, #FFB6E1 100%)",
  },
  {
    title: "IFW 2023",
    category: "Event Management",
    image: "/image/IFW.png",
    description:
      "Managed inventory, prepared event schedules, and handled volunteer attendance. Coordinated logistics and ensured smooth event operations through effective communication with the team.",
    year: "2023",
    color: "linear-gradient(135deg, #FFE4F1 0%, #FFCDEA 50%, #FFB6E1 100%)",
  },
];

export default function WhatIDoSection() {
  return (
    <Box position="relative">
      {/* Newspaper-style Header */}
      <Box
        bg="#FFF8E7"
        py={{ base: "40px", md: "60px" }}
        px={{ base: "20px", md: "40px" }}
        position="relative"
      >
        {/* Newspaper Header Design */}
        <VStack gap={2} textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Text
              fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
              fontWeight="900"
              color="#CD853F"
              fontFamily="Times New Roman, serif"
              letterSpacing="-2px"
              textTransform="uppercase"
              lineHeight="0.9"
            >
              What I Do
            </Text>
          </motion.div>
        </VStack>
      </Box>

      {/* Content Section */}
      <Box
        px={{ base: "20px", md: "40px", lg: "80px" }}
        maxW="1400px"
        mx="auto"
        mt={{ base: "40px", md: "60px" }}
      >
        {/* Newspaper-style Articles Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "40px", md: "50px" }}
          mt={8}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                bg="#FFF8E7"
                border="3px solid #D2B48C"
                p={{ base: "20px", md: "24px" }}
                position="relative"
                _hover={{
                  boxShadow: "8px 8px 0px #D2B48C",
                  transform: "translate(-4px, -4px)",
                }}
                transition="all 0.3s ease"
                cursor="pointer"
                borderRadius="4px"
              >
                {/* Newspaper Article Header */}
                <Box mb={4}>
                  <Flex justify="space-between" align="center" mb={2}>
                    <Text
                      fontSize="xs"
                      fontFamily="Times New Roman, serif"
                      fontWeight="bold"
                      textTransform="uppercase"
                      letterSpacing="1px"
                      bg="#CD853F"
                      color="#FFF8E7"
                      px={2}
                      py={1}
                      borderRadius="2px"
                    >
                      {experience.category}
                    </Text>
                    <Text
                      fontSize="xs"
                      fontFamily="Times New Roman, serif"
                      color="#DEB887"
                      fontWeight="bold"
                    >
                      {experience.year}
                    </Text>
                  </Flex>

                  {/* Headline */}
                  <Text
                    fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                    fontWeight="900"
                    fontFamily="Times New Roman, serif"
                    color="#CD853F"
                    lineHeight="1.2"
                    mb={3}
                    textTransform="uppercase"
                  >
                    {experience.title}
                  </Text>

                  {/* Divider line */}
                  <Box w="100%" h="2px" bg="#D2B48C" mb={4} />
                </Box>

                {/* Newspaper-style Image */}
                <Box
                  mb={4}
                  border="2px solid #D2B48C"
                  overflow="hidden"
                  position="relative"
                  borderRadius="4px"
                >
                  <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    initial={{ filter: "grayscale(100%) contrast(1.2)" }}
                  >
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      w="100%"
                      h={{ base: "180px", md: "160px", lg: "180px" }}
                      objectFit="cover"
                      filter="grayscale(100%) contrast(1.2)"
                      transition="all 0.4s ease"
                      _hover={{
                        filter: "grayscale(0%) contrast(1.1)",
                      }}
                    />
                  </motion.div>

                  {/* Photo Caption */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    bg="rgba(210, 180, 140, 0.9)"
                    color="#FFF8E7"
                    p={2}
                  >
                    <Text
                      fontSize="xs"
                      fontFamily="Times New Roman, serif"
                      fontStyle="italic"
                    >
                      Photo: {experience.title} - {experience.year}
                    </Text>
                  </Box>
                </Box>

                {/* Article Text */}
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="#BC9A6A"
                  lineHeight="1.6"
                  fontFamily="Times New Roman, serif"
                  textAlign="justify"
                  mb={4}
                  css={{
                    columnCount: { base: 1, lg: 1 },
                    columnGap: "20px",
                    textIndent: "20px",
                  }}
                >
                  {experience.description}
                </Text>

                {/* Byline */}
                <Box borderTop="1px solid #D2B48C" pt={2} mt={4}>
                  <Text
                    fontSize="xs"
                    fontFamily="Times New Roman, serif"
                    color="#DEB887"
                    fontStyle="italic"
                  >
                    Reporter: Portfolio Team | Category: {experience.category}
                  </Text>
                </Box>

                {/* Corner fold effect */}
                <Box
                  position="absolute"
                  top="-3px"
                  right="-3px"
                  w="20px"
                  h="20px"
                  bg="#F5E6D3"
                  transform="rotate(45deg)"
                  transformOrigin="bottom left"
                  border="1px solid #D2B48C"
                />
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
