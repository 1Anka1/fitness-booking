import { useState } from 'react';
import Modal from '../components/shared/ui/Modal/Modal';
import { Container, Section } from '../components/shared/Layout/Layout.styled';
import { Admin } from '../components/Admin/Admin';

export const AdminPanel = () => {
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const sendAction = (e) => {
  //   e.preventDefault();
  // };

  return (
    <Section>
      <Admin />
      {/* <button type="button" onClick={toggleModal}>
          Create Action
        </button>
        {isModalOpen && (
          <Modal toggleModal={toggleModal}>
            <form onSubmit={sendAction}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <button type="submit">Create</button>
            </form>
          </Modal>
        )} */}
    </Section>
  );
};
