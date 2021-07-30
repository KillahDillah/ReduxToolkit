import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    counter: counterReducer, // tells store to use this slice reducer to handle all updates to this state
  },
});
