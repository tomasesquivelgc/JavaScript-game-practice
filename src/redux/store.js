import { configureStore } from "@reduxjs/toolkit";
import clothesReducer from "./slices/clothesSlice";

const store = configureStore({
  reducer: {
    clothes: clothesReducer,
  },
});

export default store;
