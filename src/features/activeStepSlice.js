import { createSlice } from "@reduxjs/toolkit";

export const activeStepSlice = createSlice({
  name: "activeStep",
  initialState: {
    value: 0,
  },
  reducers: {
    next: (state) => {
      state.value += 1;
    },
    back: (state) => {
      state.value -= 1;
    },
  },
});

export const { next, back } = activeStepSlice.actions;

export default activeStepSlice.reducer;
