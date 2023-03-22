import React from "react";

import Button from "./Button";

interface SubmitButtonProps {
  submitted: boolean;
  handleSubmit: () => void;
  disabled?: boolean;
  mt?: string | number;
  mr?: string | number;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ submitted, handleSubmit, mt = 4, mr = "0.5vw" }) => {
  return new Button({
    text: !submitted ? "Submit" : "Submitted",
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

export default SubmitButton;
