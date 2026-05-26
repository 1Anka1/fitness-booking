import { Container } from '../shared/Layout/Layout.styled';
import { useLocation } from 'react-router-dom';

import * as SC from './DashboardTrainers.styled';

export const DashboardTrainers = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Container>
      <div>DashboardTrainers</div>
    </Container>
  );
};
