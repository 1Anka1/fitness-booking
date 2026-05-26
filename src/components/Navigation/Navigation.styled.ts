import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[5]}px;
`;

//USER MENU
export const NavMenuList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.space[3]}px;
  justify-content: space-between;
`;

export const NavMenuListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const NavLinkItems = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  gap: ${({ theme }) => theme.space[1]}px;
  color: inherit;
  border-radius: ${({ theme }) => theme.radius.round};
  cursor: pointer;
  transition: color 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const WrapperUserNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: ${({ theme }) => theme.space[3]}px;
`;

//AUTH MENU
export const AuthWrapper = styled.div`
  display: flex;
  margin-left: auto;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const AuthLinkItems = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  color: inherit;
  cursor: pointer;
  transition: color 250ms ${({ theme }) => theme.cubic.timingFunction};

  svg {
    transition: transform 250ms ${({ theme }) => theme.cubic.timingFunction};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover svg,
  &:focus svg {
    transform: translateY(-2px);
  }
`;
