import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../styles/custom.styled';

import CardBtnsContainer from './CardBtnsContainer';
import CardAboutList from './CardAbout';

const StyledCardDescription = styled.div`
  position: relative;
  padding: 1rem 1rem 3rem;
  color: ${color.primary};
`;

const CardTitle = styled.span`
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

function CardDescription(cardData) {
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
    <StyledCardDescription>
      <Link to={`/games/${id}`}>
        <CardTitle>{name}</CardTitle>
      </Link>
      <CardBtnsContainer suggestionsCount={suggestionsCount} />
      <CardAboutList aboutInfo={aboutInfo} />
    </StyledCardDescription>
  );
}

export default CardDescription;
