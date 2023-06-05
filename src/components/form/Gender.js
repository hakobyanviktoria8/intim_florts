import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ButtonComp } from "../common/ButtonComp";
import { ButtonNext } from "../common/ButtonNext";
import { HaveAccount } from "../common/HaveAccount";

import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { next } from "../../features/activeStepSlice";

export const Gender = () => {
  const userData = useSelector((state) => state.userData?.value);
  const [gender, setGender] = useState(userData.gender || "Male");
  const [looking, setLooking] = useState(userData.looking_for || "");

  const dispatch = useDispatch();

  // const [lookingFor, setLookingFor] = useState("");
  // const handleLookingFor = () => {
  //   if (gender === "Female" && looking === "Male") {
  //     setLookingFor("Female_looking_for_male");
  //   } else if (gender === "Female" && looking === "Female") {
  //     setLookingFor("Female_looking_for_female");
  //   } else if (gender === "Male" && looking === "Female") {
  //     setLookingFor("Male_looking_for_female");
  //   } else if (gender === "Male" && looking === "Male") {
  //     setLookingFor("Male_looking_for_male");
  //   }
  // };

  const handleNext = () => {
    if (gender) {
      dispatch(addField({ gender: gender }));
    }
    if (looking) {
      dispatch(addField({ looking_for: looking }));
    }
    if (gender && looking) {
      dispatch(next());
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="subtitle3" marginBottom={2} component="h2">
          Your gender
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <ButtonComp
            sx={{
              border: `1px solid ${
                gender === "Female" ? "#F76448" : "#B2B3B5"
              }`,
              color: gender === "Female" ? "secondary.main" : "primary.light",
              marginBottom: "16px",
            }}
            onClick={() => setGender("Female")}
            text="Female"
          />

          <ButtonComp
            sx={{
              border: `1px solid ${gender === "Male" ? "#F76448" : "#B2B3B5"}`,
              color: gender === "Male" ? "secondary.main" : "primary.light",
              marginBottom: "16px",
            }}
            onClick={() => setGender("Male")}
            text="Male"
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle3" marginBottom={2} component="h2" mt={3}>
          You are interested in
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <ButtonComp
            sx={{
              border: `1px solid ${
                looking === "Female" ? "#F76448" : "#B2B3B5"
              }`,
              color: looking === "Female" ? "secondary.main" : "primary.light",
              marginBottom: "16px",
            }}
            onClick={() => setLooking("Female")}
            text="Female"
          />

          <ButtonComp
            sx={{
              border: `1px solid ${looking === "Male" ? "#F76448" : "#B2B3B5"}`,
              color: looking === "Male" ? "secondary.main" : "primary.light",
              marginBottom: "16px",
            }}
            onClick={() => setLooking("Male")}
            text="Male"
          />
        </Box>
      </Box>

      <ButtonNext
        onClick={handleNext}
        text="Next"
        disabled={!gender || !looking}
      />

      <HaveAccount />
    </Box>
  );
};
