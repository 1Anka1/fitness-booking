import { createPortal } from 'react-dom';
import * as SC from './Modal.styled';

export default function Modal({ children, toggleModal }) {
  return createPortal(
    <SC.Overlay>
      <SC.Inner>
        <SC.CloseBtn onClick={() => toggleModal(false)}>X</SC.CloseBtn>
        {children}
      </SC.Inner>
    </SC.Overlay>,
    document.body,
  );
}
