import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Input } from "../common/Input";
import { ErrorMessage } from "../common/ErrorMessage";
import { ButtonNext } from "../common/ButtonNext";
import { ButtonBack } from "../common/ButtonBack";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { addErrorMessage } from "../../features/errorMessageSlice";
import { next, back } from "../../features/activeStepSlice";

export const Username = () => {
  const userData = useSelector((state) => state.userData?.value);
  const [username, setUsername] = useState(userData.username || "");
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage?.value);

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9_]{0,12}$/;

    if (regex.test(value)) {
      setUsername(value);
    }
    dispatch(addErrorMessage(""));
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${apiUrl}/start`,
        { username: username },
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
    if (username) {
      dispatch(addField({ username: username }));
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
        Create a username
      </Typography>

      <Input
        value={username}
        handleChange={handleChange}
        placeholder="User name"
        type="text"
      />

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <ButtonNext
        onClick={handleNext}
        text={
          isLoading ? <CircularProgress size={20} color="primary" /> : "Next"
        }
        disabled={!username || isLoading || !!errorMessage}
      />

      <ButtonBack onClick={handleBack} />
    </Box>
  );
};
