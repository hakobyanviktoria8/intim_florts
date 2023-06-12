import React from "react";
import { Box, styled, Typography } from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Translate } from "react-translated";

const CartsWrapperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "48px",

  [theme.breakpoints.up("sm")]: {
    marginBottom: "0",
  },

  [theme.breakpoints.up("lg")]: {
    marginTop: "100px",
  },
}));

const CartsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

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

const CartTaxt = styled(Typography)(({ theme }) => ({
  color: "primary.main",
  fontWeight: "400",
  lineHeight: "26px",
  fontSize: "14px",

  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
  },
}));

export const CartsWrapper = () => {
  return (
    <CartsWrapperBox>
      <CartsBox>
        <CartBox>
          <CircleContainer>
            <ChatOutlinedIcon color="secondary" fontSize="large" />
          </CircleContainer>
          <CartTaxt>
            <Translate text="exchange" />
          </CartTaxt>
        </CartBox>

        <CartBox>
          <CircleContainer>
            <PersonOutlineIcon color="secondary" fontSize="large" />
          </CircleContainer>
          <CartTaxt>
            <Translate text="singles" />
          </CartTaxt>
        </CartBox>
      </CartsBox>
      <CartsBox>
        <CartBox>
          <CircleContainer>
            <SavedSearchIcon color="secondary" fontSize="large" />
          </CircleContainer>
          <CartTaxt>
            <Translate text="search tool" />
          </CartTaxt>
        </CartBox>

        <CartBox>
          <CircleContainer>
            <CalendarMonthOutlinedIcon color="secondary" fontSize="large" />
          </CircleContainer>
          <CartTaxt>
            <Translate text="events" />
          </CartTaxt>
        </CartBox>
      </CartsBox>
    </CartsWrapperBox>
  );
};
