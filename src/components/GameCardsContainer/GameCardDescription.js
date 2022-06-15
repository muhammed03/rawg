import styled from 'styled-components';
import { color } from '../styles/custom.styled';

import WindowsIconSvg from '../../assets/icons/windows-os-icon.svg';
import GameCardBtnsContainer from './GameCardBtnsContainer';
import GameCardAboutList from './GameCardAboutList';

const StyledGameCardDescription = styled.div`
  position: relative;
  padding: 1rem 1rem 3rem;
  color: ${color.primary};
`;

const GameCardIcons = styled.div`
  display: flex;
  margin-right: 0.375rem;
  margin-bottom: 0.4375rem;
`;

const GameCardIcon = styled.div`
  width: 0.75rem;
  height: 0.8125rem;
  background-image: url(${WindowsIconSvg});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;

const GameCardTitle = styled.a`
  display: block;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  overflow: hidden;
  padding-bottom: 0.125rem;
`;

function GameCardDescription() {
  return (
    <StyledGameCardDescription>
      <GameCardIcons>
        <GameCardIcon />
      </GameCardIcons>
      <GameCardTitle>Vampire: The Masquerade - Bloodlines 2 🤡</GameCardTitle>
      <GameCardBtnsContainer />
      <GameCardAboutList />
    </StyledGameCardDescription>
  );
}

export default GameCardDescription;
