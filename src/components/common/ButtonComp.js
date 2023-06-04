import { Button } from "@mui/material";
import React from "react";

export const ButtonComp = ({ text, disabled = false, sx, onClick = null }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...sx,
        height: "48px",
        width: "100%",
        fontSize: "18px",
        borderRadius: "16px",
        textTransform: "none",
      }}
    >
      {text}
    </Button>
  );
};
