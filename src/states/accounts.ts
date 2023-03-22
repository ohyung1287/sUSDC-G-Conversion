import { create } from "zustand";

interface IAccountsState {
  wallet: string | null;
  walletType: string | null;
  chainId: string | null;
  networkName: string | null;
  signature: string | null;
  message: string | null;
  signedMessage: string | null;
  verified: boolean | null;
  error: string | null;
}

interface IAccountsStateAndHelpers extends IAccountsState {
  setWallet: (wallet: string | null) => void;
  setWalletType: (walletType: string | null) => void;
  setChainId: (holderBalance: string | null) => void;
  setNetworkName: (networkName: string | null) => void;
  setSignature: (signature: string | null) => void;
  setMessage: (message: string | null) => void;
  setSignedMessage: (signedMessage: string | null) => void;
  setVerified: (verified: boolean | null) => void;
  setError: (error: string | null) => void;
}

const accountsStateDefaults: IAccountsState = {
  wallet: null,
  walletType: null,
  chainId: null,
  networkName: null,
  signature: null,
  message: null,
  signedMessage: null,
  verified: null,
  error: null,
};

const useAccounts = create<IAccountsStateAndHelpers>((set) => ({
  ...accountsStateDefaults,
  setWallet: (wallet: string | null) => set(() => ({ wallet })),
  setWalletType: (walletType: string | null) => set(() => ({ walletType })),
  setChainId: (chainId: string | null) => set(() => ({ chainId })),
  setNetworkName: (networkName: string | null) => set(() => ({ networkName })),
  setSignature: (signature: string | null) => set(() => ({ signature })),
  setMessage: (message: string | null) => set(() => ({ message })),
  setSignedMessage: (signedMessage: string | null) => set(() => ({ signedMessage })),
  setVerified: (verified: boolean | null) => set(() => ({ verified })),
  setError: (error: string | null) => set(() => ({ error })),
}));

export default useAccounts;
