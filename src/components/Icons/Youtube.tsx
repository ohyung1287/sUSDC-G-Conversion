import React from "react";

import { ISvgProps } from "./types";

const Youtube: React.FC<ISvgProps> = ({
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
        d="M504.862 134.01C502.175 111.591 481.047 90.093 458.941 87.2129C324.142 70.4639 187.832 70.4639 53.0772 87.2129C30.953 90.0868 9.82512 111.591 7.13757 134.01C-2.37886 216.175 -2.37886 295.843 7.13757 377.99C9.82512 400.409 30.953 421.927 53.0772 424.787C187.832 441.536 324.147 441.536 458.941 424.787C481.047 421.932 502.175 400.409 504.862 377.99C514.38 295.851 514.38 216.175 504.862 134.01ZM213.33 341.349V170.677L341.333 256.016L213.33 341.349Z"
      />
      {extraIcon}
    </svg>
  );
};

export default Youtube;
