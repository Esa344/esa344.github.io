import React from 'react';
import ReactDOM from 'react-dom';
import stylink from 'function';

import Game from '/src/data/gameData.js';
import SourceCode from '/src/data/sourceData.js';
import Product from '/src/data/productData';

stylink('/src/page/innerWeb.css', 'mobile')

const InnerWeb = () => {
  return(
    <div className='innerWebCanvas'>
      <div className='ads'>ADS</div>
      <div className='gameBar'>
        <div className='textLabelBar'>
          <h2>Game</h2>
          <h2>more games</h2>
        </div>
        <div className='gameItems'>
          {Game.map((item, index) => (
            <div key={index} className='gameItem'>
              <img src={item.Image} className='gameImage'/>
              <h1 className='gameName'>{item.Name}</h1>
              <a href={item.Url} className='gameUrl'>play</a>
            </div>
          ))}
        </div>
      </div>
      <div className='souceBar'>
        <div className='textLabelBar'>
          <h2>Source code</h2>
          <h2>more code</h2>
        </div>
        <div className='sourceItems'>
          {SourceCode.map((item, index) => (
            <div key={index} className='sourceItem'>
              <img src={item.Image} className='sourceImage'/>
              <div className='sourceText'>
                <h1 className='sourceName'>{item.Name}</h1>
                <h4 className='sourceInfo'>size: {item.Info}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='ads'>ADS</div>
      <div className='productBar'>
        <div className='textLabelBar'>
          <h2>Product</h2>
          <h2>more products</h2>
        </div>
        <div className='productItems'>
          {Product.map((item, index) => (
            <div key={index} className='productItem'>
              <img src={item.Image} className='productImage'/>
              <h1 className='productName'>{item.Name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default InnerWeb