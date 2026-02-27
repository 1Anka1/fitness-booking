import { Outlet } from 'react-router-dom';
import * as SC from './AdminLayout.styled';
import { navigation } from '../config/adminNav';
import { Section } from '../../shared/Layout/Layout.styled';
export const AdminLayout = () => {
  return (
    <Section>
      <SC.AdminWrapper>
        <SC.SideNavWrapper>
          <SC.AdminNavList>
            {navigation.map(({ id, title, icon, to }) => (
              <li key={id}>
                <SC.AdminNavItemLink to={to} end={false}>
                  {icon} {title}
                </SC.AdminNavItemLink>
              </li>
            ))}
          </SC.AdminNavList>
        </SC.SideNavWrapper>
        <Outlet />
      </SC.AdminWrapper>
    </Section>
  );
};
