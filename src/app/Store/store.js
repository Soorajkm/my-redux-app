import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../Reducer";
export const appStore = configureStore({
  reducer: { appReducer },
  middleware: [],
});
