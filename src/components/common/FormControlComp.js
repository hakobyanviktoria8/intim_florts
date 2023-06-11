import { FormControl, InputLabel, Select, styled } from "@mui/material";
import React from "react";
import { Translate } from "react-translated";

const FormControlBox = styled(FormControl)(({ theme }) => ({
  border: "1px solid #F76448",
  color: "primary.light",
  borderRadius: "16px",
  marginBottom: "16px",
  outline: "none",
  height: "48px",

  [theme.breakpoints.up("sm")]: {
    width: "30%",
  },
}));

export const FormControlComp = ({
  value,
  handleChange,
  label,
  name,
  getOption,
  labelId,
  id,
}) => {
  return (
    <FormControlBox fullWidth className="formControlBox">
      <InputLabel id={id} sx={{ p: 0 }}>
        <Translate text={label} />
      </InputLabel>
      <Select
        sx={{ padding: "0 12px" }}
        name={name}
        value={value}
        label={<Translate text={label} />}
        onChange={handleChange}
        labelId={labelId}
        id={id}
      >
        {getOption}
      </Select>
    </FormControlBox>
  );
};
