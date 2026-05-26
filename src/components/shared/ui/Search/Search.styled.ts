import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px 0 10px 41px;
  border: 1px solid ${({ theme }) => theme.colors.borderDark};
  border-radius: ${({ theme }) => theme.radius.round};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const SearchButton = styled.button`
  display: flex;
  position: absolute;
  left: ${({ theme }) => theme.space[2]}px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
