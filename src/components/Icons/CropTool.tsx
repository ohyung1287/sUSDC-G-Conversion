import React from "react";

import { ISvgProps } from "./types";

const CropTool: React.FC<ISvgProps> = ({
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
        d="M372.364 325.818H418.909V139.636C418.909 114.036 397.964 93.0909 372.364 93.0909H186.182V139.636H372.364V325.818ZM139.636 372.364V0H93.0909V93.0909H0V139.636H93.0909V372.364C93.0909 397.964 114.036 418.909 139.636 418.909H372.364V512H418.909V418.909H512V372.364H139.636Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default CropTool;
