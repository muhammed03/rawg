import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import styled from 'styled-components';

import './style.scss';

const CardGalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0;
`;

const GameCardImg = styled.div`
  background-position: 50%;
  top: 0;
  left: 0;
  background-image: url('https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

function GameCardGalleryContainer() {
  return (
    <CardGalleryContainer>
      <AwesomeSlider cssModule={AwsSliderStyles} className="aws-btn">
        <GameCardImg data-src="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" />
        <GameCardImg data-src="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" />
        <GameCardImg data-src="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" />
      </AwesomeSlider>
    </CardGalleryContainer>
  );
}

export default GameCardGalleryContainer;
