import styled from 'styled-components';
import { color } from '../../components/styles/custom.styled';
import { useContext } from 'react';
import GamesListContext from '../../contexts/GamesListContext';
import GameContentHeader from '../../components/GamePageContent/GameContentHeader';
import GameList from '../../components/GamePageContent/GameList';
import MiniLoader from '../../components/MiniLoader/MiniLoader';

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

function GamesPage() {
  const { setPageSize, miniLoading, loading } = useContext(GamesListContext);
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop <= clientHeight) {
      setPageSize();
    }
  });
  return (
    <GameContentWrapper>
      <GameContentHeader />
      <GameList />
      {!loading && (
        <LoadMoreContainer>
          {!miniLoading ? <LoadMoreText>Load more ...</LoadMoreText> : <MiniLoader />}
        </LoadMoreContainer>
      )}
    </GameContentWrapper>
  );
}

export default GamesPage;
