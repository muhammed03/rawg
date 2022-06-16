import { useContext } from 'react';
import styled from 'styled-components';

import GamesListContext from '../../contexts/GamesListContext';

import GameControlsContainer from './GameControlsContainer';
import Cards from '../Cards/Cards';
import Loader from '../Loader/Loader';

const StyledGameList = styled.div`
  width: 100%;
`;

const GameListWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

function GameList() {
  const { loading } = useContext(GamesListContext);
  return (
    <StyledGameList>
      <GameListWrapper>
        <GameControlsContainer />
        {!loading ? <Cards /> : <Loader />}
      </GameListWrapper>
    </StyledGameList>
  );
}

export default GameList;
