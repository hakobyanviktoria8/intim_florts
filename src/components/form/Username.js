import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Input } from "../common/Input";
import { ButtonComp } from "../common/ButtonComp";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";

import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { addErrorMessage } from "../../features/errorMessageSlice";
import { next } from "../../features/activeStepSlice";
import { ErrorMessage } from "../common/ErrorMessage";

export const Username = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage?.value);

  const regex = /^[a-zA-Z0-9_]{0,12}$/;
  const debouncedUsername = useDebounce(username, 500, regex);

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${apiUrl}/start`,
        { username: debouncedUsername },
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
    if (debouncedUsername) {
      dispatch(addField({ username: debouncedUsername }));
      fetchData();
    }
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

      {errorMessage && <ErrorMessage />}

      <ButtonComp
        onClick={handleNext}
        text={
          isLoading ? <CircularProgress size={20} color="primary" /> : "Next"
        }
        disabled={!username || !!errorMessage || isLoading}
        sx={{
          mt: 3,
          mb: 2,
          background: "#F76448",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "rgba(247, 100, 72, 0.9)",
          },
        }}
      />
    </Box>
  );
};
