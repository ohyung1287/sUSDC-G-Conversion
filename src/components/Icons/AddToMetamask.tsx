import React from "react";

import { ISvgProps } from "./types";

const AddToMetamask: React.FC<ISvgProps> = ({
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
        d="M384 32C330.98 32 288 74.9805 288 128C288 181.02 330.98 224 384 224C437.02 224 480 181.02 480 128C480 74.9805 437.02 32 384 32ZM456 136H392V200C392 204.422 388.422 208 384 208C379.578 208 376 204.422 376 200V136H312C307.578 136 304 132.422 304 128C304 123.578 307.578 120 312 120H376V56C376 51.5781 379.578 48 384 48C388.422 48 392 51.5781 392 56V120H456C460.422 120 464 123.578 464 128C464 132.422 460.422 136 456 136Z"
        fill={fill}
      />
      <path
        d="M395.025 323.149C379.271 312.915 368.448 295.378 356.991 276.812C355.792 274.87 354.572 272.896 353.334 270.91C375.072 209.185 345.074 159.624 343.744 157.478L334.772 143L282.63 202.815C264.083 194.993 242.695 191.147 217.992 191.147C193.288 191.147 171.9 194.994 153.353 202.816L101.211 143.001L92.2387 157.48C90.9096 159.625 60.9108 209.186 82.6479 270.911C81.4108 272.898 80.1903 274.871 78.9917 276.813C67.5343 295.38 56.7117 312.915 40.9572 323.151L25 333.517L40.7967 344.13C41.7367 344.761 135.114 407.572 156.338 428.52C163.011 435.107 168.348 441.973 173.511 448.615C184.951 463.331 196.78 478.549 217.992 478.549C239.205 478.549 251.035 463.331 262.474 448.615C267.636 441.974 272.974 435.107 279.647 428.52C300.87 407.572 394.248 344.761 395.188 344.13L410.985 333.517L395.025 323.149ZM182.311 419.519C179.757 416.575 177.008 413.591 174.002 410.624C157.559 394.395 105.272 357.765 75.6625 337.437C92.3231 332.725 116.784 327.612 144.487 327.612C153.1 327.612 159.61 330.211 164.977 335.789C180.886 352.326 182.738 390.997 182.311 419.519ZM217.991 453.404C213.762 453.404 210.282 451.785 206.554 448.494C206.627 445.904 206.741 442.953 206.866 439.731C206.879 439.408 206.891 439.069 206.904 438.741H229.08C229.093 439.069 229.106 439.408 229.118 439.731C229.243 442.953 229.357 445.905 229.43 448.494C225.701 451.785 222.22 453.404 217.991 453.404ZM261.982 410.624C258.976 413.592 256.227 416.576 253.672 419.52C253.246 390.998 255.098 352.327 271.007 335.79C276.373 330.212 282.884 327.613 291.498 327.613C319.201 327.613 343.661 332.726 360.322 337.437C330.711 357.764 278.424 394.395 261.982 410.624Z"
        fill={fill}
      />
      <path
        d="M296.738 337.845C289.724 337.845 284.035 343.53 284.035 350.541C284.035 357.552 289.724 363.236 296.738 363.236C303.744 363.236 309.433 357.552 309.433 350.541C309.433 343.53 303.744 337.845 296.738 337.845Z"
        fill={fill}
      />
      <path
        d="M139.253 337.845C132.239 337.845 126.55 343.53 126.55 350.541C126.55 357.552 132.239 363.236 139.253 363.236C146.259 363.236 151.948 357.552 151.948 350.541C151.949 343.53 146.259 337.845 139.253 337.845Z"
        fill={fill}
      />
      {extraIcon}
    </svg>
  );
};

export default AddToMetamask;
