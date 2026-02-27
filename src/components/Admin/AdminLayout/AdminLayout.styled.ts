import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdminWrapper = styled.div`
  display: flex;
`;

export const SideNavWrapper = styled.div`
  width: 300px;
  height: 100vh;
  padding: ${(p) => p.theme.space[4]}px;
  background-color: ${(p) => p.theme.colors.white};
  border-right: 1px solid ${(p) => p.theme.colors.sideBorder};
`;

export const AdminNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(p) => p.theme.space[1]}px;
`;

export const AdminNavItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.space[2]}px;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
  gap: ${(p) => p.theme.space[2]}px;
  color: ${(p) => p.theme.colors.textSecondary};
  border-radius: ${(p) => p.theme.radius.round};
  cursor: pointer;

  &:focus,
  &.active {
    color: ${(p) => p.theme.colors.primary};
    background-color: ${(p) => p.theme.colors.primaryLight};
  }
`;
