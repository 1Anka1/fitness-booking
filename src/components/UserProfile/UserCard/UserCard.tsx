import { useAuthSelector } from '../../../hooks/useAuthSelector';
import { useUserSelector } from '../../../hooks/useUserSelector';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { updateUser } from '../../../redux/user/userOperations';
import * as SC from './UserCard.styled';
import { useState } from 'react';

export const UserCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [params, setParams] = useState('');
  const dispatch = useAppDispatch();

  const { currentUser, club, pass, includeAllClubs, passStartDate, finalPrice } = useUserSelector();
  const { userId } = useAuthSelector();

  if (!currentUser) {
    return (
      <SC.Card>
        <SC.Container>
          <SC.Value>No user data</SC.Value>
        </SC.Container>
      </SC.Card>
    );
  }

  const { fullName, email, role, avatar } = currentUser;

  const initials = fullName
    ?.split(' ')
    .filter(Boolean)
    .map((name: string) => name[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const toLocalDate = (date: string | null) => {
    if (!date) return '—';

    const [year, month, day] = date.split('-').map(Number);

    if (!year || !month || !day) {
      return date;
    }

    return new Date(year, month - 1, day).toLocaleDateString('de-DE');
  };

  const handleSave = () => {
    setIsEditing(false);

    dispatch(
      updateUser({
        userId,
        params,
      }),
    );
  };

  const allClubsText = includeAllClubs === null ? '—' : includeAllClubs ? 'Yes' : 'No';

  return (
    <SC.Card>
      <SC.ProfileHeader>
        <SC.Avatar>
          {avatar ? (
            <SC.AvatarImage src={avatar} alt={fullName || 'User avatar'} />
          ) : (
            <SC.AvatarInitials>{initials || 'U'}</SC.AvatarInitials>
          )}
        </SC.Avatar>

        <SC.ProfileInfo>
          <SC.UserName>{fullName || '—'}</SC.UserName>
          <SC.Role>{role || '—'}</SC.Role>
        </SC.ProfileInfo>
      </SC.ProfileHeader>

      <SC.Container>
        <SC.SectionTitle>Personal information</SC.SectionTitle>

        <SC.InfoGrid>
          <SC.InfoItem>
            <SC.Label>Full name</SC.Label>

            {isEditing ? (
              <>
                <input value={params} onChange={(e) => setParams(e.target.value)} autoFocus />

                <button type="button" onClick={handleSave}>
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setParams(fullName || '');
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <SC.Value>{fullName || '—'}</SC.Value>

                <button
                  type="button"
                  onClick={() => {
                    setParams(fullName || '');
                    setIsEditing(true);
                  }}
                >
                  Change
                </button>
              </>
            )}
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>Email</SC.Label>
            <SC.Value>{email || '—'}</SC.Value>
            <button type="button">Change</button>
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>Password</SC.Label>
            <SC.Value>*********</SC.Value>
            <button type="button">Change</button>
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>Member since</SC.Label>
            <SC.Value>—</SC.Value>
          </SC.InfoItem>
        </SC.InfoGrid>
      </SC.Container>

      <SC.Container>
        <SC.SectionTitle>Membership</SC.SectionTitle>

        <SC.InfoGrid>
          <SC.InfoItem>
            <SC.Label>Club</SC.Label>
            <SC.Value>{club ? `${club.name} / ${club.address}` : 'No club selected'}</SC.Value>
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>Status</SC.Label>
            <SC.Status>{pass ? 'Active' : 'No active pass'}</SC.Status>
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>Pass Type</SC.Label>
            <SC.Value>{pass?.name || 'No pass selected'}</SC.Value>
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>Pass description</SC.Label>
            <SC.Value>{pass?.description || '—'}</SC.Value>
          </SC.InfoItem>
        </SC.InfoGrid>
      </SC.Container>

      <SC.Container>
        <SC.SectionTitle>Pass information</SC.SectionTitle>

        <SC.InfoGrid>
          <SC.InfoItem>
            <SC.Label>Price</SC.Label>
            <SC.Value>{finalPrice !== null ? `${finalPrice} $` : '—'}</SC.Value>
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>Opening hours</SC.Label>
            <SC.Value>{pass?.openingHours || '—'}</SC.Value>
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>Pass start date</SC.Label>
            <SC.Value>{toLocalDate(passStartDate)}</SC.Value>
          </SC.InfoItem>

          <SC.InfoItem>
            <SC.Label>All clubs access</SC.Label>
            <SC.Value>{allClubsText}</SC.Value>
          </SC.InfoItem>
        </SC.InfoGrid>
      </SC.Container>
    </SC.Card>
  );
};
