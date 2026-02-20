import { useState } from 'react';
import Modal from '../components/shared/ui/Modal/Modal';

export const AdminPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [title, setTitle] = useState('First Action');
  // const [start, setStart] = useState('2026-02-20');
  // const [end, setEnd] = useState('2026-02-20');

  // const eventsServicePlugin = createEventsServicePlugin();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sendAction = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      Admin Panel
      <button type="button" onClick={toggleModal}>
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
      )}
    </div>
  );
};
