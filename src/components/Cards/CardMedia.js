import styled from 'styled-components';
import CardGallery from './CardGallery';

const StyledCardMedia = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
`;

const CardMediaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

function CardMedia(itemProps) {
  const { images } = itemProps;

  return (
    <StyledCardMedia>
      {images.length !== 0 && (
        <CardMediaWrapper>
          <CardGallery {...itemProps} />
        </CardMediaWrapper>
      )}
    </StyledCardMedia>
  );
}

export default CardMedia;
