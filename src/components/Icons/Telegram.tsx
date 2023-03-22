import React from "react";

import { ISvgProps } from "./types";

const Telegram: React.FC<ISvgProps> = ({
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
        d="M471.147 100.971L512 61.888V53.3333H370.475L269.611 304.384L154.859 53.3333H6.464V61.888L54.1867 119.339C58.8373 123.584 61.2693 129.792 60.6507 136.043V361.813C62.1227 369.941 59.4773 378.304 53.76 384.213L0 449.365V457.813H152.427V449.259L98.6667 384.213C92.8427 378.283 90.0907 370.069 91.264 361.813V166.528L225.067 457.92H240.619L355.669 166.528V398.656C355.669 404.779 355.669 406.037 351.659 410.048L310.272 450.091V458.667H511.061V450.112L471.168 411.051C467.669 408.405 465.856 403.968 466.603 399.659V112.363C465.856 108.032 467.648 103.595 471.147 100.971V100.971Z"
      />
      {extraIcon}
    </svg>
  );
};

export default Telegram;
