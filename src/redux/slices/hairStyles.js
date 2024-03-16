import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hairStyle:
    {
      img: "/hairstyles/hair-0.png",
      id: 1,
      stats: {
        coquette: 5,
        casual: 0,
        formal: 10,
      },
    },
};

const hairStylesSlice = createSlice({
  name: "hairStyle",
  initialState,
  reducers: {
    setHairStyle: (state, action) => {
      state.hairStyle = action.payload;
    },
  },
});

export const { setHairStyle } = hairStylesSlice.actions;
export default hairStylesSlice.reducer;