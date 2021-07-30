import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated.
  // Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
  name: "counter",
  intialState: {
    value: 0,
  },
  reducer: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
