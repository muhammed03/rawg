import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from '../../components/styles/Container.styled';
import { GameListProvider } from '../../contexts/GamesListContext';

function Layout() {
  return (
    <GameListProvider>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </GameListProvider>
  );
}

export default Layout;
