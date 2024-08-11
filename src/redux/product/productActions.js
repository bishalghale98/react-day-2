import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getById,
  getCategories,
  getList,
} from "../../api/product";

const getProductList = createAsyncThunk(
  "product/list",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getList(query ?? {});

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getProductById = createAsyncThunk(
  "product/id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getById(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

getList;

const getProductByCategories = createAsyncThunk(
  "product/categories",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCategories();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const addNewProduct = createAsyncThunk(
  "product/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addProduct(data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const deleteProductById = createAsyncThunk(
  "product/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteProduct(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export {
  getProductList,
  getProductById,
  getProductByCategories,
  addNewProduct,
  deleteProductById,
};
