import React from "react";

import { ISvgProps } from "./types";

const Swap: React.FC<ISvgProps> = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M448 344H128C114.752 344 104 354.752 104 368C104 381.248 114.752 392 128 392H448C461.248 392 472 381.248 472 368C472 354.752 461.248 344 448 344Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64 168H384C397.248 168 408 157.248 408 144C408 130.752 397.248 120 384 120H64C50.752 120 40 130.752 40 144C40 157.248 50.752 168 64 168Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M351.04 304.96L414.048 368L351.04 431.04C341.664 440.384 341.664 455.616 351.04 464.96C360.384 474.336 375.616 474.336 384.96 464.96L464.96 384.96C474.336 375.584 474.336 360.416 464.96 351.04L384.96 271.04C375.616 261.664 360.384 261.664 351.04 271.04C341.664 280.384 341.664 295.616 351.04 304.96V304.96Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M160.96 207.04L97.9518 144L160.96 80.96C170.336 71.616 170.336 56.384 160.96 47.04C151.616 37.664 136.384 37.664 127.04 47.04L47.0398 127.04C37.6638 136.416 37.6638 151.584 47.0398 160.96L127.04 240.96C136.384 250.336 151.616 250.336 160.96 240.96C170.336 231.616 170.336 216.384 160.96 207.04V207.04Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Swap;
