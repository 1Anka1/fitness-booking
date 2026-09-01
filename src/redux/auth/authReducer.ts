import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { login, logout, refresh, registration } from './authOperations';

interface User {
  id: string | null;
  email: string | null;
  fullName: string | null;
  role: string | null;
  avatar: string | null;
  token: string | null;
  isRefreshing: boolean;
  isLogged: boolean;
  passType: string | null;
  finalPrice: number | null;
  error: string | null;
}

const initialState: User = {
  id: null,
  email: null,
  fullName: null,
  role: null,
  avatar: null,
  token: null,
  isRefreshing: false,
  isLogged: false,
  passType: null,
  finalPrice: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //LOGIN
      .addCase(login.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(login.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLogged = false;
        state.error = payload as string;
      })

      .addCase(login.fulfilled, (state, { payload }) => {
        state.id = payload.data.id;
        state.email = payload.data.email;
        state.fullName = payload.data.fullName;
        state.finalPrice = payload.data.finalPrice;
        state.role = payload.data.role;
        state.avatar = payload.data.avatar;
        state.token = payload.data.token;
        state.isLogged = true;
        state.isRefreshing = false;
      })

      //REGISTRATION
      .addCase(registration.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(registration.rejected, (state) => {
        state.isRefreshing = false;
        state.isLogged = false;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.id = payload.data.id;
        state.email = payload.data.email;
        state.fullName = payload.data.fullName;
        state.finalPrice = payload.data.finalPrice;
        state.role = payload.data.role;
        state.avatar = payload.data.avatar;
        state.token = payload.data.token;
        state.isLogged = true;
        state.isRefreshing = false;
      })

      //LOGOUT
      .addCase(logout.pending, (state) => {
        state.email = null;
        state.fullName = null;
        state.token = null;
        state.isLogged = false;
        state.isRefreshing = false;
      })
      .addCase(logout.rejected, (state) => {
        state.email = null;
        state.fullName = null;
        state.token = null;
        state.isLogged = false;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.id = null;
        state.email = null;
        state.fullName = null;
        state.role = null;
        state.avatar = null;
        state.token = null;
        state.passType = null;
        state.finalPrice = null;
        state.isLogged = false;
        state.isRefreshing = false;
      })

      //REFRESH
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
        state.isLogged = false;
      })

      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.id = payload.data.id ?? state.id;
        state.email = payload.data.email;
        state.fullName = payload.data.fullName;
        state.finalPrice = payload.data.finalPrice;
        state.role = payload.data.role;
        state.avatar = payload.data.avatar ?? state.avatar;
        state.token = payload.data.token ?? state.token;
        state.isLogged = true;
        state.isRefreshing = false;
      }),
});

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['isRefreshing'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
