import { FaRegBell } from 'react-icons/fa6';
import { PiUserCircleThin } from 'react-icons/pi';
import * as SC from './UserBar.styled';
import { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { IoIosArrowDown } from 'react-icons/io';
import { theme } from '../../../../theme/theme';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/auth/authOperations';
import { useAuthSelector } from '../../../../hooks/useAuthSelector';

export const UserBar = () => {
  const { fullName } = useAuthSelector();

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <SC.Wrapper>
      <FaRegBell color={theme.colors.textMuted} size={17} />

      <SC.UserMenu>
        <PiUserCircleThin color={theme.colors.textMuted} size={35} />
        <SC.UserButton onClick={toggleDropdown}>
          {fullName}
          <IoIosArrowDown color={theme.colors.textMuted} />
        </SC.UserButton>
        {isOpen && (
          <Dropdown closeDropdown={closeDropdown}>
            <SC.DropdownItem type="button" onClick={() => console.log('Setting')}>
              Settings
            </SC.DropdownItem>
            <SC.DropdownItem type="submit" onClick={() => handleLogOut()}>
              Log out
            </SC.DropdownItem>
          </Dropdown>
        )}
      </SC.UserMenu>
    </SC.Wrapper>
  );
};
