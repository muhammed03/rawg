import styled from 'styled-components';
import { color } from '../styles/custom.styled';

const BrowseNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const BrowseLink = styled.a`
  font-size: 1.125rem;
  padding: 0.375rem 0;
  color: ${color.secondary};
  font-weight: 500;

  &:first-child {
    font-size: 1.5rem;
    font-family: 'Blink-bold', sans-serif;
    padding: 0.375rem 0 0.5rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  padding: 0.375rem 0 0.5rem;
  color: ${color.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Blink-bold', sans-serif;
  text-transform: none;
  letter-spacing: 1px;
`;

function BrowseContainer() {
  return (
    <div>
      <BrowseNav>
        <BrowseLink href="#">Browse</BrowseLink>
        <BrowseLink href="#">Reviews</BrowseLink>
        <BrowseLink href="#">Collections</BrowseLink>
        <BrowseLink href="#">Platforms</BrowseLink>
        <BrowseLink href="#">Stores</BrowseLink>
        <BrowseLink href="#">Genres</BrowseLink>
        <BrowseLink href="#">Creators</BrowseLink>
        <BrowseLink href="#">Tags</BrowseLink>
        <BrowseLink href="#">Developers</BrowseLink>
        <BrowseLink href="#">Publishers</BrowseLink>
      </BrowseNav>
      <LinkContainer>
        <Link href="#">API</Link>
        <Link href="#">Get an API key</Link>
        <Link href="#">Sitemap</Link>
      </LinkContainer>
    </div>
  );
}

export default BrowseContainer;
