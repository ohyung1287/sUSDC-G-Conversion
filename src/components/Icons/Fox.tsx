import React from "react";

import { ISvgProps } from "./types";

const Fox: React.FC<ISvgProps> = ({
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
        d="M490.832 272.416C469.935 258.84 455.578 235.578 440.38 210.95C438.79 208.374 437.171 205.756 435.53 203.121C464.364 121.244 424.573 55.503 422.808 52.656L410.907 33.451L341.742 112.795C317.14 102.419 288.769 97.317 256 97.317C223.231 97.317 194.86 102.42 170.258 112.796L101.093 33.452L89.191 52.658C87.428 55.504 47.635 121.245 76.469 203.123C74.828 205.758 73.209 208.375 71.619 210.952C56.421 235.58 42.065 258.841 21.167 272.418L0 286.169L20.954 300.246C22.201 301.084 146.064 384.401 174.217 412.189C183.069 420.926 190.149 430.034 196.997 438.844C212.172 458.365 227.863 478.551 256.001 478.551C284.139 478.551 299.831 458.365 315.005 438.844C321.853 430.035 328.933 420.926 337.785 412.189C365.937 384.401 489.801 301.084 491.048 300.246L512.002 286.169L490.832 272.416ZM208.671 400.249C205.282 396.343 201.636 392.385 197.648 388.449C175.837 366.922 106.479 318.333 67.203 291.368C89.303 285.118 121.75 278.336 158.497 278.336C169.922 278.336 178.558 281.783 185.677 289.182C206.78 311.119 209.237 362.415 208.671 400.249ZM255.999 445.196C250.389 445.196 245.773 443.049 240.828 438.683C240.925 435.248 241.076 431.333 241.242 427.06C241.259 426.631 241.275 426.181 241.292 425.746H270.709C270.726 426.181 270.743 426.631 270.759 427.06C270.925 431.333 271.076 435.249 271.173 438.683C266.227 443.049 261.609 445.196 255.999 445.196ZM314.353 388.45C310.365 392.386 306.719 396.345 303.33 400.25C302.764 362.416 305.221 311.12 326.324 289.183C333.442 281.784 342.079 278.337 353.505 278.337C390.252 278.337 422.698 285.119 444.799 291.369C405.521 318.332 336.163 366.922 314.353 388.45Z"
        fill={fill}
      />
      <path
        d="M360.456 291.91C351.152 291.91 343.605 299.45 343.605 308.75C343.605 318.051 351.152 325.59 360.456 325.59C369.749 325.59 377.295 318.05 377.295 308.75C377.296 299.45 369.749 291.91 360.456 291.91Z"
        fill={fill}
      />
      <path
        d="M151.555 291.91C142.251 291.91 134.704 299.45 134.704 308.75C134.704 318.051 142.251 325.59 151.555 325.59C160.848 325.59 168.394 318.05 168.394 308.75C168.395 299.45 160.848 291.91 151.555 291.91Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Fox;