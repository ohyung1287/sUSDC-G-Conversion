import React from "react";

import { ISvgProps } from "./types";

const Spanner: React.FC<ISvgProps> = ({
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
        d="M59.2391 505.344C130.339 534.014 204.074 465.189 180.336 392.287L392.905 179.719C465.445 201.709 532.507 128.216 504.142 58.037L450.386 111.792L399.012 60.418L452.767 6.66252C380.771 -22.3285 306.729 48.32 332.273 121.581L120.965 332.888C48.0154 309.097 -20.8146 382.895 7.8646 453.969L61.6191 400.214L112.994 451.588L59.2391 505.344Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Spanner;
