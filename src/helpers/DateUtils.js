import { MenuItem } from "@mui/material";

export const generateOptions = (num) => {
  const options = [];
  for (let i = 1; i <= num; i++) {
    const paddedDay = i.toString().padStart(2, "0");
    options.push(
      <MenuItem key={i} value={paddedDay}>
        {paddedDay}
      </MenuItem>
    );
  }
  return options;
};

export const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 80;
  const options = [];
  for (let year = currentYear - 18; year >= startYear; year--) {
    options.push(
      <MenuItem key={year} value={year}>
        {year}
      </MenuItem>
    );
  }
  return options;
};
