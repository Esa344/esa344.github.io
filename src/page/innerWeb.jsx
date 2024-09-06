import React from 'react';
import ReactDOM from 'react-dom';
import stylink from 'function';

stylink('/src/page/innerWeb.css', 'mobile')

const InnerWeb = () => {
  return(
    <div className='innerWebCanvas'>
      <div className='ads'>ADS</div>
    </div>
    )
}

export default InnerWeb