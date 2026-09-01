import * as SC from './UserProfile.styled';
import { UserCard } from './UserCard/UserCard';

export const UserProfile = () => {
  return (
    <SC.UserSection>
      <SC.UserHeader>
        <SC.UserTitle>My Profile</SC.UserTitle>
        <SC.UserSubtitle>View your personal information and membership details.</SC.UserSubtitle>
      </SC.UserHeader>

      <UserCard />
    </SC.UserSection>
  );
};
