import { useState } from 'react';
import Modal from '../shared/Modal/Modal';
import { createEventsServicePlugin } from '@schedule-x/events-service';

export const AdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [title, setTitle] = useState('First Action');
  // const [start, setStart] = useState('2026-02-20');
  // const [end, setEnd] = useState('2026-02-20');

  const eventsServicePlugin = createEventsServicePlugin();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sendAction = (e) => {
    e.preventDefault();

    eventsServicePlugin.add({
      id: 1,
      title: 'Event 1',
      start: Temporal.PlainDate.from('2026-02-20'),
      end: Temporal.PlainDate.from('2026-02-20'),
    });
  };

  console.log(eventsServicePlugin.eventsFacade);

  return (
    <div>
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
