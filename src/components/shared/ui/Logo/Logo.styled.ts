import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type NavProps = {
  $isOverlay?: boolean;
};

export const NavigationLink = styled(NavLink)<NavProps>`
  display: flex;
  gap: ${({ theme }) => theme.space[3]}px;
  align-items: center;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 250ms ${({ theme }) => theme.cubic.timingFunction};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.round};
`;

export const Title = styled.h2`
  font-size: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 250ms ${({ theme }) => theme.cubic.timingFunction};
  }
`;
