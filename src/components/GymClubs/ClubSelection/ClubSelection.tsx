import { useCallback, useMemo, useState } from 'react';
import * as SC from './ClubSelection.styled';
import { useNavigate } from 'react-router-dom';
import { getAllDataClubs } from '../../../api/userData';
import type { Club } from '../../../utils/types/types';
import { Loader } from '../../shared/ui/Loader/Loader';
import { useDataAPI } from '../../../hooks/useDataAPI';

export const ClubSelection = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const getClubs = useCallback(() => getAllDataClubs(), []);
  const { results, isLoading } = useDataAPI<Club[]>(getClubs, 'clubs', []);

  const cities = useMemo(() => {
    return [...new Set(results.map(({ city }) => city))];
  }, [results]);

  const visibleClubs = useMemo(() => {
    if (!selectedCity) return results;

    return results.filter(({ city }) => city === selectedCity);
  }, [results, selectedCity]);

  const handleClubClick = (club: Club) => {
    navigate(`/offers/pass/clubs/${club._id}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SC.SectionWrapper>
      <SC.Title>Select a city and club to see the offers</SC.Title>

      <SC.ContainerWrapper>
        <SC.Wrapper>
          <SC.TitleName>Cities:</SC.TitleName>

          <SC.ListCity>
            {cities.map((city) => (
              <li key={city}>
                <SC.CityButton type="button" onClick={() => setSelectedCity(city)}>
                  {city}
                </SC.CityButton>
              </li>
            ))}
          </SC.ListCity>
        </SC.Wrapper>

        <SC.Wrapper>
          <SC.TitleName>Clubs:</SC.TitleName>

          <SC.ClubsList>
            {visibleClubs.map((club: Club) => (
              <li key={club._id}>
                <SC.ClubButton type="button" onClick={() => handleClubClick(club)}>
                  <strong>{club.name}</strong>
                  <p>{club.address}</p>
                </SC.ClubButton>
              </li>
            ))}
          </SC.ClubsList>
        </SC.Wrapper>
      </SC.ContainerWrapper>
    </SC.SectionWrapper>
  );
};
