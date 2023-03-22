import React from "react";

import { ISvgProps } from "./types";

const Info: React.FC<ISvgProps> = ({
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
        d="M230.4 384H281.6V230.4H230.4V384ZM256 0C115.2 0 0 115.2 0 256C0 396.8 115.2 512 256 512C396.8 512 512 396.8 512 256C512 115.2 396.8 0 256 0ZM256 460.8C143.36 460.8 51.2 368.64 51.2 256C51.2 143.36 143.36 51.2 256 51.2C368.64 51.2 460.8 143.36 460.8 256C460.8 368.64 368.64 460.8 256 460.8ZM230.4 179.2H281.6V128H230.4V179.2Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Info;
