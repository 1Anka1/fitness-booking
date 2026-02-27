import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  overflow-y: auto;
  backdrop-filter: blur(2px);
  padding: ${(p) => p.theme.space[2]}px;
`;

export const Inner = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(p) => p.theme.colors.primaryLight};
  border-radius: ${(p) => p.theme.radius.round};
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const CloseBtn = styled.button`
  display: flex;
  height: ${(p) => p.theme.space[4]}px;
  align-items: center;
  position: absolute;
  top: ${(p) => p.theme.space[2]}px;
  right: ${(p) => p.theme.space[2]}px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${(p) => p.theme.radius.round};
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.primaryLight};
  transition: color 350ms ${(p) => p.theme.cubic.timingFunction};

  :hover {
    color: ${(p) => p.theme.colors.backgroundDark};
  }
`;
