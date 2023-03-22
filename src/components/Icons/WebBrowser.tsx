import React from "react";

import { ISvgProps } from "./types";

const WebBrowser: React.FC<ISvgProps> = ({
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
        d="M373.333 149.333H53.3333C23.872 149.333 -7.62939e-06 173.205 -7.62939e-06 202.667V458.667C-7.62939e-06 488.128 23.872 512 53.3333 512H373.333C402.795 512 426.667 488.128 426.667 458.667V202.667C426.667 173.205 402.795 149.333 373.333 149.333ZM362.667 469.333H64C52.2453 469.333 42.6667 459.776 42.6667 448V256H384V448C384 459.776 374.421 469.333 362.667 469.333Z"
      />
      <path
        fill={fill}
        d="M458.667 -7.62939e-06H138.667C109.227 -7.62939e-06 85.3333 23.8933 85.3333 53.3333V106.667H469.333V361.6C493.653 356.693 512 335.147 512 309.333V53.3333C512 23.8933 488.107 -7.62939e-06 458.667 -7.62939e-06Z"
      />
      {extraIcon}
    </svg>
  );
};

export default WebBrowser;
