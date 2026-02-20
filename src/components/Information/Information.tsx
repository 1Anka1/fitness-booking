import { FaDumbbell } from 'react-icons/fa6';
import * as SC from './Information.styled';
import { InformationList } from './config';

export const Information = () => {
  return (
    <SC.InfoContent>
      <FaDumbbell color={'white'} size={70} />
      <SC.TitleInfo>Transform your fitness journey</SC.TitleInfo>
      <SC.ParagrafInfo>
        Book sessions with top trainers, track your progress, and achieve your fitness goals with
        FitnessBooking.
      </SC.ParagrafInfo>

      <SC.InfoList>
        {InformationList.map(({ id, title, description, icon }) => (
          <SC.InfoItems key={id}>
            <SC.IconWrapper>
              {icon}
              {title}
            </SC.IconWrapper>

            <SC.Span>{description}</SC.Span>
          </SC.InfoItems>
        ))}
      </SC.InfoList>
    </SC.InfoContent>
  );
};
