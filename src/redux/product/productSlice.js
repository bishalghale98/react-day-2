import { createSlice } from "@reduxjs/toolkit";
import {
  addNewProduct,
  deleteProductById,
  getProductByCategories,
  getProductById,
  getProductList,
} from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    loading: false,
    error: {},
    query: null,
    add: {
      loading: false,
      error: null,
      success: false,
    },
    delete: {
      loading: false,
      success: false,
    },
    // default order by descending
    // default sort by date
  },
  reducers: {
    setLimit: (state, action) => {
      state.query = { ...state.query, limit: action.payload };
    },
    setSort: (state, action) => {
      state.query = { ...state.query, sort: action.payload };
    },
    setFilters: (state, action) => {
      state.query = { ...state.query, filters: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.add.success = false;
        state.delete.success = false;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.products = [action.payload];
        state.loading = false;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductByCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductByCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getProductByCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.error = null;
        state.add.loading = true;
      })
      .addCase(addNewProduct.fulfilled, (state) => {
        state.add.loading = false;
        state.add.success = true;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.add.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProductById.pending, (state) => {
        state.delete.loading = true;
        state.error = null;
      })
      .addCase(deleteProductById.fulfilled, (state) => {
        state.delete.loading = false;
        state.delete.success = true;
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.delete.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLimit, setSort, setFilters } = productSlice.actions;

export default productSlice.reducer;
