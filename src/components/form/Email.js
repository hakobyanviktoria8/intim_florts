import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import { Input } from "../common/Input";
import { ButtonNext } from "../common/ButtonNext";
import { ButtonBack } from "../common/ButtonBack";
import { ErrorMessage } from "../common/ErrorMessage";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { addErrorMessage } from "../../features/errorMessageSlice";
import { next, back } from "../../features/activeStepSlice";

export const Email = () => {
  const userData = useSelector((state) => state.userData?.value);
  const [email, setEmail] = useState(userData.email || "");
  const [checkboxes, setCheckboxes] = useState({
    years: false,
    read: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const storedUid = localStorage.getItem("uid");

  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage?.value);

  const handleChange = (e) => {
    setEmail(e.target.value);
    dispatch(addErrorMessage(""));
  };

  const handleCheckboxChange = (name) => (e) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: e.target.checked,
    }));
  };

  const fetchCompleteData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${apiUrl}/${storedUid}`,
        {
          email: email,
          DOB: `${userData.year}-${userData.month}-${userData.day}`,
          location: userData.location,
          gender: userData.gender,
          password: userData.password,
          looking_for: userData.looking_for,
        },
        {
          params: {
            site_key: "no01",
          },
        }
      );
      if (response?.data.Status === "ok") {
        dispatch(next());
        dispatch(addErrorMessage(""));
      }
    } catch (error) {
      if (error?.response?.data.Status === "fail") {
        dispatch(addErrorMessage(error?.response?.data?.Error?.message));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (email && checkboxes.years && checkboxes.read) {
      dispatch(addField({ email: email }));
      fetchCompleteData();
    }
  };

  const handleBack = () => {
    dispatch(back());
    dispatch(addErrorMessage(""));
  };

  return (
    <Box className="userBox">
      <Typography variant="subtitle3" marginBottom={2} component="h2">
        Add email address
      </Typography>
      <Input
        value={email}
        handleChange={handleChange}
        placeholder="Email"
        type="email"
      />

      <FormGroup sx={{ marginTop: "16px" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxes.years}
              onChange={handleCheckboxChange("years")}
              sx={{
                "&.Mui-checked": {
                  color: "secondary.contrastText",
                },
              }}
            />
          }
          label={<Typography variant="body4">18 years old</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxes.read}
              onChange={handleCheckboxChange("read")}
              sx={{
                "&.Mui-checked": {
                  color: "secondary.contrastText",
                },
              }}
            />
          }
          label={
            <Typography variant="body4">
              I have read and accept the{" "}
              <Link
                sx={{ color: "secondary.contrastText", textDecoration: "none" }}
              >
                Terms of Service
              </Link>{" "}
              and our{" "}
              <Link
                sx={{ color: "secondary.contrastText", textDecoration: "none" }}
              >
                Privacy Statement.
              </Link>
            </Typography>
          }
        />
      </FormGroup>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <ButtonNext
        onClick={handleNext}
        text={
          isLoading ? (
            <CircularProgress size={20} color="primary" />
          ) : (
            "Complete"
          )
        }
        disabled={
          !email || !checkboxes.years || !checkboxes.read || !!errorMessage
        }
      />

      <ButtonBack onClick={handleBack} />
    </Box>
  );
};
