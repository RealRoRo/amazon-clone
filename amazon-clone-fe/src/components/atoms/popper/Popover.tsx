import React from "react";
import { Popover as MuiPopover, PopoverOrigin } from "@mui/material";

/**
 * Props for the Popover component.
 *
 * @interface Props
 * @property {HTMLElement | null} anchorEl - The element to which the popover is anchored.
 * @property {() => void} handleClose - Function to handle the closing of the popover.
 * @property {React.ReactNode} children - The content of the popover.
 * @property {PopoverOrigin["vertical"]} anchorVertical - Vertical alignment of the popover.
 * @property {PopoverOrigin["horizontal"]} anchorHorizontal - Horizontal alignment of the popover.
 */
interface Props {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children: React.ReactNode;
  anchorVertical?: PopoverOrigin["vertical"];
  anchorHorizontal?: PopoverOrigin["horizontal"];
}
const Popover: React.FC<Props> = ({
  anchorEl,
  children,
  handleClose,
  anchorVertical = "bottom",
  anchorHorizontal = "left",
}) => {
  return (
    <MuiPopover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: anchorVertical, horizontal: anchorHorizontal }}
      onClose={handleClose}
    >
      {children}
    </MuiPopover>
  );
};

export default Popover;
