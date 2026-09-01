import { Container } from '../shared/Layout/Layout.styled';
import { useLocation } from 'react-router-dom';

export const DashboardTrainers = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Container>
      <div>DashboardTrainers</div>
    </Container>
  );
};
