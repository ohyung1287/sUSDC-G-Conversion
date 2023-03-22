import React from "react";

import { ISvgProps } from "./types";

const ThumbDown: React.FC<ISvgProps> = ({
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
      <path d="M0 13H84V349.254H0V13Z" fill={fill} />
      <path
        d="M512 209.914C512 190.012 500.43 172.77 483.664 164.539C488.121 157.016 490.691 148.246 490.691 138.883C490.691 117.316 477.102 98.8711 458.035 91.6406C461.84 84.5469 464.004 76.4453 464.004 67.8516C464.004 39.9961 441.344 17.3359 413.488 17.3359H184.48L114 43.9219V320.617H141.941L236.172 429.629L244.27 474.242C246.832 488.348 259.094 498.586 273.434 498.586H290.766C324.137 498.586 351.289 471.434 351.289 438.062C351.289 417.086 347.254 396.617 339.293 377.211L321.309 331.461H446.328C474.184 331.461 496.848 308.801 496.848 280.945C496.848 270.512 493.664 260.805 488.223 252.746C502.488 243.809 512 227.953 512 209.914V209.914Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default ThumbDown;
