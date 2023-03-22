import React from "react";

import { ISvgProps } from "./types";

const Megaphone: React.FC<ISvgProps> = ({
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
        d="M472.312 128.702L451.1 149.915C471.027 169.842 482 196.335 482 224.515C482 252.695 471.026 279.188 451.1 299.115L472.313 320.328C497.905 294.735 512 260.708 512 224.515C512 188.322 497.905 154.294 472.312 128.702V128.702Z"
        fill={fill}
      />
      <path
        d="M176.339 158.252V289.186C234.021 296.255 283.833 341.969 307.679 367.641V79.812C283.834 105.48 234.022 151.192 176.339 158.252V158.252Z"
        fill={fill}
      />
      <path
        d="M32.268 191.46C14.447 191.46 0 205.906 0 223.727C0 241.548 14.447 255.995 32.268 255.995V288.244H146.339V159.192H32.268V191.46Z"
        fill={fill}
      />
      <path
        d="M387.214 159.208V62.3879H337.678V385.066H387.214V288.246C422.555 287.895 451.099 259.151 451.099 223.727C451.1 188.303 422.555 159.559 387.214 159.208V159.208Z"
        fill={fill}
      />
      <path
        d="M148.176 318.244L153.643 359.422H193.608V323.707C183.17 320.313 172.311 318.244 161.331 318.244H148.176Z"
        fill={fill}
      />
      <path d="M57.8069 318.244L75.2469 449.612H135.353L117.914 318.244H57.8069Z" fill={fill} />
      {extraIcon}
    </svg>
  );
};

export default Megaphone;
