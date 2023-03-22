import React from "react";

interface ISvgProps {
  viewBox?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  fill?: string;
  extraIcon?: JSX.Element;
}

const Wallet: React.FC<ISvgProps> = ({
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
        d="M374.154 182.154H512V118.154C512 77.435 478.873 44.308 438.154 44.308H73.846C33.127 44.308 0 77.435 0 118.154V393.846C0 434.565 33.127 467.692 73.846 467.692H438.154C478.873 467.692 512 434.565 512 393.846V329.846H374.154C333.435 329.846 300.308 296.719 300.308 256C300.308 215.281 333.435 182.154 374.154 182.154Z"
        fill={fill}
      />
      <path
        d="M374.154 211.692C349.723 211.692 329.846 231.568 329.846 256C329.846 280.432 349.722 300.308 374.154 300.308H512V211.693H374.154V211.692ZM393.846 270.769H374.154C365.997 270.769 359.385 264.156 359.385 256C359.385 247.844 365.998 241.231 374.154 241.231H393.846C402.003 241.231 408.615 247.844 408.615 256C408.615 264.156 402.003 270.769 393.846 270.769Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Wallet;
