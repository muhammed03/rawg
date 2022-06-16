import { useContext } from 'react';
import styled from 'styled-components';

import GamesListContext from '../../contexts/GamesListContext';

import GameContentHeader from './GameContentHeader';
import GameListContent from './GameListContent';
import MiniLoader from '../MiniLoader/MiniLoader';

import { color } from '../styles/custom.styled';

const GameWrapper = styled.div`
  //max-width: 480px;
`;

const GameContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const LoadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 12.5rem;
  background-color: ${color.primaryBg};
  border-radius: 0.5rem;
  margin: 2rem auto;
`;

const LoadMoreText = styled.span`
  font-size: 1.2rem;
  color: ${color.primary};
`;

function GameContent() {
  const { setPageSize, miniLoading, loading } = useContext(GamesListContext);
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop <= clientHeight) {
      setPageSize();
    }
  });
  return (
    <div>
      <GameWrapper>
        <GameContentWrapper>
          <GameContentHeader />
          <GameListContent />
          {!loading && (
            <LoadMoreContainer>
              {!miniLoading ? <LoadMoreText>Load more ...</LoadMoreText> : <MiniLoader />}
            </LoadMoreContainer>
          )}
        </GameContentWrapper>
      </GameWrapper>
    </div>
  );
}

export default GameContent;
