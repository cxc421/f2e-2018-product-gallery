import React from 'react';

const GridLines = ({rowNum, colNum}) => {
  let arr = [];
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      arr.push(<div key={i * colNum + j} style={{
        gridArea: `${i + 1} / ${j + 1} / span 1 / span 1`,
        border: 'dashed 1px rgba(0,0,0,.2)'
      }}></div>);
    }
  }
  return arr;
}

export default GridLines;