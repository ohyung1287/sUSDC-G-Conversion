import { ethers } from "ethers";
import { CONTRACTS } from "../constants";
import Abi from "../abi";
import { REACT_APP_LUNIVERSE_RPC_MAINNET } from "../constants/general";

export const getContract = (chain, contractName: string, signer: any) => {
  if (!chain || !signer) return undefined;
  if (chain.network === "luniverseTestnet" || chain.network === "luniverse") {
    const contractData = CONTRACTS.find((obj) => obj.name === contractName);
    const contractABI = Abi.SUSDCG;
    const contractInstance = new ethers.Contract(contractData.addressPerNetwork[0].address, Abi.SUSDCG, signer);
    return { contractInstance, contractABI };
  }
};
export const getUserBalance = (contract, address: string, handleUserBalanceUpdate: (string) => void) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
    const contractInstance = new ethers.Contract(contract.contractInstance.address, contract.contractABI, provider);
    contractInstance.balanceOf(address).then((balance) => {
      handleUserBalanceUpdate(balance.toString());
    });
  } catch (err) {
    return "0";
  }
};
export const getContractPk = () => {
  const mySigner = sessionStorage.getItem("mySigner");
  if (mySigner) {
    try {
      const provider = new ethers.providers.JsonRpcBatchProvider(REACT_APP_LUNIVERSE_RPC_MAINNET);
      const signer = new ethers.Wallet(mySigner, provider);
      const contractData = CONTRACTS.find((obj) => obj.name === "sUSDC-G");

      const contractABI = Abi.SUSDCG;
      const contractInstance = new ethers.Contract(contractData.addressPerNetwork[0].address, Abi.SUSDCG, signer);
      return { contractInstance, contractABI };
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
};
export const getUserBalancePk = (contract: any, address: string, handleUserBalanceUpdate: (string) => void) => {
  try {
    contract.contractInstance.balanceOf(address).then((balance) => {
      handleUserBalanceUpdate(balance.toString());
    });
  } catch (err) {
    return "0";
  }
};
