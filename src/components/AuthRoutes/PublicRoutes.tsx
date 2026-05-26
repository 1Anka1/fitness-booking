import { Navigate } from 'react-router-dom';
import { useAuthSelector } from '../../hooks/useAuthSelector';

export const PublicRoutes = ({ redirectTo, component }) => {
  const { isLogged } = useAuthSelector();
  return isLogged ? <Navigate to={redirectTo} replace /> : component;
};
