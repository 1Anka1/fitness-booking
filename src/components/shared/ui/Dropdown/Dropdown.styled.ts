import styled from 'styled-components';

export const DropdownPanel = styled.div`
  position: fixed;
  right: ${(p) => p.theme.space[1]}px;
  top: ${(p) => p.theme.space[6]}px;
  background: ${({ theme }) => theme.colors.background};

  width: clamp(240px, 20vw, 320px);

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;

  border-bottom-left-radius: ${(p) => p.theme.space[2]}px;
  border-bottom-right-radius: ${(p) => p.theme.space[2]}px;
  z-index: 10;
`;

export const DropdownInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[2]}px;
  padding: 10px 16px;
`;
