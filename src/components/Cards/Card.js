import styled from 'styled-components';
import { color } from '../styles/custom.styled';
import CardMedia from './CardMedia';
import CardDescription from './CardDescription';

const StyledCard = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  background-color: ${color.secondaryBg};
  box-sizing: border-box;
  border-radius: 0.75rem;
`;

function Card(itemProps) {
  const { cardData } = itemProps;
  const { short_screenshots: images } = cardData;

  return (
    <StyledCard>
      <CardWrapper>
        <CardMedia images={images} />
        <CardDescription {...cardData} />
      </CardWrapper>
    </StyledCard>
  );
}

export default Card;
