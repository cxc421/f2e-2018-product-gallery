import React from 'react';
import 'styles/App.scss';

import IMG_1 from 'images/product-1.jpeg';
import IMG_2 from 'images/product-2.jpg';
import IMG_3 from 'images/product-3.jpg';
import IMG_4 from 'images/product-4.jpg';
import IMG_5 from 'images/product-5.jpg';
import IMG_6 from 'images/product-6.jpg';
import IMG_7 from 'images/product-7.jpg';

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
          {
            // this.renderGridLines(6, 3)
          }     
          <div className="border-box"></div>
          <div className="img-area">
            <img src={IMG_4} alt="product image 4" />
          </div>     
          <div className="zebra-box"></div>   
          <div className="number">04</div>  
          <h2 className="title" text="DENIM">DENIM</h2>
          <div className="title-2">Men's cadual</div>
        </div>
        <div className="product-5">
          {
            // this.renderGridLines(4, 5)
          }  
          <div className="zebra-box"></div>      
          <div className="img-area">
            <img src={IMG_5} alt="product image 5" />
          </div>
          <h2 className="title" text="SWEATSHIRTS">SWEATSHIRTS</h2>
          <div className="border-box"></div>
          <div className="number">05</div>
          <div className="title-2">Men's jacket</div>
        </div>
        <div className="product-6">
          {
            // this.renderGridLines(6, 5)
          }          
          <div className="img-area">
            <img src={IMG_6} alt="product image 6" />
          </div>          
          <div className="solid-box"></div>
          <div className="border-box"></div>
          <div className="title-2">Men's classic</div>
          <div className="number">06</div>
          <h2 className="title" text="VINTAGE DENIM">VINTAGE DENIM</h2>
        </div>
        <div className="product-7">
          {
            this.renderGridLines(5, 3)
          }      
          <div className="img-area">
            <img src={IMG_7} alt="product image 7" />
          </div>     
          <div className="border-box"></div>   
          <div className="solid-box"></div>    
          <h2 className="title" text="EDITION">EDITION</h2>  
          <div className="number">07</div>
        </div>

      </div>
    );    
  }
}

export default App;