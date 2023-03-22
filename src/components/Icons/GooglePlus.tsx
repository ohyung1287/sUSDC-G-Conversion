import React from "react";

import { ISvgProps } from "./types";

const GooglePlus: React.FC<ISvgProps> = ({
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
        d="M465.557 192H418.901V238.443H372.459V285.099H418.901V331.541H465.557V285.099H512V238.443H465.557V192Z"
        fill={fill}
      />
      <path
        d="M160 416C252.331 416 313.664 351.189 313.664 259.712C313.664 249.237 312.576 241.152 311.061 233.088H160.021V288.085H250.837C247.125 311.445 223.339 357.056 160.021 357.056C105.472 357.056 60.928 311.872 60.928 256C60.928 200.128 105.451 154.923 160.021 154.923C191.232 154.923 211.968 168.235 223.765 179.584L267.2 137.899C239.232 111.723 203.221 96 160 96C71.5947 96 0 167.595 0 256C0 344.405 71.5947 416 160 416V416Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default GooglePlus;
