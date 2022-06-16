import styled from 'styled-components';
import GameControlSelect from './GameControlSelect';
import GameControlFilter from './GameControlFilter';

const StyledContainer = styled.div`
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
    <StyledContainer>
      <GameControlsList>
        <GameControlSelect />
        <GameControlFilter />
      </GameControlsList>
    </StyledContainer>
  );
}

export default GameControlsContainer;
