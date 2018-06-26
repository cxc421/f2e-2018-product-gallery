import React from 'react';
import 'styles/App.scss';

import IMG_1 from 'images/product-1.jpeg';
import IMG_2 from 'images/product-2.jpg';
import IMG_3 from 'images/product-3.jpg';

class App extends React.Component {

  renderGridLines(rowNum, colNum) {
    let arr = [];
    for(let i = 0; i < rowNum; i++) {
      for(let j = 0; j < colNum; j++) {
        arr.push(<div key={i*colNum + j} style={{
          gridArea: `${ i + 1 } / ${ j + 1 } / span 1 / span 1`,
          border: 'dashed 1px rgba(0,0,0,.2)'
        }}></div>);
      }
    }
    return arr;
  }

  render() {
    return (
      <div className="app">

        <div className="header">
          <div className="logo">CCCLOTHES</div>
          <h1>MEN’S TOPS</h1>          
        </div>

        <div className="product-1">
          {
            // this.renderGridLines(6, 5)           
          }
          <div className="border-box"></div>
          <div className="img-area">
            <img src={IMG_1} alt="product image 1"/>
          </div>
          <h2 className="title" text="LINEN BLAZER">LINEN BLAZER</h2>
          <div className="zebra-box"></div>
          <div className="number">01</div>
          <div className="title-2">Men's outfit</div>
        </div>
        <div className="product-2">
          {
            // this.renderGridLines(4, 3)           
          }     
          <div className="border-box"></div>
          <div className="solid-box"></div>
          <div className="img-area">
            <img src={IMG_2} alt="product image 2" />
          </div>          
          <h2 className="title" text="FREELIFT">FREELIFT</h2>
          <div className="title-2">Men's basics</div>
          <div className="number">02</div>
        </div>
        <div className="product-3">
          {
            // this.renderGridLines(4, 5)           
          }         
          <div className="img-area">
            <img src={IMG_3} alt="product image 3" />
          </div>   
          <div className="solid-box"></div>   
          <div className="border-box"></div> 
          <div className="number">03</div>
          <h2 className="title" text="SUPER SKINNY">SUPER SKINNY</h2>
          <div className="title-2">Men's pattern shirts</div>                        
        </div>
        <div className="product-4">       
        </div>
        <div className="product-5"></div>
        <div className="product-6"></div>
        <div className="product-7"></div>

      </div>
    );    
  }
}

export default App;