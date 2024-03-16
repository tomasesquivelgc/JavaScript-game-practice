import { configureStore } from '@reduxjs/toolkit';
import clothesReducer from './slices/clothesSlice';
import hairStylesReducer from './slices/hairStyles';

const store = configureStore({
  reducer: {
    clothes: clothesReducer,
    hairStyles: hairStylesReducer,
  },
});

export default store;
