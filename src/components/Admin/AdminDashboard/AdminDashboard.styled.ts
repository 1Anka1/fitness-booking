import styled from 'styled-components';

export const AdminDashboard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]}px;
  padding: ${({ theme }) => theme.space[5]}px;
`;
