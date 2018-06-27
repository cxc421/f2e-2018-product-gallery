import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/Home.scss';

import IMG_1 from 'images/product-1.jpeg';
import IMG_2 from 'images/product-2.jpg';
import IMG_3 from 'images/product-3.jpg';
import IMG_4 from 'images/product-4.jpg';
import IMG_5 from 'images/product-5.jpg';
import IMG_6 from 'images/product-6.jpg';
import IMG_7 from 'images/product-7.jpg';

import GridLines from 'components/GridLines';
import Logo from 'components/Logo';

export default class Home extends React.Component {

  render() {
    return (
      <div className="home-page">

        <div className="header">
          <Logo />
          <h1>MEN’S TOPS</h1>
        </div>

        <div className="product-1">
          {
            // <GridLines rowNum={6} colNum={5} />
          }          
          <div className="border-box"></div>
          <Link to="/product/1" className="img-area">
            <img src={IMG_1} alt="product image 1" />
          </Link>
          <h2 className="title" text="LINEN BLAZER">LINEN BLAZER</h2>
          <div className="zebra-box"></div>
          <div className="number">01</div>
          <div className="title-2">Men's outfit</div>
        </div>
        <div className="product-2">
          {
            // <GridLines rowNum={4} colNum={3} />  
          }
          <div className="border-box"></div>
          <div className="solid-box"></div>
          <Link to="/product/2" className="img-area">
            <img src={IMG_2} alt="product image 2" />
          </Link>
          <h2 className="title" text="FREELIFT">FREELIFT</h2>
          <div className="title-2">Men's basics</div>
          <div className="number">02</div>
        </div>
        <div className="product-3">
          {
            // <GridLines rowNum={4} colNum={5} />           
          }
          <Link to="/product/3" className="img-area">
            <img src={IMG_3} alt="product image 3" />
          </Link>
          <div className="solid-box"></div>
          <div className="border-box"></div>
          <div className="number">03</div>
          <h2 className="title" text="SUPER SKINNY">SUPER SKINNY</h2>
          <div className="title-2">Men's pattern shirts</div>
        </div>
        <div className="product-4">
          {            
            // <GridLines rowNum={6} colNum={3} />
          }
          <div className="border-box"></div>
          <Link to="/product/4" className="img-area">
            <img src={IMG_4} alt="product image 4" />
          </Link>
          <div className="zebra-box"></div>
          <div className="number">04</div>
          <h2 className="title" text="DENIM">DENIM</h2>
          <div className="title-2">Men's cadual</div>
        </div>
        <div className="product-5">
          {            
            // <GridLines rowNum={4} colNum={5} />            
          }
          <div className="zebra-box"></div>
          <Link to="/product/5" className="img-area">
            <img src={IMG_5} alt="product image 5" />
          </Link>
          <h2 className="title" text="SWEATSHIRTS">SWEATSHIRTS</h2>
          <div className="border-box"></div>
          <div className="number">05</div>
          <div className="title-2">Men's jacket</div>
        </div>
        <div className="product-6">
          {            
            // <GridLines rowNum={6} colNum={5} />
          }
          <Link to="/product/6" className="img-area">
            <img src={IMG_6} alt="product image 6" />
          </Link>
          <div className="solid-box"></div>
          <div className="border-box"></div>
          <div className="title-2">Men's classic</div>
          <div className="number">06</div>
          <h2 className="title" text="VINTAGE DENIM">VINTAGE DENIM</h2>
        </div>
        <div className="product-7">
          {            
            // <GridLines rowNum={5} colNum={3} />
          }
          <Link to="/product/7" className="img-area">
            <img src={IMG_7} alt="product image 7" />
          </Link>
          <div className="border-box"></div>
          <div className="solid-box"></div>
          <h2 className="title" text="EDITION">EDITION</h2>
          <div className="number">07</div>
        </div>

      </div>
    );
  }

}