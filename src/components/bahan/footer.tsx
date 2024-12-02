import { Link, Stack, Text, Button, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* START Footer */}
      <Box
        bg="#FFCDEA"
        color="Black"
        py={{ base: 10, md: 20 }}
        textAlign={{ base: "center", md: "left" }}
        pl={{ base: 0, md: 16 }}
      >
        {/* Heading */}
        <Text
          fontSize={{ base: "2rem", md: "3rem", lg: "50px" }}
          fontWeight="semibold"
          fontFamily="Poppins, sans-serif"
          mb={4}
        >
          Let’s Collaborate!
        </Text>

        {/* Button Email */}
        <Link
          href="mailto:afifahdhini25@gmail.com"
          _hover={{ textDecoration: "none" }}
        >
          <Button
            variant="outline"
            borderColor="Black"
            color="Black"
            borderRadius="full"
            size="lg"
            fontWeight="medium"
            fontFamily="'Poppins', sans-serif"
            _hover={{
              bgColor: "Black",
              color: "#FFCDEA",
              borderColor: "#FFCDEA",
              transition: "all 0.3s ease",
            }}
            _focus={{
              bgColor: "Black",
              color: "#FFCDEA",
              borderColor: "#FFCDEA",
              transition: "all 0.3s ease",
            }}
            _active={{
              bgColor: "Black",
              color: "#FFCDEA",
              borderColor: "#FFCDEA",
              transition: "all 0.3s ease",
            }}
            mb={50}
          >
            Work With Me
          </Button>
        </Link>

        {/* Links */}
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 3, md: 6 }}
          justify={{ base: "center", md: "flex-start" }}
          align="center"
          mb={8}
        >
          <Link
            href="/project"
            fontWeight="medium"
            fontSize="lg"
            color="Black"
            fontFamily="'Poppins', sans-serif"
          >
            Project
          </Link>
          <Link
            href="/about"
            fontWeight="medium"
            fontSize="lg"
            color="Black"
            fontFamily="'Poppins', sans-serif"
          >
            About
          </Link>
          <Link
            href="/resume"
            fontWeight="medium"
            fontSize="lg"
            color="Black"
            fontFamily="'Poppins', sans-serif"
          >
            Resume
          </Link>
        </Stack>

        {/* Social Media Icons */}
        <Stack
          direction="row"
          gap={6}
          justify={{ base: "center", md: "flex-start" }}
          align="center"
          mb={8}
        >
          <Link href="https://github.com/DhiniAfifah/" target="_blank">
            <FaGithub size={30} color="black" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/siti-maryama-ramadhini-afifah/"
            target="_blank"
          >
            <FaLinkedin size={30} color="black" />
          </Link>
          <Link href="https://instagram.com/dhini_afifah/" target="_blank">
            <FaInstagram size={30} color="black" />
          </Link>
        </Stack>
      </Box>
      {/* END Footer */}
    </>
  );
};

export default Footer;
