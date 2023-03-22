import { ContractDetail } from "../models/Contract";

const CONTRACTS: ContractDetail[] = [
  {
    name: "sUSDC-G",
    emoji: ":heavy_dollar_sign:",
    active: true,
    abiName: "SUSDCG",
    addressPerNetwork: [
      {
        network: "luniverse",
        address: "0x39589FD5A1D4C7633142A178F2F2b30314FB2BaF",
      },
      {
        network: "luniverseTestnet",
        address: "0xdbde880e1405a6914b387606933d7476a2296a06",
      },
    ],
  },
];

export default CONTRACTS;
