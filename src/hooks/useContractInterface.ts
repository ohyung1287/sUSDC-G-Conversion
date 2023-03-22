import { useState, useEffect } from "react";
import { Contract } from "ethers";
import { useAccount, useNetwork, useSigner } from "wagmi";

import NETWORKS from "constants/networks";
import useControls from "states/controls";
import getContractInstance from "./getContractInstance";

const useContractInterface = (contractSelected: string) => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { data: signer } = useSigner();
  const isUsingStaging = useControls((state) => state.isUsingStaging);
  const [contractInstance, setContractInstance] = useState<Contract | null>(null);

  const handleGetContractInstance = async () => {
    let selectedEnvironment = NETWORKS.find((network) => network.chainId === chain.id).value;
    if (isUsingStaging)
      selectedEnvironment = NETWORKS.find((network) => network.isStaging && network.chainId === chain.id).value;
    const { contractInstance } = await getContractInstance(signer, selectedEnvironment, contractSelected);
    setContractInstance(contractInstance);
  };

  useEffect(() => {
    if (isConnected) handleGetContractInstance();
  }, [isConnected, chain]);

  return contractInstance;
};

export default useContractInterface;
