import React from "react";

import { ISvgProps } from "./types";

const Copy: React.FC<ISvgProps> = ({
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
        d="M320 80H96C69.4903 80 48 101.49 48 128V448C48 474.51 69.4903 496 96 496H320C346.51 496 368 474.51 368 448V128C368 101.49 346.51 80 320 80Z"
        fill={fill}
      />
      <path
        d="M464 64V384C463.962 396.719 458.893 408.906 449.899 417.899C440.906 426.893 428.719 431.962 416 432H400V128C400 106.783 391.571 86.4344 376.568 71.4315C361.566 56.4285 341.217 48 320 48H146.88C150.181 38.6632 156.289 30.576 164.367 24.847C172.445 19.1181 182.097 16.0278 192 16H416C428.719 16.038 440.906 21.1073 449.899 30.1008C458.893 39.0944 463.962 51.2813 464 64Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Copy;
