import styled from 'styled-components';

export const FormActions = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]}px;
  padding: ${({ theme }) => theme.space[5]}px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radius.round};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.space[2]}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.round};
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

export const Select = styled.select`
  padding: ${({ theme }) => theme.space[2]}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.round};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radius.round};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
