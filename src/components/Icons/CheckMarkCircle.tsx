import React from "react";

import { ISvgProps } from "./types";

const CheckMarkCircle: React.FC<ISvgProps> = ({
  viewBox = "0 0 512 512" as string,
  x = "0px" as string,
  y = "0px" as string,
  width = "512px" as string,
  height = "512px" as string,
  fill = "#B0EF8F" as string,
  extraIcon = null as JSX.Element,
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} x={x} y={y} width={width} hanging={height}>
      <path
        d="M205.312 457.866C301.302 457.866 379.116 380.051 379.116 284.062C379.116 188.072 301.302 110.257 205.312 110.257C109.323 110.257 31.5078 188.072 31.5078 284.062C31.5078 380.051 109.323 457.866 205.312 457.866Z"
        fill={fill}
      />
      <path
        d="M207.277 418.4L205.073 414.643C171.399 357.27 81.9152 235.514 81.0113 234.291L79.7205 232.538L110.207 202.408L206.711 269.794C267.473 190.947 324.159 136.792 361.135 105.167C401.584 70.5723 427.914 54.6462 428.18 54.4935L428.778 54.1351H480.492L475.553 58.5344C348.509 171.692 210.806 412.198 209.435 414.615L207.277 418.4Z"
        fill="#009045"
      />
      {extraIcon}
    </svg>
  );
};

export default CheckMarkCircle;
