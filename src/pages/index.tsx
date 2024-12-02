import { Stack, Text, Image } from "@chakra-ui/react";
import Navbar from "@/components/bahan/navbar";
import Footer from "@/components/bahan/footer";

// simple, tetapi cuma bisa 1 komponen
// export default function Home() {
//   return <h1>Home</h1>;
// }

// bisa komponen banyak
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
            <Image
              src="./src/image/Gradient.png"
              alt="Profile"
              objectFit="contain"
              boxSize={{ base: "300px", md: "500px", lg: "600px" }}
              alignSelf={{ base: "center", md: "end-start" }}
              ml={{ base: 0, md: "50px" }}
            />
            <Image
              src="./src/image/Emoji.png"
              alt="Profile"
              objectFit="contain"
              boxSize={{ base: "300px", md: "500px", lg: "600px" }}
              alignSelf={{ base: "center", md: "end-start" }}
              ml={{ base: 0, md: "50px" }}
            />
          </Stack>
        </Stack>
        {/* END Gradient and Emoji */}
      </Stack>
      {/* END Background */}

      <Footer />
    </>
  );
};

export default Index;
