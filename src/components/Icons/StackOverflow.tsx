import React from "react";

import { ISvgProps } from "./types";

const StackOverflow: React.FC<ISvgProps> = ({
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
      <path d="M137.472 316.565L358.016 363.413L367.253 318.848L146.709 271.659L137.472 316.565Z" fill={fill} />
      <path d="M132.587 374.848H357.995V420.224H132.587V374.848Z" fill={fill} />
      <path d="M166.4 209.728L370.603 306.283L389.525 264.811L185.216 168L166.4 209.728Z" fill={fill} />
      <path d="M370.624 306.304L370.603 306.283L370.581 306.304H370.624Z" fill={fill} />
      <path d="M42.6667 329.152V512H447.829V329.152H402.752V466.283H87.7441V329.152H42.6667Z" fill={fill} />
      <path d="M222.997 108.011L395.989 254.635L424.704 219.435L251.712 72.8107L222.997 108.011Z" fill={fill} />
      <path d="M469.333 183.189L334.891 0L298.816 27.4347L433.259 210.624L469.333 183.189Z" fill={fill} />
      {extraIcon}
    </svg>
  );
};

export default StackOverflow;
