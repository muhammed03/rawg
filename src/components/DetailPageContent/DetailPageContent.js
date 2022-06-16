import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';

import { device } from '../styles/custom.styled';

import GameCardGalleryContainer from '../GameCardsContainer/GameCardGalleryContainer';
import PageTitle from '../PageTitle/PageTitle';
import DetailAboutContainer from './DetailAboutContainer';
import DetailMetaContainer from './DetailMetaContainer';
import { getGameDetailById, getGameScreenshots } from '../../services/rawg-service';

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding-top: 1rem;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 720px;
  }

  @media ${device.laptop} {
    max-width: 980px;
  }
`;

const DetailPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-top: 2rem;
  }
`;

function DetailPageContent() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [screenshotsList, setScreenshotsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (id) {
        const detailData = await getGameDetailById(id);
        const screenshots = await getGameScreenshots(id);
        setDetail(detailData);
        setScreenshotsList(screenshots);
      } else {
        navigate('/');
      }
    })();
  }, [id]);

  return (
    <DetailPageWrapper>
      <PageTitle>{detail.name}</PageTitle>
      <DetailPageContentWrapper>
        <GameCardGalleryContainer images={screenshotsList} />
        <DetailAboutContainer description={detail.description_raw} />
        <DetailMetaContainer data={detail} />
      </DetailPageContentWrapper>
    </DetailPageWrapper>
  );
}

export default DetailPageContent;
