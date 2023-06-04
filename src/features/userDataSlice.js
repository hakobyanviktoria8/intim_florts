import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    value: {},
  },
  reducers: {
    addField: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { addField } = userDataSlice.actions;

export default userDataSlice.reducer;
