import { Link, Stack, Text, Button, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Stack
        direction={"row"}
        align={"center"}
        justifyContent={"flex-end"}
        h={"5rem"}
        w={"100vw"}
        px={{ base: "1rem", md: "2rem", xl: "4rem" }}
        bgColor={"white"}
        position={"fixed"}
        zIndex={999}
        boxShadow={"0px 4px 6.3px rgba(0, 0, 0, 0.3)"}
      >
        {/* START Menu */}
        <Stack
          direction={"row"}
          gap={{ base: 4, md: 6, xl: 8 }}
          align={"center"}
        >
          <Link href={"/"}>
            <Text
              fontWeight={"Bold"}
              fontSize={{ base: "1rem", md: "1.25rem", xl: "1.5rem" }}
              color={"black"}
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)", // Tambahkan animasi scale-in
                color: "#00598B", // Opsional: Ubah warna saat hover
              }}
            >
              Home
            </Text>
          </Link>
          <Link href={"/about"}>
            <Text
              fontWeight={"Bold"}
              fontSize={{ base: "1rem", md: "1.25rem", xl: "1.5rem" }}
              color={"black"}
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                color: "#00598B",
              }}
            >
              About
            </Text>
          </Link>
          <Link href={"/#what-i-do"}>
            <Text
              fontWeight={"Bold"}
              fontSize={{ base: "1rem", md: "1.25rem", xl: "1.5rem" }}
              color={"black"}
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                color: "#00598B",
              }}
            >
              Project
            </Text>
          </Link>
          <Link
            href="mailto:afifahdhinin25@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              fontSize={{ base: "1rem", md: "1.25rem", xl: "1.5rem" }}
              bgColor="#FFCDEA"
              color="Black"
              borderRadius="full"
              px={{ base: "1.5rem", md: "1.5rem" }}
              py={{ base: "0.75rem", md: "1.3rem" }}
              _hover={{
                bgColor: "#000",
                color: "white",
                transition: "all 0.3s ease",
              }}
              _active={{
                bgColor: "button.primary",
                color: "white",
              }}
            >
              Contact
            </Button>
          </Link>
        </Stack>
        {/* END Menu */}
      </Stack>

      {/* Padding Top for the Navbar */}
      <Box pt={"5rem"} />
    </>
  );
};

export default Navbar;
