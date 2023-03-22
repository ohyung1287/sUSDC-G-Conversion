import React from "react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";

import { SvgIcon } from "components/Icons";
import type { TIcon } from "components/Icons";

interface IconButtonProps {
  icon: TIcon;
  viewBox?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  submitted: boolean;
  handleSubmit: () => void;
  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  size?: string;
  fill?: string;
  borderRadius?: string | number;
  placeholder?: [string, string];
  children?: React.ReactNode | undefined;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  x = "0px" as string,
  y = "0px" as string,
  width = "2vw" as string,
  height = "2vh" as string,
  submitted,
  handleSubmit,
  m = 2,
  mt = 4,
  mb = 4,
  ml = "0.5vw",
  mr = "0.5vw",
  size = "md",
  fill = "black",
  borderRadius = "lg",
  viewBox = "-100 -100 712 712",
}) => {
  return (
    <ChakraIconButton
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      key={icon}
      aria-label={icon}
      size={size}
      icon={<SvgIcon icon={icon} x={x} y={y} width={width} height={height} viewBox={viewBox} fill={fill} />}
      variant="outline"
      m={m}
      borderRadius={borderRadius}
      onClick={handleSubmit}
      disabled={submitted}
    />
  );
};

export default IconButton;
