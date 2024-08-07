import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.js/counterSlice";
import authSlicereducers from "./auth/authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlicereducers,
  },
});

export default store;
