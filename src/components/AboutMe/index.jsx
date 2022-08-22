import { useState, useEffect } from "react";
import { Flex, chakra, Text } from "@chakra-ui/react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Front-End Developer", "Back-End Developer", "Mobile Developer"];

export default function AboutMe() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Text fontSize="4xl">Hello, I am Kaung Zaw</Text>
      <Flex fontSize="3xl">
        I am a&nbsp;
        <TextTransition springConfig={presets.slow} direction="down">
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </Flex>
    </>
  );
}
