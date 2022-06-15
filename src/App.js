import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout/Layout';
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GamePage />} />
      </Route>
    </Routes>
  );
}

export default App;
