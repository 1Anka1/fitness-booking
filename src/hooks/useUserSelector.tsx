import { useAppSelector } from '../redux/hooks/hooks';
import {
  selectCurrentUser,
  selectUserClub,
  selectUserFinalPrice,
  selectUserIncludeAllClubs,
  selectUserPass,
  selectUserPassStartDate,
} from '../redux/selectors';

export const useUserSelector = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const club = useAppSelector(selectUserClub);
  const pass = useAppSelector(selectUserPass);
  const includeAllClubs = useAppSelector(selectUserIncludeAllClubs);
  const passStartDate = useAppSelector(selectUserPassStartDate);
  const finalPrice = useAppSelector(selectUserFinalPrice);

  return {
    currentUser,
    club,
    pass,
    includeAllClubs,
    passStartDate,
    finalPrice,
  };
};
