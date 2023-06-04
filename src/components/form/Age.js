import React, { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import { generateOptions, generateYearOptions } from "../../helpers/DateUtils";
import { FormControlComp } from "../common/FormControlComp";

const AgeDataBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const Age = ({ handleFormChange }) => {
  const [ageData, setAgeData] = useState({ day: "", month: "", year: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { day, month, year } = ageData;
    if (day && month && year) {
      const formattedDob = `${year}-${month}-${day}`;
      handleFormChange("DOB", formattedDob);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ageData]);

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
    </Box>
  );
};
