import React, { useState, useEffect } from "react";
import { Box, InputBase, Typography, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { ButtonNext } from "../common/ButtonNext";
import { ButtonBack } from "../common/ButtonBack";
import axios from "axios";
import { Translate, Translator } from "react-translated";

import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../features/userDataSlice";
import { next, back } from "../../features/activeStepSlice";

const SearchBox = styled(Box)(() => ({
  position: "relative",
  borderRadius: "16px",
  width: "100%",
  border: "1px solid #F76448",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
  height: "48px",
}));

const LocationBox = styled(Box)(() => ({
  position: "absolute",
  background: "white",
  width: "100%",
  zIndex: "10",
  maxHeight: "250px",
  overflowY: "auto",
  borderRadius: "10px",
  boxShadow: "0  0 4px #cacaca",

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#cacaca",
    border: "4px solid transparent",
    borderRadius: "8px",
    backgroundClip: "padding-box",
  },

  "&::-webkit-scrollbar": {
    width: "16px",
  },
}));

export const Location = () => {
  const userData = useSelector((state) => state.userData?.value);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [searchVal, setSearchVal] = useState("");
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState(userData.location || "");

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchVal(value);
    setLocation("");
  };

  const handleLocationSelect = (item) => {
    setLocation(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/locations`, {
          params: {
            search: searchVal,
            skip: 0,
            limit: 10,
            site_key: "no01",
          },
        });
        setLocations(response?.data?.Data);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchVal !== "") {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal]);

  const handleNext = () => {
    if (location) {
      dispatch(addField({ location: location }));
      dispatch(next());
    }
  };

  const handleBack = () => {
    dispatch(back());
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Typography variant="subtitle3" marginBottom={1} component="h2">
        <Translate text="location" />
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        <Translate text="search location" />
      </Typography>

      <SearchBox>
        <Translator>
          {({ translate }) => (
            <InputBase
              placeholder={translate({
                text: "placeholder",
              })}
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearchChange}
              sx={{ width: "100%", fontSize: "16px" }}
              value={location || searchVal}
            />
          )}
        </Translator>
        <SearchIcon sx={{ color: "secondary.main", fontSize: "22px" }} />
      </SearchBox>

      {!location && searchVal && (
        <LocationBox>
          {locations.map((item) => (
            <MenuItem
              sx={{
                fontSize: "16px",
                lineHeight: "20px",
              }}
              key={item}
              onClick={() => handleLocationSelect(item)}
            >
              {item}
            </MenuItem>
          ))}
        </LocationBox>
      )}

      <ButtonNext onClick={handleNext} text="Next" disabled={!location} />

      <ButtonBack onClick={handleBack} />
    </Box>
  );
};
