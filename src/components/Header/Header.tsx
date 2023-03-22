import React from "react";
import { Link } from "react-router-dom";
import { Heading, Flex, Image, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex className="wrapper" w={"100%"} h={"10%"} pt="1rem" mb="1rem">
      <Link to="/">
        <Heading as="h2" size="xl" display="flex" w="40vw" fontSize="3xl">
          {
            <Image
              src={`/images/${colorMode === "light" ? "gluwa-logo" : "gluwa-logo-darkMode"}.png`}
              alt="Gluwa"
              pl="1rem"
              w="22rem"
            />
          }
        </Heading>
      </Link>
      <Flex pt="1rem" ml="1rem"></Flex>
    </Flex>
  );
};

export default Header;
