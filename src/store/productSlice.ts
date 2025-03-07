import { createSlice } from "@reduxjs/toolkit";
import { SneakType } from "../interfaces";

type TItemsState = {
  items: SneakType[];
  totalPrice: number;
};

const initialState: TItemsState = {
  totalPrice: 0,
  items: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum
      }, 0)
    },
    removeProduct(state, action) {
        state.items = state.items.filter(item => item.id != action.payload)
    },
    clearProducts(state) {
      state.items = []
    },
  },
});

export const { addProduct, removeProduct, clearProducts } = productSlice.actions;

export default productSlice.reducer;
