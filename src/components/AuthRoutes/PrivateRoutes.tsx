import { Navigate } from 'react-router-dom';
import { useAuthSelector } from '../../hooks/useAuthSelector';

export const PrivateRoutes = ({ component, redirectTo }) => {
  const { isLogged, token, isRefreshing } = useAuthSelector();
  const shouldRedirect = !isLogged && !isRefreshing && !token;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : component;
};
