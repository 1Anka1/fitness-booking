import * as SC from './LoginForm.styled';
import { Logo } from '../shared/ui/Logo/Logo';
import { CiMail } from 'react-icons/ci';
import ButtonShow from '../shared/ui/ButtonShow/ButtonShow';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { basicSchema } from '../../utils/yupBasicSchema/basicSchema';
import type { FormValues } from '../../utils/yupBasicSchema/types';
import { SocialLogin } from './SocialLogin/SocialLogin';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: yupResolver(basicSchema),
    mode: 'onChange',
  });

  const errorEmail = formState.errors['email']?.message;
  const errorPassword = formState.errors['password']?.message;

  const handelShowPass = () => setShowPassword((p) => !p);

  return (
    <div>
      <Logo />
      <SC.GreetignWrapper>
        <h2>Welcome back</h2>
        <SC.Paragraf>Sign in to your account to continue</SC.Paragraf>
      </SC.GreetignWrapper>

      <SC.Form onSubmit={handleSubmit((d) => console.log(d))}>
        <SC.Label>
          Email address
          <SC.InputMessage>{errorEmail}</SC.InputMessage>
          <SC.InputContainer>
            <SC.IconWrapper>
              <CiMail size={17} />
            </SC.IconWrapper>

            <SC.Input
              placeholder="you@example.com"
              type="email"
              $error={errorEmail}
              {...register('email')}
            />
          </SC.InputContainer>
        </SC.Label>

        <SC.Label>
          Password
          <SC.InputMessage>{errorPassword}</SC.InputMessage>
          <SC.InputContainer>
            <SC.Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              $error={!!errorPassword}
              {...register('password')}
            />
            <ButtonShow onToggle={handelShowPass} visible={showPassword} />
          </SC.InputContainer>
        </SC.Label>

        <SC.CheckboxWrapper>
          <SC.CheckboxLabel>
            <input type="checkbox" id="remember" name="remember" />
            <span>Remember me</span>
          </SC.CheckboxLabel>

          <SC.ForgotPassword to={'/'}>Forgot password?</SC.ForgotPassword>
        </SC.CheckboxWrapper>

        <SC.SignInBtn type="submit">Sign in</SC.SignInBtn>
      </SC.Form>
      <SocialLogin />
    </div>
  );
};
