import { Contract } from "ethers";
import { JsonFragment } from "@ethersproject/abi";
import { useNetwork, useSigner } from "wagmi";

import NETWORKS from "constants/networks";
import useControls from "states/controls";
import getContractInstance from "./getContractInstance";

interface ContractAndABI {
  contractInstance: Contract | null;
  abi: JsonFragment[] | null;
  address: `0x${string}`;
}

const useContract = (contractName: string): ContractAndABI => {
  const { chain } = useNetwork();
  const { data: signer } = useSigner();
  const isUsingStaging = useControls((state) => state.isUsingStaging);

  let selectedEnvironment = NETWORKS.find((network) => network.chainId === chain.id).value;
  if (isUsingStaging)
    selectedEnvironment = NETWORKS.find((network) => network.isStaging && network.chainId === chain.id).value;

  const contract = getContractInstance(signer, selectedEnvironment, contractName);
  return {
    contractInstance: contract.contractInstance,
    abi: contract.contractABI,
    address: `0x${contract.contractInstance.address.substring(2)}`,
  };
};

export default useContract;
