import { configureStore } from "@reduxjs/toolkit";
import activeStepReducer from "./features/activeStepSlice";
import userDataReducer from "./features/userDataSlice";
import errorMessageReducer from "./features/errorMessageSlice";

export default configureStore({
  reducer: {
    activeStep: activeStepReducer,
    userData: userDataReducer,
    errorMessage: errorMessageReducer,
  },
});
