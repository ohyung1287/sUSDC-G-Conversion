import React from "react";

import { ISvgProps } from "./types";

const Success: React.FC<ISvgProps> = ({
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
        d="M512 95.151L499.585 57.75L512 20.349H429.85V0H399.85V159H341.6V482H311.6V264.9H200.4V482H170.4V370.8H94.5V482H64.5V441.4H23.9V482H0V512H512V482H488.1V159H429.85V95.151H512Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Success;
