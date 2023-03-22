import React from "react";

import { ISvgProps } from "./types";

const Pinterest: React.FC<ISvgProps> = ({
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
        d="M262.955 0C122.603 0.0213333 48 89.9413 48 187.989C48 233.451 73.408 290.176 114.091 308.16C125.696 313.387 124.16 307.008 134.144 268.821C134.933 265.643 134.528 262.891 131.968 259.925C73.8133 192.661 120.619 54.3787 254.656 54.3787C448.64 54.3787 412.395 322.795 288.405 322.795C256.448 322.795 232.64 297.707 240.171 266.667C249.301 229.696 267.179 189.952 267.179 163.307C267.179 96.1493 167.125 106.112 167.125 195.093C167.125 222.592 176.853 241.152 176.853 241.152C176.853 241.152 144.661 371.2 138.688 395.499C128.576 436.629 140.053 503.211 141.056 508.949C141.675 512.107 145.216 513.109 147.2 510.507C150.379 506.347 189.291 450.837 200.192 410.709C204.16 396.096 220.437 336.789 220.437 336.789C231.168 356.16 262.101 372.373 295.061 372.373C393.109 372.373 463.979 286.187 463.979 179.243C463.637 76.7147 375.893 0 262.955 0V0Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Pinterest;