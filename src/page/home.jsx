import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.26.1/dist/umd/react-router-dom.production.min.js';
import {useState} from 'react';
import stylink from 'function';

import Navigation from './navigation.jsx';

const Home = () => {
  return(
    <div>
      <Navigation />    
      <Routes>
        <Route path="/" element={<h1>halo</h1>} />
      </Routes>
    </div>
    )
}

export default Home