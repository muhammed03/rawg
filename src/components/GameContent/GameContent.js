import styled from 'styled-components';
import GameContentHeader from './GameContentHeader';
import GameListContent from './GameListContent';

const GameWrapper = styled.div`
  //max-width: 480px;
`;

const GameContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

function GameContent() {
  return (
    <div>
      <GameWrapper>
        <GameContentWrapper>
          <GameContentHeader />
          <GameListContent />
        </GameContentWrapper>
      </GameWrapper>
    </div>
  );
}

export default GameContent;
