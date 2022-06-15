import styled from 'styled-components';
import { color } from '../styles/custom.styled';

const GameHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const GameHeaderTitle = styled.h1`
  color: ${color.primary};
  font-size: 2.25rem;
  margin: 0;
`;

const GameHeaderSubTitle = styled.p`
  color: ${color.primary};
  font-size: 1rem;
  margin: 0.5rem 0 0;
`;

function GameHeader() {
  return (
    <GameHeaderWrapper>
      <GameHeaderTitle>New and trending</GameHeaderTitle>
      <GameHeaderSubTitle>Based on player counts and release date</GameHeaderSubTitle>
    </GameHeaderWrapper>
  );
}

export default GameHeader;
