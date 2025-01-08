import { TextField } from "@mui/material";
import React, { FC } from "react";

interface Props {
  /**
   * placeholder text
   */
  placeholder: string;
  /**
   * Function to set the value of the input field
   */
  setValue: (value: string) => void;
  /**
   * style the inputFIeld using sx prop
   */
  sx?: {
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    color?: string;
    "hover:borderRadius"?: string;
    "hover:border"?: string;
  };
}

const InputField: FC<Props> = ({ placeholder, setValue, sx }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  return (
    <TextField placeholder={placeholder} onChange={handleChange} sx={sx} />
  );
};

export default InputField;
