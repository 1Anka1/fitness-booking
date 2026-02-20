import { FaRegBell } from 'react-icons/fa6';
import { PiUserCircleThin } from 'react-icons/pi';
import * as SC from './UserBar.styled';
import { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { IoIosArrowDown } from 'react-icons/io';
import { theme } from '../../../../theme/theme';

export const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <SC.Wrapper>
      <FaRegBell color={theme.colors.textMuted} size={17} />

      <SC.UserMenu>
        <PiUserCircleThin color={theme.colors.textMuted} size={35} />
        <SC.UserButton onClick={toggleDropdown}>
          Sarah Chen
          <IoIosArrowDown color={theme.colors.textMuted} />
        </SC.UserButton>
        {isOpen && (
          <Dropdown closeDropdown={closeDropdown}>
            <SC.DropdownItem type="button" onClick={() => console.log('Setting')}>
              Settings
            </SC.DropdownItem>
            <SC.DropdownItem type="button" onClick={() => console.log('Log out')}>
              Log out
            </SC.DropdownItem>
          </Dropdown>
        )}
      </SC.UserMenu>
    </SC.Wrapper>
  );
};
