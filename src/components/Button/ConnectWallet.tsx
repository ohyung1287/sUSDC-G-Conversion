import React from "react";
import { useAccount, useDisconnect } from "wagmi";

import useAccounts from "states/accounts";
import useControls from "states/controls";
import Button from "./Button";

interface ConnectWalletProps {
  connected?: boolean;
  walletPlaceholder?: string;
  mt?: string | number;
  mr?: string | number;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ connected = false, mt = "0.5vh", mr = "0.5vw" }) => {
  const setWallet = useAccounts((state) => state.setWallet);
  const setWalletType = useAccounts((state) => state.setWalletType);
  const setChainId = useAccounts((state) => state.setChainId);
  const setActiveModal = useControls((state) => state.setActiveModal);
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const handleDisconnect = async () => {
    window.localStorage.setItem("provider", "");
    setWallet(null);
    setWalletType(null);
    setChainId(null);
  };

  return new Button({
    text:
      isConnected || connected
        ? `${address.slice(0, 6)}...${address.slice(address.length - 4, address.length)}`
        : "Connect Wallet",
    placeholderTooltip: isConnected ? "Change wallet" : "Connect wallet",
    variant: "solid",
    size: "md",
    hasTooltip: true,
    clicked: false,
    handleClick: !isConnected
      ? () => setActiveModal("walletSelector")
      : () => {
          handleDisconnect();
          disconnect();
        },
    colorScheme: "blue",
    mt,
    mr,
  }).render();
};

export default ConnectWallet;
