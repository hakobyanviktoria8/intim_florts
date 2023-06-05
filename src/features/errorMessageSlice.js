import { createSlice } from "@reduxjs/toolkit";

export const errorMessageSlice = createSlice({
  name: "errorMessage",
  initialState: {
    value: "",
  },
  reducers: {
    addErrorMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addErrorMessage } = errorMessageSlice.actions;

export default errorMessageSlice.reducer;
