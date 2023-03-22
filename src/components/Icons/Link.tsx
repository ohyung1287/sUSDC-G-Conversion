import React from "react";

import { ISvgProps } from "./types";

const Link: React.FC<ISvgProps> = ({
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
        d="M153.6 281.6H358.4V230.4H153.6V281.6ZM48.64 256C48.64 197.12 94.72 151.04 153.6 151.04H230.4V102.4H153.6C69.12 102.4 0 171.52 0 256C0 340.48 69.12 409.6 153.6 409.6H230.4V360.96H153.6C94.72 360.96 48.64 314.88 48.64 256ZM358.4 102.4H281.6V151.04H358.4C417.28 151.04 463.36 197.12 463.36 256C463.36 314.88 417.281 360.96 358.4 360.96H281.6V409.6H358.4C442.88 409.6 512 340.48 512 256C512 171.52 442.88 102.4 358.4 102.4Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Link;
