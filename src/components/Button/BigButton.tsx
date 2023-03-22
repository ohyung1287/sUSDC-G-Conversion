import React from "react";

import Button from "./Button";

interface BigButtonProps {
  text: [string, string];
  clicked: boolean;
  handleClick: () => void;
  color?: string;
  mt?: string | number;
  mr?: string | number;
}

const BigButton: React.FC<BigButtonProps> = ({
  text,
  clicked,
  handleClick,
  color = "blue",
  mt = "1rem",
  mr = "1rem",
}) => {
  return new Button({
    text: text[0],
    variant: "solid",
    size: "md",
    hasTooltip: true,
    clicked,
    handleClick,
    colorScheme: color,
    mt,
    mr,
  }).render();
};

export default BigButton;
