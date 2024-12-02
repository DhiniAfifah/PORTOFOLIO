import { Stack, Text } from "@chakra-ui/react";
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
      <Stack
        backgroundColor="#fff"
        minHeight="450vh"
        alignItems="center"
        position="relative"
      >
        <Stack color={"#000"}>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
          <Text fontWeight={{ base: "thin", lg: "bold" }}>Text</Text>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Index;
