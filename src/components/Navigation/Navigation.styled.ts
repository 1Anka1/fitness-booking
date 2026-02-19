import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(p) => p.theme.space[4]}px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[2]}px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radius.round};
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const NavLinkItems = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  gap: ${(p) => p.theme.space[1]}px;
  color: ${(p) => p.theme.colors.textSecondary};
  border-radius: ${(p) => p.theme.radius.round};
  cursor: pointer;

  &.active {
    color: ${(p) => p.theme.colors.primary};
    background-color: ${(p) => p.theme.colors.primaryLight};
  }
`;
