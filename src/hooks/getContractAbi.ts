import { Contract } from "ethers";

import Abi from "abi";
import useContracts from "states/contracts";

const getContractAbi = async (selectedContract: string): Promise<Contract | null> => {
  const { contractList } = useContracts.getState();
  const contractData = contractList.find((contract) => contract.name === selectedContract);
  if (contractData) {
    const abiName = contractData.abiName;
    if (abiName && Abi[abiName]) return Abi[abiName];
  }
  return null;
};

export default getContractAbi;
