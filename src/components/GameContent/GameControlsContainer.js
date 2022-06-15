import styled from 'styled-components';
import GameControlSelect from './GameControlSelect';

const GameControlsWrapper = styled.div`
  margin-bottom: 1rem;
`;

const GameControlsList = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 0.625rem;
  gap: 0.5rem;
`;

function GameControlsContainer() {
  return (
    <GameControlsWrapper>
      <GameControlsList>
        <GameControlSelect />
        <GameControlSelect />
      </GameControlsList>
    </GameControlsWrapper>
  );
}

export default GameControlsContainer;
