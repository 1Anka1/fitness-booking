import { Navigation } from '../Navigation/Navigation';
import { Container } from '../shared/Layout/Layout.styled';
import * as SC from './Header.styled';
import { useLocation } from 'react-router-dom';
import { useAuthSelector } from '../../hooks/useAuthSelector';

export const Header = () => {
  const { pathname } = useLocation();
  const { isLogged } = useAuthSelector();

  const isOverlay = pathname === '/' && !isLogged;

  return (
    <SC.Header $isOverlay={isOverlay}>
      <Container>
        <Navigation $isOverlay={isOverlay} />
      </Container>
    </SC.Header>
  );
};
