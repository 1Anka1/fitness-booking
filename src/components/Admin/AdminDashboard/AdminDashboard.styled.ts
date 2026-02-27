import styled from 'styled-components';

export const AdminDashboard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${(p) => p.theme.space[5]}px;
  padding: ${(p) => p.theme.space[5]}px;
`;
