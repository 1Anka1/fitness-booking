import styled from 'styled-components';
import homeImage from '../../assets/image/gym.jpg';

export const HomeSection = styled.section`
  position: relative;
  min-height: 100svh;
  width: 100%;
  overflow: hidden;

  background-image: url(${homeImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
`;
