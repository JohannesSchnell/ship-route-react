import { configureStore } from "@reduxjs/toolkit";
import indexStateReducer from "./indexSlice";

export default configureStore({
  reducer: {
    index: indexStateReducer,
  },
});
