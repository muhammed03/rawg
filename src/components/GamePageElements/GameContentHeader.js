import styled from 'styled-components';
import { color, device } from '../styles/custom.styled';

import PageTitle from '../PageTitle/PageTitle';

const StyledGameHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  color: ${color.primary};
  font-size: 1rem;
  margin: 0.5rem 0 0;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

function GameHeader() {
  return (
    <StyledGameHeader>
      <PageTitle>New and trending</PageTitle>
      <PageSubtitle>Based on player counts and release date</PageSubtitle>
    </StyledGameHeader>
  );
}

export default GameHeader;
