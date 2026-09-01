import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './userOperations';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import type { Club, Pass } from '../../utils/types/types';
import { login, logout, refresh, registration } from '../auth/authOperations';

type CurrentUser = {
  id: string | null;
  fullName: string | null;
  email: string | null;
  role: string | null;
  avatar: string | null;
  selectedClub: Club | null;
  selectedPass: Pass | null;
  includeAllClubs: boolean | null;
  passStartDate: string | null;
  finalPrice: number | null;
};

type UserState = {
  currentUser: CurrentUser | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const getCurrentUserFromAuthPayload = (
  data: any,
  previousUser: CurrentUser | null = null,
): CurrentUser => ({
  id: data.id ?? previousUser?.id ?? null,
  fullName: data.fullName ?? null,
  email: data.email ?? null,
  role: data.role ?? null,
  avatar: data.avatar ?? previousUser?.avatar ?? null,
  selectedClub: data.selectedClub ?? null,
  selectedPass: data.selectedPass ?? null,
  includeAllClubs: data.includeAllClubs ?? null,
  passStartDate: data.passStartDate ?? null,
  finalPrice: data.finalPrice ?? null,
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserError: (state) => {
      state.error = null;
    },

    clearCurrentUser: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.currentUser = getCurrentUserFromAuthPayload(payload.data);
      })

      .addCase(registration.fulfilled, (state, { payload }) => {
        state.currentUser = getCurrentUserFromAuthPayload(payload.data);
      })

      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.currentUser = getCurrentUserFromAuthPayload(payload.data, state.currentUser);
      })

      .addCase(logout.fulfilled, () => {
        return initialState;
      })

      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentUser = action.payload?.data ?? action.payload;
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || 'Failed to update user';
      });
  },
});

const persistConfig = {
  key: 'user',
  storage,
};

export const { clearUserError, clearCurrentUser } = userSlice.actions;

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
