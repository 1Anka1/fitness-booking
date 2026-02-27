import { Information } from '../components/Information/Information';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { SideWrapper, Wrapper } from '../components/shared/Layout/Layout.styled';

export default function Login() {
  return (
    <Wrapper>
      <SideWrapper>
        <LoginForm />
      </SideWrapper>

      <SideWrapper>
        <Information />
      </SideWrapper>
    </Wrapper>
  );
}
