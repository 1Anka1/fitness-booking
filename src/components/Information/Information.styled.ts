import styled from 'styled-components';

export const InfoContent = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const TitleInfo = styled.h2`
  width: 350px;
  font-size: 32px;
  margin-bottom: 24px;
  line-height: 1.2;
`;

export const ParagrafInfo = styled.p`
  font-size: 18px;
  color: ${(p) => p.theme.colors.primaryLight};
  margin-bottom: 24px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoItems = styled.li`
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primaryLight};
`;
