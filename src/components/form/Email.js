import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Link,
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
import { Translate } from "react-translated";
import { useDebounce } from "../../hooks/useDebounce";
import { ModalComp } from "../common/ModalComp";

export const Email = () => {
  const userData = useSelector((state) => state.userData?.value);
  const [email, setEmail] = useState(userData.email || "");
  const [checkboxes, setCheckboxes] = useState({
    years: false,
    read: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;
  const storedUid = localStorage.getItem("uid");

  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage?.value);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const message = "emailErrMessFE";
  const useDebounceValue = useDebounce(email, 500, regex, message);

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
          email: useDebounceValue,
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
    if (useDebounceValue && checkboxes.years && checkboxes.read && email) {
      dispatch(addField({ email: useDebounceValue }));
      fetchCompleteData();
    }
  };

  const handleBack = () => {
    dispatch(back());
    dispatch(addErrorMessage(""));
  };

  const handleOpenModal = (type) => {
    setModalOpen(true);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  return (
    <Box className="userBox">
      <Typography variant="subtitle3" marginBottom={2} component="h2">
        <Translate text="email" />
      </Typography>
      <Input
        value={email}
        handleChange={handleChange}
        placeholder="email value"
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
          label={
            <Typography variant="body4">
              <Translate text="years old" />
            </Typography>
          }
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
              <Translate text="read and accept" />{" "}
              <Link
                sx={{ color: "secondary.contrastText", textDecoration: "none" }}
                onClick={() => handleOpenModal("terms")}
              >
                <Translate text="terms of service" />
              </Link>{" "}
              <Translate text="and our" />{" "}
              <Link
                sx={{ color: "secondary.contrastText", textDecoration: "none" }}
                onClick={() => handleOpenModal("privacy")}
              >
                <Translate text="privacy statement" />
              </Link>
            </Typography>
          }
        />
      </FormGroup>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <ModalComp
        open={modalOpen}
        handleClose={handleCloseModal}
        type={modalType}
      />

      <ButtonNext
        onClick={handleNext}
        text="Complete"
        style={{ cursor: !isLoading ? "pointer" : "no-drop" }}
        disabled={
          !useDebounceValue ||
          !checkboxes.years ||
          !checkboxes.read ||
          isLoading ||
          !email
        }
      />

      <ButtonBack onClick={handleBack} />
    </Box>
  );
};
