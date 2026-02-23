import * as SC from './Navigation.styled';
import { Logo } from '../shared/ui/Logo/Logo';

export const Navigation = () => {
  return (
    <SC.Wrapper>
      <Logo />
      <nav>
        <SC.NavList>
          <SC.NavListItem>
            <SC.NavLinkItems to={'/calendar'} end={false}>
              Calendar
            </SC.NavLinkItems>
            <SC.NavLinkItems to={'/booking'} end={false}>
              My Bookings
            </SC.NavLinkItems>
            <SC.NavLinkItems to={'/trainer'} end={false}>
              Trainers
            </SC.NavLinkItems>
            <SC.NavLinkItems to={'/admin'} end={false}>
              Admin Page
            </SC.NavLinkItems>
            <SC.NavLinkItems to={'/login'} end={false}>
              Login Page
            </SC.NavLinkItems>
          </SC.NavListItem>
        </SC.NavList>
      </nav>
    </SC.Wrapper>
  );
};
