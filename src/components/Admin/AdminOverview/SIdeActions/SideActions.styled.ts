import styled from 'styled-components';

export const QuickAccessAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
`;

export const ActionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const ActionsContentItems = styled.li`
  border-radius: ${({ theme }) => theme.radius.round};
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 350ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const ActionsButton = styled.button`
  width: 300px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius.round};

  display: flex;
  align-items: center;
  gap: 12px;
  background-color: inherit;
  border: ${({ theme }) => theme.radius.none};
`;

export const IconWrapper = styled.div<{ $color: string }>`
  color: ${(props) => props?.$color};
`;

export const ActionsParagraf = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
`;
