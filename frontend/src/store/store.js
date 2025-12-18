import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import contentReducer from './contentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});