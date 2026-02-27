import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[4]}px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${(p) => p.theme.space[3]}px;
  border-radius: ${(p) => p.theme.radius.round};
  background: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.border};
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px ${(p) => p.theme.space[4]}px rgba(0, 0, 0, 0.06);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[1]}px;
`;

export const RowDescription = styled.p`
  width: ${(p) => p.theme.space[8]}px;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  color: ${(p) => p.theme.colors.textSecondary};
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
`;

export const Value = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.ml}px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.black};
`;

export const Change = styled.span<{ $positive?: boolean }>`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  color: ${(props) => (props?.$positive ? '#16a34a' : '#ea580c')};
`;

export const IconWrapper = styled.div<{ $bg: string; $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: ${(p) => p.theme.radius.round};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${(p) => p.theme.space[4]}px;

  background: ${(props) => props?.$bg};
  color: ${(props) => props?.$color};
`;
