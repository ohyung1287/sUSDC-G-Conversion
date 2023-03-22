import React from "react";

import { ISvgProps } from "./types";

const ShoppingCart: React.FC<ISvgProps> = ({
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
        d="M153.6 409.6C125.44 409.6 102.4 432.64 102.4 460.8C102.4 488.96 125.44 512 153.6 512C181.76 512 204.8 488.96 204.8 460.8C204.8 432.64 181.76 409.6 153.6 409.6ZM0 0V51.2H51.2L143.36 245.76L107.52 307.2C104.96 314.88 102.4 325.12 102.4 332.8C102.4 360.96 125.44 384 153.6 384H460.8V332.8H163.84C161.28 332.8 158.72 330.24 158.72 327.68V325.119L181.76 281.599H371.2C391.68 281.599 407.04 271.359 414.72 255.999L506.88 89.6C512 84.48 512 81.92 512 76.8C512 61.44 501.76 51.2 486.4 51.2H107.52L84.48 0H0ZM409.6 409.6C381.44 409.6 358.4 432.64 358.4 460.8C358.4 488.96 381.44 512 409.6 512C437.76 512 460.8 488.96 460.8 460.8C460.8 432.64 437.76 409.6 409.6 409.6Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default ShoppingCart;
