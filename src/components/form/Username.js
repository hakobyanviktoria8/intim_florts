import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Input } from "../common/Input";
import { ErrorMessage } from "../common/ErrorMessage";
import { ButtonNext } from "../common/ButtonNext";
import { ButtonBack } from "../common/ButtonBack";
import axios from "axios";
import { Translate } from "react-translated";

import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { addErrorMessage } from "../../features/errorMessageSlice";
import { next, back } from "../../features/activeStepSlice";
import { useDebounce } from "../../hooks/useDebounce";

export const Username = () => {
  const userData = useSelector((state) => state.userData?.value);
  const [username, setUsername] = useState(userData.username || "");
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage?.value);
  const regex = /^[a-zA-Z0-9_]{0,12}$/;
  const message = "usernameErrMessFE";
  const useDebounceValue = useDebounce(username, 500, regex, message);

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    dispatch(addErrorMessage(""));
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${apiUrl}/start`,
        { username: useDebounceValue },
        {
          params: {
            site_key: "no01",
          },
        }
      );
      if (response?.data.Status === "ok") {
        localStorage.setItem("uid", response?.data.Data);
        dispatch(next());
        dispatch(addErrorMessage(""));
      }
    } catch (error) {
      if (error?.response?.data.Status === "fail") {
        dispatch(addErrorMessage(error?.response?.data?.Error?.message));
        localStorage.removeItem("uid");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (useDebounceValue) {
      dispatch(addField({ username: useDebounceValue }));
      fetchData();
    }
  };

  const handleBack = () => {
    dispatch(back());
    dispatch(addErrorMessage(""));
  };

  return (
    <Box className="userBox">
      <Typography variant="subtitle3" marginBottom={2} component="h2">
        <Translate text="username" />
      </Typography>

      <Input
        value={username}
        handleChange={handleChange}
        placeholder="username value"
        type="text"
      />

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <ButtonNext
        onClick={handleNext}
        text="Next"
        style={{ cursor: !isLoading ? "pointer" : "no-drop" }}
        disabled={!useDebounceValue || isLoading || !!errorMessage}
      />

      <ButtonBack onClick={handleBack} />
    </Box>
  );
};
