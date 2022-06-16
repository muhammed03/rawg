import styled from 'styled-components';
import GameCardGalleryContainer from './GameCardGalleryContainer';

const GameCardMediaContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
`;

const GameCardMediaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

function GameCardMedia(itemProps) {
  const { images } = itemProps;

  return (
    <GameCardMediaContainer>
      {images.length !== 0 && (
        <GameCardMediaWrapper>
          <GameCardGalleryContainer {...itemProps} />
        </GameCardMediaWrapper>
      )}
    </GameCardMediaContainer>
  );
}

export default GameCardMedia;
