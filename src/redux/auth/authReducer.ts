import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { login, logout, registration } from './authOperations';

interface User {
  email: string | null;
  fullName: string | null;
  role: string | null;
  token: string | null;
  isRefreshing: boolean;
  isLogged: boolean;
}

const initialState: User = {
  email: null,
  fullName: null,
  role: null,
  token: null,
  isRefreshing: false,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //LOGIN
      .addCase(login.pending, (state) => state)
      .addCase(login.rejected, (state) => state)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.email = payload.data.email;
        state.token = payload.data.token;
        state.isLogged = true;
        state.isRefreshing = false;
      })
      //REGISTRATION
      .addCase(registration.pending, (state) => state)
      .addCase(registration.rejected, (state) => state)
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.email = payload.data.email;
        state.fullName = payload.data.fullName;
        state.role = payload.data.role;
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
        state.email = null;
        state.fullName = null;
        state.token = null;
        state.isLogged = false;
        state.isRefreshing = false;
      }),
});

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) =>
//     builder
//       .addCase(registration.pending, (state) => state)
//       .addCase(registration.rejected, (state) => state)
//       .addCase(registration.fulfilled, (state, { payload }) => {
//         state.email = payload.data.email;
//         state.name = payload.data.name;
//         state.token = payload.data.token;
//         state.isLogged = true;
//         state.isRefreshing = false;
//       })

//       .addCase(login.pending, (state) => state)
//       .addCase(login.rejected, (state) => state)
//       .addCase(login.fulfilled, (state, { payload }) => {
//         state.email = payload.data.email;
//         state.name = payload.data.name;
//         state.token = payload.data.token;
//         state.isLogged = true;
//         state.isRefreshing = false;
//       })

// .addCase(logout.pending, (state) => {
// state.email = null;
// state.name = null;
// state.token = null;
// state.isLogged = false;
// state.isRefreshing = false;
// })
// .addCase(logout.rejected, (state) => {
//   state.email = null;
//   state.name = null;
//   state.token = null;
//   state.isLogged = false;
//   state.isRefreshing = false;
// })
// .addCase(logout.fulfilled, (state) => {
//   state.email = null;
//   state.name = null;
//   state.token = null;
//   state.isLogged = false;
//   state.isRefreshing = false;
// }),
// });

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['isRefreshing'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
