import { useSigner, useContractReads, useNetwork, useAccount } from "wagmi";
import { JsonFragment } from "@ethersproject/abi";
import { BigNumber } from "ethers";

import NETWORKS from "constants/networks";
import { AddressesPerNetworkWithOnchainData } from "models/Contract";
import getContractInstance from "./getContractInstance";
import useContracts from "states/contracts";
import useControls from "states/controls";
import formatTokenAmount from "utils/formatTokenAmount";
import { ZERO } from "constants/general";

const useContractOnchainData = (contractName: string) => {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const isUsingStaging = useControls((state) => state.isUsingStaging);
  let selectedEnvironment = NETWORKS.find((network) => network.chainId === chain.id).value;
  if (isUsingStaging)
    selectedEnvironment = NETWORKS.find((network) => network.isStaging && network.chainId === chain.id).value;
  const { contractInstance, contractABI } = getContractInstance(signer, selectedEnvironment, contractName);

  const addOrUpdateAddressPerNetworkWithOnchainData = useContracts(
    (state) => state.addOrUpdateAddressPerNetworkWithOnchainData
  );

  const contractInfo: {
    address: `0x${string}`;
    abi: JsonFragment[];
  } = {
    address: `0x${contractInstance.address.substring(2)}`,
    abi: contractABI,
  };

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...contractInfo,
        functionName: "name",
      },
      {
        ...contractInfo,
        functionName: "symbol",
      },
      {
        ...contractInfo,
        functionName: "decimals",
      },
      {
        ...contractInfo,
        functionName: "totalSupply",
      },
      {
        ...contractInfo,
        functionName: "version",
      },
      {
        ...contractInfo,
        functionName: "balanceOf",
        args: [address],
      },
    ],
    allowFailure: true,
    watch: false,
    cacheTime: 20_000,
  });
  if (!isError && !isLoading && data) {
    const prepareData: AddressesPerNetworkWithOnchainData = {
      network: selectedEnvironment,
      address: `0x${contractInstance.address.substring(2)}`,
      isStaging: isUsingStaging,
      name: contractName,
      contractName: data[0] !== null ? String(data[0]) : "",
      contractVersion: data[4] !== null ? String(data[4]) : "",
      contractSymbol: data[1] !== null ? String(data[1]) : "",
      contractDecimals: data[2] !== null ? Number(data[2]) : 0,
      contractTotalSupply: data[5] !== null ? BigNumber.from(data[3]) : ZERO,
      contractTotalSupplyFormatted:
        data[5] !== null && data[2] !== null ? formatTokenAmount(BigNumber.from(data[3]), Number(data[2])) : "",
      userBalance: data[5] !== null ? BigNumber.from(data[5]) : ZERO,
      userBalanceFormatted:
        data[5] !== null && data[2] !== null ? formatTokenAmount(BigNumber.from(data[5]), Number(data[2])) : "",
      timestamp: Date.now(),
    };
    addOrUpdateAddressPerNetworkWithOnchainData(prepareData);
    return {
      prepareData,
      contractInstance,
      contractABI,
      data,
      isError,
      isLoading,
    };
  } else {
    const prepareData: AddressesPerNetworkWithOnchainData = {
      network: selectedEnvironment,
      address: `0x${contractInstance.address.substring(2)}`,
      isStaging: isUsingStaging,
      name: contractName,
      contractName: "",
      contractVersion: "",
      contractSymbol: "",
      contractDecimals: 0,
      contractTotalSupply: ZERO,
      contractTotalSupplyFormatted: "",
      userBalance: ZERO,
      userBalanceFormatted: "",
      timestamp: Date.now(),
    };
    return {
      prepareData,
      contractInstance,
      contractABI,
      data,
      isError,
      isLoading,
    };
  }
};

export default useContractOnchainData;
