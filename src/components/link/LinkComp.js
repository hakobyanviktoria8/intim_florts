import { Link } from "@mui/material";
import React from "react";

export const LinkComp = ({ link }) => {
  return (
    <Link
      target="_blank"
      href={link.href}
      underline="none"
      sx={{
        ...link.sx,
        fontSize: {
          xs: "14px",
          sm: "18px",
        },
        color: "primary.main",
        fontWeight: "400",
        lineHeight: "26px",
      }}
    >
      {link.text}
    </Link>
  );
};
