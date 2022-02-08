import { createSlice } from '@reduxjs/toolkit';
import { addDislikeCards, deleteDislikeCards } from './dislikeCards-actions';

const initialState = {
  dislike: [],
};

const dislikeCardsSlice = createSlice({
  name: 'dislikeCards',
  initialState,
  extraReducers: {
    [addDislikeCards](state, { payload }) {
      state.dislike = [payload, ...state.dislike];
    },
    [deleteDislikeCards](state, { payload }) {
      state.dislike = state.dislike.filter(id => id !== payload);
    },
  },
});

export default dislikeCardsSlice.reducer;
