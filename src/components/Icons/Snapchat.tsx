import React from "react";

import { ISvgProps } from "./types";

const Snapchat: React.FC<ISvgProps> = ({
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
        d="M258.807 480.603C257.565 480.603 253.549 480.603 252.742 480.603C224.304 480.603 206.057 467.708 188.407 455.224C176.219 446.614 164.715 438.483 151.165 436.226C144.552 435.131 137.97 434.582 131.621 434.582C120.155 434.582 111.12 436.349 104.521 437.64C100.512 438.427 97.0537 439.096 94.4206 439.096C91.6701 439.096 88.7054 438.503 87.405 434.083C86.2836 430.246 85.4735 426.548 84.6838 422.955C82.6672 413.726 81.2347 408.046 77.3717 407.453C32.2691 400.487 19.3562 390.979 16.4795 384.242C16.0744 383.282 15.8396 382.311 15.7897 381.36C15.6459 378.768 17.4687 376.478 20.0372 376.064C89.3629 364.648 120.455 293.785 121.752 290.779C121.779 290.697 121.814 290.614 121.858 290.535C126.105 281.934 126.93 274.467 124.338 268.346C119.58 257.142 104.058 252.213 93.7836 248.952C91.2768 248.154 88.8903 247.405 87.0116 246.654C66.5136 238.552 64.814 230.239 65.6183 226.003C66.9921 218.773 76.6408 213.739 84.4519 213.739C86.5889 213.739 88.4705 214.126 90.0556 214.863C99.2846 219.175 107.586 221.371 114.763 221.371C124.67 221.371 128.994 217.206 129.522 216.66C129.267 211.969 128.959 207.07 128.636 202.006C126.575 169.232 124.007 128.494 134.386 105.252C165.466 35.571 231.369 30.1464 250.834 30.1464C251.33 30.1464 259.37 30.0613 259.37 30.0613H260.521C280.021 30.0613 346.077 35.483 377.177 105.211C387.548 128.471 384.977 169.235 382.91 201.985L382.828 203.418C382.537 207.974 382.258 212.406 382.024 216.654C382.526 217.162 386.503 220.989 395.48 221.333H395.485C402.319 221.074 410.16 218.891 418.775 214.866C421.291 213.686 424.094 213.439 425.999 213.439C428.923 213.439 431.873 214.003 434.324 215.025L434.476 215.086C441.433 217.558 446.001 222.434 446.101 227.532C446.192 232.338 442.525 239.553 424.543 246.654C422.679 247.396 420.293 248.148 417.771 248.952C407.482 252.213 391.975 257.142 387.216 268.346C384.624 274.467 385.449 281.926 389.697 290.526C389.732 290.614 389.773 290.691 389.811 290.779C391.1 293.785 422.157 364.628 491.52 376.058C494.08 376.478 495.915 378.768 495.774 381.354C495.715 382.323 495.471 383.3 495.06 384.254C492.196 390.941 479.3 400.437 434.192 407.4C430.499 407.969 429.067 412.775 426.871 422.849C426.069 426.509 425.262 430.111 424.15 433.898C423.187 437.185 421.141 438.721 417.689 438.721H417.134C414.742 438.721 411.348 438.286 407.039 437.441C399.401 435.95 390.839 434.579 379.939 434.579C373.575 434.579 366.994 435.128 360.375 436.223C346.846 438.477 335.351 446.591 323.183 455.191C305.506 467.705 287.257 480.603 258.807 480.603"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Snapchat;
