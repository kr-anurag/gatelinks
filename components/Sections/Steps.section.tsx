import type { NextComponentType } from "next";
import { Box, Text } from "@chakra-ui/react";

const Step = ({ number, title, desc }: any) => {
  return (
    <Box
      h="64"
      w="72"
      rounded="lg"
      bgColor="blackAlpha.100"
      _hover={{ bgColor: "blackAlpha.200" }}
      transition="all 0.2s"
      cursor="pointer"
      display="flex"
      flexDir="column"
      gap="4"
      px="4"
      py="4"
      opacity="0.95"
    >
      <Box
        h="12"
        w="12"
        rounded="full"
        bg="blue.500"
        border="solid 3px"
        borderColor="white"
        textColor="white"
        fontFamily="redHat"
        fontWeight="600"
        display="grid"
        placeItems="center"
        fontSize="2xl"
      >
        {number}
      </Box>

      <Text fontFamily="redHat" fontSize="xl" fontWeight="600">
        Title UwU
      </Text>

      <Text
        fontFamily="poppins"
        fontSize="lg"
        fontWeight="500"
        textColor="gray.600"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, error.
      </Text>
    </Box>
  );
};

const Steps: NextComponentType = () => {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      gap="10"
      mt="6"
      mb="4"
    >
      <Step number={1} />
      <Step number={2} />
      <Step number={3} />
    </Box>
  );
};

export default Steps;
