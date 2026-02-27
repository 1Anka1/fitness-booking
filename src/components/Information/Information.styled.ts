import styled from 'styled-components';

export const InfoContent = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const TitleInfo = styled.h2`
  width: 350px;
  font-size: ${(p) => p.theme.fontSizes.l}px;
  margin-bottom: ${(p) => p.theme.space[4]}px;
  line-height: 1.2;
`;

export const ParagrafInfo = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: ${(p) => p.theme.colors.primaryLight};
  margin-bottom: ${(p) => p.theme.space[4]}px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const InfoItems = styled.li`
  display: flex;
  flex-direction: column;
  font-weight: ${(p) => p.theme.fontWeights.medium};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const Span = styled.span`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  color: ${(p) => p.theme.colors.primaryLight};
`;
