import { FaRegBell } from 'react-icons/fa6';
import { PiUserCircleThin } from 'react-icons/pi';
import * as SC from './UserBar.styled';
import { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { IoIosArrowDown } from 'react-icons/io';
import { theme } from '../../../../theme/theme';
import { logout } from '../../../../redux/auth/authOperations';
import { useAuthSelector } from '../../../../hooks/useAuthSelector';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks/hooks';

export const UserBar = () => {
  const navigate = useNavigate();

  const { fullName } = useAuthSelector();

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleNavigateToProfile = () => {
    navigate('/profile');
    closeDropdown();
  };

  const handleLogOut = () => {
    dispatch(logout());
    closeDropdown();
  };

  return (
    <SC.Wrapper>
      <FaRegBell color={theme.colors.textMuted} size={17} />

      <SC.UserMenu>
        <PiUserCircleThin
          color={theme.colors.textMuted}
          size={35}
          onClick={toggleDropdown}
          style={{ cursor: 'pointer' }}
        />
        <SC.UserButton onClick={toggleDropdown} type="button">
          {fullName}
          <IoIosArrowDown color={theme.colors.textMuted} />
        </SC.UserButton>
        {isOpen && (
          <Dropdown closeDropdown={closeDropdown}>
            <SC.DropdownItem type="button" onClick={handleNavigateToProfile}>
              User Profile
            </SC.DropdownItem>
            <SC.DropdownItem type="button" onClick={handleLogOut}>
              Log out
            </SC.DropdownItem>
          </Dropdown>
        )}
      </SC.UserMenu>
    </SC.Wrapper>
  );
};
