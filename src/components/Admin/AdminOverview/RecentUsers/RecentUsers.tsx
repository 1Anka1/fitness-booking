import { AdminCard } from '../../../shared/ui/admin/AdminCard/AdminCard';
import { Search } from '../../../shared/ui/Search/Search';
import { HeadTitle, recentUsers } from '../../config/recentUsers';
import * as SC from './RecentUsers.styled';

export const RecentUsers = () => {
  return (
    <SC.Card>
      <SC.Header>
        <SC.Title>Recent Users</SC.Title>

        <SC.SearchWrap>
          <Search placeholder={'Search users..'} />
          <SC.FilterButton type="button">
            <SC.Filter size={18} />
          </SC.FilterButton>
        </SC.SearchWrap>
      </SC.Header>

      <SC.Wrapper>
        <SC.Head>
          {HeadTitle.map((title) => (
            <SC.HeadTitleEl key={title}>{title}</SC.HeadTitleEl>
          ))}
        </SC.Head>

        {recentUsers.map(({ id, avatar, name, email, role, status, joined }) => (
          <SC.Row key={id}>
            <SC.User>
              <img src={avatar} alt="" />
              <div>
                <p>{name}</p>
                <span>{email}</span>
              </div>
            </SC.User>

            <SC.Role $role={role}>{role}</SC.Role>
            <SC.Status $status={status}>{status}</SC.Status>
            <SC.Joined>{joined}</SC.Joined>

            <SC.Actions>
              <button>Edit</button>
              <button className="danger">Disable</button>
            </SC.Actions>
          </SC.Row>
        ))}
      </SC.Wrapper>

      <SC.Footer>
        <p>Showing 1 to 10 of 97 results</p>

        <SC.Pagination>
          <button>Previous</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </SC.Pagination>
      </SC.Footer>
    </SC.Card>
  );
};
