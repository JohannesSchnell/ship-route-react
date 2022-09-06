import { createSlice } from "@reduxjs/toolkit";

export const indexState = createSlice({
  name: "index",
  initialState: {
    //half data.length value
    value: 1300,
  },
  reducers: {
    updateState: (state, action) => {
      state.value = action.payload;
    },
    incState: (state) => {
      state.value += 1;
    },
    decState: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateState, incState, decState } = indexState.actions;

export default indexState.reducer;
