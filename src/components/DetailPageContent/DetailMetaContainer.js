import styled from 'styled-components';
import DetailMetaBlock from './DetailMetaBlock';
import { device } from '../styles/custom.styled';
import DetailMetaBlockTag from './DetailMetaBlockTag';

const DetailMetaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${device.tablet} {
    grid-column: 1 / 3;
  }
`;

function DetailMetaContainer({ data }) {
  let platforms = '';
  let genres = '';
  let releaseDate = new Date('0000-00-00');
  let developers = '';
  let publishers = '';
  let tags = '';
  let website = '';

  if (data !== {} || typeof data !== 'undefined') {
    platforms = data?.platforms
      ?.map((item) => {
        const platformName = item?.platform.name;
        return platformName;
      })
      .join(', ');

    genres = data?.genres
      ?.map((genre) => {
        return genre?.name;
      })
      .join(', ');

    const date = data?.released;
    releaseDate = new Date(date).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    developers = data?.developers
      ?.map((developer) => {
        return developer?.name;
      })
      .join(', ');

    publishers = data?.publishers
      ?.map((publisher) => {
        return publisher?.name;
      })
      .join(', ');

    tags = data?.tags
      ?.map((tag) => {
        return tag?.name;
      })
      .join(', ');

    website = data?.website;
  }

  return (
    <DetailMetaWrapper>
      <DetailMetaBlock term="Platforms" description={platforms} />
      <DetailMetaBlock term="Genre" description={genres} />
      <DetailMetaBlock term="Release date" description={releaseDate} />
      <DetailMetaBlock term="Developers" description={developers} />
      <DetailMetaBlock term="Publisher" description={publishers} />
      <DetailMetaBlock term="Tags" description={tags} />
      <DetailMetaBlockTag term="Website" description={website} />
    </DetailMetaWrapper>
  );
}

export default DetailMetaContainer;
