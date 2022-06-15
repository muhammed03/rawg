import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from '../../components/styles/Container.styled';

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
