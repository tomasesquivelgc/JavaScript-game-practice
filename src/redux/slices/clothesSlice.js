import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clothes: {
    top: {
      img: '/top/top0.png',
      id: 1,
      stats: {
        coquette: 5,
        casual: 0,
        formal: 10,
      },
    },
    bottom: {
      img: '/bottom/bottom0.png',
      id: 2,
      stats: {
        coquette: 10,
        casual: 0,
        formal: 10,
      },
    },
  },
  combinedStats: {
    coquette: 0,
    casual: 0,
    formal: 0,
  },
};

const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    setTop: (state, action) => {
      state.clothes.top = action.payload;
      state.combinedStats = calculateCombinedStats(state);
    },
    setBottom: (state, action) => {
      state.clothes.bottom = action.payload;
      state.combinedStats = calculateCombinedStats(state);
    },
  },
});

const calculateCombinedStats = (state) => {
  const { top, bottom } = state.clothes;
  return {
    coquette: top.stats.coquette + bottom.stats.coquette,
    casual: top.stats.casual + bottom.stats.casual,
    formal: top.stats.formal + bottom.stats.formal
  };
};

export const { setTop, setBottom } = clothesSlice.actions;
export default clothesSlice.reducer;
