import { createPortal } from 'react-dom';
import * as SC from './Modal.styled';
import { IoCloseSharp } from 'react-icons/io5';

export default function Modal({ children, toggleModal }) {
  return createPortal(
    <SC.Overlay>
      <SC.Inner>
        <SC.CloseBtn onClick={() => toggleModal(false)}>
          <IoCloseSharp size={18} />
        </SC.CloseBtn>
        {children}
      </SC.Inner>
    </SC.Overlay>,
    document.body,
  );
}
