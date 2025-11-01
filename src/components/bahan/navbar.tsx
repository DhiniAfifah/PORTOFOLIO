import { Link, Text, Box, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      {/* iOS Glass Pill Navbar */}
      <Box
        position="fixed"
        top="24px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={999}
      >
        {/* Glass Pill Container */}
        <Box
          bg="rgba(255, 255, 255, 0.9)"
          backdropFilter="blur(20px)"
          borderRadius="50px"
          border="1px solid rgba(255, 255, 255, 0.3)"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
          px={6}
          py={3}
          style={{
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Navigation Items */}
          <Flex align="center" justify="center" gap={6}>
            <Link href="/">
              <Text
                fontSize="15px"
                fontWeight="500"
                color="gray.700"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                _hover={{
                  color: "gray.900",
                }}
                transition="color 0.2s ease"
              >
                Home
              </Text>
            </Link>

            <Link href="/about">
              <Text
                fontSize="15px"
                fontWeight="500"
                color="gray.700"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                _hover={{
                  color: "gray.900",
                }}
                transition="color 0.2s ease"
              >
                About
              </Text>
            </Link>

            <Link href="/#what-i-do">
              <Text
                fontSize="15px"
                fontWeight="500"
                color="gray.700"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                _hover={{
                  color: "gray.900",
                }}
                transition="color 0.2s ease"
              >
                Projects
              </Text>
            </Link>

            <Link
              href="mailto:afifahdhinin25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text
                fontSize="15px"
                fontWeight="500"
                color="gray.700"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                _hover={{
                  color: "gray.900",
                }}
                transition="color 0.2s ease"
              >
                Contact
              </Text>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
