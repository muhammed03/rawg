import styled from 'styled-components';
import { color } from '../styles/custom.styled';
import GameCardMedia from './GameCardMedia';
import GameCardDescription from './GameCardDescription';

const GameCardWrapper = styled.div`
  background-color: ${color.secondaryBg};
  box-sizing: border-box;
  border-radius: 0.75rem;
`;

function GameCard() {
  return (
    <div>
      <GameCardWrapper>
        <GameCardMedia />
        <GameCardDescription />
      </GameCardWrapper>
    </div>
  );
}

export default GameCard;
