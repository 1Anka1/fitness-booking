import { navigationItems } from '../config/navigationItems';
import * as SC from '../Navigation.styled';
import { UserNav } from '../UserNav/UserNav';

export const MenuNav = () => {
  return (
    <>
      <SC.NavMenuList>
        {navigationItems.map(({ id, title, route }) => (
          <SC.NavMenuListItem key={id}>
            <SC.NavLinkItems to={route} end>
              {title}
            </SC.NavLinkItems>
          </SC.NavMenuListItem>
        ))}
      </SC.NavMenuList>

      <UserNav />
    </>
  );
};
