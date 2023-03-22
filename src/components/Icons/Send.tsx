import React from "react";

import { ISvgProps } from "./types";

const Send: React.FC<ISvgProps> = ({
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
      <path d="M161.923 137.938L326.816 257.26L491.71 137.938H161.923Z" fill={fill} />
      <path
        d="M335.801 288.595C333.12 290.534 329.969 291.505 326.817 291.505C323.665 291.505 320.513 290.535 317.833 288.595L141.633 161.09V176.897H70.8182C62.3542 176.897 55.4922 183.759 55.4922 192.223C55.4922 200.687 62.3542 207.549 70.8182 207.549H141.633V304.449H70.8182C62.3542 304.449 55.4922 311.311 55.4922 319.775C55.4922 328.239 62.3542 335.101 70.8182 335.101H141.633V358.736C141.633 367.2 148.495 374.062 156.959 374.062H496.675C505.139 374.062 512.001 367.2 512.001 358.736V161.091L335.801 288.595Z"
        fill={fill}
      />
      <path
        d="M101.467 240.675H15.326C6.862 240.675 0 247.537 0 256.001C0 264.465 6.862 271.327 15.326 271.327H101.467C109.931 271.327 116.793 264.465 116.793 256.001C116.793 247.537 109.931 240.675 101.467 240.675Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Send;
