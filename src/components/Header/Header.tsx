import { UserBar } from '../shared/ui/UserBar/UserBar';
import { Navigation } from '../Navigation/Navigation';
import { Container } from '../shared/Layout/Layout.styled';
import { Search } from '../shared/ui/Search/Search';
import * as SC from './Header.styled';

export const Header = () => {
  return (
    <SC.Header>
      <Container>
        <SC.WrapperNav>
          <Navigation />

          <SC.Wrapper>
            <Search />
            <UserBar />
          </SC.Wrapper>
        </SC.WrapperNav>
      </Container>
    </SC.Header>
  );
};
