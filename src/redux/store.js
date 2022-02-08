import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favCardsReducer from './favCards/favCards-reducer';
import applyCardsReducer from './applyCards/applyCards-reducer';
import dislikeCardsReducer from './dislikeCards/dislikeCards-reducer';
import vacanciesPageReducer from './vacanciesPage/vacanciesPage-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const favCardsPersistConfig = {
  key: 'favCards',
  storage,
};

const dislikeCardsPersistConfig = {
  key: 'dislikeCards',
  storage,
};

const applyCardsPersistConfig = {
  key: 'applyCards',
  storage,
};

export const store = configureStore({
  reducer: {
    applyCards: persistReducer(applyCardsPersistConfig, applyCardsReducer),
    favCards: persistReducer(favCardsPersistConfig, favCardsReducer),
    dislikeCards: persistReducer(
      dislikeCardsPersistConfig,
      dislikeCardsReducer,
    ),
    vacanciesPage: vacanciesPageReducer,
  },
  middleware,
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
