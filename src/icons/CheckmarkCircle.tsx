import React from "react";
import Svg from "./Svg";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="12" fill="#49A7F5" />
      <path
        d="M16 9L10.5 14.5L8 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
