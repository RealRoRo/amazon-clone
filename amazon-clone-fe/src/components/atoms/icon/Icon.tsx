import React from "react";

import { IconType } from "./types";
import AmazonLogo from "../../../../public/assets/icons/AmazonLogo.svg";
import Search from "../../../../public/assets/icons/Search.svg";

interface Props {
  /**
   * Icon width
   */
  width: number | string;
  /**
   * Icon height
   */
  height: number | string;
  /**
   * Icon Type
   */
  type: IconType;
  /**
   * Icon fill
   */
  fill?: string;
}

/**
 * Component returning a specific icon
 */
const Icon: React.FC<Props> = ({ width, height, type, fill }) => {
  let iconComponent;
  switch (type) {
    case IconType.AMAZON_LOGO:
      iconComponent = <AmazonLogo width={width} height={height} fill={fill} />;
      break;
    case IconType.SEARCH:
      iconComponent = <Search width={width} height={height} fill={fill} />;
      break;
    default:
      iconComponent = null;
  }

  return iconComponent;
};

export default Icon;
