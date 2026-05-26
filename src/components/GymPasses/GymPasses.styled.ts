import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.ml}px;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
`;

export const TitleName = styled.h3`
  margin: ${({ theme }) => theme.space[2]}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Paragraf = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const ListCity = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
`;

export const CityButton = styled.button`
  width: ${({ theme }) => theme.space[9]}px;
  padding: ${({ theme }) => theme.space[3]}px;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.black};
  transition:
    color 250ms ${({ theme }) => theme.cubic.timingFunction},
    background-color 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
