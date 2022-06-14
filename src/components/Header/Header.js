import styled from 'styled-components';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './header.scss';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.75rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <BurgerMenu />
    </StyledHeader>
  );
}

export default Header;
