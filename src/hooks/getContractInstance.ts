import { Contract, providers, Signer } from "ethers";
import { JsonFragment } from "@ethersproject/abi";

import Abi from "abi";
import useContracts from "states/contracts";

const getContractInstance = (
  signerOrProvider: Signer | providers.Provider,
  selectedEnvironment: string,
  selectedContract: string
): {
  contractInstance: Contract | null;
  contractABI: JsonFragment[] | null;
} => {
  const { contractList } = useContracts.getState();
  const contractData = contractList.find((contract) => contract.name === selectedContract);
  if (contractData) {
    const contractDataOnNetwork = contractData.addressPerNetwork.find(
      (network) => network.network === selectedEnvironment
    );
    if (contractDataOnNetwork) {
      const abiName = contractData.abiName;
      const contractAddress = contractDataOnNetwork.address;
      const contractABI = Abi[abiName];
      try {
        const contractInstance = new Contract(contractAddress, contractABI, signerOrProvider);
        return {
          contractInstance,
          contractABI,
        };
      } catch (error) {
        console.log(error);
      }
    }
  }
  return {
    contractInstance: null,
    contractABI: null,
  };
};

export default getContractInstance;
