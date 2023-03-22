import React from "react";

import { ISvgProps } from "./types";

const ViewGridXl: React.FC<ISvgProps> = ({
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
        fill={fill}
        d="M236.15 294.2C236.15 283.519 227.481 274.85 216.8 274.85H81.35C70.6688 274.85 62 283.519 62 294.2V429.65C62 440.331 70.6688 449 81.35 449H216.8C227.481 449 236.15 440.331 236.15 429.65V294.2ZM449 294.2C449 283.519 440.331 274.85 429.65 274.85H294.2C283.519 274.85 274.85 283.519 274.85 294.2V429.65C274.85 440.331 283.519 449 294.2 449H429.65C440.331 449 449 440.331 449 429.65V294.2ZM449 81.35C449 70.6688 440.331 62 429.65 62H294.2C283.519 62 274.85 70.6688 274.85 81.35V216.8C274.85 227.481 283.519 236.15 294.2 236.15H429.65C440.331 236.15 449 227.481 449 216.8V81.35ZM236.15 81.35C236.15 70.6688 227.481 62 216.8 62H81.35C70.6688 62 62 70.6688 62 81.35V216.8C62 227.481 70.6688 236.15 81.35 236.15H216.8C227.481 236.15 236.15 227.481 236.15 216.8V81.35Z"
      />
      {extraIcon}
    </svg>
  );
};

export default ViewGridXl;
