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

function GameCardMedia() {
  return (
    <GameCardMediaContainer>
      <GameCardMediaWrapper>
        <GameCardGalleryContainer />
      </GameCardMediaWrapper>
    </GameCardMediaContainer>
  );
}

export default GameCardMedia;
