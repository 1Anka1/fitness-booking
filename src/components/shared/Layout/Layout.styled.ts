import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  padding: 0 16px;
`;

export const Section = styled.section`
  padding-top: 60px;
`;

export const Main = styled.main`
  flex-grow: 1;
  background-color: #f9fafb;
`;

///LOGIN PAGE
export const SideWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    background: linear-gradient(135deg, #0284c7 0%, #075985 100%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
