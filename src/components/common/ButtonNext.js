import React from "react";
import { Button } from "@mui/material";

export const ButtonNext = ({ text, disabled = false, sx, onClick = null }) => {
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
        mt: 3,
        mb: 2,
        background: "#F76448",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "rgba(247, 100, 72, 0.9)",
        },
      }}
    >
      {text}
    </Button>
  );
};
