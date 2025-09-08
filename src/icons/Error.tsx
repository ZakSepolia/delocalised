import React from "react";
import Svg from "./Svg";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M9.4327 3.53833L1.66854 16.5C1.50846 16.7772 1.42376 17.0915 1.42286 17.4116C1.42196 17.7318 1.5049 18.0465 1.66343 18.3246C1.82195 18.6028 2.05053 18.8345 2.32643 18.9969C2.60233 19.1592 2.91593 19.2465 3.23604 19.25H18.7644C19.0845 19.2465 19.3981 19.1592 19.674 18.9969C19.9499 18.8345 20.1785 18.6028 20.337 18.3246C20.4955 18.0465 20.5784 17.7318 20.5775 17.4116C20.5766 17.0915 20.4919 16.7772 20.3319 16.5L12.5677 3.53833C12.4043 3.26893 12.1742 3.04619 11.8996 2.89161C11.6251 2.73702 11.3153 2.65582 11.0002 2.65582C10.6851 2.65582 10.3753 2.73702 10.1008 2.89161C9.82621 3.04619 9.59612 3.26893 9.4327 3.53833V3.53833Z"
        stroke="#FFC833"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 8.25V11.9167"
        stroke="#FFC833"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 15.5833H11.0092"
        stroke="#FFC833"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
