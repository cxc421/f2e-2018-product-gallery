import React from 'react';
import 'styles/Product.scss';

import GridLines from 'components/GridLines';
import Logo from 'components/Logo';

import IMG_6 from 'images/product-6.jpg';

export default class Product extends React.Component {

  render() {
    return (
      <div className="product-page">
        <GridLines rowNum={20} colNum={8} />

        <div className="prev-btn-area">
          <i className="fas fa-arrow-left"></i>
          <Logo />                    
        </div>

        <div className="product-block-1">
          <div className="solid-box"></div>   
          <div className="img-area">
            <img src={IMG_6} alt="product image 6"/>
          </div>     
          <div className="border-box"></div>
          <div className="text text-1">VINTAGE</div>
          <div className="text text-2">DENIM</div>
          <div className="text text-3">90</div>
          <div className="text text-4">TOP</div>
        </div>

        <div className="product-block-2"></div>

        <div className="product-block-3"></div>

      </div>
    );
  }

}