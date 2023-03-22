import { BigNumber } from "ethers";

export type AddressesPerNetwork = {
  network: string;
  address: string;
  isStaging?: boolean;
};

export type ContractDetail = {
  name: string;
  emoji: string;
  active: boolean;
  abiName?: string;
  addressPerNetwork: AddressesPerNetwork[];
  deployable?: boolean;
};

export interface AddressesPerNetworkWithOnchainData extends AddressesPerNetwork {
  name: string;
  contractName: string;
  contractVersion: string;
  contractSymbol: string;
  contractDecimals: number;
  contractTotalSupply: BigNumber;
  contractTotalSupplyFormatted: string;
  userBalance?: BigNumber;
  userBalanceFormatted?: string;
  timestamp: number;
}
