import React from "react";

import { ISvgProps } from "./types";

const DoNotDisturb: React.FC<ISvgProps> = ({
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
        d="M256 0C115.2 0 0 115.2 0 256C0 396.8 115.2 512 256 512C396.8 512 512 396.8 512 256C512 115.2 396.8 0 256 0ZM51.2 256C51.2 143.36 143.36 51.2 256 51.2C302.08 51.2 345.6 66.56 381.44 94.72L94.72 381.44C66.56 345.6 51.2 302.08 51.2 256ZM256 460.8C209.92 460.8 166.4 445.44 130.56 417.28L417.28 130.56C445.44 166.4 460.8 209.92 460.8 256C460.8 368.64 368.64 460.8 256 460.8Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default DoNotDisturb;
