import React from "react";

import { ISvgProps } from "./types";

const Messenger: React.FC<ISvgProps> = ({
  viewBox = "0 0 512 512" as string,
  x = "0px" as string,
  y = "0px" as string,
  width = "auto" as string,
  height = "auto" as string,
  fill = "black" as string,
  extraIcon = null as JSX.Element,
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} x={x} y={y} width={width} hanging={height}>
      <path
        d="M255.798 15.75C124.258 15.75 17.626 115.242 17.626 237.97C17.626 307.465 51.8154 369.516 105.355 410.262V495.75L185.286 450.308C207.572 456.727 231.253 460.195 255.798 460.195C387.344 460.195 493.967 360.694 493.967 237.973C493.967 115.242 387.344 15.75 255.798 15.75V15.75ZM279.892 313.102L218.813 248.968L101.919 313.102L230.359 177.105L292.009 240.12L407.605 177.105L279.892 313.102Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Messenger;
