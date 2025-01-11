"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import SearchBar from "@/components/molecules/searchBar/SearchBar";
import Popover from "@/components/atoms/popper/Popover";

export default function Home() {
  const [name, setName] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log("open");
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    console.log("close");
    setAnchorEl(null);
  };
  console.log(anchorEl);
  return (
    <Box>
      <SearchBar
        setSearchValue={setName}
        onSearch={() => {
          console.log(name);
        }}
      />
      <Typography
        onMouseOver={handlePopoverOpen}
        onMouseOut={handlePopoverClose}
      >
        Language
      </Typography>
      <Popover anchorEl={anchorEl} handleClose={handlePopoverClose}>
        The content of the Popper.
      </Popover>
    </Box>
  );
}
