import { Stack } from "@mui/material";
import React, { FC } from "react";
import Icon from "../../atoms/icon/Icon";
import { IconType } from "../../atoms/icon/types";

interface Props {
  /**
   * domain
   */
  domain: string;
}

const AmazonLogoWithDomain: FC<Props> = ({ domain }) => {
  return (
    <Stack flexDirection={"row"}>
      <Icon type={IconType.AMAZON_LOGO} width={90} height={35} />
      <span style={{ width: "auto", marginTop: "2px", pointerEvents: "none" }}>
        {domain}
      </span>
    </Stack>
  );
};

export default AmazonLogoWithDomain;
