import { Flex, chakra, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <Flex direction="row" justifyContent="space-between">
      <chakra.main>
        <chakra.section id="section1" height="100vh" padding="4">
          <AboutMe />
        </chakra.section>
        <chakra.section id="section2" height="100vh" padding="4">
          Experience
        </chakra.section>
      </chakra.main>
      <Header />
    </Flex>
  );
}
