import React from "react";
import { Button as ChakraButton, Tooltip, ThemeTypings } from "@chakra-ui/react";

export type ButtonVariant = "solid" | "outline" | "ghost" | "link" | "unstyled";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";
export type ResponsiveConfig = {
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  "2xl"?: string | number;
};

interface ButtonProps {
  text: string;
  placeholderTooltip?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  hasTooltip?: boolean;
  clicked?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
  color?: string;
  colorTooltip?: string;
  placementTooltip?: TooltipPlacement;
  colorScheme?: ThemeTypings["colorSchemes"];
  mt?: ResponsiveConfig | string | number;
  mb?: ResponsiveConfig | string | number;
  ml?: ResponsiveConfig | string | number;
  mr?: ResponsiveConfig | string | number;
  m?: ResponsiveConfig | string | number;
  pt?: ResponsiveConfig | string | number;
  pb?: ResponsiveConfig | string | number;
  pl?: ResponsiveConfig | string | number;
  pr?: ResponsiveConfig | string | number;
  p?: ResponsiveConfig | string | number;
  children?: React.ReactNode;
}

class Button extends React.Component {
  constructor(props: ButtonProps) {
    super(props);
    const button = (
      <ChakraButton
        variant={props.variant}
        mt={props.mt}
        mb={props.mb}
        ml={props.ml}
        mr={props.mr}
        m={props.m}
        pt={props.pt}
        pb={props.pb}
        pl={props.pl}
        pr={props.pr}
        p={props.p}
        size={props.size}
        onClick={props.handleClick}
        isDisabled={props.clicked || props.disabled}
        colorScheme={props.colorScheme}
        color={props.color}
        type="submit"
        aria-label={props.text}
      >
        {props.children || props.text}
      </ChakraButton>
    );
    if (props.hasTooltip)
      this.state = (
        <Tooltip
          label={props.placeholderTooltip || props.text}
          placement={props.placementTooltip}
          bg={props.colorTooltip}
          hasArrow
          aria-label={`Tooltip ${props.text}`}
        >
          {button}
        </Tooltip>
      );
    else this.state = button;
  }
  render() {
    return <>{this.state}</>;
  }
}

export default Button;
