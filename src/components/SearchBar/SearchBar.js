import { useContext } from 'react';
import styled from 'styled-components';
import { device, color } from '../styles/custom.styled';

import GamesListContext from '../../contexts/GamesListContext';

import SearchIcon from '../../assets/icons/search-icon.svg';
import FocusSearchIcon from '../../assets/icons/search-icon-focus.svg';
import { useState } from 'react';

const StyledForm = styled.form`
  margin: 0 0.75rem 0 1rem;
`;

const StyledInput = styled.input`
  color: ${color.secondary};
  font-size: 0.875rem;
  height: 1.75rem;
  width: 100%;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: 1rem;
  background-color: ${color.primaryBg};
  border-radius: 1rem;
  border: none;
  padding: 0 12px 0 38px;
  transition: background 300ms ease-out;

  &::placeholder {
    font-size: 0.875rem;
  }

  &:focus {
    background-image: url(${FocusSearchIcon});
    background-color: ${color.primary};
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
    height: 2.75rem;
    background-size: 1.25rem;
    background-position: 0.5rem;
    &::placeholder {
      font-size: 1.5rem;
    }
  }
`;

function SearchBar() {
  const { setSearch } = useContext(GamesListContext);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value;
    setSearch(searchValue);
  };

  return (
    <div className="header__item">
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Search for games"
          type="text"
          value={searchTerm}
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </StyledForm>
    </div>
  );
}

export default SearchBar;
