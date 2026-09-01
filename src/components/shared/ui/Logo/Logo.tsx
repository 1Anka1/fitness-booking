import { FaDumbbell } from 'react-icons/fa6';
import * as SC from './Logo.styled';

type LogoProps = {
  $isOverlay?: boolean;
};

export const Logo = ({ $isOverlay = false }: LogoProps) => {
  return (
    <SC.NavigationLink to={'/'} $isOverlay={$isOverlay}>
      <SC.Icon>
        <FaDumbbell color={'white'} />
      </SC.Icon>
      <SC.Title>FitnessBooking</SC.Title>
    </SC.NavigationLink>
  );
};
