import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import App from './App';
import About from './components/About';
import Details from './components/Details';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/books/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
