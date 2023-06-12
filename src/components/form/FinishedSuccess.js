import { Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import { Translate } from "react-translated";

export const FinishedSuccess = () => {
  const userData = useSelector((state) => state.userData?.value);

  return (
    <>
      <Typography variant="h5" gutterBottom textAlign="center">
        <Translate text="thank you" />
      </Typography>
      <Typography variant="h6" textAlign="center">
        <Translate text="welcome" /> {userData.username}
      </Typography>
    </>
  );
};
