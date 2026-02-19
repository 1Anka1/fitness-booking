import { FaDumbbell } from 'react-icons/fa6';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  return (
    <SC.Wrapper>
      <SC.WrapperLogo>
        <SC.Icon>
          <FaDumbbell color={'white'} />
        </SC.Icon>
        <SC.Title>FitnessBooking</SC.Title>
      </SC.WrapperLogo>

      <nav>
        <SC.NavList>
          <SC.NavListItem>
            <SC.NavLinkItems to={'calendar'}>Calendar</SC.NavLinkItems>
            <SC.NavLinkItems to={'booking'}>My Bookings</SC.NavLinkItems>
            <SC.NavLinkItems to={'trainer'}>Trainers</SC.NavLinkItems>
            <SC.NavLinkItems to={'admin'}>Admin Page</SC.NavLinkItems>
          </SC.NavListItem>
        </SC.NavList>
      </nav>
    </SC.Wrapper>
  );
};
