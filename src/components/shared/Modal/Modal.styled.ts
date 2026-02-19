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
  padding: 8px;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 32px;
  padding-right: 32px;
  text-align: center;
  background-color: var(--background-color);

  max-width: 518px;
  width: 90%;

  max-height: 90%;
  border-radius: 40px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--primary-text-color);
  transition: color 350ms var(--timing-function);
  :hover {
    color: var(--primary-color);
  }
`;
