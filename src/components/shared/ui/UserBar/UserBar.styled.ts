import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const UserButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const DropdownItem = styled.button`
  padding: 10px 16px;
  text-align: left;
  border: none;
  background: inherit;
  font: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
