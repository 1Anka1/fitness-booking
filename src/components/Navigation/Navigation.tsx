import * as SC from './Navigation.styled';
import { Logo } from '../shared/ui/Logo/Logo';

export const Navigation = () => {
  return (
    <SC.Wrapper>
      <Logo />
      <nav>
        <SC.NavList>
          <SC.NavListItem>
            <SC.NavLinkItems to={'calendar'}>Calendar</SC.NavLinkItems>
            <SC.NavLinkItems to={'booking'}>My Bookings</SC.NavLinkItems>
            <SC.NavLinkItems to={'trainer'}>Trainers</SC.NavLinkItems>
            <SC.NavLinkItems to={'admin'}>Admin Page</SC.NavLinkItems>
            <SC.NavLinkItems to={'login'}>Login Page</SC.NavLinkItems>
          </SC.NavListItem>
        </SC.NavList>
      </nav>
    </SC.Wrapper>
  );
};
