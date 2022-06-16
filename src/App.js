import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Layout from './layouts/Layout/Layout';
import GamesPage from './pages/GamesPage/GamesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GamesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
