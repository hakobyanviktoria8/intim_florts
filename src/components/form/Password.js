import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Input } from "../common/Input";

export const Password = ({ handleFormChange }) => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9_]{0,16}$/;

    if (regex.test(value)) {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (password !== "" && password.length > 5) {
      handleFormChange("password", password);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return (
    <Box className="userBox">
      <Typography variant="subtitle3" marginBottom={2} component="h2">
        Create a password
      </Typography>

      <Input
        value={password}
        handleChange={handleChange}
        placeholder="Password"
        type="password"
      />
    </Box>
  );
};
