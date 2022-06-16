import styled from 'styled-components';
import { device } from '../../components/styles/custom.styled';
import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import './header.scss';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  box-sizing: border-box;
  @media ${device.tablet} {
    padding: 1.5rem 2.5rem;
  }
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
