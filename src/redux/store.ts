import { configureStore } from '@reduxjs/toolkit';
import { calendarReducer, calendarSlice } from './calendar/calendarSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer, authSlice } from './auth/authReducer';
import { checkoutReducer, checkoutSlice } from './checkout/checkoutSlice';
import { userReducer, userSlice } from './user/userSlice';

export const store = configureStore({
  reducer: {
    [calendarSlice.name]: calendarReducer,
    [authSlice.name]: authReducer,
    [checkoutSlice.name]: checkoutReducer,
    [userSlice.name]: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
