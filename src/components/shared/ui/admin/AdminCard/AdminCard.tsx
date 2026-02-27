import * as SC from './AdminCard.styled.ts';

export const AdminCard = ({ title, children }) => {
  return (
    <SC.Card>
      <SC.CardTitle>{title}</SC.CardTitle>
      {children}
    </SC.Card>
  );
};
