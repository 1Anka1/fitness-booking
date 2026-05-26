import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[4]}px;
  border-radius: ${({ theme }) => theme.radius.round};
  border: 1px solid ${({ theme }) => theme.colors.sideBorder};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  padding-bottom: ${({ theme }) => theme.space[3]}px;
`;
