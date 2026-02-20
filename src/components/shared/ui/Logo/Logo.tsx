import { FaDumbbell } from 'react-icons/fa6';
import * as SC from './Logo.styled';
export const Logo = () => {
  return (
    <SC.WrapperLogo>
      <SC.Icon>
        <FaDumbbell color={'white'} />
      </SC.Icon>
      <SC.Title>FitnessBooking</SC.Title>
    </SC.WrapperLogo>
  );
};
