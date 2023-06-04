import React from "react";
import { Box, Divider, Typography, styled } from "@mui/material";
import { linksData } from "../dataUiPart.js/linksData";
import { LinkComp } from "./link/LinkComp";
import { Logo } from "./common/Logo";

const FooterBox = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 0 28px",

  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
  },
}));

export const Footer = () => {
  return (
    <FooterBox component="footer">
      <Logo />
      <Box>
        {linksData?.map((link) => (
          <LinkComp key={link.id} link={link} />
        ))}
      </Box>

      <Divider sx={{ mb: 3, mt: 5, width: "100%" }} />
      <Typography variant="body3">
        &copy; 2023 Intim Florts | All Rights Reserved.
      </Typography>
    </FooterBox>
  );
};
