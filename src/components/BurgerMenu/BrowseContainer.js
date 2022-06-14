import styled from 'styled-components';
import { fontColor } from '../styles/custom.styled';

const BrowseNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const BrowseLink = styled.a`
  font-size: 1.125rem;
  padding: 0.375rem 0;
  color: ${fontColor.secondary};
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
  color: ${fontColor.secondary};
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
        <BrowseLink href="/browse">Browse</BrowseLink>
        <BrowseLink href="/reviews">Reviews</BrowseLink>
        <BrowseLink href="/collections">Collections</BrowseLink>
        <BrowseLink href="/platforms">Platforms</BrowseLink>
        <BrowseLink href="/stores">Stores</BrowseLink>
        <BrowseLink href="/genres">Genres</BrowseLink>
        <BrowseLink href="/creators">Creators</BrowseLink>
        <BrowseLink href="/tags">Tags</BrowseLink>
        <BrowseLink href="/developers">Developers</BrowseLink>
        <BrowseLink href="/publishers">Publishers</BrowseLink>
      </BrowseNav>
      <LinkContainer>
        <Link href="/apidocs">API</Link>
        <Link href="/login">Get an API key</Link>
        <Link href="/sitemap">Sitemap</Link>
      </LinkContainer>
    </div>
  );
}

export default BrowseContainer;
