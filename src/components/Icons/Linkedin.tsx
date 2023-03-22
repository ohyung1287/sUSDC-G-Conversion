import React from "react";

import { ISvgProps } from "./types";

const Linkedin: React.FC<ISvgProps> = ({
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
        d="M460.8 460.8V310.784C460.8 237.056 444.928 180.736 358.912 180.736C317.44 180.736 289.792 203.264 278.528 224.768H277.504V187.392H196.096V460.8H281.088V325.12C281.088 289.28 287.744 254.976 331.776 254.976C375.296 254.976 375.808 295.424 375.808 327.168V460.288H460.8V460.8Z"
      />
      <path fill={fill} d="M57.856 187.392H142.848V460.8H57.856V187.392Z" />
      <path
        fill={fill}
        d="M100.352 51.2C73.216 51.2 51.2 73.216 51.2 100.352C51.2 127.488 73.216 150.016 100.352 150.016C127.488 150.016 149.504 127.488 149.504 100.352C149.504 73.216 127.488 51.2 100.352 51.2V51.2Z"
      />
      {extraIcon}
    </svg>
  );
};

export default Linkedin;
