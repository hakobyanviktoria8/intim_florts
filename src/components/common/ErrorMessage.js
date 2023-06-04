import { Typography } from "@mui/material";
import React from "react";

export const ErrorMessage = ({ errorMessage }) => {
  return (
    <Typography sx={{ fontSize: "14px", marginTop: "16px", color: "red" }}>
      {errorMessage}
    </Typography>
  );
};
