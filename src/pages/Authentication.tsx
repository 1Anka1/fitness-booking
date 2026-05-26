import { AuthForm } from '../components/AuthForm/AuthForm';
import { Information } from '../components/Information/Information';
import { SideWrapper, Wrapper } from '../components/shared/Layout/Layout.styled';

type AuthModeProps = {
  mode: 'login' | 'registration';
};

export default function Authentication({ mode }: AuthModeProps) {
  return (
    <Wrapper>
      <SideWrapper>
        <AuthForm mode={mode} />
      </SideWrapper>

      <SideWrapper>
        <Information />
      </SideWrapper>
    </Wrapper>
  );
}
