import { useCallback, useMemo, useState } from 'react';
import { getAllDataClubs } from '../../api/userData';
import { ButtonBack } from '../shared/ui/ButtonBack/ButtonBack';
import { useDataAPI } from '../../hooks/useDataAPI';
import { Loader } from '../shared/ui/Loader/Loader';
import * as SC from './GymPasses.styled';

export const GymPasses = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const getClubs = useCallback(() => getAllDataClubs(), []);
  const { results, isLoading } = useDataAPI(getClubs, 'clubs');

  const cities = useMemo(() => {
    return [...new Set(results.map(({ city }) => city))];
  }, [results]);

  const clubsBySelectedCity = useMemo(() => {
    if (!selectedCity) return [];

    return results.filter(({ city }) => city === selectedCity);
  }, [results, selectedCity]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ButtonBack />
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

        {selectedCity && (
          <SC.Wrapper>
            <SC.TitleName>Clubs:</SC.TitleName>

            <h3>{selectedCity}</h3>

            <SC.ListCity>
              {clubsBySelectedCity.map(({ _id, name, address }) => (
                <li key={_id}>
                  <strong>{name}</strong>
                  <p>{address}</p>
                </li>
              ))}
            </SC.ListCity>
          </SC.Wrapper>
        )}
      </SC.ContainerWrapper>
    </>
  );
};
