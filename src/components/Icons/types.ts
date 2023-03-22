import type { TIcon } from "components/Icons";

export interface ISvgIconProps {
  icon: TIcon;
  viewBox?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  fill?: string;
  extraIcon?: JSX.Element;
}

export interface ISvgProps {
  viewBox?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  fill?: string;
  extraIcon?: JSX.Element;
}
