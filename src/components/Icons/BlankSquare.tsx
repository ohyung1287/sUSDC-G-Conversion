import React from "react";

import { ISvgProps } from "./types";

const BlankSquare: React.FC<ISvgProps> = ({
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
        d="M448 0H64C28.8 0 0 28.8 0 64V448C0 483.2 28.8 512 64 512H448C483.2 512 512 483.2 512 448V64C512 28.8 483.2 0 448 0ZM448 448H64V64H448V448Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default BlankSquare;
