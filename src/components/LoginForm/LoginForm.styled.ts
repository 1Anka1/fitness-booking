import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GreetignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(p) => p.theme.space[2]}px;
`;

export const Paragraf = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: ${(p) => p.theme.colors.textSecondary};
`;

export const Form = styled.form`
  width: ${(p) => p.theme.space[10]}px;
  display: flex;
  flex-direction: column;
  margin: ${(p) => p.theme.space[5]}px 0;
  gap: ${(p) => p.theme.space[4]}px;
`;

export const Label = styled.label`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  color: ${(p) => p.theme.colors.label};
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
`;

export const InputMessage = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  color: ${(p) => p.theme.colors.statusError};
  margin-top: ${(p) => p.theme.space[2]}px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: ${(p) => p.theme.space[3]}px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.textMuted};
`;

export const Input = styled.input<{ $error?: string }>`
  width: ${(p) => p.theme.space[10]}px;
  padding: ${(p) => p.theme.space[3]}px;
  padding-right: 40px;
  border: 1px solid ${(p) => p.theme.colors.borderDark};
  border-radius: ${(p) => p.theme.radius.round};
  border-color: ${(props) => (props.$error ? '#F87171' : '#9CA3AF')};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  justify-content: space-between;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  color: ${(p) => p.theme.colors.label};
  font-weight: ${(p) => p.theme.fontWeights.normal};
`;

export const ForgotPassword = styled(NavLink)`
  color: ${(p) => p.theme.colors.primary};
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
`;

export const SignInBtn = styled.button`
  padding: ${(p) => p.theme.space[3]}px;
  border: none;
  border-radius: ${(p) => p.theme.radius.round};
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.primaryLight};
    color: ${(p) => p.theme.colors.primary};
  }
`;
