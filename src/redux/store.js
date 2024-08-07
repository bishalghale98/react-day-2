import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authSlicereducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlicereducer,
  },
});

export default store;
