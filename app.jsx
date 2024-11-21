import React from 'react';
import ReactDOM from 'react-dom';

import Data from './assets/data.jsx';


const App = () => {
  return (
    <div>
      <nav>
        <img src='/assets/icon/icName.png'/>
      </nav>
      <article>
        <h4 className='labelText'>
          this is the web for my canva design portfolio as<br/>a canva creator
        </h4>
        <div>
          {Data.reverse().map((item, index) => (
            <a key={index}>
              <div style={{backgroundImage: `url(./assets/icon/${item.url.image})`}}></div>
              <h3>  
                {item.name}
              </h3>
              <p>
                {item.desc}
              </p>
            </a>
           ))}    
        </div>
      </article>
    </div>
    )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('react-app')
);
