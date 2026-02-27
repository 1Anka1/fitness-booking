import styled from 'styled-components';

export const FormActions = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[2]}px;
  padding: ${(p) => p.theme.space[5]}px;
  background-color: ${(p) => p.theme.colors.primaryLight};
  border-radius: ${(p) => p.theme.radius.round};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
  text-align: left;
  color: ${(p) => p.theme.colors.textPrimary};
`;

export const Input = styled.input`
  padding: ${(p) => p.theme.space[2]}px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius.round};
  outline: none;
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  &:focus {
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

export const Select = styled.select`
  padding: ${(p) => p.theme.space[2]}px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius.round};
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  outline: none;

  &:focus {
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

export const Button = styled.button`
  padding: ${(p) => p.theme.space[3]}px;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
  color: ${(p) => p.theme.colors.primaryLight};
  background-color: ${(p) => p.theme.colors.primary};
  border: none;
  border-radius: ${(p) => p.theme.radius.round};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`;
