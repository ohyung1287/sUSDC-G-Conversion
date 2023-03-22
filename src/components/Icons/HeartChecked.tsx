import React from "react";

import { ISvgProps } from "./types";

const HeartChecked: React.FC<ISvgProps> = ({
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
        d="M322.371 373.026C322.371 425.307 364.904 467.841 417.185 467.841C469.466 467.841 511.999 425.307 511.999 373.026C511.999 320.746 469.466 278.212 417.185 278.212C364.904 278.212 322.371 320.745 322.371 373.026ZM477.487 347.049L401.901 422.635L354.143 374.878L375.356 353.664L401.901 380.209L456.273 325.836L477.487 347.049Z"
        fill={fill}
      />
      <path
        d="M292.37 373.026C292.37 304.204 348.362 248.212 417.185 248.212C442.88 248.212 466.784 256.019 486.656 269.382C504.176 238.677 511.979 209.909 511.979 182.75C511.979 102.073 446.577 36.6714 365.899 36.6714C322.063 36.6714 282.764 56.0066 255.989 86.584C229.214 56.0056 189.916 36.6704 146.08 36.6704C65.4018 36.6704 0 102.072 0 182.749C0 263.266 68.4298 357.895 255.99 475.33C275.733 462.967 294.122 450.865 311.28 439C299.304 419.846 292.37 397.233 292.37 373.026V373.026Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default HeartChecked;
