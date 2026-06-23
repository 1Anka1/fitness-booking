import styled from 'styled-components';

type HeaderProps = {
  $isOverlay: boolean;
};

export const Header = styled.header<HeaderProps>`
  position: ${({ $isOverlay }) => ($isOverlay ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  padding: ${({ theme }) => theme.space[4]}px 0;

  color: ${({ $isOverlay, theme }) => ($isOverlay ? theme.colors.white : theme.colors.black)};

  background-color: transparent;

  border-bottom: 1px solid ${({ $isOverlay, theme }) => ($isOverlay ? 'none' : theme.colors.border)};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
`;
