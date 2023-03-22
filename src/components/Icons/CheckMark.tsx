import React from "react";

import { ISvgProps } from "./types";

const CheckMark: React.FC<ISvgProps> = ({
  viewBox = "0 0 512 512" as string,
  x = "0px" as string,
  y = "0px" as string,
  width = "512px" as string,
  height = "512px" as string,
  fill = "#828282" as string,
  extraIcon = null as JSX.Element,
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} x={x} y={y} width={width} hanging={height}>
      <path
        d="M209.964 408.379L205.654 401.037C173.321 345.951 87.3168 228.929 86.4493 227.753L83.9268 224.325L116.283 192.361L208.872 257.014C266.903 182.017 320.962 130.402 356.327 100.154C395.394 66.7363 420.13 51.7829 421.159 51.1626L422.328 50.4606H479.337L469.683 59.0592C347.766 167.648 215.5 398.66 214.178 400.981L209.964 408.379Z"
        fill="#009045"
      />
      <path
        d="M40.5424 128.668C44.89 128.668 48.4144 125.145 48.4144 120.8C48.4144 116.454 44.89 112.931 40.5424 112.931C36.1948 112.931 32.6704 116.454 32.6704 120.8C32.6704 125.145 36.1948 128.668 40.5424 128.668Z"
        fill={fill}
      />
      <path
        d="M71.2507 128.668C75.5982 128.668 79.1227 125.145 79.1227 120.8C79.1227 116.454 75.5982 112.931 71.2507 112.931C66.9031 112.931 63.3787 116.454 63.3787 120.8C63.3787 125.145 66.9031 128.668 71.2507 128.668Z"
        fill={fill}
      />
      <path
        d="M101.958 128.668C106.305 128.668 109.83 125.145 109.83 120.8C109.83 116.454 106.305 112.931 101.958 112.931C97.6101 112.931 94.0857 116.454 94.0857 120.8C94.0857 125.145 97.6101 128.668 101.958 128.668Z"
        fill={fill}
      />
      <path
        d="M132.666 128.668C137.014 128.668 140.538 125.145 140.538 120.8C140.538 116.454 137.014 112.931 132.666 112.931C128.318 112.931 124.794 116.454 124.794 120.8C124.794 125.145 128.318 128.668 132.666 128.668Z"
        fill={fill}
      />
      <path
        d="M163.374 128.668C167.722 128.668 171.246 125.145 171.246 120.8C171.246 116.454 167.722 112.931 163.374 112.931C159.027 112.931 155.502 116.454 155.502 120.8C155.502 125.145 159.027 128.668 163.374 128.668Z"
        fill={fill}
      />
      <path
        d="M194.082 128.668C198.43 128.668 201.954 125.145 201.954 120.8C201.954 116.454 198.43 112.931 194.082 112.931C189.735 112.931 186.21 116.454 186.21 120.8C186.21 125.145 189.735 128.668 194.082 128.668Z"
        fill={fill}
      />
      <path
        d="M224.789 128.668C229.137 128.668 232.661 125.145 232.661 120.8C232.661 116.454 229.137 112.931 224.789 112.931C220.442 112.931 216.917 116.454 216.917 120.8C216.917 125.145 220.442 128.668 224.789 128.668Z"
        fill={fill}
      />
      <path
        d="M255.498 128.668C259.845 128.668 263.37 125.145 263.37 120.8C263.37 116.454 259.845 112.931 255.498 112.931C251.15 112.931 247.626 116.454 247.626 120.8C247.626 125.145 251.15 128.668 255.498 128.668Z"
        fill={fill}
      />
      <path
        d="M286.206 128.668C290.554 128.668 294.078 125.145 294.078 120.8C294.078 116.454 290.554 112.931 286.206 112.931C281.858 112.931 278.334 116.454 278.334 120.8C278.334 125.145 281.858 128.668 286.206 128.668Z"
        fill={fill}
      />
      <path
        d="M40.5424 466.463C44.89 466.463 48.4144 462.94 48.4144 458.594C48.4144 454.249 44.89 450.726 40.5424 450.726C36.1948 450.726 32.6704 454.249 32.6704 458.594C32.6704 462.94 36.1948 466.463 40.5424 466.463Z"
        fill={fill}
      />
      <path
        d="M71.2507 466.463C75.5982 466.463 79.1227 462.94 79.1227 458.594C79.1227 454.249 75.5982 450.726 71.2507 450.726C66.9031 450.726 63.3787 454.249 63.3787 458.594C63.3787 462.94 66.9031 466.463 71.2507 466.463Z"
        fill={fill}
      />
      <path
        d="M101.958 466.463C106.305 466.463 109.83 462.94 109.83 458.594C109.83 454.249 106.305 450.726 101.958 450.726C97.6101 450.726 94.0857 454.249 94.0857 458.594C94.0857 462.94 97.6101 466.463 101.958 466.463Z"
        fill={fill}
      />
      <path
        d="M132.666 466.463C137.014 466.463 140.538 462.94 140.538 458.594C140.538 454.249 137.014 450.726 132.666 450.726C128.318 450.726 124.794 454.249 124.794 458.594C124.794 462.94 128.318 466.463 132.666 466.463Z"
        fill={fill}
      />
      <path
        d="M163.374 466.463C167.722 466.463 171.246 462.94 171.246 458.594C171.246 454.249 167.722 450.726 163.374 450.726C159.027 450.726 155.502 454.249 155.502 458.594C155.502 462.94 159.027 466.463 163.374 466.463Z"
        fill={fill}
      />
      <path
        d="M194.082 466.463C198.43 466.463 201.954 462.94 201.954 458.594C201.954 454.249 198.43 450.726 194.082 450.726C189.735 450.726 186.21 454.249 186.21 458.594C186.21 462.94 189.735 466.463 194.082 466.463Z"
        fill={fill}
      />
      <path
        d="M224.789 466.463C229.137 466.463 232.661 462.94 232.661 458.594C232.661 454.249 229.137 450.726 224.789 450.726C220.442 450.726 216.917 454.249 216.917 458.594C216.917 462.94 220.442 466.463 224.789 466.463Z"
        fill={fill}
      />
      <path
        d="M255.498 466.463C259.845 466.463 263.37 462.94 263.37 458.594C263.37 454.249 259.845 450.726 255.498 450.726C251.15 450.726 247.626 454.249 247.626 458.594C247.626 462.94 251.15 466.463 255.498 466.463Z"
        fill={fill}
      />
      <path
        d="M286.206 466.463C290.554 466.463 294.078 462.94 294.078 458.594C294.078 454.249 290.554 450.726 286.206 450.726C281.858 450.726 278.334 454.249 278.334 458.594C278.334 462.94 281.858 466.463 286.206 466.463Z"
        fill={fill}
      />
      <path
        d="M316.913 466.463C321.261 466.463 324.785 462.94 324.785 458.594C324.785 454.249 321.261 450.726 316.913 450.726C312.565 450.726 309.041 454.249 309.041 458.594C309.041 462.94 312.565 466.463 316.913 466.463Z"
        fill={fill}
      />
      <path
        d="M347.621 466.463C351.969 466.463 355.493 462.94 355.493 458.594C355.493 454.249 351.969 450.726 347.621 450.726C343.274 450.726 339.749 454.249 339.749 458.594C339.749 462.94 343.274 466.463 347.621 466.463Z"
        fill={fill}
      />
      <path
        d="M378.33 466.463C382.677 466.463 386.202 462.94 386.202 458.594C386.202 454.249 382.677 450.726 378.33 450.726C373.982 450.726 370.458 454.249 370.458 458.594C370.458 462.94 373.982 466.463 378.33 466.463Z"
        fill={fill}
      />
      <path
        d="M40.5385 435.754C44.8839 435.754 48.4065 432.23 48.4065 427.882C48.4065 423.535 44.8839 420.01 40.5385 420.01C36.1931 420.01 32.6704 423.535 32.6704 427.882C32.6704 432.23 36.1931 435.754 40.5385 435.754Z"
        fill={fill}
      />
      <path
        d="M40.5385 405.046C44.8839 405.046 48.4065 401.522 48.4065 397.174C48.4065 392.827 44.8839 389.302 40.5385 389.302C36.1931 389.302 32.6704 392.827 32.6704 397.174C32.6704 401.522 36.1931 405.046 40.5385 405.046Z"
        fill={fill}
      />
      <path
        d="M40.5385 374.339C44.8839 374.339 48.4065 370.815 48.4065 366.467C48.4065 362.119 44.8839 358.595 40.5385 358.595C36.1931 358.595 32.6704 362.119 32.6704 366.467C32.6704 370.815 36.1931 374.339 40.5385 374.339Z"
        fill={fill}
      />
      <path
        d="M40.5385 343.631C44.8839 343.631 48.4065 340.106 48.4065 335.759C48.4065 331.411 44.8839 327.887 40.5385 327.887C36.1931 327.887 32.6704 331.411 32.6704 335.759C32.6704 340.106 36.1931 343.631 40.5385 343.631Z"
        fill={fill}
      />
      <path
        d="M40.5385 312.923C44.8839 312.923 48.4065 309.398 48.4065 305.051C48.4065 300.703 44.8839 297.179 40.5385 297.179C36.1931 297.179 32.6704 300.703 32.6704 305.051C32.6704 309.398 36.1931 312.923 40.5385 312.923Z"
        fill={fill}
      />
      <path
        d="M40.5385 282.214C44.8839 282.214 48.4065 278.69 48.4065 274.342C48.4065 269.995 44.8839 266.47 40.5385 266.47C36.1931 266.47 32.6704 269.995 32.6704 274.342C32.6704 278.69 36.1931 282.214 40.5385 282.214Z"
        fill={fill}
      />
      <path
        d="M40.5385 251.507C44.8839 251.507 48.4065 247.983 48.4065 243.635C48.4065 239.288 44.8839 235.763 40.5385 235.763C36.1931 235.763 32.6704 239.288 32.6704 243.635C32.6704 247.983 36.1931 251.507 40.5385 251.507Z"
        fill={fill}
      />
      <path
        d="M40.5385 220.799C44.8839 220.799 48.4065 217.275 48.4065 212.927C48.4065 208.579 44.8839 205.055 40.5385 205.055C36.1931 205.055 32.6704 208.579 32.6704 212.927C32.6704 217.275 36.1931 220.799 40.5385 220.799Z"
        fill={fill}
      />
      <path
        d="M40.5385 190.091C44.8839 190.091 48.4065 186.566 48.4065 182.219C48.4065 177.871 44.8839 174.347 40.5385 174.347C36.1931 174.347 32.6704 177.871 32.6704 182.219C32.6704 186.566 36.1931 190.091 40.5385 190.091Z"
        fill={fill}
      />
      <path
        d="M40.5385 159.384C44.8839 159.384 48.4065 155.859 48.4065 151.512C48.4065 147.164 44.8839 143.64 40.5385 143.64C36.1931 143.64 32.6704 147.164 32.6704 151.512C32.6704 155.859 36.1931 159.384 40.5385 159.384Z"
        fill={fill}
      />
      <path
        d="M378.333 435.754C382.679 435.754 386.201 432.23 386.201 427.882C386.201 423.535 382.679 420.01 378.333 420.01C373.988 420.01 370.465 423.535 370.465 427.882C370.465 432.23 373.988 435.754 378.333 435.754Z"
        fill={fill}
      />
      <path
        d="M378.333 405.046C382.679 405.046 386.201 401.522 386.201 397.174C386.201 392.827 382.679 389.302 378.333 389.302C373.988 389.302 370.465 392.827 370.465 397.174C370.465 401.522 373.988 405.046 378.333 405.046Z"
        fill={fill}
      />
      <path
        d="M378.333 374.339C382.679 374.339 386.201 370.815 386.201 366.467C386.201 362.119 382.679 358.595 378.333 358.595C373.988 358.595 370.465 362.119 370.465 366.467C370.465 370.815 373.988 374.339 378.333 374.339Z"
        fill={fill}
      />
      <path
        d="M378.333 343.631C382.679 343.631 386.201 340.106 386.201 335.759C386.201 331.411 382.679 327.887 378.333 327.887C373.988 327.887 370.465 331.411 370.465 335.759C370.465 340.106 373.988 343.631 378.333 343.631Z"
        fill={fill}
      />
      <path
        d="M378.333 312.923C382.679 312.923 386.201 309.398 386.201 305.051C386.201 300.703 382.679 297.179 378.333 297.179C373.988 297.179 370.465 300.703 370.465 305.051C370.465 309.398 373.988 312.923 378.333 312.923Z"
        fill={fill}
      />
      <path
        d="M378.333 282.214C382.679 282.214 386.201 278.69 386.201 274.342C386.201 269.995 382.679 266.47 378.333 266.47C373.988 266.47 370.465 269.995 370.465 274.342C370.465 278.69 373.988 282.214 378.333 282.214Z"
        fill={fill}
      />
      <path
        d="M378.333 251.507C382.679 251.507 386.201 247.983 386.201 243.635C386.201 239.288 382.679 235.763 378.333 235.763C373.988 235.763 370.465 239.288 370.465 243.635C370.465 247.983 373.988 251.507 378.333 251.507Z"
        fill={fill}
      />
      <path
        d="M378.333 220.799C382.679 220.799 386.201 217.275 386.201 212.927C386.201 208.579 382.679 205.055 378.333 205.055C373.988 205.055 370.465 208.579 370.465 212.927C370.465 217.275 373.988 220.799 378.333 220.799Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default CheckMark;
