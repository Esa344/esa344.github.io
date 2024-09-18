import React from 'react';
import ReactDOM from 'react-dom';
import stylink from 'function';

import SourceCode from '/src/data/sourceData.js';

const SourcePage = () => {
  return(
    <div className='sourceCanvas'>
    <div className='ads'>
      ADS
    </div>
      <div className='sourcePageBar'>
        {SourceCode.map((item, index) => (
        <div key={index} className='sourceItem'
        style={{
          backgroundColor: '#525252',
          borderRadius: '3vw',
          padding: '1vw',
          width: '88vw',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <img src={item.Image} className='sourceImage'/>
            <div className='sourceText'
            style={{
              color: '#FFFAF6'
            }}>
              <h1 className='sourceName'>{item.Name}</h1>
              <h4 className='sourceInfo'>size: {item.Info}</h4>
           </div>
        </div>
       ))}          
      </div>
      <div className='ads'>
        ADS
      </div>
    </div>
    )
}

export default SourcePage