import type { RootState } from './store';

// CALENDAR
export const selectEvents = (state: RootState) => state.calendar.events;

// AUTH
export const selectUserId = (state: RootState) => state.auth.id;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectFullName = (state: RootState) => state.auth.fullName;
export const selectAvatar = (state: RootState) => state.auth.avatar;
export const selectToken = (state: RootState) => state.auth.token;
export const selectRole = (state: RootState) => state.auth.role;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectIsLogged = (state: RootState) => state.auth.isLogged;
export const selectError = (state: RootState) => state.auth.error;

// USER PROFILE
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectUserClub = (state: RootState) => state.user.currentUser?.selectedClub ?? null;
export const selectUserPass = (state: RootState) => state.user.currentUser?.selectedPass ?? null;
export const selectUserIncludeAllClubs = (state: RootState) =>
  state.user.currentUser?.includeAllClubs ?? null;
export const selectUserPassStartDate = (state: RootState) =>
  state.user.currentUser?.passStartDate ?? null;
export const selectUserFinalPrice = (state: RootState) =>
  state.user.currentUser?.finalPrice ?? null;

// CHECKOUT
export const selectClub = (state: RootState) => state.checkout.selectedClub;
export const selectPass = (state: RootState) => state.checkout.selectedPass;
export const selectIncludeAllClubs = (state: RootState) => state.checkout.includeAllClubs;
export const selectPassStartDate = (state: RootState) => state.checkout.passStartDate;

export const selectFinalPrice = (state: RootState) => {
  const pass = state.checkout.selectedPass;
  const includeAllClubs = state.checkout.includeAllClubs;

  if (!pass) return null;

  return pass.price + (includeAllClubs ? 20 : 0);
};
