import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import Router from 'react-router'

import LandingPage from './page/landingPage.jsx';
import Home from './page/home.jsx';


const Main = () => {
  
    return(
      <div>
      <LandingPage/>
      </div>
    )
}


ReactDOM.render(
  <Main></Main>,
  document.getElementById('react-app')
);

