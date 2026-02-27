import * as SC from './AdminOverview.styled';
import { RecentUsers } from './RecentUsers/RecentUsers';
import { SideActions } from './SIdeActions/SideActions';

export const AdminOverview = () => {
  return (
    <SC.AdminActionsWrapper>
      <RecentUsers />
      <SideActions />
    </SC.AdminActionsWrapper>
  );
};

export default AdminOverview;
