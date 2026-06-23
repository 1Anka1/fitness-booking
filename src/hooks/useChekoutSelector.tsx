import { useSelector } from 'react-redux';
import { selectClub, selectFinalPrice } from '../redux/selectors';

export const useChekoutSelector = () => {
  const club = useSelector(selectClub);
  const finalPrice = useSelector(selectFinalPrice);

  return { club, finalPrice };
};
