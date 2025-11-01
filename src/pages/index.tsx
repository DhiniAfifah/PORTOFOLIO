import { Box } from "@chakra-ui/react";

import CustomCursor from "@/components/CustomCursor";
import ParallaxHero from "@/components/ParallaxHero";
import FileExplorer from "@/components/FileExplorer";
import WorkExperienceSection from "../workexperiencesection";
import WhatIDoSection from "@/components/WhatIDoSection";
import Navbar from "@/components/bahan/navbar";
import Footer from "@/components/bahan/footer";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* Main Container */}
      <Box backgroundColor="#fff" minHeight="100vh" position="relative">
        {/* Parallax Hero Section */}
        <ParallaxHero />

        {/* File Explorer Navigation */}
        <FileExplorer />

        {/* Work Experience Section */}
        <WorkExperienceSection />

        {/* What I Do Section */}
        <WhatIDoSection />
      </Box>

      <Footer />
    </>
  );
};

export default Index;
