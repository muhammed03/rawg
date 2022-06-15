import styled from 'styled-components';

import GameControlsContainer from './GameControlsContainer';
import GameCardsContainer from '../GameCardsContainer/GameCardsContainer';

const GameListWrapper = styled.div`
  width: 100%;
`;

const GameListInnerWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

function GameListContent() {
  return (
    <GameListWrapper>
      <GameListInnerWrapper>
        <GameControlsContainer />
        <GameCardsContainer />
      </GameListInnerWrapper>
    </GameListWrapper>
  );
}

export default GameListContent;
