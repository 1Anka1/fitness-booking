import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${(p) => p.theme.space[3]}px;
`;

export const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
`;
