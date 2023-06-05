import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { Paper, styled } from "@mui/material";
import { Logo } from "../common/Logo";
import { StepperComp } from "../common/StepperComp";
import { Username } from "./Username";
import { Age } from "./Age";
import { Gender } from "./Gender";
import { Email } from "./Email";
import { Location } from "./Location";
import { Password } from "./Password";
import { FinishedSuccess } from "./FinishedSuccess";

const FormCompPaper = styled(Paper)(({ theme }) => ({
  width: "340px",
  borderRadius: "12px",
  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
  padding: "24px 16px",
  background: "#fff",
  margin: "0 auto",

  [theme.breakpoints.up("sm")]: {
    width: "500px",
    padding: "28px 40px",
  },

  [theme.breakpoints.up("lg")]: {
    width: "712px",
    padding: "32px 99px",
  },
}));

export const FormComp = () => {
  const activeStep = useSelector((state) => state.activeStep.value);
  const steps = 6;
  const stepsCompArr = [
    <Gender />,
    <Age />,
    <Location />,
    <Username />,
    <Password />,
    <Email />,
    <FinishedSuccess />,
  ];

  return (
    <Box>
      <FormCompPaper>
        <Logo />

        {activeStep < steps && <StepperComp active={activeStep} />}

        {stepsCompArr[activeStep]}
      </FormCompPaper>
    </Box>
  );
};
