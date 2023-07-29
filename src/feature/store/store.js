import { configureStore } from "@reduxjs/toolkit";
import schemesReducer from "../slices/curriculumSlice";

export const store = configureStore({
  // reducer control the state in the slice
  reducer: {
    // calling it product Reducer
    schemes: schemesReducer,
  },
});
