import { createSlice } from "@reduxjs/toolkit";
//import { dataLength } from "../index.js";

export const indexState = createSlice({
  name: "index",
  initialState: {
    value: 1300,
  },
  reducers: {
    updateState: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateState } = indexState.actions;

export default indexState.reducer;
