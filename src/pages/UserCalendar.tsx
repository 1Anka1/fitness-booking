import { Calendar } from '../components/Calendar/Calendar';
import { Container, Section } from '../components/shared/Layout/Layout.styled';

export default function UserCalendar() {
  return (
    <Section>
      <Container>
        <Calendar />
      </Container>
    </Section>
  );
}
