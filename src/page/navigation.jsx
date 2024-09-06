import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import stylink from 'function';

const Navigation = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [topLogoOpacity, setTopLogoOpacity] = useState(true);
  const [blackScreen, setBlackScreen] = useState(false)

  function wSidebarOpen() {
    const newMarginLeft = sideOpen ? '0vw' : '-60vw';
    const newOpacity = topLogoOpacity ? '100%' : '0%';
    const newdisplay = blackScreen ? 'block' : 'none';
    setSideOpen(!sideOpen);
    setTopLogoOpacity(!topLogoOpacity);
    setBlackScreen(!blackScreen)

    setTimeout(() => {
      document.querySelector('.aside').style.marginLeft = newMarginLeft;
      document.querySelector('.topLogo').style.opacity = newOpacity;
      document.querySelector('.blackScreen').style.display = newdisplay;
    }, 0);
  }

  return (
    <div className='navigationCanvas'>
      <div className='topBar'>
        <aside className='aside'>
          <div className='topSide'>
            <img
            src='/src/private/horizontalLogo.png'
            className='topSideLogo'
            />
            <div
            className='closeSide'
            onClick={wSidebarOpen}
            >
              <div className='xOne'/>
              <div className='xTwo'/>
            </div>          
          </div>
          <h1 className='items'>
          <img src='/src/private/icHome.png'/>
          Home
          </h1>
          <h1 className='items'>
          <img src='/src/private/icProduct.png'/>
          Product
          </h1>
          <h1 className='items'>
          <img src='/src/private/icGame.png'/>
          Game
          </h1>
          <h1 className='items'>
          <img src='/src/private/icSourceCode.png'/>
          Source Code 
          </h1>
          <div className='sideFoter'>
            <img src='/src/private/selfSquareFoto.jpg'/>
            <div className='textSideFoter'>
              <h1>Esa Lintang</h1>
              <h5>Developer & owner (ezaco.dev)</h5>
            </div>
          </div>
        </aside>
        <img 
          src='/src/private/icSideAction.png' 
          className='aSideAction' 
          onClick={wSidebarOpen}
          alt='Toggle Sidebar'
        />
        <img
        src='/src/private/horizontalLogo.png'
        className='topLogo'
        alt='Logo'/>
      </div>
      <div
      className='blackScreen'
      onClick={wSidebarOpen}/>
    </div>
  );
}

stylink('src/page/navigation.css', 'mobile')

export default Navigation;
