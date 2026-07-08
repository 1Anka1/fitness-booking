import { GymLinks } from './config/gym';
import { socialIcons } from './config/icon';
import { InfoLinks } from './config/info';
import {
  FooterWrapper,
  Container,
  Columns,
  Column,
  Title,
  Link,
  NewsletterTitle,
  Form,
  Input,
  Button,
  SocialTitle,
  Socials,
  SocialButton,
  CustomerService,
  Phone,
  OpenHours,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Columns>
          <Column>
            <Title>DO YOU HAVE ANY QUESTIONS?</Title>
            <CustomerService>Customer Service Office</CustomerService>
            <Phone>223 567 789</Phone>
            <OpenHours>Mon-Thu 8:00-20:00 | FRI 8:00-17:00</OpenHours>
          </Column>

          <Column>
            <Title>INFORMATION</Title>
            {InfoLinks.map(({ id, title, link }) => (
              <Link key={id} href={link}>
                {title}
              </Link>
            ))}
          </Column>

          <Column>
            <Title>GYM</Title>
            {GymLinks.map(({ id, title, link }) => (
              <Link key={id} href={link}>
                {title}
              </Link>
            ))}
          </Column>

          <Column>
            <NewsletterTitle>Subscribe to our email newsletter</NewsletterTitle>

            <Form>
              <Input placeholder="Your email" type="email" />
              <Button>SUBSCRIBE</Button>
            </Form>

            <SocialTitle>Follow us</SocialTitle>

            <Socials>
              {socialIcons.map(({ id, icon }) => (
                <SocialButton key={id}>{icon}</SocialButton>
              ))}
            </Socials>
          </Column>
        </Columns>
      </Container>
    </FooterWrapper>
  );
};
