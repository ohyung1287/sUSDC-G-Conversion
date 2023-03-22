import React from "react";

import { ISvgProps } from "./types";

const Medium: React.FC<ISvgProps> = ({
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
        d="m288.796 256c0 80.296-64.649 145.389-144.398 145.389s-144.398-65.093-144.398-145.389 64.649-145.389 144.398-145.389c79.748 0 144.398 65.093 144.398 145.389"
      />
      <path
        fill={fill}
        d="m447.204 256c0 75.585-32.325 136.858-72.199 136.858s-72.199-61.273-72.199-136.858 32.325-136.858 72.199-136.858c39.875 0 72.199 61.273 72.199 136.858"
      />
      <path
        fill={fill}
        d="m512 256c0 67.721-11.369 122.619-25.393 122.619-14.025 0-25.392-54.898-25.392-122.619s11.367-122.619 25.392-122.619c14.024 0 25.393 54.898 25.393 122.619"
      />
      {extraIcon}
    </svg>
  );
};

export default Medium;
