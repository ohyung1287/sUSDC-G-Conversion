import React from "react";

import { ISvgProps } from "./types";

const FacebookSimple: React.FC<ISvgProps> = ({
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
        d="M341.269 85.0133H388.011V3.60533C379.947 2.496 352.213 0 319.915 0C252.523 0 206.357 42.3893 206.357 120.299V192H131.989V283.008H206.357V512H297.536V283.029H368.896L380.224 192.021H297.515V129.323C297.536 103.019 304.619 85.0133 341.269 85.0133V85.0133Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default FacebookSimple;
