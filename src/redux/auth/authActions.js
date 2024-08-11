import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signUp } from "../../api/auth";

const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);

      const authToken = response.data.token;

      localStorage.setItem("authToken", authToken); // save user token to local storage

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signUp(data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { loginUser, registerUser };
