import { FaApple, FaGoogle } from 'react-icons/fa6';
import * as SC from './SocialLogin.styled';

export const SocialLogin = () => {
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
        Don't have an account? <SC.StyledLink to="/signup">Sign up</SC.StyledLink>
      </SC.SignUp>
    </SC.SocialWrapper>
  );
};
