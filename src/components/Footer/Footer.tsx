import React from "react";
import { Heading, Box, Image } from "@chakra-ui/react";

import { ConnectWallet, SettingsButton } from "components";

const Footer = () => {
  return (
    <Box
      className="wrapper"
      h="10vh"
      width="100vw"
      bottom="0"
      marginTop="8vh"
      marginLeft="2vw"
      marginRight="2vw"
      display="flex"
    >
      <Heading as="h4" size="xl" display="flex" w="28vw" fontSize="3xl">
        <a href="/">
          <Image src="/images/gluwa.png" alt="Gluwa" width="140px" height="32px" pl="2vw" />
        </a>
      </Heading>
      <Box w="20vw" pt="3vh">
        <ConnectWallet />
        <SettingsButton />
      </Box>
    </Box>
  );
};

export default Footer;
