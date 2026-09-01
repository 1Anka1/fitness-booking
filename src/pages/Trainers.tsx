import { DashboardTrainers } from '../components/DashboardTrainers/DashboardTrainers';
import { Section, Container } from '../components/shared/Layout/Layout.styled';

export default function Trainers() {
  return (
    <Section>
      <Container>
        <DashboardTrainers />
      </Container>
    </Section>
  );
}
