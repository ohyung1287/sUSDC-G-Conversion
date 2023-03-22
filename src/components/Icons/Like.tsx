import React from "react";

import { ISvgProps } from "./types";

const Like: React.FC<ISvgProps> = ({
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
      <path d="M120 173.34H0V490.06H120V173.34Z" fill={fill} />
      <path
        d="M501.092 305.717C501.092 294.292 497.301 283.737 490.913 275.239C503.675 265.994 512 250.983 512 234.058C512 206.031 489.197 183.229 461.17 183.229H345.625L361.705 127.686V101.073C361.705 52.034 321.808 12.137 272.769 12.137C260.878 12.137 251.205 21.811 251.205 33.701V92.701C243.186 105.535 198.654 155.505 150 207.859V470.349L191.518 485.918C216.195 495.172 242.071 499.864 268.427 499.864H428.446C456.473 499.864 479.275 477.061 479.275 449.034C479.275 437.614 475.489 427.061 469.106 418.565C481.866 409.321 490.183 394.3 490.183 377.375C490.183 365.95 486.392 355.395 480.005 346.897C492.767 337.655 501.092 322.644 501.092 305.717Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Like;
