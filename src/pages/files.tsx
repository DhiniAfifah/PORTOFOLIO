import { Box } from "@chakra-ui/react";
import CustomCursor from "@/components/CustomCursor";
import FileExplorer from "@/components/FileExplorer";
import Navbar from "@/components/bahan/navbar";
import Footer from "@/components/bahan/footer";

const Files = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Box backgroundColor="#fff" minHeight="100vh">
        <FileExplorer />
      </Box>

      <Footer />
    </>
  );
};

export default Files;
