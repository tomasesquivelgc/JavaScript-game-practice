import { createSlice } from '@reduxjs/toolkit';

const calculateCombinedStats = (clothes) => {
  const { top, bottom } = clothes;
  return {
    coquette: top.stats.coquette + bottom.stats.coquette,
    casual: top.stats.casual + bottom.stats.casual,
    formal: top.stats.formal + bottom.stats.formal,
  };
};

// Function to retrieve initial clothes data from local storage
const getInitialClothesFromLocalStorage = () => {
  const clothesFromLocalStorage = JSON.parse(localStorage.getItem('clothes'));
  if (clothesFromLocalStorage) {
    return clothesFromLocalStorage;
  }
  // If no data found in local storage, return default initial state
  return {
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
  };
};

const initialState = {
  clothes: getInitialClothesFromLocalStorage(),
  combinedStats: calculateCombinedStats(getInitialClothesFromLocalStorage()),
};

const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    setTop: (state, action) => {
      state.clothes.top = action.payload;
      state.combinedStats = calculateCombinedStats(state.clothes);
    },
    setBottom: (state, action) => {
      state.clothes.bottom = action.payload;
      state.combinedStats = calculateCombinedStats(state.clothes);
    },
  },
});

export const { setTop, setBottom } = clothesSlice.actions;
export default clothesSlice.reducer;
