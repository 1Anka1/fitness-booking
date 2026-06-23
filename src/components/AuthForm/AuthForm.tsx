import * as SC from './AuthForm.styled';
import { Logo } from '../shared/ui/Logo/Logo';
import { SocialLogin } from './SocialLogin/SocialLogin';
import { FcSportsMode } from 'react-icons/fc';
import { ButtonBack } from '../shared/ui/ButtonBack/ButtonBack';
import type { ModeProps } from './conf/types/types';
import { Form } from './Form/Form';

export const AuthForm = ({ mode }: ModeProps) => {
  return (
    <div>
      <ButtonBack />
      <Logo />

      <SC.GreetignWrapper>
        <h2>Welcome {mode === 'login' ? 'back' : <FcSportsMode />}</h2>
        <SC.Paragraf>
          {mode === 'login'
            ? 'Log in to your account to continue'
            : 'Sign in to your account to continue'}
        </SC.Paragraf>
      </SC.GreetignWrapper>
      <Form mode={mode} />
      <SocialLogin mode={mode} />
    </div>
  );
};
