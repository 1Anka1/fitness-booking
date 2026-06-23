import { ClubSelection } from '../../components/GymClubs/ClubSelection/ClubSelection';
import { Container, Section } from '../../components/shared/Layout/Layout.styled';

export default function GymClubs() {
  return (
    <Section>
      <Container>
        <ClubSelection />
      </Container>
    </Section>
  );
}
