import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  padding: ${({ theme }) => theme.space[1]}px;
  top: 10px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  border-radius: 50%;

  cursor: pointer;
  z-index: 2;
  transition:
    color 250ms ${({ theme }) => theme.cubic.timingFunction},
    background-color 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
