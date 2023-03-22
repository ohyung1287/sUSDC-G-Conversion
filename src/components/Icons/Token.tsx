import React from "react";

import { ISvgProps } from "./types";

const Token: React.FC<ISvgProps> = ({
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
        d="M347.316 81.6282C347.316 25.9237 145.303 25.9227 145.303 81.6282C145.303 137.344 347.316 137.348 347.316 81.6282Z"
        fill={fill}
      />
      <path
        d="M395.929 223.993C392.278 210.873 382.95 198.572 368.628 188.048V178.668C387.665 164.712 397.7 147.98 397.7 130.071V81.6282C397.7 7.45544 234.524 -25.4347 141.271 22.4504C111.387 37.7954 94.9301 58.8108 94.9301 81.6282V110.546C75.8988 124.499 65.8672 141.228 65.8672 159.133V207.575C65.8672 225.481 75.8908 242.208 94.9301 256.171C94.9301 286.926 93.374 295.131 101.755 309.785C97.2292 317.706 94.9301 325.995 94.9301 334.494V430.41C94.9301 453.226 111.387 474.243 141.271 489.588C234.09 537.25 397.7 504.873 397.7 430.41V393.739C428.551 378.482 446.133 356.733 446.133 333.524V285.081C446.133 261.408 427.892 239.294 395.929 223.993V223.993ZM350.594 344.647C374.854 332.375 397.7 312.048 397.7 285.08V242.965C458.56 277.848 428.658 326.945 350.594 344.647ZM112.758 324.033C121.017 332.359 131.974 339.869 145.116 346.163C150.527 365.551 168.285 382.565 194.105 394.846C139.127 383.326 102.101 354.555 112.758 324.033V324.033ZM246.309 302.271C206.727 302.271 169.733 293.456 144.425 279.343C240.51 307.271 366.608 273.362 368.595 209.034C412.229 253.264 340.831 302.271 246.309 302.271V302.271ZM246.309 16.003C319.698 16.003 381.699 46.0559 381.699 81.6272C381.699 117.205 319.698 147.261 246.309 147.261C172.926 147.261 110.931 117.205 110.931 81.6272C110.931 46.0559 172.926 16.003 246.309 16.003ZM94.9621 131.509C96.9132 195.566 222.632 229.887 319.141 201.838C293.831 215.951 256.832 224.766 217.247 224.766C122.57 224.766 51.2893 175.607 94.9621 131.509V131.509Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Token;
