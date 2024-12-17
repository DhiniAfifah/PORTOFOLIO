import {
  Stack,
  Image,
  Text,
  Box,
  SimpleGrid,
  Button,
  Flex,
  Grid,
  Link,
} from "@chakra-ui/react";
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

// Animasi "slide-from-top"
const slideFromTop = keyframes`
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Index = () => {
  return (
    <>
      <Navbar />

      {/* START Background */}
      <Stack
        backgroundColor="#fff"
        minHeight={{ lg: "1130vh", md: "627vh", base: "960vh" }}
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
          w={{ base: "87vw", md: "80vw", lg: "65vw" }} // Lebar lebih besar untuk mobile
          gap={{ base: "80px", md: "80px", lg: "120px" }} // Gap antar kotak lebih kecil di mobile
          mt={{ base: "100px", md: "100px", lg: "290px" }} // Margin atas lebih kecil di mobile
        >
          {/* Kotak 1 */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            transition="transform 0.6s ease"
          >
            <Image
              src="/image/VJD.png"
              alt="VJD"
              w={{ base: "150px", md: "195px", lg: "500px" }}
              h={{ base: "90px", md: "200px", lg: "300px" }}
              objectFit="cover"
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "auto", md: "200px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "14px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Visual Journalism Day
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Collaborated with a team to develop a user-friendly website.
                Ensured design alignment, conducted functionality tests, and
                maintained the site for optimal performance and visitor
                engagement.
              </Text>
              {/* Skills Button */}
              <Stack
                direction={{ base: "row", md: "row", lg: "row" }}
                gap={3}
                mt={3}
                align="center"
                justify={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "90px", md: "auto", lg: "auto" }}
                  maxW={{ base: "80px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Team Working
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "100px", md: "150px", lg: "200px" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Web Development
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "90px", md: "150px", lg: "200px" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Usability Testing
                </Button>
              </Stack>
            </Stack>
          </Stack>

          {/* Kotak 2 */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            transition="transform 0.6s ease"
          >
            <Image
              src="/image/JUICE.png"
              alt="VJD"
              w={{ base: "150px", md: "195px", lg: "500px" }}
              h={{ base: "90px", md: "200px", lg: "300px" }}
              objectFit="cover"
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "auto", md: "200px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "14px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                UMN JUICE
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Managed and updated website content to ensure data accuracy.
                Participated in resolving technical issues and improved the
                efficiency of data entry and website management processes.
              </Text>
              {/* Skills Button */}
              <Stack
                direction={{ base: "row", md: "row", lg: "row" }}
                gap={3}
                mt={3}
                align="center"
                justify={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "90px", md: "auto", lg: "auto" }}
                  maxW={{ base: "80px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Team Working
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "75px", md: "150px", lg: "200px" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Collaboration
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "90px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Problem Solving
                </Button>
              </Stack>
            </Stack>
          </Stack>

          {/* Kotak 3 */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            transition="transform 0.6s ease"
          >
            <Image
              src="/image/CBM.png"
              alt="VJD"
              w={{ base: "150px", md: "195px", lg: "500px" }}
              h={{ base: "90px", md: "200px", lg: "300px" }}
              objectFit="cover"
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "auto", md: "200px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "14px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Mentoring UMN 2024
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Managed attendance for 300+ committee members and ensured smooth
                event operations. Handled communications, student permissions,
                and coordinated administrative tasks.
              </Text>
              {/* Skills Button */}
              <Stack
                direction={{ base: "row", md: "row", lg: "row" }}
                gap={3}
                mt={3}
                align="center"
                justify={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "66px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  TeamWork
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "90px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Communication
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "100px", md: "150px", lg: "200px" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Time Management
                </Button>
              </Stack>
            </Stack>
          </Stack>

          {/* Kotak 4 */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            transition="transform 0.6s ease"
          >
            <Image
              src="/image/PPIF.png"
              alt="VJD"
              w={{ base: "150px", md: "195px", lg: "500px" }}
              h={{ base: "90px", md: "200px", lg: "300px" }}
              objectFit="cover"
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "auto", md: "200px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "14px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                PPIF 2024
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Guided new students through their orientation to the Informatics
                program. Led interactive activities and collaborated in planning
                events to ensure an engaging and informative experience.
              </Text>
              {/* Skills Button */}
              <Stack
                direction={{ base: "row", md: "row", lg: "row" }}
                gap={3}
                mt={3}
                align="center"
                justify={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "70px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Leadership
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "85px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Public Speaking
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "80px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Event Planning
                </Button>
              </Stack>
            </Stack>
          </Stack>

          {/* Kotak 5 */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            transition="transform 0.6s ease"
          >
            <Image
              src="/image/fesofity.png"
              alt="VJD"
              w={{ base: "150px", md: "195px", lg: "500px" }}
              h={{ base: "90px", md: "200px", lg: "300px" }}
              objectFit="cover"
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "auto", md: "200px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "14px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                FeSoViTy 2024
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Supervised elementary students, teaching eco-literacy and
                environmental awareness through interactive activities. Provided
                feedback and helped organize eco-friendly projects.
              </Text>
              {/* Skills Button */}
              <Stack
                direction={{ base: "row", md: "row", lg: "row" }}
                gap={3}
                mt={3}
                align="center"
                justify={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "80px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Collaboration
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "60px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Creativity
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "70px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Facilitation
                </Button>
              </Stack>
            </Stack>
          </Stack>

          {/* Kotak 6 */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            align="center"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            transition="transform 0.6s ease"
          >
            <Image
              src="/image/IFW.png"
              alt="VJD"
              w={{ base: "150px", md: "195px", lg: "500px" }}
              h={{ base: "90px", md: "200px", lg: "300px" }}
              objectFit="cover"
              borderRadius="md"
            />
            <Stack
              gap="1px"
              flex="1"
              h={{ base: "auto", md: "200px", lg: "300px" }}
            >
              <Text
                fontSize={{ base: "14px", md: "20px", lg: "30px" }}
                fontWeight="medium"
                color="black"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                IFW 2023
              </Text>
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px" }}
                fontWeight="regular"
                color="#676565"
                fontFamily="Poppins, sans-serif"
                textAlign={{ base: "center", md: "left", lg: "left" }}
              >
                Managed inventory, prepared event schedules, and handled
                volunteer attendance. Coordinated logistics and ensured smooth
                event operations through effective communication with the team.
              </Text>
              {/* Skills Button */}
              <Stack
                direction={{ base: "row", md: "row", lg: "row" }}
                gap={3}
                mt={3}
                align="center"
                justify={{ base: "center", md: "flex-start" }}
                w="100%"
              >
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "90px", md: "150px", lg: "200px" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Problem-Solving
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "70px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Scheduling
                </Button>
                <Button
                  size="sm"
                  bg="black"
                  color="white"
                  borderRadius="60px"
                  w={{ base: "100px", md: "auto", lg: "auto" }}
                  maxW={{ base: "90px", md: "150px", lg: "auto" }}
                  fontSize={{ base: "9px", md: "14px", lg: "16px" }}
                  fontFamily="Poppins, sans-serif"
                >
                  Communication
                </Button>
              </Stack>
            </Stack>
          </Stack>
          {/* END Kegiatan 6 */}
        </SimpleGrid>
        {/* END Experience */}

        {/* START Garis Projects */}
        <Stack
          id="what-i-do"
          direction="column"
          width="100%"
          align="flex-start"
          gap={0}
        >
          <Box
            backgroundColor="#FFCDEA"
            width={{ base: "100%", md: "100%", lg: "full" }}
            height={{ base: "100px", md: "150px", lg: "250px" }}
            position="relative"
            zIndex={5}
            mt={{ base: "70px", md: "120px", lg: "200px" }}
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
        <Stack
          direction={{ base: "column", md: "column", lg: "column" }}
          align="center"
          justify="center"
          gap={{ base: "60px", md: "150px", lg: "140px" }}
          mt={{ base: "80px", md: "100px", lg: "280px" }}
          px={{ base: "25px", md: "70px", lg: "190px" }}
        >
          {/* CARD 1 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "620px", lg: "950px" }}
            p={{ base: 4, md: 4, lg: 14 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            {/* logo dan teks */}
            <Flex
              direction={{ base: "row", md: "row", lg: "row" }}
              align="center"
              justify="flex-start"
              gap={3} // jarak antara logo dan teks
              p={6}
            >
              {/* Logo */}
              <Image
                src="/image/logo.png"
                alt="Project 1 Logo"
                boxSize={{ base: "40px", md: "50px", lg: "60px" }}
                objectFit="contain"
              />

              {/* teks */}
              <Box>
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                  fontWeight="bold"
                  fontFamily="Poppins, sans-serif"
                  color="black"
                  textAlign="left"
                  mb={1}
                >
                  IndoCanvas
                </Text>
              </Box>
            </Flex>
            <Stack
              direction="column"
              align="flex-start"
              justify="flex-start"
              mt={{ base: "-45px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "15px", md: "18px", lg: "20px" }}
                color="gray.600"
                textAlign="left"
                fontFamily="Poppins, sans-serif"
              >
                A short description of the project goes here. It's concise but
                provides insight into the project.
              </Text>
            </Stack>

            {/* START GAMBAR PROJECT */}
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
              gap={8}
              p={6}
            >
              {/* Gambar pertama */}
              <Image
                src="/image/IC1.png"
                alt="Project Image 1"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />

              {/* Gambar kedua */}
              <Image
                src="/image/IC2.png"
                alt="Project Image 2"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />
            </Grid>
            {/* START BAGIAN Why Hire Me */}
            <Stack p={6} mt={{ base: "2px", md: "2px", lg: "5px" }}>
              {/* Teks "Why hire me?" */}
              <Text
                fontSize={{ base: "15px", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign="left"
              >
                Tech Behind the Scenes
              </Text>
            </Stack>

            {/* START logo-tools yang digunakan */}
            <Flex
              direction="row"
              justify="left"
              gap={{ base: "4", md: "10", lg: "9" }}
              p={8}
              wrap="wrap"
              mt={{ base: "-45px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo 1 */}
              <Image
                src="/image/logo/bootstrap.png"
                alt="Tool 1"
                boxSize={{ base: "30px", md: "40px", lg: "90px" }}
                objectFit="contain"
              />
              {/* Logo 2 */}
              <Image
                src="/image/logo/react.png"
                alt="Tool 2"
                boxSize={{ base: "30px", md: "40px", lg: "80px" }}
                objectFit="contain"
              />
            </Flex>
            {/* END logo-tools yang digunakan */}

            {/* START Logo Internet dan GitHub */}
            <Flex
              direction="row"
              justify="right"
              gap={5}
              p={7}
              mt={{ base: "-20px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo Internet */}
              <Link
                href="https://indo-canvas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/internet.png"
                  alt="Internet"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>

              {/* Logo GitHub */}
              <Link
                href="https://github.com/owin40/IndoCanvas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/git.png"
                  alt="GitHub"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>
            </Flex>
            {/* END Logo Internet dan GitHub */}
          </Box>

          {/* CARD 2 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "700px", lg: "1200px" }}
            p={{ base: 4, md: 4, lg: 14 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            {/* logo dan teks */}
            <Flex
              direction={{ base: "row", md: "row", lg: "row" }}
              align="center"
              justify="flex-start"
              gap={3} // jarak antara logo dan teks
              p={6}
            >
              {/* Logo */}
              <Image
                src="/image/MPL.png"
                alt="Project 1 Logo"
                boxSize={{ base: "40px", md: "50px", lg: "150px" }}
                objectFit="contain"
              />

              {/* teks */}
              <Box>
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                  fontWeight="bold"
                  fontFamily="Poppins, sans-serif"
                  color="black"
                  textAlign="left"
                  mb={1}
                >
                  Mobile Application
                </Text>
              </Box>
            </Flex>
            <Stack
              direction="column"
              align="flex-start"
              justify="flex-start"
              mt={{ base: "-45px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "15px", md: "18px", lg: "20px" }}
                color="gray.600"
                textAlign="left"
                fontFamily="Poppins, sans-serif"
              >
                A short description of the project goes here. It's concise but
                provides insight into the project.
              </Text>
            </Stack>

            {/* START GAMBAR PROJECT */}
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
              gap={8}
              p={6}
            >
              {/* Gambar pertama */}
              <Image
                src="/image/MP.png"
                alt="Project Image 1"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />

              {/* Gambar kedua */}
              <Image
                src="/image/MP1.png"
                alt="Project Image 2"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />
            </Grid>
            {/* START BAGIAN Why Hire Me */}
            <Stack p={6} mt={{ base: "2px", md: "2px", lg: "5px" }}>
              {/* Teks "Why hire me?" */}
              <Text
                fontSize={{ base: "15px", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign="left"
              >
                Tech Behind the Scenes
              </Text>
            </Stack>

            {/* START logo-tools yang digunakan */}
            <Flex
              direction="row"
              justify="left"
              gap={{ base: "4", md: "10", lg: "5" }}
              p={8}
              wrap="wrap"
              mt={{ base: "-45px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo 1 */}
              <Image
                src="/image/logo/Kotlin.png"
                alt="Tool 1"
                boxSize={{ base: "30px", md: "40px", lg: "50px" }}
                objectFit="contain"
              />
              {/* Logo 2 */}
              <Image
                src="/image/logo/figma.png"
                alt="Tool 1"
                boxSize={{ base: "30px", md: "40px", lg: "60px" }}
                objectFit="contain"
              />
              {/* Logo 3 */}
              <Image
                src="/image/logo/FireBase.png"
                alt="Tool 1"
                boxSize={{ base: "30px", md: "40px", lg: "60px" }}
                objectFit="contain"
              />
              {/* Logo 4 */}
              <Image
                src="/image/logo/AndroidStudio.png"
                alt="Tool 1"
                boxSize={{ base: "30px", md: "40px", lg: "60px" }}
                objectFit="contain"
              />
            </Flex>
            {/* END logo-tools yang digunakan */}

            {/* START Logo Internet dan GitHub */}
            <Flex
              direction="row"
              justify="right"
              gap={5}
              p={7}
              mt={{ base: "-20px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo Internet */}
              <Link
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/internet.png"
                  alt="Internet"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>

              {/* Logo GitHub */}
              <Link
                href="https://github.com/ouin40/MyPlant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/git.png"
                  alt="GitHub"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>
            </Flex>
            {/* END Logo Internet dan GitHub */}
          </Box>

          {/* CARD 3 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "620px", lg: "1000px" }}
            p={{ base: 4, md: 4, lg: 14 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            {/* logo dan teks */}
            <Flex
              direction={{ base: "row", md: "row", lg: "row" }}
              align="center"
              justify="flex-start"
              gap={3} // jarak antara logo dan teks
              p={6}
            >
              {/* Logo */}
              <Image
                src="/image/ATEL.png"
                alt="Project 1 Logo"
                boxSize={{ base: "40px", md: "50px", lg: "80px" }}
                objectFit="contain"
              />

              {/* teks */}
              <Box>
                <Text
                  fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}
                  fontWeight="bold"
                  fontFamily="Poppins, sans-serif"
                  color="black"
                  textAlign="left"
                  mb={1}
                >
                  ATE
                </Text>
              </Box>
            </Flex>
            <Stack
              direction="column"
              align="flex-start"
              justify="flex-start"
              mt={{ base: "-45px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "15px", md: "18px", lg: "20px" }}
                color="gray.600"
                textAlign="left"
                fontFamily="Poppins, sans-serif"
              >
                Food Delivery App Prototype
              </Text>
            </Stack>

            {/* START GAMBAR PROJECT */}
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
              gap={8}
              p={6}
            >
              {/* Gambar pertama */}
              <Image
                src="/image/ATE.png"
                alt="Project Image 1"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />

              {/* Gambar kedua */}
              <Image
                src="/image/ATE2.png"
                alt="Project Image 2"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />
            </Grid>
            {/* START BAGIAN Why Hire Me */}
            <Stack p={6} mt={{ base: "2px", md: "2px", lg: "5px" }}>
              {/* Teks "Why hire me?" */}
              <Text
                fontSize={{ base: "15px", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign="left"
              >
                Tech Behind the Scenes
              </Text>
            </Stack>

            {/* START logo-tools yang digunakan */}
            <Flex
              direction="row"
              justify="left"
              gap={{ base: "4", md: "10", lg: "9" }}
              p={8}
              wrap="wrap"
              mt={{ base: "-45px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo 1 */}
              <Image
                src="/image/logo/figma.png"
                alt="Tool 1"
                boxSize={{ base: "30px", md: "40px", lg: "70px" }}
                objectFit="contain"
              />
            </Flex>
            {/* END logo-tools yang digunakan */}

            {/* START Logo Internet dan GitHub */}
            <Flex
              direction="row"
              justify="right"
              gap={5}
              p={7}
              mt={{ base: "-20px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo Internet */}
              <Link
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/internet.png"
                  alt="Internet"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>

              {/* Logo GitHub */}
              <Link
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/git.png"
                  alt="GitHub"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>
            </Flex>
            {/* END Logo Internet dan GitHub */}
          </Box>

          {/* CARD 4 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "700px", lg: "1130px" }}
            p={{ base: 4, md: 4, lg: 14 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            {/* logo dan teks */}
            <Flex
              direction={{ base: "row", md: "row", lg: "row" }}
              align="center"
              justify="flex-start"
              gap={3} // jarak antara logo dan teks
              p={6}
            >
              {/* Logo */}
              <Image
                src="/image/BRNL.png"
                alt="Project 1 Logo"
                boxSize={{ base: "40px", md: "50px", lg: "100px" }}
                objectFit="contain"
              />

              {/* teks */}
              <Box>
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                  fontWeight="bold"
                  fontFamily="Poppins, sans-serif"
                  color="black"
                  textAlign="left"
                  mb={1}
                >
                  Brenna - Event Planner
                </Text>
              </Box>
            </Flex>
            <Stack
              direction="column"
              align="flex-start"
              justify="flex-start"
              mt={{ base: "-45px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "15px", md: "18px", lg: "20px" }}
                color="gray.600"
                textAlign="left"
                fontFamily="Poppins, sans-serif"
              >
                A short description of the project goes here. It's concise but
                provides insight into the project.
              </Text>
            </Stack>

            {/* START GAMBAR PROJECT */}
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
              gap={8}
              p={6}
            >
              {/* Gambar pertama */}
              <Image
                src="/image/BRN.png"
                alt="Project Image 1"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />

              {/* Gambar kedua */}
              <Image
                src="/image/BRN1.png"
                alt="Project Image 2"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />
            </Grid>
            {/* START BAGIAN Why Hire Me */}
            <Stack p={6} mt={{ base: "2px", md: "2px", lg: "5px" }}>
              {/* Teks "Why hire me?" */}
              <Text
                fontSize={{ base: "15px", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign="left"
              >
                Tech Behind the Scenes
              </Text>
            </Stack>

            {/* START logo-tools yang digunakan */}
            <Flex
              direction="row"
              justify="left"
              gap={{ base: "4", md: "10", lg: "9" }}
              p={8}
              wrap="wrap"
              mt={{ base: "-45px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo 1 */}
              <Image
                src="/image/logo/Laravel.png"
                alt="Tool 1"
                boxSize={{ base: "30px", md: "40px", lg: "90px" }}
                objectFit="contain"
              />
            </Flex>
            {/* END logo-tools yang digunakan */}

            {/* START Logo Internet dan GitHub */}
            <Flex
              direction="row"
              justify="right"
              gap={5}
              p={7}
              mt={{ base: "-20px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo Internet */}
              <Link
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/internet.png"
                  alt="Internet"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>

              {/* Logo GitHub */}
              <Link
                href="https://github.com/owin40/event-planner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/git.png"
                  alt="GitHub"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>
            </Flex>
            {/* END Logo Internet dan GitHub */}
          </Box>
          {/* CARD 5 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "620px", lg: "950px" }}
            p={{ base: 4, md: 4, lg: 14 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            {/* logo dan teks */}
            <Flex
              direction={{ base: "row", md: "row", lg: "row" }}
              align="center"
              justify="flex-start"
              gap={3} // jarak antara logo dan teks
              p={6}
            >
              {/* Logo */}
              <Image
                src="/image/GameL.png"
                alt="Project 1 Logo"
                boxSize={{ base: "40px", md: "50px", lg: "70px" }}
                objectFit="contain"
              />

              {/* teks */}
              <Box>
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                  fontWeight="bold"
                  fontFamily="Poppins, sans-serif"
                  color="black"
                  textAlign="left"
                  mb={1}
                >
                  Froggy Clicker
                </Text>
              </Box>
            </Flex>
            <Stack
              direction="column"
              align="flex-start"
              justify="flex-start"
              mt={{ base: "-45px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "15px", md: "18px", lg: "20px" }}
                color="gray.600"
                textAlign="left"
                fontFamily="Poppins, sans-serif"
              >
                A short description of the project goes here. It's concise but
                provides insight into the project.
              </Text>
            </Stack>

            {/* START GAMBAR PROJECT */}
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
              gap={8}
              p={6}
            >
              {/* Gambar pertama */}
              <Image
                src="/image/Game.png"
                alt="Project Image 1"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />

              {/* Gambar kedua */}
              <Image
                src="/image/Game1.png"
                alt="Project Image 2"
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                objectFit="cover"
                borderRadius="lg"
              />
            </Grid>
            {/* START BAGIAN Why Hire Me */}
            <Stack p={6} mt={{ base: "2px", md: "2px", lg: "5px" }}>
              {/* Teks "Why hire me?" */}
              <Text
                fontSize={{ base: "15px", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign="left"
              >
                Tech Behind the Scenes
              </Text>
            </Stack>

            {/* START logo-tools yang digunakan */}
            <Flex
              direction="row"
              justify="left"
              gap={{ base: "4", md: "10", lg: "9" }}
              p={8}
              wrap="wrap"
              mt={{ base: "-45px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo 1 */}
              <Image
                src="/image/logo/bootstrap.png"
                alt="Tool 1"
                boxSize={{ base: "30px", md: "40px", lg: "90px" }}
                objectFit="contain"
              />
            </Flex>
            {/* END logo-tools yang digunakan */}

            {/* START Logo Internet dan GitHub */}
            <Flex
              direction="row"
              justify="right"
              gap={5}
              p={7}
              mt={{ base: "-20px", md: "-25px", lg: "-20px" }}
            >
              {/* Logo Internet */}
              <Link
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/internet.png"
                  alt="Internet"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>

              {/* Logo GitHub */}
              <Link
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/logo/git.png"
                  alt="GitHub"
                  boxSize={{ base: "20px", md: "30px", lg: "40px" }}
                  _hover={{
                    animation: `${slideFromTop} 10s ease forwards`,
                  }}
                  objectFit="contain"
                />
              </Link>
            </Flex>
            {/* END Logo Internet dan GitHub */}
          </Box>
        </Stack>
        {/* END Projects */}
      </Stack>
      {/* END Background */}
      <Footer />
    </>
  );
};

export default Index;
