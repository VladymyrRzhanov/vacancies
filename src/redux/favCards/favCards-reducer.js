import { createSlice } from '@reduxjs/toolkit';
import { addFavCards, deleteFavCards } from './favCards-actions';

const initialState = {
  favourite: [],
};

const favCardsSlice = createSlice({
  name: 'favCards',
  initialState,
  extraReducers: {
    [addFavCards](state, { payload }) {
      state.favourite = [payload, ...state.favourite];
    },
    [deleteFavCards](state, { payload }) {
      state.favourite = state.favourite.filter(id => id !== payload);
    },
  },
});

export default favCardsSlice.reducer;
