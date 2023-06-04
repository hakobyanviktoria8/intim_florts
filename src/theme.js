import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212B36",
      light: "#B2B3B5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F76448",
      light: "#FFDC22",
      contrastText: "#2EC876",
    },
  },

  typography: {
    subtitle1: {
      fontSize: "50px",
      color: "#212B36",
      fontWeight: "600",
      lineHeight: "26px",
    },
    subtitle3: {
      fontSize: "18px",
      color: "#212B36",
      fontWeight: "600",
      lineHeight: "26px",
    },
    body1: {
      fontSize: "18px",
      color: "#212B36",
      fontWeight: "400",
      lineHeight: "26px",
    },
    body2: {
      fontSize: "16px",
      color: "#B2B3B5",
      fontWeight: "400",
      lineHeight: "24px",
    },
    body3: {
      fontSize: "14px",
      color: "#B2B3B5",
      fontWeight: "400",
      lineHeight: "26px",
    },
    body4: {
      fontSize: "14px",
      color: "#212B36",
      fontWeight: "400",
      lineHeight: "26px",
    },
  },
});

export default theme;
