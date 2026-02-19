import { FaSearch } from 'react-icons/fa';
import * as SC from './Search.styled';

export const Search = () => {
  return (
    <SC.SearchForm>
      <SC.SearchButton type="submit">
        <FaSearch size={14} color="#9CA3AF" />
      </SC.SearchButton>
      <SC.SearchInput type="text" placeholder="Search trainers, sessions..." />
    </SC.SearchForm>
  );
};
