import { Box, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import FileCard from "./FileCard";
import ProjectFilePopup from "./ProjectFilePopup";

const FileExplorer = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const projectsData = {
    IndoCanvas: {
      title: "IndoCanvas",
      description: "Indonesian Art & Heritage Platform",
      longDescription:
        "A dynamic platform showcasing Indonesian art and heritage. Featuring parallax scrolling with React-spring and CSS, optimized visuals, and curated cultural content like traditional paintings, the site offers an interactive and immersive user experience that celebrates Indonesia's rich cultural diversity.",
      images: ["/image/IC1.png", "/image/IC2.png"],
      technologies: [
        { name: "React", icon: "/image/logo/react.png" },
        { name: "CSS", icon: "/image/logo/CSS.png" },
        { name: "HTML", icon: "/image/logo/HTML.png" },
        { name: "JavaScript", icon: "/image/logo/JS.png" },
        { name: "Bootstrap", icon: "/image/logo/bootstrap.png" },
      ],
      links: [
        {
          type: "website",
          url: "https://indo-canvas.vercel.app/",
          icon: "/image/logo/internet.png",
        },
        {
          type: "github",
          url: "https://github.com/owin40/IndoCanvas",
          icon: "/image/logo/git.png",
        },
      ],
      category: "Web Development",
      year: "2024",
    },
    "Mobile Plant App": {
      title: "Mobile Plant App",
      description: "Plant Care Management Application",
      longDescription:
        "A modern app designed for effortless plant care management. Featuring an intuitive interface and Firebase integration for real-time data storage, user authentication, and the ability to capture and track plant growth through photos. The app helps users maintain healthy plants with reminders and care tips.",
      images: ["/image/MP.png", "/image/MP1.png"],
      technologies: [
        { name: "Kotlin", icon: "/image/logo/Kotlin.png" },
        { name: "Figma", icon: "/image/logo/figma.png" },
        { name: "Firebase", icon: "/image/logo/FireBase.png" },
        { name: "Android Studio", icon: "/image/logo/AndroidStudio.png" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/ouin40/MyPlant",
          icon: "/image/logo/git.png",
        },
      ],
      category: "Mobile Development",
      year: "2024",
    },
    "ATE Food App": {
      title: "ATE - Food Recommendation",
      description: "AI-Driven Meal Recommendation App",
      longDescription:
        "An intuitive platform that takes the guesswork out of mealtime choices. Powered by AI-driven recommendations, this app helps users effortlessly find meals they'll love. Crafted with a user-centered design approach, every detail, from personas to storyboards, ensures a seamless and delightful experience using Gestalt theory and 8 Golden Rules.",
      images: ["/image/ATE.png", "/image/ATE2.png"],
      technologies: [{ name: "Figma", icon: "/image/logo/figma.png" }],
      links: [
        {
          type: "website",
          url: "https://docs.google.com/document/d/1ftbi6nxW9RH78a1LQYEfflzYR77HZapWnRtjf6up4Ho/edit?usp=sharing",
          icon: "/image/logo/internet.png",
        },
      ],
      category: "UI/UX Design",
      year: "2024",
    },
    "Brenna Event Planner": {
      title: "Brenna - Event Planner",
      description: "Collaborative Event Planning Platform",
      longDescription:
        "A collaborative project focused on creating an accessible, user-friendly event planning platform using Laravel. Designed with modern web technologies and responsive design principles to ensure seamless event management experience across all devices.",
      images: ["/image/BRNL.png", "/image/BRNL.png"],
      technologies: [
        { name: "Laravel", icon: "/image/logo/Laravel.png" },
        { name: "PHP", icon: "/image/logo/PHP.png" },
        { name: "CSS", icon: "/image/logo/CSS.png" },
        { name: "JavaScript", icon: "/image/logo/JS.png" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/owin40/event-planner",
          icon: "/image/logo/git.png",
        },
        {
          type: "figma",
          url: "https://www.figma.com/design/eYOyC1eMtkAR5XMjf78fgN/brenna?node-id=0-1&p=f&t=4uoTlilQwxa1yfQM-0",
          icon: "/image/logo/FH.png",
        },
      ],
      category: "Web Development",
      year: "2024",
    },
    "WorkQuest Application": {
      title: "WorkQuest Application",
      description: "User-Centered Project Management Platform",
      longDescription:
        "A user-centered project where I designed the UI in Figma and mapped workflows using system models. Applied quality management tools like Pareto charts and Earned Value Analysis to ensure top-notch deliverables, while addressing risks to keep the project aligned with goals. The platform focuses on efficient project management and team collaboration.",
      images: ["/image/WK1.png", "/image/WK.png"],
      technologies: [
        { name: "Figma", icon: "/image/logo/figma.png" },
        { name: "Trello", icon: "/image/logo/trello.png" },
      ],
      links: [
        {
          type: "website",
          url: "https://docs.google.com/document/d/1I1C6uEOnNcEgggUUvCKoLd1QcSkYyAUh_vnV6DqQ258/edit?usp=sharing",
          icon: "/image/logo/internet.png",
        },
        {
          type: "figma",
          url: "https://www.figma.com/design/RD10dbJkPqFYwM2VSRqdAF/UI%2FUX-SOFTWARE-ENGINERING?node-id=0-1&t=uATCpmiog2CzGunq-1",
          icon: "/image/logo/FH.png",
        },
      ],
      category: "Project Management",
      year: "2024",
    },
    "Froggy Clicker": {
      title: "Froggy Clicker",
      description: "Fun Interactive Clicker Game",
      longDescription:
        "A fun and addictive clicker game where each frog click earns you money. Upgrade your earnings with the 'Buy Auto Clicker' for automatic gains and 'Buy Increase Clicker' to boost your income per click! Built with vanilla JavaScript for optimal performance.",
      images: ["/image/Game.png", "/image/Game1.png"],
      technologies: [
        { name: "JavaScript", icon: "/image/logo/JS.png" },
        { name: "CSS", icon: "/image/logo/CSS.png" },
        { name: "Bootstrap", icon: "/image/logo/bootstrap.png" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/owin40/HTML-Lab",
          icon: "/image/logo/git.png",
        },
      ],
      category: "Game Development",
      year: "2024",
    },
  };

  const files = [
    {
      title: "IndoCanvas",
      description: "Indonesian Art & Heritage Platform with parallax scrolling",
      image: "/image/IC1.png",
      fileType: "document" as const,
      tags: ["React", "Web Dev", "Cultural"],
      rotation: -2,
      projectKey: "IndoCanvas",
    },
    {
      title: "Mobile Plant App",
      description: "Plant care management with Firebase integration",
      image: "/image/MP.png",
      fileType: "code" as const,
      tags: ["Kotlin", "Mobile", "Firebase"],
      rotation: 1,
      projectKey: "Mobile Plant App",
    },
    {
      title: "ATE Food App",
      description: "AI-driven meal recommendation with user-centered design",
      image: "/image/ATE.png",
      fileType: "image" as const,
      tags: ["UI/UX", "Figma", "AI"],
      rotation: -1,
      projectKey: "ATE Food App",
    },
    {
      title: "Brenna Event Planner",
      description: "Collaborative event planning platform using Laravel",
      image: "/image/BRNL.png",
      fileType: "document" as const,
      tags: ["Laravel", "PHP", "Web"],
      rotation: 2,
      projectKey: "Brenna Event Planner",
    },
    {
      title: "WorkQuest Application",
      description: "User-centered project management with quality tools",
      image: "/image/WK1.png",
      fileType: "document" as const,
      tags: ["Figma", "Project Mgmt", "UI/UX"],
      rotation: 0.5,
      projectKey: "WorkQuest Application",
    },
    {
      title: "Froggy Clicker",
      description: "Fun interactive clicker game with upgrade system",
      image: "/image/Game.png",
      fileType: "code" as const,
      tags: ["JavaScript", "Game", "Interactive"],
      rotation: -1.5,
      projectKey: "Froggy Clicker",
    },
  ];

  const handleFileClick = (projectKey: string) => {
    setSelectedProject(projectsData[projectKey as keyof typeof projectsData]);
    setIsPopupOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      minHeight="100vh"
      background="#f0f2f5"
      py={16}
      px={6}
      position="relative"
      overflow="hidden"
      mt="-1px"
    >
      {/* iOS Background Elements */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        width="300px"
        height="300px"
        borderRadius="50%"
        background="rgba(0, 122, 255, 0.05)"
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-150px"
        left="-150px"
        width="400px"
        height="400px"
        borderRadius="50%"
        background="rgba(255, 255, 255, 0.3)"
        filter="blur(80px)"
      />

      <VStack gap={12} maxWidth="1200px" mx="auto" position="relative">
        {/* Clean Text Header */}
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
              My Projects
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              fontFamily="Poppins, sans-serif"
              maxWidth="600px"
            >
              Explore my portfolio projects by clicking on any file. Each
              project showcases different technologies and approaches to solving
              real-world problems.
            </Text>
          </VStack>
        </motion.div>

        {/* Clean Files Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: "100%" }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={8}
            justifyItems="center"
          >
            {files.map((file, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <FileCard
                  {...file}
                  route=""
                  onFileClick={() => handleFileClick(file.projectKey)}
                />
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </VStack>

      {/* Project Popup */}
      <ProjectFilePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        project={selectedProject}
      />
    </Box>
  );
};

export default FileExplorer;
