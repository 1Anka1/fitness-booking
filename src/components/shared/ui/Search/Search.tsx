import { FaSearch } from 'react-icons/fa';
import * as SC from './Search.styled';

export const Search = ({ placeholder }) => {
  return (
    <SC.SearchForm>
      <SC.SearchButton type="submit">
        <FaSearch size={14} color="#9CA3AF" />
      </SC.SearchButton>
      <SC.SearchInput type="text" placeholder={placeholder} />
    </SC.SearchForm>
  );
};
