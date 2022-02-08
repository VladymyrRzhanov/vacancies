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
// import authUserReducer from "./authUser/authUser-reducer";
import favCardsReducer from './favCards/favCards-reducer';
import applyCardsReducer from './applyCards/applyCards-reducer';
import dislikeCardsReducer from './dislikeCards/dislikeCards-reducer';
// import filmsPageReducer from "./filmsPage/filmsPage-reducer";
// import viewedFilmsReducer from './viewFilms/viewedFilms-reducer';

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
  // whitelist: ['user']
};

const dislikeCardsPersistConfig = {
  key: 'dislikeCards',
  storage,
  // whitelist: ['user']
};

const applyCardsPersistConfig = {
  key: 'applyCards',
  storage,
  // whitelist: ['user']
};

export const store = configureStore({
  reducer: {
    // auth: authUserReducer,
    // auth: persistReducer(authPersistConfig, authUserReducer),
    // filmsPage: filmsPageReducer,
    // favFilms: favFilmsReducer,
    applyCards: persistReducer(applyCardsPersistConfig, applyCardsReducer),
    favCards: persistReducer(favCardsPersistConfig, favCardsReducer),
    dislikeCards: persistReducer(
      dislikeCardsPersistConfig,
      dislikeCardsReducer,
    ),
  },
  middleware,
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
