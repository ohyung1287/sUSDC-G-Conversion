import React from "react";
import { Heading, Box } from "@chakra-ui/react";

const NoContractOnNetwork = () => {
  return (
    <Box className="wrapper" w="100vw" h="10vh" pt="2vh" display="flex">
      <Heading as="h2" size="xl" display="flex" w="28vw" fontSize="3xl">
        This contract is not available on this network.
      </Heading>
    </Box>
  );
};

export default NoContractOnNetwork;
