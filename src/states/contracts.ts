import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { ContractDetail, AddressesPerNetworkWithOnchainData } from "../models/Contract";
import CONTRACTS from "../constants/contracts";
import useContractOnchainData from "hooks/useContractOnchainData";

interface IContractsState {
  contractList: ContractDetail[];
  addressesPerNetworkWithOnchainData: AddressesPerNetworkWithOnchainData[];
}

interface IContractsStateAndHelpers extends IContractsState {
  // contractList
  setContractList: (contractList: ContractDetail[]) => void;
  addContract: (contract: ContractDetail) => void;
  addAddressToContract: (contractName: string, address: string, network: string) => void;
  removeContract: (contract: ContractDetail) => void;
  removeContractByName: (contractName: string) => void;
  removeAddressFromContract: (contractName: string, address: string) => void;
  setAddressesPerNetworkWithOnchainData: (
    addressesPerNetworkWithOnchainDataa: AddressesPerNetworkWithOnchainData[]
  ) => void;
  addOrUpdateAddressPerNetworkWithOnchainData: (
    addressPerNetworkWithOnchainData: AddressesPerNetworkWithOnchainData
  ) => void;
  getAddressesPerNetworkWithOnchainDataFromContractName: (contractName: string) => AddressesPerNetworkWithOnchainData;
}

const contractStateDefaults: IContractsState = {
  contractList: CONTRACTS,
  addressesPerNetworkWithOnchainData: [],
};

const useContracts = create<IContractsStateAndHelpers>()(
  persist(
    (set) => ({
      ...contractStateDefaults,
      // contractList
      setContractList: (contractList: ContractDetail[]) => set(() => ({ contractList })),
      addContract: (contract: ContractDetail) => set((state) => ({ contractList: [...state.contractList, contract] })),
      addAddressToContract: (contractName: string, address: string, network: string) =>
        set((state) => ({
          contractList: state.contractList.map((c) => {
            if (c.name === contractName) {
              c.addressPerNetwork.push({ network, address });
            }
            return c;
          }),
        })),
      removeContract: (contract: ContractDetail) =>
        set((state) => ({
          contractList: state.contractList.filter((c) => c !== contract),
        })),
      removeContractByName: (contractName: string) =>
        set((state) => ({
          contractList: state.contractList.filter((c) => c.name !== contractName),
        })),
      removeAddressFromContract: (contractName: string, address: string) =>
        set((state) => ({
          contractList: state.contractList.map((c) => {
            if (c.name === contractName) {
              c.addressPerNetwork = c.addressPerNetwork.filter((a) => a.address !== address);
            }
            return c;
          }),
        })),
      // addressesPerNetworkWithOnchainData
      setAddressesPerNetworkWithOnchainData: (
        addressesPerNetworkWithOnchainData: AddressesPerNetworkWithOnchainData[]
      ) => set(() => ({ addressesPerNetworkWithOnchainData })),
      addOrUpdateAddressPerNetworkWithOnchainData: (
        addressPerNetworkWithOnchainData: AddressesPerNetworkWithOnchainData
      ) =>
        set((state) => {
          const index = state.addressesPerNetworkWithOnchainData.findIndex(
            (a) => a.address === addressPerNetworkWithOnchainData.address
          );
          if (index === -1) {
            return {
              addressesPerNetworkWithOnchainData: [
                ...state.addressesPerNetworkWithOnchainData,
                addressPerNetworkWithOnchainData,
              ],
            };
          } else {
            return {
              addressesPerNetworkWithOnchainData: [
                ...state.addressesPerNetworkWithOnchainData.slice(0, index),
                addressPerNetworkWithOnchainData,
                ...state.addressesPerNetworkWithOnchainData.slice(index + 1),
              ],
            };
          }
        }),
      getAddressesPerNetworkWithOnchainDataFromContractName: (contractName: string) => {
        const { prepareData } = useContractOnchainData(contractName);
        set((state) => {
          const index = state.addressesPerNetworkWithOnchainData.findIndex((a) => a.address === prepareData.address);
          if (index === -1) {
            return {
              addressesPerNetworkWithOnchainData: [...state.addressesPerNetworkWithOnchainData, prepareData],
            };
          } else {
            return {
              addressesPerNetworkWithOnchainData: [
                ...state.addressesPerNetworkWithOnchainData.slice(0, index),
                prepareData,
                ...state.addressesPerNetworkWithOnchainData.slice(index + 1),
              ],
            };
          }
        });
        return prepareData;
      },
    }),
    {
      name: "contracts-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useContracts;
