import { useSelector } from 'react-redux';
import {
  selectClub,
  selectFinalPrice,
  selectIncludeAllClubs,
  selectPassStartDate,
  selectSelectedPass,
} from '../redux/selectors';

export const useChekoutSelector = () => {
  const club = useSelector(selectClub);
  const finalPrice = useSelector(selectFinalPrice);
  const pass = useSelector(selectSelectedPass);
  const allClub = useSelector(selectIncludeAllClubs);
  const startDate = useSelector(selectPassStartDate);

  return { club, finalPrice, pass, allClub, startDate };
};
