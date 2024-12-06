import { Stack, Image, Text, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Navbar from "@/components/bahan/navbar";
import Footer from "@/components/bahan/footer";

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const Index = () => {
  return (
    <>
      <Navbar />

      {/* START Background */}
      <Stack
        backgroundColor="#fff"
        minHeight="450vh"
        alignItems="center"
        position="relative"
      >
        {/* START Gradient and Emoji */}
        <Stack
          w={"95vw"}
          direction={{ base: "column", md: "row" }}
          justify={"center"}
          alignItems="center"
          gap={"5rem"}
          mt={{ lg: "9rem", md: "0rem", base: "3rem" }}
        >
          {/* Container untuk Gradien dan Emoji */}
          <Stack
            direction="column"
            position="relative"
            justify="center"
            align="center"
          >
            {/* Gradien */}
            <Image
              src="../image/Gradient.png"
              alt="Gradient"
              objectFit="contain"
              boxSize={{ base: "300px", md: "500px", lg: "500px" }}
              animation={`${pulseAnimation} 2s infinite`}
            />
            {/* Emoji */}
            <Image
              src="./src/image/Emoji.png"
              alt="Emoji"
              objectFit="contain"
              boxSize={{ base: "180px", md: "200px", lg: "300px" }}
              mt={{ base: "-260px", md: "-375px", lg: "-420px" }}
              animation={`${pulseAnimation} 1.5s infinite`}
            />
          </Stack>

          {/* Teks di sebelah kanan */}
          <Stack
            direction="column"
            gap={4}
            maxWidth={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
            mt={{ base: "10px", md: "100px", lg: "150px" }}
          >
            {/* Teks pertama */}
            <Text
              fontSize={{ base: "25px", md: "50px" }}
              fontWeight="medium"
              color="black"
              lineHeight="short"
              fontFamily="Poppins, sans-serif"
            >
              Hi, I’m Dhini Afifah - a passion for tech and user experience.
            </Text>

            {/* Teks kedua */}
            <Text
              fontSize={{ base: "18px", md: "30px" }}
              fontWeight="regular"
              color="#676565"
              lineHeight="short"
              fontFamily="Poppins, sans-serif"
            >
              Skilled in Web Development, Data Management, and Cyber Security.
            </Text>
          </Stack>
        </Stack>
        {/* END Gradient and Emoji */}
        <Box
          backgroundColor="#FFCDEA"
          width={{ base: "100%", md: "100%", lg: "full" }}
          height={{ base: "200px", md: "150px", lg: "250px" }}
          position="relative"
          zIndex={0} // Sesuaikan jika ada masalah lapisan
          mt={"20rem"} // Beri jarak agar tidak menempel
        />
      </Stack>
      {/* END Background */}

      <Footer />
    </>
  );
};

export default Index;
