import { Button } from "@mui/material";
import React from "react";

export const ButtonBack = ({ disabled = false, onClick = null }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        height: "48px",
        width: "100%",
        fontSize: "18px",
        borderRadius: "16px",
        textTransform: "none",
        mb: 3,
        textAlign: "center",
      }}
      variant="body1"
    >
      Back
    </Button>
  );
};
