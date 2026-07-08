import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  min-height: 30svh;
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.space[7]}px ${({ theme }) => theme.space[6]}px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[3]}px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.5px;
`;

export const CustomerService = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Phone = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.ml}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const OpenHours = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  transition: 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px);
  }
`;

export const NewsletterTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Form = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.space[2]}px;
  margin-bottom: ${({ theme }) => theme.space[5]}px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 14px 18px;
  border-radius: ${({ theme }) => theme.radius.round};
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  outline: none;
  transition: 250ms ${({ theme }) => theme.cubic.timingFunction};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: 14px 26px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.round};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  transition: 250ms ${({ theme }) => theme.cubic.timingFunction};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SocialTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const Socials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const SocialButton = styled.a`
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.08);
  transition: 250ms ${({ theme }) => theme.cubic.timingFunction};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;
