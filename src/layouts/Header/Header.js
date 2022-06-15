import styled from 'styled-components';

import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

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
