import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { generateOptions, generateYearOptions } from "../../helpers/DateUtils";
import { FormControlComp } from "../common/FormControlComp";
import { ButtonNext } from "../common/ButtonNext";
import { ErrorMessage } from "../common/ErrorMessage";

import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { next, back } from "../../features/activeStepSlice";
import { addErrorMessage } from "../../features/errorMessageSlice";
import { ButtonBack } from "../common/ButtonBack";

const AgeDataBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const Age = () => {
  const [ageData, setAgeData] = useState({ day: "", month: "", year: "" });
  const { day, month, year } = ageData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const errorMessage = useSelector((state) => state.errorMessage?.value);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (day && month && year) {
      try {
        const formattedDob = `${year}-${month}-${day}`;
        dispatch(addField({ DOB: formattedDob }));
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
  console.log(2, { day, month, year, errorMessage });
  return (
    <Box>
      <Typography variant="subtitle3" marginBottom={1} component="h2">
        Your age
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        You must be at least 18 years old to use Intim Flort
      </Typography>

      <AgeDataBox>
        <FormControlComp
          value={ageData.day}
          handleChange={handleChange}
          label="Day"
          name="day"
          getOption={generateOptions(31)}
          labelId="day-label"
          id="day-select"
        />
        <FormControlComp
          value={ageData.month}
          handleChange={handleChange}
          label="Month"
          name="month"
          getOption={generateOptions(12)}
          labelId="month-label"
          id="month-select"
        />
        <FormControlComp
          value={ageData.year}
          handleChange={handleChange}
          label="Year"
          name="year"
          getOption={generateYearOptions()}
          labelId="year-label"
          id="year-select"
        />
      </AgeDataBox>

      {errorMessage && <ErrorMessage />}

      <ButtonNext
        onClick={handleNext}
        text="Next"
        disabled={!day || !month || !year}
      />

      <ButtonBack onClick={handleBack} />
    </Box>
  );
};
