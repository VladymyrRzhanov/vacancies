import { createReducer } from '@reduxjs/toolkit';
import { vacanciesPageActions } from './vacanciesPage-actions';

const vacanciesPageReducer = createReducer('1', {
  [vacanciesPageActions]: (_, { payload }) => payload,
});

export default vacanciesPageReducer;
