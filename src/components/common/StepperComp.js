import React from "react";
import { Box, styled } from "@mui/material";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const RangeBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "4px",
  background: "#E5E8EB",
  borderRadius: "2px",
}));

export const StepperComp = ({ active }) => {
  const widthStep = 4 + (active * 96) / 5.2;

  return (
    <Box marginBottom={5}>
      <Box
        sx={{
          display: "flex",
          marginBottom: "12px",
          justifyContent: "space-between",
          color: "#E5E8EB",
        }}
      >
        <WcOutlinedIcon
          sx={{
            color:
              active === 0 ? "#F76448" : active > 0 ? "#FFDC22" : "#E5E8EB",
          }}
        />
        <CakeOutlinedIcon
          sx={{
            color:
              active === 1 ? "#F76448" : active > 1 ? "#FFDC22" : "#E5E8EB",
          }}
        />
        <FmdGoodOutlinedIcon
          sx={{
            color:
              active === 2 ? "#F76448" : active > 2 ? "#FFDC22" : "#E5E8EB",
          }}
        />
        <PersonOutlineOutlinedIcon
          sx={{
            color:
              active === 3 ? "#F76448" : active > 3 ? "#FFDC22" : "#E5E8EB",
          }}
        />
        <LockOutlinedIcon
          sx={{
            color:
              active === 4 ? "#F76448" : active > 4 ? "#FFDC22" : "#E5E8EB",
          }}
        />
        <EmailOutlinedIcon
          sx={{
            color:
              active === 5 ? "#F76448" : active > 5 ? "#FFDC22" : "#E5E8EB",
          }}
        />
      </Box>

      <RangeBox>
        <Box
          width={`${widthStep}%`}
          height="4px"
          sx={{ background: "#FFDC22" }}
        />
      </RangeBox>
    </Box>
  );
};
