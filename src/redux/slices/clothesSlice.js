import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clothes: {
    top: {
      img: '/top/top0.png',
      id: 1,
    },
    bottom: {
      img: '/bottom/bottom0.png',
      id: 2,
      },
  },
};

const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    setTop: (state, action) => {
      state.clothes.top = action.payload;
    },
    setBottom: (state, action) => {
      state.clothes.bottom = action.payload;
    },
  },
});

export const { setTop, setBottom } = clothesSlice.actions;
export default clothesSlice.reducer;
