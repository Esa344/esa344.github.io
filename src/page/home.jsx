import React from 'react';
import ReactDOM from 'react-dom';
import stylink from 'function';

const Home = () => {
  return(
    <div className='homeCanvas'>
      <div className='topBar'>
            <aside className='aside'>
              <div className='closeSide'>
                <div className='xOne'/>
                <div className='xTwo'/>
              </div>
            </aside>
        <img src='/src/private/aSideAction.png' className='aSideAction'/>
        <img src='/src/private/horizontalLogo.png' className='topLogo'/>
      </div>
    </div>
    )
}

stylink('src/page/home.css', 'mobile')

export default Home