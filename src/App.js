import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Layout from './layouts/Layout/Layout';
import GamesPage from './pages/GamesPage/GamesPage';
import DetailPage from './pages/DetailPage/DetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GamesPage />} />
        <Route path="/games/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
