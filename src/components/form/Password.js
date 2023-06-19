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
import { Translate } from "react-translated";
import { useDebounce } from "../../hooks/useDebounce";

export const Password = () => {
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage?.value);
  const regex = /^(?=.*\d).{6,16}$/;
  const message = "passErrMessFE";
  const useDebounceValue = useDebounce(password, 500, regex, message);

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    dispatch(addErrorMessage(""));
  };

  const handleNext = () => {
    if (useDebounceValue) {
      try {
        dispatch(addField({ password: useDebounceValue }));
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
        <Translate text="password" />
      </Typography>

      <Input
        value={password}
        handleChange={handleChange}
        placeholder="password value"
        type="password"
      />

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <ButtonNext
        onClick={handleNext}
        text="Next"
        disabled={!useDebounceValue}
      />

      <ButtonBack onClick={handleBack} />
    </Box>
  );
};
