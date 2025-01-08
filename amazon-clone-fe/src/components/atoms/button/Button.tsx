import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  onClick: () => void;
  label: string;
  color?: "inherit" | "yellow" | "yellowLight" | "yellowDark";
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
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

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  color = "yellow",
  variant = "contained",
  disabled = false,
  sx,
}) => {
  return (
    <Button
      onClick={onClick}
      color={color}
      variant={variant}
      disabled={disabled}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
