import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import stylink from 'function';

const Home = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [topLogoOpacity, setTopLogoOpacity] = useState(true);

  function wSidebarOpen() {
    const newMarginLeft = sideOpen ? '0vw' : '-60vw';
    const newOpacity = topLogoOpacity ? '100%' : '0%';
    setSideOpen(!sideOpen);
    setTopLogoOpacity(!topLogoOpacity);

    setTimeout(() => {
      document.querySelector('.aside').style.marginLeft = newMarginLeft;
      document.querySelector('.topLogo').style.opacity = newOpacity;
    }, 0);
  }

  return (
    <div className='homeCanvas'>
      <div className='topBar'>
        <aside className='aside'>
          <div
          className='closeSide'
          onClick={wSidebarOpen}
          >
            <div className='xOne'/>
            <div className='xTwo'/>
          </div>
        </aside>
        <img 
          src='/src/private/aSideAction.png' 
          className='aSideAction' 
          onClick={wSidebarOpen}
          alt='Toggle Sidebar'
        />
        <img
        src='/src/private/horizontalLogo.png'
        className='topLogo'
        alt='Logo'/>
      </div>
    </div>
  );
}

stylink('src/page/home.css', 'mobile')

export default Home;
