import { Typography } from "@mui/material";
import React from "react";
import { Translate } from "react-translated";

export const ErrorMessage = ({ errorMessage }) => {
  return (
    <Typography sx={{ fontSize: "14px", marginTop: "16px", color: "red" }}>
      <Translate text={errorMessage} />
    </Typography>
  );
};
