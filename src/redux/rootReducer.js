import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authSlicereducer from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlicereducer,
  counter: counterReducer,
});

export default rootReducer;
