import { useState } from 'react';
import * as SC from './SideActions.styled';
import { actions } from '../../config/actions';
import Modal from '../../../shared/ui/Modal/Modal';
import { ActionForm } from './ActionForm/ActionForm';
import { AdminCard } from '../../../shared/ui/admin/AdminCard/AdminCard';

type ActionType = 'user' | 'trainer' | 'session' | 'export';

export const SideActions = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedAction, setSelectedAction] = useState<ActionType | null>(null);

  const handleActionClick = (action: ActionType) => {
    setSelectedAction(action);
    setIsModalOpen(true);
  };

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <SC.QuickAccessAction>
        <AdminCard title={'Quick Actions'}>
          <SC.ActionsList>
            {actions.map(({ id, title, icon, color, type }) => (
              <SC.ActionsContentItems key={id}>
                <SC.ActionsButton onClick={() => handleActionClick(type)}>
                  <SC.IconWrapper $color={color}>{icon}</SC.IconWrapper>
                  <SC.ActionsParagraf>{title}</SC.ActionsParagraf>
                </SC.ActionsButton>
              </SC.ActionsContentItems>
            ))}
          </SC.ActionsList>
        </AdminCard>

        <AdminCard title={'Recent Activity'}>
          <div></div>
        </AdminCard>

        <AdminCard title={'System Status'}>
          <div></div>
        </AdminCard>
      </SC.QuickAccessAction>

      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <ActionForm selectedAction={selectedAction} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
