import { useState } from 'react';
import type { ModeProps } from '../conf/types/types.ts';
import { loginSchema, registrationSchema } from '../../../utils/yupBasicSchema/basicSchema.ts';
import { useForm, type Resolver, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { FormValues } from '../../../utils/yupBasicSchema/types.ts';
import { login, registration } from '../../../redux/auth/authOperations.ts';
import * as SC from '../AuthForm.styled.ts';
import { CiMail } from 'react-icons/ci';
import ButtonShow from '../../shared/ui/ButtonShow/ButtonShow.tsx';
import { useChekoutSelector } from '../../../hooks/useChekoutSelector.tsx';
import { useAuthSelector } from '../../../hooks/useAuthSelector.tsx';
import { Loader } from '../../shared/ui/Loader/Loader.tsx';
import { useAppDispatch } from '../../../redux/hooks/hooks.ts';

export const Form = ({ mode }: ModeProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const { isRefreshing } = useAuthSelector();
  const { finalPrice, club, passType, allClub, startDate } = useChekoutSelector();
  const { error } = useAuthSelector();

  const dispatch = useAppDispatch();

  const basicSchema = mode === 'login' ? loginSchema : registrationSchema;
  const resolver = yupResolver(basicSchema) as Resolver<FormValues>;

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver,
    mode: 'onChange',
  });

  //ERROR MESSAGES
  const errorEmail = formState.errors['email']?.message;
  const errorPassword = formState.errors['password']?.message;
  const errorFullName = formState.errors['fullName']?.message;

  const handelShowPass = () => setShowPassword((p) => !p);

  const onSubmit: SubmitHandler<FormValues> = async (data, e) => {
    e?.preventDefault();

    try {
      if (mode === 'login') {
        await dispatch(
          login({
            email: data.email,
            password: data.password,
          }),
        ).unwrap();
      } else if (mode === 'registration') {
        await dispatch(
          registration({
            email: data.email,
            fullName: data.fullName ?? '',
            password: data.password,
            role: passType?.role ?? 'Client',
            selectedClub: club ?? null,
            selectedPass: passType ?? null,
            includeAllClubs: allClub,
            passStartDate: startDate ?? null,
            finalPrice: finalPrice ?? null,
          }),
        ).unwrap();
      }
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <SC.Form onSubmit={handleSubmit(onSubmit)}>
      {error && <SC.ServerError>{error}</SC.ServerError>}
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
            $error={errorPassword}
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
        {mode === 'login' && <SC.ForgotPassword to={'/'}>Forgot password?</SC.ForgotPassword>}
      </SC.CheckboxWrapper>

      <SC.SignInBtn type="submit"> Sign in</SC.SignInBtn>
    </SC.Form>
  );
};
