import { Link } from "@mui/material";
import React from "react";
import { Translate } from "react-translated";

export const LinkComp = ({ link, onClick }) => {
  return (
    <Link
      onClick={onClick}
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
      <Translate text={link.text} />
    </Link>
  );
};
