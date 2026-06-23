import styled from 'styled-components';

export const AuthWrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.space[6]}px;
`;

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[5]}px;

  font-size: 44px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.textPrimary};

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 5px;
    margin-right: ${({ theme }) => theme.space[2]}px;
    vertical-align: middle;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Tabs = styled.div`
  display: flex;
  width: 305px;
  min-height: 42px;
  margin-bottom: ${({ theme }) => theme.space[5]}px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Tab = styled.button<{ $active: boolean }>`
  width: 50%;
  border: none;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primaryLight : 'transparent'};

  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.textPrimary)};

  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;

  transition:
    color 250ms ${({ theme }) => theme.cubic.timingFunction},
    background-color 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const AuthPassWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2px minmax(0, 1fr);
  gap: ${({ theme }) => theme.space[6]}px;
  align-items: start;
  width: 100%;
  min-height: 360px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[4]}px;
    min-height: auto;
  }
`;

export const FormWrapper = styled.div`
  min-width: 0;
  min-height: 340px;

  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    width: 100%;
    min-height: 2px;
  }
`;

export const SocialWrapper = styled.div`
  min-width: 0;
  min-height: 340px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SocialButton = styled.button`
  width: 145px;
  min-height: 40px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 15px rgba(17, 24, 39, 0.1);

  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.lightMedium};

  transition:
    border-color 250ms ${({ theme }) => theme.cubic.timingFunction},
    box-shadow 250ms ${({ theme }) => theme.cubic.timingFunction},
    transform 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 24px rgba(17, 24, 39, 0.14);
    transform: translateY(-1px);
  }
`;
