import React from "react";
import backgroundImage from "./../images/bg-main.png";
import { styled, Box } from "@mui/material";
import { CartsWrapper } from "./cart/CartsWrapper";
import { FormComp } from "./form/FormComp";

const MainContentBox = styled(Box)(({ theme }) => ({
  background: "#F5F5F5",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  minHeight: "50vh",
  padding: "80px 16px 48px",
  maxWidth: "100%",

  [theme.breakpoints.up("sm")]: {
    padding: "60px",
    justifyContent: "space-between",
  },
}));

export const MainContent = () => {
  return (
    <MainContentBox component="main">
      <FormComp />
      <CartsWrapper />
    </MainContentBox>
  );
};
