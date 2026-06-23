export const selectEvents = (state) => state.calendar.events;

//USER
export const selectEmail = (state) => state.auth.email;
export const selectFullName = (state) => state.auth.fullName;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLogged = (state) => state.auth.isLogged;

//PASS
export const selectClub = (state) => state.checkout.selectedClub;
export const selectSelectedPass = (state) => state.checkout.selectedPass;
export const selectIncludeAllClubs = (state) => state.checkout.includeAllClubs;
export const selectPassStartDate = (state) => state.checkout.passStartDate;

export const selectFinalPrice = (state) => {
  const pass = state.checkout.selectedPass;
  const includeAllClubs = state.checkout.includeAllClubs;

  if (!pass) return null;

  return pass.price + (includeAllClubs ? 20 : 0);
};
