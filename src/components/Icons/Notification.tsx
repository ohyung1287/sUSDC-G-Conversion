import React from "react";

import { ISvgProps } from "./types";

const Notification: React.FC<ISvgProps> = ({
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
        d="M256 512C284.16 512 307.2 488.96 307.2 460.8H204.8C204.8 488.96 227.84 512 256 512ZM422.4 358.4V217.6C422.4 138.24 368.64 74.24 294.4 56.32V38.4C294.4 17.92 276.48 0 256 0C235.52 0 217.6 17.92 217.6 38.4V56.32C143.36 74.24 89.6 138.24 89.6 217.6V358.4L38.4 409.6V435.2H473.6V409.6L422.4 358.4Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Notification;
