import { Search } from '../../shared/ui/Search/Search';
import { UserBar } from '../../shared/ui/UserBar/UserBar';
import * as SC from '../Navigation.styled';

export const UserNav = () => {
  return (
    <SC.WrapperUserNav>
      <Search placeholder={'Search trainers, sessions...'} />
      <UserBar />
    </SC.WrapperUserNav>
  );
};
