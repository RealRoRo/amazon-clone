"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import InputField from "@/components/atoms/inputField/InputField";
import CustomButton from "@/components/atoms/button/Button";

export default function Home() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <Box>
      <InputField placeholder="Enter your name" setValue={setName} />
      <CustomButton
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        label={"Hello"}
        color="yellowLight"
      />
    </Box>
  );
}
