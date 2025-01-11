"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import SearchBar from "@/components/molecules/searchBar/SearchBar";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <Box>
      <SearchBar
        setSearchValue={setName}
        onSearch={() => {
          console.log(name);
        }}
      />
    </Box>
  );
}
