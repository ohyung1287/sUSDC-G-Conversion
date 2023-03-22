import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { Header } from "components";

type PageProps = {
  children: JSX.Element;
};

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Flex align="center" justify="center" w={"100%"} h={"100%"}>
      <Box m="0.5rem">
        <Header />
        <Box as="main" className="page" marginTop="1%" w="100%" h="65%">
          {children}
        </Box>
        <Box as="main" className="footer" display="flex" w="100%" h="5%"></Box>
      </Box>
    </Flex>
  );
};

export default Page;
