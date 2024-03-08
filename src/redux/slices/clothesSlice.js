import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: {
    top: "/top/top0.png",
    bottom: "/bottom/bottom0.png",
  },
};

const clothesSlice = createSlice({
  name: "clothes",
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
  