import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Input } from "../common/Input";
import { ButtonNext } from "../common/ButtonNext";
import { ButtonBack } from "../common/ButtonBack";
import { ErrorMessage } from "../common/ErrorMessage";

import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { addErrorMessage } from "../../features/errorMessageSlice";
import { next, back } from "../../features/activeStepSlice";

export const Password = () => {
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage?.value);

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9_]{0,16}$/;

    if (regex.test(value)) {
      setPassword(value);
    }
    dispatch(addErrorMessage(""));
  };

  const handleNext = () => {
    if (password && password.length > 5) {
      try {
        dispatch(addField({ password: password }));
        dispatch(next());
        dispatch(addErrorMessage(""));
      } catch (error) {
        dispatch(addErrorMessage(error?.response?.data?.Error?.message));
      }
    }
  };

  const handleBack = () => {
    dispatch(back());
    dispatch(addErrorMessage(""));
  };

  return (
    <Box className="userBox">
      <Typography variant="subtitle3" marginBottom={2} component="h2">
        Create a password
      </Typography>

      <Input
        value={password}
        handleChange={handleChange}
        placeholder="Password"
        type="password"
      />

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <ButtonNext
        onClick={handleNext}
        text="Next"
        disabled={!password || !!errorMessage}
      />

      <ButtonBack onClick={handleBack} />
    </Box>
  );
};
