import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  padding: ${(p) => p.theme.space[4]}px;
  border-radius: ${(p) => p.theme.radius.round};
  border: 1px solid ${(p) => p.theme.colors.sideBorder};
`;

export const CardTitle = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
  padding-bottom: ${(p) => p.theme.space[3]}px;
`;
