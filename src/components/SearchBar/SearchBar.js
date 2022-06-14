import styled from 'styled-components';
import { fontColor } from '../styles/custom.styled';

import SearchIcon from '../../assets/icons/search-icon.svg';
import FocusSearchIcon from '../../assets/icons/search-icon-focus.svg';

const StyledForm = styled.form`
  margin: 0 0.75rem 0 1rem;
`;

const StyledInput = styled.input`
  color: ${fontColor.secondary};
  font-size: 0.875rem;
  height: 1.75rem;
  width: 100%;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: 1rem;
  background-color: ${fontColor.primaryBg};
  border-radius: 1rem;
  border: none;
  padding: 0 12px 0 38px;
  transition: background 300ms ease-out;

  &::placeholder {
    font-size: 0.875rem;
  }

  &:focus {
    background-image: url(${FocusSearchIcon});
    background-color: ${fontColor.primary};
  }
`;

function SearchBar() {
  return (
    <div className="header__item">
      <StyledForm>
        <StyledInput placeholder="Search for games" />
      </StyledForm>
    </div>
  );
}

export default SearchBar;
