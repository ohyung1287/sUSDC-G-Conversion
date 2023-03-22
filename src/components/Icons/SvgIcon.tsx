import React from "react";
import * as Icons from "components/Icons";

import { ISvgIconProps } from "./types";

const SvgIcon: React.FC<ISvgIconProps> = ({
  icon = "CheckMark",
  x = "0px" as string,
  y = "0px" as string,
  width = "auto" as string,
  height = "auto" as string,
  viewBox = "0 0 512 512" as string,
  fill = "black" as string,
  extraIcon,
}) => {
  if (extraIcon) {
    if (Icons.icons.includes(icon))
      return React.createElement(Icons[icon], {
        x,
        y,
        width,
        height,
        viewBox,
        fill,
        extraIcon,
      });
  } else {
    if (Icons.icons.includes(icon))
      return React.createElement(Icons[icon], {
        x,
        y,
        width,
        height,
        viewBox,
        fill,
      });
  }
  return <Icons.CheckMark viewBox={viewBox} fill={fill} />;
};

export default SvgIcon;
