import styled from 'styled-components';
import { color } from '../styles/custom.styled';

import PlusIcon from '../../assets/icons/plus-icon';
import GiftIcon from '../../assets/icons/gift-icon';
import DotsIcon from '../../assets/icons/dots-icon';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const GameCardBtn = styled.button`
  display: flex;
  padding: 0.4rem;
  margin-right: 0.25rem;
  color: ${color.primary};
  font-size: 0.75rem;
  background-color: ${color.primaryBg};
  border: none;
  border-radius: 0.25rem;
  gap: 0.25rem;
  align-items: center;
  line-height: 0;
  height: 1.5rem;
`;

function GameCardBtnsContainer(props) {
  // eslint-disable-next-line react/prop-types
  const { suggestionsCount } = props;

  return (
    <StyledContainer>
      <GameCardBtn>
        <span>
          <PlusIcon />
        </span>
        <span>{suggestionsCount}</span>
      </GameCardBtn>
      <GameCardBtn>
        <span>
          <GiftIcon />
        </span>
      </GameCardBtn>
      <GameCardBtn>
        <span>
          <DotsIcon />
        </span>
      </GameCardBtn>
    </StyledContainer>
  );
}

export default GameCardBtnsContainer;
