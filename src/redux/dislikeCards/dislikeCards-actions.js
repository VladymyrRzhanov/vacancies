import { createAction } from '@reduxjs/toolkit';

export const addDislikeCards = createAction('dislikeCards/addDislikeCards');
export const deleteDislikeCards = createAction(
  'dislikeCards/deleteDislikeCards',
);
