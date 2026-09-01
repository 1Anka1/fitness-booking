import { useCallback, useEffect, useState, type MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import * as SC from './PassOptions.styled';

import { getClubById } from '../../../api/userData';
import { useDataAPI } from '../../../hooks/useDataAPI';
import { Loader } from '../../shared/ui/Loader/Loader';
import { buttonPass } from './config/buttonPass';
import { setSelectedClub } from '../../../redux/checkout/checkoutSlice';
import { PassesByType } from '../PassesByType/PassesByType';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import type { Club } from '../../../utils/types/types';

export default function PassOptions() {
  const [selectedPassType, setSelectedPassType] = useState<string>('Daily');

  const { clubId } = useParams();
  const dispatch = useAppDispatch();

  const getClub = useCallback(() => getClubById(clubId), [clubId]);
  const { results: club, isLoading } = useDataAPI<Club | null>(getClub, clubId, null);

  useEffect(() => {
    if (!club) return;

    dispatch(setSelectedClub(club));
  }, [club, dispatch]);

  const handleNameSelected = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedPassType(e.currentTarget.name);
  };

  if (isLoading || !club) {
    return <Loader />;
  }

  const { name, address } = club;

  return (
    <>
      <SC.Tabs>
        {buttonPass.map(({ id, title, pass }) => (
          <SC.TabButton
            key={id}
            type="button"
            name={pass}
            $active={selectedPassType === pass}
            onClick={handleNameSelected}
          >
            {title}
          </SC.TabButton>
        ))}
      </SC.Tabs>

      <SC.ClubInfo>
        <SC.ClubInfoWrapper>
          <SC.ClubName>{name}</SC.ClubName>
          <SC.Address>{address}</SC.Address>
        </SC.ClubInfoWrapper>

        <SC.ChangeButton to="/offers/pass/clubs">Change</SC.ChangeButton>
      </SC.ClubInfo>

      <PassesByType selectedPassType={selectedPassType} />
    </>
  );
}
