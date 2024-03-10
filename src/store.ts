import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appSlice } from './slices/app-slice';
import { mainApiSlice } from './slices/api/main-api-slice';

const rootReducer = combineReducers({
  [mainApiSlice.reducerPath]: mainApiSlice.reducer,
  app: appSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([mainApiSlice.middleware]),
});
