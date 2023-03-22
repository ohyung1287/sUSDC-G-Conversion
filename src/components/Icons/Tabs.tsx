import React from "react";

import { ISvgProps } from "./types";

const Tabs: React.FC<ISvgProps> = ({
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
        d="M377.513 0H54.1447C24.5026 0 0.25 20.9455 0.25 46.5455V372.364H54.1447V46.5455H377.513V0ZM458.355 93.0909H161.934C132.292 93.0909 108.039 114.036 108.039 139.636V465.455C108.039 491.055 132.292 512 161.934 512H458.355C487.997 512 512.25 491.055 512.25 465.455V139.636C512.25 114.036 487.997 93.0909 458.355 93.0909ZM458.355 465.455H161.934V139.636H458.355V465.455Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Tabs;
