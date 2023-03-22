import React from "react";

import { ISvgProps } from "./types";

const Cubes: React.FC<ISvgProps> = ({
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
        d="M376.664 228.696V96.8028L255.958 42.1978L135.42 94.7948V228.696L255.958 282.299L376.664 228.696Z"
        fill={fill}
      />
      <path d="M376.664 96.8028L255.958 153.817V282.299" fill={fill} />
      <path d="M255.958 153.816L135.42 94.7954" fill={fill} />
      <path
        d="M497.202 416.199V284.306L376.664 228.696L255.958 282.298V416.199L376.497 469.802L497.202 416.199Z"
        fill={fill}
      />
      <path d="M497.202 284.306L376.497 341.32V469.802" fill={fill} />
      <path d="M376.497 341.32L255.958 282.299" fill={fill} />
      <path
        d="M256.042 416.199L255.958 282.299L135.503 228.696L14.7979 282.298V416.199L135.336 469.802L256.042 416.199Z"
        fill={fill}
      />
      <path d="M255.958 282.299L135.336 341.32V469.802" fill={fill} />
      <path d="M135.336 341.32L14.7979 282.299" fill={fill} />
      {extraIcon}
    </svg>
  );
};

export default Cubes;
