import { Container, Section } from '../components/shared/Layout/Layout.styled';
import { UserProfile } from '../components/UserProfile/UserProfile';

export default function User() {
  return (
    <Section>
      <Container>
        <UserProfile />
      </Container>
    </Section>
  );
}
