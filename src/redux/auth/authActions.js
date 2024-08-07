import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth";

const loginUser = createAsyncThunk("auth/login", async (data) => {
  const response = await login(data);

  return response.data;
});

export { loginUser };
