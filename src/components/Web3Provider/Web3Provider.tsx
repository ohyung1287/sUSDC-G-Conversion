import { WagmiConfig, createClient, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { Buffer } from "buffer";
import { wagmiNetworks } from "../../constants/networks";
import React from "react";

interface Web3ProviderProps {
  children: React.ReactNode;
}

// polyfill Buffer for client
if (!window.Buffer) {
  window.Buffer = Buffer;
}

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const { chains, provider, webSocketProvider } = configureChains(wagmiNetworks, [publicProvider()]);
  // Set up client
  const client = createClient({
    autoConnect: true,
    connectors: [new MetaMaskConnector({ chains })],
    provider,
    webSocketProvider,
  });

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default Web3Provider;
