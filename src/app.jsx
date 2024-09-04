import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.26.1/dist/umd/react-router-dom.production.min.js';

import LandingPage from './page/landingPage.jsx';
import Home from './page/home.jsx';

const Main = () => {
    return(
   <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    )
}


ReactDOM.render(
  <Main></Main>,
  document.getElementById('react-app')
);

