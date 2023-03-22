import { VStack, HStack, Button, Text, Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useConnect } from "wagmi";
import useControls from "states/controls";
import React, { useState } from "react";
import { ethers } from "ethers";
import { REACT_APP_LUNIVERSE_RPC_MAINNET } from "../../constants/general";

interface WalletSelectorProps {
  closeModal?: () => void;
  setSessionData?: () => void;
}

const WalletSelector: React.FC<WalletSelectorProps | any> = (props) => {
  const { connect, connectors, error, isLoading, pendingConnector, reset } = useConnect();

  const setProvider = useControls((state) => state.setProvider);
  const [privateKey, setPrivateKey] = useState("");
  const [isPrivateKeyValid, setIsPrivateKeyValid] = useState(true);

  const handleProviderSelection = (type) => {
    window.localStorage.setItem("provider", type);
    setProvider(type);
  };

  if (error) {
    console.error(error);
  }

  const handleSubmit = () => {
    const wallet = validatePrivateKey(privateKey);
    if (wallet) {
      sessionStorage.setItem("mySigner", privateKey);
      sessionStorage.setItem("myAddress", JSON.stringify(wallet.address));
      props.setSessionData(1);
    } else {
      setIsPrivateKeyValid(false);
    }
  };

  const validatePrivateKey = (key) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(REACT_APP_LUNIVERSE_RPC_MAINNET);
      const wallet = new ethers.Wallet(key, provider);
      const signer = wallet.connect(provider);
      return signer;
    } catch (err) {
      return false;
    }
  };
  return (
    <VStack>
      <Button
        variant="outline"
        onClick={() => {
          connect({
            connector: connectors.find((connector) => connector.id === "metaMask"),
          });
          handleProviderSelection("injected");
          props.closeModal && props.closeModal();
        }}
        isLoading={isLoading && pendingConnector && pendingConnector.id === "metaMask"}
        isDisabled={isLoading && pendingConnector && pendingConnector.id !== "metaMask"}
        w="100%"
      >
        <HStack w="100%" justifyContent="center">
          <Image src="/images/wallets/mm.png" alt="Metamask Logo" width={25} height={25} borderRadius="3px" />
          <Text>Metamask</Text>
        </HStack>
      </Button>
      <HStack w="100%" justifyContent="center">
        <Text>OR</Text>
      </HStack>
      <HStack w="100%" justifyContent="center">
        <Input
          name="privateKey"
          value={privateKey}
          placeholder="Key in Private key"
          isInvalid={!isPrivateKeyValid}
          onChange={(event) => setPrivateKey(event.target.value)}
        />
      </HStack>
      <HStack w="100%" justifyContent="center">
        <Button onClick={handleSubmit}>Submit</Button>
      </HStack>
      {isLoading && (
        <Button
          variant="outline"
          onClick={() => {
            reset();
            handleProviderSelection("");
          }}
          w="100%"
        >
          <HStack w="100%" justifyContent="center">
            <Image src="/images/icons/reset.png" alt="No Account" width={25} height={25} borderRadius="3px" />
            <Text>Reset</Text>
          </HStack>
        </Button>
      )}
    </VStack>
  );
};

export default WalletSelector;
