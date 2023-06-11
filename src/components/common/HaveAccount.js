import { Divider, Link, Typography } from "@mui/material";
import React from "react";
import { Translate } from "react-translated";

export const HaveAccount = () => {
  return (
    <>
      <Divider sx={{ mb: 3, mt: 3, width: "100%" }} />
      <Typography
        sx={{
          fontSize: {
            xs: "16px",
            sm: "18px",
          },
          color: "primary.main",
          fontWeight: "400",
          lineHeight: "26px",
        }}
        textAlign="center"
        display="block"
      >
        <Translate text="have account" />
        <Link color="secondary.main" href="/" sx={{ textDecoration: "none" }}>
          {" "}
          <Translate text="log In" />
        </Link>
      </Typography>
    </>
  );
};
