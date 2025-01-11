import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
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
  children,
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
      {children}
    </Button>
  );
};

export default CustomButton;
