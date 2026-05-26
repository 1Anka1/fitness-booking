import styled from 'styled-components';

export const InfoContent = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const TitleInfo = styled.h2`
  width: 350px;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  line-height: 1.2;
`;

export const ParagrafInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.primaryLight};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const InfoItems = styled.li`
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.primaryLight};
`;
