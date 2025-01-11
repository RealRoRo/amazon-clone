import Button from "@/components/atoms/button/Button";
import Icon from "@/components/atoms/icon/Icon";
import { IconType } from "@/components/atoms/icon/types";
import { InputBase, Paper } from "@mui/material";
import React, { FC } from "react";

interface Props {
  /**
   *
   * @param value setSearchValue
   * @returns void
   */
  setSearchValue: (value: string) => void;
  /**
   * @param value onSearch
   * @returns void
   */
  onSearch: () => void;
}

const SearchBar: FC<Props> = ({ setSearchValue, onSearch }) => {
  return (
    <Paper
      component="form"
      sx={{
        pl: "4px",
        display: "flex",
        alignItems: "center",
        height: "40px",
        borderRadius: "4px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: "15px" }}
        placeholder="Search Amazon.in"
        inputProps={{ "aria-label": "search amazon.in" }}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button
        variant="contained"
        color="yellowLight"
        sx={{
          padding: "10px",
          width: "45px",
          height: "40px",
          borderRadius: "0px 4px 4px 0px",
        }}
        onClick={onSearch}
      >
        <Icon width={26} height={26} type={IconType.SEARCH} />
      </Button>
    </Paper>
  );
};

export default SearchBar;
