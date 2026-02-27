import styled from 'styled-components';

export const AdminActionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: ${(p) => p.theme.space[5]}px;
  align-items: start;
`;
