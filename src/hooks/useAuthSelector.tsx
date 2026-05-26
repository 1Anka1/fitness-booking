import { useSelector } from 'react-redux';
import {
  selectEmail,
  selectFullName,
  selectIsLogged,
  selectIsRefreshing,
  selectToken,
} from '../redux/selectors';

export const useAuthSelector = () => {
  const email = useSelector(selectEmail);
  const name = useSelector(selectFullName);
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  return { email, name, isLogged, isRefreshing, token };
};
