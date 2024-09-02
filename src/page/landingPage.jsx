import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6.26.1/dist/umd/react-router-dom.production.min.js'
import stylink from 'function';

stylink('src/page/landingPage.css', 'mobile')

const LandingPage = () => {
  return(
    <div className='canvas'>
      <nav className='navigation'>
        <img src='/src/private/horizontalLogo.png' className='Logo'/>
        <div className='navText'>
          <h4>product</h4>
          <h4>contact</h4>
        </div>
      </nav>
      <img src='/src/private/welcomeText.png' className='welcomeText'/>
      <div className='midFoto'>
        <img src='/src/private/fullLogo.png' className='fullLogo'/>
        <img src='/src/private/selfFoto.png' className='
        selfFoto'/>
      </div>
      <div className='midText'>
        <img src='/src/private/textBrand.png' className='textBrand'/>
        <img src='/src/private/xIcon.png' className='xIcon'/>
        <img src='/src/private/selfName.png' className='selfName'/>
      </div>
      <div className='footerButton'>
      <Link to='/home'>
          <button className='bGoSite'>Go to Site</button>
      </Link>
        <button className='bAbout'>About ezaco</button>
        <button className='bAbout'>About me</button>
      </div>
    </div>
    )
} 

export default LandingPage