import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { ButtonComp } from "../common/ButtonComp";

export const Gender = ({ handleFormChange }) => {
  const [gender, setGender] = useState("");
  const [looking, setLooking] = useState("");
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

  useEffect(() => {
    if (gender !== "" && looking !== "") {
      handleFormChange("gender", gender);
      handleFormChange("looking_for", looking);
    }
    // handleLookingFor();
    // if (lookingFor !== "") {
    //   handleFormChange("looking_for", lookingFor);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender, looking]);

  return (
    <Box>
      <Box>
        <Typography variant="subtitle3" marginBottom={2} component="h2">
          Your gender
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <ButtonComp
            sx={{
              border: "1px solid #B2B3B5",
              color: "primary.light",
              marginBottom: "16px",
            }}
            onClick={() => setGender("Female")}
            text="Female"
          />

          <ButtonComp
            sx={{
              border: "1px solid #F76448",
              color: "secondary.main",
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
              border: "1px solid #B2B3B5",
              color: "primary.light",
              marginBottom: "16px",
            }}
            onClick={() => setLooking("Female")}
            text="Female"
          />

          <ButtonComp
            sx={{
              border: "1px solid #B2B3B5",
              color: "primary.light",
              marginBottom: "16px",
            }}
            onClick={() => setLooking("Male")}
            text="Mail"
          />
        </Box>
      </Box>
    </Box>
  );
};
