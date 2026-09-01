import { useAppSelector } from '../redux/hooks/hooks';
import {
  selectAvatar,
  selectEmail,
  selectError,
  selectFullName,
  selectIsLogged,
  selectIsRefreshing,
  selectRole,
  selectToken,
  selectUserId,
} from '../redux/selectors';

export const useAuthSelector = () => {
  const userId = useAppSelector(selectUserId);
  const email = useAppSelector(selectEmail);
  const fullName = useAppSelector(selectFullName);
  const role = useAppSelector(selectRole);
  const isLogged = useAppSelector(selectIsLogged);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const token = useAppSelector(selectToken);
  const avatar = useAppSelector(selectAvatar);
  const error = useAppSelector(selectError);

  return {
    userId,
    email,
    fullName,
    role,
    isLogged,
    isRefreshing,
    token,
    avatar,
    error,
  };
};
