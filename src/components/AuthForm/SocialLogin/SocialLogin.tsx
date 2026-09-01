import { FaApple, FaGoogle } from 'react-icons/fa6';
import * as SC from './SocialLogin.styled';
import type { ModeProps } from '../conf/types/types';

export const SocialLogin = ({ mode }: ModeProps) => {
  return (
    <SC.SocialWrapper>
      <SC.Divider>
        <SC.Line />
        <SC.Text>or continue with</SC.Text>
        <SC.Line />
      </SC.Divider>

      <SC.Buttons>
        <SC.SocialButton>
          <FaGoogle size={18} color="red" />
          Google
        </SC.SocialButton>
        <SC.SocialButton>
          <FaApple size={18} color="black" />
          Apple
        </SC.SocialButton>
      </SC.Buttons>

      <SC.SignUp>
        {mode === 'login' ? (
          <p>
            Don't have an account?
            <SC.StyledLink to="/auth/registration"> Register</SC.StyledLink>
          </p>
        ) : (
          <p>
            Already have an account? <SC.StyledLink to="/auth/login"> Log in</SC.StyledLink>
          </p>
        )}
      </SC.SignUp>
    </SC.SocialWrapper>
  );
};
