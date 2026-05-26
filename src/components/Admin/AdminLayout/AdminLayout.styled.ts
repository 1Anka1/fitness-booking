import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdminWrapper = styled.div`
  display: flex;
`;

export const SideNavWrapper = styled.div`
  width: 300px;
  height: 100vh;
  padding: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.sideBorder};
`;

export const AdminNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[1]}px;
`;

export const AdminNavItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  gap: ${({ theme }) => theme.space[2]}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.radius.round};
  cursor: pointer;

  &:focus,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
