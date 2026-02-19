import * as SC from './Dropdown.styled';

type DropdownProps = {
  closeDropdown: () => void;
  children: React.ReactNode;
};

export const Dropdown = ({ closeDropdown, children }: DropdownProps) => {
  const closeOnClick = (e) => {
    if (e.target === e.currentTarget) {
      closeDropdown();
    }
  };

  return (
    <SC.DropdownPanel onClick={closeOnClick}>
      <SC.DropdownInner>{children}</SC.DropdownInner>
    </SC.DropdownPanel>
  );
};
