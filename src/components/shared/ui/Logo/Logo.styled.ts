import styled from 'styled-components';

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[2]}px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radius.round};
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;
