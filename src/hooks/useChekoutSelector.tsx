import { useAppSelector } from '../redux/hooks/hooks';
import {
  selectClub,
  selectFinalPrice,
  selectIncludeAllClubs,
  selectPassStartDate,
  selectPass,
} from '../redux/selectors';

export const useChekoutSelector = () => {
  const club = useAppSelector(selectClub);
  const passType = useAppSelector(selectPass);
  const allClub = useAppSelector(selectIncludeAllClubs);
  const startDate = useAppSelector(selectPassStartDate);
  const finalPrice = useAppSelector(selectFinalPrice);

  return { club, finalPrice, passType, allClub, startDate };
};
