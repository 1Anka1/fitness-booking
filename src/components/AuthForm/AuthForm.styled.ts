import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GreetignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.space[4]}px;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const Paragraf = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Form = styled.form`
  width: ${({ theme }) => theme.space[10]}px;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.space[3]}px 0;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.label};
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
`;

export const InputMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  color: ${({ theme }) => theme.colors.statusError};
  margin-top: ${({ theme }) => theme.space[1]}px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.space[3]}px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Input = styled.input<{ $error?: string }>`
  width: ${({ theme }) => theme.space[10]}px;
  padding: ${({ theme }) => theme.space[3]}px;
  padding-right: 40px;
  border: 1px solid ${({ theme }) => theme.colors.borderDark};
  border-radius: ${({ theme }) => theme.radius.round};
  border-color: ${(props) => (props.$error ? '#F87171' : '#9CA3AF')};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  justify-content: space-between;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.label};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const ForgotPassword = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
`;

export const SignInBtn = styled.button`
  padding: ${({ theme }) => theme.space[3]}px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.round};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ServerError = styled.div`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.statusError};
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;
