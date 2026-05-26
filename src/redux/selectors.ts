export const selectEvents = (state) => state.calendar.events;
//USER
export const selectEmail = (state) => state.auth.email;
export const selectFullName = (state) => state.auth.fullName;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLogged = (state) => state.auth.isLogged;
