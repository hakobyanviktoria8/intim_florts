import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Translate } from "react-translated";
import { cartsData } from "../../dataUiPart.js/cartsData";

const CartBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  width: "164px",
  textAlign: "center",
  fontSize: "14px",
  margin: "14px 2px",

  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
    margin: "14px 10px",
    width: "250px",
    fontSize: "18px",

    ":last-child": {
      width: "270px",
    },
  },

  [theme.breakpoints.up("md")]: {
    margin: "14px 14px",
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

const CartTaxt = styled(Typography)(({ theme }) => ({
  color: "primary.main",
  fontWeight: "400",
  lineHeight: "26px",
  fontSize: "14px",

  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
  },
}));

export const CartComp = ({ cartId }) => {
  const Icon = cartsData[cartId].icon;

  return (
    <CartBox>
      <CircleContainer>
        <Icon color="secondary" fontSize="large" />
      </CircleContainer>

      <CartTaxt>
        <Translate text={cartsData[cartId].text} />
      </CartTaxt>
    </CartBox>
  );
};
