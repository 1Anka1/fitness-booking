import styled from 'styled-components';

export const QuickAccessAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[4]}px;
`;

export const ActionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const ActionsContentItems = styled.li`
  border-radius: ${(p) => p.theme.radius.round};
  background-color: ${(p) => p.theme.colors.background};
  transition: background-color 350ms ${(p) => p.theme.cubic.timingFunction};

  &:hover {
    background-color: ${(p) => p.theme.colors.primaryLight};
  }
`;

export const ActionsButton = styled.button`
  width: 300px;
  padding: 12px;
  border-radius: ${(p) => p.theme.radius.round};

  display: flex;
  align-items: center;
  gap: 12px;
  background-color: inherit;
  border: ${(p) => p.theme.radius.none};
`;

export const IconWrapper = styled.div<{ $color: string }>`
  color: ${(props) => props?.$color};
`;

export const ActionsParagraf = styled.p`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.lightMedium};
`;
