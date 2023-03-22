import React from "react";

import { ISvgProps } from "./types";

const Random: React.FC<ISvgProps> = ({
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
        d="M432 96H384V48C384 43.7565 382.314 39.6869 379.314 36.6863C376.313 33.6857 372.243 32 368 32H80C75.7565 32 71.6869 33.6857 68.6863 36.6863C65.6857 39.6869 64 43.7565 64 48V400C64 404.243 65.6857 408.313 68.6863 411.314C71.6869 414.314 75.7565 416 80 416H128V464C128 468.243 129.686 472.313 132.686 475.314C135.687 478.314 139.757 480 144 480H432C436.243 480 440.313 478.314 443.314 475.314C446.314 472.313 448 468.243 448 464V112C448 107.757 446.314 103.687 443.314 100.686C440.313 97.6857 436.243 96 432 96ZM144 176C144.003 160.864 148.3 146.038 156.393 133.247C164.485 120.455 176.04 110.222 189.716 103.735C203.392 97.2481 218.628 94.7744 233.654 96.6009C248.68 98.4275 262.879 104.479 274.603 114.054C286.326 123.628 295.093 136.332 299.885 150.69C304.677 165.048 305.297 180.471 301.674 195.167C298.051 209.863 290.332 223.23 279.415 233.715C268.498 244.2 254.831 251.373 240 254.4V272C240 276.243 238.314 280.313 235.314 283.314C232.313 286.314 228.243 288 224 288C219.757 288 215.687 286.314 212.686 283.314C209.686 280.313 208 276.243 208 272V240C208 235.757 209.686 231.687 212.686 228.686C215.687 225.686 219.757 224 224 224C233.494 224 242.774 221.185 250.667 215.911C258.561 210.636 264.713 203.14 268.346 194.369C271.979 185.598 272.93 175.947 271.078 166.636C269.226 157.325 264.654 148.772 257.941 142.059C251.228 135.346 242.675 130.774 233.364 128.922C224.053 127.07 214.402 128.021 205.631 131.654C196.86 135.287 189.364 141.439 184.089 149.333C178.815 157.226 176 166.506 176 176C176 180.243 174.314 184.313 171.314 187.314C168.313 190.314 164.243 192 160 192C155.757 192 151.687 190.314 148.686 187.314C145.686 184.313 144 180.243 144 176ZM240 320V336C240 340.243 238.314 344.313 235.314 347.314C232.313 350.314 228.243 352 224 352C219.757 352 215.687 350.314 212.686 347.314C209.686 344.313 208 340.243 208 336V320C208 315.757 209.686 311.687 212.686 308.686C215.687 305.686 219.757 304 224 304C228.243 304 232.313 305.686 235.314 308.686C238.314 311.687 240 315.757 240 320ZM416 448H160V416H368C372.243 416 376.313 414.314 379.314 411.314C382.314 408.313 384 404.243 384 400V128H416V448Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default Random;
