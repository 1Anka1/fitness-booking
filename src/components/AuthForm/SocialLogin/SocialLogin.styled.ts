import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
  width: 100%;
  margin: ${({ theme }) => theme.space[0]}px auto;
  text-align: center;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]}px;
  justify-content: center;
`;

export const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]}px;

  padding: 12px 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.round};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.s}px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const SignUp = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
