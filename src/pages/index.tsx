import { Stack, Image, Text, Box, Flex, Grid, Link } from "@chakra-ui/react";
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
        minHeight={{ lg: "1260vh", md: "627vh", base: "1155vh" }}
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

        {/* -------------------------------------------- START Garis What ---------------------------------------------------------*/}
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

        {/* --------------------------------------------------- START Experience -------------------------------------------------------- */}
        <Stack
          direction={{ base: "column", md: "column", lg: "column" }}
          align="center"
          justify="center"
          gap={{ base: "60px", md: "100px", lg: "140px" }}
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
            h={{ base: "auto", md: "450px", lg: "480px" }}
            p={{ base: 4, md: 4, lg: 12 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            <Stack
              direction="column"
              align={{ base: "center", md: "flex-start" }}
              justify="flex-start"
              mt={{ base: "-25px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign={{ base: "center", md: "left", lg: "left" }}
                mb={1}
              >
                Visual Journalism Day
              </Text>
            </Stack>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="stretch"
              justify="space-between"
              gap={{ base: 6, md: 10, lg: 1 }}
              p={7}
            >
              {/* Gambar Responsif */}
              <Image
                src="/image/VJD.png"
                alt="Visual Journalism Day"
                w={{ base: "100%", md: "50%", lg: "400px" }}
                mt={{ base: "-45px", md: "-25px", lg: "-25px" }}
                h={{ base: "auto", md: "300px", lg: "250px" }}
                objectFit="cover"
                borderRadius="lg"
              />
              {/* Deskripsi di Samping Gambar */}
              <Stack
                gap={4}
                w={{ base: "100%", md: "50%", lg: "65%" }} // Lebar deskripsi
                h="100%"
                justify="center"
              >
                {/* Deskripsi */}
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="black"
                  fontFamily="Poppins, sans-serif"
                  textAlign="left"
                >
                  Collaborated with a team to develop a user-friendly website.
                  Ensured design alignment, conducted functionality tests, and
                  maintained the site for optimal performance and visitor
                  engagement.
                </Text>
              </Stack>
            </Flex>
          </Box>

          {/* CARD 2 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "450px", lg: "480px" }}
            p={{ base: 4, md: 4, lg: 12 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            <Stack
              direction="column"
              align={{ base: "center", md: "flex-start" }}
              justify="flex-start"
              mt={{ base: "-25px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign={{ base: "center", md: "left", lg: "left" }}
                mb={1}
              >
                UMN JUICE
              </Text>
            </Stack>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="stretch"
              justify="space-between"
              gap={{ base: 6, md: 10, lg: 1 }}
              p={7}
            >
              {/* Gambar Responsif */}
              <Image
                src="/image/JUICE.png"
                alt="Visual Journalism Day"
                w={{ base: "100%", md: "50%", lg: "400px" }}
                mt={{ base: "-45px", md: "-25px", lg: "-25px" }}
                h={{ base: "auto", md: "300px", lg: "250px" }}
                objectFit="cover"
                borderRadius="lg"
              />
              {/* Deskripsi di Samping Gambar */}
              <Stack
                gap={4}
                w={{ base: "100%", md: "50%", lg: "65%" }} // Lebar deskripsi
                h="100%"
                justify="center"
              >
                {/* Deskripsi */}
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="black"
                  fontFamily="Poppins, sans-serif"
                  textAlign="left"
                >
                  Managed and updated website content to ensure data accuracy.
                  Participated in resolving technical issues and improved the
                  efficiency of data entry and website management processes.
                </Text>
              </Stack>
            </Flex>
          </Box>

          {/* CARD 3 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "450px", lg: "480px" }}
            p={{ base: 4, md: 4, lg: 12 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            <Stack
              direction="column"
              align={{ base: "center", md: "flex-start" }}
              justify="flex-start"
              mt={{ base: "-25px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign={{ base: "center", md: "left", lg: "left" }}
                mb={1}
              >
                Mentoring UMN 2024
              </Text>
            </Stack>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="stretch"
              justify="space-between"
              gap={{ base: 6, md: 10, lg: 1 }}
              p={7}
            >
              {/* Gambar Responsif */}
              <Image
                src="/image/CBM.png"
                alt="Visual Journalism Day"
                w={{ base: "100%", md: "50%", lg: "400px" }}
                mt={{ base: "-45px", md: "-25px", lg: "-25px" }}
                h={{ base: "auto", md: "300px", lg: "250px" }}
                objectFit="cover"
                borderRadius="lg"
              />
              {/* Deskripsi di Samping Gambar */}
              <Stack
                gap={4}
                w={{ base: "100%", md: "50%", lg: "65%" }} // Lebar deskripsi
                h="100%"
                justify="center"
              >
                {/* Deskripsi */}
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="black"
                  fontFamily="Poppins, sans-serif"
                  textAlign="left"
                >
                  Managed attendance for 300+ committee members and ensured
                  smooth event operations. Handled communications, student
                  permissions, and coordinated administrative tasks.
                </Text>
              </Stack>
            </Flex>
          </Box>

          {/* CARD 4 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "450px", lg: "480px" }}
            p={{ base: 4, md: 4, lg: 12 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            <Stack
              direction="column"
              align={{ base: "center", md: "flex-start" }}
              justify="flex-start"
              mt={{ base: "-25px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign={{ base: "center", md: "left", lg: "left" }}
                mb={1}
              >
                PPIF 2024
              </Text>
            </Stack>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="stretch"
              justify="space-between"
              gap={{ base: 6, md: 10, lg: 1 }}
              p={7}
            >
              {/* Gambar Responsif */}
              <Image
                src="/image/PPIF.png"
                alt="Visual Journalism Day"
                w={{ base: "100%", md: "50%", lg: "400px" }}
                mt={{ base: "-45px", md: "-25px", lg: "-25px" }}
                h={{ base: "auto", md: "300px", lg: "250px" }}
                objectFit="cover"
                borderRadius="lg"
              />
              {/* Deskripsi di Samping Gambar */}
              <Stack
                gap={4}
                w={{ base: "100%", md: "50%", lg: "65%" }} // Lebar deskripsi
                h="100%"
                justify="center"
              >
                {/* Deskripsi */}
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="black"
                  fontFamily="Poppins, sans-serif"
                  textAlign="left"
                >
                  Guided new students through their orientation to the
                  Informatics program. Led interactive activities and
                  collaborated in planning events to ensure an engaging and
                  informative experience.
                </Text>
              </Stack>
            </Flex>
          </Box>

          {/* CARD 5 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "450px", lg: "480px" }}
            p={{ base: 4, md: 4, lg: 12 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            <Stack
              direction="column"
              align={{ base: "center", md: "flex-start" }}
              justify="flex-start"
              mt={{ base: "-25px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign={{ base: "center", md: "left", lg: "left" }}
                mb={1}
              >
                FeSoViTy 2024
              </Text>
            </Stack>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="stretch"
              justify="space-between"
              gap={{ base: 6, md: 10, lg: 1 }}
              p={7}
            >
              {/* Gambar Responsif */}
              <Image
                src="/image/fesofity.png"
                alt="Visual Journalism Day"
                w={{ base: "100%", md: "50%", lg: "400px" }}
                mt={{ base: "-45px", md: "-25px", lg: "-25px" }}
                h={{ base: "auto", md: "300px", lg: "250px" }}
                objectFit="cover"
                borderRadius="lg"
              />
              {/* Deskripsi di Samping Gambar */}
              <Stack
                gap={4}
                w={{ base: "100%", md: "50%", lg: "65%" }} // Lebar deskripsi
                h="100%"
                justify="center"
              >
                {/* Deskripsi */}
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="black"
                  fontFamily="Poppins, sans-serif"
                  textAlign="left"
                >
                  Supervised elementary students, teaching eco-literacy and
                  environmental awareness through interactive activities.
                  Provided feedback and helped organize eco-friendly projects.
                </Text>
              </Stack>
            </Flex>
          </Box>

          {/* CARD 6 */}
          <Box
            borderWidth="4px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="#FFCDEA"
            w={{ base: "100%", md: "680px", lg: "1520px" }}
            h={{ base: "auto", md: "450px", lg: "480px" }}
            p={{ base: 4, md: 4, lg: 12 }}
            background="linear-gradient(to bottom, #FFCDEA, #FFFFFF)"
          >
            <Stack
              direction="column"
              align={{ base: "center", md: "flex-start" }}
              justify="flex-start"
              mt={{ base: "-25px", md: "-25px", lg: "-30px" }}
              gap={2}
              p={7}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                fontWeight="medium"
                fontFamily="Poppins, sans-serif"
                color="black"
                textAlign={{ base: "center", md: "left", lg: "left" }}
                mb={1}
              >
                IFW 2023
              </Text>
            </Stack>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="stretch"
              justify="space-between"
              gap={{ base: 6, md: 10, lg: 1 }}
              p={7}
            >
              {/* Gambar Responsif */}
              <Image
                src="/image/IFW.png"
                alt="Visual Journalism Day"
                w={{ base: "100%", md: "50%", lg: "400px" }}
                mt={{ base: "-45px", md: "-25px", lg: "-25px" }}
                h={{ base: "auto", md: "300px", lg: "250px" }}
                objectFit="cover"
                borderRadius="lg"
              />
              {/* Deskripsi di Samping Gambar */}
              <Stack
                gap={4}
                w={{ base: "100%", md: "50%", lg: "65%" }} // Lebar deskripsi
                h="100%"
                justify="center"
              >
                {/* Deskripsi */}
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="black"
                  fontFamily="Poppins, sans-serif"
                  textAlign="left"
                >
                  Managed inventory, prepared event schedules, and handled
                  volunteer attendance. Coordinated logistics and ensured smooth
                  event operations through effective communication with the
                  team.
                </Text>
              </Stack>
            </Flex>
          </Box>
        </Stack>
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

        {/* --------------------------------------------------------- START Projects ------------------------------------------------*/}
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
            <Stack p={6} mt={{ base: "2px", md: "2px", lg: "5px" }}>
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
