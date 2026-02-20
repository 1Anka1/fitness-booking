import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  padding: ${(p) => p.theme.space[1]}px;
  top: 10px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  color: ${(p) => p.theme.colors.textMuted};
  border-radius: 50%;

  cursor: pointer;
  z-index: 2;
  transition:
    color 250ms ${(p) => p.theme.cubic.timingFunction},
    background-color 250ms ${(p) => p.theme.cubic.timingFunction};

  &:hover {
    color: ${(p) => p.theme.colors.primaryLight};
    background-color: ${(p) => p.theme.colors.primary};
  }
`;
