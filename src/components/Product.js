import React from 'react';
import 'styles/Product.scss';

import GridLines from 'components/GridLines';
import Logo from 'components/Logo';

import IMG_6 from 'images/product-6.jpg';
import IMG_6_1 from 'images/product-6-1.jpg';
import IMG_6_2 from 'images/product-6-2.jpg';

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

        <div className="product-block-2">
          <h1 className="title-1">VINTAGE DENIM</h1>
          <h2 className="title-2">Kogi Cosby sweater ethical squid irony</h2>
          <h3 className="title-3">PRODUCT DETAILS</h3>
          <p className="content">
          In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene. 
  <br/>
            <br />
  We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back, the blubber-hook was inserted into the original hole there cut by the spades of the mates. But how did so clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer.
          </p>
        </div>

        <div className="product-block-3">
          <div className="img-area img-1">
            <img src={IMG_6_2} alt="image 6-2"/>
          </div>
        </div>

      </div>
    );
  }

}