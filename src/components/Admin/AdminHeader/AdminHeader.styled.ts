import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]}px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.ml}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;

  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radius.round};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};

  cursor: pointer;
  transition: 0.2s ease;
`;

export const SecondaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderDark};
  color: ${({ theme }) => theme.colors.label};

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.radius.none};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundDark};
  }
`;
