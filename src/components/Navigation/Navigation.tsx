import * as SC from './Navigation.styled';
import { Logo } from '../shared/ui/Logo/Logo';
import { MenuNav } from './MenuNav/MenuNav';
import { useAuthSelector } from '../../hooks/useAuthSelector';
import { AuthNav } from './AuthNav/AuthNav';

type NavigationProps = {
  $isOverlay: boolean;
};

export const Navigation = ({ $isOverlay }: NavigationProps) => {
  const { isLogged } = useAuthSelector();

  return (
    <SC.Navigation>
      <Logo $isOverlay={$isOverlay} />
      {isLogged ? <MenuNav /> : <AuthNav />}
    </SC.Navigation>
  );
};
