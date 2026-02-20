import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${(p) => p.theme.colors.border};
`;

export const Text = styled.span`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  color: ${(p) => p.theme.colors.textSecondary};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.space[2]}px;

  padding: 12px 0;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius.round};
  background-color: ${(p) => p.theme.colors.white};
  cursor: pointer;
  font-size: ${(p) => p.theme.fontSizes.s}px;

  &:hover {
    color: ${(p) => p.theme.colors.primary};
    background-color: ${(p) => p.theme.colors.primaryLight};
  }
`;

export const SignUp = styled.div`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  color: ${(p) => p.theme.colors.textSecondary};
`;

export const StyledLink = styled(NavLink)`
  color: ${(p) => p.theme.colors.primary};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
