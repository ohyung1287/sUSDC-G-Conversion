import React from "react";

import { ISvgProps } from "./types";

const Search: React.FC<ISvgProps> = ({
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
        d="M495.642 466.351L373.785 339.614C405.117 302.368 422.284 255.506 422.284 206.72C422.284 92.7363 329.547 0 215.564 0C101.58 0 8.84399 92.7363 8.84399 206.72C8.84399 320.703 101.58 413.44 215.564 413.44C258.355 413.44 299.133 400.533 333.996 376.032L456.779 503.731C461.911 509.061 468.814 512 476.211 512C483.212 512 489.854 509.331 494.896 504.477C505.61 494.168 505.951 477.073 495.642 466.351ZM215.564 53.9269C299.816 53.9269 368.357 122.468 368.357 206.72C368.357 290.972 299.816 359.513 215.564 359.513C131.312 359.513 62.7709 290.972 62.7709 206.72C62.7709 122.468 131.312 53.9269 215.564 53.9269Z"
      />
      {extraIcon}
    </svg>
  );
};

export default Search;
