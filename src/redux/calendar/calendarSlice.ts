import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
}

interface CalendarState {
  events: CalendarEvent[];
}

const initialState: CalendarState = {
  events: [],
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent(state, { payload }: PayloadAction<CalendarEvent>) {
      state.events.push(payload);
    },
    // removeEvent(state, action: PayloadAction<string>) {
    //   state.events = state.events.filter((e) => e.id !== action.payload);
    // },

    // updateEvent(state, action: PayloadAction<CalendarEvent>) {
    //   const index = state.events.findIndex((e) => e.id === action.payload.id);
    //   if (index !== -1) state.events[index] = action.payload;
    // },
  },
});

const persistConfig = {
  key: 'calnedar',
  storage,
  whitelist: ['events'],
};

export const calendarReducer = persistReducer(persistConfig, calendarSlice.reducer);
export const { addEvent } = calendarSlice.actions;
