import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CartBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "164px",
  textAlign: "center",
  margin: "14px 10px",
  fontSize: "14px",

  [theme.breakpoints.up("sm")]: {
    width: "250px",
    fontSize: "18px",
    margin: "14px 35px",
  },
}));

const CircleContainer = styled(Box)(() => ({
  width: "64px",
  height: "64px",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  marginBottom: "24px",
}));

export const CartComp = ({ Icon, text }) => {
  return (
    <CartBox>
      <CircleContainer>
        <Icon color="secondary" fontSize="large" />
      </CircleContainer>
      
      <Typography
        sx={{
          fontSize: {
            xs: "14px",
            sm: "18px",
          },
          color: "primary.main",
          fontWeight: "400",
          lineHeight: "26px",
        }}
      >
        {text}
      </Typography>
    </CartBox>
  );
};
