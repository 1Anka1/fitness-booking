import * as SC from './Admin.styled';
import { AdminDashboard } from './AdminDashboard/AdminDashboard.js';
import { AdminNav } from './config/admin.js';

export const Admin = () => {
  return (
    <SC.AdminWrapper>
      <SC.SideNavWrapper>
        <SC.AdminNavList>
          {AdminNav.map(({ id, title, icon, href }) => (
            <li key={id}>
              <SC.AdminNavItemLink to={href} end={false}>
                {icon} {title}
              </SC.AdminNavItemLink>
            </li>
          ))}
        </SC.AdminNavList>
      </SC.SideNavWrapper>
      <AdminDashboard />
    </SC.AdminWrapper>
  );
};
