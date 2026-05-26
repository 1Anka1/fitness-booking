import { configureStore } from '@reduxjs/toolkit';
import { calendarReducer, calendarSlice } from './calendar/calendarSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer, authSlice } from './auth/authReducer';

export const store = configureStore({
  reducer: {
    [calendarSlice.name]: calendarReducer,
    [authSlice.name]: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
