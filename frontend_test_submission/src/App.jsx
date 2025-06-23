import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenerPage from './pages/shortnerPages';
import StatisticsPage from './pages/staticPages';
import RedirectPage from './pages/RedirectPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ShortenerPage />} />
      <Route path="/stats" element={<StatisticsPage />} />
      <Route path=":shortcode" element={<RedirectPage />} />
    </Routes>
  </Router>
);

export default App;
