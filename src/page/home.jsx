import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.26.1/dist/umd/react-router-dom.production.min.js';
import {useState} from 'react';
import stylink from 'function';

import Navigation from './navigation.jsx';
import InnerWeb from './innerWeb.jsx';
import GamePage from './game.jsx'
import SourcePage from './sourceCode.jsx';
import ProductPage from './product.jsx';
import ToPlay from './toPlay.jsx';

stylink('/src/page/home.css', 'mobile')

const Home = () => {
  return(
    <div>
      <Navigation />
      <div className='inner'>
        <Routes>
          <Route path="/" element={<InnerWeb />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/source-code" element={<SourcePage />} />
          <Route path="/product" element={<ProductPage />} />          
          <Route path="game/toplay" element={<ToPlay />} />
        </Routes>
      </div>
    </div>
    )
}

export default Home