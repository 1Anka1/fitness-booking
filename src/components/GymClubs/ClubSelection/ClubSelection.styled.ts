import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]}px;
  min-height: 100svh;
  width: 100%;
  position: relative;
`;

export const Title = styled.h2`
  max-width: 720px;
  font-size: ${({ theme }) => theme.fontSizes.ml}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: ${({ theme }) => theme.space[3]}px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.round};
`;

export const TitleName = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ListCity = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const ClubsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[2]}px;

  max-height: 360px;
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.space[2]}px;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary}
    ${({ theme }) => theme.colors.primaryLight};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-radius: ${({ theme }) => theme.radius.round};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.round};
  }
`;

export const CityButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.round};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition:
    color 250ms ${({ theme }) => theme.cubic.timingFunction},
    background-color 250ms ${({ theme }) => theme.cubic.timingFunction},
    border-color 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ClubButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]}px;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.round};
  cursor: pointer;
  transition:
    background-color 250ms ${({ theme }) => theme.cubic.timingFunction},
    border-color 250ms ${({ theme }) => theme.cubic.timingFunction},
    transform 250ms ${({ theme }) => theme.cubic.timingFunction};

  strong {
    display: block;
    margin-bottom: ${({ theme }) => theme.space[1]}px;
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
