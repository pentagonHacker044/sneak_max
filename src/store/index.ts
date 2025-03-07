import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice.ts";
import quizReduser from "./quizSlice.ts"

const store = configureStore({
  reducer: {
    products: productsReducer,
    quiz: quizReduser
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
