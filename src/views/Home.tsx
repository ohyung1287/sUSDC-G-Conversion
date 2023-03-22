import React, { useEffect, useState } from "react";
import { Center, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import useControls from "states/controls";
import { BigButton, WalletSelector } from "components";

const Home: React.FC = () => {
  const { isConnected } = useAccount();
  const [sessionData, setSessionData] = useState();
  const signer = sessionStorage.getItem("mySigner");
  const setActiveView = useControls((state) => state.setActiveView);
  const setActiveModal = useControls((state) => state.setActiveModal);

  useEffect(() => {
    setActiveView("home");
  }, []);

  return (
    <div>
      {isConnected || signer ? (
        <>
          <Center>
            <Flex>
              <BigButton
                key={`BigButtonApproveSUSDCG`}
                text={["Approve sUSDC-G", "Approve sUSDC-G"]}
                clicked={false}
                handleClick={() => {
                  setActiveModal("approveSUSDCG");
                }}
              />
            </Flex>
          </Center>
        </>
      ) : (
        <>
          <Center>
            <Flex>
              <Box w="100%" h="10" mb="2%">
                <Heading>Connect your wallet</Heading>
                <Text as="b">Then the contracts available to the network you are on will be display</Text>
              </Box>
            </Flex>
          </Center>
          <Center>
            <Flex mt="4vh">
              <WalletSelector setSessionData={setSessionData} />
            </Flex>
          </Center>
        </>
      )}
    </div>
  );
};

export default Home;
