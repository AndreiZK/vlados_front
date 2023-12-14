import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

const initialState = {
  products: [] as Product[],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (product) => product.name !== action.payload.name
      );
    },
  },
});

export const { addProduct, removeProduct } = userSlice.actions;
export default userSlice.reducer;
