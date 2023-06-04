import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Input } from "../common/Input";
import { ButtonComp } from "../common/ButtonComp";
import axios from "axios";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { addErrorMessage } from "../../features/errorMessageSlice";

import { next } from "../../features/activeStepSlice";

export const Username = () => {
  const [username, setUsername] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData?.value);
  const errorMessage = useSelector((state) => state.errorMessage?.value);

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9_]{0,12}$/;
    if (regex.test(value)) {
      setUsername(value);
    }
  };

  const fetchData = async () => {
    dispatch(addField({ username: username }));

    try {
      const response = await axios.post(
        `${apiUrl}/start`,
        { username: userData.username },
        {
          params: {
            site_key: "no01",
          },
        }
      );
      if (response?.data.Status === "ok") {
        console.log(22222222, response?.data);
        localStorage.setItem("uid", response?.data.Data);
        dispatch(next());
        dispatch(addErrorMessage(""));
      }
    } catch (error) {
      console.log(111111111, error?.response?.data);
      if (error?.response?.data.Status === "fail") {
        dispatch(addErrorMessage(error?.response?.data?.Error?.message));
        localStorage.removeItem("uid");
      }
    }
  };

  const handleNext = () => {
    console.log("next_________");
    fetchData();
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

      <ButtonComp
        onClick={handleNext}
        text="Next"
        // disabled={false}
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
