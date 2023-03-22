import React from "react";

import { ISvgProps } from "./types";

const Skype: React.FC<ISvgProps> = ({
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
        d="M478.762 296.333C478.606 297.177 478.343 295.571 478.762 296.333C481.237 282.845 482.538 269.043 482.538 255.244C482.538 224.646 476.55 194.966 464.714 167.019C453.294 140.028 436.958 115.788 416.131 94.9753C395.336 74.1598 371.078 57.8267 344.098 46.4097C316.164 34.5884 286.48 28.5972 255.885 28.5972C241.465 28.5972 227.022 29.9507 212.965 32.6519C212.936 32.6577 212.86 32.6665 212.86 32.6665C193.574 22.4126 171.888 16.937 149.933 16.937C114.091 16.937 80.3937 30.8941 55.0518 56.2447C29.7129 81.5866 15.75 115.287 15.75 151.126C15.75 173.939 21.6211 196.366 32.6309 216.18C30.3985 229.02 29.2178 242.143 29.2178 255.244C29.2178 285.848 35.209 315.526 47.045 343.475C58.4474 370.478 74.7892 394.7 95.5988 415.516C116.426 436.329 140.649 452.688 167.658 464.076C195.595 475.92 225.288 481.915 255.882 481.915C269.201 481.915 282.548 480.699 295.58 478.387C315.654 489.746 338.383 495.781 361.592 495.781C397.425 495.781 431.107 481.85 456.452 456.488C481.8 431.161 495.751 397.454 495.751 361.615C495.751 338.726 489.851 316.226 478.762 296.333V296.333ZM256.788 394.056C176.265 394.056 140.239 354.47 140.239 324.798C140.239 309.584 151.474 298.914 166.957 298.914C201.419 298.914 192.495 348.394 256.788 348.394C289.703 348.394 307.876 330.523 307.876 312.235C307.876 301.234 302.45 289.041 280.776 283.7L209.157 265.82C151.474 251.356 141.009 220.173 141.009 190.861C141.009 130.003 198.311 107.154 252.121 107.154C301.691 107.154 360.124 134.55 360.124 171.059C360.124 186.704 346.577 195.801 331.099 195.801C301.691 195.801 307.099 155.096 247.861 155.096C218.467 155.096 202.184 168.408 202.184 187.454C202.184 206.468 225.402 212.541 245.558 217.132L298.571 228.9C356.64 241.838 371.362 275.74 371.362 307.674C371.368 357.127 333.405 394.056 256.788 394.056V394.056Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Skype;
