import { useState } from 'react';
import * as SC from './ActionForm.styled';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { addEvent } from '../../../../../redux/calendar/calendarSlice';

export const ActionForm = ({ selectedAction, toggleModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');

  const dispatch = useDispatch();

  const sendAction = (e) => {
    e.preventDefault();

    if (selectedAction !== 'session') return;
    dispatch(
      addEvent({
        id: crypto.randomUUID(),
        title,
        description,
        location,
        start: startValue,
        end: endValue,
      }),
    );
    toast.success('Session successfully created ✨');
    toggleModal();
  };

  return (
    <SC.FormActions onSubmit={sendAction}>
      <SC.Label>Trainer Name:</SC.Label>
      <SC.Input
        type="text"
        placeholder="Enter trainer name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <SC.Label>Session Type:</SC.Label>
      <SC.Select required value={description} onChange={(e) => setDescription(e.target.value)}>
        <option value="" disabled>
          * Please select your option *
        </option>
        <option>Individuals</option>
        <option>Group</option>
      </SC.Select>

      <SC.Label>Location:</SC.Label>
      <SC.Input
        type="text"
        placeholder="Enter studio"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <SC.Label>Start Date:</SC.Label>
      <SC.Input
        type="datetime-local"
        value={startValue}
        onChange={(e) => setStartValue(e.target.value)}
        required
      />

      <SC.Label>End Date:</SC.Label>
      <SC.Input
        type="datetime-local"
        value={endValue}
        onChange={(e) => setEndValue(e.target.value)}
        required
      />

      <SC.Button type="submit">Create Session</SC.Button>
    </SC.FormActions>
  );
};
