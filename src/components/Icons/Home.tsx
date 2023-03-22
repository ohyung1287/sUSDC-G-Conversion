import React from "react";

import { ISvgProps } from "./types";

const Home: React.FC<ISvgProps> = ({
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
      <path d="M204.8 473.6V320H307.2V473.6H435.2V268.8H512L256 38.3999L0 268.8H76.8V473.6H204.8Z" fill={fill} />
      {extraIcon}
    </svg>
  );
};

export default Home;
