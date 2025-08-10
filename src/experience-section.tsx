"use client";

import { Box, Text, Image, SimpleGrid, Badge, Flex } from "@chakra-ui/react";
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
    scale: 1.05,
    transition: {
      duration: 0.3,
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

export default function ExperienceSection() {
  return (
    <Box
      mt={{ base: "80px", md: "100px", lg: "120px" }}
      px={{ base: "20px", md: "40px", lg: "80px" }}
      maxW="1400px"
      mx="auto"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: "30px", md: "35px", lg: "50px" }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <Box
              bg="white"
              borderRadius="24px"
              overflow="hidden"
              boxShadow="0 10px 40px rgba(0,0,0,0.1)"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                transform: "translateY(-8px)",
              }}
              h="100%"
              position="relative"
            >
              <Box h="8px" background={experience.color} />

              <Box p={{ base: "24px", md: "28px", lg: "32px" }}>
                <Flex justify="space-between" align="center" mb="20px">
                  <Badge
                    bg="rgba(255, 107, 157, 0.1)"
                    color="#C44569"
                    px="12px"
                    py="4px"
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="none"
                  >
                    {experience.category}
                  </Badge>
                  <Text fontSize="sm" color="gray.500" fontWeight="500">
                    {experience.year}
                  </Text>
                </Flex>

                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  fontFamily="Poppins, sans-serif"
                  color="gray.800"
                  mb="20px"
                  lineHeight="1.3"
                  minH={{ base: "auto", lg: "60px" }}
                >
                  {experience.title}
                </Text>

                <Box mb="24px" borderRadius="16px" overflow="hidden">
                  <motion.div variants={imageVariants} whileHover="hover">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      w="100%"
                      h={{ base: "200px", md: "180px", lg: "200px" }}
                      objectFit="cover"
                      transition="transform 0.3s ease"
                    />
                  </motion.div>
                </Box>

                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.600"
                  lineHeight="1.6"
                  fontFamily="Poppins, sans-serif"
                  textAlign="center"
                >
                  {experience.description}
                </Text>
              </Box>

              <Box
                position="absolute"
                top="20px"
                right="20px"
                w="40px"
                h="40px"
                borderRadius="full"
                background={experience.color}
                opacity="0.1"
              />
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
}
