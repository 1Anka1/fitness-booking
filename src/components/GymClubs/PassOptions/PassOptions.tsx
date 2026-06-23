import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as SC from './PassOptions.styled';

import { getClubById } from '../../../api/userData';
import { useDataAPI } from '../../../hooks/useDataAPI';
import { Loader } from '../../shared/ui/Loader/Loader';
import { buttonPass } from './config/buttonPass';
import { useDispatch } from 'react-redux';
import { setSelectedClub } from '../../../redux/checkout/checkoutSlice';
import { PassesByType } from '../PassesByType/PassesByType';

export default function PassOptions() {
  const [selectedPassType, setSelectedPassType] = useState<string>('Daily');

  const { clubId } = useParams();
  const dispatch = useDispatch();

  const getClub = useCallback(() => getClubById(clubId), [clubId]);
  const { results, isLoading } = useDataAPI(getClub, 'clubId');
  const { _id, name, address } = results;

  if (isLoading) {
    return <Loader />;
  }

  dispatch(setSelectedClub(results));

  const handleNameSelected = (e) => {
    const type = e.target.name;
    setSelectedPassType(type);
  };

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
