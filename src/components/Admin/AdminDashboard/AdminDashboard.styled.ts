import styled from 'styled-components';

export const AdminDashboardWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: start;
  justify-content: space-between;
  padding: ${(p) => p.theme.space[4]}px;
`;

export const AdminDashboard = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[1]}px;
`;

export const Title = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.ml}px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.textPrimary};
`;

export const Subtitle = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: ${(p) => p.theme.colors.textSecondary};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[2]}px;

  padding: 10px 16px;
  border-radius: ${(p) => p.theme.radius.round};
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};

  cursor: pointer;
  transition: 0.2s ease;
`;

export const SecondaryButton = styled(BaseButton)`
  background: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.borderDark};
  color: ${(p) => p.theme.colors.label};

  &:hover {
    background: ${(p) => p.theme.colors.background};
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${(p) => p.theme.colors.primary};
  border: ${(p) => p.theme.radius.none};
  color: ${(p) => p.theme.colors.white};

  &:hover {
    background: ${(p) => p.theme.colors.backgroundDark};
  }
`;
