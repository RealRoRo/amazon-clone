import React from "react";
import { Button as MuiButton } from "@mui/material";

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
const Button: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  color = "yellow",
  variant = "contained",
  disabled = false,
  sx,
}) => {
  return (
    <MuiButton
      onClick={onClick}
      color={color}
      variant={variant}
      disabled={disabled}
      sx={sx}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
