import styled from 'styled-components';
import { color, device } from '../styles/custom.styled';

const DetailAboutWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;

  @media ${device.tablet} {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

const DetailAboutTitle = styled.h2`
  color: ${color.primary};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.375rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const DetailAboutParagraph = styled.div`
  color: ${color.primary};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;

  @media ${device.tablet} {
    font-size: 1.25rem;
    line-height: 1.375rem;
  }
`;

function DetailAboutContainer({ description }) {
  return (
    <DetailAboutWrapper>
      <DetailAboutTitle>About</DetailAboutTitle>
      <DetailAboutParagraph>{description}</DetailAboutParagraph>
    </DetailAboutWrapper>
  );
}

export default DetailAboutContainer;
