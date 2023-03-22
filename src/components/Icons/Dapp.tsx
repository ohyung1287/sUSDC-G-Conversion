import React from "react";

import { ISvgProps } from "./types";

const Dapp: React.FC<ISvgProps> = ({
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
        d="M171.04 16H68.96C39.711 16 16 39.711 16 68.96V171.04C16 200.289 39.711 224 68.96 224H171.04C200.289 224 224 200.289 224 171.04V68.96C224 39.711 200.289 16 171.04 16Z"
        fill={fill}
      />
      <path
        d="M443.04 16H340.96C311.711 16 288 39.711 288 68.96V171.04C288 200.289 311.711 224 340.96 224H443.04C472.289 224 496 200.289 496 171.04V68.96C496 39.711 472.289 16 443.04 16Z"
        fill={fill}
      />
      <path
        d="M171.04 288H68.96C39.711 288 16 311.711 16 340.96V443.04C16 472.289 39.711 496 68.96 496H171.04C200.289 496 224 472.289 224 443.04V340.96C224 311.711 200.289 288 171.04 288Z"
        fill={fill}
      />
      <path
        d="M392 496C449.438 496 496 449.438 496 392C496 334.562 449.438 288 392 288C334.562 288 288 334.562 288 392C288 449.438 334.562 496 392 496Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Dapp;
