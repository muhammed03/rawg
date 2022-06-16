import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../styles/custom.styled';

// import WindowsIconSvg from '../../assets/icons/windows-os-icon.svg';
import GameCardBtnsContainer from './GameCardBtnsContainer';
import GameCardAboutList from './GameCardAboutList';

const StyledGameCardDescription = styled.div`
  position: relative;
  padding: 1rem 1rem 3rem;
  color: ${color.primary};
`;

// const GameCardIcons = styled.div`
//   display: flex;
//   margin-right: 0.375rem;
//   margin-bottom: 0.4375rem;
// `;
//
// const GameCardIcon = styled.div`
//   width: 0.75rem;
//   height: 0.8125rem;
//   background-image: url(${WindowsIconSvg});
//   background-repeat: no-repeat;
//   background-position: 50%;
//   background-size: contain;
// `;

const GameCardTitle = styled.span`
  display: block;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  overflow: hidden;
  padding-bottom: 0.125rem;
  cursor: pointer;
  color: ${color.primary};

  &:hover {
    color: ${color.tertiary};
  }
`;

function GameCardDescription(cardData) {
  const {
    id,
    name,
    suggestions_count: suggestionsCount,
    rating_top: rating,
    released: releasedDate,
    genres,
  } = cardData;

  const aboutInfo = {
    rating,
    releasedDate,
    genres,
  };
  return (
    <StyledGameCardDescription>
      {/*<GameCardIcons>*/}
      {/*  <GameCardIcon />*/}
      {/*</GameCardIcons>*/}
      <Link to={`/games/${id}`}>
        <GameCardTitle>{name}</GameCardTitle>
      </Link>
      <GameCardBtnsContainer suggestionsCount={suggestionsCount} />
      <GameCardAboutList aboutInfo={aboutInfo} />
    </StyledGameCardDescription>
  );
}

export default GameCardDescription;
