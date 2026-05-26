import styled from 'styled-components';

export const ButtonBack = styled.button`
  display: flex;
  height: ${({ theme }) => theme.space[4]}px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space[4]}px;

  :hover {
    color: ${({ theme }) => theme.colors.backgroundDark};
    transition: color 400ms ${({ theme }) => theme.cubic.timingFunction};
  }
`;
