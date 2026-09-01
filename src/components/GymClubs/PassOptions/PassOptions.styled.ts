import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundDark};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;
export const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  border: none;
  background: ${({ $active, theme }) => ($active ? theme.colors.primaryLight : 'transparent')};
  padding: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ $active, theme }) =>
    $active ? theme.fontWeights.bold : theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  position: relative;
  transition: background 250ms ${({ theme }) => theme.cubic.timingFunction};
  font-family: inherit;
  letter-spacing: 1px;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ $active, theme }) => ($active ? theme.colors.backgroundDark : 'transparent')};
  }
`;

export const ClubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primaryLight};
  padding: ${({ theme }) => theme.space[2]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const ClubInfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const ClubName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.ml}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Address = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ChangeButton = styled(NavLink)`
  width: 84px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1px;
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
