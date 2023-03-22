import React from "react";
import { HStack, Button, Text } from "@chakra-ui/react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

import { NETWORKS } from "constants/index";
import useControls from "states/controls";
import useContracts from "states/contracts";

interface ContractNetworkSwitcherProps {
  contractSelected?: string;
  onButtonClick?: () => void;
}

const ContractNetworkSwitcher: React.FC<ContractNetworkSwitcherProps> = ({ contractSelected, onButtonClick }) => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const isUsingStaging = useControls((state) => state.isUsingStaging);
  const contractList = useContracts((state) => state.contractList);

  const thisContractOnOtherNetworks =
    isConnected != null && chain && contractSelected != null
      ? contractList
          .find((contract) => contract.name === contractSelected)
          .addressPerNetwork.filter(
            (contract) =>
              (isUsingStaging ? contract.isStaging : !contract.isStaging) &&
              contract.network !== NETWORKS.find((network) => network.chainId === chain.id).value &&
              contract.address !== ""
          )
      : [];

  if (!thisContractOnOtherNetworks) return null;

  return (
    <HStack key="HStack-otherNetworks" spacing={4}>
      <Text>This contract is also available on: </Text>
      {thisContractOnOtherNetworks.map((contract) => (
        <Button
          key={contract.network}
          variant="outline"
          colorScheme="blue"
          size={"sm"}
          onClick={() => {
            switchNetwork(NETWORKS.find((network) => network.value === contract.network).chainId);
            onButtonClick;
          }}
        >{`${contract.network}`}</Button>
      ))}
    </HStack>
  );
};

export default ContractNetworkSwitcher;
