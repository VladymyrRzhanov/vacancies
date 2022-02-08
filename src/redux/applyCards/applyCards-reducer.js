import { createSlice } from '@reduxjs/toolkit';
import { addApplyCards } from './applyCards-actions';

const initialState = {
  apply: [],
};

const applyCardsSlice = createSlice({
  name: 'applyCards',
  initialState,
  extraReducers: {
    [addApplyCards](state, { payload }) {
      state.apply = [payload, ...state.apply];
    },
  },
});

export default applyCardsSlice.reducer;
