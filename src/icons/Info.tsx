import React from "react";
import Svg from "./Svg";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M11.0002 20.1667C16.0628 20.1667 20.1668 16.0626 20.1668 11C20.1668 5.9374 16.0628 1.83334 11.0002 1.83334C5.93755 1.83334 1.8335 5.9374 1.8335 11C1.8335 16.0626 5.93755 20.1667 11.0002 20.1667Z"
        stroke="#49A7F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 14.6667V11"
        stroke="#49A7F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7.33334H11.0092"
        stroke="#49A7F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
