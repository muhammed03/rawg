import styled from 'styled-components';
import GameCard from './GameCard';
import { device } from '../styles/custom.styled';

const GameCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

function GameCardsContainer() {
  return (
    <GameCardsWrapper>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </GameCardsWrapper>
  );
}

export default GameCardsContainer;
