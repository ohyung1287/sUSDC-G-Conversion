import React from "react";

import { ISvgProps } from "./types";

const SetTime: React.FC<ISvgProps> = ({
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
        d="M509.465 98.8515L392.871 0L359.921 38.0198L476.515 136.871L509.465 98.8515ZM152.079 40.5545L119.129 2.53465L2.53465 98.8515L35.4852 136.871L152.079 40.5545ZM268.673 157.149H230.653V309.228L349.782 382.734L370.059 352.316L268.673 291.485V157.149V157.149ZM256 55.7624C129.267 55.7624 27.8812 157.149 27.8812 283.881C27.8812 410.614 129.267 512 256 512C382.733 512 484.119 410.614 484.119 283.881C484.119 157.149 382.733 55.7624 256 55.7624ZM256 461.307C157.149 461.307 78.5743 382.734 78.5743 283.881C78.5743 185.03 157.149 106.455 256 106.455C354.851 106.455 433.426 185.03 433.426 283.881C433.426 382.734 354.851 461.307 256 461.307Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default SetTime;
