import React from "react";
import { Icon } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

import useControls from "states/controls";
import useAccounts from "states/accounts";
import Button from "./Button";

interface SettingsButtonProps {
  network?: string | undefined;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ network = undefined }) => {
  const setActiveModal = useControls((state) => state.setActiveModal);
  const networkName = useAccounts((state) => state.networkName);

  return new Button({
    text: "Open network settings",
    variant: "solid",
    size: "md",
    hasTooltip: true,
    clicked: false,
    handleClick: () => setActiveModal("settings"),
    disabled: false,
    colorScheme: "blue",
    ml: "0.5vw",
    mt: "0.5vh",
    children: (
      <>
        <Icon as={SettingsIcon} />
        {networkName !== null ? (
          <span>Network: {networkName}</span>
        ) : network !== undefined ? (
          <span>Network: {network}</span>
        ) : null}
      </>
    ),
  }).render();
};

export default SettingsButton;
