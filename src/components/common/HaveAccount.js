import { Divider, Link, Typography } from "@mui/material";
import React from "react";

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
        Already have an account?
        <Link color="secondary.main" href="/" sx={{ textDecoration: "none" }}>
          {" "}
          Log In
        </Link>
      </Typography>
    </>
  );
};
