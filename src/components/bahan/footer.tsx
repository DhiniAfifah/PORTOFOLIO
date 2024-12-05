import { Link, Stack, Text, Button, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { keyframes } from "@emotion/react";

// Animasi "slide-from-top"
const slideFromTop = keyframes`
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

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
          {["Project", "About", "Resume"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              fontWeight="medium"
              fontSize="lg"
              color="Black"
              fontFamily="'Poppins', sans-serif"
              _hover={{
                animation: `${slideFromTop} 0.5s ease forwards`,
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>

        {/* Social Media Icons */}
        <Stack
          direction="row"
          gap={6}
          justify={{ base: "center", md: "flex-start" }}
          align="center"
          mb={8}
        >
          {[
            { icon: FaGithub, link: "https://github.com/DhiniAfifah/" },
            {
              icon: FaLinkedin,
              link: "https://www.linkedin.com/in/siti-maryama-ramadhini-afifah/",
            },
            { icon: FaInstagram, link: "https://instagram.com/dhini_afifah/" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              _hover={{
                animation: `${slideFromTop} 0.7s ease forwards`,
              }}
            >
              <social.icon size={30} color="black" />
            </Link>
          ))}
        </Stack>
      </Box>
      {/* END Footer */}
    </>
  );
};

export default Footer;
