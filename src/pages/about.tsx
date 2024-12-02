import { Stack, Text, Image, Box } from "@chakra-ui/react";
import Navbar from "@/components/bahan/navbar";
import Footer from "@/components/bahan/footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* START Background */}
      <Stack
        backgroundColor="#fff"
        minHeight="300vh"
        alignItems="center"
        position="relative"
      >
        {/* Rectangle Background */}
        <Box
          backgroundColor="#FFCDEA"
          width={{ base: "100%", md: "100%", lg: "full" }}
          height={{ base: "200px", md: "300px", lg: "250px" }}
          position="absolute"
          left={0} // Posisi kiri
          top={{ base: 0, md: "120px" }} // Posisi atas
          zIndex={90} // Agar rectangle di belakang gambar dan teks
        />
        {/* START BAGIAN About */}
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 12 }}
          width="100%"
          px={{ base: 6, md: 16 }}
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          mt={{ base: "20px", md: "80px" }}
          zIndex={100}
        >
          {/* Gambar Profil */}
          <Image
            src="./src/image/about/profile.png"
            alt="Profile"
            objectFit="contain"
            boxSize={{ base: "300px", md: "500px", lg: "600px" }}
            alignSelf={{ base: "center", md: "flex-start" }}
            ml={{ base: 0, md: "50px" }}
          />

          {/* Teks "About Me" */}
          <Text
            fontSize={{ base: "3rem", md: "50px", lg: "90px" }}
            fontWeight="semibold"
            color="black"
            textAlign={{ base: "center", md: "flex-start" }}
            mt={{ base: "-25px", md: "-200px" }}
            ml={{ base: 0, md: "-60px" }}
          >
            About Me
          </Text>
        </Stack>
        {/* END BAGIAN About */}

        {/* START BAGIAN Who Am I */}
        <Stack
          w={"75vw"}
          direction={{ base: "column", md: "row" }}
          justify={"center"}
          gap={"2rem"}
          mt={{ md: "9rem", base: "3rem" }}
        >
          <Stack
            direction={{ base: "row", md: "row-reverse" }}
            w={"100%"}
            justify={{ base: "center", md: "end" }}
          >
            <Text
              fontSize={{ base: "2xl", md: "5xl", lg: "6xl" }}
              fontWeight="medium"
              color="black"
              whiteSpace="normal"
              textAlign={{ base: "center", md: "end" }}
              w={"100%"}
              fontFamily="Poppins, sans-serif"
            >
              Who Am I?
            </Text>
          </Stack>

          {/* START desc */}
          <Stack gap={"2rem"}>
            <Text
              fontSize={{ base: "18px", md: "25px", lg: "30px" }}
              fontWeight="regular"
              color="black"
              textAlign={{ base: "center", md: "start" }}
              // maxWidth={{ base: "100%", md: "60%" }}
            >
              Hello, I’m Dhini Afifah. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Text>
            <Text
              fontSize={{ base: "18px", md: "25px", lg: "30px" }}
              fontWeight="regular"
              color="black"
              textAlign={{ base: "center", md: "start" }}
              // maxWidth={{ base: "100%", md: "60%" }}
            >
              Hello, I’m Dhini Afifah. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Text>
          </Stack>
          {/* END desc */}
        </Stack>
        {/* END BAGIAN Who Am I */}
      </Stack>
      {/* END Background */}
      <Footer />
    </>
  );
};

export default About;
