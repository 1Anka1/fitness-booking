import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]}px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.space[3]}px;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px ${({ theme }) => theme.space[4]}px rgba(0, 0, 0, 0.06);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]}px;
`;

export const RowDescription = styled.p`
  width: ${({ theme }) => theme.space[8]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
`;

export const Value = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.ml}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const Change = styled.span<{ $positive?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${(props) => (props?.$positive ? '#16a34a' : '#ea580c')};
`;

export const IconWrapper = styled.div<{ $bg: string; $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.round};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.space[4]}px;

  background: ${(props) => props?.$bg};
  color: ${(props) => props?.$color};
`;
