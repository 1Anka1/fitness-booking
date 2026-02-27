import * as SC from './AdminDashboard.styled';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import AdminStats from '../AdminStats/AdminStats';
import AdminOverview from '../AdminOverview/AdminOverview';

export const AdminDashboard = () => {
  return (
    <SC.AdminDashboard>
      <AdminHeader />
      <AdminStats />
      <AdminOverview />
    </SC.AdminDashboard>
  );
};
