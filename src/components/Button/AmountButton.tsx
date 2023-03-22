import React from "react";

import Button from "./Button";

interface AmountButtonProps {
  label: string;
  amount: string;
  onClick: () => void;
  color?: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  tokenSymbol?: string;
}

const AmountButton: React.FC<AmountButtonProps> = ({
  label,
  amount,
  onClick,
  color = "blue",
  mt = "0.5rem",
  mb = "0.5rem",
  ml = "0.5rem",
  mr = "0.5rem",
  tokenSymbol,
}) => {
  return new Button({
    text: `${label} ${amount} ${tokenSymbol ? tokenSymbol : "token"}`,
    variant: "outline",
    size: "xs",
    hasTooltip: true,
    clicked: false,
    handleClick: onClick,
    colorScheme: color,
    mt,
    mb,
    ml,
    mr,
  }).render();
};

export default AmountButton;
