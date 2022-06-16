import { useContext } from 'react';
import styled from 'styled-components';

import GamesListContext from '../../contexts/GamesListContext';

import GameControlsContainer from './GameControlsContainer';
import GameCardsContainer from '../GameCardsContainer/GameCardsContainer';
import Loader from '../Loader/Loader';

const GameListWrapper = styled.div`
  width: 100%;
`;

const GameListInnerWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

function GameListContent() {
  const { loading } = useContext(GamesListContext);
  return (
    <GameListWrapper>
      <GameListInnerWrapper>
        <GameControlsContainer />
        {!loading ? <GameCardsContainer /> : <Loader />}
      </GameListInnerWrapper>
    </GameListWrapper>
  );
}

export default GameListContent;
