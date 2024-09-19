import React from 'react';
import ReactDOM from 'react-dom';
import stylink from 'function';

import Product from '/src/data/productData';

stylink('/src/page/product.css', 'mobile')

const ProductPage = () => {
  return (
    <div className='productCanvas'>
      <div className='ads'>
        ADS
      </div>
      {Product.map((item, index) => (
        <div key={index} className='productItem' style={{
            width:'85vw',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}>
          <img src={item.Image} className='productImage'/>
          <h1 className='productName'>{item.Name}</h1>
        </div>
      ))}      
      <div className='ads'>
        ADS
      </div>
    </div>
  )
}

export default ProductPage