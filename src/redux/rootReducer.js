import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authSlicereducer from "./auth/authSlice";
import productReducer from "./product/productSlice";

const rootReducer = combineReducers({
  auth: authSlicereducer,
  counter: counterReducer,
  product: productReducer,
});

export default rootReducer;
