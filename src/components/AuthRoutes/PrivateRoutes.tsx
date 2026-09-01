import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthSelector } from '../../hooks/useAuthSelector';

type PrivateRoutesProps = {
  redirectTo: string;
  component: ReactNode;
};

export const PrivateRoutes = ({ component, redirectTo }: PrivateRoutesProps) => {
  const { isLogged, token, isRefreshing } = useAuthSelector();

  const shouldRedirect = !isRefreshing && (!isLogged || !token);

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : component;
};
