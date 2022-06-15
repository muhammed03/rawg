import styled from 'styled-components';

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

const GameCardImg = styled.div`
  background-position: 50%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 56.25%;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

function GameCardMedia() {
  return (
    <GameCardMediaContainer>
      <GameCardMediaWrapper>
        <GameCardImg />
      </GameCardMediaWrapper>
    </GameCardMediaContainer>
  );
}

export default GameCardMedia;
