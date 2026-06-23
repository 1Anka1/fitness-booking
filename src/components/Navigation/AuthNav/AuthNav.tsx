import { FiUser } from 'react-icons/fi';
import * as SC from '../Navigation.styled';
import { RiPassValidLine } from 'react-icons/ri';

export const AuthNav = () => {
  return (
    <SC.AuthWrapper>
      <SC.AuthLinkItems to="/auth/login">
        <FiUser size={20} />
        Profil
      </SC.AuthLinkItems>
      <SC.AuthLinkItems to="/offers/pass/clubs">
        <RiPassValidLine size={20} />
        Buy a pass
      </SC.AuthLinkItems>
    </SC.AuthWrapper>
  );
};
