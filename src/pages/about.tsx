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
        minHeight={{ lg: "300vh", md: "270vh", base: "335vh" }}
        alignItems="center"
        position="relative"
      >
        {/* Rectangle Background */}
        <Box
          backgroundColor="#FFCDEA"
          width={{ base: "100%", md: "100%", lg: "full" }}
          height={{ base: "200px", md: "150px", lg: "250px" }}
          position="absolute"
          left={0}
          top={{ base: 0, md: "120px" }}
          zIndex={90}
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
          <Image
            src="/image/about/profile.png"
            alt="Profile"
            objectFit="contain"
            boxSize={{ base: "300px", md: "350px", lg: "600px" }}
            alignSelf={{ base: "center", md: "flex-start" }}
            ml={{ base: 0, md: "50px" }}
          />

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
              fontSize={{ base: "16px", md: "25px", lg: "30px" }}
              fontWeight="regular"
              fontFamily="Poppins, sans-serif"
              color="black"
              textAlign={{ base: "center", lg: "justify", md: "start" }}
            >
              Hi, I’m Dhini Afifah, a tech enthusiast from Universitas
              Multimedia Nusantara. I blend creativity with logic to design
              intuitive web solutions and secure systems, turning complex ideas
              into seamless experiences.
            </Text>
            <Text
              fontSize={{ base: "16px", md: "25px", lg: "30px" }}
              fontWeight="regular"
              fontFamily="Poppins, sans-serif"
              color="black"
              textAlign={{ base: "center", lg: "justify", md: "start" }}
            >
              Driven by curiosity and collaboration, I strive to bridge data,
              design, and user experience to create impactful projects.
            </Text>
          </Stack>
          {/* END desc */}
        </Stack>
        {/* END BAGIAN Who Am I */}

        {/* START BAGIAN Why Hire Me */}
        <Stack
          w={"75vw"}
          mt={{ md: "10rem", base: "5rem", lg: "15rem" }}
          align="center"
          gap="4rem"
        >
          {/* Teks "Why hire me?" */}
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "80px" }}
            fontWeight="medium"
            color="black"
            textAlign={{ base: "center", md: "left" }}
            fontFamily="Poppins, sans-serif"
          >
            Why hire me?
          </Text>

          {/* START 3 KOTAK */}
          <Stack
            direction={{ base: "column", md: "column", lg: "row" }}
            gap={{ base: "35px", md: "50px", lg: "100px" }}
            justify="center"
            align="center"
          >
            {/* Kotak 1 */}
            <Box
              bg="#00598B"
              w={{ base: "auto", md: "400px", lg: "400px" }}
              h={{ base: "auto", md: "320px", lg: "360px" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              borderRadius="31px"
              shadow="md"
              p="6"
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            >
              <Image
                src="/image/about/Emoji2.png"
                alt="Icon 1"
                boxSize={{ base: "100px", md: "120px", lg: "150px" }}
                mb="4"
              />
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                color="white"
                fontWeight="semibold"
                fontFamily="Poppins, sans-serif"
                mb="1"
              >
                Team Working
              </Text>
              <Text
                fontSize="md"
                color="white"
                textAlign="left"
                fontFamily="Poppins, sans-serif"
              >
                I excel at analyzing complex challenges and developing
                innovative solutions that drive results, ensuring obstacles are
                turned into opportunities for growth.
              </Text>
            </Box>

            {/* Kotak 2 */}
            <Box
              bg="#00598B"
              w={{ base: "auto", md: "400px", lg: "400px" }}
              h={{ base: "auto", md: "320px", lg: "360px" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              borderRadius="31px"
              shadow="md"
              p="6"
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            >
              <Image
                src="/image/about/Emoji3.png"
                alt="Icon 2"
                boxSize={{ base: "100px", md: "120px", lg: "150px" }}
                mb="4"
              />
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                color="white"
                fontFamily="Poppins, sans-serif"
                fontWeight="semibold"
                mb="1"
              >
                Problem-solving
              </Text>
              <Text
                fontSize="md"
                color="white"
                textAlign="left"
                fontFamily="Poppins, sans-serif"
              >
                I thrive in collaborative environments, leveraging diverse
                perspectives to achieve shared goals and fostering a positive
                and productive team dynamic.
              </Text>
            </Box>

            {/* Kotak 3 */}
            <Box
              bg="#00598B"
              w={{ base: "auto", md: "400px", lg: "400px" }}
              h={{ base: "auto", md: "320px", lg: "360px" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              borderRadius="31px"
              shadow="md"
              p="6"
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            >
              <Image
                src="/image/about/Emoji4.png"
                alt="Icon 3"
                boxSize={{ base: "100px", md: "120px", lg: "150px" }}
                mb="4"
              />
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                color="white"
                fontFamily="Poppins, sans-serif"
                fontWeight="semibold"
                mb="1"
              >
                Creative Thinking
              </Text>
              <Text
                fontSize="md"
                color="white"
                textAlign="left"
                fontFamily="Poppins, sans-serif"
              >
                I bring fresh ideas and out-of-the-box solutions to the table,
                constantly thinking creatively to enhance efficiency and deliver
                unique approaches to challenges.
              </Text>
            </Box>
          </Stack>
          {/* END 3 KOTAK */}
        </Stack>
        {/* END BAGIAN Why Hire Me */}

        {/* START BAGIAN Hobby */}
        <Stack
          w={"75vw"}
          mt={{ md: "13rem", base: "7rem", lg: "15rem" }}
          align="start"
          gap="1rem"
        >
          {/* Teks "Me Outside of Work" */}
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "80px" }}
            fontWeight="medium"
            color="black"
            textAlign="center"
            fontFamily="Poppins, sans-serif"
          >
            Me Outside of Work
          </Text>
          {/* Teks tambahan */}
          <Text
            fontSize={{ base: "sm", md: "2xl", lg: "3xl" }}
            fontWeight="regular"
            color="#676565"
            textAlign={{ base: "center", md: "left", lg: "left" }}
            fontFamily="Poppins, sans-serif"
            lineHeight="1.6"
          >
            When I’m not coding or working on projects, I love spending time
            with my cat, diving into a good book, or enjoying the outdoors.
            Whether it's hiking or simply soaking in the peace of nature, these
            moments help me recharge and spark new ideas.
          </Text>
        </Stack>
        {/* END BAGIAN Hobby */}
      </Stack>
      {/* END Background */}
      <Footer />
    </>
  );
};

export default About;
