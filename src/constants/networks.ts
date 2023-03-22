import {
  Chain,
  mainnet,
  goerli,
  bsc,
  bscTestnet,
  foundry,
  hardhat,
  avalanche,
  avalancheFuji,
  arbitrum,
  arbitrumGoerli,
  celo,
  celoAlfajores,
  gnosis,
  gnosisChiado,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonZkEvmTestnet,
  sepolia,
} from "wagmi/chains";

import { REACT_APP_LUNIVERSE_RPC_MAINNET } from "./general";
import { NetworkDetail } from "../models/Network";

const NETWORKS: NetworkDetail[] = [
  {
    name: "Ethereum Mainnet (Production)",
    value: "ethereum-prod",
    defaultRpc: "https://rpc.ankr.com/eth",
    chainId: 1,
    emoji: ":large_green_circle: 🏠",
    active: true,
    signingType: "web3",
    explorer: "https://etherscan.io/",
  },
  {
    name: "Ethereum Mainnet (Staging)",
    value: "ethereum-staging",
    defaultRpc: "",
    chainId: 1,
    emoji: ":gear: 🏠",
    active: true,
    signingType: "web3",
    explorer: "https://etherscan.io/",
    isStaging: true,
  },
  {
    name: "Ethereum Goerli (Development)",
    value: "goerli",
    defaultRpc: "https://rpc.ankr.com/eth_goerli",
    chainId: 5,
    emoji: ":test_tube: 👨‍💻",
    active: true,
    signingType: "web3",
    explorer: "https://goerli.etherscan.io/",
  },
  {
    name: "Binance Chain Mainnet",
    value: "bsc",
    defaultRpc: "",
    chainId: 56,
    emoji: ":large_green_circle: 👨‍💻",
    active: false,
    signingType: "web3",
  },
  {
    name: "Binance Chain Testnet",
    value: "bscTestnet",
    defaultRpc: "",
    chainId: 97,
    emoji: ":test_tube: 👨‍💻",
    active: true,
    signingType: "web3",
    explorer: "https://testnet.bscscan.com/",
  },
  {
    name: "Polygon Mainnet",
    value: "polygon",
    defaultRpc: "",
    chainId: 137,
    emoji: "👨‍💻",
    active: false,
    signingType: "web3",
  },
  {
    name: "Polygon Mumbai Testnet",
    value: "mumbai",
    defaultRpc: "",
    chainId: 80001,
    emoji: ":test_tube: 👨‍💻",
    active: false,
    signingType: "web3",
  },
  {
    name: "Luniverse - Production",
    value: "luniverse",
    defaultRpc: "",
    chainId: 59496427,
    emoji: ":large_green_circle: 👨‍💻",
    active: true,
    signingType: "web3",
  },
  {
    name: "Luniverse - Testnet",
    value: "luniverseTestnet",
    defaultRpc: "",
    chainId: 949790,
    emoji: ":test_tube: 👨‍💻",
    active: true,
    signingType: "web3",
  },
  {
    name: "Ethereum Rinkeby (Development)",
    value: "rinkeby",
    defaultRpc: "",
    chainId: 4,
    emoji: ":test_tube: 👨‍💻",
    active: false,
    signingType: "web3",
    explorer: "https://rinkeby.etherscan.io/",
  },
];

const luniverseTestnet: Chain = {
  id: 949790,
  network: "luniverseTestnet",
  name: "Luniverse Testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [process.env.REACT_APP_LUNIVERSE_RPC_TESTNET],
    },
    public: {
      http: [process.env.REACT_APP_LUNIVERSE_RPC_TESTNET],
    },
  },
};

const luniverseProd: Chain = {
  id: 59496427,
  network: "luniverse",
  name: "Luniverse Production",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [REACT_APP_LUNIVERSE_RPC_MAINNET],
    },
    public: {
      http: [REACT_APP_LUNIVERSE_RPC_MAINNET],
    },
  },
};

export const wagmiNetworks: Chain[] = [
  mainnet,
  goerli,
  bsc,
  bscTestnet,
  foundry,
  hardhat,
  avalanche,
  avalancheFuji,
  arbitrum,
  arbitrumGoerli,
  celo,
  celoAlfajores,
  gnosis,
  gnosisChiado,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonZkEvmTestnet,
  sepolia,
];

if (process.env.REACT_APP_LUNIVERSE_RPC_TESTNET) wagmiNetworks.push(luniverseTestnet);
if (REACT_APP_LUNIVERSE_RPC_MAINNET) wagmiNetworks.push(luniverseProd);

export default NETWORKS;
