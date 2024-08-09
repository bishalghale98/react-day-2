import { createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from "../../api/product";

const getProductList = createAsyncThunk(
  "product/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getList();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

getList;

export { getProductList };
