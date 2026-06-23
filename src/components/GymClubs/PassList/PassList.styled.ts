import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 400px));
  justify-content: center;

  gap: ${({ theme }) => theme.space[5]}px;
  align-items: start;
  margin-bottom: ${({ theme }) => theme.space[5]}px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 400px));
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 400px);
  }
`;

export const Card = styled.div<{ $active?: boolean }>`
  width: 100%;
  max-width: 400px;
  min-height: 550px;
  padding: ${({ theme }) => theme.space[3]}px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.white};

  box-shadow: ${({ $active }) =>
    $active ? '0 12px 34px rgba(2, 132, 199, 0.28)' : '0 8px 28px rgba(17, 24, 39, 0.14)'};

  color: ${({ $active, theme }) => ($active ? theme.colors.primaryLight : theme.colors.label)};
  overflow: hidden;

  transition:
    background-color 250ms ${({ theme }) => theme.cubic.timingFunction},
    color 250ms ${({ theme }) => theme.cubic.timingFunction},
    border-color 250ms ${({ theme }) => theme.cubic.timingFunction},
    box-shadow 250ms ${({ theme }) => theme.cubic.timingFunction};
`;

export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.space[3]}px;
  text-align: center;
  background-color: inherit;
`;

export const PassTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.ml}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
`;

export const PriceSection = styled.div`
  text-align: center;
  background-color: inherit;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const PriceMain = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  line-height: 0.9;
`;

export const PriceSide = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  margin: ${({ theme }) => theme.space[2]}px;
`;

export const EntryFee = styled.p`
  margin: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;

  strong {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const AddonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;

export const Toggle = styled.button`
  position: relative;
  width: 65px;
  height: 35px;
  border: 1px solid
    ${({ activeAddons, theme }) => (activeAddons ? theme.colors.borderDark : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 7px;
    width: 26px;
    height: 26px;
    border-radius: ${({ theme }) => theme.radius.circle};
    background-color: ${({ theme }) => theme.colors.borderDark};
    transition: transform 500ms ${({ theme }) => theme.cubic.timingFunction};
  }

  &[aria-pressed='true']::before {
    transform: translateX(24px);
    background-color: ${({ theme }) => theme.colors.backgroundDark};
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: inherit;

  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const SelectPass = styled.a<{ $active?: boolean }>`
  text-align: center;
  width: ${({ theme }) => theme.space[9]}px;
  padding: ${({ theme }) => theme.space[3]}px;

  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.primary};

  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.white)};
  border: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.backgroundDark : theme.colors.primaryLight)};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1px;

  cursor: pointer;
  transition:
    background-color 250ms ${({ theme }) => theme.cubic.timingFunction},
    transform 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Features = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
`;

export const FeatureItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.space[3]}px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.m}px;

  &::before {
    content: '✓';
    font-size: ${({ theme }) => theme.fontSizes.ml}px;
    line-height: 1;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
