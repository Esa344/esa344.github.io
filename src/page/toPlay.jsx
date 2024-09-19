import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.26.1/dist/umd/react-router-dom.production.min.js'

const ToPlay = () => {
  
  const location = useLocation()
  const {selectedGame} = location.state || {}
  
  return(
    <div>
        <div
        className='gameItem'>
          <img src={selectedGame.Image} className='gameImage' style={{
          width: '38vw'
          }}/>
          <h1 className='gameName'>{selectedGame.Name}</h1>
          <a href={selectedGame.Url} className='gameUrl'>play</a>
         </div>
    </div>
    )
}

export default ToPlay