import React from "react";
import { useAccount } from "wagmi";
import { useColorMode } from "@chakra-ui/react";

import { SvgIcon } from "components";
import Button from "./Button";

interface CopyWalletProps {
  mt?: string | number;
  mr?: string | number;
  testActive?: boolean;
}

const CopyWallet: React.FC<CopyWalletProps> = ({ mt = "0.5vh", mr = "0", testActive }) => {
  const { isConnected, address } = useAccount();
  const { colorMode } = useColorMode();

  if (isConnected || testActive) {
    return new Button({
      text: "Copy wallet address to clipboard",
      variant: "solid",
      size: "md",
      hasTooltip: true,
      clicked: false,
      handleClick: () => navigator.clipboard.writeText(address),
      disabled: false,
      colorScheme: "blue",
      mt,
      mr,
      children: <SvgIcon icon="Copy" fill={colorMode === "light" ? "#FFFFFF" : "gray.500"} width="1vw" height="1vh" />,
    }).render();
  }
};

export default CopyWallet;
