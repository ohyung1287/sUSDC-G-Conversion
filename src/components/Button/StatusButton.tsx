import React from "react";

import Button from "./Button";

interface StatusButtonProps {
  submitted: boolean;
  handleSubmit: () => void;
  mt?: string | number;
  mr?: string | number;
}

const StatusButton: React.FC<StatusButtonProps> = ({ submitted, handleSubmit, mt = 4, mr = "0.5vw" }) => {
  return new Button({
    text: !submitted ? "Query Status" : "Querying",
    variant: "solid",
    size: "md",
    hasTooltip: true,
    clicked: false,
    handleClick: handleSubmit,
    disabled: submitted,
    colorScheme: "blue",
    mt,
    mr,
  }).render();
};

export default StatusButton;
