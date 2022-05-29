import type { NextComponentType } from "next";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

const Hero: NextComponentType = () => {
  return (
    <>
      <Box
        h="72"
        w="full"
        bgGradient="linear(to-r, #fc00ff, #00dbde)"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          position="absolute"
          top="0"
          display="flex"
          flexDir="row"
          alignItems="center"
          py="4"
          px="10"
          w="full"
          justifyContent="space-between"
          fontFamily="inter"
          textColor="white"
        >
          <Text fontSize="xl" fontWeight="500">
            gatelinks.
          </Text>

          <Flex dir="row" alignItems="center" gap="4">
            <Button
              bgGradient="linear(to-r, #a8ff78, #78ffd6)"
              textColor="gray.700"
              fontWeight="600"
              px="6"
              rounded="full"
              _active={{}}
              _focus={{}}
              _hover={{ transform: "scale(0.95)" }}
              transition="all 0.2s"
            >
              Login
            </Button>
          </Flex>
        </Box>
        <Text
          textAlign="center"
          fontFamily="redHat"
          fontWeight="black"
          fontSize="5xl"
          textColor="whiteAlpha.900"
        >
          GateLinks
        </Text>

        <Text
          textColor="whiteAlpha.800"
          fontFamily="redHat"
          fontSize="2xl"
          fontWeight="500"
        >
          gated solana links, at your fingertips!
        </Text>
      </Box>
    </>
  );
};

export default Hero;
