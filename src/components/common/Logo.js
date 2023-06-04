import React from "react";
import logoImage from "./../../images/logo.png";
import { Avatar } from "@mui/material";

export const Logo = () => {
  return (
    <Avatar
      src={logoImage}
      alt="Logo"
      sx={{
        margin: "auto",
        mb: "32px",
        width: { xs: "200px", sm: "250px" },
        objectFit: "contain",
      }}
      variant="square"
      className="logo"
    />
  );
};
