import styled from 'styled-components';
import GameCard from './GameCard';

const GameCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

function GameCardsContainer() {
  return (
    <GameCardsWrapper>
      <GameCard />
      <GameCard />
      <GameCard />
    </GameCardsWrapper>
  );
}

export default GameCardsContainer;
