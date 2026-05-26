import styled from 'styled-components';

export const DropdownPanel = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.space[1]}px;
  top: ${({ theme }) => theme.space[7]}px;
  background: ${({ theme }) => theme.colors.background};

  width: clamp(240px, 20vw, 320px);

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;

  border-bottom-left-radius: ${({ theme }) => theme.space[2]}px;
  border-bottom-right-radius: ${({ theme }) => theme.space[2]}px;
  z-index: 10;
`;

export const DropdownInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]}px;
  padding: 10px 16px;
`;
