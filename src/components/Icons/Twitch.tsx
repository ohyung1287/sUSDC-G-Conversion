import React from "react";

import { ISvgProps } from "./types";

const Twitch: React.FC<ISvgProps> = ({
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
        d="M20.8 89.0667V445.205H143.445V512H210.411L277.269 445.184H377.643L511.488 311.68V0H54.2294L20.8 89.0667ZM98.8374 44.48H466.88V289.365L388.8 367.275H266.112L199.253 433.984V367.275H98.8374V44.48Z"
        fill={fill}
      />
      <path d="M221.547 133.589H266.133V267.136H221.547V133.589Z" fill={fill} />
      <path d="M344.171 133.589H388.779V267.136H344.171V133.589Z" fill={fill} />
      {extraIcon}
    </svg>
  );
};

export default Twitch;
