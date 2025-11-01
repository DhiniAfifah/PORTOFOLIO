import { Box, Text, VStack } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms - Portfolio text inside folder
  const yPortfolio = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);
  const scalePortfolio = useTransform(scrollYProgress, [0, 0.6], [1, 0.5]);
  const opacityPortfolio = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    [1, 0.7, 0]
  );

  // Floating elements parallax
  const yFloat1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const yFloat3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Folder stays static - no parallax
  // Name section - no parallax (static)

  return (
    <Box
      ref={ref}
      minHeight="100vh"
      background="linear-gradient(135deg, #f4f1eb 0%, #e8e2d5 100%)"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Container for centered content */}
      <Box
        position="relative"
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Portfolio Text */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={2}
        >
          <Box
            width={{ base: "300px", md: "400px", lg: "500px" }}
            height={{ base: "240px", md: "320px", lg: "400px" }}
            background="linear-gradient(135deg, #7BB3F0 0%, #5A9FE8 100%)"
            borderRadius="24px"
            position="relative"
            boxShadow="0 25px 80px rgba(0,0,0,0.2)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Folder Tab */}
            <Box
              position="absolute"
              top={{ base: "-12px", md: "-16px", lg: "-20px" }}
              left={{ base: "40px", md: "50px", lg: "60px" }}
              width={{ base: "80px", md: "100px", lg: "120px" }}
              height={{ base: "24px", md: "32px", lg: "40px" }}
              background="linear-gradient(135deg, #7BB3F0 0%, #5A9FE8 100%)"
              borderRadius="16px 16px 0 0"
            />

            {/* Portfolio Text inside folder - with parallax */}
            <motion.div
              style={{
                y: yPortfolio,
                scale: scalePortfolio,
                opacity: opacityPortfolio,
              }}
            >
              <Text
                fontSize={{ base: "4xl", md: "6xl", lg: "9xl" }}
                fontWeight="400"
                color="white"
                fontFamily="Georgia, serif"
                fontStyle="italic"
                letterSpacing="9px"
                lineHeight="0.8"
                textAlign="center"
                whiteSpace="nowrap"
              >
                PORTOFOLIO
              </Text>
            </motion.div>

            {/* Year Text */}
            <Text
              position="absolute"
              bottom={{ base: 4, md: 6, lg: 8 }}
              right={{ base: 4, md: 6, lg: 8 }}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="white"
              fontWeight="300"
              fontFamily="Georgia, serif"
              opacity="0.7"
              letterSpacing="1px"
            >
              Dhini Afifah-2025
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ParallaxHero;
