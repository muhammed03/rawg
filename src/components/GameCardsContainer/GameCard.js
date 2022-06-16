import styled from 'styled-components';
import { color } from '../styles/custom.styled';
import GameCardMedia from './GameCardMedia';
import GameCardDescription from './GameCardDescription';

const StyledGameCard = styled.div`
  width: 100%;
`;

const GameCardWrapper = styled.div`
  background-color: ${color.secondaryBg};
  box-sizing: border-box;
  border-radius: 0.75rem;
`;

function GameCard(itemProps) {
  const { cardData } = itemProps;
  const { short_screenshots: images } = cardData;

  return (
    <StyledGameCard>
      <GameCardWrapper>
        <GameCardMedia images={images} />
        <GameCardDescription {...cardData} />
      </GameCardWrapper>
    </StyledGameCard>
  );
}

export default GameCard;
