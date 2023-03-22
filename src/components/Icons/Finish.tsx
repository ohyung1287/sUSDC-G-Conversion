import React from "react";

import { ISvgProps } from "./types";

const Finish: React.FC<ISvgProps> = ({
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
        d="M129.571 511.565L138.997 508.931C148.064 506.396 153.36 496.992 150.826 487.925L43.0566 102.259C41.5359 96.816 37.9152 92.2004 32.9913 89.4273C28.0673 86.6541 22.2434 85.9507 16.8007 87.4717L15.5834 87.8115C4.249 90.9784 -2.37217 102.734 0.794533 114.068L108.567 499.735C111.101 508.802 120.504 514.098 129.571 511.565V511.565Z"
        fill={fill}
      />
      <path
        d="M509.087 242.052C474.911 225.011 443.294 203.26 415.161 177.434C412.797 175.27 411.872 171.947 412.778 168.872C426.717 116.137 437.069 62.5195 443.763 8.38619C444.822 -0.617947 439.967 -3.26622 434.847 2.91309C334.389 123.057 160.574 -19.0676 57.1145 90.1296C58.3566 92.4552 59.3338 94.9129 60.0276 97.4565L129.942 347.807C233.578 239.934 406.775 381.175 507.057 261.297C512.177 255.117 513.148 243.818 509.087 242.052V242.052Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Finish;
