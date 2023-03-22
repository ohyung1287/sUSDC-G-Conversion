import React from "react";

import Button from "./Button";

interface DeleteButtonProps {
  deletable: boolean;
  handleDelete: () => void;
  mt?: string | number;
  mr?: string | number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ deletable, handleDelete, mt = 4, mr = "0.5vw" }) => {
  return new Button({
    text: "Delete",
    variant: "solid",
    size: "md",
    hasTooltip: true,
    clicked: false,
    handleClick: () => handleDelete(),
    disabled: !deletable,
    colorScheme: "red",
    mt,
    mr,
  }).render();
};

export default DeleteButton;
