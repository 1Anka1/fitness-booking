import styled from 'styled-components';

export const UserSection = styled.div`
  padding-bottom: ${({ theme }) => theme.space[6]}px;
`;

export const UserHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const UserTitle = styled.div`
  margin: 0 0 ${({ theme }) => theme.space[1]}px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const UserSubtitle = styled.div`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
