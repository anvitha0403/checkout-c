import React, { useState } from 'react'
 
const Counter=()=> {
    const handle = (num) => {
        console.log(num)
        
        setnum((prev) => {
        if (prev === 0&&num===-1) {
          return prev;
        }
    return prev + num;
    });
  };
    const [num, setnum] = useState(1);
  return (
    <div className="counter">
      <div
        className="counter-sym"
        onClick={() => {
          handle(1)
        }}
      >
        +
      </div>
      <div className="num">{num}</div>

      <div
        className="counter-sym"
        onClick={() => {
          handle(-1)
        }}
          >
              -
        
      </div>
    </div>
    );
    
}

export default Counter;
