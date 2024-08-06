import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.js/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
