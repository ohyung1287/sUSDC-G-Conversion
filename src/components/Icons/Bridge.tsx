import React from "react";

import { ISvgProps } from "./types";

const Bridge: React.FC<ISvgProps> = ({
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
        d="M512 126.26V385.731H437.697C438.43 378.891 438.819 371.94 438.819 364.896C438.819 259.823 356.972 174.64 255.995 174.64C155.028 174.64 73.1905 259.823 73.1905 364.896C73.1905 371.94 73.5798 378.891 74.3027 385.731H0V126.26H512Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Bridge;
