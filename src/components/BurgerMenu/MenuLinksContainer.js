import styled from 'styled-components';
import { color } from '../styles/custom.styled';

const MenuLinksWrapper = styled.div`
  width: 75%;
  margin-bottom: 1.25rem;
`;

const MenuLinksNav = styled.nav`
  padding: 0;
  color: ${color.secondary};
`;

const MenuLink = styled.a`
  padding: 0.375rem 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Blink-bold', sans-serif;
  text-transform: none;
  color: ${color.secondary};
  letter-spacing: 1px;
  display: block;
`;

function MenuLinksContainer() {
  return (
    <MenuLinksWrapper>
      <MenuLinksNav>
        <MenuLink href="/home">Home</MenuLink>
        <MenuLink href="/reviews">Reviews</MenuLink>
      </MenuLinksNav>
    </MenuLinksWrapper>
  );
}

export default MenuLinksContainer;
