import { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import GamesListContext from '../../contexts/GamesListContext';
import { getColumnCount, getDeviceWidth, splitArrayIntoChunksOfLen } from '../../utils/helpers';

import GameCard from './GameCard';
import { device, gridColumns } from '../styles/custom.styled';

const GameCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media ${device.tablet} {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(${gridColumns.tablet}, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(${gridColumns.laptop}, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(${gridColumns.laptopL}, 1fr);
  }
`;

const StyledCardsColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function GameCardsContainer() {
  const defaultDeviceWidth = getDeviceWidth(window.innerWidth, screen.width);
  const [deviceWidth, setDeviceWidth] = useState(defaultDeviceWidth);
  const { list } = useContext(GamesListContext);

  const getSplitList = () => {
    let columnCount = useMemo(() => getColumnCount(deviceWidth), [deviceWidth]);
    let numberOfCardsPerColumn = list.length / columnCount;
    return splitArrayIntoChunksOfLen(list, Math.round(numberOfCardsPerColumn), columnCount);
  };

  let splitList = getSplitList();

  window.addEventListener('resize', function () {
    setDeviceWidth(getDeviceWidth(window.innerWidth, screen.width));
  });

  return (
    <GameCardsWrapper>
      {splitList.map((list, index) => {
        return (
          <StyledCardsColumnContainer key={index}>
            {list.map((listItem) => {
              return <GameCard cardData={listItem} key={listItem.id} />;
            })}
          </StyledCardsColumnContainer>
        );
      })}
    </GameCardsWrapper>
  );
}

export default GameCardsContainer;
