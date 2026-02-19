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
  border: 1px solid ${(p) => p.theme.colors.borderDark};
  border-radius: ${(p) => p.theme.radius.round};
  color: ${(p) => p.theme.colors.textMuted};
`;

export const SearchButton = styled.button`
  display: flex;
  position: absolute;
  left: ${(p) => p.theme.space[2]}px;
  border: none;
  background-color: ${(p) => p.theme.colors.white};
  cursor: pointer;
`;
