import React from "react";

import { ISvgProps } from "./types";

const Image: React.FC<ISvgProps> = ({
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
        d="M512 455.111V56.8889C512 25.6 486.4 0 455.111 0H56.8889C25.6 0 0 25.6 0 56.8889V455.111C0 486.4 25.6 512 56.8889 512H455.111C486.4 512 512 486.4 512 455.111ZM156.444 298.667L227.556 384L327.111 256L455.111 426.667H56.8889L156.444 298.667Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Image;
