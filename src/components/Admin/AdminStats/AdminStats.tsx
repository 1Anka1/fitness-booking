import { stats } from '../config/stats';
import * as SC from './AdminStats.styled';

const AdminStats = () => {
  return (
    <SC.Row>
      {stats.map(({ id, title, value, positive, bg, color, icon, change }) => (
        <SC.Card key={id}>
          <SC.Content>
            <SC.RowDescription>{title}</SC.RowDescription>
            <SC.Value>{value}</SC.Value>
            <SC.Change $positive={positive}>{change}</SC.Change>
          </SC.Content>

          <SC.IconWrapper $bg={bg} $color={color}>
            {icon}
          </SC.IconWrapper>
        </SC.Card>
      ))}
    </SC.Row>
  );
};

export default AdminStats;
