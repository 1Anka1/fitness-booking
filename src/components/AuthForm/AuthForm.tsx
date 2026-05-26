import * as SC from './AuthForm.styled';
import { Logo } from '../shared/ui/Logo/Logo';
import { CiMail } from 'react-icons/ci';
import ButtonShow from '../shared/ui/ButtonShow/ButtonShow';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema, registrationSchema } from '../../utils/yupBasicSchema/basicSchema';
import type { FormValues } from '../../utils/yupBasicSchema/types';
import { SocialLogin } from './SocialLogin/SocialLogin';
import { useDispatch } from 'react-redux';
import { login, registration } from '../../redux/auth/authOperations';
import { FcSportsMode } from 'react-icons/fc';
import { ButtonBack } from '../shared/ui/ButtonBack/ButtonBack';

export const AuthForm = ({ mode }: { mode: 'login' | 'registration' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const basicSchema = mode === 'login' ? loginSchema : registrationSchema;

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: yupResolver(basicSchema),
    mode: 'onChange',
  });

  //ERROR MESSAGES
  const errorEmail = formState.errors['email']?.message;
  const errorPassword = formState.errors['password']?.message;
  const errorFullName = formState.errors['fullName']?.message;

  const handelShowPass = () => setShowPassword((p) => !p);

  const onSubmit = ({ email, fullName, password }: FormValues) => {
    if (mode === 'login') {
      dispatch(login({ email, password }));
    }

    if (mode === 'registration') {
      dispatch(registration({ email, fullName, password }));
    }
    reset();
  };

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

      <SC.Form onSubmit={handleSubmit(onSubmit)}>
        {mode === 'registration' && (
          <SC.Label>
            Full name
            <SC.InputMessage>{errorFullName}</SC.InputMessage>
            <SC.InputContainer>
              <SC.Input
                placeholder="Your full name"
                type="text"
                {...register('fullName')}
                $error={errorFullName}
              />
            </SC.InputContainer>
          </SC.Label>
        )}

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

        <SC.SignInBtn type="submit"> Sign in</SC.SignInBtn>
      </SC.Form>
      <SocialLogin mode={mode} />
    </div>
  );
};
