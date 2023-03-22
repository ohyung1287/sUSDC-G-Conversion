import React from "react";

import Button from "./Button";

interface SignButtonProps {
  signed: boolean;
  handleSigned: () => void;
  mt?: string | number;
  mr?: string | number;
}

const SignButton: React.FC<SignButtonProps> = ({ signed, handleSigned, mt = 4, mr = "0.5vw" }) => {
  return new Button({
    text: !signed ? "Sign" : "Signed",
    variant: "solid",
    size: "md",
    hasTooltip: true,
    clicked: false,
    handleClick: handleSigned,
    disabled: signed,
    colorScheme: "blue",
    mt,
    mr,
  }).render();
};

export default SignButton;
