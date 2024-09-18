import React from 'react';
import ReactDOM from 'react-dom';
import stylink from 'function';

import Game from '/src/data/gameData.js';

stylink('/src/page/game.css', 'mobile')

const GamePage = () => {
  return(
    <div className='gameCanvas'>
      <div className='ads'>
        ADS
      </div>
      <div className='gamePageBar'>
          {Game.map((item, index) => (
            <div key={index} className='gameItem'>
              <img src={item.Image} className='gameImage' style={{
                width: '38vw'
              }}/>
              <h1 className='gameName'>{item.Name}</h1>
              <a href={item.Url} className='gameUrl'>play</a>
            </div>
          ))}
      </div>
      <div className='ads'>
        ADS
      </div>
    </div>
    )
} 

export default GamePage