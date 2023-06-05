import { Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

export const FinishedSuccess = () => {
  const userData = useSelector((state) => state.userData?.value);

  return (
    <>
      <Typography variant="h5" gutterBottom textAlign="center">
        Thank you.
      </Typography>
      <Typography variant="h6" textAlign="center">
        Welcome {userData.username}
      </Typography>
    </>
  );
};
