export type SigningWeb3 = "web3";
export type SigningAppKeys = "appKeys";

export type NetworkSigningType = SigningWeb3 | SigningAppKeys;

export type NetworkDetail = {
  name: string;
  value: string;
  defaultRpc: string;
  chainId: number;
  emoji: string;
  active: boolean;
  signingType: NetworkSigningType;
  explorer?: string;
  isStaging?: boolean;
};
