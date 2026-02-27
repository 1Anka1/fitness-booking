import { FaDownload } from 'react-icons/fa6';
import * as SC from './AdminHeader.styled';
import { FiPlus } from 'react-icons/fi';

export const AdminHeader = () => {
  return (
    <SC.FlexWrapper>
      <SC.DescriptionWrapper>
        <SC.Title>Admin Dashboard</SC.Title>
        <SC.Subtitle>Manage users, trainers, and monitor system activity</SC.Subtitle>
      </SC.DescriptionWrapper>

      <SC.Actions>
        <SC.SecondaryButton>
          <FaDownload size={18} />
          Export Data
        </SC.SecondaryButton>

        <SC.PrimaryButton>
          <FiPlus size={18} />
          Add User
        </SC.PrimaryButton>
      </SC.Actions>
    </SC.FlexWrapper>
  );
};
