import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthSelector } from '../../hooks/useAuthSelector';

type PublicRoutesProps = {
  redirectTo: string;
  component: ReactNode;
};

export const PublicRoutes = ({ redirectTo, component }: PublicRoutesProps) => {
  const { isLogged } = useAuthSelector();

  return isLogged ? <Navigate to={redirectTo} replace /> : component;
};
