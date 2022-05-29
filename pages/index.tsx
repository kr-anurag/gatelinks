import Head from "next/head";
import { Hero, NavBar, Steps } from "../components";
import { Box, Text } from "@chakra-ui/react";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>🗼 GatedLinks</title>
        <meta name="description" content="Solana Gated Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box minH="100vh" minW="full" overflowX="hidden" bg="gray.100">
        <Hero />

        <Box>
          <Text
            fontFamily="redHat"
            fontSize="4xl"
            mt="10"
            ml="16"
            fontWeight="800"
          >
            Steps
          </Text>

          <Steps />
        </Box>
      </Box>
    </>
  );
};

export default Home;
