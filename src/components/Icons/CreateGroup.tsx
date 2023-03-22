import React from "react";

import { ISvgProps } from "./types";

const CreateGroup: React.FC<ISvgProps> = ({
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
        d="M170.667 224H106.667V160H64V224H0V266.667H64V330.667H106.667V266.667H170.667V224ZM384 245.333C420.267 245.333 448 217.6 448 181.333C448 145.067 420.267 117.333 384 117.333C377.6 117.333 371.2 119.467 364.8 119.467C377.6 138.667 384 157.867 384 181.333C384 204.8 377.6 224 364.8 243.2C371.2 243.2 377.6 245.333 384 245.333ZM277.333 245.333C313.6 245.333 341.333 217.6 341.333 181.333C341.333 145.067 313.6 117.333 277.333 117.333C241.067 117.333 213.333 145.067 213.333 181.333C213.333 217.6 241.067 245.333 277.333 245.333ZM418.133 292.267C435.2 307.201 448 328.534 448 352V394.667H512V352C512 320 460.8 298.667 418.133 292.267ZM277.333 288C234.667 288 149.333 309.333 149.333 352V394.667H405.333V352C405.333 309.333 320 288 277.333 288Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default CreateGroup;
