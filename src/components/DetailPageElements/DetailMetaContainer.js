import styled from 'styled-components';
import DetailMetaBlock from './DetailMetaBlock';
import DetailMetaBlockTag from './DetailMetaBlockTag';
import { convertDateString } from '../../utils/helpers';

const DetailMetaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
        return item?.platform.name;
      })
      .join(', ');

    genres = data?.genres
      ?.map((genre) => {
        return genre?.name;
      })
      .join(', ');

    const date = data?.released;
    releaseDate = convertDateString(date);

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
      <DetailMetaBlock
        term="Platforms"
        description={platforms?.length !== 0 ? platforms : `Platforms weren't found!`}
      />
      <DetailMetaBlock
        term="Genre"
        description={genres?.length !== 0 ? genres : `Genres weren't found!`}
      />
      <DetailMetaBlock
        term="Release date"
        description={releaseDate?.length !== 0 ? releaseDate : `Release date wasn't found!`}
      />
      <DetailMetaBlock
        term="Developers"
        description={developers?.length !== 0 ? developers : `Developers weren't found!`}
      />
      <DetailMetaBlock
        term="Publisher"
        description={publishers?.length !== 0 ? publishers : `Publishers weren't found!`}
      />
      <DetailMetaBlock
        term="Tags"
        description={tags?.length !== 0 ? tags : `Tags weren't found!`}
      />
      <DetailMetaBlockTag
        term="Website"
        description={website?.length !== 0 ? website : `Website wasn't found!`}
      />
    </DetailMetaWrapper>
  );
}

export default DetailMetaContainer;
