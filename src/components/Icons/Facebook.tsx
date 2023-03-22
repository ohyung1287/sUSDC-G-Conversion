import React from "react";

import { ISvgProps } from "./types";

const Facebook: React.FC<ISvgProps> = ({
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
        d="M469.254 15.75H42.2227C27.6006 15.7588 15.7471 27.6182 15.75 42.2461V469.277C15.7588 483.899 27.6182 495.753 42.2461 495.75H272.156V310.125H209.813V237.469H272.156V183.999C272.156 121.992 310.011 88.2422 365.323 88.2422C391.816 88.2422 414.583 90.2168 421.219 91.0986V155.906H383.077C352.983 155.906 347.156 170.206 347.156 191.194V237.469H419.109L409.734 310.125H347.156V495.75H469.254C483.885 495.753 495.747 483.897 495.75 469.266C495.75 469.263 495.75 469.26 495.75 469.254V42.2227C495.744 27.6006 483.882 15.7471 469.254 15.75Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Facebook;
