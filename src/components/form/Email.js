import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Link,
} from "@mui/material";
import { Input } from "../common/Input";

export const Email = ({ handleFormChange }) => {
  const [email, setEmail] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    years: false,
    read: false,
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (name) => (e) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: e.target.checked,
    }));
  };

  useEffect(() => {
    if (email !== "" && checkboxes.years && checkboxes.read) {
      handleFormChange("email", email);
      handleFormChange("checkboxes", checkboxes.years && checkboxes.read);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, checkboxes]);

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
    </Box>
  );
};
