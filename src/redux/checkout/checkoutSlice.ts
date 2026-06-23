import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { Club, Pass } from '../../utils/types/types';

type CheckoutState = {
  selectedClub: Club | null;
  selectedPass: Pass | null;
  includeAllClubs: boolean;
  passStartDate: string | null;
};

const initialState: CheckoutState = {
  selectedClub: null,
  selectedPass: null,
  includeAllClubs: false,
  passStartDate: null,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setSelectedClub(state, { payload }: PayloadAction<Club>) {
      state.selectedClub = payload;
    },

    setSelectedPass(state, { payload }: PayloadAction<{ pass: Pass; includeAllClubs: boolean }>) {
      state.selectedPass = payload.pass;
      state.includeAllClubs = payload.includeAllClubs;
    },

    setPassStartDate(state, { payload }: PayloadAction<string>) {
      state.passStartDate = payload;
    },

    clearSelectedPass(state) {
      state.selectedPass = null;
      state.includeAllClubs = false;
      state.passStartDate = null;
    },

    clearCheckout() {
      return initialState;
    },
  },
});

const persistConfig = {
  key: 'checkout',
  storage,
};

export const checkoutReducer = persistReducer(persistConfig, checkoutSlice.reducer);
export const {
  setSelectedClub,
  setSelectedPass,
  clearSelectedPass,
  clearCheckout,
  setPassStartDate,
} = checkoutSlice.actions;
