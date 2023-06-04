import React from "react";
import { CartComp } from "./CartComp";
import { Box, styled } from "@mui/material";
import { cartsData } from "../../dataUiPart.js/cartsData";

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

export const CartsWrapper = () => {
  return (
    <CartsWrapperBox>
      <CartsBox>
        <CartComp
          key={cartsData[0].id}
          Icon={cartsData[0].icon}
          text={cartsData[0].text}
        />
        <CartComp
          key={cartsData[1].id}
          Icon={cartsData[1].icon}
          text={cartsData[1].text}
        />
      </CartsBox>
      <CartsBox>
        <CartComp
          key={cartsData[2].id}
          Icon={cartsData[2].icon}
          text={cartsData[2].text}
        />
        <CartComp
          key={cartsData[3].id}
          Icon={cartsData[3].icon}
          text={cartsData[3].text}
        />
      </CartsBox>
    </CartsWrapperBox>
  );
};
