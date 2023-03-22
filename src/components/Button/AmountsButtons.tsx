import React from "react";

import AmountButton from "./AmountButton";

interface AmountButtonProps {
  label: string;
  amounts: string | string[];
  onClick: (amount) => void;
  color?: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  tokenSymbol?: string;
}

const AmountsButtons: React.FC<AmountButtonProps> = ({
  label,
  amounts,
  onClick,
  color = "blue",
  mt = "0.5rem",
  mb = "0.5rem",
  ml = "0.5rem",
  mr = "0.5rem",
  tokenSymbol,
}) => {
  if (Array.isArray(amounts) && amounts.length > 0)
    return (
      <>
        {amounts.map((amount, index) => (
          <AmountButton
            key={index}
            label={label}
            amount={amount}
            onClick={() => onClick(amount)}
            color={color}
            mt={mt}
            mb={mb}
            ml={ml}
            mr={mr}
            tokenSymbol={tokenSymbol}
          />
        ))}
      </>
    );
  else if (typeof amounts === "string")
    return (
      <AmountButton
        label={label}
        amount={amounts}
        onClick={() => onClick(amounts)}
        color={color}
        mt={mt}
        mb={mb}
        ml={ml}
        mr={mr}
        tokenSymbol={tokenSymbol}
      />
    );
  else return null;
};

export default AmountsButtons;
