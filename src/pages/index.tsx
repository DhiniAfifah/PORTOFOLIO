import { Stack, Image, Text, Box, SimpleGrid } from "@chakra-ui/react";
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
        minHeight={{ lg: "450vh", md: "300vh", base: "250vh" }}
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
              src="/image/Gradient.png"
              alt="Gradient"
              objectFit="contain"
              boxSize={{ base: "300px", md: "500px", lg: "500px" }}
              animation={`${pulseAnimation} 2s infinite`}
            />
            {/* Emoji */}
            <Image
              src="/image/Emoji.png"
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

        {/* START Garis What */}
        <Stack direction="column" width="100%" align="flex-start" gap={0}>
          <Box
            backgroundColor="#FFCDEA"
            width={{ base: "100%", md: "100%", lg: "full" }}
            height={{ base: "100px", md: "150px", lg: "250px" }}
            position="relative"
            zIndex={5}
            mt={{ base: "150px", md: "150px", lg: "350px" }}
          />
          <Text
            fontSize={{ base: "2rem", md: "50px", lg: "90px" }}
            px={{ base: 6, md: 16, lg: "80px" }}
            mt={{ base: "-75px", md: "-110px", lg: "-200px" }}
            fontWeight="medium"
            color="black"
            textAlign="left"
            fontFamily="Poppins, sans-serif"
            zIndex={10}
          >
            What I do?
          </Text>
        </Stack>
        {/* END Garis What */}

        {/* START Experience */}
        <SimpleGrid
          columns={1}
          w={{ base: "80vw", md: "75vw", lg: "65vw" }}
          gap={{ base: "35px", md: "35px", lg: "70px" }}
          mt={{ base: "50px", md: "100px", lg: "150px" }}
        >
          {/* Kotak 1 */}
          <Stack
            direction="row"
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
          >
            <Box
              backgroundColor="#D9D9D9"
              w={{ base: "100px", md: "150px", lg: "500px" }} // Lebar kotak responsif
              h={{ base: "100px", md: "150px", lg: "300px" }} // Tinggi kotak responsif
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "100px", md: "150px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "16px", md: "20px", lg: "30px" }} // Ukuran font responsif
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
              >
                Nama Kegiatan 1
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>
            </Stack>
          </Stack>

          {/* Kotak 2 */}
          <Stack
            direction="row"
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
          >
            <Box
              backgroundColor="#D9D9D9"
              w={{ base: "100px", md: "150px", lg: "500px" }}
              h={{ base: "100px", md: "150px", lg: "300px" }}
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "100px", md: "150px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "16px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
              >
                Nama Kegiatan 2
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>
            </Stack>
          </Stack>

          {/* Kotak 3 */}
          <Stack
            direction="row"
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
          >
            <Box
              backgroundColor="#D9D9D9"
              w={{ base: "100px", md: "150px", lg: "500px" }}
              h={{ base: "100px", md: "150px", lg: "300px" }}
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "100px", md: "150px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "16px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
              >
                Nama Kegiatan 3
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
        {/* END Experience */}

        {/* START Garis Projects */}
        <Stack direction="column" width="100%" align="flex-start" gap={0}>
          <Box
            backgroundColor="#FFCDEA"
            width={{ base: "100%", md: "100%", lg: "full" }}
            height={{ base: "100px", md: "150px", lg: "250px" }}
            position="relative"
            zIndex={5}
            mt={{ base: "70px", md: "120px", lg: "300px" }}
          />
          <Text
            fontSize={{ base: "2rem", md: "50px", lg: "90px" }}
            px={{ base: 6, md: 16, lg: "80px" }}
            mt={{ base: "-75px", md: "-110px", lg: "-200px" }}
            fontWeight="medium"
            color="black"
            textAlign="left"
            fontFamily="Poppins, sans-serif"
            zIndex={10}
          >
            My Project's
          </Text>
        </Stack>
        {/* END Garis Projects */}

        {/* START Projects */}
        <SimpleGrid
          columns={1}
          w={{ base: "80vw", md: "75vw", lg: "65vw" }}
          gap={{ base: "35px", md: "35px", lg: "70px" }}
          mt={{ base: "50px", md: "100px", lg: "150px" }}
        >
          {/* Kotak 1 */}
          <Stack
            direction="row"
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
          >
            <Box
              backgroundColor="#D9D9D9"
              w={{ base: "100px", md: "150px", lg: "500px" }} // Lebar kotak responsif
              h={{ base: "100px", md: "150px", lg: "300px" }} // Tinggi kotak responsif
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "100px", md: "150px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "16px", md: "20px", lg: "30px" }} // Ukuran font responsif
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
              >
                Nama Kegiatan 1
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>
            </Stack>
          </Stack>

          {/* Kotak 2 */}
          <Stack
            direction="row"
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
          >
            <Box
              backgroundColor="#D9D9D9"
              w={{ base: "100px", md: "150px", lg: "500px" }}
              h={{ base: "100px", md: "150px", lg: "300px" }}
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "100px", md: "150px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "16px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
              >
                Nama Kegiatan 2
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>
            </Stack>
          </Stack>

          {/* Kotak 3 */}
          <Stack
            direction="row"
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
          >
            <Box
              backgroundColor="#D9D9D9"
              w={{ base: "100px", md: "150px", lg: "500px" }}
              h={{ base: "100px", md: "150px", lg: "300px" }}
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "100px", md: "150px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "16px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
              >
                Nama Kegiatan 3
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
        {/* END Projects */}
      </Stack>
      {/* END Background */}

      <Footer />
    </>
  );
};

export default Index;
