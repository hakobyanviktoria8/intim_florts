import React from "react";
import { Box, styled } from "@mui/material";
import { CartComp } from "./CartComp";
import { useWindowResize } from "../../hooks/useWindowResize";

const CartsWrapperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "48px",
  flexWrap: "wrap",
  justifyContent: "space-around",
  marginBottom: "0",

  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },

  [theme.breakpoints.up("lg")]: {
    marginTop: "100px",
  },
}));

export const CartsWrapper = () => {
  const largeScreenCartsBox = [0, 1, 2, 3];
  const smallScreenCartsBox = [0, 2, 1, 3];
  const size = useWindowResize();

  return (
    <CartsWrapperBox>
      {(size > 841 ? largeScreenCartsBox : smallScreenCartsBox).map((idx) => (
        <CartComp cartId={idx} key={idx} />
      ))}
    </CartsWrapperBox>
  );
};
