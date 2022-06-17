import styled from 'styled-components';
import { color, device } from '../../components/styles/custom.styled';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getGameDetailById, getGameScreenshots } from '../../services/rawg-service';
import PageTitle from '../../components/PageTitle/PageTitle';
import CardGallery from '../../components/Cards/CardGallery';
import DetailAboutContainer from '../../components/DetailPageElements/DetailAboutContainer';
import DetailMetaContainer from '../../components/DetailPageElements/DetailMetaContainer';
import Loader from '../../components/Loader/Loader';

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 720px;
  }

  @media ${device.laptop} {
    max-width: 980px;
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

const NotFoundImage = styled.div`
  background-color: ${color.primaryBg};
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
  span {
    color: ${color.primary};
    font-size: 1.5rem;
    @media ${device.tablet} {
      font-size: 3rem;
    }
  }
`;

const DetailPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DetailPage() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [screenshotsList, setScreenshotsList] = useState('list');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (id) {
        const detailData = await getGameDetailById(id);
        const screenshots = await getGameScreenshots(id);
        setDetail(detailData);
        setScreenshotsList(screenshots);
        setLoading(false);
      } else {
        navigate('/');
      }
    })();
  }, [id]);

  return (
    <DetailPageWrapper>
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          <PageTitle>{detail.name}</PageTitle>
          <DetailPageContentWrapper>
            {screenshotsList?.length !== 0 ? (
              <CardGallery images={screenshotsList} />
            ) : (
              <NotFoundImage>
                <span>Image wasn&apos;t found!</span>
              </NotFoundImage>
            )}
            <DetailAboutContainer
              description={
                detail?.description_raw?.length !== 0 ? detail.description_raw : detail.description
              }
            />
            <DetailMetaContainer data={detail} />
          </DetailPageContentWrapper>
        </>
      )}
    </DetailPageWrapper>
  );
}

export default DetailPage;
