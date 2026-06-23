import { useState } from 'react';
import { Form } from '../../AuthForm/Form/Form';
import { SocialLogin } from '../../AuthForm/SocialLogin/SocialLogin';
import * as SC from './PassAuth.styled';

export const PassAuth = () => {
  const [mode, setMode] = useState('login');

  const handleModeChange = (mode: string) => {
    setMode(mode);
  };
  return (
    <>
      <SC.Tabs>
        <SC.Tab $active={mode === 'registration'} onClick={() => handleModeChange('registration')}>
          Register
        </SC.Tab>

        <SC.Tab $active={mode === 'login'} onClick={() => handleModeChange('login')}>
          Log in
        </SC.Tab>
      </SC.Tabs>

      <SC.AuthPassWrapper>
        <SC.FormWrapper>
          <Form mode={mode} />
        </SC.FormWrapper>

        <SC.Divider />

        <SC.SocialWrapper>
          <SocialLogin mode={mode} />
        </SC.SocialWrapper>
      </SC.AuthPassWrapper>
    </>
  );
};
