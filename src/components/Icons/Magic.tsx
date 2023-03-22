import React from "react";

import { ISvgProps } from "./types";

const Magic: React.FC<ISvgProps> = ({
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
        d="M158.477 87.7714L219.43 121.905L185.295 60.9524L219.43 0L158.477 34.1333L97.5249 0L131.658 60.9524L97.5249 121.905L158.477 87.7714Z"
        fill={fill}
      />
      <path
        d="M451.049 326.705L390.096 292.572L424.23 353.524L390.096 414.476L451.049 380.343L512.001 414.476L477.868 353.524L512.001 292.572L451.049 326.705Z"
        fill={fill}
      />
      <path
        d="M512.001 0L451.049 34.1333L390.096 0L424.23 60.9524L390.096 121.905L451.049 87.7714L512.001 121.905L477.868 60.9524L512.001 0Z"
        fill={fill}
      />
      <path
        d="M326.706 129.219C316.953 119.467 302.325 119.467 292.572 129.219L7.31429 414.476C-2.4381 424.229 -2.4381 438.857 7.31429 448.61L63.3905 504.685C73.1429 514.437 87.7714 514.437 97.5238 504.685L382.782 219.429C392.534 209.676 392.534 195.048 382.782 185.295L326.706 129.219ZM299.887 263.314L248.687 212.114L307.201 153.6L358.401 204.8L299.887 263.314Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Magic;
