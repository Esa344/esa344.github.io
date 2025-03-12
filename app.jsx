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
        <div>
          {Data.reverse().map((item, index) => (
            <a key={index} href={item.url.canva}>
              <img src={`./assets/icon/${item.url.image}`}></img>
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
